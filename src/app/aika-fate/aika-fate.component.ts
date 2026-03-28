import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FateConfig {
    lv: number;
    exp: number;
    ticket: number;
    caret: number;
    enableDailyCaretPull: boolean;
    dailyCaretPulled: boolean;
    maxSimulations: number;
    startTime: string;
    endTime: string;
}


class Pull {
    // pull
    date: Date;
    // ticket: number = 0;
    // caret: number = 0;
    costTicket: number = 0;
    costCaret: number = 0;
    expAdd: number = 0;
    count: number = 0;
    pullLv: number = 0;
    pullExp: number = 0;
    pullTargetRate: number = 0;
    pullMissRate: number = 0;
    pullSuccess: boolean = false;
    afterDate: Date;
    afterTicket: number = 0;
    afterCaret: number = 0;
    // 這次抽卡之後，是否還有每日克拉抽卡的機會（每天只能抽一次）
    afterCanDailyCaretPull: boolean = false;
    afterLv: number = 0;
    afterExp: number = 0;

    // 檢查資源是否耗盡
    checkResourceExhausted(): boolean {
        return this.afterTicket <= 0 && this.afterCaret < 15;
    }
    checkEndTime(endDate: Date): boolean {
        return this.afterDate >= endDate;
    }
}
class Action {
    // pull
    pulls: Pull[] = [];
    validPulls: Pull[] = [];
    totalPullCount: number = 0;
    totalCostTicket: number = 0;
    totalCostCaret: number = 0;
    avgPullRate: number = 0;
    score: number = 0;
}

class PullPathWorkItem {
    constructor(
        public date: Date,
        public endDate: Date,
        public ticket: number,
        public caret: number,
        public enableDailyCaretPull: boolean,
        public dailyCaretPull: boolean,
        public lv: number,
        public exp: number,
        public prevPulls: Pull[]
    ) { }
}
@Component({
    selector: 'app-aika-fate',
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-fate.component.html',
    styleUrl: './aika-fate.component.scss'
})
export class AikaFateComponent implements OnInit {

    targetRate = [0.02, 0.0267, 0.0334, 0.04, 0.0467, 0.0534, 0.06, 0.08, 0.12, 0.2];
    otherRate = [0.01, 0.0133, 0.0166, 0.02, 0.0233, 0.0266, 0.03, 0.04, 0.06, 0.1];

    private readonly configStorageKey = 'aika-fate-config-v1';

    private createDefaultConfig(): FateConfig {
        const now = new Date();
        const endTime = new Date(now);
        endTime.setDate(endTime.getDate() + 1);
        return {
            lv: 1,
            exp: 0,
            ticket: 0,
            caret: 0,
            enableDailyCaretPull: true,
            dailyCaretPulled: false,
            maxSimulations: 100000,
            startTime: this.formatDateTimeLocal(now),
            endTime: this.formatDateTimeLocal(endTime),
        };
    }

    config: FateConfig = this.createConfigProxy(this.loadConfig());

    simulatedCount: number = 0;
    simulateAllStop: boolean = false;

    resultTop10Actions: Action[] = [];

    constructor() { }


    ngOnInit(): void {
        this.saveConfig();
    }

    setStartDateToday(): void {
        this.config.startTime = this.formatDateTimeLocal(new Date());
    }
    setEndTime1459(): void {
        // 把結束時間轉到 "時區UTC+9" 的 "當天" "14:59" ，之後在轉回本地時間
        const baseDate = this.parseDateTimeLocal(this.config.endTime);

        // 先把時間基準轉為 UTC，再換算成 UTC+9 的年月日
        const utcMs = baseDate.getTime() + baseDate.getTimezoneOffset() * 60 * 1000;
        const utc9Ms = utcMs + 9 * 60 * 60 * 1000;
        const utc9Date = new Date(utc9Ms);

        const y = utc9Date.getUTCFullYear();
        const m = utc9Date.getUTCMonth();
        const d = utc9Date.getUTCDate();

        // UTC+9 14:59 = UTC 05:59
        const targetUtcMs = Date.UTC(y, m, d, 14 - 9, 59, 0, 0);
        const localDate = new Date(targetUtcMs);

        this.config.endTime = this.formatDateTimeLocal(localDate);
    }
    logConfig(): void {
        console.log('當前配置:', this.config);
    }

    private createConfigProxy(config: FateConfig): FateConfig {
        return new Proxy(config, {
            set: (target, property, value) => {
                const result = Reflect.set(target, property, value);
                this.saveConfig();
                return result;
            }
        });
    }

    private normalizeConfig(raw: unknown): FateConfig {
        const defaults = this.createDefaultConfig();
        if (!raw || typeof raw !== 'object') {
            return defaults;
        }

        const data = raw as Record<string, unknown>;
        const normalized: FateConfig = {
            lv: typeof data['lv'] === 'number' ? data['lv'] : defaults.lv,
            exp: typeof data['exp'] === 'number' ? data['exp'] : defaults.exp,
            ticket: typeof data['ticket'] === 'number' ? data['ticket'] : defaults.ticket,
            caret: typeof data['caret'] === 'number' ? data['caret'] : defaults.caret,
            enableDailyCaretPull: typeof data['enableDailyCaretPull'] === 'boolean' ? data['enableDailyCaretPull'] : defaults.enableDailyCaretPull,
            dailyCaretPulled: typeof data['dailyCaretPulled'] === 'boolean' ? data['dailyCaretPulled'] : defaults.dailyCaretPulled,
            maxSimulations: typeof data['maxSimulations'] === 'number' ? data['maxSimulations'] : defaults.maxSimulations,
            startTime: typeof data['startTime'] === 'string' && data['startTime'] ? data['startTime'] : defaults.startTime,
            endTime: typeof data['endTime'] === 'string' && data['endTime'] ? data['endTime'] : defaults.endTime,
        };

        normalized.lv = Math.max(1, Math.min(9, Math.floor(normalized.lv)));
        normalized.exp = Math.max(0, Math.floor(normalized.exp));
        normalized.ticket = Math.max(0, Math.floor(normalized.ticket));
        normalized.caret = Math.max(0, Math.floor(normalized.caret));
        normalized.maxSimulations = Math.max(1, Math.floor(normalized.maxSimulations));

        if (Number.isNaN(this.parseDateTimeLocal(normalized.startTime).getTime())) {
            normalized.startTime = defaults.startTime;
        }
        if (Number.isNaN(this.parseDateTimeLocal(normalized.endTime).getTime())) {
            normalized.endTime = defaults.endTime;
        }

        return normalized;
    }

    private loadConfig(): FateConfig {
        try {
            const stored = localStorage.getItem(this.configStorageKey);
            if (!stored) {
                return this.createDefaultConfig();
            }
            const parsed: unknown = JSON.parse(stored);
            return this.normalizeConfig(parsed);
        } catch (error) {
            console.warn('讀取設定失敗，改用預設值。', error);
            return this.createDefaultConfig();
        }
    }

    private saveConfig(): void {
        try {
            localStorage.setItem(this.configStorageKey, JSON.stringify(this.config));
        } catch (error) {
            console.warn('儲存設定失敗。', error);
        }
    }

    formatDateTimeLocal(date: Date): string {
        const pad2 = (value: number) => String(value).padStart(2, '0');
        return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}T${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
    }

    parseDateTimeLocal(value: string): Date {
        if (!value) {
            return new Date();
        }
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            return new Date();
        }
        return date;
    }


    calcLvExp(lv: number, exp: number, expAdd: number): { lv: number, exp: number } {
        exp += expAdd;
        if (exp >= 380) {
            lv += Math.floor(exp / 380);
            exp = exp % 380;
            if (lv >= 9) {
                lv = 9;
                exp = 0;
            }
        }

        return { lv, exp };
    }
    createPull(
        date: Date,
        ticket: number, caret: number,
        costTicket: number, costCaret: number, count: number,
        lv: number, exp: number,
        pullSuccess: boolean): Pull {
        const pull = new Pull();
        pull.date = date;
        // pull.ticket = ticket;
        // pull.caret = caret;
        pull.costTicket = costTicket;
        pull.costCaret = costCaret;
        pull.expAdd = costCaret;
        pull.count = count;

        pull.afterTicket = ticket - costTicket;
        pull.afterCaret = caret - costCaret;
        if (pull.costCaret == 15) {
            pull.afterCanDailyCaretPull = false;
        }

        const lvExp = this.calcLvExp(lv, exp, pull.expAdd);
        pull.pullLv = lvExp.lv;
        pull.pullExp = lvExp.exp;
        pull.pullTargetRate = this.targetRate[lvExp.lv - 1];
        pull.pullMissRate = this.otherRate[lvExp.lv - 1];
        pull.pullSuccess = pullSuccess;

        pull.afterLv = pull.pullLv;
        pull.afterExp = pull.pullExp;
        if (pull.pullSuccess) {
            pull.afterLv = 1;
        }
        pull.afterDate = date;
        // 沒進行抽卡，直接到下一天，重置每日特價克拉抽卡機會
        if (pull.count == 0) {
            const afterDate = new Date(date);
            afterDate.setDate(date.getDate() + 1);
            afterDate.setHours(0);
            afterDate.setMinutes(0);
            pull.afterDate = afterDate;
            pull.afterCanDailyCaretPull = true;
        }

        return pull;
    }
    getPossiblePulls(ticket: number, caret: number, enableDailyCaretPull: boolean, dailyCaretPull: boolean, lv: number, exp: number, date: Date, endDate: Date): Pull[] {
        const pulls: Pull[] = [];
        for (let i = 0; i < 2; i++) {
            const pullSuccess = i == 1;
            // 每日克拉1抽
            if (enableDailyCaretPull && caret >= 15 && dailyCaretPull) {
                pulls.push(this.createPull(date, ticket, caret, 0, 15, 1, lv, exp, pullSuccess));
            }
            // 克拉11連
            if (caret >= 380) {
                pulls.push(this.createPull(date, ticket, caret, 0, 380, 11, lv, exp, pullSuccess));
            }
            // 克拉1抽
            if (caret >= 38) {
                pulls.push(this.createPull(date, ticket, caret, 0, 38, 1, lv, exp, pullSuccess));
            }
            // 角色票11連
            if (ticket >= 10) {
                pulls.push(this.createPull(date, ticket, caret, 10, 0, 11, lv, exp, pullSuccess));
            }
            // 角色票1抽
            else if (ticket > 0) {
                pulls.push(this.createPull(date, ticket, caret, 1, 0, 1, lv, exp, pullSuccess));
            }
        }
        // 無動作，進行到下一天
        if (date < endDate) {
            pulls.push(this.createPull(date, ticket, caret, 0, 0, 0, lv, exp, false));
        }
        return pulls;
    }



    simulatePullPath(actions: Action[]): void {
        // 使用迭代式而不是遞迴，避免棧溢出
        const workStack: PullPathWorkItem[] = [];

        const startDate = this.parseDateTimeLocal(this.config.startTime);
        const endDate = this.parseDateTimeLocal(this.config.endTime);

        // 初始化工作项
        workStack.push(new PullPathWorkItem(
            startDate, endDate,
            this.config.ticket, this.config.caret,
            this.config.enableDailyCaretPull, this.config.dailyCaretPulled,
            this.config.lv, this.config.exp,
            []
        ));

        while (workStack.length > 0) {
            if (this.simulateAllStop) {
                return;
            }

            const workItem = workStack.pop()!;

            this.simulatedCount++;
            if (this.simulatedCount > this.config.maxSimulations) {
                this.simulateAllStop = true;
                console.log(`已達到最大模擬次數 ${this.config.maxSimulations}，停止模擬。`);
                return;
            }
            if (this.simulatedCount % 10000 === 0) {
                console.log(`模擬中...: ${this.simulatedCount}`);
            }

            const possiblePulls = this.getPossiblePulls(
                workItem.ticket, workItem.caret,
                workItem.enableDailyCaretPull, workItem.dailyCaretPull,
                workItem.lv, workItem.exp,
                workItem.date, workItem.endDate
            );

            for (const pull of possiblePulls) {
                if (this.simulateAllStop) {
                    return;
                }

                const newPullPath = [...workItem.prevPulls, pull];

                if (pull.checkResourceExhausted() || pull.checkEndTime(workItem.endDate)) {
                    const action = new Action();
                    action.pulls = newPullPath;
                    const validPulls = newPullPath.filter(p => p.count > 0);
                    action.totalPullCount = validPulls.reduce((sum, p) => sum + p.count, 0);
                    action.totalCostTicket = validPulls.reduce((sum, p) => sum + p.costTicket, 0);
                    action.totalCostCaret = validPulls.reduce((sum, p) => sum + p.costCaret, 0);
                    action.avgPullRate = validPulls.reduce((sum, p) => sum + p.pullTargetRate * p.count, 0) / action.totalPullCount;
                    actions.push(action);
                } else {
                    // 將新的工作項推入堆棧而不是遞迴調用
                    workStack.push(new PullPathWorkItem(
                        pull.afterDate, workItem.endDate,
                        pull.afterTicket, pull.afterCaret,
                        workItem.enableDailyCaretPull, pull.afterCanDailyCaretPull,
                        pull.afterLv, pull.afterExp,
                        newPullPath
                    ));
                }
            }
        }
    }

    private calcActionScore(action: Action, maxCaretCost: number, maxTicketCost: number): number {
        const rateScale = 100000000;
        const scaledRate = Math.round(action.avgPullRate * rateScale);

        // 消耗越低分數越高
        const caretScore = maxCaretCost - action.totalCostCaret;
        const ticketScore = maxTicketCost - action.totalCostTicket;

        // 權重保證重要程度：出貨率 > 克拉消耗 > 票消耗
        const ticketWeight = 1;
        const caretWeight = maxTicketCost + 1;
        const rateWeight = (maxCaretCost + 1) * caretWeight;

        return scaledRate * rateWeight + caretScore * caretWeight + ticketScore * ticketWeight;
    }

    run(): void {
        this.simulatedCount = 0;
        this.simulateAllStop = false;

        let actions: Action[] = [];
        this.simulatePullPath(actions);

        // actions 可能非常大，避免使用展開參數造成 call stack overflow
        if (actions.length === 0) {
            this.resultTop10Actions = [];
            console.log('模擬完成！沒有可用路徑。');
            return;
        }

        actions = actions.filter(a => a.totalPullCount > 0);
        let maxCaretCost = 0;
        let maxTicketCost = 0;
        let maxTotalPullCount = 0;
        for (const action of actions) {
            if (action.totalCostCaret > maxCaretCost) {
                maxCaretCost = action.totalCostCaret;
            }
            if (action.totalCostTicket > maxTicketCost) {
                maxTicketCost = action.totalCostTicket;
            }
            if (action.totalPullCount > maxTotalPullCount) {
                maxTotalPullCount = action.totalPullCount;
            }
        }
        actions = actions.filter(a => a.totalPullCount == maxTotalPullCount);

        for (const action of actions) {
            action.score = this.calcActionScore(action, maxCaretCost, maxTicketCost);
        }

        actions.sort((a, b) => b.score - a.score);

        const bestTop10 = [];
        for (const action of actions) {
            action.validPulls = action.pulls.filter(p => p.count > 0);
            bestTop10.push(action);
            if (bestTop10.length >= 10) {
                break;
            }
        }
        this.resultTop10Actions = bestTop10;

        const bestAction = bestTop10[0];
        const bestAvgPullRate = bestAction ? bestAction.avgPullRate : 0;

        console.log(`模擬完成！總路徑數: ${actions.length}，最佳平均抽卡率: ${(bestAvgPullRate * 100).toFixed(2)}%，最高評分: ${bestAction?.score ?? 0}`);
        console.log(`最佳路徑前10筆:`, bestTop10);
    }
}

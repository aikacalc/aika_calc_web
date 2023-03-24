import { Component, OnInit } from '@angular/core';
import { StageReward } from '../model/stage-reward';
import { Actress } from '../model/actress';
import { StageRewardFan } from '../model/stage-reward-fan';
import { FanRoad } from '../model/fan-road';
import { AppService } from '../app.service';

@Component({
    selector: 'app-aika-fan-reach-calc',
    templateUrl: './aika-fan-reach-calc.component.html',
    styleUrls: ['./aika-fan-reach-calc.component.scss']
})
export class AikaFanReachCalcComponent implements OnInit {
    actress: Actress[] = [];
    stageReward = {
        lv10s1: Object.assign(new StageRewardFan(), { fan: 110, characterRare: 1, stageName: 'lv10' }),
        lv10s2: Object.assign(new StageRewardFan(), { fan: 147, characterRare: 2, stageName: 'lv10' }),
        lv10s3: Object.assign(new StageRewardFan(), { fan: 184, characterRare: 3, stageName: 'lv10' }),
        lv10s4: Object.assign(new StageRewardFan(), { fan: 220, characterRare: 4, stageName: 'lv10' }),
        lv20s1: Object.assign(new StageRewardFan(), { fan: 112, characterRare: 1, stageName: 'lv20' }),
        lv20s2: Object.assign(new StageRewardFan(), { fan: 150, characterRare: 2, stageName: 'lv20' }),
        lv20s3: Object.assign(new StageRewardFan(), { fan: 188, characterRare: 3, stageName: 'lv20' }),
        lv20s4: Object.assign(new StageRewardFan(), { fan: 225, characterRare: 4, stageName: 'lv20' }),
        lv30vws1: Object.assign(new StageRewardFan(), { fan: 115, characterRare: 1, stageName: 'lv30-vw' }),
        lv30vws2: Object.assign(new StageRewardFan(), { fan: 153, characterRare: 2, stageName: 'lv30-vw' }),
        lv30vws3: Object.assign(new StageRewardFan(), { fan: 192, characterRare: 3, stageName: 'lv30-vw' }),
        lv30vws4: Object.assign(new StageRewardFan(), { fan: 230, characterRare: 4, stageName: 'lv30-vw' }),
        lv40vws1: Object.assign(new StageRewardFan(), { fan: 117, characterRare: 1, stageName: 'lv40-vw' }),
        lv40vws2: Object.assign(new StageRewardFan(), { fan: 156, characterRare: 2, stageName: 'lv40-vw' }),
        lv40vws3: Object.assign(new StageRewardFan(), { fan: 196, characterRare: 3, stageName: 'lv40-vw' }),
        lv40vws4: Object.assign(new StageRewardFan(), { fan: 235, characterRare: 4, stageName: 'lv40-vw' }),
        lv30hbs1: Object.assign(new StageRewardFan(), { fan: 150, characterRare: 1, stageName: 'lv30-蛇' }),
        lv30hbs2: Object.assign(new StageRewardFan(), { fan: 200, characterRare: 2, stageName: 'lv30-蛇' }),
        lv30hbs3: Object.assign(new StageRewardFan(), { fan: 250, characterRare: 3, stageName: 'lv30-蛇' }),
        lv30hbs4: Object.assign(new StageRewardFan(), { fan: 300, characterRare: 4, stageName: 'lv30-蛇' }),
        lv40hbs1: Object.assign(new StageRewardFan(), { fan: 153, characterRare: 1, stageName: 'lv40-蛇' }),
        lv40hbs2: Object.assign(new StageRewardFan(), { fan: 204, characterRare: 2, stageName: 'lv40-蛇' }),
        lv40hbs3: Object.assign(new StageRewardFan(), { fan: 255, characterRare: 3, stageName: 'lv40-蛇' }),
        lv40hbs4: Object.assign(new StageRewardFan(), { fan: 306, characterRare: 4, stageName: 'lv40-蛇' }),
    }
    stageRewardFans: StageRewardFan[] = [
        this.stageReward.lv10s1, this.stageReward.lv10s2, this.stageReward.lv10s3, this.stageReward.lv10s4,
        this.stageReward.lv20s1, this.stageReward.lv20s2, this.stageReward.lv20s3, this.stageReward.lv20s4,
        this.stageReward.lv30vws1, this.stageReward.lv30vws2, this.stageReward.lv30vws3, this.stageReward.lv30vws4,
        this.stageReward.lv40vws1, this.stageReward.lv40vws2, this.stageReward.lv40vws3, this.stageReward.lv40vws4,
        this.stageReward.lv30hbs1, this.stageReward.lv30hbs2, this.stageReward.lv30hbs3, this.stageReward.lv30hbs4,
        this.stageReward.lv40hbs1, this.stageReward.lv40hbs2, this.stageReward.lv40hbs3, this.stageReward.lv40hbs4,
    ];
    stageSelected: StageRewardFan[] = [];
    enableActressRare: { [key: number]: boolean } = {
        1: true,
        2: true,
        3: true,
        4: true,
    };



    tipClacDeep = `計算深度
1 已經很足夠
2 開始瀏覽器可能會有點卡頓
3 這數字以上會嚴重卡死 甚至當機`;
    maxCalcDeep: number = 1;
    maxSingleTaskCount: number = 10;
    inputCurrentFan: number = 12345;
    inputTargetFan: number = 1999999;
    resultRoads: FanRoad[][] = [];
    charaRareStar = {
        1:'★',
        2:'★★',
        3:'★★★',
        4:'★★★★',
    }


    constructor(
        public service: AppService
    ) { }

    ngOnInit(): void {
        // const _lf = 123456 - Math.floor(Math.random() * 123456);
        // const result = this.calcRoad(this.stageRewardFans, 0, _lf, 0);
        // result.sort((a, b) => {
        //     const countA = a.reduce((p, c) => p + c.count, 0);
        //     const countB = b.reduce((p, c) => p + c.count, 0);
        //     // return countB - countA;
        //     return countA - countB;
        // });
        // console.log(result);
        // this.actress.push(new Actress());
        this.stageSelected = [
            this.stageReward.lv10s1, this.stageReward.lv10s2, this.stageReward.lv10s3, this.stageReward.lv10s4,
            this.stageReward.lv20s1, this.stageReward.lv20s2, this.stageReward.lv20s3, this.stageReward.lv20s4,
            this.stageReward.lv30vws1, this.stageReward.lv30vws2, this.stageReward.lv30vws3, this.stageReward.lv30vws4,
            this.stageReward.lv40vws1, this.stageReward.lv40vws2, this.stageReward.lv40vws3, this.stageReward.lv40vws4
        ];

        this.addActress();
        this.runCalc(this.actress[0]);
    }

    addActress(): void {
        this.actress.push(new Actress());
    }
    removeActress(a: Actress): void {
        const i = this.actress.indexOf(a);
        this.actress = this.actress.splice(i, 1);
    }
    updateStageCharacterRare(): void {
        this.stageSelected = this.stageRewardFans.filter(s => this.enableActressRare[s.characterRare]);
    }



    runCalc(a: Actress): void {
        const leftFans = a.fanTarget - a.fan;
        if (leftFans < 0) {
            this.resultRoads = [];
            return;
        }

        const useStages = this.stageSelected;
        // if (useStages.length < 2) {
        //     alert('至少選2個關卡');
        //     return;
        // }
        const result = this.calcRoad(useStages, 0, a.fan, leftFans, 0);
        result.sort((a, b) => {
            const countA = a.reduce((p, c) => p + c.count, 0);
            const countB = b.reduce((p, c) => p + c.count, 0);
            return countA - countB;
        });
        a.fanReachRoads = result;
    }
    calcRoad(
        stages: StageRewardFan[],
        stageStartIndex: number,
        currentFans: number,
        leftFans: number,
        deepIndex: number
    ): FanRoad[][] {
        if (leftFans == 0) {
            return [];
        }
        if (leftFans < 0) {
            throw new Error('fan < 0, ' + leftFans);
        }
        if (deepIndex > this.maxCalcDeep) {
            throw new Error("calc too deep " + deepIndex + ', max:' + this.maxCalcDeep);
        }

        const result: FanRoad[][] = [];
        let road: FanRoad[] = []

        for (let i = stageStartIndex; i < stages.length; i++) {
            const stage = stages[i];

            // option1
            const calc1 = leftFans % stage.fan;
            if (calc1 == 0) {
                const stageCount = leftFans / stage.fan;
                // push result
                road.push({
                    stage: stage,
                    count: stageCount,
                    fanChange: `${currentFans} -> ${currentFans + leftFans}`
                });
                result.push(road);
                road = [];
                continue;
                // return result;
            }

            // option2
            for (let count = 1; count < this.maxSingleTaskCount; count++) {
                const subFans = stage.fan * count;
                const leftFans1 = leftFans - subFans;

                if (leftFans1 == 0) {
                    road.push({
                        stage: stage,
                        count: count,
                        fanChange: `${currentFans} -> ${currentFans + subFans}`
                    });
                    result.push(road);
                    road = [];
                    break;
                    // return result;
                }

                if (leftFans1 < 0) {
                    break;
                }

                if ((deepIndex + 1) <= this.maxCalcDeep) {
                    const nextStageIndex = stageStartIndex + 1;
                    const nextDeepIndex = deepIndex + 1;
                    const nextCurrentFans = currentFans + subFans;
                    const deepResult = this.calcRoad(stages, nextStageIndex, nextCurrentFans, leftFans1, nextDeepIndex);
                    if (deepResult.length == 0) {
                        continue;
                    } else {
                        road.push({
                            stage: stage,
                            count: count,
                            fanChange: `${currentFans} -> ${currentFans + subFans}`
                        });
                        deepResult.forEach(roads => {
                            roads.splice(0, 0, ...road);
                        });
                        result.push(...deepResult);
                        road = [];
                        // return result;
                        break;
                    }
                }
            }
        }

        return result;
    }

}

import { Component, OnInit } from '@angular/core';
import { StageReward } from '../model/stage-reward';
import { Actress } from '../model/actress';
import { StageRewardFan } from '../model/stage-reward-fan';

@Component({
    selector: 'app-aika-fan-reach-calc',
    templateUrl: './aika-fan-reach-calc.component.html',
    styleUrls: ['./aika-fan-reach-calc.component.scss']
})
export class AikaFanReachCalcComponent implements OnInit {
    actress: Actress[] = [];
    stageRewardFans: StageRewardFan[] = [
        Object.assign(new StageRewardFan(), { fan: 110, characterRare: 1, stageName: 'lv10' }),
        Object.assign(new StageRewardFan(), { fan: 147, characterRare: 2, stageName: 'lv10' }),
        Object.assign(new StageRewardFan(), { fan: 184, characterRare: 3, stageName: 'lv10' }),
        Object.assign(new StageRewardFan(), { fan: 220, characterRare: 4, stageName: 'lv10' }),

        Object.assign(new StageRewardFan(), { fan: 112, characterRare: 1, stageName: 'lv20' }),
        Object.assign(new StageRewardFan(), { fan: 150, characterRare: 2, stageName: 'lv20' }),
        Object.assign(new StageRewardFan(), { fan: 188, characterRare: 3, stageName: 'lv20' }),
        Object.assign(new StageRewardFan(), { fan: 225, characterRare: 4, stageName: 'lv20' }),

        Object.assign(new StageRewardFan(), { fan: 115, characterRare: 1, stageName: 'lv30-VW' }),
        Object.assign(new StageRewardFan(), { fan: 153, characterRare: 2, stageName: 'lv30-VW' }),
        Object.assign(new StageRewardFan(), { fan: 192, characterRare: 3, stageName: 'lv30-VW' }),
        Object.assign(new StageRewardFan(), { fan: 230, characterRare: 4, stageName: 'lv30-VW' }),

        Object.assign(new StageRewardFan(), { fan: 117, characterRare: 1, stageName: 'lv40-VW' }),
        Object.assign(new StageRewardFan(), { fan: 156, characterRare: 2, stageName: 'lv40-VW' }),
        Object.assign(new StageRewardFan(), { fan: 196, characterRare: 3, stageName: 'lv40-VW' }),
        Object.assign(new StageRewardFan(), { fan: 235, characterRare: 4, stageName: 'lv40-VW' }),

        Object.assign(new StageRewardFan(), { fan: 150, characterRare: 1, stageName: 'lv30-蛇' }),
        Object.assign(new StageRewardFan(), { fan: 200, characterRare: 2, stageName: 'lv30-蛇' }),
        Object.assign(new StageRewardFan(), { fan: 250, characterRare: 3, stageName: 'lv30-蛇' }),
        Object.assign(new StageRewardFan(), { fan: 300, characterRare: 4, stageName: 'lv30-蛇' }),

        Object.assign(new StageRewardFan(), { fan: 153, characterRare: 1, stageName: 'lv40-蛇' }),
        Object.assign(new StageRewardFan(), { fan: 204, characterRare: 2, stageName: 'lv40-蛇' }),
        Object.assign(new StageRewardFan(), { fan: 255, characterRare: 3, stageName: 'lv40-蛇' }),
        Object.assign(new StageRewardFan(), { fan: 306, characterRare: 4, stageName: 'lv40-蛇' }),
    ];
    maxCalcDeep: number = 1;
    maxSingleTaskCount: number = 10;
    inputCurrentFan: number = 12345;
    inputTargetFan: number = 1999999;
    resultRoads: { stage: StageRewardFan, count: number }[][] = [];

    constructor() { }

    ngOnInit(): void {
        const _lf = 123456 - Math.floor(Math.random() * 123456);
        const result = this.calcRoad(this.stageRewardFans, 0, _lf, 0);
        result.sort((a, b) => {
            const countA = a.reduce((p, c) => p + c.count, 0);
            const countB = b.reduce((p, c) => p + c.count, 0);
            // return countB - countA;
            return countA - countB;
        });
        console.log(result);
    }
    runCalc(): void {
        const leftFans = this.inputTargetFan - this.inputCurrentFan;
        if (leftFans < 0) {
            this.resultRoads = [];
            return;
        }

        const result = this.calcRoad(this.stageRewardFans, 0, leftFans, 0);
        result.sort((a, b) => {
            const countA = a.reduce((p, c) => p + c.count, 0);
            const countB = b.reduce((p, c) => p + c.count, 0);
            return countA - countB;
        });
        this.resultRoads = result;
    }
    calcRoad(
        stages: StageRewardFan[],
        stageStartIndex: number,
        leftFans: number,
        deepIndex: number
    ): { stage: StageRewardFan, count: number }[][] {
        if (leftFans == 0) {
            return [];
        }
        if (leftFans < 0) {
            throw new Error('fan < 0, ' + leftFans);
        }
        if (deepIndex > this.maxCalcDeep) {
            throw new Error("calc too deep " + deepIndex + ', max:' + this.maxCalcDeep);
        }

        const result: { stage: StageRewardFan, count: number }[][] = [];
        let road: { stage: StageRewardFan, count: number }[] = []

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
                    const deepResult = this.calcRoad(stages, nextStageIndex, leftFans1, nextDeepIndex);
                    if (deepResult.length == 0) {
                        continue;
                    } else {
                        road.push({
                            stage: stage,
                            count: count,
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

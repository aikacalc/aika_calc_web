import { StageReward } from './stage-reward';
import { StageRewardFan } from './stage-reward-fan';

export class Actress {
    name: string;

    fan: number = 3000;
    fanTarget: number = 2003000;
    fanReachRoads: { stage: StageRewardFan, count: number }[][];
}

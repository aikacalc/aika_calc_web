import { StageReward } from './stage-reward';

export class Actress {
    name: string;

    fan: number;
    fanTarget: number;
    fanReachStageStep: { stage: StageReward, count: number }[];
}

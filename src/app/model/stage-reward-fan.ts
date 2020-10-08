export class StageRewardFan {
    stageName: string;
    characterRare: number;
    fan: number;

    toString() {
        return `${this.stageName} ${this.fan}`;
    }
}
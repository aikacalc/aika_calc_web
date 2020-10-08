export class StageRewardFan {
    stageName: string;
    characterRare: number;
    fan: number;
    enable: boolean = true;

    toString() {
        return `${this.stageName} ${this.fan}`;
    }
}
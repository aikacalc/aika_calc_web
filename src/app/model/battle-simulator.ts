import { Unit } from './unit';
import { from } from "rxjs";

export namespace BattleSimulator {
    export class BattleSimulator {
        units: Unit[] = [];
    }
    export namespace BattleAction {
        export enum Type {
            None,
            MissionStart,
            AreaStart,
            AreaClear,
            AreaFail,
            PassingArea,
            MissionClear,
            MissionFail,
            BattleStart,
            BattleEnd,
            UnitIdle,
            UnitMove,
            UnitShot,
            UnitClose,
            UnitActiveSkill,
        }
        export class Action {
            type: Type;
            func: () => {};
        }

        export function ActionNone() { }
        export function ActionMissionStart() { }
        export function ActionAreaStart() { }
        export function ActionAreaClear() { }
        export function ActionAreaFail() { }
        export function ActionPassingArea() { }
        export function ActionMissionClear() { }
        export function ActionMissionFail() { }
        export function ActionBattleStart() { }
        export function ActionBattleEnd() { }
        export function ActionUnitIdle() { }
        export function ActionUnitMove() { }
        export function ActionUnitShot() { }
        export function ActionUnitClose() { }
        export function ActionUnitActiveSkill() { }
    }

    export const BattleActions: { [key in keyof typeof BattleAction.Type]: Function } = {
        None: BattleAction.ActionNone,
        MissionStart: BattleAction.ActionMissionStart,
        AreaStart: BattleAction.ActionAreaStart,
        AreaClear: BattleAction.ActionAreaClear,
        AreaFail: BattleAction.ActionAreaFail,
        PassingArea: BattleAction.ActionPassingArea,
        MissionClear: BattleAction.ActionMissionClear,
        MissionFail: BattleAction.ActionMissionFail,
        BattleStart: BattleAction.ActionBattleStart,
        BattleEnd: BattleAction.ActionBattleEnd,
        UnitIdle: BattleAction.ActionUnitIdle,
        UnitMove: BattleAction.ActionUnitMove,
        UnitShot: BattleAction.ActionUnitShot,
        UnitClose: BattleAction.ActionUnitClose,
        UnitActiveSkill: BattleAction.ActionUnitActiveSkill,
    }
    export class BattleLog {
        // 事件發生時間
        time: number;
        comment: string;
        // 事件動作
        actions: BattleAction.Action[] = [];
    }
    export class BattleLogPlayer {
        log: BattleLog[] = [];

        speed: number = 1;
        currentFrameIndex: number = 0;
        totalFrameCount: number = 0;
        framesPerSecond: number = 60;

        setup(
            log: BattleLog[]
        ): void {
            this.log = log;
        }
        play(): void {
            from(this.log)

        }
    }
    export class BattleAnimationManagement { }
    export class BattleAnimation { }
}


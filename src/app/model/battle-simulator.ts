import { Unit } from './unit';
import { from } from "rxjs";


export class BattleSimulator {
    processManagement: BattleSimulator.ProcessManagement;
    animationManagement
    units: Unit[] = [];

    setup(
        logs: BattleSimulator.BattleLog[]
    ) {

    }
}
export namespace BattleSimulator {
    export class BattleAction {
        type: BattleAction.Type;
        func: () => {};
        constructor(
            type: BattleAction.Type
        ) {
            this.type = type;
        }
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
            SoundPlay,
            TextPlay
        }
        export function None() { }
        export function MissionStart() { }
        export function AreaStart() { }
        export function AreaClear() { }
        export function AreaFail() { }
        export function PassingArea() { }
        export function MissionClear() { }
        export function MissionFail() { }
        export function BattleStart() { }
        export function BattleEnd() { }
        export function UnitIdle() { }
        export function UnitMove() { }
        export function UnitShot() { }
        export function UnitClose() { }
        export function UnitActiveSkill() { }
        export function SoundPlay() { }
        export function TextPlay() { }
    }
    export class BattleLog {
        // 事件發生時間
        time: number;
        comment: string;
        // 事件動作
        actions: BattleAction[] = [];
    }
    export class BattleLogPlayer {
        log: BattleLog[] = [];

        speed: number = 1;
        currentTime: number = 0;
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
    export class ProcessManagement {

    }
    export class Scene { }
    export class ActionBase { }
    export class UnitBase {
        model: any;
        actions = {
            idle: null,
            moveFront: null,
            moveBack: null,
            moveLeft: null,
            moveRight: null,
            moveBoostFront: null,
            moveBoostBack: null,
            moveBoostLeft: null,
            moveBoostRight: null,
            stepFront: null,
            stepBack: null,
            stepLeft: null,
            stepRight: null,
            getDamage: null,
            getDown: null,
            standShot: null,
            moveFrontShot: null,
            moveBackShot: null,
            moveLeftShot: null,
            moveRightShot: null,
            moveBoostFrontShot: null,
            moveBoostBackShot: null,
            moveBoostLeftShot: null,
            moveBoostRightShot: null,
            attackClose: null,
        }
    }
    export class WeaponBase {
        model: any;
        actions = {
            standShot: null,
            chargeShot: null,
            boostFrontShot: null,
            boostBackShot: null,
            boostLeftShot: null,
            boostRightShot: null,
        }
    }
    export class EquipmentBase {
        model: any;
        actions = {
            skill: null,
        }
    }
    export class EffectBase {
        model: any;
        actions = {}
    }

    export class AnimationManagement { }
    export class Animation {
        model: any;
        frame: any[] = [];
        speed: number = 1;
    }
    export class UnitAnimation { }
    export class BackgroundAnimation { }
    export class WeaponAnimation { }
    export class EffectAnimation { }
}


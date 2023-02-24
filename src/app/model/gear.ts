import { Buff } from './buff';
import { Unit } from './unit';
import { AttrTypeColor, AttrTypeId } from './attr-type';
import { gearQualityGrowth } from "./gear-quality";

export class Gear extends Unit {
    isCustom: boolean = false;
    base: Unit = new Unit();

    // gradeUp: number = 0;
    // gradeUpLimit: number = 99;

    tunes: Buff[] = [];
    get attrColor(): string {
        const color = AttrTypeColor[AttrTypeId[this.base.attrTypeId]];
        return color;
    }
    get baseLevelPct(): number {
        return (this.base.level - 1) / (this.base.levelMax - 1);
    }

    constructor(
        baseData?: Unit
    ) {
        super();
        if (baseData != null) {
            Object.assign(this.base, baseData);
            this.buffs = this.base.buffs;
        }

        Object.defineProperty(this, 'unitType', { get() { return this.base.unitType; } });
        Object.defineProperty(this, 'atkTypeId', { get() { return this.base.atkTypeId; } });
        Object.defineProperty(this, 'atkAmmoTypeId', { get() { return this.base.atkAmmoTypeId; } });
        Object.defineProperty(this, 'attrTypeId', { get() { return this.base.attrTypeId; } });
    }
    toggleCustom(): void {
        this.isCustom = !this.isCustom;
    }
    updateStatus(): void {
        if (!this.isCustom) {
            this.updateBaseHP();
            this.updateBaseDEF();
            this.updateBaseATK();
            this.updateBaseATTR();
        }
        this.hp = this.calcTuneValue(this.base.hp, [AttrTypeId.HP]);
        this.def = this.calcTuneValue(this.base.def, [AttrTypeId.DEF]);
        this.atk = this.calcTuneValue(this.base.atk, [this.base.unitType, this.base.atkTypeId, this.base.atkAmmoTypeId]);
        this.attr = this.calcTuneValue(this.base.attr, [this.base.attrTypeId]);
    }
    calcTuneValue(baseVal: number, attrTypeIds: AttrTypeId[]): number {
        const tuneBuffs = this.tunes.filter(t => attrTypeIds.indexOf(t.type) > -1);
        const tuneBuffValuePct = tuneBuffs
            .map(v => v.value)
            .reduce((p, c) => p + c, 0)
            + 1;
        const result = Math.floor(baseVal * tuneBuffValuePct);
        return result;
    }


    updateBaseHP(): void {
        /**
         * L80 +20 c5% 2121
         * L80 +49 c7% 2237
         * L80 +58 c5% 2273
         * L80 +99 c0% 2437
         * L80 +99 c7% 2437
         */
        /**
         * L80 +99 525, 498
         * L80 +99 548, 498
         * 2437, 540
         * 1361, 459
         */
        /**
         * 1, 435, 120
         * 2, 435+17=452, 120+4=124
         * 3, 452+18=470, 124+5=129
         * 1121-435=686
         * Math.floor(435+((3-1)/(40-1))*686)=470
         */
        // const uValue = Unit.calcGrowthValue(this, this.base.hpMin, this.base.hpMax);
        // this.base.level

        const growthRange = this.base.hpMax - this.base.hpMin;
        const value = Math.floor(this.base.hpMin + (growthRange * this.baseLevelPct));
        let gradeValue = 0;

        if (this.base.unitType == AttrTypeId.EquipmentTop) {
            const growthInfo = gearQualityGrowth.Top[this.base.gradeUp];
            if (growthInfo != null && growthInfo.hp) {
                gradeValue = growthInfo.hp;
            }
        }

        this.base.hp = value + gradeValue;
    }
    updateBaseDEF(): void {
        const growthRange = this.base.defMax - this.base.defMin;
        const value = Math.floor(this.base.defMin + (growthRange * this.baseLevelPct));

        let gradeValue = 0;

        if (this.base.unitType == AttrTypeId.EquipmentBottom) {
            const growthInfo = gearQualityGrowth.Bottom[this.base.gradeUp];
            if (growthInfo != null && growthInfo.def) {
                gradeValue = growthInfo.def;
            }
        }

        this.base.def = value + gradeValue;
    }
    updateBaseATK(): void {
        const growthRange = this.base.atkMax - this.base.atkMin;
        const value = this.base.atkMin + (growthRange * this.baseLevelPct);
        
        let gradeValue = 0;

        if (this.atkTypeId == AttrTypeId.Shot) {
            const growthInfo = gearQualityGrowth.Shot[this.base.gradeUp];
            if (growthInfo != null && growthInfo.atk) {
                gradeValue = growthInfo.atk;
            }
        }
        else if (this.atkTypeId == AttrTypeId.Close) {
            const growthInfo = gearQualityGrowth.Close[this.base.gradeUp];
            if (growthInfo != null && growthInfo.atk) {
                gradeValue = growthInfo.atk;
            }
        }

        this.base.atk = Math.floor(value + gradeValue);
    }
    updateBaseATTR(): void {
        const growthRange = this.base.attrMax - this.base.attrMin;
        const value = this.base.attrMin + (growthRange * this.baseLevelPct);

        let gradeValue = 0;

        if (this.atkTypeId == AttrTypeId.Shot) {
            const growthInfo = gearQualityGrowth.Shot[this.base.gradeUp];
            if (growthInfo != null && growthInfo.attr) {
                gradeValue = growthInfo.attr;
            }
        }
        else if (this.atkTypeId == AttrTypeId.Close) {
            const growthInfo = gearQualityGrowth.Close[this.base.gradeUp];
            if (growthInfo != null && growthInfo.attr) {
                gradeValue = growthInfo.attr;
            }
        }

        this.base.attr = Math.floor(value + gradeValue);
    }
}

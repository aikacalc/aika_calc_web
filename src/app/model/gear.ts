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
    tuneHp: number = 0;
    tuneDef: number = 0;
    tuneAtk: number = 0;
    tuneAttr: number = 0;
    tuneSpd: number = 0;


    get attrColor(): string {
        const color = AttrTypeColor[AttrTypeId[this.base.attrTypeId]];
        return color;
    }
    get baseLevelPct(): number {
        if (this.base.level == 1 && this.base.levelMax == 1) {
            return 0;
        }
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

        this.tuneHp = this.calcTuneValue(this.base.hp, [AttrTypeId.HP]);
        this.tuneDef = this.calcTuneValue(this.base.def, [AttrTypeId.DEF]);
        this.tuneAtk = this.calcTuneValue(this.base.atk, [this.base.unitType, this.base.atkTypeId, this.base.atkAmmoTypeId]);
        this.tuneAttr = this.calcTuneValue(this.base.attr, [this.base.attrTypeId]);
        this.tuneSpd = this.calcTuneValue(this.base.spd, [AttrTypeId.SPD]);

        this.hp = this.base.hp + this.tuneHp;
        this.def = this.base.def + this.tuneDef;
        this.atk = this.base.atk + this.tuneAtk;
        this.attr = this.base.attr + this.tuneAttr;
        this.spd = this.base.spd + this.tuneSpd;
    }
    calcTuneValue(baseVal: number, attrTypeIds: AttrTypeId[]): number {
        const tuneBuffs = this.tunes.filter(t => attrTypeIds.indexOf(t.type) > -1);
        let result = 0;
        tuneBuffs.forEach(b => {
            result += baseVal * (b.valuePct / 100);
        });
        result = Math.floor(result);
        // const tuneBuffValuePct = tuneBuffs
        //     .map(v => v.value)
        //     .reduce((p, c) => p + c, 0)
        //     + 1;
        // const result = Math.floor(baseVal * tuneBuffValuePct);
        return result;
    }
    calcGrowthValue(minVal, maxVal) {
        return Math.floor(
            (minVal + (maxVal - minVal) * this.baseLevelPct)
        );
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

        let baseVal = this.calcGrowthValue(this.base.hpMin, this.base.hpMax);
        let qualityVal = 0;

        if (this.base.unitType == AttrTypeId.EquipmentTop) {
            const growthInfo = gearQualityGrowth.Top[this.base.gradeUp];
            if (growthInfo != null && growthInfo.hp) {
                qualityVal = growthInfo.hp;
            }
        }

        this.base.hp = baseVal + qualityVal;
    }
    updateBaseDEF(): void {
        // const growthRange = this.base.defMax - this.base.defMin;
        // const value = Math.floor(this.base.defMin + (growthRange * this.baseLevelPct));
        // let gradeValue = 0;

        let baseVal = this.calcGrowthValue(this.base.defMin, this.base.defMax);
        let qualityVal = 0;


        if (this.base.unitType == AttrTypeId.EquipmentBottom) {
            const growthInfo = gearQualityGrowth.Bottom[this.base.gradeUp];
            if (growthInfo != null && growthInfo.def) {
                qualityVal = growthInfo.def;
            }
        }

        this.base.def = baseVal + qualityVal;
    }
    updateBaseATK(): void {
        let baseVal = this.calcGrowthValue(this.base.atkMin, this.base.atkMax);
        let qualityVal = 0;

        if (this.atkTypeId == AttrTypeId.Shot) {
            const growthInfo = gearQualityGrowth.Shot[this.base.gradeUp];
            if (growthInfo != null && growthInfo.atk) {
                qualityVal = growthInfo.atk;
            }
        }
        else if (this.atkTypeId == AttrTypeId.Close) {
            const growthInfo = gearQualityGrowth.Close[this.base.gradeUp];
            if (growthInfo != null && growthInfo.atk) {
                qualityVal = growthInfo.atk;
            }
        }

        this.base.atk = baseVal + qualityVal;
    }
    updateBaseATTR(): void {
        let baseVal = this.calcGrowthValue(this.base.attrMin, this.base.attrMax);
        let qualityVal = 0;

        if (this.atkTypeId == AttrTypeId.Shot) {
            const growthInfo = gearQualityGrowth.Shot[this.base.gradeUp];
            if (growthInfo != null && growthInfo.attr) {
                qualityVal = growthInfo.attr;
            }
        }
        else if (this.atkTypeId == AttrTypeId.Close) {
            const growthInfo = gearQualityGrowth.Close[this.base.gradeUp];
            if (growthInfo != null && growthInfo.attr) {
                qualityVal = growthInfo.attr;
            }
        }

        this.base.attr = baseVal + qualityVal;
    }
}

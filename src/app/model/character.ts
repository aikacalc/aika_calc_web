import { Unit } from './unit';
import { Buff } from './buff';
import { AttrType, AttrTypeId } from './attr-type';
import { Gear } from './gear';

const masterLevelStatus = {
    1: { "hp": 0, "def": 0, "atkShot": 0, "atkClose": 0, },
    2: { "hp": 25, "def": 7, "atkShot": 4, "atkClose": 4, },
    3: { "hp": 50, "def": 14, "atkShot": 8, "atkClose": 8, },
    4: { "hp": 75, "def": 21, "atkShot": 12, "atkClose": 12, },
    5: { "hp": 100, "def": 28, "atkShot": 16, "atkClose": 16, },
    6: { "hp": 125, "def": 35, "atkShot": 20, "atkClose": 20, },
    7: { "hp": 150, "def": 42, "atkShot": 24, "atkClose": 24, },
    8: { "hp": 175, "def": 49, "atkShot": 28, "atkClose": 28, },
    9: { "hp": 200, "def": 56, "atkShot": 32, "atkClose": 32, },
    10: { "hp": 225, "def": 63, "atkShot": 36, "atkClose": 36, },
    11: { "hp": 250, "def": 70, "atkShot": 40, "atkClose": 40, },
    12: { "hp": 275, "def": 77, "atkShot": 44, "atkClose": 44, },
    13: { "hp": 300, "def": 84, "atkShot": 48, "atkClose": 48, },
    14: { "hp": 325, "def": 91, "atkShot": 52, "atkClose": 52, },
    15: { "hp": 350, "def": 98, "atkShot": 55, "atkClose": 55, },
    16: { "hp": 375, "def": 105, "atkShot": 58, "atkClose": 58, },
    17: { "hp": 400, "def": 112, "atkShot": 61, "atkClose": 61, },
    18: { "hp": 425, "def": 119, "atkShot": 64, "atkClose": 64, },
    19: { "hp": 450, "def": 126, "atkShot": 67, "atkClose": 67, },
    20: { "hp": 475, "def": 133, "atkShot": 70, "atkClose": 70, },
    21: { "hp": 500, "def": 140, "atkShot": 73, "atkClose": 73, },
    22: { "hp": 525, "def": 147, "atkShot": 76, "atkClose": 76, },
    23: { "hp": 550, "def": 154, "atkShot": 79, "atkClose": 79, },
    24: { "hp": 575, "def": 161, "atkShot": 82, "atkClose": 82, },
    25: { "hp": 600, "def": 168, "atkShot": 85, "atkClose": 85, },
    26: { "hp": 625, "def": 175, "atkShot": 88, "atkClose": 88, },
    27: { "hp": 650, "def": 182, "atkShot": 91, "atkClose": 91, },
    28: { "hp": 675, "def": 188, "atkShot": 94, "atkClose": 94, },
    29: { "hp": 700, "def": 194, "atkShot": 97, "atkClose": 97, },
    30: { "hp": 725, "def": 200, "atkShot": 100, "atkClose": 100, },
}
export const attrTypeEnigmaStatus = {
    '0.96': {
        atkShot: 0,
        attrShot: 50,
        atkClose: 0,
        attrClose: 50,
    },
    '0.9': {
        atkShot: 15,
        attrShot: 45,
        atkClose: 15,
        attrClose: 45,
    },
    '0.86': {
        atkShot: 25,
        attrShot: 40,
        atkClose: 25,
        attrClose: 40,
    },
    '0.56': {
        atkShot: 45,
        attrShot: 35,
        atkClose: 45,
        attrClose: 35,
    },
    '0.5': {
        atkShot: 55,
        attrShot: 30,
        atkClose: 55,
        attrClose: 30,
    },
}

export class Character extends Unit {
    rare: number = 1;
    // level: number = 1;
    // levelMin: number = 1;
    // levelMax: number = 1;
    gradeUp: number = 0;
    gradeUpLimit: number = 0;
    masterLevel: number = 1;
    masterPlus: number = 0;

    // hpMin: number = 1;
    // hpMax: number = 1;

    isCustomEnigmaStatus: boolean = false;

    hpEnigma: number = 0;

    atkShot: number = 0;
    atkShotMin: number = 0;
    atkShotMax: number = 0;
    attrShot: number = 0;
    atkShotEnigma: number = 0;
    attrShotEnigma: number = 0;
    atkShotEnigmaCustom: number = 0;
    attrShotEnigmaCustom: number = 0;

    atkClose: number = 0;
    atkCloseMin: number = 0;
    atkCloseMax: number = 0;
    attrClose: number = 0;
    atkCloseEnigma: number = 0;
    attrCloseEnigma: number = 0;
    atkCloseEnigmaCustom: number = 0;
    attrCloseEnigmaCustom: number = 0;

    defEnigma: number = 0;
    // def: number = 0;
    // defMin: number = 0;
    // defMax: number = 0;
    goodAttr: AttrType[] = [];
    // buffs: Buff[] = [];
    weaponShot: Gear = new Gear();
    weaponClose: Gear = new Gear();
    equipmentTop: Gear = new Gear();
    equipmentBottom: Gear = new Gear();
    weaponShots: Gear[] = [];
    weaponCloses: Gear[] = [];
    equipmentTops: Gear[] = [];
    equipmentBottoms: Gear[] = [];
    _weaponShotIndex: number = 0;
    _weaponCloseIndex: number = 0;
    _equipmentTopIndex: number = 0;
    _equipmentBottomIndex: number = 0;
    get weaponShotIndex(): number { return this._weaponShotIndex; }
    get weaponCloseIndex(): number { return this._weaponCloseIndex; }
    get equipmentTopIndex(): number { return this._equipmentTopIndex; }
    get equipmentBottomIndex(): number { return this._equipmentBottomIndex; }
    set weaponShotIndex(value) { this._weaponShotIndex = Number(value); }
    set weaponCloseIndex(value) { this._weaponCloseIndex = Number(value); }
    set equipmentTopIndex(value) { this._equipmentTopIndex = Number(value); }
    set equipmentBottomIndex(value) { this._equipmentBottomIndex = Number(value); }


    isApplyGears: boolean = false;
    get gears(): Gear[] {
        return [
            this.weaponShot,
            this.weaponClose,
            this.equipmentTop,
            this.equipmentBottom
        ];
    }
    get allUnits(): Unit[] {
        return [
            this,
            this.weaponShot,
            this.weaponClose,
            this.equipmentTop,
            this.equipmentBottom
        ];
    }
    get allBuffs(): Buff[] {
        return [
            ...this.buffs,
            ...this.weaponShot.buffs,
            ...this.weaponClose.buffs,
            ...this.equipmentTop.buffs,
            ...this.equipmentBottom.buffs,
        ];
    }

    levelGrowthPct: number = 0;

    updateStatus(): void {
        if (!this.isCustomEnigmaStatus) {
            this.atkShotEnigmaCustom;
            this.attrShotEnigmaCustom;
            this.atkCloseEnigmaCustom;
            this.attrCloseEnigmaCustom;
        }

        if (!this.isApplyGears) {
            this.weaponShotIndex = this.weaponShots.findIndex(g => g.base.levelMax == 80);
            this.weaponCloseIndex = this.weaponCloses.findIndex(g => g.base.levelMax == 80);
            this.equipmentTopIndex = this.equipmentTops.findIndex(g => g.base.levelMax == 80);
            this.equipmentBottomIndex = this.equipmentBottoms.findIndex(g => g.base.levelMax == 80);

            if (this.weaponShotIndex == -1 && this.weaponShots.length > 0) {
                this.weaponShotIndex = 0;
            }
            if (this.weaponCloseIndex == -1 && this.weaponCloses.length > 0) {
                this.weaponCloseIndex = 0;
            }
            if (this.equipmentTopIndex == -1 && this.equipmentTops.length > 0) {
                this.equipmentTopIndex = 0;
            }
            if (this.equipmentBottomIndex == -1 && this.equipmentBottoms.length > 0) {
                this.equipmentBottomIndex = 0;
            }
            0
            Unit.cloneDeep(this.weaponShot, this.weaponShots[this.weaponShotIndex], 0);
            Unit.cloneDeep(this.weaponClose, this.weaponCloses[this.weaponCloseIndex], 0);
            Unit.cloneDeep(this.equipmentTop, this.equipmentTops[this.equipmentTopIndex], 0);
            Unit.cloneDeep(this.equipmentBottom, this.equipmentBottoms[this.equipmentBottomIndex], 0);

            this.isApplyGears = true;
        }

        this.gears.forEach(g => g.updateStatus());

        this.setLevelGrowthVal();

        this.updateHP();
        this.updateDEF();
        this.updateAtkShot();
        this.updateAttrShot();
        this.updateAtkClose();
        this.updateAttrClose();
        this.updateSPD();

    }
    setLevelGrowthVal(): void {
        let level = this.level;
        if (this.level == this.levelMax) {
            level += this.gradeUp;
        }
        const v1 = (this.levelMax - 1) * 100;
        const v2 = ((Math.min(level, this.levelMax) - 1) * 100)
            + (Math.max(0, level - this.levelMax) * this.gradeupPowUpRate);
        this.levelGrowthPct = v2 / v1;
    }
    calcValue(minVal: number, maxVal: number): number {
        return Math.floor(minVal + (maxVal - minVal) * this.levelGrowthPct);
    }
    // calcGrowthValue(minVal: number, maxVal: number): number {
    //     let gradeUpLv = 0;
    //     if (this.level === this.levelMax) {
    //         gradeUpLv = this.gradeUp;
    //     }
    //     const levelPct = (this.level + gradeUpLv - 1) / (this.levelMax - 1);

    //     const growthRange = maxVal - minVal;
    //     const growthValue = Math.floor(minVal + (growthRange * levelPct));
    //     return growthValue;
    // }
    updateHP(): void {
        const chrBaseVal = this.calcValue(this.hpMin, this.hpMax);
        const gearBaseVal = this.gears.reduce((v, c) => v + c.base.hp, 0);
        const masterVal = masterLevelStatus[this.masterLevel].hp;
        this.hpEnigma = this.masterPlus;
        const enigmaStatusVal = this.hpEnigma;
        const tuneVal = this.gears.reduce((v, c) => v + c.tuneHp, 0);
        const baseVal = chrBaseVal + gearBaseVal + masterVal + enigmaStatusVal + tuneVal;

        let result = baseVal;

        const targetAttrTypeId = AttrTypeId.HP;
        this.allUnits.forEach(u => {
            const buffs = u.buffs.filter(b => b.type == targetAttrTypeId);
            const totalBuffVal = Math.floor(buffs.reduce((p, c) => p + (baseVal * c.valuePct / 100), 0));
            result += totalBuffVal;
        });

        this.hp = result;
    }
    updateDEF(): void {
        const chrBaseVal = this.calcValue(this.defMin, this.defMax);
        const gearBaseVal = this.gears.reduce((v, c) => v + c.base.def, 0);
        const masterVal = masterLevelStatus[this.masterLevel].def;
        const enigmaStatusVal = this.defEnigma;
        const tuneVal = this.gears.reduce((v, c) => v + c.tuneDef, 0);
        const baseVal = chrBaseVal + gearBaseVal + masterVal + enigmaStatusVal + tuneVal;

        let result = baseVal;
        const targetAttrTypeId = AttrTypeId.DEF;
        this.allUnits.forEach(u => {
            const buffs = u.buffs.filter(b => b.type == targetAttrTypeId);
            const totalBuffVal = Math.floor(buffs.reduce((p, c) => p + (baseVal * c.valuePct / 100), 0));
            result += totalBuffVal;
        });

        this.def = result;
    }
    updateAtkShot(): void {
        const chrBaseVal = this.calcValue(this.atkShotMin, this.atkShotMax);
        const gear = this.weaponShot;
        const gearBaseVal = gear.base.atk;
        const masterVal = masterLevelStatus[this.masterLevel].atkShot;
        let enigmaStatusVal = this.atkShotEnigma;
        if (this.isCustomEnigmaStatus) {
            enigmaStatusVal = this.atkShotEnigmaCustom;
        }
        const tuneVal = gear.tuneAtk;
        const baseVal = chrBaseVal + gearBaseVal + masterVal + enigmaStatusVal + tuneVal;

        let result = baseVal;

        this.allUnits.forEach(u => {
            const buffs = u.buffs.filter(b => b.type === gear.atkTypeId
                || b.type === gear.atkAmmoTypeId
                || b.type === gear.unitType);
            const totalBuffVal = Math.floor(buffs.reduce((p, c) => p + (baseVal * c.valuePct / 100), 0));
            result += totalBuffVal;
        });

        this.atkShot = result;
    }
    updateAttrShot(): void {
        const chrBaseVal = 0;
        const gear = this.weaponShot;
        const gearBaseVal = gear.base.attr;
        const masterVal = 0;
        let enigmaStatusVal = this.attrShotEnigma;
        if (this.isCustomEnigmaStatus) {
            enigmaStatusVal = this.attrShotEnigmaCustom;
        }
        const tuneVal = gear.tuneAttr;
        const baseVal = chrBaseVal + gearBaseVal + masterVal + enigmaStatusVal + tuneVal;

        let result = baseVal;

        this.allUnits.forEach(u => {
            const buffs = u.buffs.filter(b => b.type === gear.base.attrTypeId);
            const totalBuffVal = Math.floor(buffs.reduce((p, c) => p + (baseVal * c.valuePct / 100), 0));
            result += totalBuffVal;
        });

        this.attrShot = result;

    }
    updateAtkClose(): void {
        const chrBaseVal = this.calcValue(this.atkCloseMin, this.atkCloseMax);
        const gear = this.weaponClose;
        const gearBaseVal = gear.base.atk;
        const masterVal = masterLevelStatus[this.masterLevel].atkClose;
        let enigmaStatusVal = this.atkCloseEnigma;
        if (this.isCustomEnigmaStatus) {
            enigmaStatusVal = this.atkCloseEnigmaCustom;
        }

        const baseVal = chrBaseVal + gearBaseVal + masterVal + enigmaStatusVal;

        let result = chrBaseVal + gearBaseVal;

        this.allUnits.forEach(u => {
            const buffs = u.buffs.filter(b => b.type === gear.atkTypeId
                || b.type === gear.atkAmmoTypeId
                || b.type === gear.unitType);
            const totalBuffVal = Math.floor(buffs.reduce((p, c) => p + (baseVal * c.valuePct / 100), 0));
            result += totalBuffVal;
        });

        result += gear.tuneAtk;
        result += masterVal;
        result += enigmaStatusVal;

        this.atkClose = result;
    }
    updateAttrClose(): void {
        const gear = this.weaponClose;

        let enigmaValue = this.attrCloseEnigma;
        if (this.isCustomEnigmaStatus) {
            enigmaValue = this.attrCloseEnigmaCustom;
        }

        const attrSum = gear.attr
            + enigmaValue
            ;
        const buffs = this.allBuffs.filter(b => b.type === gear.base.attrTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(attrSum * buffValuePct);
        this.attrClose = result;
    }
    updateSPD(): void {
        const targetAttrTypeId = AttrTypeId.SPD;
        const charaValue = Unit.calcGrowthValue(this, this.spdMin, this.spdMax);
        const valueSum = charaValue
            + this.gears.reduce((v, c) => v + c.spd, 0)
            ;
        const allBuffResultValue = this.allUnits
            .map(v => {
                const valBuffs = v.buffs.filter(b => b.type === targetAttrTypeId);
                const valBuffValues = valBuffs.map(b => b.value);
                const buffValue = valBuffValues.reduce((p, c) => p + c, 0);
                const unitResultValue = Math.floor(valueSum * buffValue);
                return unitResultValue;
            })
            .reduce((p, c) => p + c, 0);

        this.spd = valueSum + allBuffResultValue;
    }

}

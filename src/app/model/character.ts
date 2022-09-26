import { Unit } from './unit';
import { AttrTypeId } from './attr-type-id.enum';
import { Buff } from './buff';
import { AttrType } from './attr-type';
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

    hpEnigma: number = 0;

    atkShot: number = 0;
    atkShotMin: number = 0;
    atkShotMax: number = 0;
    attrShot: number = 0;
    atkShotEnigma: number = 0;
    attrShotEnigma: number = 0;


    atkClose: number = 0;
    atkCloseMin: number = 0;
    atkCloseMax: number = 0;
    attrClose: number = 0;
    atkCloseEnigma: number = 0;
    attrCloseEnigma: number = 0;

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

    updateStatus(): void {
        if (!this.isApplyGears) {
            this.weaponShotIndex = this.weaponShots.findIndex(g => g.base.levelMax == 80);
            this.weaponCloseIndex = this.weaponCloses.findIndex(g => g.base.levelMax == 80);
            this.equipmentTopIndex = this.equipmentTops.findIndex(g => g.base.levelMax == 80);
            this.equipmentBottomIndex = this.equipmentBottoms.findIndex(g => g.base.levelMax == 80);

            Unit.cloneDeep(this.weaponShot, this.weaponShots[this.weaponShotIndex], 0);
            Unit.cloneDeep(this.weaponClose, this.weaponCloses[this.weaponCloseIndex], 0);
            Unit.cloneDeep(this.equipmentTop, this.equipmentTops[this.equipmentTopIndex], 0);
            Unit.cloneDeep(this.equipmentBottom, this.equipmentBottoms[this.equipmentBottomIndex], 0);

            this.isApplyGears = true;
        }

        this.gears.forEach(g => g.updateStatus());

        this.updateHP();
        this.updateDEF();
        this.updateAtkShot();
        this.updateAttrShot();
        this.updateAtkClose();
        this.updateAttrClose();

        this.spd = this.equipmentBottom.spd;
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
        const targetAttrTypeId = AttrTypeId.HP;
        const charaValue = Unit.calcGrowthValue(this, this.hpMin, this.hpMax);
        const valueSum = charaValue
            + this.gears.reduce((v, c) => v + c.hp, 0)
            + masterLevelStatus[this.masterLevel].hp
            + (this.masterLevel == 30 ? this.masterPlus : 0)
            + this.hpEnigma
            ;
        const allBuffResultValue = this.allUnits
            .map(v => {
                const hpBuffs = v.buffs.filter(b => b.type === targetAttrTypeId);
                const hpBuffValues = hpBuffs.map(b => b.value);
                const buffValue = hpBuffValues.reduce((p, c) => p + c, 0);
                const unitResultValue = Math.floor(valueSum * buffValue);
                return unitResultValue;
            })
            .reduce((p, c) => p + c, 0);

        this.hp = valueSum + allBuffResultValue;
    }
    updateDEF(): void {
        const targetAttrTypeId = AttrTypeId.DEF;
        const charaValue = Unit.calcGrowthValue(this, this.defMin, this.defMax);
        const valueSum = charaValue
            + this.gears.reduce((v, c) => v + c.def, 0)
            + masterLevelStatus[this.masterLevel].def
            + this.defEnigma
            ;
        const allBuffResultValue = this.allUnits
            .map(v => {
                const hpBuffs = v.buffs.filter(b => b.type === targetAttrTypeId);
                const hpBuffValues = hpBuffs.map(b => b.value);
                const buffValue = hpBuffValues.reduce((p, c) => p + c, 0);
                const unitResultValue = Math.floor(valueSum * buffValue);
                return unitResultValue;
            })
            .reduce((p, c) => p + c, 0);

        this.def = valueSum + allBuffResultValue;
    }
    updateAtkShot(): void {
        const gear = this.weaponShot;
        const atk = Unit.calcGrowthValue(this, this.atkShotMin, this.atkShotMax);
        const atkSum = atk
            + gear.atk
            + masterLevelStatus[this.masterLevel].atkShot
            + this.atkShotEnigma
            ;
        const buffs = this.allBuffs.filter(b => b.type === gear.atkTypeId
            || b.type === gear.atkAmmoTypeId
            || b.type === gear.unitType);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(atkSum * buffValuePct);
        this.atkShot = result;
    }
    updateAttrShot(): void {
        const gear = this.weaponShot;
        const attrSum = gear.attr
            + this.attrShotEnigma
            ;
        const buffs = this.allBuffs.filter(b => b.type === gear.base.attrTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(attrSum * buffValuePct);
        this.attrShot = result;
    }
    updateAtkClose(): void {
        const gear = this.weaponClose;
        const atk = Unit.calcGrowthValue(this, this.atkCloseMin, this.atkCloseMax);
        const atkSum = atk
            + gear.atk
            + masterLevelStatus[this.masterLevel].atkClose
            + this.atkCloseEnigma
            ;
        const buffs = this.allBuffs.filter(b => b.type === gear.atkTypeId
            || b.type === gear.atkAmmoTypeId
            || b.type === gear.unitType);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(atkSum * buffValuePct);
        this.atkClose = result;
    }
    updateAttrClose(): void {
        const gear = this.weaponClose;
        const attrSum = gear.attr
            + this.attrCloseEnigma
            ;
        const buffs = this.allBuffs.filter(b => b.type === gear.base.attrTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(attrSum * buffValuePct);
        this.attrClose = result;
    }
}

import { Unit } from './unit';
import { AttrTypeId } from './attr-type-id.enum';
import { Buff } from './buff';
import { AttrType } from './attr-type';
import { Gear } from './gear';

export class Character extends Unit {
    rare: number = 1;
    level: number = 1;
    levelMin: number = 1;
    levelMax: number = 1;
    gradeUp: number = 0;
    gradeUpLimit: number = 0;
    hpMin: number = 1;
    hpMax: number = 1;
    atkShot: number = 0;
    atkShotMin: number = 0;
    atkShotMax: number = 0;
    attrShot: number = 0;
    atkClose: number = 0;
    atkCloseMin: number = 0;
    atkCloseMax: number = 0;
    attrClose: number = 0;
    def: number = 0;
    defMin: number = 0;
    defMax: number = 0;
    goodAttr: AttrType[] = [];
    buffs: Buff[] = [];
    weaponShot: Gear = new Gear();
    weaponClose: Gear = new Gear();
    equipmentTop: Gear = new Gear();
    equipmentBottom: Gear = new Gear();

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
        this.gears.forEach(g => g.updateStatus());

        this.updateHP();
        this.updateAtkShot();
        this.updateAttrShot();
        this.updateAtkClose();
        this.updateAttrClose();

        this.spd = this.equipmentBottom.spd;
    }
    calcGrowthValue(minVal: number, maxVal: number): number {
        let gradeUpLv = 0;
        if (this.level === this.levelMax) {
            gradeUpLv = this.gradeUp;
        }
        const levelPct = (this.level + gradeUpLv - 1) / (this.levelMax - 1);

        const growthRange = maxVal - minVal;
        const growthValue = Math.floor(minVal + (growthRange * levelPct));
        return growthValue;
    }
    updateHP(): void {
        const characterHp = this.calcGrowthValue(this.hpMin, this.hpMax);
        const hpSum = characterHp + this.gears.reduce((v, c) => v + c.hp, 0);
        const buffHp = this.allUnits
            .map(v => {
                const hpBuffs = v.buffs.filter(b => b.type === AttrTypeId.HP);
                const hpBuffValues = hpBuffs.map(b => b.value);
                const buffValue = hpBuffValues.reduce((p, c) => p + c, 0);
                const unitResultHp = Math.floor(hpSum * buffValue);
                return unitResultHp;
            })
            .reduce((p, c) => p + c, 0);

        this.hp = hpSum + buffHp;
    }
    updateAtkShot(): void {
        const gear = this.weaponShot;
        const atk = this.calcGrowthValue(this.atkShotMin, this.atkShotMax);
        const atkSum = atk + gear.atk;
        const buffs = this.allBuffs.filter(b => b.type === gear.atkTypeId
            || b.type === gear.atkAmmoTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(atkSum * buffValuePct);
        this.atkShot = result;
    }
    updateAttrShot(): void {
        const gear = this.weaponShot;
        const buffs = this.allBuffs.filter(b => b.type === gear.base.attrTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(gear.attr * buffValuePct);
        this.attrShot = result;
    }
    updateAtkClose(): void {
        const gear = this.weaponClose;
        const atk = this.calcGrowthValue(this.atkCloseMin, this.atkCloseMax);
        const atkSum = atk + gear.atk;
        const buffs = this.allBuffs.filter(b => b.type === gear.atkTypeId
            || b.type === gear.atkAmmoTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(atkSum * buffValuePct);
        this.atkClose = result;
    }
    updateAttrClose(): void {
        const gear = this.weaponClose;
        const buffs = this.allBuffs.filter(b => b.type === gear.base.attrTypeId);
        const buffValuePct = buffs.map(v => v.value).reduce((p, c) => p + c, 0) + 1;
        const result = Math.floor(gear.attr * buffValuePct);
        this.attrClose = result;
    }
}

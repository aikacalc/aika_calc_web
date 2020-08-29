import { AttrTypeId } from './attr-type-id.enum';
import { Buff } from './buff';
import { Unit } from './unit';
import { AttrTypeColor } from './attr-type';

export class Gear extends Unit {
    base: Unit = new Unit();
    tunes: Buff[] = [];
    get attrColor(): string {
        const color = AttrTypeColor[AttrTypeId[this.base.attrTypeId]];
        return color;
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

    updateStatus(): void {
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
}

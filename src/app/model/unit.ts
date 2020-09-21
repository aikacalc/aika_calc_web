import { AttrTypeId } from './attr-type-id.enum';
import { Buff } from './buff';

export class Unit {
    name?: string = '';
    level?: number = 1;
    levelMin?: number = 1;
    levelMax?: number = 1;
    hp?: number = 0;
    hpMin?: number = 1;
    hpMax?: number = 1;
    atk?: number = 0;
    atkMin?: number = 0;
    atkMax?: number = 0;
    attr?: number = 0;
    attrMin?: number = 0;
    attrMax?: number = 0;
    private _unitType?: AttrTypeId = AttrTypeId.None;
    unitType?: AttrTypeId = AttrTypeId.None;
    private _atkTypeId?: AttrTypeId = AttrTypeId.None;
    atkTypeId?: AttrTypeId = AttrTypeId.None;
    private _atkAmmoTypeId?: AttrTypeId = AttrTypeId.None;
    atkAmmoTypeId?: AttrTypeId = AttrTypeId.None;
    private _attrTypeId?: AttrTypeId = AttrTypeId.None;
    attrTypeId?: AttrTypeId = AttrTypeId.None;
    def?: number = 0;
    defMin?: number = 0;
    defMax?: number = 0;
    spd?: number = 0;
    buffs?: Buff[] = [];

    constructor() {
        Object.defineProperty(this, 'unitType', {
            get() { return this._unitType; },
            set(value) { this._unitType = typeof value === 'string' ? Number(value) : value; }
        });
        Object.defineProperty(this, 'atkTypeId', {
            get() { return this._atkTypeId; },
            set(value) { this._atkTypeId = typeof value === 'string' ? Number(value) : value; }
        });
        Object.defineProperty(this, 'atkAmmoTypeId', {
            get() { return this._atkAmmoTypeId; },
            set(value) { this._atkAmmoTypeId = typeof value === 'string' ? Number(value) : value; }
        });
        Object.defineProperty(this, 'attrTypeId', {
            get() { return this._attrTypeId; },
            set(value) { this._attrTypeId = typeof value === 'string' ? Number(value) : value; }
        });
    }
}

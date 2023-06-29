import { AttrTypeId } from './attr-type';
import { Buff } from './buff';

export class Unit {
    name?: string = '';
    level?: number = 1;
    levelMin?: number = 1;
    levelMax?: number = 1;
    gradeUp?: number = 0;
    gradeUpLimit?: number = 0;
    hp?: number = 0;
    hpMin?: number = 0;
    hpMax?: number = 0;
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
    spdMin?: number = 0;
    spdMax?: number = 0;
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

    static calcGrowthValue(
        unit: Unit,
        minVal: number,
        maxVal: number
    ): number {
        let gradeUpLv = 0;
        if (unit.level === unit.levelMax) {
            gradeUpLv = unit.gradeUp;
        }
        const levelPct = (unit.level + gradeUpLv - 1) / (unit.levelMax - 1);

        const growthRange = maxVal - minVal;
        const growthValue = Math.floor(minVal + (growthRange * levelPct));
        return growthValue;
    }
    static cloneDeep(toObj, fromObj, currentDeepIndex: number): any {
        currentDeepIndex++;
        if (currentDeepIndex > 10) {
            console.error(`clone too deep! (max:${10})`);
            return;
        }

        Object.assign(toObj, fromObj);

        for (const key of Object.keys(fromObj)) {
            const sourceValue = fromObj[key];
            let type: string = typeof sourceValue;
            // if (type === 'object') {
            //     if (sourceValue instanceof Array) {
            //         type = 'array';
            //     }
            // }

            // if (type === 'object' && toObj == null) {
            //     toObj = {};
            // } else if (type === 'array' && toObj == null) {
            //     toObj = [];
            // } else if (toObj == null) {
            //     toObj = {};
            // }

            if (type === 'object') {
                if (toObj[key] == null) {
                    toObj[key] = {};
                }

                // const _target = Object.getPrototypeOf(toObj[key]).constructor.call();
                toObj[key] = this.cloneDeep(
                    toObj[key],
                    sourceValue,
                    currentDeepIndex);
            }
            // else if (type === 'string'
            //     || type === 'number') {
            //     toObj[key] = sourceValue;
            // } else {

            // }
        }

        currentDeepIndex--;
        return toObj;
    }
}

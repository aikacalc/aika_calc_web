import { AttrTypeName, AttrTypeColor, AttrTypeId } from './attr-type';

export class Buff {
    isUnitOnly: boolean;
    private _type: AttrTypeId;
    get type(): AttrTypeId { return this._type; }
    set type(value) {
        if (typeof value === 'string') {
            this._type = Number(value);
        } else {
            this._type = value;
        }
    }
    value: number;
    get valuePct(): number {
        return Math.floor(this.value * 100);
    }
    set valuePct(value) {
        this.value = value / 100;
    }

    get attrTypeName(): string {
        return AttrTypeName[AttrTypeId[this.type]];
    }
    get attrColor(): string {
        const color = AttrTypeColor[AttrTypeId[this.type]];
        return color;
    }
    
    constructor(type: AttrTypeId, value: number) {
        this.type = type;
        this.value = value;
    }
}

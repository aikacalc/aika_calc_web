import { AttrTypeId } from './attr-type-id.enum';

export class AttrType {
    get name(): string {
        return AttrTypeName[AttrTypeId[this.typeId]];
    }
    typeId: AttrTypeId;
    get color(): string {
        return AttrTypeColor[AttrTypeId[this.typeId]];
    }
    icon: string;
    value: number;
    constructor(
        typeId: AttrTypeId,
        icon: string,
        value: number
    ) {
        this.typeId = typeId;
        this.icon = icon;
        this.value = value;
    }
}
export const AttrTypeIdList = [
    AttrTypeId.Impact,
    AttrTypeId.Slash,
    AttrTypeId.Physical,
    AttrTypeId.Energy,
    AttrTypeId.Volt,
    AttrTypeId.Gravity,
    AttrTypeId.Fire,
    AttrTypeId.Ice,
    AttrTypeId.Sword,
    AttrTypeId.Hammer,
    AttrTypeId.Spear,
    AttrTypeId.Dagger,
    AttrTypeId.HandGun,
    AttrTypeId.Rifle,
    AttrTypeId.Bazooka,
    AttrTypeId.Twin,
    AttrTypeId.Sniper,
    AttrTypeId.Close,
    AttrTypeId.Shot,
    AttrTypeId.HP,
    AttrTypeId.DEF,
];
export const AttrTypeName: { [key in keyof typeof AttrTypeId]: string } = {
    Impact: '打擊',
    Slash: '斬擊',
    Physical: '實彈',
    Energy: '能量',
    Volt: '電撃',
    Gravity: '重力',
    Fire: '焼夷',
    Ice: '冷撃',
    Sword: '雙手劍',
    Hammer: '大錘',
    Spear: '長槍',
    Dagger: '單手劍',
    HandGun: '手槍',
    Rifle: '步槍',
    Bazooka: '火箭炮',
    Twin: '雙槍',
    Sniper: '狙擊',
    Close: '近戰',
    Shot: '射擊',
    HP: 'HP',
    DEF: 'DEF',
    None: '--'
};
export const AttrTypeColor: { [key in keyof typeof AttrTypeId]: string } = {
    Impact: '#000000',
    Slash: '#000000',
    Physical: '#000000',
    Energy: '#000000',
    Volt: '#ea8a00',
    Gravity: 'purple',
    Fire: 'red',
    Ice: '#107cdc',
    Sword: '#000000',
    Hammer: '#000000',
    Spear: '#000000',
    Dagger: '#000000',
    HandGun: '#000000',
    Rifle: '#000000',
    Bazooka: '#000000',
    Twin: '#000000',
    Sniper: '#000000',
    Close: '#000000',
    Shot: '#000000',
    HP: '#000000',
    DEF: '#000000',
    None: '#000000',
}
export const AttrTypeDict: {
    [key in keyof typeof AttrTypeId]: (value: number) => AttrType;
} = {
    None: (value: number) => new AttrType(AttrTypeId.None, '', value),
    Impact: (value: number) => new AttrType(AttrTypeId.Impact, '', value),
    Slash: (value: number) => new AttrType(AttrTypeId.Slash, '', value),
    Physical: (value: number) => new AttrType(AttrTypeId.Physical, '', value),
    Energy: (value: number) => new AttrType(AttrTypeId.Energy, '', value),
    Volt: (value: number) => new AttrType(AttrTypeId.Volt, '', value),
    Gravity: (value: number) => new AttrType(AttrTypeId.Gravity, '', value),
    Fire: (value: number) => new AttrType(AttrTypeId.Fire, '', value),
    Ice: (value: number) => new AttrType(AttrTypeId.Ice, '', value),
    Sword: (value: number) => new AttrType(AttrTypeId.Sword, '', value),
    Hammer: (value: number) => new AttrType(AttrTypeId.Hammer, '', value),
    Spear: (value: number) => new AttrType(AttrTypeId.Spear, '', value),
    Dagger: (value: number) => new AttrType(AttrTypeId.Dagger, '', value),
    HandGun: (value: number) => new AttrType(AttrTypeId.HandGun, '', value),
    Rifle: (value: number) => new AttrType(AttrTypeId.Rifle, '', value),
    Bazooka: (value: number) => new AttrType(AttrTypeId.Bazooka, '', value),
    Twin: (value: number) => new AttrType(AttrTypeId.Twin, '', value),
    Sniper: (value: number) => new AttrType(AttrTypeId.Sniper, '', value),
    Close: (value: number) => new AttrType(AttrTypeId.Close, '', value),
    Shot: (value: number) => new AttrType(AttrTypeId.Shot, '', value),
    HP: (value: number) => new AttrType(AttrTypeId.HP, '', value),
    DEF: (value: number) => new AttrType(AttrTypeId.DEF, '', value),
};

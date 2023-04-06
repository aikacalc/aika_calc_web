export enum AttrTypeId {
    Impact = 1,
    Slash = 2,
    Physical = 3,
    Energy = 4,
    Volt = 5,
    Gravity = 6,
    Fire = 7,
    Ice = 8,
    Sword = 9,
    Hammer = 10,
    Spear = 11,
    Dagger = 12,
    HandGun = 13,
    Rifle = 14,
    Bazooka = 15,
    Twin = 16,
    Sniper = 17,
    Close = 18,
    Shot = 19,
    HP = 20,
    DEF = 21,
    None = 22,
    ResistVolt = 23,
    ResistGravity = 24,
    ResistFire = 25,
    ResistIce = 26,
    SPD = 27,
    EquipmentTop = 28,
    EquipmentBottom = 29,
}

export const AttrTypeIdAttrs = [
    AttrTypeId.Volt,
    AttrTypeId.Gravity,
    AttrTypeId.Fire,
    AttrTypeId.Ice
];
export const AttrTypeIdCloses = [
    AttrTypeId.Sword,
    AttrTypeId.Hammer,
    AttrTypeId.Spear,
    AttrTypeId.Dagger,
    AttrTypeId.HandGun
];
export const AttrTypeIdShots = [
    AttrTypeId.Rifle,
    AttrTypeId.Bazooka,
    AttrTypeId.Twin,
    AttrTypeId.Sniper
];


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
    AttrTypeId.ResistVolt,
    AttrTypeId.ResistGravity,
    AttrTypeId.ResistFire,
    AttrTypeId.ResistIce,
    AttrTypeId.SPD
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
    None: '--',
    ResistVolt: '耐電撃',
    ResistGravity: '耐重力',
    ResistFire: '耐焼夷',
    ResistIce: '耐冷撃',
    SPD: 'SPD',
    EquipmentTop: '上身',
    EquipmentBottom: '下身',
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
    ResistVolt: '#ea8a00',
    ResistGravity: 'purple',
    ResistFire: 'red',
    ResistIce: '#107cdc',
    SPD: '#000000',
    EquipmentTop: '#000000',
    EquipmentBottom: '#000000',
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
    ResistVolt: (value: number) => new AttrType(AttrTypeId.ResistVolt, '', value),
    ResistGravity: (value: number) => new AttrType(AttrTypeId.ResistGravity, '', value),
    ResistFire: (value: number) => new AttrType(AttrTypeId.ResistFire, '', value),
    ResistIce: (value: number) => new AttrType(AttrTypeId.ResistIce, '', value),
    SPD: (value: number) => new AttrType(AttrTypeId.SPD, '', value),
    EquipmentTop: (value: number) => new AttrType(AttrTypeId.EquipmentTop, '', value),
    EquipmentBottom: (value: number) => new AttrType(AttrTypeId.EquipmentBottom, '', value),
};
export function getTypeColor(typeId: AttrTypeId): string {
    return AttrTypeColor[AttrTypeId[typeId]];
}
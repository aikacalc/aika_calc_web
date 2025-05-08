import { AttrTypeId } from "./attr-type";

class HashSet<T, V> {
    map: Map<T, V>;
    constructor() {
        this.map = new Map();
    }

    add(item) {
        this.map.set(item, null); // 將元素作為鍵，值為 null
        return this;
    }

    has(item) {
        return this.map.has(item);
    }

    delete(item) {
        return this.map.delete(item);
    }

    clear() {
        this.map.clear();
    }

    values() {
        return this.map.keys();
    }

    size() {
        return this.map.size;
    }
}
class ValueNumber {
    value: number = 0;
    valueMin: number = 0;
    valueMax: number = 0;
    constructor(value: number = 0, valueMin: number = 0, valueMax: number = 0) {
        this.value = value;
        this.valueMin = valueMin;
        this.valueMax = valueMax;
    }
}
class AttrValue {
    attrType: AttrTypeId = AttrTypeId.None;
    value: ValueNumber = new ValueNumber(0, 0, 0);
}

export class Unit2 {
    level: ValueNumber = new ValueNumber(1, 1, 1);
    gradeUp: ValueNumber = new ValueNumber(0, 0, 0);
    hp: ValueNumber = new ValueNumber(0, 0, 0);
    atk: ValueNumber = new ValueNumber(0, 0, 0);
    attrAtks: AttrValue[] = [];
    def: ValueNumber = new ValueNumber(0, 0, 0);
    spd: ValueNumber = new ValueNumber(0, 0, 0);
    attrResists: AttrValue[] = [];
}
class Buff2 extends Unit2 {
    hpPercent: number = 0;
    atkPercent: number = 0;
    attrPercent: AttrValue = new AttrValue();
    resistPercent: AttrValue = new AttrValue();
    defPercent: number = 0;
    spdPercent: number = 0;
    healPercent: number = 0;
    healAdd: number = 0;
    healType: number = 0; // 1:self, 2:all
    damageCut: number = 0;
    moveSpeed: number = 0;
    stepdistance: number = 0;
    stepLRdistance: number = 0;
    stepFBdistance: number = 0;
    stepBlueTime: number = 0;
}
class Trigger {
    areaStart;
    areaOddStart;
    areaEvenStart;
    HpLessEqual;
    HpGreaterEqual;
}
class Skill2 {
    name: string = '';
    type: number = 0; // 1:passive, 2:active
    tags: HashSet<number, null> = new HashSet<number, null>();
    effectTime: number = 0; // in seconds
    activeTimes: number = 0;
    buffs: Buff2[] = [];
    triggers: Trigger[] = [];

    isMatchTags(tags: number[]): boolean {
        if (tags.length == 0) return false;
        return tags.every(tag => this.tags.has(tag));
    }
}
class Character2Param {
    name: string = '';
    level: ValueNumber = new ValueNumber(1, 1, 1);
    gradeUp: ValueNumber = new ValueNumber(0, 0, 0);
    enigmaLevel: ValueNumber = new ValueNumber(1, 1, 30);
    enigmaPlusLevel: ValueNumber = new ValueNumber(0, 0, 999);
    hp: number = 0;
    atkShot: number = 0;
    attrShot: number = 0;
    atkCombat: number = 0;
    attrCombat: number = 0;
    def: number = 0;
    spd: number = 0;
}
class Character2 {
    // 角色自身
    name: string = '';
    base: Unit2 = new Unit2();
    enigmaLevel: ValueNumber = new ValueNumber(1, 1, 30);
    enigmaPlusLevel: ValueNumber = new ValueNumber(0, 0, 999);
    enigmaAtkShot: number = 0;
    enigmaAttrShot: AttrValue = new AttrValue();
    enigmaAtkCombat: number = 0;
    enigmaAttrCombat: AttrValue = new AttrValue();


    gradeUpPowerUpRate: number = 100;

    // gear
    shot: Gear2 = new Gear2();
    combat: Gear2 = new Gear2();
    top: Gear2 = new Gear2();
    bottom: Gear2 = new Gear2();

    // passive skills
    charaSkills: Skill2[] = [];
    enigmaSkills: Skill2[] = [];

    output: Character2Param = new Character2Param();

    // 取角色擅長屬性，角色被動的屬性類型
    getAttrType(): AttrTypeId {
        let attrType = AttrTypeId.None;
        attrType = this.charaSkills.find(s => s.isMatchTags([1]))

        return attrType ?? AttrTypeId.None;
    }
    getHp(): number { }
    getAtkShot(): number { }
    getAttrShot(): number { }
    getAtkCombat(): number { }
    getAttrCombat(): number { }
    getDef(): number { }
    getSpd(): number { }

    update(): void {

    }
}
class Gear2 {
    // gear自身
    name: string = '';
    base: Unit2 = new Unit2();

    skills: Skill2[] = [];
    tunes: Skill2[] = [];

    activeSkill: Skill2 = new Skill2();

    getHp(): number { }
    getAtk(): number { }
    getAttr(): number { }
    getDef(): number { }
    getSpd(): number { }
}
class RuntimeCharacter {

}

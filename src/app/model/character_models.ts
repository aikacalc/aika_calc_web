import { AttrType,AttrTypeDict } from './attr-type';
import { Character } from './character';
import { Buff } from './buff';
import { AttrTypeId } from './attr-type-id.enum';
import { Gear } from './gear';
import { ActressGears } from './gear_models';

class AgatsumaKaede01 extends Character {
    name: string = '吾妻 楓';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 13;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 225;
    atkCloseMin: number = 90;
    atkCloseMax: number = 225;
    attrClose: number = 0;
    atkShot: number = 210;
    atkShotMin: number = 84;
    atkShotMax: number = 210;
    attrShot: number = 0;
    def: number = 255;
    defMin: number = 102;
    defMax: number = 255;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AgatsumaKaede.long;
    weaponCloses: Gear[] = ActressGears.AgatsumaKaede.short;
    equipmentTops: Gear[] = ActressGears.AgatsumaKaede.top;
    equipmentBottoms: Gear[] = ActressGears.AgatsumaKaede.bottom;
}

class AgatsumaKaede02 extends Character {
    name: string = '吾妻 楓';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 360;
    atkCloseMin: number = 135;
    atkCloseMax: number = 360;
    attrClose: number = 0;
    atkShot: number = 337;
    atkShotMin: number = 126;
    atkShotMax: number = 337;
    attrShot: number = 0;
    def: number = 408;
    defMin: number = 153;
    defMax: number = 408;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AgatsumaKaede.long;
    weaponCloses: Gear[] = ActressGears.AgatsumaKaede.short;
    equipmentTops: Gear[] = ActressGears.AgatsumaKaede.top;
    equipmentBottoms: Gear[] = ActressGears.AgatsumaKaede.bottom;
}

class AgatsumaKaede04 extends Character {
    name: string = '吾妻 楓';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 631;
    atkCloseMin: number = 180;
    atkCloseMax: number = 631;
    attrClose: number = 0;
    atkShot: number = 589;
    atkShotMin: number = 168;
    atkShotMax: number = 589;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AgatsumaKaede.long;
    weaponCloses: Gear[] = ActressGears.AgatsumaKaede.short;
    equipmentTops: Gear[] = ActressGears.AgatsumaKaede.top;
    equipmentBottoms: Gear[] = ActressGears.AgatsumaKaede.bottom;
}

class AgatsumaKaede05 extends Character {
    name: string = '吾妻 楓';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 811;
    atkCloseMin: number = 225;
    atkCloseMax: number = 811;
    attrClose: number = 0;
    atkShot: number = 757;
    atkShotMin: number = 210;
    atkShotMax: number = 757;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AgatsumaKaede.long;
    weaponCloses: Gear[] = ActressGears.AgatsumaKaede.short;
    equipmentTops: Gear[] = ActressGears.AgatsumaKaede.top;
    equipmentBottoms: Gear[] = ActressGears.AgatsumaKaede.bottom;
}

class AgatsumaKaede70 extends Character {
    name: string = '吾妻 楓_皆伝';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 649;
    atkCloseMin: number = 180;
    atkCloseMax: number = 649;
    attrClose: number = 0;
    atkShot: number = 606;
    atkShotMin: number = 168;
    atkShotMax: number = 606;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sword(0.3),
        AttrTypeDict.Rifle(0.1),
        AttrTypeDict.Volt(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sword, 0.3),
        new Buff(AttrTypeId.Rifle, 0.1),
        new Buff(AttrTypeId.Volt, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.AgatsumaKaede.long;
    weaponCloses: Gear[] = ActressGears.AgatsumaKaede.short;
    equipmentTops: Gear[] = ActressGears.AgatsumaKaede.top;
    equipmentBottoms: Gear[] = ActressGears.AgatsumaKaede.bottom;
}

class AgatsumaKaede71 extends Character {
    name: string = '吾妻 楓';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 811;
    atkCloseMin: number = 225;
    atkCloseMax: number = 811;
    attrClose: number = 0;
    atkShot: number = 757;
    atkShotMin: number = 210;
    atkShotMax: number = 757;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.AgatsumaKaede.long;
    weaponCloses: Gear[] = ActressGears.AgatsumaKaede.short;
    equipmentTops: Gear[] = ActressGears.AgatsumaKaede.top;
    equipmentBottoms: Gear[] = ActressGears.AgatsumaKaede.bottom;
}

class HimukaiRin01 extends Character {
    name: string = '日向 リン';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 12;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 914;
    hpMin: number = 378;
    hpMax: number = 914;
    atkClose: number = 225;
    atkCloseMin: number = 90;
    atkCloseMax: number = 225;
    attrClose: number = 0;
    atkShot: number = 200;
    atkShotMin: number = 80;
    atkShotMax: number = 200;
    attrShot: number = 0;
    def: number = 258;
    defMin: number = 103;
    defMax: number = 258;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HimukaiRin.long;
    weaponCloses: Gear[] = ActressGears.HimukaiRin.short;
    equipmentTops: Gear[] = ActressGears.HimukaiRin.top;
    equipmentBottoms: Gear[] = ActressGears.HimukaiRin.bottom;
}

class HimukaiRin02 extends Character {
    name: string = '日向 リン';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1491;
    hpMin: number = 536;
    hpMax: number = 1491;
    atkClose: number = 360;
    atkCloseMin: number = 135;
    atkCloseMax: number = 360;
    attrClose: number = 0;
    atkShot: number = 320;
    atkShotMin: number = 120;
    atkShotMax: number = 320;
    attrShot: number = 0;
    def: number = 412;
    defMin: number = 155;
    defMax: number = 412;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HimukaiRin.long;
    weaponCloses: Gear[] = ActressGears.HimukaiRin.short;
    equipmentTops: Gear[] = ActressGears.HimukaiRin.top;
    equipmentBottoms: Gear[] = ActressGears.HimukaiRin.bottom;
}

class HimukaiRin04 extends Character {
    name: string = '日向 リン';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2636;
    hpMin: number = 725;
    hpMax: number = 2636;
    atkClose: number = 631;
    atkCloseMin: number = 180;
    atkCloseMax: number = 631;
    attrClose: number = 0;
    atkShot: number = 559;
    atkShotMin: number = 160;
    atkShotMax: number = 559;
    attrShot: number = 0;
    def: number = 721;
    defMin: number = 206;
    defMax: number = 721;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HimukaiRin.long;
    weaponCloses: Gear[] = ActressGears.HimukaiRin.short;
    equipmentTops: Gear[] = ActressGears.HimukaiRin.top;
    equipmentBottoms: Gear[] = ActressGears.HimukaiRin.bottom;
}

class HimukaiRin05 extends Character {
    name: string = '日向 リン';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3402;
    hpMin: number = 914;
    hpMax: number = 3402;
    atkClose: number = 811;
    atkCloseMin: number = 225;
    atkCloseMax: number = 811;
    attrClose: number = 0;
    atkShot: number = 719;
    atkShotMin: number = 200;
    atkShotMax: number = 719;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HimukaiRin.long;
    weaponCloses: Gear[] = ActressGears.HimukaiRin.short;
    equipmentTops: Gear[] = ActressGears.HimukaiRin.top;
    equipmentBottoms: Gear[] = ActressGears.HimukaiRin.bottom;
}

class HimukaiRin70 extends Character {
    name: string = '日向 リン_奔放';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3402;
    hpMin: number = 914;
    hpMax: number = 3402;
    atkClose: number = 649;
    atkCloseMin: number = 180;
    atkCloseMax: number = 649;
    attrClose: number = 0;
    atkShot: number = 575;
    atkShotMin: number = 160;
    atkShotMax: number = 575;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Hammer(0.3),
        AttrTypeDict.Bazooka(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Hammer, 0.3),
        new Buff(AttrTypeId.Bazooka, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.HimukaiRin.long;
    weaponCloses: Gear[] = ActressGears.HimukaiRin.short;
    equipmentTops: Gear[] = ActressGears.HimukaiRin.top;
    equipmentBottoms: Gear[] = ActressGears.HimukaiRin.bottom;
}

class HimukaiRin71 extends Character {
    name: string = '日向 リン';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3402;
    hpMin: number = 914;
    hpMax: number = 3402;
    atkClose: number = 811;
    atkCloseMin: number = 225;
    atkCloseMax: number = 811;
    attrClose: number = 0;
    atkShot: number = 719;
    atkShotMin: number = 200;
    atkShotMax: number = 719;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.HimukaiRin.long;
    weaponCloses: Gear[] = ActressGears.HimukaiRin.short;
    equipmentTops: Gear[] = ActressGears.HimukaiRin.top;
    equipmentBottoms: Gear[] = ActressGears.HimukaiRin.bottom;
}

class TakanashiRei01 extends Character {
    name: string = '小鳥遊 怜';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 11;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 144;
    atkCloseMin: number = 57;
    atkCloseMax: number = 144;
    attrClose: number = 0;
    atkShot: number = 151;
    atkShotMin: number = 60;
    atkShotMax: number = 151;
    attrShot: number = 0;
    def: number = 258;
    defMin: number = 103;
    defMax: number = 258;
    spd: number = 158;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TakanashiRei.long;
    weaponCloses: Gear[] = ActressGears.TakanashiRei.short;
    equipmentTops: Gear[] = ActressGears.TakanashiRei.top;
    equipmentBottoms: Gear[] = ActressGears.TakanashiRei.bottom;
}

class TakanashiRei02 extends Character {
    name: string = '小鳥遊 怜';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 230;
    atkCloseMin: number = 86;
    atkCloseMax: number = 230;
    attrClose: number = 0;
    atkShot: number = 241;
    atkShotMin: number = 90;
    atkShotMax: number = 241;
    attrShot: number = 0;
    def: number = 412;
    defMin: number = 155;
    defMax: number = 412;
    spd: number = 158;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TakanashiRei.long;
    weaponCloses: Gear[] = ActressGears.TakanashiRei.short;
    equipmentTops: Gear[] = ActressGears.TakanashiRei.top;
    equipmentBottoms: Gear[] = ActressGears.TakanashiRei.bottom;
}

class TakanashiRei04 extends Character {
    name: string = '小鳥遊 怜';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 402;
    atkCloseMin: number = 115;
    atkCloseMax: number = 402;
    attrClose: number = 0;
    atkShot: number = 422;
    atkShotMin: number = 121;
    atkShotMax: number = 422;
    attrShot: number = 0;
    def: number = 721;
    defMin: number = 206;
    defMax: number = 721;
    spd: number = 158;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TakanashiRei.long;
    weaponCloses: Gear[] = ActressGears.TakanashiRei.short;
    equipmentTops: Gear[] = ActressGears.TakanashiRei.top;
    equipmentBottoms: Gear[] = ActressGears.TakanashiRei.bottom;
}

class TakanashiRei05 extends Character {
    name: string = '小鳥遊 怜';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 517;
    atkCloseMin: number = 144;
    atkCloseMax: number = 517;
    attrClose: number = 0;
    atkShot: number = 543;
    atkShotMin: number = 151;
    atkShotMax: number = 543;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 158;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TakanashiRei.long;
    weaponCloses: Gear[] = ActressGears.TakanashiRei.short;
    equipmentTops: Gear[] = ActressGears.TakanashiRei.top;
    equipmentBottoms: Gear[] = ActressGears.TakanashiRei.bottom;
}

class TakanashiRei70 extends Character {
    name: string = '小鳥遊 怜_蒼穹';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 722;
    atkCloseMin: number = 200;
    atkCloseMax: number = 722;
    attrClose: number = 0;
    atkShot: number = 758;
    atkShotMin: number = 211;
    atkShotMax: number = 758;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 158;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Bazooka(0.3),
        AttrTypeDict.Sword(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.3),
        new Buff(AttrTypeId.Sword, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.TakanashiRei.long;
    weaponCloses: Gear[] = ActressGears.TakanashiRei.short;
    equipmentTops: Gear[] = ActressGears.TakanashiRei.top;
    equipmentBottoms: Gear[] = ActressGears.TakanashiRei.bottom;
}

class TakanashiRei71 extends Character {
    name: string = '小鳥遊 怜';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 517;
    atkCloseMin: number = 144;
    atkCloseMax: number = 517;
    attrClose: number = 0;
    atkShot: number = 543;
    atkShotMin: number = 151;
    atkShotMax: number = 543;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 158;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96)
    ];
    weaponShots: Gear[] = ActressGears.TakanashiRei.long;
    weaponCloses: Gear[] = ActressGears.TakanashiRei.short;
    equipmentTops: Gear[] = ActressGears.TakanashiRei.top;
    equipmentBottoms: Gear[] = ActressGears.TakanashiRei.bottom;
}

class KaneshiyaSitara01 extends Character {
    name: string = '兼志谷 シタラ';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 1;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 135;
    atkCloseMin: number = 54;
    atkCloseMax: number = 135;
    attrClose: number = 0;
    atkShot: number = 154;
    atkShotMin: number = 61;
    atkShotMax: number = 154;
    attrShot: number = 0;
    def: number = 255;
    defMin: number = 102;
    defMax: number = 255;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaneshiyaSitara.long;
    weaponCloses: Gear[] = ActressGears.KaneshiyaSitara.short;
    equipmentTops: Gear[] = ActressGears.KaneshiyaSitara.top;
    equipmentBottoms: Gear[] = ActressGears.KaneshiyaSitara.bottom;
}

class KaneshiyaSitara02 extends Character {
    name: string = '兼志谷 シタラ';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 216;
    atkCloseMin: number = 81;
    atkCloseMax: number = 216;
    attrClose: number = 0;
    atkShot: number = 246;
    atkShotMin: number = 92;
    atkShotMax: number = 246;
    attrShot: number = 0;
    def: number = 408;
    defMin: number = 153;
    defMax: number = 408;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaneshiyaSitara.long;
    weaponCloses: Gear[] = ActressGears.KaneshiyaSitara.short;
    equipmentTops: Gear[] = ActressGears.KaneshiyaSitara.top;
    equipmentBottoms: Gear[] = ActressGears.KaneshiyaSitara.bottom;
}

class KaneshiyaSitara04 extends Character {
    name: string = '兼志谷 シタラ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 378;
    atkCloseMin: number = 108;
    atkCloseMax: number = 378;
    attrClose: number = 0;
    atkShot: number = 430;
    atkShotMin: number = 123;
    atkShotMax: number = 430;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaneshiyaSitara.long;
    weaponCloses: Gear[] = ActressGears.KaneshiyaSitara.short;
    equipmentTops: Gear[] = ActressGears.KaneshiyaSitara.top;
    equipmentBottoms: Gear[] = ActressGears.KaneshiyaSitara.bottom;
}

class KaneshiyaSitara05 extends Character {
    name: string = '兼志谷 シタラ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 485;
    atkCloseMin: number = 135;
    atkCloseMax: number = 485;
    attrClose: number = 0;
    atkShot: number = 553;
    atkShotMin: number = 154;
    atkShotMax: number = 553;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaneshiyaSitara.long;
    weaponCloses: Gear[] = ActressGears.KaneshiyaSitara.short;
    equipmentTops: Gear[] = ActressGears.KaneshiyaSitara.top;
    equipmentBottoms: Gear[] = ActressGears.KaneshiyaSitara.bottom;
}

class KaneshiyaSitara70 extends Character {
    name: string = '兼志谷 シタラ_天機';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 678;
    atkCloseMin: number = 188;
    atkCloseMax: number = 678;
    attrClose: number = 0;
    atkShot: number = 773;
    atkShotMin: number = 215;
    atkShotMax: number = 773;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Sniper(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Sniper, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.KaneshiyaSitara.long;
    weaponCloses: Gear[] = ActressGears.KaneshiyaSitara.short;
    equipmentTops: Gear[] = ActressGears.KaneshiyaSitara.top;
    equipmentBottoms: Gear[] = ActressGears.KaneshiyaSitara.bottom;
}

class HirasakaYotsuyu01 extends Character {
    name: string = '比良坂 夜露';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 1;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 896;
    hpMin: number = 371;
    hpMax: number = 896;
    atkClose: number = 146;
    atkCloseMin: number = 59;
    atkCloseMax: number = 146;
    attrClose: number = 0;
    atkShot: number = 145;
    atkShotMin: number = 58;
    atkShotMax: number = 145;
    attrShot: number = 0;
    def: number = 255;
    defMin: number = 102;
    defMax: number = 255;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HirasakaYotsuyu.long;
    weaponCloses: Gear[] = ActressGears.HirasakaYotsuyu.short;
    equipmentTops: Gear[] = ActressGears.HirasakaYotsuyu.top;
    equipmentBottoms: Gear[] = ActressGears.HirasakaYotsuyu.bottom;
}

class HirasakaYotsuyu02 extends Character {
    name: string = '比良坂 夜露';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1463;
    hpMin: number = 525;
    hpMax: number = 1463;
    atkClose: number = 234;
    atkCloseMin: number = 88;
    atkCloseMax: number = 234;
    attrClose: number = 0;
    atkShot: number = 232;
    atkShotMin: number = 87;
    atkShotMax: number = 232;
    attrShot: number = 0;
    def: number = 408;
    defMin: number = 153;
    defMax: number = 408;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HirasakaYotsuyu.long;
    weaponCloses: Gear[] = ActressGears.HirasakaYotsuyu.short;
    equipmentTops: Gear[] = ActressGears.HirasakaYotsuyu.top;
    equipmentBottoms: Gear[] = ActressGears.HirasakaYotsuyu.bottom;
}

class HirasakaYotsuyu04 extends Character {
    name: string = '比良坂 夜露';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2585;
    hpMin: number = 711;
    hpMax: number = 2585;
    atkClose: number = 410;
    atkCloseMin: number = 117;
    atkCloseMax: number = 410;
    attrClose: number = 0;
    atkShot: number = 406;
    atkShotMin: number = 116;
    atkShotMax: number = 406;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HirasakaYotsuyu.long;
    weaponCloses: Gear[] = ActressGears.HirasakaYotsuyu.short;
    equipmentTops: Gear[] = ActressGears.HirasakaYotsuyu.top;
    equipmentBottoms: Gear[] = ActressGears.HirasakaYotsuyu.bottom;
}

class HirasakaYotsuyu05 extends Character {
    name: string = '比良坂 夜露';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 527;
    atkCloseMin: number = 146;
    atkCloseMax: number = 527;
    attrClose: number = 0;
    atkShot: number = 522;
    atkShotMin: number = 145;
    atkShotMax: number = 522;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HirasakaYotsuyu.long;
    weaponCloses: Gear[] = ActressGears.HirasakaYotsuyu.short;
    equipmentTops: Gear[] = ActressGears.HirasakaYotsuyu.top;
    equipmentBottoms: Gear[] = ActressGears.HirasakaYotsuyu.bottom;
}

class HirasakaYotsuyu70 extends Character {
    name: string = '比良坂 夜露_勇躍';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 618;
    atkCloseMin: number = 172;
    atkCloseMax: number = 618;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Sword(0.1),
        AttrTypeDict.Volt(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Sword, 0.1),
        new Buff(AttrTypeId.Volt, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.HirasakaYotsuyu.long;
    weaponCloses: Gear[] = ActressGears.HirasakaYotsuyu.short;
    equipmentTops: Gear[] = ActressGears.HirasakaYotsuyu.top;
    equipmentBottoms: Gear[] = ActressGears.HirasakaYotsuyu.bottom;
}

class MomoshinaFumika01 extends Character {
    name: string = '百科 文嘉';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 1;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 206;
    atkCloseMin: number = 82;
    atkCloseMax: number = 206;
    attrClose: number = 0;
    atkShot: number = 221;
    atkShotMin: number = 88;
    atkShotMax: number = 221;
    attrShot: number = 0;
    def: number = 255;
    defMin: number = 102;
    defMax: number = 255;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MomoshinaFumika.long;
    weaponCloses: Gear[] = ActressGears.MomoshinaFumika.short;
    equipmentTops: Gear[] = ActressGears.MomoshinaFumika.top;
    equipmentBottoms: Gear[] = ActressGears.MomoshinaFumika.bottom;
}

class MomoshinaFumika02 extends Character {
    name: string = '百科 文嘉';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 330;
    atkCloseMin: number = 124;
    atkCloseMax: number = 330;
    attrClose: number = 0;
    atkShot: number = 354;
    atkShotMin: number = 133;
    atkShotMax: number = 354;
    attrShot: number = 0;
    def: number = 408;
    defMin: number = 153;
    defMax: number = 408;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MomoshinaFumika.long;
    weaponCloses: Gear[] = ActressGears.MomoshinaFumika.short;
    equipmentTops: Gear[] = ActressGears.MomoshinaFumika.top;
    equipmentBottoms: Gear[] = ActressGears.MomoshinaFumika.bottom;
}

class MomoshinaFumika04 extends Character {
    name: string = '百科 文嘉';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 577;
    atkCloseMin: number = 165;
    atkCloseMax: number = 577;
    attrClose: number = 0;
    atkShot: number = 619;
    atkShotMin: number = 177;
    atkShotMax: number = 619;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MomoshinaFumika.long;
    weaponCloses: Gear[] = ActressGears.MomoshinaFumika.short;
    equipmentTops: Gear[] = ActressGears.MomoshinaFumika.top;
    equipmentBottoms: Gear[] = ActressGears.MomoshinaFumika.bottom;
}

class MomoshinaFumika05 extends Character {
    name: string = '百科 文嘉';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 742;
    atkCloseMin: number = 206;
    atkCloseMax: number = 742;
    attrClose: number = 0;
    atkShot: number = 796;
    atkShotMin: number = 221;
    atkShotMax: number = 796;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MomoshinaFumika.long;
    weaponCloses: Gear[] = ActressGears.MomoshinaFumika.short;
    equipmentTops: Gear[] = ActressGears.MomoshinaFumika.top;
    equipmentBottoms: Gear[] = ActressGears.MomoshinaFumika.bottom;
}

class MomoshinaFumika70 extends Character {
    name: string = '百科 文嘉_智将';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 594;
    atkCloseMin: number = 165;
    atkCloseMax: number = 594;
    attrClose: number = 0;
    atkShot: number = 636;
    atkShotMin: number = 177;
    atkShotMax: number = 636;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Bazooka(0.3),
        AttrTypeDict.Sword(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Bazooka, 0.3),
        new Buff(AttrTypeId.Sword, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.MomoshinaFumika.long;
    weaponCloses: Gear[] = ActressGears.MomoshinaFumika.short;
    equipmentTops: Gear[] = ActressGears.MomoshinaFumika.top;
    equipmentBottoms: Gear[] = ActressGears.MomoshinaFumika.bottom;
}

class VirginiaGlynnberets01 extends Character {
    name: string = 'バージニア・G';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 14;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 887;
    hpMin: number = 367;
    hpMax: number = 887;
    atkClose: number = 217;
    atkCloseMin: number = 87;
    atkCloseMax: number = 217;
    attrClose: number = 0;
    atkShot: number = 223;
    atkShotMin: number = 89;
    atkShotMax: number = 223;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.VirginiaGlynnberets.long;
    weaponCloses: Gear[] = ActressGears.VirginiaGlynnberets.short;
    equipmentTops: Gear[] = ActressGears.VirginiaGlynnberets.top;
    equipmentBottoms: Gear[] = ActressGears.VirginiaGlynnberets.bottom;
}

class VirginiaGlynnberets02 extends Character {
    name: string = 'バージニア・G';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1448;
    hpMin: number = 520;
    hpMax: number = 1448;
    atkClose: number = 347;
    atkCloseMin: number = 130;
    atkCloseMax: number = 347;
    attrClose: number = 0;
    atkShot: number = 357;
    atkShotMin: number = 134;
    atkShotMax: number = 357;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.VirginiaGlynnberets.long;
    weaponCloses: Gear[] = ActressGears.VirginiaGlynnberets.short;
    equipmentTops: Gear[] = ActressGears.VirginiaGlynnberets.top;
    equipmentBottoms: Gear[] = ActressGears.VirginiaGlynnberets.bottom;
}

class VirginiaGlynnberets04 extends Character {
    name: string = 'バージニア・G';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 607;
    atkCloseMin: number = 173;
    atkCloseMax: number = 607;
    attrClose: number = 0;
    atkShot: number = 625;
    atkShotMin: number = 179;
    atkShotMax: number = 625;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.VirginiaGlynnberets.long;
    weaponCloses: Gear[] = ActressGears.VirginiaGlynnberets.short;
    equipmentTops: Gear[] = ActressGears.VirginiaGlynnberets.top;
    equipmentBottoms: Gear[] = ActressGears.VirginiaGlynnberets.bottom;
}

class VirginiaGlynnberets05 extends Character {
    name: string = 'バージニア・G';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 780;
    atkCloseMin: number = 217;
    atkCloseMax: number = 780;
    attrClose: number = 0;
    atkShot: number = 803;
    atkShotMin: number = 223;
    atkShotMax: number = 803;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.VirginiaGlynnberets.long;
    weaponCloses: Gear[] = ActressGears.VirginiaGlynnberets.short;
    equipmentTops: Gear[] = ActressGears.VirginiaGlynnberets.top;
    equipmentBottoms: Gear[] = ActressGears.VirginiaGlynnberets.bottom;
}

class VirginiaGlynnberets70 extends Character {
    name: string = 'バージニア_MOBIUS';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 578;
    atkCloseMin: number = 161;
    atkCloseMax: number = 578;
    attrClose: number = 0;
    atkShot: number = 595;
    atkShotMin: number = 165;
    atkShotMax: number = 595;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.9),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Sword(0.1),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.9),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Sword, 0.1),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.VirginiaGlynnberets.long;
    weaponCloses: Gear[] = ActressGears.VirginiaGlynnberets.short;
    equipmentTops: Gear[] = ActressGears.VirginiaGlynnberets.top;
    equipmentBottoms: Gear[] = ActressGears.VirginiaGlynnberets.bottom;
}

class FujinoYayoi01 extends Character {
    name: string = '藤野 やよい';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 8;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 896;
    hpMin: number = 371;
    hpMax: number = 896;
    atkClose: number = 142;
    atkCloseMin: number = 57;
    atkCloseMax: number = 142;
    attrClose: number = 0;
    atkShot: number = 146;
    atkShotMin: number = 59;
    atkShotMax: number = 146;
    attrShot: number = 0;
    def: number = 245;
    defMin: number = 98;
    defMax: number = 245;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FujinoYayoi.long;
    weaponCloses: Gear[] = ActressGears.FujinoYayoi.short;
    equipmentTops: Gear[] = ActressGears.FujinoYayoi.top;
    equipmentBottoms: Gear[] = ActressGears.FujinoYayoi.bottom;
}

class FujinoYayoi02 extends Character {
    name: string = '藤野 やよい';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1463;
    hpMin: number = 525;
    hpMax: number = 1463;
    atkClose: number = 227;
    atkCloseMin: number = 85;
    atkCloseMax: number = 227;
    attrClose: number = 0;
    atkShot: number = 234;
    atkShotMin: number = 88;
    atkShotMax: number = 234;
    attrShot: number = 0;
    def: number = 392;
    defMin: number = 147;
    defMax: number = 392;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FujinoYayoi.long;
    weaponCloses: Gear[] = ActressGears.FujinoYayoi.short;
    equipmentTops: Gear[] = ActressGears.FujinoYayoi.top;
    equipmentBottoms: Gear[] = ActressGears.FujinoYayoi.bottom;
}

class FujinoYayoi04 extends Character {
    name: string = '藤野 やよい';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2585;
    hpMin: number = 711;
    hpMax: number = 2585;
    atkClose: number = 398;
    atkCloseMin: number = 114;
    atkCloseMax: number = 398;
    attrClose: number = 0;
    atkShot: number = 410;
    atkShotMin: number = 117;
    atkShotMax: number = 410;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FujinoYayoi.long;
    weaponCloses: Gear[] = ActressGears.FujinoYayoi.short;
    equipmentTops: Gear[] = ActressGears.FujinoYayoi.top;
    equipmentBottoms: Gear[] = ActressGears.FujinoYayoi.bottom;
}

class FujinoYayoi05 extends Character {
    name: string = '藤野 やよい';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 512;
    atkCloseMin: number = 142;
    atkCloseMax: number = 512;
    attrClose: number = 0;
    atkShot: number = 527;
    atkShotMin: number = 146;
    atkShotMax: number = 527;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.ResistIce(1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.ResistIce, 1)
    ];
    weaponShots: Gear[] = ActressGears.FujinoYayoi.long;
    weaponCloses: Gear[] = ActressGears.FujinoYayoi.short;
    equipmentTops: Gear[] = ActressGears.FujinoYayoi.top;
    equipmentBottoms: Gear[] = ActressGears.FujinoYayoi.bottom;
}

class FujinoYayoi70 extends Character {
    name: string = '藤野 やよい_無常';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 714;
    atkCloseMin: number = 198;
    atkCloseMax: number = 714;
    attrClose: number = 0;
    atkShot: number = 736;
    atkShotMin: number = 205;
    atkShotMax: number = 736;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Twin(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Twin, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.FujinoYayoi.long;
    weaponCloses: Gear[] = ActressGears.FujinoYayoi.short;
    equipmentTops: Gear[] = ActressGears.FujinoYayoi.top;
    equipmentBottoms: Gear[] = ActressGears.FujinoYayoi.bottom;
}

class AikawaAika01 extends Character {
    name: string = '相河 愛花';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 7;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 887;
    hpMin: number = 367;
    hpMax: number = 887;
    atkClose: number = 136;
    atkCloseMin: number = 55;
    atkCloseMax: number = 136;
    attrClose: number = 0;
    atkShot: number = 149;
    atkShotMin: number = 60;
    atkShotMax: number = 149;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AikawaAika.long;
    weaponCloses: Gear[] = ActressGears.AikawaAika.short;
    equipmentTops: Gear[] = ActressGears.AikawaAika.top;
    equipmentBottoms: Gear[] = ActressGears.AikawaAika.bottom;
}

class AikawaAika02 extends Character {
    name: string = '相河 愛花';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1448;
    hpMin: number = 520;
    hpMax: number = 1448;
    atkClose: number = 218;
    atkCloseMin: number = 82;
    atkCloseMax: number = 218;
    attrClose: number = 0;
    atkShot: number = 239;
    atkShotMin: number = 90;
    atkShotMax: number = 239;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AikawaAika.long;
    weaponCloses: Gear[] = ActressGears.AikawaAika.short;
    equipmentTops: Gear[] = ActressGears.AikawaAika.top;
    equipmentBottoms: Gear[] = ActressGears.AikawaAika.bottom;
}

class AikawaAika04 extends Character {
    name: string = '相河 愛花';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 382;
    atkCloseMin: number = 109;
    atkCloseMax: number = 382;
    attrClose: number = 0;
    atkShot: number = 418;
    atkShotMin: number = 119;
    atkShotMax: number = 418;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AikawaAika.long;
    weaponCloses: Gear[] = ActressGears.AikawaAika.short;
    equipmentTops: Gear[] = ActressGears.AikawaAika.top;
    equipmentBottoms: Gear[] = ActressGears.AikawaAika.bottom;
}

class AikawaAika05 extends Character {
    name: string = '相河 愛花';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 491;
    atkCloseMin: number = 136;
    atkCloseMax: number = 491;
    attrClose: number = 0;
    atkShot: number = 538;
    atkShotMin: number = 149;
    atkShotMax: number = 538;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AikawaAika.long;
    weaponCloses: Gear[] = ActressGears.AikawaAika.short;
    equipmentTops: Gear[] = ActressGears.AikawaAika.top;
    equipmentBottoms: Gear[] = ActressGears.AikawaAika.bottom;
}

class AikawaAika70 extends Character {
    name: string = '相河 愛花_仁愛';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 685;
    atkCloseMin: number = 190;
    atkCloseMax: number = 685;
    attrClose: number = 0;
    atkShot: number = 751;
    atkShotMin: number = 209;
    atkShotMax: number = 751;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Hammer(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Hammer, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.AikawaAika.long;
    weaponCloses: Gear[] = ActressGears.AikawaAika.short;
    equipmentTops: Gear[] = ActressGears.AikawaAika.top;
    equipmentBottoms: Gear[] = ActressGears.AikawaAika.bottom;
}

class IchijoAyaka01 extends Character {
    name: string = '一条 綾香';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 7;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 221;
    atkCloseMin: number = 88;
    atkCloseMax: number = 221;
    attrClose: number = 0;
    atkShot: number = 213;
    atkShotMin: number = 85;
    atkShotMax: number = 213;
    attrShot: number = 0;
    def: number = 240;
    defMin: number = 96;
    defMax: number = 240;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.IchijoAyaka.long;
    weaponCloses: Gear[] = ActressGears.IchijoAyaka.short;
    equipmentTops: Gear[] = ActressGears.IchijoAyaka.top;
    equipmentBottoms: Gear[] = ActressGears.IchijoAyaka.bottom;
}

class IchijoAyaka02 extends Character {
    name: string = '一条 綾香';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 354;
    atkCloseMin: number = 133;
    atkCloseMax: number = 354;
    attrClose: number = 0;
    atkShot: number = 340;
    atkShotMin: number = 128;
    atkShotMax: number = 340;
    attrShot: number = 0;
    def: number = 384;
    defMin: number = 144;
    defMax: number = 384;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.IchijoAyaka.long;
    weaponCloses: Gear[] = ActressGears.IchijoAyaka.short;
    equipmentTops: Gear[] = ActressGears.IchijoAyaka.top;
    equipmentBottoms: Gear[] = ActressGears.IchijoAyaka.bottom;
}

class IchijoAyaka04 extends Character {
    name: string = '一条 綾香';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 619;
    atkCloseMin: number = 177;
    atkCloseMax: number = 619;
    attrClose: number = 0;
    atkShot: number = 595;
    atkShotMin: number = 170;
    atkShotMax: number = 595;
    attrShot: number = 0;
    def: number = 672;
    defMin: number = 192;
    defMax: number = 672;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.IchijoAyaka.long;
    weaponCloses: Gear[] = ActressGears.IchijoAyaka.short;
    equipmentTops: Gear[] = ActressGears.IchijoAyaka.top;
    equipmentBottoms: Gear[] = ActressGears.IchijoAyaka.bottom;
}

class IchijoAyaka05 extends Character {
    name: string = '一条 綾香';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 796;
    atkCloseMin: number = 221;
    atkCloseMax: number = 796;
    attrClose: number = 0;
    atkShot: number = 765;
    atkShotMin: number = 213;
    atkShotMax: number = 765;
    attrShot: number = 0;
    def: number = 864;
    defMin: number = 240;
    defMax: number = 864;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.IchijoAyaka.long;
    weaponCloses: Gear[] = ActressGears.IchijoAyaka.short;
    equipmentTops: Gear[] = ActressGears.IchijoAyaka.top;
    equipmentBottoms: Gear[] = ActressGears.IchijoAyaka.bottom;
}

class IchijoAyaka70 extends Character {
    name: string = '一条 綾香_英俊';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 636;
    atkCloseMin: number = 177;
    atkCloseMax: number = 636;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 864;
    defMin: number = 240;
    defMax: number = 864;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Dagger(0.3),
        AttrTypeDict.Twin(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Dagger, 0.3),
        new Buff(AttrTypeId.Twin, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.IchijoAyaka.long;
    weaponCloses: Gear[] = ActressGears.IchijoAyaka.short;
    equipmentTops: Gear[] = ActressGears.IchijoAyaka.top;
    equipmentBottoms: Gear[] = ActressGears.IchijoAyaka.bottom;
}

class YotsuyaYumi01 extends Character {
    name: string = '四谷 ゆみ';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 9;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 835;
    hpMin: number = 346;
    hpMax: number = 835;
    atkClose: number = 141;
    atkCloseMin: number = 56;
    atkCloseMax: number = 141;
    attrClose: number = 0;
    atkShot: number = 151;
    atkShotMin: number = 60;
    atkShotMax: number = 151;
    attrShot: number = 0;
    def: number = 265;
    defMin: number = 106;
    defMax: number = 265;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YotsuyaYumi.long;
    weaponCloses: Gear[] = ActressGears.YotsuyaYumi.short;
    equipmentTops: Gear[] = ActressGears.YotsuyaYumi.top;
    equipmentBottoms: Gear[] = ActressGears.YotsuyaYumi.bottom;
}

class YotsuyaYumi02 extends Character {
    name: string = '四谷 ゆみ';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1363;
    hpMin: number = 490;
    hpMax: number = 1363;
    atkClose: number = 225;
    atkCloseMin: number = 84;
    atkCloseMax: number = 225;
    attrClose: number = 0;
    atkShot: number = 241;
    atkShotMin: number = 90;
    atkShotMax: number = 241;
    attrShot: number = 0;
    def: number = 424;
    defMin: number = 159;
    defMax: number = 424;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YotsuyaYumi.long;
    weaponCloses: Gear[] = ActressGears.YotsuyaYumi.short;
    equipmentTops: Gear[] = ActressGears.YotsuyaYumi.top;
    equipmentBottoms: Gear[] = ActressGears.YotsuyaYumi.bottom;
}

class YotsuyaYumi04 extends Character {
    name: string = '四谷 ゆみ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2410;
    hpMin: number = 662;
    hpMax: number = 2410;
    atkClose: number = 394;
    atkCloseMin: number = 113;
    atkCloseMax: number = 394;
    attrClose: number = 0;
    atkShot: number = 422;
    atkShotMin: number = 121;
    atkShotMax: number = 422;
    attrShot: number = 0;
    def: number = 742;
    defMin: number = 212;
    defMax: number = 742;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YotsuyaYumi.long;
    weaponCloses: Gear[] = ActressGears.YotsuyaYumi.short;
    equipmentTops: Gear[] = ActressGears.YotsuyaYumi.top;
    equipmentBottoms: Gear[] = ActressGears.YotsuyaYumi.bottom;
}

class YotsuyaYumi05 extends Character {
    name: string = '四谷 ゆみ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3110;
    hpMin: number = 835;
    hpMax: number = 3110;
    atkClose: number = 506;
    atkCloseMin: number = 141;
    atkCloseMax: number = 506;
    attrClose: number = 0;
    atkShot: number = 543;
    atkShotMin: number = 151;
    atkShotMax: number = 543;
    attrShot: number = 0;
    def: number = 954;
    defMin: number = 265;
    defMax: number = 954;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YotsuyaYumi.long;
    weaponCloses: Gear[] = ActressGears.YotsuyaYumi.short;
    equipmentTops: Gear[] = ActressGears.YotsuyaYumi.top;
    equipmentBottoms: Gear[] = ActressGears.YotsuyaYumi.bottom;
}

class YotsuyaYumi70 extends Character {
    name: string = '四谷 ゆみ_絢爛';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3110;
    hpMin: number = 835;
    hpMax: number = 3110;
    atkClose: number = 707;
    atkCloseMin: number = 196;
    atkCloseMax: number = 707;
    attrClose: number = 0;
    atkShot: number = 758;
    atkShotMin: number = 211;
    atkShotMax: number = 758;
    attrShot: number = 0;
    def: number = 954;
    defMin: number = 265;
    defMax: number = 954;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Sword(0.3),
        AttrTypeDict.Bazooka(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Sword, 0.3),
        new Buff(AttrTypeId.Bazooka, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.YotsuyaYumi.long;
    weaponCloses: Gear[] = ActressGears.YotsuyaYumi.short;
    equipmentTops: Gear[] = ActressGears.YotsuyaYumi.top;
    equipmentBottoms: Gear[] = ActressGears.YotsuyaYumi.bottom;
}

class NikotamaMai01 extends Character {
    name: string = '二子玉 舞';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 221;
    atkCloseMin: number = 88;
    atkCloseMax: number = 221;
    attrClose: number = 0;
    atkShot: number = 200;
    atkShotMin: number = 80;
    atkShotMax: number = 200;
    attrShot: number = 0;
    def: number = 255;
    defMin: number = 102;
    defMax: number = 255;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikotamaMai.long;
    weaponCloses: Gear[] = ActressGears.NikotamaMai.short;
    equipmentTops: Gear[] = ActressGears.NikotamaMai.top;
    equipmentBottoms: Gear[] = ActressGears.NikotamaMai.bottom;
}

class NikotamaMai02 extends Character {
    name: string = '二子玉 舞';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 354;
    atkCloseMin: number = 133;
    atkCloseMax: number = 354;
    attrClose: number = 0;
    atkShot: number = 320;
    atkShotMin: number = 120;
    atkShotMax: number = 320;
    attrShot: number = 0;
    def: number = 408;
    defMin: number = 153;
    defMax: number = 408;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikotamaMai.long;
    weaponCloses: Gear[] = ActressGears.NikotamaMai.short;
    equipmentTops: Gear[] = ActressGears.NikotamaMai.top;
    equipmentBottoms: Gear[] = ActressGears.NikotamaMai.bottom;
}

class NikotamaMai04 extends Character {
    name: string = '二子玉 舞';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 619;
    atkCloseMin: number = 177;
    atkCloseMax: number = 619;
    attrClose: number = 0;
    atkShot: number = 559;
    atkShotMin: number = 160;
    atkShotMax: number = 559;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikotamaMai.long;
    weaponCloses: Gear[] = ActressGears.NikotamaMai.short;
    equipmentTops: Gear[] = ActressGears.NikotamaMai.top;
    equipmentBottoms: Gear[] = ActressGears.NikotamaMai.bottom;
}

class NikotamaMai05 extends Character {
    name: string = '二子玉 舞';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 796;
    atkCloseMin: number = 221;
    atkCloseMax: number = 796;
    attrClose: number = 0;
    atkShot: number = 719;
    atkShotMin: number = 200;
    atkShotMax: number = 719;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikotamaMai.long;
    weaponCloses: Gear[] = ActressGears.NikotamaMai.short;
    equipmentTops: Gear[] = ActressGears.NikotamaMai.top;
    equipmentBottoms: Gear[] = ActressGears.NikotamaMai.bottom;
}

class NikotamaMai70 extends Character {
    name: string = '二子玉 舞_繊麗';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 590;
    atkCloseMin: number = 164;
    atkCloseMax: number = 590;
    attrClose: number = 0;
    atkShot: number = 533;
    atkShotMin: number = 148;
    atkShotMax: number = 533;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.9),
        AttrTypeDict.Dagger(0.3),
        AttrTypeDict.Rifle(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.9),
        new Buff(AttrTypeId.Dagger, 0.3),
        new Buff(AttrTypeId.Rifle, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.NikotamaMai.long;
    weaponCloses: Gear[] = ActressGears.NikotamaMai.short;
    equipmentTops: Gear[] = ActressGears.NikotamaMai.top;
    equipmentBottoms: Gear[] = ActressGears.NikotamaMai.bottom;
}

class KoashiMutsumi01 extends Character {
    name: string = '小芦 睦海';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 835;
    hpMin: number = 346;
    hpMax: number = 835;
    atkClose: number = 223;
    atkCloseMin: number = 89;
    atkCloseMax: number = 223;
    attrClose: number = 0;
    atkShot: number = 210;
    atkShotMin: number = 84;
    atkShotMax: number = 210;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KoashiMutsumi.long;
    weaponCloses: Gear[] = ActressGears.KoashiMutsumi.short;
    equipmentTops: Gear[] = ActressGears.KoashiMutsumi.top;
    equipmentBottoms: Gear[] = ActressGears.KoashiMutsumi.bottom;
}

class KoashiMutsumi02 extends Character {
    name: string = '小芦 睦海';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1363;
    hpMin: number = 490;
    hpMax: number = 1363;
    atkClose: number = 357;
    atkCloseMin: number = 134;
    atkCloseMax: number = 357;
    attrClose: number = 0;
    atkShot: number = 337;
    atkShotMin: number = 126;
    atkShotMax: number = 337;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KoashiMutsumi.long;
    weaponCloses: Gear[] = ActressGears.KoashiMutsumi.short;
    equipmentTops: Gear[] = ActressGears.KoashiMutsumi.top;
    equipmentBottoms: Gear[] = ActressGears.KoashiMutsumi.bottom;
}

class KoashiMutsumi04 extends Character {
    name: string = '小芦 睦海';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2410;
    hpMin: number = 662;
    hpMax: number = 2410;
    atkClose: number = 625;
    atkCloseMin: number = 179;
    atkCloseMax: number = 625;
    attrClose: number = 0;
    atkShot: number = 589;
    atkShotMin: number = 168;
    atkShotMax: number = 589;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KoashiMutsumi.long;
    weaponCloses: Gear[] = ActressGears.KoashiMutsumi.short;
    equipmentTops: Gear[] = ActressGears.KoashiMutsumi.top;
    equipmentBottoms: Gear[] = ActressGears.KoashiMutsumi.bottom;
}

class KoashiMutsumi05 extends Character {
    name: string = '小芦 睦海';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3110;
    hpMin: number = 835;
    hpMax: number = 3110;
    atkClose: number = 803;
    atkCloseMin: number = 223;
    atkCloseMax: number = 803;
    attrClose: number = 0;
    atkShot: number = 757;
    atkShotMin: number = 210;
    atkShotMax: number = 757;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KoashiMutsumi.long;
    weaponCloses: Gear[] = ActressGears.KoashiMutsumi.short;
    equipmentTops: Gear[] = ActressGears.KoashiMutsumi.top;
    equipmentBottoms: Gear[] = ActressGears.KoashiMutsumi.bottom;
}

class KoashiMutsumi70 extends Character {
    name: string = '小芦 睦海_剛毅';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3110;
    hpMin: number = 835;
    hpMax: number = 3110;
    atkClose: number = 643;
    atkCloseMin: number = 179;
    atkCloseMax: number = 643;
    attrClose: number = 0;
    atkShot: number = 606;
    atkShotMin: number = 168;
    atkShotMax: number = 606;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Hammer(0.3),
        AttrTypeDict.Sniper(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Hammer, 0.3),
        new Buff(AttrTypeId.Sniper, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.KoashiMutsumi.long;
    weaponCloses: Gear[] = ActressGears.KoashiMutsumi.short;
    equipmentTops: Gear[] = ActressGears.KoashiMutsumi.top;
    equipmentBottoms: Gear[] = ActressGears.KoashiMutsumi.bottom;
}

class YamanoKaoruko01 extends Character {
    name: string = '山野 薫子';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 172;
    atkCloseMin: number = 69;
    atkCloseMax: number = 172;
    attrClose: number = 0;
    atkShot: number = 172;
    atkShotMin: number = 69;
    atkShotMax: number = 172;
    attrShot: number = 0;
    def: number = 258;
    defMin: number = 103;
    defMax: number = 258;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YamanoKaoruko.long;
    weaponCloses: Gear[] = ActressGears.YamanoKaoruko.short;
    equipmentTops: Gear[] = ActressGears.YamanoKaoruko.top;
    equipmentBottoms: Gear[] = ActressGears.YamanoKaoruko.bottom;
}

class YamanoKaoruko02 extends Character {
    name: string = '山野 薫子';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 275;
    atkCloseMin: number = 103;
    atkCloseMax: number = 275;
    attrClose: number = 0;
    atkShot: number = 275;
    atkShotMin: number = 103;
    atkShotMax: number = 275;
    attrShot: number = 0;
    def: number = 412;
    defMin: number = 155;
    defMax: number = 412;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YamanoKaoruko.long;
    weaponCloses: Gear[] = ActressGears.YamanoKaoruko.short;
    equipmentTops: Gear[] = ActressGears.YamanoKaoruko.top;
    equipmentBottoms: Gear[] = ActressGears.YamanoKaoruko.bottom;
}

class YamanoKaoruko04 extends Character {
    name: string = '山野 薫子';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 481;
    atkCloseMin: number = 137;
    atkCloseMax: number = 481;
    attrClose: number = 0;
    atkShot: number = 481;
    atkShotMin: number = 137;
    atkShotMax: number = 481;
    attrShot: number = 0;
    def: number = 721;
    defMin: number = 206;
    defMax: number = 721;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YamanoKaoruko.long;
    weaponCloses: Gear[] = ActressGears.YamanoKaoruko.short;
    equipmentTops: Gear[] = ActressGears.YamanoKaoruko.top;
    equipmentBottoms: Gear[] = ActressGears.YamanoKaoruko.bottom;
}

class YamanoKaoruko05 extends Character {
    name: string = '山野 薫子';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 618;
    atkCloseMin: number = 172;
    atkCloseMax: number = 618;
    attrClose: number = 0;
    atkShot: number = 618;
    atkShotMin: number = 172;
    atkShotMax: number = 618;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YamanoKaoruko.long;
    weaponCloses: Gear[] = ActressGears.YamanoKaoruko.short;
    equipmentTops: Gear[] = ActressGears.YamanoKaoruko.top;
    equipmentBottoms: Gear[] = ActressGears.YamanoKaoruko.bottom;
}

class YamanoKaoruko70 extends Character {
    name: string = '山野 薫子_玄妙';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 527;
    atkCloseMin: number = 146;
    atkCloseMax: number = 527;
    attrClose: number = 0;
    atkShot: number = 527;
    atkShotMin: number = 146;
    atkShotMax: number = 527;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.YamanoKaoruko.long;
    weaponCloses: Gear[] = ActressGears.YamanoKaoruko.short;
    equipmentTops: Gear[] = ActressGears.YamanoKaoruko.top;
    equipmentBottoms: Gear[] = ActressGears.YamanoKaoruko.bottom;
}

class YorozubaMeika01 extends Character {
    name: string = '萬場 盟華';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 887;
    hpMin: number = 367;
    hpMax: number = 887;
    atkClose: number = 163;
    atkCloseMin: number = 65;
    atkCloseMax: number = 163;
    attrClose: number = 0;
    atkShot: number = 172;
    atkShotMin: number = 69;
    atkShotMax: number = 172;
    attrShot: number = 0;
    def: number = 253;
    defMin: number = 101;
    defMax: number = 253;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorozubaMeika.long;
    weaponCloses: Gear[] = ActressGears.YorozubaMeika.short;
    equipmentTops: Gear[] = ActressGears.YorozubaMeika.top;
    equipmentBottoms: Gear[] = ActressGears.YorozubaMeika.bottom;
}

class YorozubaMeika02 extends Character {
    name: string = '萬場 盟華';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1448;
    hpMin: number = 520;
    hpMax: number = 1448;
    atkClose: number = 261;
    atkCloseMin: number = 98;
    atkCloseMax: number = 261;
    attrClose: number = 0;
    atkShot: number = 275;
    atkShotMin: number = 103;
    atkShotMax: number = 275;
    attrShot: number = 0;
    def: number = 404;
    defMin: number = 152;
    defMax: number = 404;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorozubaMeika.long;
    weaponCloses: Gear[] = ActressGears.YorozubaMeika.short;
    equipmentTops: Gear[] = ActressGears.YorozubaMeika.top;
    equipmentBottoms: Gear[] = ActressGears.YorozubaMeika.bottom;
}

class YorozubaMeika04 extends Character {
    name: string = '萬場 盟華';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 457;
    atkCloseMin: number = 131;
    atkCloseMax: number = 457;
    attrClose: number = 0;
    atkShot: number = 481;
    atkShotMin: number = 137;
    atkShotMax: number = 481;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorozubaMeika.long;
    weaponCloses: Gear[] = ActressGears.YorozubaMeika.short;
    equipmentTops: Gear[] = ActressGears.YorozubaMeika.top;
    equipmentBottoms: Gear[] = ActressGears.YorozubaMeika.bottom;
}

class YorozubaMeika05 extends Character {
    name: string = '萬場 盟華';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 588;
    atkCloseMin: number = 163;
    atkCloseMax: number = 588;
    attrClose: number = 0;
    atkShot: number = 618;
    atkShotMin: number = 172;
    atkShotMax: number = 618;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorozubaMeika.long;
    weaponCloses: Gear[] = ActressGears.YorozubaMeika.short;
    equipmentTops: Gear[] = ActressGears.YorozubaMeika.top;
    equipmentBottoms: Gear[] = ActressGears.YorozubaMeika.bottom;
}

class YorozubaMeika70 extends Character {
    name: string = '萬場 盟華_極彩';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 501;
    atkCloseMin: number = 139;
    atkCloseMax: number = 501;
    attrClose: number = 0;
    atkShot: number = 527;
    atkShotMin: number = 146;
    atkShotMax: number = 527;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Twin(0.3),
        AttrTypeDict.Hammer(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Twin, 0.3),
        new Buff(AttrTypeId.Hammer, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.YorozubaMeika.long;
    weaponCloses: Gear[] = ActressGears.YorozubaMeika.short;
    equipmentTops: Gear[] = ActressGears.YorozubaMeika.top;
    equipmentBottoms: Gear[] = ActressGears.YorozubaMeika.bottom;
}

class ShimoochiaiToka01 extends Character {
    name: string = '下落合 桃歌';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 7;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 914;
    hpMin: number = 378;
    hpMax: number = 914;
    atkClose: number = 138;
    atkCloseMin: number = 55;
    atkCloseMax: number = 138;
    attrClose: number = 0;
    atkShot: number = 152;
    atkShotMin: number = 61;
    atkShotMax: number = 152;
    attrShot: number = 0;
    def: number = 243;
    defMin: number = 97;
    defMax: number = 243;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShimoochiaiToka.long;
    weaponCloses: Gear[] = ActressGears.ShimoochiaiToka.short;
    equipmentTops: Gear[] = ActressGears.ShimoochiaiToka.top;
    equipmentBottoms: Gear[] = ActressGears.ShimoochiaiToka.bottom;
}

class ShimoochiaiToka02 extends Character {
    name: string = '下落合 桃歌';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1491;
    hpMin: number = 536;
    hpMax: number = 1491;
    atkClose: number = 220;
    atkCloseMin: number = 83;
    atkCloseMax: number = 220;
    attrClose: number = 0;
    atkShot: number = 244;
    atkShotMin: number = 91;
    atkShotMax: number = 244;
    attrShot: number = 0;
    def: number = 388;
    defMin: number = 146;
    defMax: number = 388;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShimoochiaiToka.long;
    weaponCloses: Gear[] = ActressGears.ShimoochiaiToka.short;
    equipmentTops: Gear[] = ActressGears.ShimoochiaiToka.top;
    equipmentBottoms: Gear[] = ActressGears.ShimoochiaiToka.bottom;
}

class ShimoochiaiToka04 extends Character {
    name: string = '下落合 桃歌';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2636;
    hpMin: number = 725;
    hpMax: number = 2636;
    atkClose: number = 386;
    atkCloseMin: number = 110;
    atkCloseMax: number = 386;
    attrClose: number = 0;
    atkShot: number = 426;
    atkShotMin: number = 122;
    atkShotMax: number = 426;
    attrShot: number = 0;
    def: number = 679;
    defMin: number = 194;
    defMax: number = 679;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShimoochiaiToka.long;
    weaponCloses: Gear[] = ActressGears.ShimoochiaiToka.short;
    equipmentTops: Gear[] = ActressGears.ShimoochiaiToka.top;
    equipmentBottoms: Gear[] = ActressGears.ShimoochiaiToka.bottom;
}

class ShimoochiaiToka05 extends Character {
    name: string = '下落合 桃歌';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3402;
    hpMin: number = 914;
    hpMax: number = 3402;
    atkClose: number = 496;
    atkCloseMin: number = 138;
    atkCloseMax: number = 496;
    attrClose: number = 0;
    atkShot: number = 548;
    atkShotMin: number = 152;
    atkShotMax: number = 548;
    attrShot: number = 0;
    def: number = 873;
    defMin: number = 243;
    defMax: number = 873;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15),
        AttrTypeDict.Volt(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15),
        new Buff(AttrTypeId.Volt, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.ShimoochiaiToka.long;
    weaponCloses: Gear[] = ActressGears.ShimoochiaiToka.short;
    equipmentTops: Gear[] = ActressGears.ShimoochiaiToka.top;
    equipmentBottoms: Gear[] = ActressGears.ShimoochiaiToka.bottom;
}

class ShimoochiaiToka70 extends Character {
    name: string = '下落合 桃歌_明星';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3402;
    hpMin: number = 914;
    hpMax: number = 3402;
    atkClose: number = 693;
    atkCloseMin: number = 192;
    atkCloseMax: number = 693;
    attrClose: number = 0;
    atkShot: number = 765;
    atkShotMin: number = 213;
    atkShotMax: number = 765;
    attrShot: number = 0;
    def: number = 873;
    defMin: number = 243;
    defMax: number = 873;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Twin(0.3),
        AttrTypeDict.Sword(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Twin, 0.3),
        new Buff(AttrTypeId.Sword, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.ShimoochiaiToka.long;
    weaponCloses: Gear[] = ActressGears.ShimoochiaiToka.short;
    equipmentTops: Gear[] = ActressGears.ShimoochiaiToka.top;
    equipmentBottoms: Gear[] = ActressGears.ShimoochiaiToka.bottom;
}

class YorishiroEri01 extends Character {
    name: string = '依城 えり';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 7;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 896;
    hpMin: number = 371;
    hpMax: number = 896;
    atkClose: number = 135;
    atkCloseMin: number = 54;
    atkCloseMax: number = 135;
    attrClose: number = 0;
    atkShot: number = 154;
    atkShotMin: number = 61;
    atkShotMax: number = 154;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorishiroEri.long;
    weaponCloses: Gear[] = ActressGears.YorishiroEri.short;
    equipmentTops: Gear[] = ActressGears.YorishiroEri.top;
    equipmentBottoms: Gear[] = ActressGears.YorishiroEri.bottom;
}

class YorishiroEri02 extends Character {
    name: string = '依城 えり';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1463;
    hpMin: number = 525;
    hpMax: number = 1463;
    atkClose: number = 216;
    atkCloseMin: number = 81;
    atkCloseMax: number = 216;
    attrClose: number = 0;
    atkShot: number = 246;
    atkShotMin: number = 92;
    atkShotMax: number = 246;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorishiroEri.long;
    weaponCloses: Gear[] = ActressGears.YorishiroEri.short;
    equipmentTops: Gear[] = ActressGears.YorishiroEri.top;
    equipmentBottoms: Gear[] = ActressGears.YorishiroEri.bottom;
}

class YorishiroEri04 extends Character {
    name: string = '依城 えり';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2585;
    hpMin: number = 711;
    hpMax: number = 2585;
    atkClose: number = 378;
    atkCloseMin: number = 108;
    atkCloseMax: number = 378;
    attrClose: number = 0;
    atkShot: number = 430;
    atkShotMin: number = 123;
    atkShotMax: number = 430;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.YorishiroEri.long;
    weaponCloses: Gear[] = ActressGears.YorishiroEri.short;
    equipmentTops: Gear[] = ActressGears.YorishiroEri.top;
    equipmentBottoms: Gear[] = ActressGears.YorishiroEri.bottom;
}

class YorishiroEri05 extends Character {
    name: string = '依城 えり';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 485;
    atkCloseMin: number = 135;
    atkCloseMax: number = 485;
    attrClose: number = 0;
    atkShot: number = 553;
    atkShotMin: number = 154;
    atkShotMax: number = 553;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Sword(0.15),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.ResistFire(1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Sword, 0.15),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.ResistFire, 1)
    ];
    weaponShots: Gear[] = ActressGears.YorishiroEri.long;
    weaponCloses: Gear[] = ActressGears.YorishiroEri.short;
    equipmentTops: Gear[] = ActressGears.YorishiroEri.top;
    equipmentBottoms: Gear[] = ActressGears.YorishiroEri.bottom;
}

class YorishiroEri70 extends Character {
    name: string = '依城 えり_清廉';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 569;
    atkCloseMin: number = 158;
    atkCloseMax: number = 569;
    attrClose: number = 0;
    atkShot: number = 649;
    atkShotMin: number = 180;
    atkShotMax: number = 649;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Sniper(0.3),
        AttrTypeDict.Sword(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Sniper, 0.3),
        new Buff(AttrTypeId.Sword, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.YorishiroEri.long;
    weaponCloses: Gear[] = ActressGears.YorishiroEri.short;
    equipmentTops: Gear[] = ActressGears.YorishiroEri.top;
    equipmentBottoms: Gear[] = ActressGears.YorishiroEri.bottom;
}

class NiiyaSerina01 extends Character {
    name: string = '新谷 芹菜';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 853;
    hpMin: number = 353;
    hpMax: number = 853;
    atkClose: number = 205;
    atkCloseMin: number = 82;
    atkCloseMax: number = 205;
    attrClose: number = 0;
    atkShot: number = 205;
    atkShotMin: number = 82;
    atkShotMax: number = 205;
    attrShot: number = 0;
    def: number = 245;
    defMin: number = 98;
    defMax: number = 245;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NiiyaSerina.long;
    weaponCloses: Gear[] = ActressGears.NiiyaSerina.short;
    equipmentTops: Gear[] = ActressGears.NiiyaSerina.top;
    equipmentBottoms: Gear[] = ActressGears.NiiyaSerina.bottom;
}

class NiiyaSerina02 extends Character {
    name: string = '新谷 芹菜';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1392;
    hpMin: number = 500;
    hpMax: number = 1392;
    atkClose: number = 327;
    atkCloseMin: number = 123;
    atkCloseMax: number = 327;
    attrClose: number = 0;
    atkShot: number = 327;
    atkShotMin: number = 123;
    atkShotMax: number = 327;
    attrShot: number = 0;
    def: number = 392;
    defMin: number = 147;
    defMax: number = 392;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NiiyaSerina.long;
    weaponCloses: Gear[] = ActressGears.NiiyaSerina.short;
    equipmentTops: Gear[] = ActressGears.NiiyaSerina.top;
    equipmentBottoms: Gear[] = ActressGears.NiiyaSerina.bottom;
}

class NiiyaSerina04 extends Character {
    name: string = '新谷 芹菜';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2460;
    hpMin: number = 676;
    hpMax: number = 2460;
    atkClose: number = 573;
    atkCloseMin: number = 164;
    atkCloseMax: number = 573;
    attrClose: number = 0;
    atkShot: number = 573;
    atkShotMin: number = 164;
    atkShotMax: number = 573;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NiiyaSerina.long;
    weaponCloses: Gear[] = ActressGears.NiiyaSerina.short;
    equipmentTops: Gear[] = ActressGears.NiiyaSerina.top;
    equipmentBottoms: Gear[] = ActressGears.NiiyaSerina.bottom;
}

class NiiyaSerina05 extends Character {
    name: string = '新谷 芹菜';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3175;
    hpMin: number = 853;
    hpMax: number = 3175;
    atkClose: number = 736;
    atkCloseMin: number = 205;
    atkCloseMax: number = 736;
    attrClose: number = 0;
    atkShot: number = 736;
    atkShotMin: number = 205;
    atkShotMax: number = 736;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NiiyaSerina.long;
    weaponCloses: Gear[] = ActressGears.NiiyaSerina.short;
    equipmentTops: Gear[] = ActressGears.NiiyaSerina.top;
    equipmentBottoms: Gear[] = ActressGears.NiiyaSerina.bottom;
}

class NiiyaSerina70 extends Character {
    name: string = '新谷 芹菜_燐光';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3175;
    hpMin: number = 853;
    hpMax: number = 3175;
    atkClose: number = 618;
    atkCloseMin: number = 172;
    atkCloseMax: number = 618;
    attrClose: number = 0;
    atkShot: number = 618;
    atkShotMin: number = 172;
    atkShotMax: number = 618;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Dagger(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Dagger, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.NiiyaSerina.long;
    weaponCloses: Gear[] = ActressGears.NiiyaSerina.short;
    equipmentTops: Gear[] = ActressGears.NiiyaSerina.top;
    equipmentBottoms: Gear[] = ActressGears.NiiyaSerina.bottom;
}

class FumishimaAsuka01 extends Character {
    name: string = '文島 明日翔';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 3;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 162;
    atkCloseMin: number = 65;
    atkCloseMax: number = 162;
    attrClose: number = 0;
    atkShot: number = 179;
    atkShotMin: number = 71;
    atkShotMax: number = 179;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FumishimaAsuka.long;
    weaponCloses: Gear[] = ActressGears.FumishimaAsuka.short;
    equipmentTops: Gear[] = ActressGears.FumishimaAsuka.top;
    equipmentBottoms: Gear[] = ActressGears.FumishimaAsuka.bottom;
}

class FumishimaAsuka02 extends Character {
    name: string = '文島 明日翔';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 258;
    atkCloseMin: number = 97;
    atkCloseMax: number = 258;
    attrClose: number = 0;
    atkShot: number = 286;
    atkShotMin: number = 107;
    atkShotMax: number = 286;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FumishimaAsuka.long;
    weaponCloses: Gear[] = ActressGears.FumishimaAsuka.short;
    equipmentTops: Gear[] = ActressGears.FumishimaAsuka.top;
    equipmentBottoms: Gear[] = ActressGears.FumishimaAsuka.bottom;
}

class FumishimaAsuka04 extends Character {
    name: string = '文島 明日翔';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 452;
    atkCloseMin: number = 129;
    atkCloseMax: number = 452;
    attrClose: number = 0;
    atkShot: number = 500;
    atkShotMin: number = 143;
    atkShotMax: number = 500;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FumishimaAsuka.long;
    weaponCloses: Gear[] = ActressGears.FumishimaAsuka.short;
    equipmentTops: Gear[] = ActressGears.FumishimaAsuka.top;
    equipmentBottoms: Gear[] = ActressGears.FumishimaAsuka.bottom;
}

class FumishimaAsuka05 extends Character {
    name: string = '文島 明日翔';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 581;
    atkCloseMin: number = 162;
    atkCloseMax: number = 581;
    attrClose: number = 0;
    atkShot: number = 643;
    atkShotMin: number = 179;
    atkShotMax: number = 643;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FumishimaAsuka.long;
    weaponCloses: Gear[] = ActressGears.FumishimaAsuka.short;
    equipmentTops: Gear[] = ActressGears.FumishimaAsuka.top;
    equipmentBottoms: Gear[] = ActressGears.FumishimaAsuka.bottom;
}

class FumishimaAsuka70 extends Character {
    name: string = '文島 明日翔_福音';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 727;
    atkCloseMin: number = 202;
    atkCloseMax: number = 727;
    attrClose: number = 0;
    atkShot: number = 803;
    atkShotMin: number = 223;
    atkShotMax: number = 803;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Sniper(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Sniper, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.FumishimaAsuka.long;
    weaponCloses: Gear[] = ActressGears.FumishimaAsuka.short;
    equipmentTops: Gear[] = ActressGears.FumishimaAsuka.top;
    equipmentBottoms: Gear[] = ActressGears.FumishimaAsuka.bottom;
}

class NikitohKanade01 extends Character {
    name: string = '仁紀藤 奏';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 11;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 170;
    atkCloseMin: number = 68;
    atkCloseMax: number = 170;
    attrClose: number = 0;
    atkShot: number = 173;
    atkShotMin: number = 69;
    atkShotMax: number = 173;
    attrShot: number = 0;
    def: number = 245;
    defMin: number = 98;
    defMax: number = 245;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikitohKanade.long;
    weaponCloses: Gear[] = ActressGears.NikitohKanade.short;
    equipmentTops: Gear[] = ActressGears.NikitohKanade.top;
    equipmentBottoms: Gear[] = ActressGears.NikitohKanade.bottom;
}

class NikitohKanade02 extends Character {
    name: string = '仁紀藤 奏';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 272;
    atkCloseMin: number = 102;
    atkCloseMax: number = 272;
    attrClose: number = 0;
    atkShot: number = 277;
    atkShotMin: number = 104;
    atkShotMax: number = 277;
    attrShot: number = 0;
    def: number = 392;
    defMin: number = 147;
    defMax: number = 392;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikitohKanade.long;
    weaponCloses: Gear[] = ActressGears.NikitohKanade.short;
    equipmentTops: Gear[] = ActressGears.NikitohKanade.top;
    equipmentBottoms: Gear[] = ActressGears.NikitohKanade.bottom;
}

class NikitohKanade04 extends Character {
    name: string = '仁紀藤 奏';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 476;
    atkCloseMin: number = 136;
    atkCloseMax: number = 476;
    attrClose: number = 0;
    atkShot: number = 486;
    atkShotMin: number = 139;
    atkShotMax: number = 486;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikitohKanade.long;
    weaponCloses: Gear[] = ActressGears.NikitohKanade.short;
    equipmentTops: Gear[] = ActressGears.NikitohKanade.top;
    equipmentBottoms: Gear[] = ActressGears.NikitohKanade.bottom;
}

class NikitohKanade05 extends Character {
    name: string = '仁紀藤 奏';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 612;
    atkCloseMin: number = 170;
    atkCloseMax: number = 612;
    attrClose: number = 0;
    atkShot: number = 624;
    atkShotMin: number = 173;
    atkShotMax: number = 624;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikitohKanade.long;
    weaponCloses: Gear[] = ActressGears.NikitohKanade.short;
    equipmentTops: Gear[] = ActressGears.NikitohKanade.top;
    equipmentBottoms: Gear[] = ActressGears.NikitohKanade.bottom;
}

class NikitohKanade70 extends Character {
    name: string = '仁紀藤 奏_雲耀';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 522;
    atkCloseMin: number = 145;
    atkCloseMax: number = 522;
    attrClose: number = 0;
    atkShot: number = 532;
    atkShotMin: number = 148;
    atkShotMax: number = 532;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Twin(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Twin, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.NikitohKanade.long;
    weaponCloses: Gear[] = ActressGears.NikitohKanade.short;
    equipmentTops: Gear[] = ActressGears.NikitohKanade.top;
    equipmentBottoms: Gear[] = ActressGears.NikitohKanade.bottom;
}

class SutegoroShiina01 extends Character {
    name: string = '州天頃 椎奈';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 12;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 221;
    atkCloseMin: number = 88;
    atkCloseMax: number = 221;
    attrClose: number = 0;
    atkShot: number = 204;
    atkShotMin: number = 82;
    atkShotMax: number = 204;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SutegoroShiina.long;
    weaponCloses: Gear[] = ActressGears.SutegoroShiina.short;
    equipmentTops: Gear[] = ActressGears.SutegoroShiina.top;
    equipmentBottoms: Gear[] = ActressGears.SutegoroShiina.bottom;
}

class SutegoroShiina02 extends Character {
    name: string = '州天頃 椎奈';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 354;
    atkCloseMin: number = 133;
    atkCloseMax: number = 354;
    attrClose: number = 0;
    atkShot: number = 326;
    atkShotMin: number = 122;
    atkShotMax: number = 326;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SutegoroShiina.long;
    weaponCloses: Gear[] = ActressGears.SutegoroShiina.short;
    equipmentTops: Gear[] = ActressGears.SutegoroShiina.top;
    equipmentBottoms: Gear[] = ActressGears.SutegoroShiina.bottom;
}

class SutegoroShiina04 extends Character {
    name: string = '州天頃 椎奈';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 619;
    atkCloseMin: number = 177;
    atkCloseMax: number = 619;
    attrClose: number = 0;
    atkShot: number = 571;
    atkShotMin: number = 163;
    atkShotMax: number = 571;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SutegoroShiina.long;
    weaponCloses: Gear[] = ActressGears.SutegoroShiina.short;
    equipmentTops: Gear[] = ActressGears.SutegoroShiina.top;
    equipmentBottoms: Gear[] = ActressGears.SutegoroShiina.bottom;
}

class SutegoroShiina05 extends Character {
    name: string = '州天頃 椎奈';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 796;
    atkCloseMin: number = 221;
    atkCloseMax: number = 796;
    attrClose: number = 0;
    atkShot: number = 734;
    atkShotMin: number = 204;
    atkShotMax: number = 734;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SutegoroShiina.long;
    weaponCloses: Gear[] = ActressGears.SutegoroShiina.short;
    equipmentTops: Gear[] = ActressGears.SutegoroShiina.top;
    equipmentBottoms: Gear[] = ActressGears.SutegoroShiina.bottom;
}

class SutegoroShiina70 extends Character {
    name: string = '州天頃 椎奈_玉響';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 636;
    atkCloseMin: number = 177;
    atkCloseMax: number = 636;
    attrClose: number = 0;
    atkShot: number = 588;
    atkShotMin: number = 163;
    atkShotMax: number = 588;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Dagger(0.3),
        AttrTypeDict.Twin(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Dagger, 0.3),
        new Buff(AttrTypeId.Twin, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.SutegoroShiina.long;
    weaponCloses: Gear[] = ActressGears.SutegoroShiina.short;
    equipmentTops: Gear[] = ActressGears.SutegoroShiina.top;
    equipmentBottoms: Gear[] = ActressGears.SutegoroShiina.bottom;
}

class KondohChieri01 extends Character {
    name: string = '紺堂 地衛理';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 13;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 879;
    hpMin: number = 364;
    hpMax: number = 879;
    atkClose: number = 148;
    atkCloseMin: number = 59;
    atkCloseMax: number = 148;
    attrClose: number = 0;
    atkShot: number = 148;
    atkShotMin: number = 59;
    atkShotMax: number = 148;
    attrShot: number = 0;
    def: number = 253;
    defMin: number = 101;
    defMax: number = 253;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KondohChieri.long;
    weaponCloses: Gear[] = ActressGears.KondohChieri.short;
    equipmentTops: Gear[] = ActressGears.KondohChieri.top;
    equipmentBottoms: Gear[] = ActressGears.KondohChieri.bottom;
}

class KondohChieri02 extends Character {
    name: string = '紺堂 地衛理';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1434;
    hpMin: number = 515;
    hpMax: number = 1434;
    atkClose: number = 237;
    atkCloseMin: number = 89;
    atkCloseMax: number = 237;
    attrClose: number = 0;
    atkShot: number = 237;
    atkShotMin: number = 89;
    atkShotMax: number = 237;
    attrShot: number = 0;
    def: number = 404;
    defMin: number = 152;
    defMax: number = 404;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KondohChieri.long;
    weaponCloses: Gear[] = ActressGears.KondohChieri.short;
    equipmentTops: Gear[] = ActressGears.KondohChieri.top;
    equipmentBottoms: Gear[] = ActressGears.KondohChieri.bottom;
}

class KondohChieri04 extends Character {
    name: string = '紺堂 地衛理';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 414;
    atkCloseMin: number = 118;
    atkCloseMax: number = 414;
    attrClose: number = 0;
    atkShot: number = 414;
    atkShotMin: number = 118;
    atkShotMax: number = 414;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KondohChieri.long;
    weaponCloses: Gear[] = ActressGears.KondohChieri.short;
    equipmentTops: Gear[] = ActressGears.KondohChieri.top;
    equipmentBottoms: Gear[] = ActressGears.KondohChieri.bottom;
}

class KondohChieri05 extends Character {
    name: string = '紺堂 地衛理';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 532;
    atkCloseMin: number = 148;
    atkCloseMax: number = 532;
    attrClose: number = 0;
    atkShot: number = 532;
    atkShotMin: number = 148;
    atkShotMax: number = 532;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KondohChieri.long;
    weaponCloses: Gear[] = ActressGears.KondohChieri.short;
    equipmentTops: Gear[] = ActressGears.KondohChieri.top;
    equipmentBottoms: Gear[] = ActressGears.KondohChieri.bottom;
}

class KondohChieri70 extends Character {
    name: string = '紺堂 地衛理_晨星';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 624;
    atkCloseMin: number = 173;
    atkCloseMax: number = 624;
    attrClose: number = 0;
    atkShot: number = 624;
    atkShotMin: number = 173;
    atkShotMax: number = 624;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.KondohChieri.long;
    weaponCloses: Gear[] = ActressGears.KondohChieri.short;
    equipmentTops: Gear[] = ActressGears.KondohChieri.top;
    equipmentBottoms: Gear[] = ActressGears.KondohChieri.bottom;
}

class MuraoMira01 extends Character {
    name: string = '村尾 未羅';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 10;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 922;
    hpMin: number = 382;
    hpMax: number = 922;
    atkClose: number = 158;
    atkCloseMin: number = 63;
    atkCloseMax: number = 158;
    attrClose: number = 0;
    atkShot: number = 151;
    atkShotMin: number = 60;
    atkShotMax: number = 151;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.9),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.9),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MuraoMira.long;
    weaponCloses: Gear[] = ActressGears.MuraoMira.short;
    equipmentTops: Gear[] = ActressGears.MuraoMira.top;
    equipmentBottoms: Gear[] = ActressGears.MuraoMira.bottom;
}

class MuraoMira02 extends Character {
    name: string = '村尾 未羅';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1505;
    hpMin: number = 541;
    hpMax: number = 1505;
    atkClose: number = 252;
    atkCloseMin: number = 95;
    atkCloseMax: number = 252;
    attrClose: number = 0;
    atkShot: number = 242;
    atkShotMin: number = 91;
    atkShotMax: number = 242;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.9),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.9),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MuraoMira.long;
    weaponCloses: Gear[] = ActressGears.MuraoMira.short;
    equipmentTops: Gear[] = ActressGears.MuraoMira.top;
    equipmentBottoms: Gear[] = ActressGears.MuraoMira.bottom;
}

class MuraoMira04 extends Character {
    name: string = '村尾 未羅';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2661;
    hpMin: number = 731;
    hpMax: number = 2661;
    atkClose: number = 441;
    atkCloseMin: number = 126;
    atkCloseMax: number = 441;
    attrClose: number = 0;
    atkShot: number = 423;
    atkShotMin: number = 121;
    atkShotMax: number = 423;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.9),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.9),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MuraoMira.long;
    weaponCloses: Gear[] = ActressGears.MuraoMira.short;
    equipmentTops: Gear[] = ActressGears.MuraoMira.top;
    equipmentBottoms: Gear[] = ActressGears.MuraoMira.bottom;
}

class MuraoMira05 extends Character {
    name: string = '村尾 未羅';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3434;
    hpMin: number = 922;
    hpMax: number = 3434;
    atkClose: number = 567;
    atkCloseMin: number = 158;
    atkCloseMax: number = 567;
    attrClose: number = 0;
    atkShot: number = 544;
    atkShotMin: number = 151;
    atkShotMax: number = 544;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.9),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.9),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MuraoMira.long;
    weaponCloses: Gear[] = ActressGears.MuraoMira.short;
    equipmentTops: Gear[] = ActressGears.MuraoMira.top;
    equipmentBottoms: Gear[] = ActressGears.MuraoMira.bottom;
}

class KimikageYui01 extends Character {
    name: string = '君影 唯';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 853;
    hpMin: number = 353;
    hpMax: number = 853;
    atkClose: number = 158;
    atkCloseMin: number = 63;
    atkCloseMax: number = 158;
    attrClose: number = 0;
    atkShot: number = 179;
    atkShotMin: number = 71;
    atkShotMax: number = 179;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KimikageYui.long;
    weaponCloses: Gear[] = ActressGears.KimikageYui.short;
    equipmentTops: Gear[] = ActressGears.KimikageYui.top;
    equipmentBottoms: Gear[] = ActressGears.KimikageYui.bottom;
}

class KimikageYui02 extends Character {
    name: string = '君影 唯';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1392;
    hpMin: number = 500;
    hpMax: number = 1392;
    atkClose: number = 253;
    atkCloseMin: number = 95;
    atkCloseMax: number = 253;
    attrClose: number = 0;
    atkShot: number = 286;
    atkShotMin: number = 107;
    atkShotMax: number = 286;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KimikageYui.long;
    weaponCloses: Gear[] = ActressGears.KimikageYui.short;
    equipmentTops: Gear[] = ActressGears.KimikageYui.top;
    equipmentBottoms: Gear[] = ActressGears.KimikageYui.bottom;
}

class KimikageYui04 extends Character {
    name: string = '君影 唯';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2460;
    hpMin: number = 676;
    hpMax: number = 2460;
    atkClose: number = 443;
    atkCloseMin: number = 126;
    atkCloseMax: number = 443;
    attrClose: number = 0;
    atkShot: number = 500;
    atkShotMin: number = 143;
    atkShotMax: number = 500;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KimikageYui.long;
    weaponCloses: Gear[] = ActressGears.KimikageYui.short;
    equipmentTops: Gear[] = ActressGears.KimikageYui.top;
    equipmentBottoms: Gear[] = ActressGears.KimikageYui.bottom;
}

class KimikageYui05 extends Character {
    name: string = '君影 唯';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3175;
    hpMin: number = 853;
    hpMax: number = 3175;
    atkClose: number = 569;
    atkCloseMin: number = 158;
    atkCloseMax: number = 569;
    attrClose: number = 0;
    atkShot: number = 643;
    atkShotMin: number = 179;
    atkShotMax: number = 643;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KimikageYui.long;
    weaponCloses: Gear[] = ActressGears.KimikageYui.short;
    equipmentTops: Gear[] = ActressGears.KimikageYui.top;
    equipmentBottoms: Gear[] = ActressGears.KimikageYui.bottom;
}

class JingujiMari01 extends Character {
    name: string = '神宮寺 真理';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 12;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 192;
    atkCloseMin: number = 77;
    atkCloseMax: number = 192;
    attrClose: number = 0;
    atkShot: number = 211;
    atkShotMin: number = 84;
    atkShotMax: number = 211;
    attrShot: number = 0;
    def: number = 265;
    defMin: number = 106;
    defMax: number = 265;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.JingujiMari.long;
    weaponCloses: Gear[] = ActressGears.JingujiMari.short;
    equipmentTops: Gear[] = ActressGears.JingujiMari.top;
    equipmentBottoms: Gear[] = ActressGears.JingujiMari.bottom;
}

class JingujiMari02 extends Character {
    name: string = '神宮寺 真理';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 308;
    atkCloseMin: number = 115;
    atkCloseMax: number = 308;
    attrClose: number = 0;
    atkShot: number = 337;
    atkShotMin: number = 126;
    atkShotMax: number = 337;
    attrShot: number = 0;
    def: number = 424;
    defMin: number = 159;
    defMax: number = 424;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.JingujiMari.long;
    weaponCloses: Gear[] = ActressGears.JingujiMari.short;
    equipmentTops: Gear[] = ActressGears.JingujiMari.top;
    equipmentBottoms: Gear[] = ActressGears.JingujiMari.bottom;
}

class JingujiMari04 extends Character {
    name: string = '神宮寺 真理';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 539;
    atkCloseMin: number = 154;
    atkCloseMax: number = 539;
    attrClose: number = 0;
    atkShot: number = 590;
    atkShotMin: number = 168;
    atkShotMax: number = 590;
    attrShot: number = 0;
    def: number = 742;
    defMin: number = 212;
    defMax: number = 742;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.JingujiMari.long;
    weaponCloses: Gear[] = ActressGears.JingujiMari.short;
    equipmentTops: Gear[] = ActressGears.JingujiMari.top;
    equipmentBottoms: Gear[] = ActressGears.JingujiMari.bottom;
}

class JingujiMari05 extends Character {
    name: string = '神宮寺 真理';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 693;
    atkCloseMin: number = 192;
    atkCloseMax: number = 693;
    attrClose: number = 0;
    atkShot: number = 758;
    atkShotMin: number = 211;
    atkShotMax: number = 758;
    attrShot: number = 0;
    def: number = 954;
    defMin: number = 265;
    defMax: number = 954;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.JingujiMari.long;
    weaponCloses: Gear[] = ActressGears.JingujiMari.short;
    equipmentTops: Gear[] = ActressGears.JingujiMari.top;
    equipmentBottoms: Gear[] = ActressGears.JingujiMari.bottom;
}

class JingujiMari70 extends Character {
    name: string = '神宮寺 真理_孤影';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 539;
    atkCloseMin: number = 150;
    atkCloseMax: number = 539;
    attrClose: number = 0;
    atkShot: number = 590;
    atkShotMin: number = 164;
    atkShotMax: number = 590;
    attrShot: number = 0;
    def: number = 954;
    defMin: number = 265;
    defMax: number = 954;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Sniper(0.3),
        AttrTypeDict.Dagger(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Sniper, 0.3),
        new Buff(AttrTypeId.Dagger, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.JingujiMari.long;
    weaponCloses: Gear[] = ActressGears.JingujiMari.short;
    equipmentTops: Gear[] = ActressGears.JingujiMari.top;
    equipmentBottoms: Gear[] = ActressGears.JingujiMari.bottom;
}

class OchanomizuMirie01 extends Character {
    name: string = '御茶ノ水 美里江';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 4;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 853;
    hpMin: number = 353;
    hpMax: number = 853;
    atkClose: number = 164;
    atkCloseMin: number = 66;
    atkCloseMax: number = 164;
    attrClose: number = 0;
    atkShot: number = 162;
    atkShotMin: number = 65;
    atkShotMax: number = 162;
    attrShot: number = 0;
    def: number = 243;
    defMin: number = 97;
    defMax: number = 243;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OchanomizuMirie.long;
    weaponCloses: Gear[] = ActressGears.OchanomizuMirie.short;
    equipmentTops: Gear[] = ActressGears.OchanomizuMirie.top;
    equipmentBottoms: Gear[] = ActressGears.OchanomizuMirie.bottom;
}

class OchanomizuMirie02 extends Character {
    name: string = '御茶ノ水 美里江';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1392;
    hpMin: number = 500;
    hpMax: number = 1392;
    atkClose: number = 262;
    atkCloseMin: number = 98;
    atkCloseMax: number = 262;
    attrClose: number = 0;
    atkShot: number = 260;
    atkShotMin: number = 97;
    atkShotMax: number = 260;
    attrShot: number = 0;
    def: number = 388;
    defMin: number = 146;
    defMax: number = 388;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OchanomizuMirie.long;
    weaponCloses: Gear[] = ActressGears.OchanomizuMirie.short;
    equipmentTops: Gear[] = ActressGears.OchanomizuMirie.top;
    equipmentBottoms: Gear[] = ActressGears.OchanomizuMirie.bottom;
}

class OchanomizuMirie04 extends Character {
    name: string = '御茶ノ水 美里江';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2460;
    hpMin: number = 676;
    hpMax: number = 2460;
    atkClose: number = 459;
    atkCloseMin: number = 131;
    atkCloseMax: number = 459;
    attrClose: number = 0;
    atkShot: number = 454;
    atkShotMin: number = 130;
    atkShotMax: number = 454;
    attrShot: number = 0;
    def: number = 679;
    defMin: number = 194;
    defMax: number = 679;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OchanomizuMirie.long;
    weaponCloses: Gear[] = ActressGears.OchanomizuMirie.short;
    equipmentTops: Gear[] = ActressGears.OchanomizuMirie.top;
    equipmentBottoms: Gear[] = ActressGears.OchanomizuMirie.bottom;
}

class OchanomizuMirie05 extends Character {
    name: string = '御茶ノ水 美里江';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3175;
    hpMin: number = 853;
    hpMax: number = 3175;
    atkClose: number = 590;
    atkCloseMin: number = 164;
    atkCloseMax: number = 590;
    attrClose: number = 0;
    atkShot: number = 584;
    atkShotMin: number = 162;
    atkShotMax: number = 584;
    attrShot: number = 0;
    def: number = 873;
    defMin: number = 243;
    defMax: number = 873;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OchanomizuMirie.long;
    weaponCloses: Gear[] = ActressGears.OchanomizuMirie.short;
    equipmentTops: Gear[] = ActressGears.OchanomizuMirie.top;
    equipmentBottoms: Gear[] = ActressGears.OchanomizuMirie.bottom;
}

class KaeruzakaRaiya01 extends Character {
    name: string = '蛙坂 来弥';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 8;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 844;
    hpMin: number = 349;
    hpMax: number = 844;
    atkClose: number = 209;
    atkCloseMin: number = 83;
    atkCloseMax: number = 209;
    attrClose: number = 0;
    atkShot: number = 203;
    atkShotMin: number = 81;
    atkShotMax: number = 203;
    attrShot: number = 0;
    def: number = 245;
    defMin: number = 98;
    defMax: number = 245;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaeruzakaRaiya.long;
    weaponCloses: Gear[] = ActressGears.KaeruzakaRaiya.short;
    equipmentTops: Gear[] = ActressGears.KaeruzakaRaiya.top;
    equipmentBottoms: Gear[] = ActressGears.KaeruzakaRaiya.bottom;
}

class KaeruzakaRaiya02 extends Character {
    name: string = '蛙坂 来弥';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1377;
    hpMin: number = 495;
    hpMax: number = 1377;
    atkClose: number = 334;
    atkCloseMin: number = 125;
    atkCloseMax: number = 334;
    attrClose: number = 0;
    atkShot: number = 324;
    atkShotMin: number = 122;
    atkShotMax: number = 324;
    attrShot: number = 0;
    def: number = 392;
    defMin: number = 147;
    defMax: number = 392;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaeruzakaRaiya.long;
    weaponCloses: Gear[] = ActressGears.KaeruzakaRaiya.short;
    equipmentTops: Gear[] = ActressGears.KaeruzakaRaiya.top;
    equipmentBottoms: Gear[] = ActressGears.KaeruzakaRaiya.bottom;
}

class KaeruzakaRaiya04 extends Character {
    name: string = '蛙坂 来弥';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2435;
    hpMin: number = 669;
    hpMax: number = 2435;
    atkClose: number = 584;
    atkCloseMin: number = 167;
    atkCloseMax: number = 584;
    attrClose: number = 0;
    atkShot: number = 567;
    atkShotMin: number = 162;
    atkShotMax: number = 567;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaeruzakaRaiya.long;
    weaponCloses: Gear[] = ActressGears.KaeruzakaRaiya.short;
    equipmentTops: Gear[] = ActressGears.KaeruzakaRaiya.top;
    equipmentBottoms: Gear[] = ActressGears.KaeruzakaRaiya.bottom;
}

class KaeruzakaRaiya05 extends Character {
    name: string = '蛙坂 来弥';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3143;
    hpMin: number = 844;
    hpMax: number = 3143;
    atkClose: number = 751;
    atkCloseMin: number = 209;
    atkCloseMax: number = 751;
    attrClose: number = 0;
    atkShot: number = 729;
    atkShotMin: number = 203;
    atkShotMax: number = 729;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Sword(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Sword, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KaeruzakaRaiya.long;
    weaponCloses: Gear[] = ActressGears.KaeruzakaRaiya.short;
    equipmentTops: Gear[] = ActressGears.KaeruzakaRaiya.top;
    equipmentBottoms: Gear[] = ActressGears.KaeruzakaRaiya.bottom;
}

class KaeruzakaRaiya70 extends Character {
    name: string = '蛙坂 来弥_残火';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3143;
    hpMin: number = 844;
    hpMax: number = 3143;
    atkClose: number = 538;
    atkCloseMin: number = 149;
    atkCloseMax: number = 538;
    attrClose: number = 0;
    atkShot: number = 522;
    atkShotMin: number = 145;
    atkShotMax: number = 522;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Twin(0.3),
        AttrTypeDict.Sword(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Twin, 0.3),
        new Buff(AttrTypeId.Sword, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.KaeruzakaRaiya.long;
    weaponCloses: Gear[] = ActressGears.KaeruzakaRaiya.short;
    equipmentTops: Gear[] = ActressGears.KaeruzakaRaiya.top;
    equipmentBottoms: Gear[] = ActressGears.KaeruzakaRaiya.bottom;
}

class UsamotoAnna01 extends Character {
    name: string = '宇佐元 杏奈';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 12;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 887;
    hpMin: number = 367;
    hpMax: number = 887;
    atkClose: number = 175;
    atkCloseMin: number = 70;
    atkCloseMax: number = 175;
    attrClose: number = 0;
    atkShot: number = 170;
    atkShotMin: number = 68;
    atkShotMax: number = 170;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.UsamotoAnna.long;
    weaponCloses: Gear[] = ActressGears.UsamotoAnna.short;
    equipmentTops: Gear[] = ActressGears.UsamotoAnna.top;
    equipmentBottoms: Gear[] = ActressGears.UsamotoAnna.bottom;
}

class UsamotoAnna02 extends Character {
    name: string = '宇佐元 杏奈';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1448;
    hpMin: number = 520;
    hpMax: number = 1448;
    atkClose: number = 280;
    atkCloseMin: number = 105;
    atkCloseMax: number = 280;
    attrClose: number = 0;
    atkShot: number = 272;
    atkShotMin: number = 102;
    atkShotMax: number = 272;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.UsamotoAnna.long;
    weaponCloses: Gear[] = ActressGears.UsamotoAnna.short;
    equipmentTops: Gear[] = ActressGears.UsamotoAnna.top;
    equipmentBottoms: Gear[] = ActressGears.UsamotoAnna.bottom;
}

class UsamotoAnna04 extends Character {
    name: string = '宇佐元 杏奈';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 490;
    atkCloseMin: number = 140;
    atkCloseMax: number = 490;
    attrClose: number = 0;
    atkShot: number = 476;
    atkShotMin: number = 136;
    atkShotMax: number = 476;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.UsamotoAnna.long;
    weaponCloses: Gear[] = ActressGears.UsamotoAnna.short;
    equipmentTops: Gear[] = ActressGears.UsamotoAnna.top;
    equipmentBottoms: Gear[] = ActressGears.UsamotoAnna.bottom;
}

class UsamotoAnna05 extends Character {
    name: string = '宇佐元 杏奈';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 630;
    atkCloseMin: number = 175;
    atkCloseMax: number = 630;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.ResistGravity(1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.ResistGravity, 1)
    ];
    weaponShots: Gear[] = ActressGears.UsamotoAnna.long;
    weaponCloses: Gear[] = ActressGears.UsamotoAnna.short;
    equipmentTops: Gear[] = ActressGears.UsamotoAnna.top;
    equipmentBottoms: Gear[] = ActressGears.UsamotoAnna.bottom;
}

class UsamotoAnna70 extends Character {
    name: string = '宇佐元 杏奈_希求';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 538;
    atkCloseMin: number = 149;
    atkCloseMax: number = 538;
    attrClose: number = 0;
    atkShot: number = 522;
    atkShotMin: number = 145;
    atkShotMax: number = 522;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Hammer(0.3),
        AttrTypeDict.Bazooka(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Hammer, 0.3),
        new Buff(AttrTypeId.Bazooka, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.UsamotoAnna.long;
    weaponCloses: Gear[] = ActressGears.UsamotoAnna.short;
    equipmentTops: Gear[] = ActressGears.UsamotoAnna.top;
    equipmentBottoms: Gear[] = ActressGears.UsamotoAnna.bottom;
}

class NinaKalinina01 extends Character {
    name: string = 'ニーナ・K';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 879;
    hpMin: number = 364;
    hpMax: number = 879;
    atkClose: number = 170;
    atkCloseMin: number = 68;
    atkCloseMax: number = 170;
    attrClose: number = 0;
    atkShot: number = 177;
    atkShotMin: number = 71;
    atkShotMax: number = 177;
    attrShot: number = 0;
    def: number = 265;
    defMin: number = 106;
    defMax: number = 265;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Hammer(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Hammer, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.NinaKalinina.long;
    weaponCloses: Gear[] = ActressGears.NinaKalinina.short;
    equipmentTops: Gear[] = ActressGears.NinaKalinina.top;
    equipmentBottoms: Gear[] = ActressGears.NinaKalinina.bottom;
}

class NinaKalinina02 extends Character {
    name: string = 'ニーナ・K';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1434;
    hpMin: number = 515;
    hpMax: number = 1434;
    atkClose: number = 272;
    atkCloseMin: number = 102;
    atkCloseMax: number = 272;
    attrClose: number = 0;
    atkShot: number = 283;
    atkShotMin: number = 106;
    atkShotMax: number = 283;
    attrShot: number = 0;
    def: number = 424;
    defMin: number = 159;
    defMax: number = 424;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Hammer(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Hammer, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.NinaKalinina.long;
    weaponCloses: Gear[] = ActressGears.NinaKalinina.short;
    equipmentTops: Gear[] = ActressGears.NinaKalinina.top;
    equipmentBottoms: Gear[] = ActressGears.NinaKalinina.bottom;
}

class NinaKalinina04 extends Character {
    name: string = 'ニーナ・K';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 476;
    atkCloseMin: number = 136;
    atkCloseMax: number = 476;
    attrClose: number = 0;
    atkShot: number = 495;
    atkShotMin: number = 141;
    atkShotMax: number = 495;
    attrShot: number = 0;
    def: number = 742;
    defMin: number = 212;
    defMax: number = 742;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Hammer(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Hammer, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.NinaKalinina.long;
    weaponCloses: Gear[] = ActressGears.NinaKalinina.short;
    equipmentTops: Gear[] = ActressGears.NinaKalinina.top;
    equipmentBottoms: Gear[] = ActressGears.NinaKalinina.bottom;
}

class NinaKalinina05 extends Character {
    name: string = 'ニーナ・K';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 612;
    atkCloseMin: number = 170;
    atkCloseMax: number = 612;
    attrClose: number = 0;
    atkShot: number = 636;
    atkShotMin: number = 177;
    atkShotMax: number = 636;
    attrShot: number = 0;
    def: number = 954;
    defMin: number = 265;
    defMax: number = 954;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Hammer(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Hammer, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.NinaKalinina.long;
    weaponCloses: Gear[] = ActressGears.NinaKalinina.short;
    equipmentTops: Gear[] = ActressGears.NinaKalinina.top;
    equipmentBottoms: Gear[] = ActressGears.NinaKalinina.bottom;
}

class MikurazaAzuki01 extends Character {
    name: string = '御蔵座 梓希';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 5;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 879;
    hpMin: number = 364;
    hpMax: number = 879;
    atkClose: number = 156;
    atkCloseMin: number = 62;
    atkCloseMax: number = 156;
    attrClose: number = 0;
    atkShot: number = 164;
    atkShotMin: number = 66;
    atkShotMax: number = 164;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.9),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.9),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MikurazaAzuki.long;
    weaponCloses: Gear[] = ActressGears.MikurazaAzuki.short;
    equipmentTops: Gear[] = ActressGears.MikurazaAzuki.top;
    equipmentBottoms: Gear[] = ActressGears.MikurazaAzuki.bottom;
}

class MikurazaAzuki02 extends Character {
    name: string = '御蔵座 梓希';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1434;
    hpMin: number = 515;
    hpMax: number = 1434;
    atkClose: number = 249;
    atkCloseMin: number = 94;
    atkCloseMax: number = 249;
    attrClose: number = 0;
    atkShot: number = 262;
    atkShotMin: number = 98;
    atkShotMax: number = 262;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.9),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.9),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MikurazaAzuki.long;
    weaponCloses: Gear[] = ActressGears.MikurazaAzuki.short;
    equipmentTops: Gear[] = ActressGears.MikurazaAzuki.top;
    equipmentBottoms: Gear[] = ActressGears.MikurazaAzuki.bottom;
}

class MikurazaAzuki04 extends Character {
    name: string = '御蔵座 梓希';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 437;
    atkCloseMin: number = 125;
    atkCloseMax: number = 437;
    attrClose: number = 0;
    atkShot: number = 459;
    atkShotMin: number = 131;
    atkShotMax: number = 459;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.9),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.9),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MikurazaAzuki.long;
    weaponCloses: Gear[] = ActressGears.MikurazaAzuki.short;
    equipmentTops: Gear[] = ActressGears.MikurazaAzuki.top;
    equipmentBottoms: Gear[] = ActressGears.MikurazaAzuki.bottom;
}

class MikurazaAzuki05 extends Character {
    name: string = '御蔵座 梓希';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 561;
    atkCloseMin: number = 156;
    atkCloseMax: number = 561;
    attrClose: number = 0;
    atkShot: number = 590;
    atkShotMin: number = 164;
    atkShotMax: number = 590;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.9),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.9),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MikurazaAzuki.long;
    weaponCloses: Gear[] = ActressGears.MikurazaAzuki.short;
    equipmentTops: Gear[] = ActressGears.MikurazaAzuki.top;
    equipmentBottoms: Gear[] = ActressGears.MikurazaAzuki.bottom;
}

class KotomuraAkane01 extends Character {
    name: string = '琴村 朱音';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 8;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 861;
    hpMin: number = 356;
    hpMax: number = 861;
    atkClose: number = 145;
    atkCloseMin: number = 58;
    atkCloseMax: number = 145;
    attrClose: number = 0;
    atkShot: number = 152;
    atkShotMin: number = 61;
    atkShotMax: number = 152;
    attrShot: number = 0;
    def: number = 248;
    defMin: number = 99;
    defMax: number = 248;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAkane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAkane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAkane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAkane.bottom;
}

class KotomuraAkane02 extends Character {
    name: string = '琴村 朱音';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1406;
    hpMin: number = 505;
    hpMax: number = 1406;
    atkClose: number = 232;
    atkCloseMin: number = 87;
    atkCloseMax: number = 232;
    attrClose: number = 0;
    atkShot: number = 244;
    atkShotMin: number = 91;
    atkShotMax: number = 244;
    attrShot: number = 0;
    def: number = 396;
    defMin: number = 149;
    defMax: number = 396;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAkane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAkane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAkane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAkane.bottom;
}

class KotomuraAkane04 extends Character {
    name: string = '琴村 朱音';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 406;
    atkCloseMin: number = 116;
    atkCloseMax: number = 406;
    attrClose: number = 0;
    atkShot: number = 426;
    atkShotMin: number = 122;
    atkShotMax: number = 426;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAkane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAkane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAkane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAkane.bottom;
}

class KotomuraAkane05 extends Character {
    name: string = '琴村 朱音';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 522;
    atkCloseMin: number = 145;
    atkCloseMax: number = 522;
    attrClose: number = 0;
    atkShot: number = 548;
    atkShotMin: number = 152;
    atkShotMax: number = 548;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.8),
        AttrTypeDict.ResistIce(-0.8),
        AttrTypeDict.ResistVolt(-0.4),
        AttrTypeDict.Fire(0.96),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.Spear(0.15),
        AttrTypeDict.Fire(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.8),
        new Buff(AttrTypeId.ResistIce, -0.8),
        new Buff(AttrTypeId.ResistVolt, -0.4),
        new Buff(AttrTypeId.Fire, 0.96),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.Spear, 0.15),
        new Buff(AttrTypeId.Fire, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAkane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAkane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAkane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAkane.bottom;
}

class KotomuraAmane01 extends Character {
    name: string = '琴村 天音';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 8;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 879;
    hpMin: number = 364;
    hpMax: number = 879;
    atkClose: number = 149;
    atkCloseMin: number = 60;
    atkCloseMax: number = 149;
    attrClose: number = 0;
    atkShot: number = 142;
    atkShotMin: number = 57;
    atkShotMax: number = 142;
    attrShot: number = 0;
    def: number = 253;
    defMin: number = 101;
    defMax: number = 253;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAmane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAmane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAmane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAmane.bottom;
}

class KotomuraAmane02 extends Character {
    name: string = '琴村 天音';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1434;
    hpMin: number = 515;
    hpMax: number = 1434;
    atkClose: number = 239;
    atkCloseMin: number = 90;
    atkCloseMax: number = 239;
    attrClose: number = 0;
    atkShot: number = 227;
    atkShotMin: number = 85;
    atkShotMax: number = 227;
    attrShot: number = 0;
    def: number = 404;
    defMin: number = 152;
    defMax: number = 404;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAmane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAmane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAmane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAmane.bottom;
}

class KotomuraAmane04 extends Character {
    name: string = '琴村 天音';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 418;
    atkCloseMin: number = 119;
    atkCloseMax: number = 418;
    attrClose: number = 0;
    atkShot: number = 398;
    atkShotMin: number = 114;
    atkShotMax: number = 398;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAmane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAmane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAmane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAmane.bottom;
}

class KotomuraAmane05 extends Character {
    name: string = '琴村 天音';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 538;
    atkCloseMin: number = 149;
    atkCloseMax: number = 538;
    attrClose: number = 0;
    atkShot: number = 512;
    atkShotMin: number = 142;
    atkShotMax: number = 512;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.8),
        AttrTypeDict.ResistFire(-0.8),
        AttrTypeDict.ResistGravity(-0.4),
        AttrTypeDict.Ice(0.96),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.8),
        new Buff(AttrTypeId.ResistFire, -0.8),
        new Buff(AttrTypeId.ResistGravity, -0.4),
        new Buff(AttrTypeId.Ice, 0.96),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KotomuraAmane.long;
    weaponCloses: Gear[] = ActressGears.KotomuraAmane.short;
    equipmentTops: Gear[] = ActressGears.KotomuraAmane.top;
    equipmentBottoms: Gear[] = ActressGears.KotomuraAmane.bottom;
}

class MiaVoisin01 extends Character {
    name: string = 'ミア・V';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 11;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 853;
    hpMin: number = 353;
    hpMax: number = 853;
    atkClose: number = 173;
    atkCloseMin: number = 69;
    atkCloseMax: number = 173;
    attrClose: number = 0;
    atkShot: number = 175;
    atkShotMin: number = 70;
    atkShotMax: number = 175;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MiaVoisin.long;
    weaponCloses: Gear[] = ActressGears.MiaVoisin.short;
    equipmentTops: Gear[] = ActressGears.MiaVoisin.top;
    equipmentBottoms: Gear[] = ActressGears.MiaVoisin.bottom;
}

class MiaVoisin02 extends Character {
    name: string = 'ミア・V';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1392;
    hpMin: number = 500;
    hpMax: number = 1392;
    atkClose: number = 277;
    atkCloseMin: number = 104;
    atkCloseMax: number = 277;
    attrClose: number = 0;
    atkShot: number = 280;
    atkShotMin: number = 105;
    atkShotMax: number = 280;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MiaVoisin.long;
    weaponCloses: Gear[] = ActressGears.MiaVoisin.short;
    equipmentTops: Gear[] = ActressGears.MiaVoisin.top;
    equipmentBottoms: Gear[] = ActressGears.MiaVoisin.bottom;
}

class MiaVoisin04 extends Character {
    name: string = 'ミア・V';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2460;
    hpMin: number = 676;
    hpMax: number = 2460;
    atkClose: number = 486;
    atkCloseMin: number = 139;
    atkCloseMax: number = 486;
    attrClose: number = 0;
    atkShot: number = 490;
    atkShotMin: number = 140;
    atkShotMax: number = 490;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MiaVoisin.long;
    weaponCloses: Gear[] = ActressGears.MiaVoisin.short;
    equipmentTops: Gear[] = ActressGears.MiaVoisin.top;
    equipmentBottoms: Gear[] = ActressGears.MiaVoisin.bottom;
}

class MiaVoisin05 extends Character {
    name: string = 'ミア・V';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3175;
    hpMin: number = 853;
    hpMax: number = 3175;
    atkClose: number = 624;
    atkCloseMin: number = 173;
    atkCloseMax: number = 624;
    attrClose: number = 0;
    atkShot: number = 630;
    atkShotMin: number = 175;
    atkShotMax: number = 630;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MiaVoisin.long;
    weaponCloses: Gear[] = ActressGears.MiaVoisin.short;
    equipmentTops: Gear[] = ActressGears.MiaVoisin.top;
    equipmentBottoms: Gear[] = ActressGears.MiaVoisin.bottom;
}

class ChishimaMiyuki01 extends Character {
    name: string = '千島 美幸';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 2;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 165;
    atkCloseMin: number = 66;
    atkCloseMax: number = 165;
    attrClose: number = 0;
    atkShot: number = 150;
    atkShotMin: number = 60;
    atkShotMax: number = 150;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ChishimaMiyuki.long;
    weaponCloses: Gear[] = ActressGears.ChishimaMiyuki.short;
    equipmentTops: Gear[] = ActressGears.ChishimaMiyuki.top;
    equipmentBottoms: Gear[] = ActressGears.ChishimaMiyuki.bottom;
}

class ChishimaMiyuki02 extends Character {
    name: string = '千島 美幸';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 265;
    atkCloseMin: number = 99;
    atkCloseMax: number = 265;
    attrClose: number = 0;
    atkShot: number = 239;
    atkShotMin: number = 90;
    atkShotMax: number = 239;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ChishimaMiyuki.long;
    weaponCloses: Gear[] = ActressGears.ChishimaMiyuki.short;
    equipmentTops: Gear[] = ActressGears.ChishimaMiyuki.top;
    equipmentBottoms: Gear[] = ActressGears.ChishimaMiyuki.bottom;
}

class ChishimaMiyuki04 extends Character {
    name: string = '千島 美幸';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 463;
    atkCloseMin: number = 132;
    atkCloseMax: number = 463;
    attrClose: number = 0;
    atkShot: number = 419;
    atkShotMin: number = 120;
    atkShotMax: number = 419;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ChishimaMiyuki.long;
    weaponCloses: Gear[] = ActressGears.ChishimaMiyuki.short;
    equipmentTops: Gear[] = ActressGears.ChishimaMiyuki.top;
    equipmentBottoms: Gear[] = ActressGears.ChishimaMiyuki.bottom;
}

class ChishimaMiyuki05 extends Character {
    name: string = '千島 美幸';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 595;
    atkCloseMin: number = 165;
    atkCloseMax: number = 595;
    attrClose: number = 0;
    atkShot: number = 539;
    atkShotMin: number = 150;
    atkShotMax: number = 539;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ChishimaMiyuki.long;
    weaponCloses: Gear[] = ActressGears.ChishimaMiyuki.short;
    equipmentTops: Gear[] = ActressGears.ChishimaMiyuki.top;
    equipmentBottoms: Gear[] = ActressGears.ChishimaMiyuki.bottom;
}

class ShantiRana01 extends Character {
    name: string = 'サンティ・R';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 13;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 175;
    atkCloseMin: number = 70;
    atkCloseMax: number = 175;
    attrClose: number = 0;
    atkShot: number = 170;
    atkShotMin: number = 68;
    atkShotMax: number = 170;
    attrShot: number = 0;
    def: number = 255;
    defMin: number = 102;
    defMax: number = 255;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShantiRana.long;
    weaponCloses: Gear[] = ActressGears.ShantiRana.short;
    equipmentTops: Gear[] = ActressGears.ShantiRana.top;
    equipmentBottoms: Gear[] = ActressGears.ShantiRana.bottom;
}

class ShantiRana02 extends Character {
    name: string = 'サンティ・R';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 280;
    atkCloseMin: number = 105;
    atkCloseMax: number = 280;
    attrClose: number = 0;
    atkShot: number = 272;
    atkShotMin: number = 102;
    atkShotMax: number = 272;
    attrShot: number = 0;
    def: number = 408;
    defMin: number = 153;
    defMax: number = 408;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShantiRana.long;
    weaponCloses: Gear[] = ActressGears.ShantiRana.short;
    equipmentTops: Gear[] = ActressGears.ShantiRana.top;
    equipmentBottoms: Gear[] = ActressGears.ShantiRana.bottom;
}

class ShantiRana04 extends Character {
    name: string = 'サンティ・R';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 490;
    atkCloseMin: number = 140;
    atkCloseMax: number = 490;
    attrClose: number = 0;
    atkShot: number = 476;
    atkShotMin: number = 136;
    atkShotMax: number = 476;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShantiRana.long;
    weaponCloses: Gear[] = ActressGears.ShantiRana.short;
    equipmentTops: Gear[] = ActressGears.ShantiRana.top;
    equipmentBottoms: Gear[] = ActressGears.ShantiRana.bottom;
}

class ShantiRana05 extends Character {
    name: string = 'サンティ・R';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 630;
    atkCloseMin: number = 175;
    atkCloseMax: number = 630;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShantiRana.long;
    weaponCloses: Gear[] = ActressGears.ShantiRana.short;
    equipmentTops: Gear[] = ActressGears.ShantiRana.top;
    equipmentBottoms: Gear[] = ActressGears.ShantiRana.bottom;
}

class ShantiRana70 extends Character {
    name: string = 'サンティ_雄渾';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 538;
    atkCloseMin: number = 149;
    atkCloseMax: number = 538;
    attrClose: number = 0;
    atkShot: number = 522;
    atkShotMin: number = 145;
    atkShotMax: number = 522;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Rifle(0.3),
        AttrTypeDict.Sword(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Rifle, 0.3),
        new Buff(AttrTypeId.Sword, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.ShantiRana.long;
    weaponCloses: Gear[] = ActressGears.ShantiRana.short;
    equipmentTops: Gear[] = ActressGears.ShantiRana.top;
    equipmentBottoms: Gear[] = ActressGears.ShantiRana.bottom;
}

class OhzekiKoyui01 extends Character {
    name: string = '大関 小結';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 9;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 905;
    hpMin: number = 374;
    hpMax: number = 905;
    atkClose: number = 204;
    atkCloseMin: number = 82;
    atkCloseMax: number = 204;
    attrClose: number = 0;
    atkShot: number = 213;
    atkShotMin: number = 85;
    atkShotMax: number = 213;
    attrShot: number = 0;
    def: number = 263;
    defMin: number = 105;
    defMax: number = 263;
    spd: number = 155;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OhzekiKoyui.long;
    weaponCloses: Gear[] = ActressGears.OhzekiKoyui.short;
    equipmentTops: Gear[] = ActressGears.OhzekiKoyui.top;
    equipmentBottoms: Gear[] = ActressGears.OhzekiKoyui.bottom;
}

class OhzekiKoyui02 extends Character {
    name: string = '大関 小結';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1477;
    hpMin: number = 530;
    hpMax: number = 1477;
    atkClose: number = 326;
    atkCloseMin: number = 122;
    atkCloseMax: number = 326;
    attrClose: number = 0;
    atkShot: number = 340;
    atkShotMin: number = 128;
    atkShotMax: number = 340;
    attrShot: number = 0;
    def: number = 420;
    defMin: number = 158;
    defMax: number = 420;
    spd: number = 155;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OhzekiKoyui.long;
    weaponCloses: Gear[] = ActressGears.OhzekiKoyui.short;
    equipmentTops: Gear[] = ActressGears.OhzekiKoyui.top;
    equipmentBottoms: Gear[] = ActressGears.OhzekiKoyui.bottom;
}

class OhzekiKoyui04 extends Character {
    name: string = '大関 小結';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2610;
    hpMin: number = 718;
    hpMax: number = 2610;
    atkClose: number = 571;
    atkCloseMin: number = 163;
    atkCloseMax: number = 571;
    attrClose: number = 0;
    atkShot: number = 595;
    atkShotMin: number = 170;
    atkShotMax: number = 595;
    attrShot: number = 0;
    def: number = 735;
    defMin: number = 210;
    defMax: number = 735;
    spd: number = 155;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OhzekiKoyui.long;
    weaponCloses: Gear[] = ActressGears.OhzekiKoyui.short;
    equipmentTops: Gear[] = ActressGears.OhzekiKoyui.top;
    equipmentBottoms: Gear[] = ActressGears.OhzekiKoyui.bottom;
}

class OhzekiKoyui05 extends Character {
    name: string = '大関 小結';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3370;
    hpMin: number = 905;
    hpMax: number = 3370;
    atkClose: number = 734;
    atkCloseMin: number = 204;
    atkCloseMax: number = 734;
    attrClose: number = 0;
    atkShot: number = 765;
    atkShotMin: number = 213;
    atkShotMax: number = 765;
    attrShot: number = 0;
    def: number = 945;
    defMin: number = 263;
    defMax: number = 945;
    spd: number = 155;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.OhzekiKoyui.long;
    weaponCloses: Gear[] = ActressGears.OhzekiKoyui.short;
    equipmentTops: Gear[] = ActressGears.OhzekiKoyui.top;
    equipmentBottoms: Gear[] = ActressGears.OhzekiKoyui.bottom;
}

class OhzekiKoyui70 extends Character {
    name: string = '大関 小結_豊潤';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3370;
    hpMin: number = 905;
    hpMax: number = 3370;
    atkClose: number = 588;
    atkCloseMin: number = 163;
    atkCloseMax: number = 588;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 945;
    defMin: number = 263;
    defMax: number = 945;
    spd: number = 155;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Hammer(0.3),
        AttrTypeDict.Rifle(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Hammer, 0.3),
        new Buff(AttrTypeId.Rifle, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.OhzekiKoyui.long;
    weaponCloses: Gear[] = ActressGears.OhzekiKoyui.short;
    equipmentTops: Gear[] = ActressGears.OhzekiKoyui.top;
    equipmentBottoms: Gear[] = ActressGears.OhzekiKoyui.bottom;
}

class WangHonghua01 extends Character {
    name: string = '王 紅花';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 827;
    hpMin: number = 342;
    hpMax: number = 827;
    atkClose: number = 213;
    atkCloseMin: number = 85;
    atkCloseMax: number = 213;
    attrClose: number = 0;
    atkShot: number = 200;
    atkShotMin: number = 80;
    atkShotMax: number = 200;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.WangHonghua.long;
    weaponCloses: Gear[] = ActressGears.WangHonghua.short;
    equipmentTops: Gear[] = ActressGears.WangHonghua.top;
    equipmentBottoms: Gear[] = ActressGears.WangHonghua.bottom;
}

class WangHonghua02 extends Character {
    name: string = '王 紅花';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1349;
    hpMin: number = 485;
    hpMax: number = 1349;
    atkClose: number = 340;
    atkCloseMin: number = 128;
    atkCloseMax: number = 340;
    attrClose: number = 0;
    atkShot: number = 321;
    atkShotMin: number = 120;
    atkShotMax: number = 321;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.WangHonghua.long;
    weaponCloses: Gear[] = ActressGears.WangHonghua.short;
    equipmentTops: Gear[] = ActressGears.WangHonghua.top;
    equipmentBottoms: Gear[] = ActressGears.WangHonghua.bottom;
}

class WangHonghua04 extends Character {
    name: string = '王 紅花';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2385;
    hpMin: number = 656;
    hpMax: number = 2385;
    atkClose: number = 595;
    atkCloseMin: number = 170;
    atkCloseMax: number = 595;
    attrClose: number = 0;
    atkShot: number = 561;
    atkShotMin: number = 160;
    atkShotMax: number = 561;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.WangHonghua.long;
    weaponCloses: Gear[] = ActressGears.WangHonghua.short;
    equipmentTops: Gear[] = ActressGears.WangHonghua.top;
    equipmentBottoms: Gear[] = ActressGears.WangHonghua.bottom;
}

class WangHonghua05 extends Character {
    name: string = '王 紅花';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3078;
    hpMin: number = 827;
    hpMax: number = 3078;
    atkClose: number = 765;
    atkCloseMin: number = 213;
    atkCloseMax: number = 765;
    attrClose: number = 0;
    atkShot: number = 722;
    atkShotMin: number = 200;
    atkShotMax: number = 722;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.WangHonghua.long;
    weaponCloses: Gear[] = ActressGears.WangHonghua.short;
    equipmentTops: Gear[] = ActressGears.WangHonghua.top;
    equipmentBottoms: Gear[] = ActressGears.WangHonghua.bottom;
}

class WangHonghua70 extends Character {
    name: string = '王 紅花_紅蓮';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3078;
    hpMin: number = 827;
    hpMax: number = 3078;
    atkClose: number = 595;
    atkCloseMin: number = 165;
    atkCloseMax: number = 595;
    attrClose: number = 0;
    atkShot: number = 561;
    atkShotMin: number = 156;
    atkShotMax: number = 561;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.9),
        AttrTypeDict.Twin(0.3),
        AttrTypeDict.Spear(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.9),
        new Buff(AttrTypeId.Twin, 0.3),
        new Buff(AttrTypeId.Spear, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.WangHonghua.long;
    weaponCloses: Gear[] = ActressGears.WangHonghua.short;
    equipmentTops: Gear[] = ActressGears.WangHonghua.top;
    equipmentBottoms: Gear[] = ActressGears.WangHonghua.bottom;
}

class TenkoSora01 extends Character {
    name: string = '天狐 天';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 2;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 861;
    hpMin: number = 356;
    hpMax: number = 861;
    atkClose: number = 207;
    atkCloseMin: number = 83;
    atkCloseMax: number = 207;
    attrClose: number = 0;
    atkShot: number = 203;
    atkShotMin: number = 81;
    atkShotMax: number = 203;
    attrShot: number = 0;
    def: number = 253;
    defMin: number = 101;
    defMax: number = 253;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TenkoSora.long;
    weaponCloses: Gear[] = ActressGears.TenkoSora.short;
    equipmentTops: Gear[] = ActressGears.TenkoSora.top;
    equipmentBottoms: Gear[] = ActressGears.TenkoSora.bottom;
}

class TenkoSora02 extends Character {
    name: string = '天狐 天';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1406;
    hpMin: number = 505;
    hpMax: number = 1406;
    atkClose: number = 330;
    atkCloseMin: number = 124;
    atkCloseMax: number = 330;
    attrClose: number = 0;
    atkShot: number = 324;
    atkShotMin: number = 122;
    atkShotMax: number = 324;
    attrShot: number = 0;
    def: number = 404;
    defMin: number = 152;
    defMax: number = 404;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TenkoSora.long;
    weaponCloses: Gear[] = ActressGears.TenkoSora.short;
    equipmentTops: Gear[] = ActressGears.TenkoSora.top;
    equipmentBottoms: Gear[] = ActressGears.TenkoSora.bottom;
}

class TenkoSora04 extends Character {
    name: string = '天狐 天';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 578;
    atkCloseMin: number = 165;
    atkCloseMax: number = 578;
    attrClose: number = 0;
    atkShot: number = 567;
    atkShotMin: number = 162;
    atkShotMax: number = 567;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TenkoSora.long;
    weaponCloses: Gear[] = ActressGears.TenkoSora.short;
    equipmentTops: Gear[] = ActressGears.TenkoSora.top;
    equipmentBottoms: Gear[] = ActressGears.TenkoSora.bottom;
}

class TenkoSora05 extends Character {
    name: string = '天狐 天';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 744;
    atkCloseMin: number = 207;
    atkCloseMax: number = 744;
    attrClose: number = 0;
    atkShot: number = 729;
    atkShotMin: number = 203;
    atkShotMax: number = 729;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TenkoSora.long;
    weaponCloses: Gear[] = ActressGears.TenkoSora.short;
    equipmentTops: Gear[] = ActressGears.TenkoSora.top;
    equipmentBottoms: Gear[] = ActressGears.TenkoSora.bottom;
}

class ShirleyOakley01 extends Character {
    name: string = 'シャーリー・O';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 211;
    atkCloseMin: number = 84;
    atkCloseMax: number = 211;
    attrClose: number = 0;
    atkShot: number = 196;
    atkShotMin: number = 79;
    atkShotMax: number = 196;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShirleyOakley.long;
    weaponCloses: Gear[] = ActressGears.ShirleyOakley.short;
    equipmentTops: Gear[] = ActressGears.ShirleyOakley.top;
    equipmentBottoms: Gear[] = ActressGears.ShirleyOakley.bottom;
}

class ShirleyOakley02 extends Character {
    name: string = 'シャーリー・O';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 337;
    atkCloseMin: number = 126;
    atkCloseMax: number = 337;
    attrClose: number = 0;
    atkShot: number = 314;
    atkShotMin: number = 118;
    atkShotMax: number = 314;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShirleyOakley.long;
    weaponCloses: Gear[] = ActressGears.ShirleyOakley.short;
    equipmentTops: Gear[] = ActressGears.ShirleyOakley.top;
    equipmentBottoms: Gear[] = ActressGears.ShirleyOakley.bottom;
}

class ShirleyOakley04 extends Character {
    name: string = 'シャーリー・O';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 590;
    atkCloseMin: number = 168;
    atkCloseMax: number = 590;
    attrClose: number = 0;
    atkShot: number = 550;
    atkShotMin: number = 157;
    atkShotMax: number = 550;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShirleyOakley.long;
    weaponCloses: Gear[] = ActressGears.ShirleyOakley.short;
    equipmentTops: Gear[] = ActressGears.ShirleyOakley.top;
    equipmentBottoms: Gear[] = ActressGears.ShirleyOakley.bottom;
}

class ShirleyOakley05 extends Character {
    name: string = 'シャーリー・O';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 758;
    atkCloseMin: number = 211;
    atkCloseMax: number = 758;
    attrClose: number = 0;
    atkShot: number = 707;
    atkShotMin: number = 196;
    atkShotMax: number = 707;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShirleyOakley.long;
    weaponCloses: Gear[] = ActressGears.ShirleyOakley.short;
    equipmentTops: Gear[] = ActressGears.ShirleyOakley.top;
    equipmentBottoms: Gear[] = ActressGears.ShirleyOakley.bottom;
}

class ShinonomeChie01 extends Character {
    name: string = '東雲 チヱ';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 15;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 887;
    hpMin: number = 367;
    hpMax: number = 887;
    atkClose: number = 213;
    atkCloseMin: number = 85;
    atkCloseMax: number = 213;
    attrClose: number = 0;
    atkShot: number = 209;
    atkShotMin: number = 83;
    atkShotMax: number = 209;
    attrShot: number = 0;
    def: number = 240;
    defMin: number = 96;
    defMax: number = 240;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShinonomeChie.long;
    weaponCloses: Gear[] = ActressGears.ShinonomeChie.short;
    equipmentTops: Gear[] = ActressGears.ShinonomeChie.top;
    equipmentBottoms: Gear[] = ActressGears.ShinonomeChie.bottom;
}

class ShinonomeChie02 extends Character {
    name: string = '東雲 チヱ';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1448;
    hpMin: number = 520;
    hpMax: number = 1448;
    atkClose: number = 340;
    atkCloseMin: number = 128;
    atkCloseMax: number = 340;
    attrClose: number = 0;
    atkShot: number = 334;
    atkShotMin: number = 125;
    atkShotMax: number = 334;
    attrShot: number = 0;
    def: number = 384;
    defMin: number = 144;
    defMax: number = 384;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShinonomeChie.long;
    weaponCloses: Gear[] = ActressGears.ShinonomeChie.short;
    equipmentTops: Gear[] = ActressGears.ShinonomeChie.top;
    equipmentBottoms: Gear[] = ActressGears.ShinonomeChie.bottom;
}

class ShinonomeChie04 extends Character {
    name: string = '東雲 チヱ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 595;
    atkCloseMin: number = 170;
    atkCloseMax: number = 595;
    attrClose: number = 0;
    atkShot: number = 584;
    atkShotMin: number = 167;
    atkShotMax: number = 584;
    attrShot: number = 0;
    def: number = 672;
    defMin: number = 192;
    defMax: number = 672;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShinonomeChie.long;
    weaponCloses: Gear[] = ActressGears.ShinonomeChie.short;
    equipmentTops: Gear[] = ActressGears.ShinonomeChie.top;
    equipmentBottoms: Gear[] = ActressGears.ShinonomeChie.bottom;
}

class ShinonomeChie05 extends Character {
    name: string = '東雲 チヱ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 765;
    atkCloseMin: number = 213;
    atkCloseMax: number = 765;
    attrClose: number = 0;
    atkShot: number = 751;
    atkShotMin: number = 209;
    atkShotMax: number = 751;
    attrShot: number = 0;
    def: number = 864;
    defMin: number = 240;
    defMax: number = 864;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ShinonomeChie.long;
    weaponCloses: Gear[] = ActressGears.ShinonomeChie.short;
    equipmentTops: Gear[] = ActressGears.ShinonomeChie.top;
    equipmentBottoms: Gear[] = ActressGears.ShinonomeChie.bottom;
}

class RitaHenschel01 extends Character {
    name: string = 'リタ・H';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 210;
    atkCloseMin: number = 84;
    atkCloseMax: number = 210;
    attrClose: number = 0;
    atkShot: number = 217;
    atkShotMin: number = 87;
    atkShotMax: number = 217;
    attrShot: number = 0;
    def: number = 258;
    defMin: number = 103;
    defMax: number = 258;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.RitaHenschel.long;
    weaponCloses: Gear[] = ActressGears.RitaHenschel.short;
    equipmentTops: Gear[] = ActressGears.RitaHenschel.top;
    equipmentBottoms: Gear[] = ActressGears.RitaHenschel.bottom;
}

class RitaHenschel02 extends Character {
    name: string = 'リタ・H';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 337;
    atkCloseMin: number = 126;
    atkCloseMax: number = 337;
    attrClose: number = 0;
    atkShot: number = 347;
    atkShotMin: number = 130;
    atkShotMax: number = 347;
    attrShot: number = 0;
    def: number = 412;
    defMin: number = 155;
    defMax: number = 412;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.RitaHenschel.long;
    weaponCloses: Gear[] = ActressGears.RitaHenschel.short;
    equipmentTops: Gear[] = ActressGears.RitaHenschel.top;
    equipmentBottoms: Gear[] = ActressGears.RitaHenschel.bottom;
}

class RitaHenschel04 extends Character {
    name: string = 'リタ・H';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 589;
    atkCloseMin: number = 168;
    atkCloseMax: number = 589;
    attrClose: number = 0;
    atkShot: number = 607;
    atkShotMin: number = 173;
    atkShotMax: number = 607;
    attrShot: number = 0;
    def: number = 721;
    defMin: number = 206;
    defMax: number = 721;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.RitaHenschel.long;
    weaponCloses: Gear[] = ActressGears.RitaHenschel.short;
    equipmentTops: Gear[] = ActressGears.RitaHenschel.top;
    equipmentBottoms: Gear[] = ActressGears.RitaHenschel.bottom;
}

class RitaHenschel05 extends Character {
    name: string = 'リタ・H';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 757;
    atkCloseMin: number = 210;
    atkCloseMax: number = 757;
    attrClose: number = 0;
    atkShot: number = 780;
    atkShotMin: number = 217;
    atkShotMax: number = 780;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Hammer(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Hammer, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.RitaHenschel.long;
    weaponCloses: Gear[] = ActressGears.RitaHenschel.short;
    equipmentTops: Gear[] = ActressGears.RitaHenschel.top;
    equipmentBottoms: Gear[] = ActressGears.RitaHenschel.bottom;
}

class KagomeMisaki01 extends Character {
    name: string = '籠目 深沙希';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 835;
    hpMin: number = 346;
    hpMax: number = 835;
    atkClose: number = 146;
    atkCloseMin: number = 59;
    atkCloseMax: number = 146;
    attrClose: number = 0;
    atkShot: number = 149;
    atkShotMin: number = 60;
    atkShotMax: number = 149;
    attrShot: number = 0;
    def: number = 263;
    defMin: number = 105;
    defMax: number = 263;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KagomeMisaki.long;
    weaponCloses: Gear[] = ActressGears.KagomeMisaki.short;
    equipmentTops: Gear[] = ActressGears.KagomeMisaki.top;
    equipmentBottoms: Gear[] = ActressGears.KagomeMisaki.bottom;
}

class KagomeMisaki02 extends Character {
    name: string = '籠目 深沙希';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1363;
    hpMin: number = 490;
    hpMax: number = 1363;
    atkClose: number = 234;
    atkCloseMin: number = 88;
    atkCloseMax: number = 234;
    attrClose: number = 0;
    atkShot: number = 239;
    atkShotMin: number = 90;
    atkShotMax: number = 239;
    attrShot: number = 0;
    def: number = 420;
    defMin: number = 158;
    defMax: number = 420;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KagomeMisaki.long;
    weaponCloses: Gear[] = ActressGears.KagomeMisaki.short;
    equipmentTops: Gear[] = ActressGears.KagomeMisaki.top;
    equipmentBottoms: Gear[] = ActressGears.KagomeMisaki.bottom;
}

class KagomeMisaki04 extends Character {
    name: string = '籠目 深沙希';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2410;
    hpMin: number = 662;
    hpMax: number = 2410;
    atkClose: number = 410;
    atkCloseMin: number = 117;
    atkCloseMax: number = 410;
    attrClose: number = 0;
    atkShot: number = 418;
    atkShotMin: number = 119;
    atkShotMax: number = 418;
    attrShot: number = 0;
    def: number = 735;
    defMin: number = 210;
    defMax: number = 735;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KagomeMisaki.long;
    weaponCloses: Gear[] = ActressGears.KagomeMisaki.short;
    equipmentTops: Gear[] = ActressGears.KagomeMisaki.top;
    equipmentBottoms: Gear[] = ActressGears.KagomeMisaki.bottom;
}

class KagomeMisaki05 extends Character {
    name: string = '籠目 深沙希';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3110;
    hpMin: number = 835;
    hpMax: number = 3110;
    atkClose: number = 527;
    atkCloseMin: number = 146;
    atkCloseMax: number = 527;
    attrClose: number = 0;
    atkShot: number = 538;
    atkShotMin: number = 149;
    atkShotMax: number = 538;
    attrShot: number = 0;
    def: number = 945;
    defMin: number = 263;
    defMax: number = 945;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.8),
        AttrTypeDict.ResistVolt(-0.8),
        AttrTypeDict.ResistIce(-0.4),
        AttrTypeDict.Gravity(0.96),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.8),
        new Buff(AttrTypeId.ResistVolt, -0.8),
        new Buff(AttrTypeId.ResistIce, -0.4),
        new Buff(AttrTypeId.Gravity, 0.96),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KagomeMisaki.long;
    weaponCloses: Gear[] = ActressGears.KagomeMisaki.short;
    equipmentTops: Gear[] = ActressGears.KagomeMisaki.top;
    equipmentBottoms: Gear[] = ActressGears.KagomeMisaki.bottom;
}

class KanagataSugumi01 extends Character {
    name: string = '金潟 すぐみ';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 149;
    atkCloseMin: number = 60;
    atkCloseMax: number = 149;
    attrClose: number = 0;
    atkShot: number = 145;
    atkShotMin: number = 58;
    atkShotMax: number = 145;
    attrShot: number = 0;
    def: number = 253;
    defMin: number = 101;
    defMax: number = 253;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KanagataSugumi.long;
    weaponCloses: Gear[] = ActressGears.KanagataSugumi.short;
    equipmentTops: Gear[] = ActressGears.KanagataSugumi.top;
    equipmentBottoms: Gear[] = ActressGears.KanagataSugumi.bottom;
}

class KanagataSugumi02 extends Character {
    name: string = '金潟 すぐみ';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 239;
    atkCloseMin: number = 90;
    atkCloseMax: number = 239;
    attrClose: number = 0;
    atkShot: number = 232;
    atkShotMin: number = 87;
    atkShotMax: number = 232;
    attrShot: number = 0;
    def: number = 404;
    defMin: number = 152;
    defMax: number = 404;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KanagataSugumi.long;
    weaponCloses: Gear[] = ActressGears.KanagataSugumi.short;
    equipmentTops: Gear[] = ActressGears.KanagataSugumi.top;
    equipmentBottoms: Gear[] = ActressGears.KanagataSugumi.bottom;
}

class KanagataSugumi04 extends Character {
    name: string = '金潟 すぐみ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 418;
    atkCloseMin: number = 119;
    atkCloseMax: number = 418;
    attrClose: number = 0;
    atkShot: number = 406;
    atkShotMin: number = 116;
    atkShotMax: number = 406;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KanagataSugumi.long;
    weaponCloses: Gear[] = ActressGears.KanagataSugumi.short;
    equipmentTops: Gear[] = ActressGears.KanagataSugumi.top;
    equipmentBottoms: Gear[] = ActressGears.KanagataSugumi.bottom;
}

class KanagataSugumi05 extends Character {
    name: string = '金潟 すぐみ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 538;
    atkCloseMin: number = 149;
    atkCloseMax: number = 538;
    attrClose: number = 0;
    atkShot: number = 522;
    atkShotMin: number = 145;
    atkShotMax: number = 522;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.8),
        AttrTypeDict.ResistGravity(-0.8),
        AttrTypeDict.ResistFire(-0.4),
        AttrTypeDict.Volt(0.96),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.8),
        new Buff(AttrTypeId.ResistGravity, -0.8),
        new Buff(AttrTypeId.ResistFire, -0.4),
        new Buff(AttrTypeId.Volt, 0.96),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KanagataSugumi.long;
    weaponCloses: Gear[] = ActressGears.KanagataSugumi.short;
    equipmentTops: Gear[] = ActressGears.KanagataSugumi.top;
    equipmentBottoms: Gear[] = ActressGears.KanagataSugumi.bottom;
}

class NikaidohTsukasa01 extends Character {
    name: string = '二階堂 司';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 4;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 205;
    atkCloseMin: number = 82;
    atkCloseMax: number = 205;
    attrClose: number = 0;
    atkShot: number = 207;
    atkShotMin: number = 83;
    atkShotMax: number = 207;
    attrShot: number = 0;
    def: number = 250;
    defMin: number = 100;
    defMax: number = 250;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikaidohTsukasa.long;
    weaponCloses: Gear[] = ActressGears.NikaidohTsukasa.short;
    equipmentTops: Gear[] = ActressGears.NikaidohTsukasa.top;
    equipmentBottoms: Gear[] = ActressGears.NikaidohTsukasa.bottom;
}

class NikaidohTsukasa02 extends Character {
    name: string = '二階堂 司';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 327;
    atkCloseMin: number = 123;
    atkCloseMax: number = 327;
    attrClose: number = 0;
    atkShot: number = 330;
    atkShotMin: number = 124;
    atkShotMax: number = 330;
    attrShot: number = 0;
    def: number = 400;
    defMin: number = 150;
    defMax: number = 400;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikaidohTsukasa.long;
    weaponCloses: Gear[] = ActressGears.NikaidohTsukasa.short;
    equipmentTops: Gear[] = ActressGears.NikaidohTsukasa.top;
    equipmentBottoms: Gear[] = ActressGears.NikaidohTsukasa.bottom;
}

class NikaidohTsukasa04 extends Character {
    name: string = '二階堂 司';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 573;
    atkCloseMin: number = 164;
    atkCloseMax: number = 573;
    attrClose: number = 0;
    atkShot: number = 578;
    atkShotMin: number = 165;
    atkShotMax: number = 578;
    attrShot: number = 0;
    def: number = 700;
    defMin: number = 200;
    defMax: number = 700;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikaidohTsukasa.long;
    weaponCloses: Gear[] = ActressGears.NikaidohTsukasa.short;
    equipmentTops: Gear[] = ActressGears.NikaidohTsukasa.top;
    equipmentBottoms: Gear[] = ActressGears.NikaidohTsukasa.bottom;
}

class NikaidohTsukasa05 extends Character {
    name: string = '二階堂 司';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 736;
    atkCloseMin: number = 205;
    atkCloseMax: number = 736;
    attrClose: number = 0;
    atkShot: number = 744;
    atkShotMin: number = 207;
    atkShotMax: number = 744;
    attrShot: number = 0;
    def: number = 900;
    defMin: number = 250;
    defMax: number = 900;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.NikaidohTsukasa.long;
    weaponCloses: Gear[] = ActressGears.NikaidohTsukasa.short;
    equipmentTops: Gear[] = ActressGears.NikaidohTsukasa.top;
    equipmentBottoms: Gear[] = ActressGears.NikaidohTsukasa.bottom;
}

class SugaItsuri01 extends Character {
    name: string = '須賀 乙莉';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 2;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 194;
    atkCloseMin: number = 78;
    atkCloseMax: number = 194;
    attrClose: number = 0;
    atkShot: number = 207;
    atkShotMin: number = 83;
    atkShotMax: number = 207;
    attrShot: number = 0;
    def: number = 260;
    defMin: number = 104;
    defMax: number = 260;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SugaItsuri.long;
    weaponCloses: Gear[] = ActressGears.SugaItsuri.short;
    equipmentTops: Gear[] = ActressGears.SugaItsuri.top;
    equipmentBottoms: Gear[] = ActressGears.SugaItsuri.bottom;
}

class SugaItsuri02 extends Character {
    name: string = '須賀 乙莉';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 311;
    atkCloseMin: number = 117;
    atkCloseMax: number = 311;
    attrClose: number = 0;
    atkShot: number = 330;
    atkShotMin: number = 124;
    atkShotMax: number = 330;
    attrShot: number = 0;
    def: number = 416;
    defMin: number = 156;
    defMax: number = 416;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SugaItsuri.long;
    weaponCloses: Gear[] = ActressGears.SugaItsuri.short;
    equipmentTops: Gear[] = ActressGears.SugaItsuri.top;
    equipmentBottoms: Gear[] = ActressGears.SugaItsuri.bottom;
}

class SugaItsuri04 extends Character {
    name: string = '須賀 乙莉';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 544;
    atkCloseMin: number = 156;
    atkCloseMax: number = 544;
    attrClose: number = 0;
    atkShot: number = 578;
    atkShotMin: number = 165;
    atkShotMax: number = 578;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SugaItsuri.long;
    weaponCloses: Gear[] = ActressGears.SugaItsuri.short;
    equipmentTops: Gear[] = ActressGears.SugaItsuri.top;
    equipmentBottoms: Gear[] = ActressGears.SugaItsuri.bottom;
}

class SugaItsuri05 extends Character {
    name: string = '須賀 乙莉';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 700;
    atkCloseMin: number = 194;
    atkCloseMax: number = 700;
    attrClose: number = 0;
    atkShot: number = 744;
    atkShotMin: number = 207;
    atkShotMax: number = 744;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 157;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SugaItsuri.long;
    weaponCloses: Gear[] = ActressGears.SugaItsuri.short;
    equipmentTops: Gear[] = ActressGears.SugaItsuri.top;
    equipmentBottoms: Gear[] = ActressGears.SugaItsuri.bottom;
}

class AraimeYasuri01 extends Character {
    name: string = '新居目 安里';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 887;
    hpMin: number = 367;
    hpMax: number = 887;
    atkClose: number = 213;
    atkCloseMin: number = 85;
    atkCloseMax: number = 213;
    attrClose: number = 0;
    atkShot: number = 219;
    atkShotMin: number = 88;
    atkShotMax: number = 219;
    attrShot: number = 0;
    def: number = 253;
    defMin: number = 101;
    defMax: number = 253;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AraimeYasuri.long;
    weaponCloses: Gear[] = ActressGears.AraimeYasuri.short;
    equipmentTops: Gear[] = ActressGears.AraimeYasuri.top;
    equipmentBottoms: Gear[] = ActressGears.AraimeYasuri.bottom;
}

class AraimeYasuri02 extends Character {
    name: string = '新居目 安里';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1448;
    hpMin: number = 520;
    hpMax: number = 1448;
    atkClose: number = 340;
    atkCloseMin: number = 128;
    atkCloseMax: number = 340;
    attrClose: number = 0;
    atkShot: number = 350;
    atkShotMin: number = 131;
    atkShotMax: number = 350;
    attrShot: number = 0;
    def: number = 404;
    defMin: number = 152;
    defMax: number = 404;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AraimeYasuri.long;
    weaponCloses: Gear[] = ActressGears.AraimeYasuri.short;
    equipmentTops: Gear[] = ActressGears.AraimeYasuri.top;
    equipmentBottoms: Gear[] = ActressGears.AraimeYasuri.bottom;
}

class AraimeYasuri04 extends Character {
    name: string = '新居目 安里';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 595;
    atkCloseMin: number = 170;
    atkCloseMax: number = 595;
    attrClose: number = 0;
    atkShot: number = 613;
    atkShotMin: number = 175;
    atkShotMax: number = 613;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AraimeYasuri.long;
    weaponCloses: Gear[] = ActressGears.AraimeYasuri.short;
    equipmentTops: Gear[] = ActressGears.AraimeYasuri.top;
    equipmentBottoms: Gear[] = ActressGears.AraimeYasuri.bottom;
}

class AraimeYasuri05 extends Character {
    name: string = '新居目 安里';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 765;
    atkCloseMin: number = 213;
    atkCloseMax: number = 765;
    attrClose: number = 0;
    atkShot: number = 788;
    atkShotMin: number = 219;
    atkShotMax: number = 788;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.5),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.5),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.AraimeYasuri.long;
    weaponCloses: Gear[] = ActressGears.AraimeYasuri.short;
    equipmentTops: Gear[] = ActressGears.AraimeYasuri.top;
    equipmentBottoms: Gear[] = ActressGears.AraimeYasuri.bottom;
}

class FatimaBetrorum01 extends Character {
    name: string = 'ファティマ・B';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 3;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 169;
    atkCloseMin: number = 67;
    atkCloseMax: number = 169;
    attrClose: number = 0;
    atkShot: number = 161;
    atkShotMin: number = 64;
    atkShotMax: number = 161;
    attrShot: number = 0;
    def: number = 258;
    defMin: number = 103;
    defMax: number = 258;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.9),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.9),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FatimaBetrorum.long;
    weaponCloses: Gear[] = ActressGears.FatimaBetrorum.short;
    equipmentTops: Gear[] = ActressGears.FatimaBetrorum.top;
    equipmentBottoms: Gear[] = ActressGears.FatimaBetrorum.bottom;
}

class FatimaBetrorum02 extends Character {
    name: string = 'ファティマ・B';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 270;
    atkCloseMin: number = 101;
    atkCloseMax: number = 270;
    attrClose: number = 0;
    atkShot: number = 257;
    atkShotMin: number = 96;
    atkShotMax: number = 257;
    attrShot: number = 0;
    def: number = 412;
    defMin: number = 155;
    defMax: number = 412;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.9),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.9),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FatimaBetrorum.long;
    weaponCloses: Gear[] = ActressGears.FatimaBetrorum.short;
    equipmentTops: Gear[] = ActressGears.FatimaBetrorum.top;
    equipmentBottoms: Gear[] = ActressGears.FatimaBetrorum.bottom;
}

class FatimaBetrorum04 extends Character {
    name: string = 'ファティマ・B';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 472;
    atkCloseMin: number = 135;
    atkCloseMax: number = 472;
    attrClose: number = 0;
    atkShot: number = 450;
    atkShotMin: number = 129;
    atkShotMax: number = 450;
    attrShot: number = 0;
    def: number = 721;
    defMin: number = 206;
    defMax: number = 721;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.9),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.9),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FatimaBetrorum.long;
    weaponCloses: Gear[] = ActressGears.FatimaBetrorum.short;
    equipmentTops: Gear[] = ActressGears.FatimaBetrorum.top;
    equipmentBottoms: Gear[] = ActressGears.FatimaBetrorum.bottom;
}

class FatimaBetrorum05 extends Character {
    name: string = 'ファティマ・B';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 607;
    atkCloseMin: number = 169;
    atkCloseMax: number = 607;
    attrClose: number = 0;
    atkShot: number = 578;
    atkShotMin: number = 161;
    atkShotMax: number = 578;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.7),
        AttrTypeDict.ResistIce(-0.7),
        AttrTypeDict.ResistVolt(-0.35),
        AttrTypeDict.Fire(0.9),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.7),
        new Buff(AttrTypeId.ResistIce, -0.7),
        new Buff(AttrTypeId.ResistVolt, -0.35),
        new Buff(AttrTypeId.Fire, 0.9),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.FatimaBetrorum.long;
    weaponCloses: Gear[] = ActressGears.FatimaBetrorum.short;
    equipmentTops: Gear[] = ActressGears.FatimaBetrorum.top;
    equipmentBottoms: Gear[] = ActressGears.FatimaBetrorum.bottom;
}

class KuroganeYuto01 extends Character {
    name: string = '九炉鉄 悠都';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 8;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 870;
    hpMin: number = 360;
    hpMax: number = 870;
    atkClose: number = 230;
    atkCloseMin: number = 92;
    atkCloseMax: number = 230;
    attrClose: number = 0;
    atkShot: number = 210;
    atkShotMin: number = 84;
    atkShotMax: number = 210;
    attrShot: number = 0;
    def: number = 245;
    defMin: number = 98;
    defMax: number = 245;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KuroganeYuto.long;
    weaponCloses: Gear[] = ActressGears.KuroganeYuto.short;
    equipmentTops: Gear[] = ActressGears.KuroganeYuto.top;
    equipmentBottoms: Gear[] = ActressGears.KuroganeYuto.bottom;
}

class KuroganeYuto02 extends Character {
    name: string = '九炉鉄 悠都';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1420;
    hpMin: number = 510;
    hpMax: number = 1420;
    atkClose: number = 367;
    atkCloseMin: number = 138;
    atkCloseMax: number = 367;
    attrClose: number = 0;
    atkShot: number = 337;
    atkShotMin: number = 126;
    atkShotMax: number = 337;
    attrShot: number = 0;
    def: number = 392;
    defMin: number = 147;
    defMax: number = 392;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KuroganeYuto.long;
    weaponCloses: Gear[] = ActressGears.KuroganeYuto.short;
    equipmentTops: Gear[] = ActressGears.KuroganeYuto.top;
    equipmentBottoms: Gear[] = ActressGears.KuroganeYuto.bottom;
}

class KuroganeYuto04 extends Character {
    name: string = '九炉鉄 悠都';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 643;
    atkCloseMin: number = 184;
    atkCloseMax: number = 643;
    attrClose: number = 0;
    atkShot: number = 589;
    atkShotMin: number = 168;
    atkShotMax: number = 589;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KuroganeYuto.long;
    weaponCloses: Gear[] = ActressGears.KuroganeYuto.short;
    equipmentTops: Gear[] = ActressGears.KuroganeYuto.top;
    equipmentBottoms: Gear[] = ActressGears.KuroganeYuto.bottom;
}

class KuroganeYuto05 extends Character {
    name: string = '九炉鉄 悠都';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 826;
    atkCloseMin: number = 230;
    atkCloseMax: number = 826;
    attrClose: number = 0;
    atkShot: number = 757;
    atkShotMin: number = 210;
    atkShotMax: number = 757;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KuroganeYuto.long;
    weaponCloses: Gear[] = ActressGears.KuroganeYuto.short;
    equipmentTops: Gear[] = ActressGears.KuroganeYuto.top;
    equipmentBottoms: Gear[] = ActressGears.KuroganeYuto.bottom;
}

class ItokuraNeo01 extends Character {
    name: string = '伊戸倉 音緒';
    rare: number = 1;
    level: number = 15;
    levelMin: number = 6;
    levelMax: number = 15;
    gradeUpLimit: number = 0;
    hp: number = 861;
    hpMin: number = 356;
    hpMax: number = 861;
    atkClose: number = 175;
    atkCloseMin: number = 70;
    atkCloseMax: number = 175;
    attrClose: number = 0;
    atkShot: number = 179;
    atkShotMin: number = 71;
    atkShotMax: number = 179;
    attrShot: number = 0;
    def: number = 248;
    defMin: number = 99;
    defMax: number = 248;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.ItokuraNeo.long;
    weaponCloses: Gear[] = ActressGears.ItokuraNeo.short;
    equipmentTops: Gear[] = ActressGears.ItokuraNeo.top;
    equipmentBottoms: Gear[] = ActressGears.ItokuraNeo.bottom;
}

class ItokuraNeo02 extends Character {
    name: string = '伊戸倉 音緒';
    rare: number = 2;
    level: number = 30;
    levelMin: number = 1;
    levelMax: number = 30;
    gradeUpLimit: number = 40;
    hp: number = 1406;
    hpMin: number = 505;
    hpMax: number = 1406;
    atkClose: number = 280;
    atkCloseMin: number = 105;
    atkCloseMax: number = 280;
    attrClose: number = 0;
    atkShot: number = 286;
    atkShotMin: number = 107;
    atkShotMax: number = 286;
    attrShot: number = 0;
    def: number = 396;
    defMin: number = 149;
    defMax: number = 396;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15),
        AttrTypeDict.Rifle(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15),
        new Buff(AttrTypeId.Rifle, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.ItokuraNeo.long;
    weaponCloses: Gear[] = ActressGears.ItokuraNeo.short;
    equipmentTops: Gear[] = ActressGears.ItokuraNeo.top;
    equipmentBottoms: Gear[] = ActressGears.ItokuraNeo.bottom;
}

class ItokuraNeo04 extends Character {
    name: string = '伊戸倉 音緒';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 20;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 490;
    atkCloseMin: number = 140;
    atkCloseMax: number = 490;
    attrClose: number = 0;
    atkShot: number = 500;
    atkShotMin: number = 143;
    atkShotMax: number = 500;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15),
        AttrTypeDict.Rifle(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15),
        new Buff(AttrTypeId.Rifle, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.ItokuraNeo.long;
    weaponCloses: Gear[] = ActressGears.ItokuraNeo.short;
    equipmentTops: Gear[] = ActressGears.ItokuraNeo.top;
    equipmentBottoms: Gear[] = ActressGears.ItokuraNeo.bottom;
}

class ItokuraNeo05 extends Character {
    name: string = '伊戸倉 音緒';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 630;
    atkCloseMin: number = 175;
    atkCloseMax: number = 630;
    attrClose: number = 0;
    atkShot: number = 643;
    atkShotMin: number = 179;
    atkShotMax: number = 643;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15),
        AttrTypeDict.Rifle(0.25)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15),
        new Buff(AttrTypeId.Rifle, 0.25)
    ];
    weaponShots: Gear[] = ActressGears.ItokuraNeo.long;
    weaponCloses: Gear[] = ActressGears.ItokuraNeo.short;
    equipmentTops: Gear[] = ActressGears.ItokuraNeo.top;
    equipmentBottoms: Gear[] = ActressGears.ItokuraNeo.bottom;
}

class Gourai04 extends Character {
    name: string = '轟雷';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2610;
    hpMin: number = 718;
    hpMax: number = 2610;
    atkClose: number = 578;
    atkCloseMin: number = 165;
    atkCloseMax: number = 578;
    attrClose: number = 0;
    atkShot: number = 567;
    atkShotMin: number = 162;
    atkShotMax: number = 567;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Gourai.long;
    weaponCloses: Gear[] = ActressGears.Gourai.short;
    equipmentTops: Gear[] = ActressGears.Gourai.top;
    equipmentBottoms: Gear[] = ActressGears.Gourai.bottom;
}

class Gourai05 extends Character {
    name: string = '轟雷';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3370;
    hpMin: number = 905;
    hpMax: number = 3370;
    atkClose: number = 744;
    atkCloseMin: number = 207;
    atkCloseMax: number = 744;
    attrClose: number = 0;
    atkShot: number = 729;
    atkShotMin: number = 203;
    atkShotMax: number = 729;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Gourai.long;
    weaponCloses: Gear[] = ActressGears.Gourai.short;
    equipmentTops: Gear[] = ActressGears.Gourai.top;
    equipmentBottoms: Gear[] = ActressGears.Gourai.bottom;
}

class Stylet04 extends Character {
    name: string = 'スティレット';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 590;
    atkCloseMin: number = 168;
    atkCloseMax: number = 590;
    attrClose: number = 0;
    atkShot: number = 590;
    atkShotMin: number = 168;
    atkShotMax: number = 590;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Stylet.long;
    weaponCloses: Gear[] = ActressGears.Stylet.short;
    equipmentTops: Gear[] = ActressGears.Stylet.top;
    equipmentBottoms: Gear[] = ActressGears.Stylet.bottom;
}

class Stylet05 extends Character {
    name: string = 'スティレット';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 758;
    atkCloseMin: number = 211;
    atkCloseMax: number = 758;
    attrClose: number = 0;
    atkShot: number = 758;
    atkShotMin: number = 211;
    atkShotMax: number = 758;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 166;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Stylet.long;
    weaponCloses: Gear[] = ActressGears.Stylet.short;
    equipmentTops: Gear[] = ActressGears.Stylet.top;
    equipmentBottoms: Gear[] = ActressGears.Stylet.bottom;
}

class Baselard04 extends Character {
    name: string = 'バーゼラルド';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2585;
    hpMin: number = 711;
    hpMax: number = 2585;
    atkClose: number = 476;
    atkCloseMin: number = 136;
    atkCloseMax: number = 476;
    attrClose: number = 0;
    atkShot: number = 500;
    atkShotMin: number = 143;
    atkShotMax: number = 500;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Baselard.long;
    weaponCloses: Gear[] = ActressGears.Baselard.short;
    equipmentTops: Gear[] = ActressGears.Baselard.top;
    equipmentBottoms: Gear[] = ActressGears.Baselard.bottom;
}

class Baselard05 extends Character {
    name: string = 'バーゼラルド';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 612;
    atkCloseMin: number = 170;
    atkCloseMax: number = 612;
    attrClose: number = 0;
    atkShot: number = 643;
    atkShotMin: number = 179;
    atkShotMax: number = 643;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Spear(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Spear, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Baselard.long;
    weaponCloses: Gear[] = ActressGears.Baselard.short;
    equipmentTops: Gear[] = ActressGears.Baselard.top;
    equipmentBottoms: Gear[] = ActressGears.Baselard.bottom;
}

class SolRaptor04 extends Character {
    name: string = 'SOL ラプター';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 607;
    atkCloseMin: number = 173;
    atkCloseMax: number = 607;
    attrClose: number = 0;
    atkShot: number = 613;
    atkShotMin: number = 175;
    atkShotMax: number = 613;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SolRaptor.long;
    weaponCloses: Gear[] = ActressGears.SolRaptor.short;
    equipmentTops: Gear[] = ActressGears.SolRaptor.top;
    equipmentBottoms: Gear[] = ActressGears.SolRaptor.bottom;
}

class SolRaptor05 extends Character {
    name: string = 'SOL ラプター';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 780;
    atkCloseMin: number = 217;
    atkCloseMax: number = 780;
    attrClose: number = 0;
    atkShot: number = 788;
    atkShotMin: number = 219;
    atkShotMax: number = 788;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15),
        AttrTypeDict.Fire(0.5)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15),
        new Buff(AttrTypeId.Fire, 0.5)
    ];
    weaponShots: Gear[] = ActressGears.SolRaptor.long;
    weaponCloses: Gear[] = ActressGears.SolRaptor.short;
    equipmentTops: Gear[] = ActressGears.SolRaptor.top;
    equipmentBottoms: Gear[] = ActressGears.SolRaptor.bottom;
}

class SolRaptor70 extends Character {
    name: string = 'SOL ラプター_ストライク';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 624;
    atkCloseMin: number = 173;
    atkCloseMax: number = 624;
    attrClose: number = 0;
    atkShot: number = 630;
    atkShotMin: number = 175;
    atkShotMax: number = 630;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Dagger(0.3),
        AttrTypeDict.Rifle(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Dagger, 0.3),
        new Buff(AttrTypeId.Rifle, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.SolRaptor.long;
    weaponCloses: Gear[] = ActressGears.SolRaptor.short;
    equipmentTops: Gear[] = ActressGears.SolRaptor.top;
    equipmentBottoms: Gear[] = ActressGears.SolRaptor.bottom;
}

class MiyafujiYoshika04 extends Character {
    name: string = '宮藤 芳佳';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2636;
    hpMin: number = 725;
    hpMax: number = 2636;
    atkClose: number = 476;
    atkCloseMin: number = 136;
    atkCloseMax: number = 476;
    attrClose: number = 0;
    atkShot: number = 476;
    atkShotMin: number = 136;
    atkShotMax: number = 476;
    attrShot: number = 0;
    def: number = 735;
    defMin: number = 210;
    defMax: number = 735;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MiyafujiYoshika.long;
    weaponCloses: Gear[] = ActressGears.MiyafujiYoshika.short;
    equipmentTops: Gear[] = ActressGears.MiyafujiYoshika.top;
    equipmentBottoms: Gear[] = ActressGears.MiyafujiYoshika.bottom;
}

class MiyafujiYoshika05 extends Character {
    name: string = '宮藤 芳佳';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3402;
    hpMin: number = 914;
    hpMax: number = 3402;
    atkClose: number = 612;
    atkCloseMin: number = 170;
    atkCloseMax: number = 612;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 945;
    defMin: number = 263;
    defMax: number = 945;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MiyafujiYoshika.long;
    weaponCloses: Gear[] = ActressGears.MiyafujiYoshika.short;
    equipmentTops: Gear[] = ActressGears.MiyafujiYoshika.top;
    equipmentBottoms: Gear[] = ActressGears.MiyafujiYoshika.bottom;
}

class LynetteBishop04 extends Character {
    name: string = 'リネット・B';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2585;
    hpMin: number = 711;
    hpMax: number = 2585;
    atkClose: number = 476;
    atkCloseMin: number = 136;
    atkCloseMax: number = 476;
    attrClose: number = 0;
    atkShot: number = 500;
    atkShotMin: number = 143;
    atkShotMax: number = 500;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.LynetteBishop.long;
    weaponCloses: Gear[] = ActressGears.LynetteBishop.short;
    equipmentTops: Gear[] = ActressGears.LynetteBishop.top;
    equipmentBottoms: Gear[] = ActressGears.LynetteBishop.bottom;
}

class LynetteBishop05 extends Character {
    name: string = 'リネット・B';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3337;
    hpMin: number = 896;
    hpMax: number = 3337;
    atkClose: number = 612;
    atkCloseMin: number = 170;
    atkCloseMax: number = 612;
    attrClose: number = 0;
    atkShot: number = 643;
    atkShotMin: number = 179;
    atkShotMax: number = 643;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Sniper(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Sniper, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.LynetteBishop.long;
    weaponCloses: Gear[] = ActressGears.LynetteBishop.short;
    equipmentTops: Gear[] = ActressGears.LynetteBishop.top;
    equipmentBottoms: Gear[] = ActressGears.LynetteBishop.bottom;
}

class GertrudBarkhorn04 extends Character {
    name: string = 'ゲルトルート・B';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 625;
    atkCloseMin: number = 179;
    atkCloseMax: number = 625;
    attrClose: number = 0;
    atkShot: number = 595;
    atkShotMin: number = 170;
    atkShotMax: number = 595;
    attrShot: number = 0;
    def: number = 721;
    defMin: number = 206;
    defMax: number = 721;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.GertrudBarkhorn.long;
    weaponCloses: Gear[] = ActressGears.GertrudBarkhorn.short;
    equipmentTops: Gear[] = ActressGears.GertrudBarkhorn.top;
    equipmentBottoms: Gear[] = ActressGears.GertrudBarkhorn.bottom;
}

class GertrudBarkhorn05 extends Character {
    name: string = 'ゲルトルート・B';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 803;
    atkCloseMin: number = 223;
    atkCloseMax: number = 803;
    attrClose: number = 0;
    atkShot: number = 765;
    atkShotMin: number = 213;
    atkShotMax: number = 765;
    attrShot: number = 0;
    def: number = 927;
    defMin: number = 258;
    defMax: number = 927;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.GertrudBarkhorn.long;
    weaponCloses: Gear[] = ActressGears.GertrudBarkhorn.short;
    equipmentTops: Gear[] = ActressGears.GertrudBarkhorn.top;
    equipmentBottoms: Gear[] = ActressGears.GertrudBarkhorn.bottom;
}

class EricaHartmann04 extends Character {
    name: string = 'エーリカ・H';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 490;
    atkCloseMin: number = 140;
    atkCloseMax: number = 490;
    attrClose: number = 0;
    atkShot: number = 490;
    atkShotMin: number = 140;
    atkShotMax: number = 490;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.EricaHartmann.long;
    weaponCloses: Gear[] = ActressGears.EricaHartmann.short;
    equipmentTops: Gear[] = ActressGears.EricaHartmann.top;
    equipmentBottoms: Gear[] = ActressGears.EricaHartmann.bottom;
}

class EricaHartmann05 extends Character {
    name: string = 'エーリカ・H';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 630;
    atkCloseMin: number = 175;
    atkCloseMax: number = 630;
    attrClose: number = 0;
    atkShot: number = 630;
    atkShotMin: number = 175;
    atkShotMax: number = 630;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.HandGun(0.15),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.ResistFire(1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.ResistFire, 1)
    ];
    weaponShots: Gear[] = ActressGears.EricaHartmann.long;
    weaponCloses: Gear[] = ActressGears.EricaHartmann.short;
    equipmentTops: Gear[] = ActressGears.EricaHartmann.top;
    equipmentBottoms: Gear[] = ActressGears.EricaHartmann.bottom;
}

class Hresvelgr04 extends Character {
    name: string = 'フレズヴェルク';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 495;
    atkCloseMin: number = 141;
    atkCloseMax: number = 495;
    attrClose: number = 0;
    atkShot: number = 495;
    atkShotMin: number = 141;
    atkShotMax: number = 495;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Hresvelgr.long;
    weaponCloses: Gear[] = ActressGears.Hresvelgr.short;
    equipmentTops: Gear[] = ActressGears.Hresvelgr.top;
    equipmentBottoms: Gear[] = ActressGears.Hresvelgr.bottom;
}

class Hresvelgr05 extends Character {
    name: string = 'フレズヴェルク';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 636;
    atkCloseMin: number = 177;
    atkCloseMax: number = 636;
    attrClose: number = 0;
    atkShot: number = 636;
    atkShotMin: number = 177;
    atkShotMax: number = 636;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 168;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Hresvelgr.long;
    weaponCloses: Gear[] = ActressGears.Hresvelgr.short;
    equipmentTops: Gear[] = ActressGears.Hresvelgr.top;
    equipmentBottoms: Gear[] = ActressGears.Hresvelgr.bottom;
}

class HoshitsukiMiki04 extends Character {
    name: string = '星月 みき';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 584;
    atkCloseMin: number = 167;
    atkCloseMax: number = 584;
    attrClose: number = 0;
    atkShot: number = 567;
    atkShotMin: number = 162;
    atkShotMax: number = 567;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HoshitsukiMiki.long;
    weaponCloses: Gear[] = ActressGears.HoshitsukiMiki.short;
    equipmentTops: Gear[] = ActressGears.HoshitsukiMiki.top;
    equipmentBottoms: Gear[] = ActressGears.HoshitsukiMiki.bottom;
}

class HoshitsukiMiki05 extends Character {
    name: string = '星月 みき';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 751;
    atkCloseMin: number = 209;
    atkCloseMax: number = 751;
    attrClose: number = 0;
    atkShot: number = 729;
    atkShotMin: number = 203;
    atkShotMax: number = 729;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistFire(0.6),
        AttrTypeDict.ResistIce(-0.6),
        AttrTypeDict.ResistVolt(-0.3),
        AttrTypeDict.Fire(0.56),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistFire, 0.6),
        new Buff(AttrTypeId.ResistIce, -0.6),
        new Buff(AttrTypeId.ResistVolt, -0.3),
        new Buff(AttrTypeId.Fire, 0.56),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.HoshitsukiMiki.long;
    weaponCloses: Gear[] = ActressGears.HoshitsukiMiki.short;
    equipmentTops: Gear[] = ActressGears.HoshitsukiMiki.top;
    equipmentBottoms: Gear[] = ActressGears.HoshitsukiMiki.bottom;
}

class TokiwaKurumi04 extends Character {
    name: string = '常磐 くるみ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 619;
    atkCloseMin: number = 177;
    atkCloseMax: number = 619;
    attrClose: number = 0;
    atkShot: number = 595;
    atkShotMin: number = 170;
    atkShotMax: number = 595;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Sniper(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Sniper, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TokiwaKurumi.long;
    weaponCloses: Gear[] = ActressGears.TokiwaKurumi.short;
    equipmentTops: Gear[] = ActressGears.TokiwaKurumi.top;
    equipmentBottoms: Gear[] = ActressGears.TokiwaKurumi.bottom;
}

class TokiwaKurumi05 extends Character {
    name: string = '常磐 くるみ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 796;
    atkCloseMin: number = 221;
    atkCloseMax: number = 796;
    attrClose: number = 0;
    atkShot: number = 765;
    atkShotMin: number = 213;
    atkShotMax: number = 765;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Sniper(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Sniper, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.TokiwaKurumi.long;
    weaponCloses: Gear[] = ActressGears.TokiwaKurumi.short;
    equipmentTops: Gear[] = ActressGears.TokiwaKurumi.top;
    equipmentBottoms: Gear[] = ActressGears.TokiwaKurumi.bottom;
}

class WatagiMichelle04 extends Character {
    name: string = '綿木 ミシェル';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 441;
    atkCloseMin: number = 126;
    atkCloseMax: number = 441;
    attrClose: number = 0;
    atkShot: number = 459;
    atkShotMin: number = 131;
    atkShotMax: number = 459;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.WatagiMichelle.long;
    weaponCloses: Gear[] = ActressGears.WatagiMichelle.short;
    equipmentTops: Gear[] = ActressGears.WatagiMichelle.top;
    equipmentBottoms: Gear[] = ActressGears.WatagiMichelle.bottom;
}

class WatagiMichelle05 extends Character {
    name: string = '綿木 ミシェル';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 567;
    atkCloseMin: number = 158;
    atkCloseMax: number = 567;
    attrClose: number = 0;
    atkShot: number = 590;
    atkShotMin: number = 164;
    atkShotMax: number = 590;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.9),
        AttrTypeDict.Bazooka(0.25),
        AttrTypeDict.HandGun(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.9),
        new Buff(AttrTypeId.Bazooka, 0.25),
        new Buff(AttrTypeId.HandGun, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.WatagiMichelle.long;
    weaponCloses: Gear[] = ActressGears.WatagiMichelle.short;
    equipmentTops: Gear[] = ActressGears.WatagiMichelle.top;
    equipmentBottoms: Gear[] = ActressGears.WatagiMichelle.bottom;
}

class Sadone04 extends Character {
    name: string = 'サドネ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 490;
    atkCloseMin: number = 140;
    atkCloseMax: number = 490;
    attrClose: number = 0;
    atkShot: number = 500;
    atkShotMin: number = 143;
    atkShotMax: number = 500;
    attrShot: number = 0;
    def: number = 686;
    defMin: number = 196;
    defMax: number = 686;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Sadone.long;
    weaponCloses: Gear[] = ActressGears.Sadone.short;
    equipmentTops: Gear[] = ActressGears.Sadone.top;
    equipmentBottoms: Gear[] = ActressGears.Sadone.bottom;
}

class Sadone05 extends Character {
    name: string = 'サドネ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 630;
    atkCloseMin: number = 175;
    atkCloseMax: number = 630;
    attrClose: number = 0;
    atkShot: number = 643;
    atkShotMin: number = 179;
    atkShotMax: number = 643;
    attrShot: number = 0;
    def: number = 882;
    defMin: number = 245;
    defMax: number = 882;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Spear(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Spear, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Sadone.long;
    weaponCloses: Gear[] = ActressGears.Sadone.short;
    equipmentTops: Gear[] = ActressGears.Sadone.top;
    equipmentBottoms: Gear[] = ActressGears.Sadone.bottom;
}

class KougamiKanon04 extends Character {
    name: string = '煌上 花音';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 486;
    atkCloseMin: number = 139;
    atkCloseMax: number = 486;
    attrClose: number = 0;
    atkShot: number = 495;
    atkShotMin: number = 141;
    atkShotMax: number = 495;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KougamiKanon.long;
    weaponCloses: Gear[] = ActressGears.KougamiKanon.short;
    equipmentTops: Gear[] = ActressGears.KougamiKanon.top;
    equipmentBottoms: Gear[] = ActressGears.KougamiKanon.bottom;
}

class KougamiKanon05 extends Character {
    name: string = '煌上 花音';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 624;
    atkCloseMin: number = 173;
    atkCloseMax: number = 624;
    attrClose: number = 0;
    atkShot: number = 636;
    atkShotMin: number = 177;
    atkShotMax: number = 636;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Twin(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Twin, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KougamiKanon.long;
    weaponCloses: Gear[] = ActressGears.KougamiKanon.short;
    equipmentTops: Gear[] = ActressGears.KougamiKanon.top;
    equipmentBottoms: Gear[] = ActressGears.KougamiKanon.bottom;
}

class KuniedaShiho04 extends Character {
    name: string = '国枝 詩穂';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 495;
    atkCloseMin: number = 141;
    atkCloseMax: number = 495;
    attrClose: number = 0;
    atkShot: number = 486;
    atkShotMin: number = 139;
    atkShotMax: number = 486;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KuniedaShiho.long;
    weaponCloses: Gear[] = ActressGears.KuniedaShiho.short;
    equipmentTops: Gear[] = ActressGears.KuniedaShiho.top;
    equipmentBottoms: Gear[] = ActressGears.KuniedaShiho.bottom;
}

class KuniedaShiho05 extends Character {
    name: string = '国枝 詩穂';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 636;
    atkCloseMin: number = 177;
    atkCloseMax: number = 636;
    attrClose: number = 0;
    atkShot: number = 624;
    atkShotMin: number = 173;
    atkShotMax: number = 624;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.7),
        AttrTypeDict.ResistFire(-0.7),
        AttrTypeDict.ResistGravity(-0.35),
        AttrTypeDict.Ice(0.86),
        AttrTypeDict.HandGun(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.7),
        new Buff(AttrTypeId.ResistFire, -0.7),
        new Buff(AttrTypeId.ResistGravity, -0.35),
        new Buff(AttrTypeId.Ice, 0.86),
        new Buff(AttrTypeId.HandGun, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.KuniedaShiho.long;
    weaponCloses: Gear[] = ActressGears.KuniedaShiho.short;
    equipmentTops: Gear[] = ActressGears.KuniedaShiho.top;
    equipmentBottoms: Gear[] = ActressGears.KuniedaShiho.bottom;
}

class SylphyII04 extends Character {
    name: string = 'シルフィーII';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 595;
    atkCloseMin: number = 170;
    atkCloseMax: number = 595;
    attrClose: number = 0;
    atkShot: number = 567;
    atkShotMin: number = 162;
    atkShotMax: number = 567;
    attrShot: number = 0;
    def: number = 728;
    defMin: number = 208;
    defMax: number = 728;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SylphyII.long;
    weaponCloses: Gear[] = ActressGears.SylphyII.short;
    equipmentTops: Gear[] = ActressGears.SylphyII.top;
    equipmentBottoms: Gear[] = ActressGears.SylphyII.bottom;
}

class SylphyII05 extends Character {
    name: string = 'シルフィーII';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 765;
    atkCloseMin: number = 213;
    atkCloseMax: number = 765;
    attrClose: number = 0;
    atkShot: number = 729;
    atkShotMin: number = 203;
    atkShotMax: number = 729;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.6),
        AttrTypeDict.ResistGravity(-0.6),
        AttrTypeDict.ResistFire(-0.3),
        AttrTypeDict.Volt(0.56),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.6),
        new Buff(AttrTypeId.ResistGravity, -0.6),
        new Buff(AttrTypeId.ResistFire, -0.3),
        new Buff(AttrTypeId.Volt, 0.56),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.SylphyII.long;
    weaponCloses: Gear[] = ActressGears.SylphyII.short;
    equipmentTops: Gear[] = ActressGears.SylphyII.top;
    equipmentBottoms: Gear[] = ActressGears.SylphyII.bottom;
}

class SylphyII70 extends Character {
    name: string = 'シルフィーII_Mode-B';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 643;
    atkCloseMin: number = 179;
    atkCloseMax: number = 643;
    attrClose: number = 0;
    atkShot: number = 612;
    atkShotMin: number = 170;
    atkShotMax: number = 612;
    attrShot: number = 0;
    def: number = 936;
    defMin: number = 260;
    defMax: number = 936;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.86),
        AttrTypeDict.Dagger(0.3),
        AttrTypeDict.Twin(0.1)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.86),
        new Buff(AttrTypeId.Dagger, 0.3),
        new Buff(AttrTypeId.Twin, 0.1)
    ];
    weaponShots: Gear[] = ActressGears.SylphyII.long;
    weaponCloses: Gear[] = ActressGears.SylphyII.short;
    equipmentTops: Gear[] = ActressGears.SylphyII.top;
    equipmentBottoms: Gear[] = ActressGears.SylphyII.bottom;
}

class Kasumi04 extends Character {
    name: string = 'かすみ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2510;
    hpMin: number = 690;
    hpMax: number = 2510;
    atkClose: number = 625;
    atkCloseMin: number = 179;
    atkCloseMax: number = 625;
    attrClose: number = 0;
    atkShot: number = 601;
    atkShotMin: number = 172;
    atkShotMax: number = 601;
    attrShot: number = 0;
    def: number = 707;
    defMin: number = 202;
    defMax: number = 707;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Kasumi.long;
    weaponCloses: Gear[] = ActressGears.Kasumi.short;
    equipmentTops: Gear[] = ActressGears.Kasumi.top;
    equipmentBottoms: Gear[] = ActressGears.Kasumi.bottom;
}

class Kasumi05 extends Character {
    name: string = 'かすみ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3240;
    hpMin: number = 870;
    hpMax: number = 3240;
    atkClose: number = 803;
    atkCloseMin: number = 223;
    atkCloseMax: number = 803;
    attrClose: number = 0;
    atkShot: number = 773;
    atkShotMin: number = 215;
    atkShotMax: number = 773;
    attrShot: number = 0;
    def: number = 909;
    defMin: number = 253;
    defMax: number = 909;
    spd: number = 165;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.5),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Rifle(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.5),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Rifle, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Kasumi.long;
    weaponCloses: Gear[] = ActressGears.Kasumi.short;
    equipmentTops: Gear[] = ActressGears.Kasumi.top;
    equipmentBottoms: Gear[] = ActressGears.Kasumi.bottom;
}

class MarieRose04 extends Character {
    name: string = 'マリー・ローズ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2535;
    hpMin: number = 697;
    hpMax: number = 2535;
    atkClose: number = 590;
    atkCloseMin: number = 168;
    atkCloseMax: number = 590;
    attrClose: number = 0;
    atkShot: number = 584;
    atkShotMin: number = 167;
    atkShotMax: number = 584;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MarieRose.long;
    weaponCloses: Gear[] = ActressGears.MarieRose.short;
    equipmentTops: Gear[] = ActressGears.MarieRose.top;
    equipmentBottoms: Gear[] = ActressGears.MarieRose.bottom;
}

class MarieRose05 extends Character {
    name: string = 'マリー・ローズ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3272;
    hpMin: number = 879;
    hpMax: number = 3272;
    atkClose: number = 758;
    atkCloseMin: number = 211;
    atkCloseMax: number = 758;
    attrClose: number = 0;
    atkShot: number = 751;
    atkShotMin: number = 209;
    atkShotMax: number = 751;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.6),
        AttrTypeDict.ResistVolt(-0.6),
        AttrTypeDict.ResistIce(-0.3),
        AttrTypeDict.Gravity(0.56),
        AttrTypeDict.Dagger(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.6),
        new Buff(AttrTypeId.ResistVolt, -0.6),
        new Buff(AttrTypeId.ResistIce, -0.3),
        new Buff(AttrTypeId.Gravity, 0.56),
        new Buff(AttrTypeId.Dagger, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.MarieRose.long;
    weaponCloses: Gear[] = ActressGears.MarieRose.short;
    equipmentTops: Gear[] = ActressGears.MarieRose.top;
    equipmentBottoms: Gear[] = ActressGears.MarieRose.bottom;
}

class Aya04 extends Character {
    name: string = 'アヤ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2485;
    hpMin: number = 683;
    hpMax: number = 2485;
    atkClose: number = 486;
    atkCloseMin: number = 139;
    atkCloseMax: number = 486;
    attrClose: number = 0;
    atkShot: number = 495;
    atkShotMin: number = 141;
    atkShotMax: number = 495;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Aya.long;
    weaponCloses: Gear[] = ActressGears.Aya.short;
    equipmentTops: Gear[] = ActressGears.Aya.top;
    equipmentBottoms: Gear[] = ActressGears.Aya.bottom;
}

class Aya05 extends Character {
    name: string = 'アヤ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3208;
    hpMin: number = 861;
    hpMax: number = 3208;
    atkClose: number = 624;
    atkCloseMin: number = 173;
    atkCloseMax: number = 624;
    attrClose: number = 0;
    atkShot: number = 636;
    atkShotMin: number = 177;
    atkShotMax: number = 636;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 163;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistVolt(0.7),
        AttrTypeDict.ResistGravity(-0.7),
        AttrTypeDict.ResistFire(-0.35),
        AttrTypeDict.Volt(0.86),
        AttrTypeDict.Rifle(0.25),
        AttrTypeDict.Dagger(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistVolt, 0.7),
        new Buff(AttrTypeId.ResistGravity, -0.7),
        new Buff(AttrTypeId.ResistFire, -0.35),
        new Buff(AttrTypeId.Volt, 0.86),
        new Buff(AttrTypeId.Rifle, 0.25),
        new Buff(AttrTypeId.Dagger, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Aya.long;
    weaponCloses: Gear[] = ActressGears.Aya.short;
    equipmentTops: Gear[] = ActressGears.Aya.top;
    equipmentBottoms: Gear[] = ActressGears.Aya.bottom;
}

class Yuki04 extends Character {
    name: string = 'ユキ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2560;
    hpMin: number = 704;
    hpMax: number = 2560;
    atkClose: number = 584;
    atkCloseMin: number = 167;
    atkCloseMax: number = 584;
    attrClose: number = 0;
    atkShot: number = 578;
    atkShotMin: number = 165;
    atkShotMax: number = 578;
    attrShot: number = 0;
    def: number = 714;
    defMin: number = 204;
    defMax: number = 714;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Yuki.long;
    weaponCloses: Gear[] = ActressGears.Yuki.short;
    equipmentTops: Gear[] = ActressGears.Yuki.top;
    equipmentBottoms: Gear[] = ActressGears.Yuki.bottom;
}

class Yuki05 extends Character {
    name: string = 'ユキ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3305;
    hpMin: number = 887;
    hpMax: number = 3305;
    atkClose: number = 751;
    atkCloseMin: number = 209;
    atkCloseMax: number = 751;
    attrClose: number = 0;
    atkShot: number = 744;
    atkShotMin: number = 207;
    atkShotMax: number = 744;
    attrShot: number = 0;
    def: number = 918;
    defMin: number = 255;
    defMax: number = 918;
    spd: number = 160;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistIce(0.6),
        AttrTypeDict.ResistFire(-0.6),
        AttrTypeDict.ResistGravity(-0.3),
        AttrTypeDict.Ice(0.56),
        AttrTypeDict.Sword(0.25),
        AttrTypeDict.Bazooka(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistIce, 0.6),
        new Buff(AttrTypeId.ResistFire, -0.6),
        new Buff(AttrTypeId.ResistGravity, -0.3),
        new Buff(AttrTypeId.Ice, 0.56),
        new Buff(AttrTypeId.Sword, 0.25),
        new Buff(AttrTypeId.Bazooka, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Yuki.long;
    weaponCloses: Gear[] = ActressGears.Yuki.short;
    equipmentTops: Gear[] = ActressGears.Yuki.top;
    equipmentBottoms: Gear[] = ActressGears.Yuki.bottom;
}

class Yamada04 extends Character {
    name: string = 'ヤマダ';
    rare: number = 3;
    level: number = 60;
    levelMin: number = 1;
    levelMax: number = 60;
    gradeUpLimit: number = 0;
    hp: number = 2610;
    hpMin: number = 718;
    hpMax: number = 2610;
    atkClose: number = 459;
    atkCloseMin: number = 131;
    atkCloseMax: number = 459;
    attrClose: number = 0;
    atkShot: number = 445;
    atkShotMin: number = 127;
    atkShotMax: number = 445;
    attrShot: number = 0;
    def: number = 693;
    defMin: number = 198;
    defMax: number = 693;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.9),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.9),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Yamada.long;
    weaponCloses: Gear[] = ActressGears.Yamada.short;
    equipmentTops: Gear[] = ActressGears.Yamada.top;
    equipmentBottoms: Gear[] = ActressGears.Yamada.bottom;
}

class Yamada05 extends Character {
    name: string = 'ヤマダ';
    rare: number = 4;
    level: number = 80;
    levelMin: number = 1;
    levelMax: number = 80;
    gradeUpLimit: number = 10;
    hp: number = 3370;
    hpMin: number = 905;
    hpMax: number = 3370;
    atkClose: number = 590;
    atkCloseMin: number = 164;
    atkCloseMax: number = 590;
    attrClose: number = 0;
    atkShot: number = 573;
    atkShotMin: number = 159;
    atkShotMax: number = 573;
    attrShot: number = 0;
    def: number = 891;
    defMin: number = 248;
    defMax: number = 891;
    spd: number = 162;
    goodAttr: AttrType[] = [
        AttrTypeDict.ResistGravity(0.7),
        AttrTypeDict.ResistVolt(-0.7),
        AttrTypeDict.ResistIce(-0.35),
        AttrTypeDict.Gravity(0.9),
        AttrTypeDict.Hammer(0.25),
        AttrTypeDict.Twin(0.15)
    ];
    buffs: Buff[] = [
        new Buff(AttrTypeId.ResistGravity, 0.7),
        new Buff(AttrTypeId.ResistVolt, -0.7),
        new Buff(AttrTypeId.ResistIce, -0.35),
        new Buff(AttrTypeId.Gravity, 0.9),
        new Buff(AttrTypeId.Hammer, 0.25),
        new Buff(AttrTypeId.Twin, 0.15)
    ];
    weaponShots: Gear[] = ActressGears.Yamada.long;
    weaponCloses: Gear[] = ActressGears.Yamada.short;
    equipmentTops: Gear[] = ActressGears.Yamada.top;
    equipmentBottoms: Gear[] = ActressGears.Yamada.bottom;
}

export const ActressNames: string[] = [
    'AgatsumaKaede',
    'HimukaiRin',
    'TakanashiRei',
    'KaneshiyaSitara',
    'HirasakaYotsuyu',
    'MomoshinaFumika',
    'VirginiaGlynnberets',
    'FujinoYayoi',
    'AikawaAika',
    'IchijoAyaka',
    'YotsuyaYumi',
    'NikotamaMai',
    'KoashiMutsumi',
    'YamanoKaoruko',
    'YorozubaMeika',
    'ShimoochiaiToka',
    'YorishiroEri',
    'NiiyaSerina',
    'FumishimaAsuka',
    'NikitohKanade',
    'SutegoroShiina',
    'KondohChieri',
    'MuraoMira',
    'KimikageYui',
    'JingujiMari',
    'OchanomizuMirie',
    'KaeruzakaRaiya',
    'UsamotoAnna',
    'NinaKalinina',
    'MikurazaAzuki',
    'KotomuraAkane',
    'KotomuraAmane',
    'MiaVoisin',
    'ChishimaMiyuki',
    'ShantiRana',
    'OhzekiKoyui',
    'WangHonghua',
    'TenkoSora',
    'ShirleyOakley',
    'ShinonomeChie',
    'RitaHenschel',
    'KagomeMisaki',
    'KanagataSugumi',
    'NikaidohTsukasa',
    'SugaItsuri',
    'AraimeYasuri',
    'FatimaBetrorum',
    'KuroganeYuto',
    'ItokuraNeo',
    'Gourai',
    'Stylet',
    'Baselard',
    'SolRaptor',
    'MiyafujiYoshika',
    'LynetteBishop',
    'GertrudBarkhorn',
    'EricaHartmann',
    'Hresvelgr',
    'HoshitsukiMiki',
    'TokiwaKurumi',
    'WatagiMichelle',
    'Sadone',
    'KougamiKanon',
    'KuniedaShiho',
    'SylphyII',
    'Kasumi',
    'MarieRose',
    'Aya',
    'Yuki',
    'Yamada'
];

export const CharacterModels = {
    AgatsumaKaede01: new AgatsumaKaede01(),
    AgatsumaKaede02: new AgatsumaKaede02(),
    AgatsumaKaede04: new AgatsumaKaede04(),
    AgatsumaKaede05: new AgatsumaKaede05(),
    AgatsumaKaede70: new AgatsumaKaede70(),
    AgatsumaKaede71: new AgatsumaKaede71(),
    HimukaiRin01: new HimukaiRin01(),
    HimukaiRin02: new HimukaiRin02(),
    HimukaiRin04: new HimukaiRin04(),
    HimukaiRin05: new HimukaiRin05(),
    HimukaiRin70: new HimukaiRin70(),
    HimukaiRin71: new HimukaiRin71(),
    TakanashiRei01: new TakanashiRei01(),
    TakanashiRei02: new TakanashiRei02(),
    TakanashiRei04: new TakanashiRei04(),
    TakanashiRei05: new TakanashiRei05(),
    TakanashiRei70: new TakanashiRei70(),
    TakanashiRei71: new TakanashiRei71(),
    KaneshiyaSitara01: new KaneshiyaSitara01(),
    KaneshiyaSitara02: new KaneshiyaSitara02(),
    KaneshiyaSitara04: new KaneshiyaSitara04(),
    KaneshiyaSitara05: new KaneshiyaSitara05(),
    KaneshiyaSitara70: new KaneshiyaSitara70(),
    HirasakaYotsuyu01: new HirasakaYotsuyu01(),
    HirasakaYotsuyu02: new HirasakaYotsuyu02(),
    HirasakaYotsuyu04: new HirasakaYotsuyu04(),
    HirasakaYotsuyu05: new HirasakaYotsuyu05(),
    HirasakaYotsuyu70: new HirasakaYotsuyu70(),
    MomoshinaFumika01: new MomoshinaFumika01(),
    MomoshinaFumika02: new MomoshinaFumika02(),
    MomoshinaFumika04: new MomoshinaFumika04(),
    MomoshinaFumika05: new MomoshinaFumika05(),
    MomoshinaFumika70: new MomoshinaFumika70(),
    VirginiaGlynnberets01: new VirginiaGlynnberets01(),
    VirginiaGlynnberets02: new VirginiaGlynnberets02(),
    VirginiaGlynnberets04: new VirginiaGlynnberets04(),
    VirginiaGlynnberets05: new VirginiaGlynnberets05(),
    VirginiaGlynnberets70: new VirginiaGlynnberets70(),
    FujinoYayoi01: new FujinoYayoi01(),
    FujinoYayoi02: new FujinoYayoi02(),
    FujinoYayoi04: new FujinoYayoi04(),
    FujinoYayoi05: new FujinoYayoi05(),
    FujinoYayoi70: new FujinoYayoi70(),
    AikawaAika01: new AikawaAika01(),
    AikawaAika02: new AikawaAika02(),
    AikawaAika04: new AikawaAika04(),
    AikawaAika05: new AikawaAika05(),
    AikawaAika70: new AikawaAika70(),
    IchijoAyaka01: new IchijoAyaka01(),
    IchijoAyaka02: new IchijoAyaka02(),
    IchijoAyaka04: new IchijoAyaka04(),
    IchijoAyaka05: new IchijoAyaka05(),
    IchijoAyaka70: new IchijoAyaka70(),
    YotsuyaYumi01: new YotsuyaYumi01(),
    YotsuyaYumi02: new YotsuyaYumi02(),
    YotsuyaYumi04: new YotsuyaYumi04(),
    YotsuyaYumi05: new YotsuyaYumi05(),
    YotsuyaYumi70: new YotsuyaYumi70(),
    NikotamaMai01: new NikotamaMai01(),
    NikotamaMai02: new NikotamaMai02(),
    NikotamaMai04: new NikotamaMai04(),
    NikotamaMai05: new NikotamaMai05(),
    NikotamaMai70: new NikotamaMai70(),
    KoashiMutsumi01: new KoashiMutsumi01(),
    KoashiMutsumi02: new KoashiMutsumi02(),
    KoashiMutsumi04: new KoashiMutsumi04(),
    KoashiMutsumi05: new KoashiMutsumi05(),
    KoashiMutsumi70: new KoashiMutsumi70(),
    YamanoKaoruko01: new YamanoKaoruko01(),
    YamanoKaoruko02: new YamanoKaoruko02(),
    YamanoKaoruko04: new YamanoKaoruko04(),
    YamanoKaoruko05: new YamanoKaoruko05(),
    YamanoKaoruko70: new YamanoKaoruko70(),
    YorozubaMeika01: new YorozubaMeika01(),
    YorozubaMeika02: new YorozubaMeika02(),
    YorozubaMeika04: new YorozubaMeika04(),
    YorozubaMeika05: new YorozubaMeika05(),
    YorozubaMeika70: new YorozubaMeika70(),
    ShimoochiaiToka01: new ShimoochiaiToka01(),
    ShimoochiaiToka02: new ShimoochiaiToka02(),
    ShimoochiaiToka04: new ShimoochiaiToka04(),
    ShimoochiaiToka05: new ShimoochiaiToka05(),
    ShimoochiaiToka70: new ShimoochiaiToka70(),
    YorishiroEri01: new YorishiroEri01(),
    YorishiroEri02: new YorishiroEri02(),
    YorishiroEri04: new YorishiroEri04(),
    YorishiroEri05: new YorishiroEri05(),
    YorishiroEri70: new YorishiroEri70(),
    NiiyaSerina01: new NiiyaSerina01(),
    NiiyaSerina02: new NiiyaSerina02(),
    NiiyaSerina04: new NiiyaSerina04(),
    NiiyaSerina05: new NiiyaSerina05(),
    NiiyaSerina70: new NiiyaSerina70(),
    FumishimaAsuka01: new FumishimaAsuka01(),
    FumishimaAsuka02: new FumishimaAsuka02(),
    FumishimaAsuka04: new FumishimaAsuka04(),
    FumishimaAsuka05: new FumishimaAsuka05(),
    FumishimaAsuka70: new FumishimaAsuka70(),
    NikitohKanade01: new NikitohKanade01(),
    NikitohKanade02: new NikitohKanade02(),
    NikitohKanade04: new NikitohKanade04(),
    NikitohKanade05: new NikitohKanade05(),
    NikitohKanade70: new NikitohKanade70(),
    SutegoroShiina01: new SutegoroShiina01(),
    SutegoroShiina02: new SutegoroShiina02(),
    SutegoroShiina04: new SutegoroShiina04(),
    SutegoroShiina05: new SutegoroShiina05(),
    SutegoroShiina70: new SutegoroShiina70(),
    KondohChieri01: new KondohChieri01(),
    KondohChieri02: new KondohChieri02(),
    KondohChieri04: new KondohChieri04(),
    KondohChieri05: new KondohChieri05(),
    KondohChieri70: new KondohChieri70(),
    MuraoMira01: new MuraoMira01(),
    MuraoMira02: new MuraoMira02(),
    MuraoMira04: new MuraoMira04(),
    MuraoMira05: new MuraoMira05(),
    KimikageYui01: new KimikageYui01(),
    KimikageYui02: new KimikageYui02(),
    KimikageYui04: new KimikageYui04(),
    KimikageYui05: new KimikageYui05(),
    JingujiMari01: new JingujiMari01(),
    JingujiMari02: new JingujiMari02(),
    JingujiMari04: new JingujiMari04(),
    JingujiMari05: new JingujiMari05(),
    JingujiMari70: new JingujiMari70(),
    OchanomizuMirie01: new OchanomizuMirie01(),
    OchanomizuMirie02: new OchanomizuMirie02(),
    OchanomizuMirie04: new OchanomizuMirie04(),
    OchanomizuMirie05: new OchanomizuMirie05(),
    KaeruzakaRaiya01: new KaeruzakaRaiya01(),
    KaeruzakaRaiya02: new KaeruzakaRaiya02(),
    KaeruzakaRaiya04: new KaeruzakaRaiya04(),
    KaeruzakaRaiya05: new KaeruzakaRaiya05(),
    KaeruzakaRaiya70: new KaeruzakaRaiya70(),
    UsamotoAnna01: new UsamotoAnna01(),
    UsamotoAnna02: new UsamotoAnna02(),
    UsamotoAnna04: new UsamotoAnna04(),
    UsamotoAnna05: new UsamotoAnna05(),
    UsamotoAnna70: new UsamotoAnna70(),
    NinaKalinina01: new NinaKalinina01(),
    NinaKalinina02: new NinaKalinina02(),
    NinaKalinina04: new NinaKalinina04(),
    NinaKalinina05: new NinaKalinina05(),
    MikurazaAzuki01: new MikurazaAzuki01(),
    MikurazaAzuki02: new MikurazaAzuki02(),
    MikurazaAzuki04: new MikurazaAzuki04(),
    MikurazaAzuki05: new MikurazaAzuki05(),
    KotomuraAkane01: new KotomuraAkane01(),
    KotomuraAkane02: new KotomuraAkane02(),
    KotomuraAkane04: new KotomuraAkane04(),
    KotomuraAkane05: new KotomuraAkane05(),
    KotomuraAmane01: new KotomuraAmane01(),
    KotomuraAmane02: new KotomuraAmane02(),
    KotomuraAmane04: new KotomuraAmane04(),
    KotomuraAmane05: new KotomuraAmane05(),
    MiaVoisin01: new MiaVoisin01(),
    MiaVoisin02: new MiaVoisin02(),
    MiaVoisin04: new MiaVoisin04(),
    MiaVoisin05: new MiaVoisin05(),
    ChishimaMiyuki01: new ChishimaMiyuki01(),
    ChishimaMiyuki02: new ChishimaMiyuki02(),
    ChishimaMiyuki04: new ChishimaMiyuki04(),
    ChishimaMiyuki05: new ChishimaMiyuki05(),
    ShantiRana01: new ShantiRana01(),
    ShantiRana02: new ShantiRana02(),
    ShantiRana04: new ShantiRana04(),
    ShantiRana05: new ShantiRana05(),
    ShantiRana70: new ShantiRana70(),
    OhzekiKoyui01: new OhzekiKoyui01(),
    OhzekiKoyui02: new OhzekiKoyui02(),
    OhzekiKoyui04: new OhzekiKoyui04(),
    OhzekiKoyui05: new OhzekiKoyui05(),
    OhzekiKoyui70: new OhzekiKoyui70(),
    WangHonghua01: new WangHonghua01(),
    WangHonghua02: new WangHonghua02(),
    WangHonghua04: new WangHonghua04(),
    WangHonghua05: new WangHonghua05(),
    WangHonghua70: new WangHonghua70(),
    TenkoSora01: new TenkoSora01(),
    TenkoSora02: new TenkoSora02(),
    TenkoSora04: new TenkoSora04(),
    TenkoSora05: new TenkoSora05(),
    ShirleyOakley01: new ShirleyOakley01(),
    ShirleyOakley02: new ShirleyOakley02(),
    ShirleyOakley04: new ShirleyOakley04(),
    ShirleyOakley05: new ShirleyOakley05(),
    ShinonomeChie01: new ShinonomeChie01(),
    ShinonomeChie02: new ShinonomeChie02(),
    ShinonomeChie04: new ShinonomeChie04(),
    ShinonomeChie05: new ShinonomeChie05(),
    RitaHenschel01: new RitaHenschel01(),
    RitaHenschel02: new RitaHenschel02(),
    RitaHenschel04: new RitaHenschel04(),
    RitaHenschel05: new RitaHenschel05(),
    KagomeMisaki01: new KagomeMisaki01(),
    KagomeMisaki02: new KagomeMisaki02(),
    KagomeMisaki04: new KagomeMisaki04(),
    KagomeMisaki05: new KagomeMisaki05(),
    KanagataSugumi01: new KanagataSugumi01(),
    KanagataSugumi02: new KanagataSugumi02(),
    KanagataSugumi04: new KanagataSugumi04(),
    KanagataSugumi05: new KanagataSugumi05(),
    NikaidohTsukasa01: new NikaidohTsukasa01(),
    NikaidohTsukasa02: new NikaidohTsukasa02(),
    NikaidohTsukasa04: new NikaidohTsukasa04(),
    NikaidohTsukasa05: new NikaidohTsukasa05(),
    SugaItsuri01: new SugaItsuri01(),
    SugaItsuri02: new SugaItsuri02(),
    SugaItsuri04: new SugaItsuri04(),
    SugaItsuri05: new SugaItsuri05(),
    AraimeYasuri01: new AraimeYasuri01(),
    AraimeYasuri02: new AraimeYasuri02(),
    AraimeYasuri04: new AraimeYasuri04(),
    AraimeYasuri05: new AraimeYasuri05(),
    FatimaBetrorum01: new FatimaBetrorum01(),
    FatimaBetrorum02: new FatimaBetrorum02(),
    FatimaBetrorum04: new FatimaBetrorum04(),
    FatimaBetrorum05: new FatimaBetrorum05(),
    KuroganeYuto01: new KuroganeYuto01(),
    KuroganeYuto02: new KuroganeYuto02(),
    KuroganeYuto04: new KuroganeYuto04(),
    KuroganeYuto05: new KuroganeYuto05(),
    ItokuraNeo01: new ItokuraNeo01(),
    ItokuraNeo02: new ItokuraNeo02(),
    ItokuraNeo04: new ItokuraNeo04(),
    ItokuraNeo05: new ItokuraNeo05(),
    Gourai04: new Gourai04(),
    Gourai05: new Gourai05(),
    Stylet04: new Stylet04(),
    Stylet05: new Stylet05(),
    Baselard04: new Baselard04(),
    Baselard05: new Baselard05(),
    SolRaptor04: new SolRaptor04(),
    SolRaptor05: new SolRaptor05(),
    SolRaptor70: new SolRaptor70(),
    MiyafujiYoshika04: new MiyafujiYoshika04(),
    MiyafujiYoshika05: new MiyafujiYoshika05(),
    LynetteBishop04: new LynetteBishop04(),
    LynetteBishop05: new LynetteBishop05(),
    GertrudBarkhorn04: new GertrudBarkhorn04(),
    GertrudBarkhorn05: new GertrudBarkhorn05(),
    EricaHartmann04: new EricaHartmann04(),
    EricaHartmann05: new EricaHartmann05(),
    Hresvelgr04: new Hresvelgr04(),
    Hresvelgr05: new Hresvelgr05(),
    HoshitsukiMiki04: new HoshitsukiMiki04(),
    HoshitsukiMiki05: new HoshitsukiMiki05(),
    TokiwaKurumi04: new TokiwaKurumi04(),
    TokiwaKurumi05: new TokiwaKurumi05(),
    WatagiMichelle04: new WatagiMichelle04(),
    WatagiMichelle05: new WatagiMichelle05(),
    Sadone04: new Sadone04(),
    Sadone05: new Sadone05(),
    KougamiKanon04: new KougamiKanon04(),
    KougamiKanon05: new KougamiKanon05(),
    KuniedaShiho04: new KuniedaShiho04(),
    KuniedaShiho05: new KuniedaShiho05(),
    SylphyII04: new SylphyII04(),
    SylphyII05: new SylphyII05(),
    SylphyII70: new SylphyII70(),
    Kasumi04: new Kasumi04(),
    Kasumi05: new Kasumi05(),
    MarieRose04: new MarieRose04(),
    MarieRose05: new MarieRose05(),
    Aya04: new Aya04(),
    Aya05: new Aya05(),
    Yuki04: new Yuki04(),
    Yuki05: new Yuki05(),
    Yamada04: new Yamada04(),
    Yamada05: new Yamada05()
};
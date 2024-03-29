import { AttrTypeId, AttrTypeIdAttrs, AttrTypeIdCloses, AttrTypeIdShots } from './../model/attr-type';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AttrTypeName, AttrTypeIdList, getTypeColor } from '../model/attr-type';
// import { AttrTypeId } from '../model/attr-type-id.enum';
import { Buff } from '../model/buff';
import { Character, attrTypeEnigmaStatus } from '../model/character';
import { CharacterModels } from '../model/character_models';
import { Unit } from '../model/unit';
import { Gear } from '../model/gear';
import { AppService } from '../app.service';

@Component({
    selector: 'app-aika-calc',
    templateUrl: './aika-calc.component.html',
    styleUrls: ['./aika-calc.component.scss']
})
export class AikaCalcComponent implements OnInit {
    public attrTypeList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeGroupList: { name: string, list: { id: AttrTypeId; name: string }[] }[] = [];
    public attrTypeAttrList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeGearShotList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeGearCloseList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeShotAmmoTypeList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeCloseHitTypeList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeSpRangeTypeList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeSpHitTypeList: { id: AttrTypeId; name: string }[] = [];

    public characterTemplates: Character[] = [];
    public selectedCharacterTemplateIndex: number;
    public selectedCharacterTemplate: Character;
    public savedataJson: string = '';
    public character: Character;
    public hideChrRawVal: boolean = true;

    characterDict: { [key: string]: Character } = {};

    copyedBuff: Buff;
    copyedBuffString: string = '';

    getTypeColor = getTypeColor;

    help = {
        enigma: `角色技能樹的加點
每個角色的提昇量都不一樣，參照下面這表：
\t\t射擊\t\t近戰
\t\tATK\t屬性\tATK\t屬性
放出特化(96%)    0\t50\t 0\t50
特質放出(90%)   15\t45\t15\t45
変質放出(86%)   25\t40\t25\t40
出力変性(56%)   45\t35\t45\t35
出力特性(50%)   55\t30\t55\t30`,
        charabuff: `角色自身被動`,
        gearbuff: `裝備自帶被動，或是插件效果`,
        tune: `AN裝備詞條效果，只會作用在當前裝備上`,
        mastermax: `熟練等級到MAX(30)之後才會啟用`,
        masterlevel: `熟練等級MAX
HP+725
DEF+200
射擊/近戰+100`
    }
    loadingSettingError: boolean = false;

    constructor(
        public service: AppService
    ) { }

    ngOnInit(): void {
        this.attrTypeGroupList = [
            {
                name: '種類1', list: [
                    this.idToAttrType(AttrTypeId.Close),
                    this.idToAttrType(AttrTypeId.Shot),
                ]
            },
            {
                name: '種類2', list: [
                    this.idToAttrType(AttrTypeId.Impact),
                    this.idToAttrType(AttrTypeId.Slash),
                    this.idToAttrType(AttrTypeId.Physical),
                    this.idToAttrType(AttrTypeId.Energy),
                ]
            },
            {
                name: '屬性', list: [
                    this.idToAttrType(AttrTypeId.Volt),
                    this.idToAttrType(AttrTypeId.Gravity),
                    this.idToAttrType(AttrTypeId.Fire),
                    this.idToAttrType(AttrTypeId.Ice),
                ]
            },
            {
                name: '接近', list: [
                    this.idToAttrType(AttrTypeId.Sword),
                    this.idToAttrType(AttrTypeId.Hammer),
                    this.idToAttrType(AttrTypeId.Spear),
                    this.idToAttrType(AttrTypeId.Dagger),
                    this.idToAttrType(AttrTypeId.HandGun),
                ]
            },
            {
                name: '遠程', list: [
                    this.idToAttrType(AttrTypeId.Rifle),
                    this.idToAttrType(AttrTypeId.Bazooka),
                    this.idToAttrType(AttrTypeId.Twin),
                    this.idToAttrType(AttrTypeId.Sniper),
                ]
            },
            {
                name: '自身', list: [
                    this.idToAttrType(AttrTypeId.HP),
                    this.idToAttrType(AttrTypeId.DEF),
                    this.idToAttrType(AttrTypeId.ResistVolt),
                    this.idToAttrType(AttrTypeId.ResistGravity),
                    this.idToAttrType(AttrTypeId.ResistFire),
                    this.idToAttrType(AttrTypeId.ResistIce),
                    this.idToAttrType(AttrTypeId.SPD),
                ]
            },
        ]
        this.attrTypeList = AttrTypeIdList.map((atid) => this.idToAttrType(atid));
        this.attrTypeAttrList = [
            AttrTypeId.Volt,
            AttrTypeId.Gravity,
            AttrTypeId.Fire,
            AttrTypeId.Ice,
        ].map((atid) => this.idToAttrType(atid));
        this.attrTypeGearShotList = [
            AttrTypeId.Rifle,
            AttrTypeId.Bazooka,
            AttrTypeId.Twin,
            AttrTypeId.Sniper,
        ].map((atid) => this.idToAttrType(atid));
        this.attrTypeGearCloseList = [
            AttrTypeId.Sword,
            AttrTypeId.Hammer,
            AttrTypeId.Spear,
            AttrTypeId.Dagger,
            AttrTypeId.HandGun,
        ].map((atid) => this.idToAttrType(atid));
        this.attrTypeShotAmmoTypeList = [
            AttrTypeId.Physical,
            AttrTypeId.Energy,
        ].map((atid) => this.idToAttrType(atid));
        this.attrTypeCloseHitTypeList = [
            AttrTypeId.Impact,
            AttrTypeId.Slash,
        ].map((atid) => this.idToAttrType(atid));

        this.attrTypeSpRangeTypeList = [
            AttrTypeId.None,
            AttrTypeId.Shot,
            AttrTypeId.Close,
        ].map((atid) => this.idToAttrType(atid));
        this.attrTypeSpHitTypeList = [
            AttrTypeId.Physical,
            AttrTypeId.Energy,
            AttrTypeId.Impact,
            AttrTypeId.Slash,
        ].map((atid) => this.idToAttrType(atid));

        const characterModelKeys = Object.keys(CharacterModels);
        characterModelKeys.forEach(key => {
            const chara = CharacterModels[key];
            this.characterDict[chara.name] = chara;
        });

        this.characterTemplates = characterModelKeys
            .filter((k) => !k.match(/71$/))
            .map((k) => CharacterModels[k]);

        characterModelKeys.forEach(key => {
            const chara = CharacterModels[key];
            //
            if (chara.name != '高幡のどか ★1') {
                const charaAttrOutputTypeBuff = chara.buffs.find(b => [
                    AttrTypeId.Volt,
                    AttrTypeId.Gravity,
                    AttrTypeId.Fire,
                    AttrTypeId.Ice
                ].indexOf(b.type) > -1);
                if (charaAttrOutputTypeBuff) {
                    const outputValueString = charaAttrOutputTypeBuff.value + '';
                    const upStatus = attrTypeEnigmaStatus[outputValueString];
                    if (upStatus) {
                        chara.atkShotEnigma = upStatus.atkShot;
                        chara.attrShotEnigma = upStatus.attrShot;
                        chara.atkCloseEnigma = upStatus.atkClose;
                        chara.attrCloseEnigma = upStatus.attrClose;
                        // chara.atkShotEnigmaCustom = upStatus.atkShot;
                        // chara.attrShotEnigmaCustom = upStatus.attrShot;
                        // chara.atkCloseEnigmaCustom = upStatus.atkClose;
                        // chara.attrCloseEnigmaCustom = upStatus.attrClose;
                    }
                }
            }

            //
            if (chara.weaponCloses.length == 0
                || chara.weaponShots.length == 0
            ) {
                const charaAttrType = chara.buffs.find(b => AttrTypeIdAttrs.indexOf(b.type) > -1);
                const closeType = chara.buffs.find(b => AttrTypeIdCloses.indexOf(b.type) > -1);
                const shotType = chara.buffs.find(b => AttrTypeIdShots.indexOf(b.type) > -1);

                // const goodWeaponType = closeType.value > shotType.value ? closeType.type : shotType.type;
                // const subGoodWeaponType = closeType.value < shotType.value ? closeType.type : shotType.type;

                const closeAmmoType = [AttrTypeId.Hammer, AttrTypeId.HandGun].indexOf(closeType.type) > -1
                    ? AttrTypeId.Impact : AttrTypeId.Slash;
                const shotAmmoType = shotType.type == AttrTypeId.Rifle ? AttrTypeId.Energy : AttrTypeId.Physical;

                if (chara.weaponCloses.length == 0) {
                    const defaultGear = new Gear({
                        unitType: closeType.type,
                        level: 1,
                        levelMin: 1,
                        levelMax: 1,
                        gradeUp: 0,
                        gradeUpLimit: 0,
                        atk: 70,
                        atkMin: 70,
                        atkMax: 70,
                        atkTypeId: AttrTypeId.Close,
                        atkAmmoTypeId: closeAmmoType,
                        attr: 30,
                        attrMin: 30,
                        attrMax: 30,
                        attrTypeId: charaAttrType.type
                    });
                    chara.weaponCloses.push(defaultGear);
                }
                if (chara.weaponShots.length == 0) {
                    const defaultGear = new Gear({
                        unitType: shotType.type,
                        level: 1,
                        levelMin: 1,
                        levelMax: 1,
                        gradeUp: 0,
                        gradeUpLimit: 0,
                        atk: 70,
                        atkMin: 70,
                        atkMax: 70,
                        atkTypeId: AttrTypeId.Close,
                        atkAmmoTypeId: shotAmmoType,
                        attr: 30,
                        attrMin: 30,
                        attrMax: 30,
                        attrTypeId: charaAttrType.type
                    });
                    chara.weaponShots.push(defaultGear);
                }
            }
            if (chara.equipmentTops.length == 0) {
                const defaultGear = new Gear({
                    unitType: AttrTypeId.EquipmentTop,
                    level: 1,
                    levelMin: 1,
                    levelMax: 1,
                    gradeUp: 0,
                    gradeUpLimit: 0,
                    hp: 216,
                    hpMin: 216,
                    hpMax: 216,
                    def: 60,
                    defMin: 60,
                    defMax: 60,
                    buffs: []
                });
                chara.equipmentTops.push(defaultGear);
            }
            if (chara.equipmentBottoms.length == 0) {
                const defaultGear = new Gear({
                    unitType: AttrTypeId.EquipmentBottom,
                    level: 1,
                    levelMin: 1,
                    levelMax: 1,
                    gradeUp: 0,
                    gradeUpLimit: 0,
                    hp: 144,
                    hpMin: 144,
                    hpMax: 144,
                    def: 40,
                    defMin: 40,
                    defMax: 40,
                    buffs: []
                });
                chara.equipmentBottoms.push(defaultGear);
            }
        });

        const isLoadSetting = this.loadCharacterSavedataFromUrl();
        if (!isLoadSetting) {

            const aika = CharacterModels.AikawaAika05;
            this.selectedCharacterTemplateIndex = this.characterTemplates.indexOf(aika);
            this.onCharacterTemplateChange();
            this.setCharacterTemplateToCharacter();

            aika.weaponShotIndex = aika.weaponShots.findIndex(g => g.base.name == 'フラワーポットMk3');
            this.setGear(aika.weaponShot, aika.weaponShots, aika.weaponShotIndex.toString());
            aika.weaponCloseIndex = aika.weaponCloses.findIndex(g => g.base.name == 'ポティスティリ');
            this.setGear(aika.weaponClose, aika.weaponCloses, aika.weaponCloseIndex.toString());
            aika.equipmentTopIndex = aika.equipmentTops.findIndex(g => g.base.name == 'シープソングMk3/T');
            this.setGear(aika.equipmentTop, aika.equipmentTops, aika.equipmentTopIndex.toString());
            aika.equipmentBottomIndex = aika.equipmentBottoms.findIndex(g => g.base.name == 'シープソングMk3/B');
            this.setGear(aika.equipmentBottom, aika.equipmentBottoms, aika.equipmentBottomIndex.toString());

            aika.masterLevel = 30;
            // aika.attrShotEnigma = 50;
            // aika.attrCloseEnigma = 50;
            aika.weaponShot.base.gradeUp = 99;
            aika.weaponClose.base.gradeUp = 99;
            aika.equipmentTop.base.gradeUp = 99;
            aika.equipmentBottom.base.gradeUp = 99;

            this.character.updateStatus();
        }
        // console.log(this.character);


        // this.character.weaponShot.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        // this.character.weaponClose.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        // this.character.equipmentTop.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        // this.character.equipmentBottom.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        // // this.character.EquipmentBottom.buffs.push(new Buff(AttrTypeId.HP, 0.15));

        // // this.character.EquipmentTop.base.hp = 2041 + (99 * 4);
        // // this.character.EquipmentBottom.base.hp = 1361;
        // this.character.EquipmentTop.base.hp = 1808 + (99 * 4);
        // this.character.EquipmentBottom.base.hp = 1205;

        // this.character.EquipmentTop.tunes.push(new Buff(AttrTypeId.HP, 0.12));
        // this.character.EquipmentTop.tunes.push(new Buff(AttrTypeId.HP, 0.12));
        // this.character.EquipmentTop.tunes.push(new Buff(AttrTypeId.HP, 0.12));
        // this.character.EquipmentBottom.tunes.push(new Buff(AttrTypeId.HP, 0.12));
        // this.character.EquipmentBottom.tunes.push(new Buff(AttrTypeId.HP, 0.12));
        // this.character.EquipmentBottom.tunes.push(new Buff(AttrTypeId.HP, 0.12));

        // this.character.updateStatus();


    }
    public idToAttrType(atid: AttrTypeId): { id: AttrTypeId, name: string } {
        return { id: atid, name: AttrTypeName[AttrTypeId[atid]] };
    }
    public onCharacterTemplateChange(): void {
        // console.log(this.selectedCharacterTemplateIndex);
        // console.log(this.characterTemplates[this.selectedCharacterTemplateIndex]);
        const sc = this.characterTemplates[this.selectedCharacterTemplateIndex];
        if (sc) {
            this.selectedCharacterTemplate = sc;
        }
    }
    public setCharacterTemplateToCharacter(): void {
        if (this.selectedCharacterTemplate) {
            const character = this.selectedCharacterTemplate;

            this.character = character;
            this.character.updateStatus();
            // this.cdRef.detectChanges();
        }
    }
    public addBuff(refList: Buff[]): void {
        if (this.copyedBuff != null) {
            refList.push(new Buff(this.copyedBuff.type, this.copyedBuff.value));
        } else {
            if (refList.length > 0) {
                const lastBuff = refList[refList.length - 1]
                const newBuff = new Buff(lastBuff.type, lastBuff.value);
                refList.push(newBuff);
            } else {
                refList.push(new Buff(AttrTypeId.HP, 0));
            }
        }
    }
    public deleteBuff(refList: Buff[], buff: Buff): void {
        const index = refList.indexOf(buff);
        if (index > -1) {
            refList.splice(index, 1);
        }
        if (this.copyedBuff == buff) {
            this.copyedBuff = null;
            this.copyedBuffString = '';
        }
    }
    public copyBuff(buff: Buff) {
        if (this.copyedBuff == buff) {
            this.copyedBuff = null;
            this.copyedBuffString = '';
        } else {
            this.copyedBuff = buff;
            this.copyedBuffString = `${buff.attrTypeName}:${buff.valuePct}%`;
        }
    }
    setGear(gear: Gear, gears: Gear[], gearIndexValue: string): void {
        // console.log(data, gearIndexValue);
        const gearIndex = parseInt(gearIndexValue, 10);
        Unit.cloneDeep(gear, gears[gearIndex], 0);
    }



    showMsg(msg): void {
        this.service.message(msg);
    }

    autoInputEnigmaStatusUp(): void {

    }

    getSavedatas(): any[] {
        // chrName,lv,gradeUp,masterLevel,masterPlus,isCustomEnigmaStatus,atkShotEnigmaCustom,attrShotEnigmaCustom,atkCloseEnigmaCustom,attrCloseEnigmaCustom
        // ,buffCount, ...[bufftypeid,value],
        // ,shotgearName,lv,gradeUp,isCustom,attrTypeGearShot,attrTypeShotAmmoType,atk,attrTypeAttr,attr,buffCount, ...[bufftypeid,value],tuneCount, ...[tuneTypeid,value]
        // ,closegearName,lv,gradeUp,isCustom,attrTypeGearClose,attrTypeCloseHitType,atk,attrTypeAttr,attr,buffCount, ...[bufftypeid,value],tuneCount, ...[tuneTypeid,value]
        // ,topgearName,lv,gradeUp,isCustom,hp,def,buffCount, ...[bufftypeid,value],tuneCount, ...[tuneTypeid,value]
        // ,bottomgearName,lv,gradeUp,isCustom,hp,def,buffCount, ...[bufftypeid,value],tuneCount, ...[tuneTypeid,value]

        const saveDatas = [];
        saveDatas.push(
            this.character.name,
            this.character.level,
            this.character.gradeUp,
            this.character.masterLevel,
            this.character.masterPlus,
            this.character.isCustomEnigmaStatus,
            this.character.atkShotEnigmaCustom,
            this.character.attrShotEnigmaCustom,
            this.character.atkCloseEnigmaCustom,
            this.character.attrCloseEnigmaCustom,
        );
        saveDatas.push(
            this.character.buffs.length,
            ...[].concat(...this.character.buffs.map(b => [b.type, b.value])),
        );

        saveDatas.push(
            this.character.weaponShot.base.name,
            this.character.weaponShot.base.level,
            this.character.weaponShot.base.gradeUp,
            this.character.weaponShot.isCustom,
            this.character.weaponShot.base.unitType,
            this.character.weaponShot.base.atkAmmoTypeId,
            this.character.weaponShot.base.atk,
            this.character.weaponShot.base.attrTypeId,
            this.character.weaponShot.base.attr,
        );
        saveDatas.push(
            this.character.weaponShot.buffs.length,
            ...[].concat(...this.character.weaponShot.buffs.map(b => [b.type, b.value])),
            this.character.weaponShot.tunes.length,
            ...[].concat(...this.character.weaponShot.tunes.map(b => [b.type, b.value])),
        );

        saveDatas.push(
            this.character.weaponClose.base.name,
            this.character.weaponClose.base.level,
            this.character.weaponClose.base.gradeUp,
            this.character.weaponClose.isCustom,
            this.character.weaponClose.base.unitType,
            this.character.weaponClose.base.atkAmmoTypeId,
            this.character.weaponClose.base.atk,
            this.character.weaponClose.base.attrTypeId,
            this.character.weaponClose.base.attr,
        );
        saveDatas.push(
            this.character.weaponClose.buffs.length,
            ...[].concat(...this.character.weaponClose.buffs.map(b => [b.type, b.value])),
            this.character.weaponClose.tunes.length,
            ...[].concat(...this.character.weaponClose.tunes.map(b => [b.type, b.value])),
        );

        saveDatas.push(
            this.character.equipmentTop.base.name,
            this.character.equipmentTop.base.level,
            this.character.equipmentTop.base.gradeUp,
            this.character.equipmentTop.isCustom,
            this.character.equipmentTop.base.hp,
            this.character.equipmentTop.base.def,
        );
        saveDatas.push(
            this.character.equipmentTop.buffs.length,
            ...[].concat(...this.character.equipmentTop.buffs.map(b => [b.type, b.value])),
            this.character.equipmentTop.tunes.length,
            ...[].concat(...this.character.equipmentTop.tunes.map(b => [b.type, b.value])),
        );

        saveDatas.push(
            this.character.equipmentBottom.base.name,
            this.character.equipmentBottom.base.level,
            this.character.equipmentBottom.base.gradeUp,
            this.character.equipmentBottom.isCustom,
            this.character.equipmentBottom.base.hp,
            this.character.equipmentBottom.base.def,
        );
        saveDatas.push(
            this.character.equipmentBottom.buffs.length,
            ...[].concat(...this.character.equipmentBottom.buffs.map(b => [b.type, b.value])),
            this.character.equipmentBottom.tunes.length,
            ...[].concat(...this.character.equipmentBottom.tunes.map(b => [b.type, b.value])),
        );
        return saveDatas;
    }
    saveCharacterSavedata(): void {
        const saveDatas = this.getSavedatas();
        console.log(saveDatas);
        const saveDataString = encodeURIComponent(saveDatas.join(','));
        console.log(saveDataString);

        history.replaceState(null, null, `?s=${saveDataString}`);
        this.loadingSettingError = false;
    }

    loadCharacterSavedataFromUrl(): boolean {
        const url = new URL(location.href);
        if(!url.searchParams.has('s')) {
            return false;
        }
        const saveString = decodeURIComponent(location.search.split('s=')[1]);
        const saveDatas = saveString.split(',');
        console.log(saveString, saveDatas);
        if (!saveString || saveString == 'undefined' || saveDatas.length < 2) {
            return false;
        }

        let success = false;

        try {
            let saveDataIndex = 0;
            const characterName = saveDatas[saveDataIndex++];
            const characterTemplateIndex = this.characterTemplates.findIndex(c => c.name == characterName);
            this.selectedCharacterTemplateIndex = characterTemplateIndex;
            this.onCharacterTemplateChange();
            this.setCharacterTemplateToCharacter();

            this.character.level = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.gradeUp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.masterLevel = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.masterPlus = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.isCustomEnigmaStatus = saveDatas[saveDataIndex++] == 'true';
            this.character.atkShotEnigmaCustom = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.attrShotEnigmaCustom = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.atkCloseEnigmaCustom = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.attrCloseEnigmaCustom = parseInt(saveDatas[saveDataIndex++], 10);

            this.character.buffs = [];
            const buffCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < buffCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.buffs.push(new Buff(type, value));
            }

            const shotGearName = saveDatas[saveDataIndex++];
            this.character.weaponShotIndex = this.character.weaponShots.findIndex(g => g.base.name == shotGearName);
            this.setGear(this.character.weaponShot, this.character.weaponShots, this.character.weaponShotIndex.toString());
            this.character.weaponShot.base.level = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.base.gradeUp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.isCustom = saveDatas[saveDataIndex++] == 'true';
            this.character.weaponShot.base.unitType = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.base.atkAmmoTypeId = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.base.atk = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.base.attrTypeId = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.base.attr = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponShot.buffs = [];
            const shotBuffCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < shotBuffCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.weaponShot.buffs.push(new Buff(type, value));
            }
            this.character.weaponShot.tunes = [];
            const shotTuneCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < shotTuneCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.weaponShot.tunes.push(new Buff(type, value));
            }

            const closeGearName = saveDatas[saveDataIndex++];
            this.character.weaponCloseIndex = this.character.weaponCloses.findIndex(g => g.base.name == closeGearName);
            this.setGear(this.character.weaponClose, this.character.weaponCloses, this.character.weaponCloseIndex.toString());
            this.character.weaponClose.base.level = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.base.gradeUp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.isCustom = saveDatas[saveDataIndex++] == 'true';
            this.character.weaponClose.base.unitType = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.base.atkAmmoTypeId = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.base.atk = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.base.attrTypeId = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.base.attr = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.weaponClose.buffs = [];
            const closeBuffCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < closeBuffCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.weaponClose.buffs.push(new Buff(type, value));
            }
            this.character.weaponClose.tunes = [];
            const closeTuneCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < closeTuneCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.weaponClose.tunes.push(new Buff(type, value));
            }

            const topGearName = saveDatas[saveDataIndex++];
            this.character.equipmentTopIndex = this.character.equipmentTops.findIndex(g => g.base.name == topGearName);
            this.setGear(this.character.equipmentTop, this.character.equipmentTops, this.character.equipmentTopIndex.toString());
            this.character.equipmentTop.base.level = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentTop.base.gradeUp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentTop.isCustom = saveDatas[saveDataIndex++] == 'true';
            this.character.equipmentTop.base.hp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentTop.base.def = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentTop.buffs = [];
            const topBuffCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < topBuffCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.equipmentTop.buffs.push(new Buff(type, value));
            }
            this.character.equipmentTop.tunes = [];
            const topTuneCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < topTuneCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.equipmentTop.tunes.push(new Buff(type, value));
            }

            const bottomGearName = saveDatas[saveDataIndex++];
            this.character.equipmentBottomIndex = this.character.equipmentBottoms.findIndex(g => g.base.name == bottomGearName);
            this.setGear(this.character.equipmentBottom, this.character.equipmentBottoms, this.character.equipmentBottomIndex.toString());
            this.character.equipmentBottom.base.level = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentBottom.base.gradeUp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentBottom.isCustom = saveDatas[saveDataIndex++] == 'true';
            this.character.equipmentBottom.base.hp = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentBottom.base.def = parseInt(saveDatas[saveDataIndex++], 10);
            this.character.equipmentBottom.buffs = [];
            const bottomBuffCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < bottomBuffCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.equipmentBottom.buffs.push(new Buff(type, value));
            }
            this.character.equipmentBottom.tunes = [];
            const bottomTuneCount = parseInt(saveDatas[saveDataIndex++], 10);
            for (let i = 0; i < bottomTuneCount; i++) {
                const type = parseInt(saveDatas[saveDataIndex++], 10);
                const value = parseFloat(saveDatas[saveDataIndex++]);
                this.character.equipmentBottom.tunes.push(new Buff(type, value));
            }

            this.character.updateStatus();

            success = true;
        } catch (error) {
            this.loadingSettingError = true;
            console.error(error);
        }

        return success;
    }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AttrTypeName, AttrTypeIdList } from '../model/attr-type';
import { AttrTypeId } from '../model/attr-type-id.enum';
import { Buff } from '../model/buff';
import { Character } from '../model/character';
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
    public attrTypeAttrList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeGearShotList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeGearCloseList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeShotAmmoTypeList: { id: AttrTypeId; name: string }[] = [];
    public attrTypeCloseHitTypeList: { id: AttrTypeId; name: string }[] = [];

    public characterTemplates: Character[] = [];
    public selectedCharacterTemplateIndex: number;
    public selectedCharacterTemplate: Character;
    public savedataJson: string = '';
    public character: Character;


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
    }

    constructor(
        public service: AppService
    ) { }

    ngOnInit(): void {
        // const idToAttrType = (atid: AttrTypeId) => ({ id: atid, name: AttrTypeName[AttrTypeId[atid]] });
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
        this.characterTemplates = Object.keys(CharacterModels)
            .filter((k) => !k.match(/71$/))
            .map((k) => CharacterModels[k]);

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
        aika.attrShotEnigma = 50;
        aika.attrCloseEnigma = 50;
        aika.weaponShot.base.gradeUp = 99;
        aika.weaponClose.base.gradeUp = 99;
        aika.equipmentTop.base.gradeUp = 99;
        aika.equipmentBottom.base.gradeUp = 99;

        this.character.updateStatus();
        console.log(this.character);


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
        const newBuff = new Buff(AttrTypeId.HP, 0);
        refList.push(newBuff);
    }
    public deleteBuff(refList: Buff[], buff: Buff): void {
        const index = refList.indexOf(buff);
        if (index > -1) {
            refList.splice(index, 1);
        }
    }
    setGear(gear: Gear, gears: Gear[], gearIndexValue: string): void {
        // console.log(data, gearIndexValue);
        const gearIndex = parseInt(gearIndexValue, 10);
        Unit.cloneDeep(gear, gears[gearIndex], 0);
    }
}

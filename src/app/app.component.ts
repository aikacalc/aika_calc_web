import { Component, OnInit } from '@angular/core';
import { AttrTypeIdList, AttrTypeName } from './model/attr-type';
import { AttrTypeId } from './model/attr-type-id.enum';
import { Buff } from './model/buff';
import { Character } from './model/character';
import { CharacterModels } from './model/character_models';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

    constructor() { }

    public ngOnInit(): void {
        const idToAttrType = (atid: AttrTypeId) => ({ id: atid, name: AttrTypeName[AttrTypeId[atid]] });
        this.attrTypeList = AttrTypeIdList.map((atid) => idToAttrType(atid));
        this.attrTypeAttrList = [
            AttrTypeId.Volt,
            AttrTypeId.Gravity,
            AttrTypeId.Fire,
            AttrTypeId.Ice,
        ].map((atid) => idToAttrType(atid));
        this.attrTypeGearShotList = [
            AttrTypeId.Rifle,
            AttrTypeId.Bazooka,
            AttrTypeId.Twin,
            AttrTypeId.Sniper,
        ].map((atid) => idToAttrType(atid));
        this.attrTypeGearCloseList = [
            AttrTypeId.Sword,
            AttrTypeId.Hammer,
            AttrTypeId.Spear,
            AttrTypeId.Dagger,
            AttrTypeId.HandGun,
        ].map((atid) => idToAttrType(atid));
        this.attrTypeShotAmmoTypeList = [
            AttrTypeId.Physical,
            AttrTypeId.Energy,
        ].map((atid) => idToAttrType(atid));
        this.attrTypeCloseHitTypeList = [
            AttrTypeId.Impact,
            AttrTypeId.Slash,
        ].map((atid) => idToAttrType(atid));
        this.characterTemplates = Object.keys(CharacterModels)
            .filter((k) => !k.match(/71$/))
            .map((k) => CharacterModels[k]);

        this.selectedCharacterTemplateIndex = this.characterTemplates.indexOf(
            CharacterModels.AikawaAika05,
        );
        this.onCharacterTemplateChange();
        this.setCharacterTemplateToCharacter();

        this.character.weaponShot.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        this.character.weaponClose.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        this.character.equipmentTop.buffs.push(new Buff(AttrTypeId.HP, 0.07));
        this.character.equipmentBottom.buffs.push(new Buff(AttrTypeId.HP, 0.07));
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

        this.character.updateStatus();
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
            if (this.character && !confirm('覆寫現在資料?')) {
                return;
            }
            const newCharacter = Object.assign(
                new Character(),
                this.selectedCharacterTemplate,
            );
            this.character = newCharacter;
            // console.log(this.character);
            this.character.updateStatus();
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
}

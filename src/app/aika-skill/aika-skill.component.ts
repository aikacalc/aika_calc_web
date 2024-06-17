import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterModels } from '../model/character_models';


/**
 * 自動選擇指定條件的被動
 * * 觸發種類，SP100%、關卡開始、過區
 * * 效果類型，充SP、奶、加傷害
 */
@Component({
    selector: 'app-aika-skill',
    templateUrl: './aika-skill.component.html',
    styleUrls: ['./aika-skill.component.scss']
})
export class AikaSkillComponent implements OnInit {
    actresses: Character[] = [];

    ngOnInit(): void {
        const nameCharacters = {};
        Object.keys(CharacterModels).forEach(key => {
            const character = CharacterModels[key];
            const fullName = character.name;
            const name = fullName.split(' ★')[0];
            if(!nameCharacters[name]) {
                nameCharacters[name] = character;
            }
        })
    }
}

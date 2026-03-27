import { Injectable } from '@angular/core';
import { Skill } from './model/skill';
import { BackupCharacter, Character } from './model/character';
import { Gear } from './model/gear';
import { CharacterModels } from './model/character_models';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    hasNewUpdate: boolean = false;

    showMessage: boolean = false;
    messageWindowContent: string = '';

    pageEnter: { [key: string]: Function } = {};

    skillSelector: {
        show: boolean,
        skills: Skill[],
        onSelect: (skill: Skill) => void
    } = {
            show: false,
            skills: [],
            onSelect: () => { }
        };

    isInited: boolean = false;
    characters: Character[] = [];
    backupCharacters: BackupCharacter[] = [];
    // Character.cid
    ownedCharacterIds: number[] = [];
    ownedBackupCharacterIds: number[] = [];



    constructor() { }

    message(msg: string): void {
        this.showMessage = true;
        this.messageWindowContent = msg;
    }

    onPageChange(page: string): void {
        if (this.pageEnter[page]) {
            this.pageEnter[page]();
        }
    }
    init(): void {
        if (this.isInited) {
            console.warn('AppService has already been initialized.');
            return;
        }
        this.characters = [];
        this.backupCharacters = [];
        this.ownedCharacterIds = [];
        this.ownedBackupCharacterIds = [];
        this.initCharacters(Object.values(CharacterModels));
        this.isInited = true;
    }
    private initCharacters(characters: Character[]): void {
        this.characters = characters;
        this.backupCharacters = [];
    }

}

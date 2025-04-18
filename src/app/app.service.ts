import { Injectable } from '@angular/core';
import { Skill } from './model/skill';

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

    constructor() { }

    message(msg: string): void {
        this.showMessage = true;
        this.messageWindowContent = msg;
    }

    onPageChange(page: string): void {
        if(this.pageEnter[page]){
            this.pageEnter[page]();
        }
    }

}

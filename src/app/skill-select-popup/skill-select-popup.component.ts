import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Skill } from '../model/skill';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skill-select-popup',
    imports: [
        CommonModule,
    ],
    templateUrl: './skill-select-popup.component.html',
    styleUrl: './skill-select-popup.component.scss'
})
export class SkillSelectPopupComponent {

    constructor(
        public service: AppService
    ) { }

    skills: Skill[] = [];
    selectedSkill: Skill | null = null;
    lockSelect: boolean = false;

    ngOnInit() {
        this.skills = [];
        if ((this.service.skillSelector.skills?.length ?? 0) > 0) {
            this.skills = [...this.service.skillSelector.skills];
        }
        console.log('skills', this.skills);
    }
    decideSelect(): void {
        if (this.selectedSkill && this.service.skillSelector.onSelect) {
            this.service.skillSelector.onSelect(this.selectedSkill);
        }
    }
    select(skill: Skill) {
        if (this.lockSelect) { return; }
        this.selectedSkill = skill;
    }
    unSelect() {
        this.selectedSkill = null;
        this.lockSelect = true;
        setTimeout(() => {
            this.lockSelect = false;
        }, 100);
    }
    close() {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement && (clickedElement.classList.contains('skill') || clickedElement.closest('.skill'))) {
            return;
        }
        this.service.skillSelector.show = false;
    }
}

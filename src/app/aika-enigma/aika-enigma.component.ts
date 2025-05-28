import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompressionService } from '../model/compression.service';
import { AppService } from '../app.service';
import { AikaEnigmaPsvSkill, AikaEnigmaSection, AikaPsvSkillSlot, parseSkillDataJson } from '../model/skill';
import { HttpClientModule } from '@angular/common/http';
import { Actress } from '../model/actress';
import { Character } from '../model/character';
import { CharacterModels } from '../model/character_models';
import { AttrTypeBackgroundColor, AttrTypeId } from '../model/attr-type';

@Component({
    selector: 'app-aika-enigma',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        CompressionService,
    ],
    templateUrl: './aika-enigma.component.html',
    styleUrl: './aika-enigma.component.scss'
})
export class AikaEnigmaComponent implements OnInit, AfterViewInit {
    TagNameStyle = {
        '[ALL]': { name: '[ALL]', color: '#aaa', },
        '[WEAPON]': { name: '[武]', color: '#aaa', },
        '[C]': { name: '[專]', color: '#aaa', },
        '[SP]': { name: '[SP]', color: '#7f7', },
        '[HP]': { name: '[HP]', color: '#7f7', },
        '[ATK]': { name: '[ATK]', color: '#f77', },
        '[DEF]': { name: '[DEF]', color: '#77f', },
        '[SPD]': { name: '[SPD]', color: '#77f', },
    };
    @ViewChild('characterList') characterListElement: ElementRef<HTMLSelectElement> | undefined;
    @ViewChildren('characterOption') characterOptionElements: QueryList<ElementRef<HTMLOptionElement>> | undefined;
    @ViewChild('psvSkillList') psvSkillListElement: ElementRef<HTMLSelectElement> | undefined;
    @ViewChildren('psvSkillItem') psvSkillElements: QueryList<ElementRef<HTMLElement>> | undefined;

    characters: Character[] = [];
    actressFirstCharacter: { [key: number]: Character } = {};
    actressLastCharacter: { [key: number]: Character } = {};
    sections: AikaEnigmaSection[] = [];

    psvSkillDict: { [key: number]: AikaEnigmaPsvSkill } = {};
    slotDict: { [key: string]: AikaPsvSkillSlot[] } = {};
    tagIdNameDict: { [key: number]: string } = {};
    actressPsvSkills: { [key: number]: AikaEnigmaPsvSkill[] } = {};


    selectedCharacterId: string = '-1';
    selectedCharacter: Character | null = null;
    selectedCharacterSlots: AikaPsvSkillSlot[] = [];
    selectedActressPsvSkills: AikaEnigmaPsvSkill[] = [];

    selectedSlot: AikaPsvSkillSlot | null = null;
    slotSelectablePsvSkills: AikaEnigmaPsvSkill[] = [];
    slotDisablePsvSkills: { [key: number]: boolean } = {};
    slotsSelectedPsvSkills: { [key: number]: number } = {};
    selectedCharacterEffectSummary: string = '';



    selectedSection: AikaEnigmaSection | null = null;
    selectedSectionId: number = -1;
    errorMessage: string = '';
    gid: number = 1;
    inited: boolean = false;

    constructor(
        private compressionService: CompressionService,
        private appService: AppService,
    ) {
    }

    async ngOnInit(): Promise<void> {
        // console.log('AikaEnigmaComponent initialized');
        const characterModelKeys = Object.keys(CharacterModels);
        characterModelKeys.forEach(key => {
            const chara = CharacterModels[key];
            chara.id = this.gid++;
            this.characters.push(chara);
        });

        let lastAid = this.characters[0].aid;
        let prevCharacter: Character = this.characters[0];
        this.characters.forEach((character) => {
            if (lastAid != character.aid) {
                this.actressLastCharacter[prevCharacter.id] = prevCharacter;
                this.actressFirstCharacter[character.id] = character;
                lastAid = character.aid;
            }
            prevCharacter = character;
        });


        const assetPath = '/assets/enigma.bin';
        try {
            const jsonString = await this.compressionService.decompressZlibFromAsset(assetPath);
            // console.log('解壓縮成功:', this.decompressedContent.length);
            this.sections = parseSkillDataJson(jsonString);

            this.sections.forEach((section) => {
                section.area.forEach((area) => {
                    area.psvskills.forEach((psvskill) => {
                        this.psvSkillDict[psvskill.gid] = psvskill;
                        if (this.actressPsvSkills[section.aid] === undefined) {
                            this.actressPsvSkills[section.aid] = [];
                        }
                        this.actressPsvSkills[section.aid].push(psvskill);
                    });
                });

                Object.keys(section.slot).forEach((key) => {
                    const cid = Number(key);
                    const slots = section.slot[key];
                    this.slotDict[cid] = slots;

                    slots.forEach((slot) => {
                        if (this.tagIdNameDict[slot.tag] === undefined && slot.tagName) {
                            this.tagIdNameDict[slot.tag] = slot.tagName;
                        }
                        if (slot.tagName && this.TagNameStyle[slot.tagName] != null) {
                            slot.tagStyle = this.TagNameStyle[slot.tagName];
                        }
                    });
                });
            });

            Object.keys(this.psvSkillDict).forEach((key) => {
                const psvSkill = this.psvSkillDict[Number(key)];
                psvSkill.tagStyles = [];
                if (psvSkill.tags) {
                    psvSkill.tags.forEach((tag) => {
                        const tagName = this.tagIdNameDict[tag];
                        if (tagName && this.TagNameStyle[tagName]) {
                            psvSkill.tagStyles.push(this.TagNameStyle[tagName]);
                        } else {
                            psvSkill.tagStyles.push({ name: tagName || '', color: '#aaa' }); // Default style if not found
                        }
                    });
                }
            });

            const actressPsvSkills_: any = {};
            Object.keys(this.actressPsvSkills).forEach((aid) => {
                actressPsvSkills_[aid] = this.actressPsvSkills[aid].map((psvSkill) => {
                    return this.psvSkillDict[psvSkill.gid];
                });
            });
            this.actressPsvSkills = actressPsvSkills_;


            // if(psvSkill.gid==18851073){
            //     debugger;
            // }
            // console.log(this.psvSkillDict[18851073].tags);
            // console.log(this.psvSkillDict[18851073].tagStyles);

            // console.log(this.tagIdNameDict);

            Object.keys(this.slotDict).forEach((key) => {
                const slots = this.slotDict[key];
                slots.forEach((slot) => {
                    if (slot.defaultSkill != 0) {
                        const psvSkill = this.psvSkillDict[slot.defaultSkill];
                        if (psvSkill) {
                            slot.selectedPsvSkillGid = psvSkill.gid;
                            slot.selectedPsvSkill = psvSkill;
                        }
                    }
                });
            });


            this.selectedCharacterId = this.characters.find(v => v.name == '相河 愛花 ★4').id.toString();
            this.onCharacterChange();

            setTimeout(() => {
                this.inited = true;
                const selectedCharacterOptionElement = this.characterOptionElements.find(e => e.nativeElement.value == this.selectedCharacterId);
                if (selectedCharacterOptionElement != null) {
                    selectedCharacterOptionElement.nativeElement.scrollIntoView({
                        behavior: 'instant',
                        block: 'center',
                        inline: 'center'
                    });
                }
            }, 100);
        } catch (error: any) {
            this.errorMessage = error.message || '解壓縮失敗';
        }
    }
    ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            // this.firstTimeRun();
        });
    }

    onCharacterChange(): void {
        const selectedCharacterId = Number(this.selectedCharacterId);
        const character = this.characters.find((character) => character.id === selectedCharacterId);
        // console.log(character);

        if (character) {
            this.selectedCharacter = character;
            this.selectedCharacterSlots = this.slotDict[character.cid] || [];
            this.selectedActressPsvSkills = this.actressPsvSkills[character.aid] || [];
            this.selectSlot(null); // Reset selected slot
            // console.log(this.selectedCharacter);
            // console.log(this.selectedCharacterSlots);
            // console.log(this.selectedActressPsvSkills);
            this.updateEffectSummary();
        }
    }
    getSelectedCharacterName(): string {
        if (this.selectedCharacter) {
            return this.selectedCharacter.name;
        }
        return '--';
    }
    getCharacterOptionStyle(character: Character): CSSStyleDeclaration {
        const style: CSSStyleDeclaration = {} as any;
        if (character.chrAttrTypeId) {
            style.backgroundColor = AttrTypeBackgroundColor[AttrTypeId[character.chrAttrTypeId]];
        }
        if (this.actressFirstCharacter[character.id]) {
            style.borderTop = '1px solid #000';
        }
        if (this.actressLastCharacter[character.id]) {
            style.borderBottom = '1px solid #000';
        }

        if (this.selectedCharacter == character) {
            style.fontWeight = 'bold';
            style.color = '#fff';
            style.backgroundColor = '#007bff';
        }

        return style;
    }

    selectSlot(slot: AikaPsvSkillSlot): void {
        if (this.selectedSlot == slot || slot == null) {
            this.selectedSlot = null;
            this.slotSelectablePsvSkills = [];
            return;
        }
        this.selectedSlot = slot;
        this.slotSelectablePsvSkills = [];
        this.selectedActressPsvSkills.forEach((psvSkill) => {
            if (this.selectedSlot.tagName == '[ALL]') {
                this.slotSelectablePsvSkills.push(psvSkill);
            }
            else if (psvSkill.tags
                && psvSkill.tags.includes(this.selectedSlot.tag)
                && psvSkill.cost <= this.selectedSlot.cost) {
                this.slotSelectablePsvSkills.push(psvSkill);
            }
        });

        this.updatePsvSkillStatus();
        this.updateEffectSummary();

        setTimeout(() => {
            const psvSkillElement = this.psvSkillElements.find(e => e.nativeElement.getAttribute('data-gid') == this.selectedSlot.selectedPsvSkillGid.toString());
            if (psvSkillElement != null) {
                psvSkillElement.nativeElement.scrollIntoView({
                    behavior: 'instant',
                    block: 'center',
                    inline: 'center'
                });
            }
        }, 100);
        // console.log('Selected Slot:', slot);
        // if (slot.selectedPsvSkillGid != -1) {
        //     slot.psvSkill = this.psvSkillDict[slot.selectedPsvSkillGid] || null;
        // } else {
        //     slot.psvSkill = null;
        // }
        // console.log('Selected Psv Skill:', slot.psvSkill);
    }
    selectPsvSkill(psvSkill: AikaEnigmaPsvSkill): void {
        // console.log('Selected Psv Skill:', psvSkill);
        // console.log(psvSkill.tags);
        // console.log(psvSkill.tagStyles);
        // console.log(this.psvSkillDict[psvSkill.gid]);

        if (this.selectedSlot && this.selectedSlot.selectedPsvSkillGid != psvSkill.gid) {
            this.selectedCharacterSlots.forEach((slot) => {
                if (slot.selectedPsvSkillGid == psvSkill.gid) {
                    slot.selectedPsvSkillGid = -1;
                    slot.selectedPsvSkill = null;
                }
            });

            this.selectedSlot.selectedPsvSkillGid = psvSkill.gid;
            this.selectedSlot.selectedPsvSkill = psvSkill;

        } else {
            this.selectedSlot = null;
            this.slotSelectablePsvSkills = [];
        }

        this.updatePsvSkillStatus();
        this.updateEffectSummary();
    }
    updatePsvSkillStatus(): void {
        this.slotsSelectedPsvSkills = {};
        this.selectedCharacterSlots.forEach((slot) => {
            if (slot.selectedPsvSkillGid != -1) {
                const psvSkill = this.psvSkillDict[slot.selectedPsvSkillGid];
                if (psvSkill) {
                    this.slotsSelectedPsvSkills[psvSkill.gid] = slot.index;
                }
            }
        });
    }
    updateEffectSummary(): void {
        const effectLines: string[] = [];
        this.selectedCharacterSlots.forEach((slot) => {
            if (slot.selectedPsvSkillGid != -1) {
                const psvSkill = this.psvSkillDict[slot.selectedPsvSkillGid];
                psvSkill.effect.split('\n').forEach((line) => {
                    const trimmedLine = line.trim();
                    if (trimmedLine) {
                        effectLines.push(trimmedLine);
                    }
                });

                // effectLines.push(...psvSkill.effect.split('\n').map(v=>v.trim()));
                // console.log('Selected Psv Skill:', );
            }
        });

        effectLines.sort();
        this.selectedCharacterEffectSummary = effectLines.join('\n');
        // console.log('Selected Character Effect Summary:', JSON.stringify(this.selectedCharacterEffectSummary));
    }

}

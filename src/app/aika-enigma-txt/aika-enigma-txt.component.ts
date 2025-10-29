import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CompressionService } from '../model/compression.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { AikaEnigmaArea, AikaEnigmaIndex, AikaEnigmaPsvSkill, AikaEnigmaPsvSkillUpgrade, AikaEnigmaSection, parseSkillDataJson } from '../model/skill';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-aika-enigma-txt',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        CompressionService,
    ],
    templateUrl: './aika-enigma-txt.component.html',
    styleUrl: './aika-enigma-txt.component.scss'
})
export class AikaEnigmaTxtComponent implements OnInit, AfterViewInit {

    // decompressedContent: string = '';
    errorMessage: string = '';
    selectedSections: AikaEnigmaSection[] = [];
    sections: AikaEnigmaSection[] = [];
    indexes1: AikaEnigmaIndex[] = [];
    indexes2: AikaEnigmaIndex[] = [];
    indexes3: AikaEnigmaIndex[] = [];

    selectedIndex1: AikaEnigmaIndex = new AikaEnigmaIndex('--');
    selectedIndex2: AikaEnigmaIndex = new AikaEnigmaIndex('--');
    selectedIndex3: AikaEnigmaIndex = new AikaEnigmaIndex('--');

    selectedSectionTotalCost: string = '';

    @ViewChildren('index1Item') index1Items!: QueryList<ElementRef>;
    @ViewChildren('index2Item') index2Items!: QueryList<ElementRef>;
    @ViewChildren('index3Item') index3Items!: QueryList<ElementRef>;
    @ViewChildren('sectionItem') sectionItems!: QueryList<ElementRef>;
    @ViewChildren('areaItem') areaItems!: QueryList<ElementRef>;
    @ViewChildren('psvSkillItem') psvSkillItems!: QueryList<ElementRef>;

    firstTimeEnter: boolean = true;
    inited: boolean = false;
    gid: number = 1;


    filter = {
        keyword: '',
        showSelectedCharacterOnly: true,
        showUpgradeMaterials: true,
    };
    inputKeywordTimer: any = null;






    constructor(
        private compressionService: CompressionService,
        private appService: AppService,
    ) {
        this.appService.pageEnter['aet'] = () => {
            this.firstTimeRun();
        }
    }
    ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            this.firstTimeRun();
        });
    }
    async ngOnInit(): Promise<void> {
        const assetPath = '/assets/enigma.bin';

        try {
            const jsonBytes = await this.compressionService.decompressZlibFromAsset(assetPath);
            const jsonString = new TextDecoder().decode(jsonBytes);
            // console.log('解壓縮成功:', this.decompressedContent.length);
            this.sections = parseSkillDataJson(jsonString);

            this.sections.forEach((section) => {
                section.id = this.gid++;

                const index1 = new AikaEnigmaIndex(section.name, true);
                index1.id = this.gid++;

                const index2Title = new AikaEnigmaIndex(section.name, false, index1);
                index2Title.id = this.gid++;

                section.index = index1;
                this.indexes1.push(index1);
                this.indexes2.push(index2Title);

                section.area.forEach((area) => {
                    area.id = this.gid++;

                    area.name = area.name.toLocaleUpperCase();
                    const index2 = new AikaEnigmaIndex(area.name, true, index1);
                    index2.id = this.gid++;

                    const index3Title = new AikaEnigmaIndex(index1.name + '-' + index2.name, false, index2);
                    index3Title.id = this.gid++;

                    area.index = index2;
                    this.indexes2.push(index2);
                    this.indexes3.push(index3Title);

                    area.psvskills.forEach((psvskill) => {
                        psvskill.id = this.gid++;

                        const index3 = new AikaEnigmaIndex(psvskill.name, true, index2);
                        index3.id = this.gid++;

                        psvskill.index = index3;
                        this.indexes3.push(index3);
                    });
                });
            });
            // console.log(this.sections);

            this.inited = true;
        } catch (error: any) {
            this.errorMessage = error.message || '解壓縮失敗';
        }
    }

    firstTimeRun(): void {
        console.log('firstTimeRun', this.inited, this.firstTimeEnter);
        if (!this.inited) {
            return;
        }
        if (!this.firstTimeEnter) {
            return;
        }
        this.firstTimeEnter = false;
        const 愛花index = this.indexes1.find((index) => index.name === '相河愛花');
        const 愛花index2 = this.indexes2.find((index) => index.parent == 愛花index && index.enable);
        const 愛花index3 = this.indexes3.find((index) => index.parent == 愛花index2 && index.enable);
        this.selectedIndex1 = 愛花index;
        this.selectedIndex2 = 愛花index2;
        this.selectedIndex3 = 愛花index3;

        setTimeout(() => {
            const el2 = this.index2Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex2.id);
            el2.nativeElement.scrollIntoView({ block: 'center' });

            const el3 = this.index3Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex3.id);
            el3.nativeElement.scrollIntoView({ block: 'center' });

            const section = this.sections.find(v => v.index == 愛花index);
            this.selectedSections = [section];
            this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);

            setTimeout(() => {
                const bodyEl = this.sectionItems.find(v => v.nativeElement?.getAttribute('data-id') == section.id);
                bodyEl.nativeElement.scrollIntoView({ block: 'start' });
            }, 1);
        }, 1);


    }

    selectIndex1(index: AikaEnigmaIndex): void {
        console.log('selectIndex1', index);
        this.selectedIndex1 = index;

        if (this.selectedIndex2.parent != index) {
            this.selectedIndex2 = this.indexes2.find(v => v.parent == index && v.enable);
        }
        if (this.selectedIndex3.parent.parent != index) {
            this.selectedIndex3 = this.indexes3.find(v => v.parent == this.selectedIndex2 && v.enable);
        }

        const index2El = this.index2Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex2.id);
        if (index2El) {
            index2El.nativeElement.scrollIntoView({ block: 'center' });
        }

        const index3El = this.index3Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex3.id);
        if (index3El) {
            index3El.nativeElement.scrollIntoView({ block: 'center' });
        }

        const section = this.sections.find(v => v.index == index);
        this.selectedSections = [section];
        this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);
        console.log('section', section);
        setTimeout(() => {
            const bodyEl = this.sectionItems.find(v => v.nativeElement?.getAttribute('data-id') == section.id);
            if (bodyEl) {
                bodyEl.nativeElement.scrollIntoView({ block: 'start' });
            }
        }, 1);
    }
    selectIndex2(index: AikaEnigmaIndex): void {
        this.selectedIndex2 = index;

        if (this.selectedIndex2.parent != this.selectedIndex1) {
            this.selectedIndex1 = this.selectedIndex2.parent;
        }
        if (this.selectedIndex3.parent != index) {
            this.selectedIndex3 = this.indexes3.find(v => v.parent == index && v.enable);
        }

        const index1El = this.index1Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex1.id);
        if (index1El) {
            index1El.nativeElement.scrollIntoView({ block: 'center' });
        }

        const index3El = this.index3Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex3.id);
        if (index3El) {
            index3El.nativeElement.scrollIntoView({ block: 'center' });
        }

        const section = this.sections.find(v => v.index == this.selectedIndex1);
        this.selectedSections = [section];
        this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);
        setTimeout(() => {
            const area = section.area.find(v => v.index == index);
            const areaEl = this.areaItems.find(v => v.nativeElement?.getAttribute('data-id') == area.id);
            if (areaEl) {
                areaEl.nativeElement.scrollIntoView({ block: 'start' });
            }
        }, 1);
    }
    selectIndex3(index: AikaEnigmaIndex): void {
        this.selectedIndex3 = index;

        if (this.selectedIndex3.parent != this.selectedIndex2) {
            this.selectedIndex2 = this.selectedIndex3.parent;
        }
        if (this.selectedIndex2.parent != this.selectedIndex1) {
            this.selectedIndex1 = this.selectedIndex2.parent;
        }

        const index1El = this.index1Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex1.id);
        if (index1El) {
            index1El.nativeElement.scrollIntoView({ block: 'center' });
        }
        const index2El = this.index2Items.find(v => v.nativeElement?.getAttribute('data-id') == this.selectedIndex2.id);
        if (index2El) {
            index2El.nativeElement.scrollIntoView({ block: 'center' });
        }

        const section = this.sections.find(v => v.index == this.selectedIndex1);
        this.selectedSections = [section];
        this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);
        setTimeout(() => {
            const area = section.area.find(v => v.index == this.selectedIndex2);
            const psvSkill = area.psvskills.find(v => v.index == index);
            const psvSkillEl = this.psvSkillItems.find(v => v.nativeElement?.getAttribute('data-id') == psvSkill.id);
            if (psvSkillEl) {
                psvSkillEl.nativeElement.scrollIntoView({ block: 'start' });
            }
        }, 1);
    }
    trackById(index: number, item: any): any {
        return item.id; // 使用唯一的 id 作為追蹤依據
    }

    getSectionsCost(sections: AikaEnigmaSection[]): string {
        let totalCost = '';

        const costDict = {};

        sections.forEach((section) => {
            section.area.forEach((area) => {
                area.psvskills.forEach((psvskill) => {
                    if (psvskill.upgrade) {
                        for (const costItem of psvskill.upgrade.cost) {
                            const costStrs = costItem.split(' x');
                            const material = costStrs[0].trim();
                            const cost = parseInt(costStrs[1].trim());
                            if (costDict[material]) {
                                costDict[material] += cost;
                            } else {
                                costDict[material] = cost;
                            }
                        }
                    }
                });
            });
        });

        Object.keys(costDict).forEach((key) => {
            const cost = costDict[key];
            if (cost > 0) {
                totalCost += key + ' x' + cost;
                totalCost += '\n';
            }
        });


        return totalCost.toString();
    }


    scrollIndex1IntoView(index: AikaEnigmaIndex): void {
        const el = this.index1Items.find(v => v.nativeElement?.getAttribute('data-id') == index.id);
        if (el) {
            el.nativeElement.scrollIntoView({ block: 'center' });
        }
    }
    scrollIndex2IntoView(index: AikaEnigmaIndex): void {
        const el = this.index2Items.find(v => v.nativeElement?.getAttribute('data-id') == index.id);
        if (el) {
            el.nativeElement.scrollIntoView({ block: 'center' });
        }
    }
    scrollIndex3IntoView(index: AikaEnigmaIndex): void {
        const el = this.index3Items.find(v => v.nativeElement?.getAttribute('data-id') == index.id);
        if (el) {
            el.nativeElement.scrollIntoView({ block: 'center' });
        }
    }
    scrollAllIndexesIntoView(): void {
        this.scrollIndex1IntoView(this.selectedIndex1);
        this.scrollIndex2IntoView(this.selectedIndex2);
        this.scrollIndex3IntoView(this.selectedIndex3);
    }

    resetFilters(): void {
        this.filter.showSelectedCharacterOnly = true;
        this.filter.keyword = '';
    }
    onKeywordChange(event: any): void {
        if (this.inputKeywordTimer) {
            clearTimeout(this.inputKeywordTimer);
        }
        this.inputKeywordTimer = setTimeout(() => {


        }, 300);
    }
}

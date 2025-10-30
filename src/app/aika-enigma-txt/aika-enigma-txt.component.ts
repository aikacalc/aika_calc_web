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
    selectedSection: AikaEnigmaSection | null = null;
    selectedSections: AikaEnigmaSection[] = [];
    sections: AikaEnigmaSection[] = [];
    indexes1: AikaEnigmaIndex[] = [];
    indexes2: AikaEnigmaIndex[] = [];
    indexes3: AikaEnigmaIndex[] = [];
    sectionCosts: { [key: number]: string } = {};

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
        showAllCharacterPsvSkills: false,
        showUpgradeMaterials: true,
        showPassiveDescription: true,
        showPassiveEffect: true,
    };
    inputKeywordTimer: any = null;

    searchResultShow: { [key: number]: boolean } = {};
    enableSearchHightlight: boolean = false;





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

            this.sections.forEach((section) => {
                const cost = this.getSectionsCost([section]);
                this.sectionCosts[section.id] = cost;

                this.searchResultShow[section.id] = true;
                this.searchResultShow[section.index.id] = true;
                section.area.forEach((area) => {
                    this.searchResultShow[area.id] = true;
                    this.searchResultShow[area.index.id] = true;
                    area.psvskills.forEach((psvskill) => {
                        this.searchResultShow[psvskill.id] = true;
                        this.searchResultShow[psvskill.index.id] = true;
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

            const selectedSection = this.sections.find(v => v.index == this.selectedIndex1);
            this.selectedSection = selectedSection;
            if (!this.filter.showAllCharacterPsvSkills) {
                this.selectedSections = [selectedSection];
            } else {
                this.selectedSections = this.sections;
            }
            // this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);

            setTimeout(() => {
                const bodyEl = this.sectionItems.find(v => v.nativeElement?.getAttribute('data-id') == selectedSection.id);
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

        const selectedSection = this.sections.find(v => v.index == this.selectedIndex1);
        this.selectedSection = selectedSection;
        if (!this.filter.showAllCharacterPsvSkills) {
            this.selectedSections = [selectedSection];
        } else {
            this.selectedSections = this.sections;
        }
        // this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);
        // console.log('section', section);

        setTimeout(() => {
            const bodyEl = this.sectionItems.find(v => v.nativeElement?.getAttribute('data-id') == selectedSection.id);
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

        const selectedSection = this.sections.find(v => v.index == this.selectedIndex1);
        this.selectedSection = selectedSection;
        if (!this.filter.showAllCharacterPsvSkills) {
            this.selectedSections = [selectedSection];
        } else {
            this.selectedSections = this.sections;
        }
        // this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);


        setTimeout(() => {
            const area = selectedSection.area.find(v => v.index == index);
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

        const selectedSection = this.sections.find(v => v.index == this.selectedIndex1);
        this.selectedSection = selectedSection;
        if (!this.filter.showAllCharacterPsvSkills) {
            this.selectedSections = [selectedSection];
        } else {
            this.selectedSections = this.sections;
        }
        // this.selectedSectionTotalCost = this.getSectionsCost(this.selectedSections);


        setTimeout(() => {
            const area = selectedSection.area.find(v => v.index == this.selectedIndex2);
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

    resetSearch(): void {
        this.filter.keyword = '';
        this.enableSearchHightlight = false;
        this.onShowAllCharacterPsvSkillsChange(null);
        this.onKeywordChange(null);
    }
    onShowAllCharacterPsvSkillsChange(event: any): void {
        if (!this.filter.showAllCharacterPsvSkills) {
            const selectedSection = this.sections.find(v => v.index == this.selectedIndex1);
            this.selectedSections = [selectedSection];
        } else {
            this.selectedSections = this.sections;
        }
    }
    onKeywordChange(event: any): void {
        console.log('onKeywordChange', this.filter.keyword);
        if (this.inputKeywordTimer) {
            clearTimeout(this.inputKeywordTimer);
        }
        this.inputKeywordTimer = setTimeout(() => {
            const inputKeyword = this.filter.keyword.trim();

            if (inputKeyword == '') {
                this.enableSearchHightlight = false;

                // show all
                this.sections.forEach((section) => {
                    this.searchResultShow[section.id] = true;
                    this.searchResultShow[section.index.id] = true;
                    section.area.forEach((area) => {
                        this.searchResultShow[area.id] = true;
                        this.searchResultShow[area.index.id] = true;
                        area.psvskills.forEach((psvskill) => {
                            this.searchResultShow[psvskill.id] = true;
                            this.searchResultShow[psvskill.index.id] = true;
                        });
                    });
                });
                return;
            }

            this.enableSearchHightlight = true;

            // 解析查詢關鍵字
            const { includeKeywords, excludeKeywords, exactKeywords } = this.parseKeywords(inputKeyword);

            // reset
            this.sections.forEach((section) => {
                this.searchResultShow[section.id] = false;
                this.searchResultShow[section.index.id] = false;
                section.area.forEach((area) => {
                    this.searchResultShow[area.id] = false;
                    this.searchResultShow[area.index.id] = false;
                    area.psvskills.forEach((psvskill) => {
                        this.searchResultShow[psvskill.id] = false;
                        this.searchResultShow[psvskill.index.id] = false;
                    });
                });
            });

            // search
            this.sections.forEach((section) => {
                let isMatchSection = false;
                section.area.forEach((area) => {
                    let isMatchArea = false;
                    area.psvskills.forEach((psvskill) => {
                        const isMatchPsvSkill = this.isMatchKeywords(psvskill, includeKeywords, excludeKeywords, exactKeywords);
                        if (isMatchPsvSkill) {
                            this.searchResultShow[psvskill.id] = true;
                            this.searchResultShow[psvskill.index.id] = true;
                            isMatchSection = true;
                            isMatchArea = true;
                        }
                    });
                    if (isMatchArea) {
                        this.searchResultShow[area.id] = true;
                        this.searchResultShow[area.index.id] = true;
                    }
                });
                if (isMatchSection) {
                    this.searchResultShow[section.id] = true;
                    this.searchResultShow[section.index.id] = true;
                }
            });
        }, 500);
    }

    private parseKeywords(inputKeyword: string): { includeKeywords: string[], excludeKeywords: string[], exactKeywords: string[] } {
        const includeKeywords: string[] = [];
        const excludeKeywords: string[] = [];
        const exactKeywords: string[] = [];

        // 處理雙引號內的完全匹配關鍵字
        const exactMatches = inputKeyword.match(/"[^"]*"/g);
        let remainingKeyword = inputKeyword;

        if (exactMatches) {
            exactMatches.forEach(match => {
                const keyword = match.slice(1, -1); // 移除雙引號
                if (keyword.trim()) {
                    exactKeywords.push(keyword.trim());
                }
                remainingKeyword = remainingKeyword.replace(match, '');
            });
        }

        // 處理剩餘的關鍵字（空格分割）
        const keywords = remainingKeyword.split(/\s+/).filter(k => k.trim());

        keywords.forEach(keyword => {
            const trimmedKeyword = keyword.trim();
            if (trimmedKeyword.startsWith('-') && trimmedKeyword.length > 1) {
                // 排除關鍵字（去掉減號）
                excludeKeywords.push(trimmedKeyword.substring(1));
            } else if (trimmedKeyword) {
                // 包含關鍵字
                includeKeywords.push(trimmedKeyword);
            }
        });

        return { includeKeywords, excludeKeywords, exactKeywords };
    }

    private isMatchKeywords(psvskill: AikaEnigmaPsvSkill, includeKeywords: string[], excludeKeywords: string[], exactKeywords: string[]): boolean {
        const searchText = [
            psvskill.name,
            psvskill.descOneLine || '',
            psvskill.effect || ''
        ].join(' ').toLowerCase();

        // 檢查排除關鍵字 - 如果包含任何排除關鍵字則不匹配
        for (const excludeKeyword of excludeKeywords) {
            if (searchText.includes(excludeKeyword.toLowerCase())) {
                return false;
            }
        }

        // 檢查完全匹配關鍵字 - 所有完全匹配關鍵字都必須存在
        for (const exactKeyword of exactKeywords) {
            if (!searchText.includes(exactKeyword.toLowerCase())) {
                return false;
            }
        }

        // 檢查包含關鍵字 - 所有包含關鍵字都必須存在
        for (const includeKeyword of includeKeywords) {
            if (!searchText.includes(includeKeyword.toLowerCase())) {
                return false;
            }
        }

        // 如果沒有任何關鍵字，則不匹配
        if (includeKeywords.length === 0 && exactKeywords.length === 0) {
            return false;
        }

        return true;
    }
}

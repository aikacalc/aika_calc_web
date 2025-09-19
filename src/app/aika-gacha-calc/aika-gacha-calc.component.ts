import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CharacterModels } from '../model/character_models';
import { Character } from '../model/character';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompressionService } from '../model/compression.service';
import { CharacterPicture, ChrpicReader } from '../model/chrpic-reader';

@Component({
    selector: 'app-aika-gacha-calc',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-gacha-calc.component.html',
    styleUrl: './aika-gacha-calc.component.scss'
})
export class AikaGachaCalcComponent implements OnInit {

    firstTimeEnter: boolean = true;
    characterModels: Character[] = [];
    collaboCharacterIds: Set<number> = new Set();
    // characterPictures: CharacterPicture[] = [];
    characterPicturesMap: { [key: number]: CharacterPicture } = {};
    selectedCharacterId: Set<number> = new Set();
    lastSelectedIndex: number = -1;
    isCtrlPressed: boolean = false;
    touchStartTime: number = 0;
    currentHoveredCharacter: Character | null = null;

    constructor(
        private appService: AppService,
        private compressionService: CompressionService,
    ) {
        this.appService.pageEnter['agc'] = () => {
            this.onPageEnter();
        };

        // // Listen for keyboard events
        // document.addEventListener('keydown', (event) => {
        //     if (event.ctrlKey && !this.isCtrlPressed) {
        //         this.isCtrlPressed = true;
        //         // 如果按下 Ctrl 時有角色在滑鼠下方，立即反選
        //         if (this.currentHoveredCharacter) {
        //             this.toggleSelectCharacter(this.currentHoveredCharacter);
        //         }
        //     }
        // });

        // document.addEventListener('keyup', (event) => {
        //     if (!event.ctrlKey) {
        //         this.isCtrlPressed = false;
        //     }
        // });
    }

    private onPageEnter() {
        if (this.firstTimeEnter) {
            this.firstTimeEnter = false;
            this.initPage();
        }
    }

    async ngOnInit(): Promise<void> {
        // Initialization logic here
        const assetPath = '/assets/chrpic.bin';

        const chrPicBytes = await this.compressionService.decompressZlibFromAsset(assetPath);
        const characterPictures = await ChrpicReader.readChrpicBin(chrPicBytes);
        characterPictures.forEach(cp => {
            this.characterPicturesMap[cp.cid] = cp;
        });
    }

    initPage() {
        this.characterModels = [];
        this.collaboCharacterIds = new Set();
        let isStartCollabo = false;
        Object.keys(CharacterModels).forEach((key, i) => {
            const cm = CharacterModels[key];
            if (cm.rare == 4) {
                this.characterModels.push(cm);
            }
            if (key == 'TakahataNodoka05') {
                isStartCollabo = true;
            }
            if (isStartCollabo) {
                this.collaboCharacterIds.add(cm.cid);
            }
        });

        // 載入儲存的選擇結果
        this.loadSelection();

        // console.log(this.characterModels);
    }

    checkIsCollaboCharacter(cm: Character): boolean {
        return this.collaboCharacterIds.has(cm.cid);
    }

    toggleSelectCharacter(cm: Character, event?: MouseEvent) {
        const currentIndex = this.characterModels.findIndex(c => c.cid === cm.cid);

        if (event?.shiftKey && this.lastSelectedIndex !== -1) {
            // Shift+click: Select or deselect range based on the last selected character's state
            const startIndex = Math.min(this.lastSelectedIndex, currentIndex);
            const endIndex = Math.max(this.lastSelectedIndex, currentIndex);

            // 檢查範圍起始角色（lastSelectedIndex）的當前狀態
            const lastSelectedCharacter = this.characterModels[this.lastSelectedIndex];
            const shouldSelect = this.selectedCharacterId.has(lastSelectedCharacter.cid);

            for (let i = startIndex; i <= endIndex; i++) {
                const characterCid = this.characterModels[i].cid;
                if (shouldSelect) {
                    // 如果起始角色未選中，則選中範圍內所有角色
                    this.selectedCharacterId.add(characterCid);
                } else {
                    // 如果起始角色已選中，則取消選中範圍內所有角色
                    this.selectedCharacterId.delete(characterCid);
                }
            }
        } else {
            // Normal click: Toggle selection
            if (this.selectedCharacterId.has(cm.cid)) {
                this.selectedCharacterId.delete(cm.cid);
            } else {
                this.selectedCharacterId.add(cm.cid);
            }
            this.lastSelectedIndex = currentIndex;
        }

        // 儲存選擇結果
        this.saveSelection();
    }

    selectAll() {
        this.characterModels.forEach(cm => {
            this.selectedCharacterId.add(cm.cid);
        });
        this.saveSelection();
    }

    selectNone() {
        this.selectedCharacterId.clear();
        this.lastSelectedIndex = -1;
        this.saveSelection();
    }

    invertSelection() {
        this.characterModels.forEach(cm => {
            if (this.selectedCharacterId.has(cm.cid)) {
                this.selectedCharacterId.delete(cm.cid);
            } else {
                this.selectedCharacterId.add(cm.cid);
            }
        });
        this.saveSelection();
    }

    onCharacterMouseEnter(cm: Character) {
        this.currentHoveredCharacter = cm;
        if (this.isCtrlPressed) {
            this.toggleSelectCharacter(cm);
        }
    }

    onCharacterMouseLeave() {
        this.currentHoveredCharacter = null;
    }

    getSelectionPercentage(): string {
        if (this.characterModels.length === 0) {
            return '0';
        }
        const percentage = (this.selectedCharacterId.size / this.characterModels.length) * 100;
        return percentage.toFixed(1);
    }

    // 檢查角色是否為 Shift 選擇的起始點
    isLastSelectedCharacter(cm: Character): boolean {
        if (this.lastSelectedIndex === -1) return false;
        const currentIndex = this.characterModels.findIndex(c => c.cid === cm.cid);
        return currentIndex === this.lastSelectedIndex;
    }

    // 防止默認行為的通用方法
    preventDefault(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
    }

    // 處理觸控開始事件
    onTouchStart(event: TouchEvent): void {
        this.touchStartTime = Date.now();
    }

    // 處理觸控結束事件
    onTouchEnd(event: TouchEvent): void {
        const touchDuration = Date.now() - this.touchStartTime;

        // 如果觸控時間超過300ms，認為是長按，阻止默認行為
        if (touchDuration > 300) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
    }

    // 儲存選擇結果到 localStorage
    private saveSelection(): void {
        try {
            const selectionData = {
                selectedCharacterIds: Array.from(this.selectedCharacterId),
                lastSelectedIndex: this.lastSelectedIndex,
                timestamp: Date.now()
            };
            localStorage.setItem('aika-gacha-calc-selection', JSON.stringify(selectionData));
        } catch (error) {
            console.warn('無法儲存選擇結果:', error);
        }
    }

    // 從 localStorage 載入選擇結果
    private loadSelection(): void {
        try {
            const savedData = localStorage.getItem('aika-gacha-calc-selection');
            if (savedData) {
                const selectionData = JSON.parse(savedData);

                // 驗證資料有效性
                if (selectionData && Array.isArray(selectionData.selectedCharacterIds)) {
                    // 只載入有效的角色ID（確保角色還存在）
                    const validCharacterIds = this.characterModels.map(cm => cm.cid);

                    this.selectedCharacterId.clear();
                    selectionData.selectedCharacterIds.forEach((cid: number) => {
                        if (validCharacterIds.includes(cid)) {
                            this.selectedCharacterId.add(cid);
                        }
                    });

                    // 恢復最後選擇的索引（如果有效的話）
                    if (typeof selectionData.lastSelectedIndex === 'number' &&
                        selectionData.lastSelectedIndex >= 0 &&
                        selectionData.lastSelectedIndex < this.characterModels.length) {
                        this.lastSelectedIndex = selectionData.lastSelectedIndex;
                    }

                    console.log(`載入了 ${this.selectedCharacterId.size} 個角色的選擇狀態`);
                }
            }
        } catch (error) {
            console.warn('無法載入選擇結果:', error);
            // 如果載入失敗，清除可能損壞的資料
            localStorage.removeItem('aika-gacha-calc-selection');
        }
    }

    // 清除儲存的選擇結果
    clearSavedSelection(): void {
        localStorage.removeItem('aika-gacha-calc-selection');
        console.log('已清除儲存的選擇記錄');
    }
}

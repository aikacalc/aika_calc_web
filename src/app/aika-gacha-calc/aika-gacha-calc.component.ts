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


        // console.log(this.characterModels);
    }

    checkIsCollaboCharacter(cm: Character): boolean {
        return this.collaboCharacterIds.has(cm.cid);
    }

    toggleSelectCharacter(cm: Character, event?: MouseEvent) {
        const currentIndex = this.characterModels.findIndex(c => c.cid === cm.cid);

        if (event?.shiftKey && this.lastSelectedIndex !== -1) {
            // Shift+click: Select range
            const startIndex = Math.min(this.lastSelectedIndex, currentIndex);
            const endIndex = Math.max(this.lastSelectedIndex, currentIndex);

            for (let i = startIndex; i <= endIndex; i++) {
                this.selectedCharacterId.add(this.characterModels[i].cid);
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
    }

    selectAll() {
        this.characterModels.forEach(cm => {
            this.selectedCharacterId.add(cm.cid);
        });
    }

    selectNone() {
        this.selectedCharacterId.clear();
        this.lastSelectedIndex = -1;
    }

    invertSelection() {
        this.characterModels.forEach(cm => {
            if (this.selectedCharacterId.has(cm.cid)) {
                this.selectedCharacterId.delete(cm.cid);
            } else {
                this.selectedCharacterId.add(cm.cid);
            }
        });
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
}

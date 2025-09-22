import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CharacterModels } from '../model/character_models';
import { Character } from '../model/character';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompressionService } from '../model/compression.service';
import { CharacterPicture, ChrpicReader, CharacterPictureHelper } from '../model/chrpic-reader';

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

    // 角色固定序號字串與 cid 的 Map，方便查找
    characterKeyToCidMap: Map<string, number> = new Map();
    cidToCharacterKeyMap: Map<number, string> = new Map();

    // 使用角色固定序號字串作為 key 的圖片 Map
    characterPicturesMap: { [key: string]: CharacterPicture } = {};

    selectedCharacterId: Set<number> = new Set();
    lastSelectedIndex: number = -1;
    isCtrlPressed: boolean = false;
    touchStartTime: number = 0;
    currentHoveredCharacter: Character | null = null;

    // 追蹤初始化狀態
    private isInitialized: boolean = false;

    constructor(
        private appService: AppService,
        private compressionService: CompressionService,
    ) {
        this.appService.pageEnter['agc'] = () => {
            this.onPageEnter();
        };
    }

    private onPageEnter() {
        if (this.firstTimeEnter) {
            this.firstTimeEnter = false;
            this.initPage();
        }
    }

    async ngOnInit(): Promise<void> {
        const assetPath = '/assets/chrpic.bin';

        const chrPicBytes = await this.compressionService.decompressZlibFromAsset(assetPath);
        const characterPictures = await ChrpicReader.readChrpicBin(chrPicBytes);
        // console.log(characterPictures);

        // 設定角色圖片 Map 和 cid 對應關係
        characterPictures.forEach(cp => {
            const characterKey = CharacterPictureHelper.getCharacterKeyFromPicture(cp);
            this.characterPicturesMap[characterKey] = cp;

            // 設定角色固定序號字串與 cid 的雙向對應
            this.characterKeyToCidMap.set(characterKey, cp.cid);
            this.cidToCharacterKeyMap.set(cp.cid, characterKey);
        });

        // 標記初始化完成
        this.isInitialized = true;
        console.log('角色圖片初始化完成');
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

        // 延遲載入選擇結果，確保初始化完成
        this.loadSelectionWhenReady();

        // console.log(this.characterModels);
    }

    // 等待初始化完成後載入選擇結果
    private async loadSelectionWhenReady(): Promise<void> {
        // 如果還未初始化完成，等待一段時間後重試
        if (!this.isInitialized) {
            console.log('等待角色圖片初始化完成...');
            await new Promise(resolve => setTimeout(resolve, 100)); // 等待 100ms
            return this.loadSelectionWhenReady(); // 遞迴重試
        }

        // 初始化完成後載入選擇結果
        this.loadSelection();
    }

    checkIsCollaboCharacter(cm: Character): boolean {
        return this.collaboCharacterIds.has(cm.cid);
    }

    /**
     * 根據角色模型取得對應的角色圖片
     * @param cm 角色模型
     * @returns 角色圖片物件或 undefined
     */
    getCharacterPicture(cm: Character): CharacterPicture | undefined {
        const characterKey = this.cidToCharacterKeyMap.get(cm.cid);
        if (characterKey) {
            return this.characterPicturesMap[characterKey];
        }
        return undefined;
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

    // 儲存選擇結果到 localStorage (v2 版本，使用角色固定序號字串)
    private saveSelection(): void {
        try {
            // 將 cid 轉換為角色固定序號字串
            const selectedCharacterKeys: string[] = [];
            this.selectedCharacterId.forEach(cid => {
                const characterKey = this.cidToCharacterKeyMap.get(cid);
                if (characterKey) {
                    selectedCharacterKeys.push(characterKey);
                }
            });

            const selectionData = {
                version: 2, // 標記為 v2 版本
                selectedCharacterKeys: selectedCharacterKeys,
                lastSelectedIndex: this.lastSelectedIndex,
                timestamp: Date.now()
            };
            localStorage.setItem('aika-gacha-calc-selection-v2', JSON.stringify(selectionData));
        } catch (error) {
            console.warn('無法儲存選擇結果:', error);
        }
    }

    // 從 localStorage 載入選擇結果 (支援 v1、v2 版本和新的浮點數編碼)
    private loadSelection(): void {
        try {
            // 確保初始化已完成
            if (!this.isInitialized || this.characterKeyToCidMap.size === 0) {
                console.warn('初始化尚未完成，跳過載入選擇結果');
                return;
            }

            // 1. 優先嘗試從網址載入新格式的浮點數編碼
            const urlData = this.compressionService.loadDataFromUrl<string>('selection');
            if (urlData && typeof urlData === 'string') {
                // 解析浮點數格式的選擇資料
                this.parseFloatNumberSelection(urlData);
                console.log(`從網址載入浮點數編碼資料: ${this.selectedCharacterId.size} 個角色`);
                return;
            }

            // 2. 使用 CompressionService 的優先載入功能載入舊格式
            const loadedData = this.compressionService.loadDataWithPriority<any>(
                'aika-gacha-calc-selection-v2',
                'selection'
            );

            if (loadedData && loadedData.version === 2) {
                // v2 版本：使用角色固定序號字串
                if (Array.isArray(loadedData.selectedCharacterKeys)) {
                    this.selectedCharacterId.clear();
                    loadedData.selectedCharacterKeys.forEach((characterKey: string) => {
                        const cid = this.characterKeyToCidMap.get(characterKey);
                        if (cid !== undefined) {
                            this.selectedCharacterId.add(cid);
                        }
                    });
                    console.log(`載入了 ${this.selectedCharacterId.size} 個角色的選擇狀態 (v2)`);
                }

                // 恢復最後選擇的索引
                if (typeof loadedData.lastSelectedIndex === 'number' &&
                    loadedData.lastSelectedIndex >= 0 &&
                    loadedData.lastSelectedIndex < this.characterModels.length) {
                    this.lastSelectedIndex = loadedData.lastSelectedIndex;
                }
                return;
            }

            // 3. 如果都沒有資料，嘗試載入 v1 版本並轉換
            const savedDataV1 = localStorage.getItem('aika-gacha-calc-selection');
            if (savedDataV1) {
                const selectionData = JSON.parse(savedDataV1);

                // v1 版本：使用 cid，需要轉換並升級到 v2
                if (Array.isArray(selectionData.selectedCharacterIds)) {
                    const validCharacterIds = this.characterModels.map(cm => cm.cid);

                    this.selectedCharacterId.clear();
                    selectionData.selectedCharacterIds.forEach((cid: number) => {
                        if (validCharacterIds.includes(cid)) {
                            this.selectedCharacterId.add(cid);
                        }
                    });

                    // 自動升級到 v2 並儲存
                    this.saveSelection();
                    console.log(`載入並升級了 ${this.selectedCharacterId.size} 個角色的選擇狀態 (v1->v2)`);
                }

                // 恢復最後選擇的索引
                if (typeof selectionData.lastSelectedIndex === 'number' &&
                    selectionData.lastSelectedIndex >= 0 &&
                    selectionData.lastSelectedIndex < this.characterModels.length) {
                    this.lastSelectedIndex = selectionData.lastSelectedIndex;
                }
            }
        } catch (error) {
            console.warn('無法載入選擇結果:', error);
            // 如果載入失敗，清除可能損壞的資料
            localStorage.removeItem('aika-gacha-calc-selection');
            localStorage.removeItem('aika-gacha-calc-selection-v2');
        }
    }

    // 解析浮點數格式的選擇資料
    private parseFloatNumberSelection(dataString: string): void {
        try {
            // 確保必要的 Map 已經初始化
            if (!this.isInitialized || this.characterKeyToCidMap.size === 0) {
                console.warn('角色資料尚未初始化完成，無法解析浮點數選擇資料');
                return;
            }

            this.selectedCharacterId.clear();
            this.lastSelectedIndex = -1; // 浮點數格式不記錄最後選擇

            if (!dataString.trim()) {
                return;
            }

            const floatNumbers = dataString.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));

            floatNumbers.forEach(floatNumber => {
                // 解析浮點數：整數部分是 chr_id，小數部分是 chr_type
                const chr_id = Math.floor(floatNumber);
                const chr_type = Math.round((floatNumber - chr_id) * 100);

                // 尋找對應的角色
                const characterKey = CharacterPictureHelper.getCharacterKey(chr_id, chr_type);
                const cid = this.characterKeyToCidMap.get(characterKey);

                if (cid !== undefined) {
                    this.selectedCharacterId.add(cid);
                } else {
                    console.warn(`無法找到角色: chr_id=${chr_id}, chr_type=${chr_type}, key=${characterKey}`);
                }
            });

            console.log(`解析完成: ${floatNumbers.length} 個浮點數, ${this.selectedCharacterId.size} 個有效角色`);

            // 自動儲存到本地儲存（使用舊格式以保持相容性）
            this.saveSelection();
        } catch (error) {
            console.error('解析浮點數選擇資料時發生錯誤:', error);
        }
    }    // 清除儲存的選擇結果 (清除所有版本)
    clearSavedSelection(): void {
        localStorage.removeItem('aika-gacha-calc-selection');
        localStorage.removeItem('aika-gacha-calc-selection-v2');
        console.log('已清除儲存的選擇記錄 (v1 和 v2)');
    }

    // 產生包含選擇狀態的分享網址（使用浮點數編碼）
    generateShareUrl(): string {
        try {
            // 將選中的角色轉換為浮點數陣列 (chr_id.chr_type)
            const selectedFloatNumbers: number[] = [];
            this.selectedCharacterId.forEach(cid => {
                const characterKey = this.cidToCharacterKeyMap.get(cid);
                if (characterKey) {
                    const picture = this.characterPicturesMap[characterKey];
                    if (picture) {
                        // 格式：chr_id.chr_type (例如: 1.01, 2.03)
                        const floatNumber = picture.chr_id + (picture.chr_type / 100);
                        selectedFloatNumbers.push(floatNumber);
                    }
                }
            });

            // 對浮點數陣列進行排序，以確保一致性
            selectedFloatNumbers.sort((a, b) => a - b);

            // 將浮點數陣列轉換為字串並壓縮
            const dataString = selectedFloatNumbers.join(',');
            const shareUrl = this.compressionService.generateShareUrl(dataString, undefined, 'selection');
            console.log('產生分享網址 (浮點數編碼):', shareUrl);
            console.log('編碼的浮點數:', selectedFloatNumbers);
            return shareUrl;
        } catch (error) {
            console.error('產生分享網址時發生錯誤:', error);
            throw error;
        }
    }

    // 複製分享網址到剪貼簿
    async copyShareUrl(): Promise<void> {
        try {
            const shareUrl = this.generateShareUrl();
            await navigator.clipboard.writeText(shareUrl);
            console.log('分享網址已複製到剪貼簿');
            // 這裡可以顯示一個提示訊息給使用者
        } catch (error) {
            console.error('複製分享網址時發生錯誤:', error);
            // 降級方案：使用傳統的選取複製方式
            this.fallbackCopyToClipboard(this.generateShareUrl());
        }
    }

    // 降級複製方案（適用於不支援 Clipboard API 的瀏覽器）
    private fallbackCopyToClipboard(text: string): void {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            console.log('分享網址已複製到剪貼簿 (降級方案)');
        } catch (error) {
            console.error('複製操作失敗:', error);
        } finally {
            document.body.removeChild(textArea);
        }
    }
}

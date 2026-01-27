import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CharacterModels } from '../model/character_models';
import { Character } from '../model/character';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompressionService } from '../model/compression.service';
import { CharacterPicture, ChrpicReader, CharacterPictureHelper } from '../model/chrpic-reader';
import { AttrTypeId, AttrTypeColor } from '../model/attr-type';

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
    filteredCharacterModels: Character[] = [];
    collaboCharacterIds: Set<number> = new Set();

    emissionAttrTypeIds: Set<AttrTypeId> = new Set([
        AttrTypeId.Volt,
        AttrTypeId.Gravity,
        AttrTypeId.Fire,
        AttrTypeId.Ice,
    ]);
    characterEmissionTypeMap: Map<Character, number> = new Map();
    // 角色共鳴匹配次數
    characterMatchCountMap: Map<Character, number> = new Map();

    wepTypeIds: Set<AttrTypeId> = new Set([
        AttrTypeId.Rifle, // 步槍
        AttrTypeId.Bazooka, // 筒子
        AttrTypeId.Twin, // 雙槍
        AttrTypeId.Sniper, // 狙擊
        AttrTypeId.Sword, // 雙手劍
        AttrTypeId.Hammer, // 錘子
        AttrTypeId.Spear, // 長槍
        AttrTypeId.Dagger, // 單手劍
        AttrTypeId.HandGun, // 手槍
    ]);
    characterWepTypeMap: Map<Character, AttrTypeId> = new Map();

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

    // 篩選面板展開狀態
    isFilterPanelExpanded: boolean = true;

    // 暫時全亮：讓所有角色顯示為選中狀態
    tempBrightAll: boolean = false;

    // 只顯示持有角色：只顯示已選中的角色
    onlyShowOwned: boolean = false;

    // 隱藏0匹配角色（預設開啟）
    hideZeroMatch: boolean = true;

    // 預設篩選選項
    selectedPresetFilter: string = 'all';
    presetFilters = [
        { name: '全部', value: 'all', filter: {} },
        { name: "3★ 一条綾香", value: "2", filter: { attribute: [{ value: "fire" }], weapon: [{ value: "wepdgr" }], emission: [{ value: "emission3" }] } },
        { name: "3★ 相河愛花", value: "1", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission5" }] } },
        { name: "3★ 小芦睦海", value: "3", filter: { attribute: [{ value: "ice" }], weapon: [{ value: "wepsnp" }], emission: [{ value: "emission1" }] } },
        { name: "3★ 宇佐元杏奈", value: "10", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "wephmr" }], emission: [{ value: "emission3" }] } },
        { name: "3★ 神宮寺真理", value: "8", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "wepsnp" }], emission: [{ value: "emission2" }] } },
        { name: "3★ 新谷芹菜", value: "5", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission2" }] } },
        { name: "3★ 蛙坂来弥", value: "9", filter: { attribute: [{ value: "fire" }], weapon: [{ value: "weptwn" }], emission: [{ value: "emission2" }] } },
        { name: "3★ 籠目深沙希", value: "15", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "weptwn" }], emission: [{ value: "emission5" }] } },
        { name: "3★ 村尾未羅", value: "6", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "wepswr" }], emission: [{ value: "emission4" }] } },
        { name: "3★ 君影唯", value: "7", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "wepsnp" }], emission: [{ value: "emission3" }] } },
        { name: "3★ 須賀乙莉", value: "16", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "wepbaz" }], emission: [{ value: "emission2" }] } },
        { name: "3★ サンティ・R", value: "14", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "wepswr" }], emission: [{ value: "emission3" }] } },
        { name: "3★ ミア・V", value: "11", filter: { attribute: [{ value: "ice" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission3" }] } },
        { name: "3★ 千島美幸", value: "12", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "wepsqr" }], emission: [{ value: "emission4" }] } },
        { name: "3★ 山野薫子", value: "4", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission3" }] } },
        { name: "4★ 山野薫子", value: "21", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission3" }], birthday: [{ value: "bd11" }] } },
        { name: "3★ 尾長晶乃", value: "19", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission3" }] } },
        { name: "3★ 巽竜子", value: "18", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "wepdgr" }], emission: [{ value: "emission2" }] } },
        { name: "3★ 鳳加純", value: "20", filter: { attribute: [{ value: "fire" }], weapon: [{ value: "wepsqr" }], emission: [{ value: "emission5" }] } },
        { name: "4★ 鳳加純", value: "23", filter: { attribute: [{ value: "fire" }], weapon: [{ value: "wepsqr" }], emission: [{ value: "emission5" }], birthday: [{ value: "bd1" }] } },
        { name: "3★ 吾妻京", value: "17", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "wepswr" }], emission: [{ value: "emission1" }] } },
        { name: "3★ アンジェリカ・G", value: "13", filter: { attribute: [{ value: "ice" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission5" }] } },
        { name: "4★ 宇佐元藍奈", value: "22", filter: { attribute: [{ value: "gravity" }], weapon: [{ value: "wephmr" }], emission: [{ value: "emission3" }], bloodType: [] } },
        { name: "4★ 須賀由芽美", value: "24", filter: { attribute: [{ value: "gravity" }, { value: "volt" }], weapon: [{ value: "weprif" }], emission: [{ value: "emission3" }] } },
        { name: "4★ 安藤陽子", value: "25", filter: { attribute: [{ value: "volt" }, { value: "gravity" }], weapon: [{ value: "wephmr" }], emission: [{ value: "emission3" }] } },
        { name: "4★ 黒部四水", value: "26", filter: { attribute: [{ value: "volt" }], weapon: [{ value: "wepswr" }], emission: [{ value: "emission1" }], birthday: [{ value: "bdunk" }] } }
    ];

    // 多條件篩選設定（陣列形式，支援同類型多條件 OR 篩選）
    filterCriteria = {
        attribute: [{ value: 'all' }],    // 屬性篩選
        emission: [{ value: 'all' }],     // 放出類型篩選
        weapon: [{ value: 'all' }],       // 擅長武器篩選
        birthday: [{ value: 'all' }],     // 生日月份篩選
        bloodType: [{ value: 'all' }]     // 血型篩選
    };

    // 篩選設定
    filterSettings = {
        home: true,        // 本家
        collabo: true,     // 聯動
        normal: true,      // 一般
        another: true,     // AN
        factor: true,      // FA
        stellar: true,     // ST
        backup: true,     // BU
        volt: true,        // 電擊
        gravity: true,     // 重力
        fire: true,        // 燒夷
        ice: true,          // 冷擊
        emission1: true,    // 出力特性
        emission2: true,    // 出力変性
        emission3: true,     // 変質放出
        emission4: true,     // 特質放出
        emission5: true,     // 放出特化
        weprif: true,      // 步槍
        wepbaz: true,      // 筒子
        weptwn: true,      // 雙槍
        wepsnp: true,      // 狙擊
        wepswr: true,      // 雙手劍
        wephmr: true,      // 錘子
        wepsqr: true,      // 長槍
        wepdgr: true,      // 單手劍
        wepcqc: true,      // 手槍
        bd1: true,          // 1月生日
        bd2: true,          // 2月生日
        bd3: true,          // 3月生日
        bd4: true,          // 4月生日
        bd5: true,          // 5月生日
        bd6: true,          // 6月生日
        bd7: true,          // 7月生日
        bd8: true,          // 8月生日
        bd9: true,          // 9月生日
        bd10: true,         // 10月生日
        bd11: true,         // 11月生日
        bd12: true,         // 12月生日
        bdunk: true,      // 生日不明
        blooda: true,     // A型
        bloodb: true,     // B型
        bloodo: true,     // O型
        bloodab: true,    // AB型
        bloodunk: true,  // 血型不明
    };

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
        this.characterModels.forEach(cm => {
            let characterEmissionType: AttrTypeId | null = null;
            const characterEmissionTypeBuff = cm.buffs.find(b => this.emissionAttrTypeIds.has(b.type));
            if (characterEmissionTypeBuff) {
                if (characterEmissionTypeBuff.value == 0.96) {
                    characterEmissionType = 5;
                } else if (characterEmissionTypeBuff.value == 0.9) {
                    characterEmissionType = 4;
                } else if (characterEmissionTypeBuff.value == 0.86) {
                    characterEmissionType = 3;
                } else if (characterEmissionTypeBuff.value == 0.56) {
                    characterEmissionType = 2;
                } else if (characterEmissionTypeBuff.value == 0.5) {
                    characterEmissionType = 1;
                }
            }
            if (characterEmissionType) {
                this.characterEmissionTypeMap.set(cm, characterEmissionType);
            }

            let characterWepType: AttrTypeId | null = null;
            const characterWepTypeBuff = cm.buffs.find(b => this.wepTypeIds.has(b.type));
            if (characterWepTypeBuff) {
                characterWepType = characterWepTypeBuff.type;
            }
            if (characterWepType) {
                this.characterWepTypeMap.set(cm, characterWepType);
            }
        });

        // 初始化篩選列表
        this.applyFilters();

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

        // 初始化完成後重新應用篩選（因為現在有完整的圖片資料）
        this.applyFilters();

        // 然後載入選擇結果
        this.loadSelection();
    }

    checkIsCollaboCharacter(cm: Character): boolean {
        return this.collaboCharacterIds.has(cm.cid);
    }

    // 檢查角色是否為本家角色（非聯動）
    checkIsHomeCharacter(cm: Character): boolean {
        return !this.checkIsCollaboCharacter(cm);
    }

    // 檢查角色類型（based on chr_id和chr_type）
    getCharacterType(cm: Character): string {
        const characterKey = this.cidToCharacterKeyMap.get(cm.cid);
        if (characterKey) {
            const picture = this.characterPicturesMap[characterKey];
            if (picture) {
                // chr_type 的含義：05=一般, 70=AN, 80=FA, 60=ST
                switch (picture.chr_type) {
                    case 5: return 'normal';   // 05 一般
                    case 70: return 'another'; // 70 AN
                    case 80: return 'factor';  // 80 FA
                    case 60: return 'stellar'; // 60 ST
                    default: return 'normal';
                }
            }
        }
        return 'normal';
    }



    // 應用篩選條件
    applyFilters(): void {
        // 先計算所有角色的共鳴匹配次數
        this.characterModels.forEach(cm => {
            const matchCount = this.calculateResonanceMatchCount(cm);
            this.characterMatchCountMap.set(cm, matchCount);
        });

        // 檢查是否有使用共鳴篩選
        const hasResonanceFilter = this.hasActiveResonanceFilter();

        // 只進行基本篩選（來源、角色類型），不包含共鳴篩選條件
        this.filteredCharacterModels = this.characterModels.filter(cm => {
            // 檢查本家/聯動篩選
            const isCollabo = this.checkIsCollaboCharacter(cm);
            if (isCollabo && !this.filterSettings.collabo) return false;
            if (!isCollabo && !this.filterSettings.home) return false;

            // 檢查角色類型篩選
            const characterType = this.getCharacterType(cm);
            if (characterType === 'normal' && !this.filterSettings.normal) return false;
            if (characterType === 'another' && !this.filterSettings.another) return false;
            if (characterType === 'factor' && !this.filterSettings.factor) return false;
            if (characterType === 'stellar' && !this.filterSettings.stellar) return false;
            if (characterType === 'backup' && !this.filterSettings.backup) return false;

            return true;
        });

        // 如果有使用共鳴篩選，按匹配次數降序排序
        if (hasResonanceFilter) {
            this.filteredCharacterModels.sort((a, b) => {
                const countA = this.characterMatchCountMap.get(a) || 0;
                const countB = this.characterMatchCountMap.get(b) || 0;
                return countB - countA; // 降序排序
            });
        }

        // 如果啟用隱藏0匹配且有使用共鳴篩選，過濾掉0匹配的角色
        if (this.hideZeroMatch && hasResonanceFilter) {
            this.filteredCharacterModels = this.filteredCharacterModels.filter(cm => {
                const matchCount = this.characterMatchCountMap.get(cm) || 0;
                return matchCount > 0;
            });
        }
    }

    // 檢查是否有使用共鳴篩選（5種篩選：屬性、放出類型、主擅長武器、生日月、血型）
    private hasActiveResonanceFilter(): boolean {
        const hasAttribute = this.filterCriteria.attribute.some(f => f.value !== 'all');
        const hasEmission = this.filterCriteria.emission.some(f => f.value !== 'all');
        const hasWeapon = this.filterCriteria.weapon.some(f => f.value !== 'all');
        const hasBirthday = this.filterCriteria.birthday.some(f => f.value !== 'all');
        const hasBloodType = this.filterCriteria.bloodType.some(f => f.value !== 'all');
        return hasAttribute || hasEmission || hasWeapon || hasBirthday || hasBloodType;
    }

    // 計算角色的共鳴匹配次數（參照 applyFilters 的邏輯）
    private calculateResonanceMatchCount(cm: Character): number {
        let matchCount = 0;

        // 檢查屬性匹配
        const attributeFilters = this.filterCriteria.attribute.filter(f => f.value !== 'all');
        if (attributeFilters.length > 0) {
            const isMatch = attributeFilters.some(filter => {
                const attrMap: { [key: string]: AttrTypeId } = {
                    'volt': AttrTypeId.Volt,
                    'gravity': AttrTypeId.Gravity,
                    'fire': AttrTypeId.Fire,
                    'ice': AttrTypeId.Ice
                };
                return cm.chrAttrTypeId === attrMap[filter.value];
            });
            if (isMatch) matchCount++;
        }

        // 檢查放出類型匹配
        const emissionFilters = this.filterCriteria.emission.filter(f => f.value !== 'all');
        if (emissionFilters.length > 0) {
            const characterEmissionType = this.characterEmissionTypeMap.get(cm);
            if (characterEmissionType) {
                const isMatch = emissionFilters.some(filter => {
                    const emissionValue = parseInt(filter.value.replace('emission', ''));
                    return characterEmissionType === emissionValue;
                });
                if (isMatch) matchCount++;
            }
        }

        // 檢查武器匹配
        const weaponFilters = this.filterCriteria.weapon.filter(f => f.value !== 'all');
        if (weaponFilters.length > 0) {
            const characterWepType = this.characterWepTypeMap.get(cm);
            if (characterWepType) {
                const isMatch = weaponFilters.some(filter => {
                    const wepMap: { [key: string]: AttrTypeId } = {
                        'weprif': AttrTypeId.Rifle,
                        'wepbaz': AttrTypeId.Bazooka,
                        'weptwn': AttrTypeId.Twin,
                        'wepsnp': AttrTypeId.Sniper,
                        'wepswr': AttrTypeId.Sword,
                        'wephmr': AttrTypeId.Hammer,
                        'wepsqr': AttrTypeId.Spear,
                        'wepdgr': AttrTypeId.Dagger,
                        'wepcqc': AttrTypeId.HandGun
                    };
                    return characterWepType === wepMap[filter.value];
                });
                if (isMatch) matchCount++;
            }
        }

        // 檢查生日匹配（使用 cm.birthdayMonth）
        const birthdayFilters = this.filterCriteria.birthday.filter(f => f.value !== 'all');
        if (birthdayFilters.length > 0) {
            const isMatch = birthdayFilters.some(filter => {
                if (filter.value === 'bdunk') {
                    return cm.birthdayMonth < 1 || cm.birthdayMonth > 12;
                } else {
                    const month = parseInt(filter.value.replace('bd', ''));
                    return cm.birthdayMonth === month;
                }
            });
            if (isMatch) matchCount++;
        }

        // 檢查血型匹配（使用 cm.bloodType）
        const bloodTypeFilters = this.filterCriteria.bloodType.filter(f => f.value !== 'all');
        if (bloodTypeFilters.length > 0) {
            const isMatch = bloodTypeFilters.some(filter => {
                if (filter.value === 'bloodunk') {
                    return !['A', 'B', 'O', 'AB'].includes(cm.bloodType);
                } else {
                    const bloodTypeMap: { [key: string]: string } = {
                        'blooda': 'A',
                        'bloodb': 'B',
                        'bloodo': 'O',
                        'bloodab': 'AB'
                    };
                    return cm.bloodType === bloodTypeMap[filter.value];
                }
            });
            if (isMatch) matchCount++;
        }

        return matchCount;
    }

    // 檢查篩選條件（支援多條件 OR 邏輯）
    private checkFilterCriteria(
        cm: Character,
        filterType: string,
        filters: { value: string }[],
        checkFn: (cm: Character, value: string) => boolean
    ): boolean {
        // 取得所有非 'all' 的篩選條件
        const activeFilters = filters.filter(f => f.value !== 'all');

        // 如果沒有任何非 'all' 的篩選條件，表示全選，通過篩選
        if (activeFilters.length === 0) {
            return true;
        }

        // 如果有多個條件，使用 OR 邏輯：任一條件符合即通過
        return activeFilters.some(filter => checkFn(cm, filter.value));
    }

    // 新增篩選條件
    addFilter(filterType: 'attribute' | 'emission' | 'weapon' | 'birthday' | 'bloodType'): void {
        this.filterCriteria[filterType].push({ value: 'all' });
    }

    // 移除篩選條件
    removeFilter(filterType: 'attribute' | 'emission' | 'weapon' | 'birthday' | 'bloodType', index: number): void {
        if (this.filterCriteria[filterType].length > 1) {
            this.filterCriteria[filterType].splice(index, 1);
            this.onFilterChange();
        }
    }

    // 篩選設定變更處理
    onFilterChange(): void {
        this.applyFilters();
    }

    // 清除全部篩選條件
    clearAllFilters(): void {
        // 恢復所有基本篩選為全選
        this.filterSettings = {
            home: true,
            collabo: true,
            normal: true,
            another: true,
            factor: true,
            stellar: true,
            backup: true,
            volt: true,
            gravity: true,
            fire: true,
            ice: true,
            emission1: true,
            emission2: true,
            emission3: true,
            emission4: true,
            emission5: true,
            weprif: true,
            wepbaz: true,
            weptwn: true,
            wepsnp: true,
            wepswr: true,
            wephmr: true,
            wepsqr: true,
            wepdgr: true,
            wepcqc: true,
            bd1: true,
            bd2: true,
            bd3: true,
            bd4: true,
            bd5: true,
            bd6: true,
            bd7: true,
            bd8: true,
            bd9: true,
            bd10: true,
            bd11: true,
            bd12: true,
            bdunk: true,
            blooda: true,
            bloodb: true,
            bloodo: true,
            bloodab: true,
            bloodunk: true,
        };

        // 重置所有多條件篩選為單一 'all' 選項
        this.filterCriteria = {
            attribute: [{ value: 'all' }],
            emission: [{ value: 'all' }],
            weapon: [{ value: 'all' }],
            birthday: [{ value: 'all' }],
            bloodType: [{ value: 'all' }]
        };

        // 重置預設篩選選項
        this.selectedPresetFilter = 'all';

        // 應用篩選
        this.applyFilters();
    }

    // 預設篩選選項變更處理
    onPresetFilterChange(): void {
        if (this.selectedPresetFilter === 'custom') {
            // 自訂模式不做任何改變
            return;
        }

        // 找到選中的預設篩選配置
        const selectedPreset = this.presetFilters.find(preset => preset.value === this.selectedPresetFilter);
        if (!selectedPreset) {
            return;
        }

        // 先將所有篩選條件重置為 'all'
        this.filterCriteria = {
            attribute: [{ value: 'all' }],
            emission: [{ value: 'all' }],
            weapon: [{ value: 'all' }],
            birthday: [{ value: 'all' }],
            bloodType: [{ value: 'all' }]
        };

        // 只設定非 'all' 的篩選條件
        const presetFilter = selectedPreset.filter;

        // 設定屬性篩選
        if (presetFilter.attribute?.some(item => item.value !== 'all')) {
            this.filterCriteria.attribute = presetFilter.attribute.filter(item => item.value !== 'all');
        }

        // 設定放出類型篩選
        if (presetFilter.emission?.some(item => item.value !== 'all')) {
            this.filterCriteria.emission = presetFilter.emission.filter(item => item.value !== 'all');
        }

        // 設定武器篩選
        if (presetFilter.weapon?.some(item => item.value !== 'all')) {
            this.filterCriteria.weapon = presetFilter.weapon.filter(item => item.value !== 'all');
        }

        // 設定生日篩選
        if (presetFilter.birthday?.some(item => item.value !== 'all')) {
            this.filterCriteria.birthday = presetFilter.birthday.filter(item => item.value !== 'all');
        }

        // 設定血型篩選
        if (presetFilter.bloodType?.some(item => item.value !== 'all')) {
            this.filterCriteria.bloodType = presetFilter.bloodType.filter(item => item.value !== 'all');
        }

        // 應用篩選
        this.onFilterChange();
    }

    // 切換篩選面板展開/收起
    toggleFilterPanel(): void {
        this.isFilterPanelExpanded = !this.isFilterPanelExpanded;
    }

    // 獲取屬性類型對應的顏色
    getAttrTypeColor(attrType: string): string {
        switch (attrType) {
            case 'volt':
                return AttrTypeColor.Volt;
            case 'gravity':
                return AttrTypeColor.Gravity;
            case 'fire':
                return AttrTypeColor.Fire;
            case 'ice':
                return AttrTypeColor.Ice;
            default:
                return '#000000';
        }
    }

    /**
     * 取得角色的共鳴匹配次數
     * @param cm 角色模型
     * @returns 匹配次數
     */
    getCharacterMatchCount(cm: Character): number {
        return this.characterMatchCountMap.get(cm) || 0;
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
        const currentIndex = this.filteredCharacterModels.findIndex(c => c.cid === cm.cid);

        if (event?.shiftKey && this.lastSelectedIndex !== -1) {
            // Shift+click: Select or deselect range based on the last selected character's state
            const startIndex = Math.min(this.lastSelectedIndex, currentIndex);
            const endIndex = Math.max(this.lastSelectedIndex, currentIndex);

            // 檢查範圍起始角色（lastSelectedIndex）的當前狀態
            const lastSelectedCharacter = this.filteredCharacterModels[this.lastSelectedIndex];
            const shouldSelect = this.selectedCharacterId.has(lastSelectedCharacter.cid);

            for (let i = startIndex; i <= endIndex; i++) {
                const characterCid = this.filteredCharacterModels[i].cid;
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
        this.filteredCharacterModels.forEach(cm => {
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
        this.filteredCharacterModels.forEach(cm => {
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

    // 取得要顯示的角色列表（根據只顯示持有角色設定）
    get displayedCharacterModels(): Character[] {
        if (this.onlyShowOwned) {
            return this.filteredCharacterModels.filter(cm => this.selectedCharacterId.has(cm.cid));
        }
        return this.filteredCharacterModels;
    }

    getSelectionPercentage(): string {
        if (this.filteredCharacterModels.length === 0) {
            return '0';
        }
        // 計算篩選後角色中被選中的百分比
        const selectedInFiltered = this.filteredCharacterModels.filter(cm =>
            this.selectedCharacterId.has(cm.cid)
        ).length;
        const percentage = (selectedInFiltered / this.filteredCharacterModels.length) * 100;
        return percentage.toFixed(1);
    }

    // 檢查角色是否為 Shift 選擇的起始點
    isLastSelectedCharacter(cm: Character): boolean {
        if (this.lastSelectedIndex === -1) return false;
        const currentIndex = this.filteredCharacterModels.findIndex(c => c.cid === cm.cid);
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
                    loadedData.lastSelectedIndex < this.filteredCharacterModels.length) {
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
                    selectionData.lastSelectedIndex < this.filteredCharacterModels.length) {
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

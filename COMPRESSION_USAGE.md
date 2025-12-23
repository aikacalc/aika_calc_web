# CompressionService 使用說明

## 新增功能

### 1. 字串壓縮為 Base64 網址

`CompressionService` 新增了以下方法來支援字串壓縮和分享網址功能：

#### 基本壓縮/解壓縮方法

```typescript
// 將字串壓縮為 Base64
compressStringToBase64(text: string): string

// 從 Base64 解壓縮字串
decompressStringFromBase64(base64String: string): string
```

#### 分享網址功能

```typescript
// 產生包含壓縮資料的分享網址
generateShareUrl(data: any, baseUrl?: string, paramName: string = 'data'): string

// 從網址載入壓縮資料
loadDataFromUrl<T = any>(paramName: string = 'data', url?: string): T | null

// 優先從網址讀取，沒有時從本地儲存載入
loadDataWithPriority<T = any>(localStorageKey: string, urlParamName: string = 'data', url?: string): T | null
```

### 2. AikaGachaCalcComponent 整合

在 Gacha 計算器中新增了以下功能：

#### 新增按鈕
- **複製分享網址**：將當前選擇狀態壓縮並產生分享網址，自動複製到剪貼簿

#### 資料載入優先級（已修改）
1. **網址載入優先**：首先檢查網址是否有 `selection` 參數，如果有則忽略本地儲存
2. **本地儲存備用**：只有當網址沒有參數時，才使用本地儲存的資料
3. **自動儲存**：從網址載入的資料會自動儲存到本地儲存

#### 新的浮點數編碼格式
- **編碼格式**：`chr_id.chr_type`（例如：1.01, 2.03, 15.02）
- **不記錄最後選擇**：網址分享不包含最後選擇的角色索引
- **更緊湊**：比 JSON 格式更節省網址長度

## 使用範例

### 基本使用

```typescript
constructor(private compressionService: CompressionService) {}

// 壓縮資料並產生分享網址
const data = { selectedItems: [1, 2, 3], settings: { mode: 'advanced' } };
const shareUrl = this.compressionService.generateShareUrl(data);
console.log(shareUrl); 
// 輸出：https://example.com?data=eJyrVkosLcmIz8nPS1WyUirOyC9NScwr0YFQ6hVpILaOkpKOUllOyoFjRfkKafVJOZkKJalFSYV5JZUF6YsQKJJ

// 從網址載入資料
const loadedData = this.compressionService.loadDataFromUrl('data');
console.log(loadedData); // { selectedItems: [1, 2, 3], settings: { mode: 'advanced' } }
```

### 優先載入模式

```typescript
// 網址優先，沒有時從本地儲存載入
const data = this.compressionService.loadDataWithPriority(
    'my-app-settings',  // localStorage key
    'config'           // URL parameter name
);
```

### 浮點數編碼格式

在 Gacha 計算器中，選擇的角色會被編碼為浮點數格式：

```
chr_id=1, chr_type=1  → 1.01
chr_id=2, chr_type=3  → 2.03
chr_id=15, chr_type=2 → 15.02
```

多個角色選擇會被編碼為逗號分隔的字串：
```
"1.01,2.03,15.02"
```

然後進行壓縮並編碼為 Base64 網址參數。

## 分享網址範例

當用戶在 Gacha 計算器中選擇角色後，點擊「複製分享網址」會產生類似以下的網址：

```
https://your-app.com/aika-gacha-calc?selection=eJyVUr1uwzAMfBWB65JIFMmQbyGLgXZp0g...
```

其他用戶訪問此網址時，應用程式會自動：
1. 從網址參數 `selection` 解壓縮浮點數字串
2. 解析每個浮點數得到 `chr_id` 和 `chr_type`
3. 恢復相同的角色選擇狀態
4. 將資料儲存到本地儲存以供下次使用

## 技術細節

### 壓縮演算法
- 使用 **Zlib** 格式進行資料壓縮
- 採用 **URL 安全的 Base64** 編碼（替換 `+` 為 `-`，`/` 為 `_`，移除 `=` padding）
- 適合在網址中傳遞，避免特殊字元問題

### 浮點數編碼優勢
- **更緊湊**：比 JSON 格式節省更多空間
- **唯一性**：基於角色的固定序號，不受 cid 變動影響
- **簡潔**：直接的數值表示，易於理解和除錯

### 載入優先級
- **網址優先**：確保分享連結的一致性
- **自動回退**：支援舊版本資料格式的相容性
- **智慧快取**：網址資料會自動更新本地儲存

### 錯誤處理
- 所有方法都包含完整的錯誤處理
- 失敗時會在 console 輸出詳細錯誤訊息
- 載入失敗時有降級處理機制

### 瀏覽器相容性
- 支援現代瀏覽器的 Clipboard API
- 提供降級方案支援舊版瀏覽器
- 使用標準的 Web API，無額外依賴

## 安全考量

- 資料僅在客戶端進行壓縮/解壓縮
- 不會傳送敏感資訊到伺服器
- 壓縮後的資料不包含個人識別資訊
- 使用標準的壓縮演算法，資料透明度高

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as pako from 'pako';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CompressionService {

    constructor(private http: HttpClient) { }
    /**
     * 使用 Zlib 格式壓縮字串並返回 Blob 物件
     * @param text 要壓縮的字串
     * @returns Blob 包含 Zlib 格式壓縮後的二進制資料
     */
    compressZlibToBlob(text: string): Blob {
        const utf8 = new TextEncoder().encode(text);
        const compressedData = pako.deflate(utf8, { raw: false }); // raw: false 表示使用 zlib 封裝
        return new Blob([compressedData], { type: 'application/octet-stream' });
    }

    /**
     * 從 Blob 物件解壓縮 Zlib 格式壓縮的資料並返回原始字串
     * @param blob 包含 Zlib 格式壓縮資料的 Blob 物件
     * @returns Promise<string> 解壓縮後的原始字串
     */
    async decompressZlibFromBlob(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const compressedArray = new Uint8Array(reader.result as ArrayBuffer);
                    const decompressedData = pako.inflate(compressedArray, { raw: false }); // raw: false 表示輸入是 zlib 封裝的
                    resolve(new TextDecoder().decode(decompressedData));
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader.readAsArrayBuffer(blob);
        });
    }

    /**
     * 觸發瀏覽器下載 Blob 物件
     * @param blob 要下載的 Blob 物件
     * @param filename 下載的檔案名稱
     */
    downloadBlob(blob: Blob, filename: string): void {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
    async decompressZlibFromAsset(assetPath: string): Promise<Uint8Array> {
        try {
            console.log('從資產解壓縮 Zlib 文件:', assetPath);
            // 使用 HttpClient 以 ArrayBuffer 格式獲取資產文件
            const response = await firstValueFrom(
                this.http.get(assetPath, { responseType: 'arraybuffer', })
            );
            const compressedArray = new Uint8Array(response);

            // 使用 pako 解壓縮 zlib 格式的資料 (raw: false 表示輸入是 zlib 封裝的)
            const decompressedData = pako.inflate(compressedArray, { raw: false });
            return decompressedData;
            // 將解壓縮後的 Uint8Array 轉換為字串
            // return new TextDecoder().decode(decompressedData);
        } catch (error) {
            console.error('從資產解壓縮 Zlib 文件時發生錯誤:', assetPath, '\n', error);
            throw error;
        }
    }

    /**
     * 將字串壓縮並編碼為 Base64，用於產生分享網址
     * @param text 要壓縮的字串
     * @returns 壓縮後的 Base64 字串
     */
    compressStringToBase64(text: string): string {
        try {
            const utf8 = new TextEncoder().encode(text);
            const compressedData = pako.deflate(utf8, { raw: false }); // 使用 zlib 格式

            // 將壓縮後的二進制資料轉換為 Base64
            const base64String = btoa(String.fromCharCode(...compressedData));

            // 使用 URL 安全的 Base64 編碼
            return base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        } catch (error) {
            console.error('字串壓縮為 Base64 時發生錯誤:', error);
            throw error;
        }
    }

    /**
     * 從 Base64 字串解壓縮還原原始字串
     * @param base64String Base64 編碼的壓縮字串
     * @returns 解壓縮後的原始字串
     */
    decompressStringFromBase64(base64String: string): string {
        try {
            // 還原 URL 安全的 Base64 編碼
            let normalizedBase64 = base64String.replace(/-/g, '+').replace(/_/g, '/');

            // 補齊 Base64 padding
            while (normalizedBase64.length % 4) {
                normalizedBase64 += '=';
            }

            // 將 Base64 解碼為二進制資料
            const binaryString = atob(normalizedBase64);
            const compressedArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                compressedArray[i] = binaryString.charCodeAt(i);
            }

            // 使用 pako 解壓縮
            const decompressedData = pako.inflate(compressedArray, { raw: false });
            return new TextDecoder().decode(decompressedData);
        } catch (error) {
            console.error('從 Base64 解壓縮字串時發生錯誤:', error);
            throw error;
        }
    }

    /**
     * 產生包含壓縮資料的分享網址
     * @param data 要壓縮的資料物件
     * @param baseUrl 基礎網址（預設為當前頁面網址）
     * @param paramName 查詢參數名稱（預設為 'data'）
     * @returns 包含壓縮資料的完整網址
     */
    generateShareUrl(data: any, baseUrl?: string, paramName: string = 'data'): string {
        try {
            const jsonString = JSON.stringify(data);
            const compressedBase64 = this.compressStringToBase64(jsonString);

            const currentUrl = baseUrl || window.location.href.split('?')[0];
            const url = new URL(currentUrl);
            url.searchParams.set(paramName, compressedBase64);

            return url.toString();
        } catch (error) {
            console.error('產生分享網址時發生錯誤:', error);
            throw error;
        }
    }

    /**
     * 從網址查詢參數中讀取並解壓縮資料
     * @param paramName 查詢參數名稱（預設為 'data'）
     * @param url 要解析的網址（預設為當前頁面網址）
     * @returns 解壓縮後的資料物件，如果沒有找到參數則返回 null
     */
    loadDataFromUrl<T = any>(paramName: string = 'data', url?: string): T | null {
        try {
            const currentUrl = url || window.location.href;
            const urlObject = new URL(currentUrl);
            const compressedData = urlObject.searchParams.get(paramName);

            if (!compressedData) {
                return null;
            }

            const decompressedString = this.decompressStringFromBase64(compressedData);
            return JSON.parse(decompressedString) as T;
        } catch (error) {
            console.error('從網址載入資料時發生錯誤:', error);
            return null;
        }
    }

    /**
     * 優先從網址讀取資料，如果網址沒有則從本地儲存讀取
     * @param localStorageKey 本地儲存的鍵值
     * @param urlParamName 網址查詢參數名稱
     * @param url 要解析的網址（預設為當前頁面網址）
     * @returns 讀取到的資料物件，網址優先，如果都沒有則返回 null
     */
    loadDataWithPriority<T = any>(localStorageKey: string, urlParamName: string = 'data', url?: string): T | null {
        try {
            // 1. 優先檢查網址是否有參數
            const urlData = this.loadDataFromUrl<T>(urlParamName, url);
            if (urlData) {
                console.log(`從網址載入資料: ${urlParamName}`);
                // 自動儲存到本地儲存以供下次使用
                localStorage.setItem(localStorageKey, JSON.stringify(urlData));
                return urlData;
            }

            // 2. 如果網址沒有資料，嘗試從本地儲存讀取
            const localData = localStorage.getItem(localStorageKey);
            if (localData) {
                try {
                    const parsedData = JSON.parse(localData) as T;
                    console.log(`從本地儲存載入資料: ${localStorageKey}`);
                    return parsedData;
                } catch (error) {
                    console.warn('本地儲存資料解析失敗:', error);
                }
            }

            return null;
        } catch (error) {
            console.error('載入資料時發生錯誤:', error);
            return null;
        }
    }
}

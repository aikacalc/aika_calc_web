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
    async decompressZlibFromAsset(assetPath: string): Promise<string> {
        try {
            // 使用 HttpClient 以 ArrayBuffer 格式獲取資產文件
            const response = await firstValueFrom(
                this.http.get(assetPath, { responseType: 'arraybuffer' })
            );
            const compressedArray = new Uint8Array(response);

            // 使用 pako 解壓縮 zlib 格式的資料 (raw: false 表示輸入是 zlib 封裝的)
            const decompressedData = pako.inflate(compressedArray, { raw: false });

            // 將解壓縮後的 Uint8Array 轉換為字串
            return new TextDecoder().decode(decompressedData);
        } catch (error) {
            console.error('從資產解壓縮 Zlib 文件時發生錯誤:', error);
            throw error;
        }
    }
}

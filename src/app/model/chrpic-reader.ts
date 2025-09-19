export interface CharacterPicture {
    cid: number;
    imageData: Uint8Array;
    imageUrl?: string; // Base64 data URL for display
}

export class ChrpicReader {
    /**
     * 讀取並解析 chrpic.bin 檔案
     * @param buffer chrpic.bin 檔案的 Uint8Array
     * @returns 角色圖片陣列
     */
    static readChrpicBin(buffer: Uint8Array): CharacterPicture[] {
        const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        const pictures: CharacterPicture[] = [];

        let offset = 0;

        while (offset < buffer.length) {
            // 確保還有足夠的字節讀取頭部 (8 字節)
            if (offset + 8 > buffer.length) {
                break;
            }

            // 讀取頭部 - cid (4 字節) + 圖片數據長度 (4 字節)
            const cid = dataView.getUint32(offset, true); // little-endian
            const dataLength: number = Number(dataView.getUint32(offset + 4, true)); // little-endian

            offset += 8; // 跳過頭部

            // 確保還有足夠的字節讀取圖片數據
            if (offset + dataLength > buffer.length) {
                console.warn(`Invalid data length at offset ${offset - 8}: ${dataLength}`);
                break;
            }

            // 讀取圖片數據
            const imageData = buffer.slice(offset, offset + dataLength);

            // 創建 Base64 data URL 供顯示使用
            const blob = new Blob([imageData], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);

            pictures.push({
                cid,
                imageData,
                imageUrl
            });

            offset += dataLength;
        }

        return pictures;
    }
}

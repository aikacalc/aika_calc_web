export interface CharacterPicture {
    cid: number; // 對應CharacterModel的cid，未來角色更新這cid會變動
    chr_id: number; // 對應角色的固定序號
    chr_type: number; // 對應角色類型的固定序號
    imageData: Uint8Array;
    imageUrl?: string; // Base64 data URL for display
}

/**
 * 角色圖片的輔助類別，提供實用方法
 */
export class CharacterPictureHelper {
    /**
     * 生成角色的固定序號字串
     * @param chr_id 角色固定序號
     * @param chr_type 角色類型固定序號
     * @returns 格式化的字串，例如 "001_01"
     */
    static getCharacterKey(chr_id: number, chr_type: number): string {
        return `${chr_id.toString().padStart(3, '0')}_${chr_type.toString().padStart(2, '0')}`;
    }

    /**
     * 從 CharacterPicture 物件生成固定序號字串
     * @param picture CharacterPicture 物件
     * @returns 格式化的字串
     */
    static getCharacterKeyFromPicture(picture: CharacterPicture): string {
        return this.getCharacterKey(picture.chr_id, picture.chr_type);
    }
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
            // 確保還有足夠的字節讀取頭部 (12 字節: cid(4) + chr_id(2) + chr_type(2) + dataLength(4))
            if (offset + 12 > buffer.length) {
                break;
            }

            // 讀取頭部 - cid (4 字節) + chr_id (2 字節) + chr_type (2 字節) + 圖片數據長度 (4 字節)
            const cid = dataView.getUint32(offset, true); // little-endian
            const chr_id = dataView.getUint16(offset + 4, true); // little-endian
            const chr_type = dataView.getUint16(offset + 6, true); // little-endian
            const dataLength: number = Number(dataView.getUint32(offset + 8, true)); // little-endian

            offset += 12; // 跳過頭部

            // 確保還有足夠的字節讀取圖片數據
            if (offset + dataLength > buffer.length) {
                console.warn(`Invalid data length at offset ${offset - 12}: ${dataLength}`);
                break;
            }

            // 讀取圖片數據
            const imageData = buffer.slice(offset, offset + dataLength);

            // 創建 Base64 data URL 供顯示使用
            const blob = new Blob([imageData], { type: 'image/jpeg' });
            const imageUrl = URL.createObjectURL(blob);

            pictures.push({
                cid,
                chr_id,
                chr_type,
                imageData,
                imageUrl
            });

            offset += dataLength;
        }

        return pictures;
    }
}

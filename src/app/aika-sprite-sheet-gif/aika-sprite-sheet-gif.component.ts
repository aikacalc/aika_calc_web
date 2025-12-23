import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GIF from 'gif.js';

interface CropRegion {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
}

interface Frame {
    id: number;
    canvas: HTMLCanvasElement;
    imageData: ImageData;
    selected: boolean;
    delay: number; // 延遲時間 (毫秒)
    anchorX: number; // 錨點 X (相對於圖片寬度的比例 0-1)
    anchorY: number; // 錨點 Y (相對於圖片高度的比例 0-1)
    cropRegionId: number; // 來源裁切區域 ID
}

@Component({
    selector: 'app-aika-sprite-sheet-gif',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './aika-sprite-sheet-gif.component.html',
    styleUrl: './aika-sprite-sheet-gif.component.scss'
})
export class AikaSpriteSheetGifComponent {
    @ViewChild('sourceCanvas', { static: false }) sourceCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('previewCanvas', { static: false }) previewCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;

    sourceImage: HTMLImageElement | null = null;
    cropRegions: CropRegion[] = [];
    frames: Frame[] = [];
    nextCropRegionId = 1;
    nextFrameId = 1;

    // 全域設定
    globalDelay = 100; // 毫秒
    globalAnchorX = 0.5; // 中間
    globalAnchorY = 1.0; // 底部

    // 自動偵測設定
    blackThreshold = 50; // 黑線偵測閾值
    minCellSize = 10; // 最小格子大小

    // 手動裁切設定
    editingCropRegion: CropRegion | null = null;
    newCropRegion: Partial<CropRegion> = {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        name: '新裁切區域'
    };

    // 預覽設定
    isPreviewPlaying = false;
    previewFrameIndex = 0;
    previewInterval: any = null;
    maxCanvasWidth = 800;
    maxCanvasHeight = 600;

    // GIF 生成
    isGenerating = false;
    generatedGifUrl: string | null = null;

    // 選擇的圖框 ID
    selectedFrameId: number | null = null;

    constructor(private cdr: ChangeDetectorRef) { }

    // 載入圖片
    onFileSelect(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = (e: ProgressEvent<FileReader>) => {
                const img = new Image();
                img.onload = () => {
                    this.sourceImage = img;
                    this.cdr.detectChanges();
                    setTimeout(() => {
                        this.drawSourceImage();
                    }, 0);
                };
                img.src = e.target?.result as string;
            };

            reader.readAsDataURL(file);
        }
    }

    // 繪製原始圖片到 canvas
    drawSourceImage(): void {
        if (!this.sourceImage) {
            console.error('No source image');
            return;
        }

        if (!this.sourceCanvas) {
            console.error('Canvas not initialized');
            return;
        }

        const canvas = this.sourceCanvas.nativeElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('Cannot get canvas context');
            return;
        }

        canvas.width = this.sourceImage.width;
        canvas.height = this.sourceImage.height;

        ctx.drawImage(this.sourceImage, 0, 0);

        console.log('Image drawn:', this.sourceImage.width, 'x', this.sourceImage.height);

        // 繪製裁切區域
        this.drawCropRegions();
    }

    // 繪製裁切區域框
    drawCropRegions(): void {
        if (!this.sourceCanvas || !this.sourceImage) return;

        const canvas = this.sourceCanvas.nativeElement;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        // 重繪圖片
        ctx.drawImage(this.sourceImage, 0, 0);

        // 繪製每個裁切區域
        this.cropRegions.forEach(region => {
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            ctx.strokeRect(region.x, region.y, region.width, region.height);

            // 繪製標籤
            ctx.fillStyle = '#00ff00';
            ctx.font = '14px Arial';
            ctx.fillText(region.name, region.x + 5, region.y + 20);
        });
    }

    // 假設這是您的元件或服務類別中的方法

// 定義一個內部輔助方法，用於尋找並合併相鄰的線。
// 這個方法將取代原有的 this.mergeLines(lines)
private getMergedLines(lines: number[], maxGap: number): number[] {
    if (lines.length === 0) return [];

    const sortedLines = [...new Set(lines)].sort((a, b) => a - b);
    const mergedLines: number[] = [];

    let currentStart = sortedLines[0];
    let currentEnd = sortedLines[0];

    for (let i = 1; i < sortedLines.length; i++) {
        const line = sortedLines[i];
        // 如果當前線和前一條線的距離小於或等於 maxGap (例如 2 像素)
        if (line - currentEnd <= maxGap) {
            currentEnd = line; // 延長當前線段
        } else {
            // 線段中斷，將線段的中心點作為合併後的線位置
            mergedLines.push(Math.round((currentStart + currentEnd) / 2));
            currentStart = line;
            currentEnd = line;
        }
    }
    // 處理最後一條線段
    mergedLines.push(Math.round((currentStart + currentEnd) / 2));

    return mergedLines;
}

// 強化後的自動偵測分割代碼
autoDetectCells(): void {
    if (!this.sourceImage || !this.sourceCanvas) return;

    const canvas = this.sourceCanvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const BLACK_THRESHOLD = this.blackThreshold || 50; // 假設一個預設值，確保已定義
    const MERGE_GAP = 2; // 相鄰線的合併距離，通常是 1-3 像素
    const MIN_CELL_WIDTH = this.minCellSize || 30; // 最小格子尺寸
    const MIN_CELL_HEIGHT = this.minCellSize || 30;

    // --- 1. 偵測並確定穩定的 **水平行 (Row)** 邊界 ---
    // 由於水平線貫穿整張圖，偵測較為可靠。
    const horizontalLines: number[] = [];
    const H_THRESHOLD_RATIO = 0.8; // 水平線：整行 80% 必須是黑色

    for (let y = 0; y < canvas.height; y++) {
        let blackPixelCount = 0;
        for (let x = 0; x < canvas.width; x++) {
            const idx = (y * canvas.width + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            if (r < BLACK_THRESHOLD && g < BLACK_THRESHOLD && b < BLACK_THRESHOLD) {
                blackPixelCount++;
            }
        }

        if (blackPixelCount > canvas.width * H_THRESHOLD_RATIO) {
            horizontalLines.push(y);
        }
    }

    // 合併相鄰的水平線，確定每一行的 y 座標
    const rowYCoords = this.getMergedLines(horizontalLines, MERGE_GAP);
    // 加上圖片的頂部和底部邊界，確保捕捉到第一行和最後一行
    if (rowYCoords[0] !== 0) rowYCoords.unshift(0);
    if (rowYCoords[rowYCoords.length - 1] !== canvas.height) rowYCoords.push(canvas.height);


    // --- 2. 在每一行內 **獨立地** 偵測垂直列 (Column) 邊界 ---
    this.cropRegions = [];
    let nextId = this.nextCropRegionId || 1;

    for (let i = 0; i < rowYCoords.length - 1; i++) {
        const rowStart = rowYCoords[i];
        const rowEnd = rowYCoords[i + 1];
        const rowHeight = rowEnd - rowStart;

        // 如果行高太小，可能是噪點，跳過
        if (rowHeight < MIN_CELL_HEIGHT) continue;

        const verticalLinesInRow: number[] = [];
        const V_THRESHOLD_RATIO = 0.5; // 垂直線：在當前行高範圍內 50% 必須是黑色 (調高以避免誤判)

        for (let x = 0; x < canvas.width; x++) {
            let blackPixelCount = 0;
            for (let y = rowStart; y < rowEnd; y++) {
                const idx = (y * canvas.width + x) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];

                if (r < BLACK_THRESHOLD && g < BLACK_THRESHOLD && b < BLACK_THRESHOLD) {
                    blackPixelCount++;
                }
            }

            // 判斷該列是否為垂直線 (在該行區域內達到 V_THRESHOLD_RATIO)
            if (blackPixelCount > rowHeight * V_THRESHOLD_RATIO) {
                verticalLinesInRow.push(x);
            }
        }

        // 合併相鄰的垂直線，確定該行內的 x 座標
        let colXCoords = this.getMergedLines(verticalLinesInRow, MERGE_GAP);

        // 確保捕捉到該行內的第一列和最後一列
        if (colXCoords[0] !== 0) colXCoords.unshift(0);
        if (colXCoords[colXCoords.length - 1] !== canvas.width) colXCoords.push(canvas.width);

        // 移除重複的 0 或 width
        colXCoords = [...new Set(colXCoords)];


        // --- 3. 產生裁切區域 (Cells) ---
        for (let j = 0; j < colXCoords.length - 1; j++) {
            const x = colXCoords[j];
            const width = colXCoords[j + 1] - x;
            const y = rowStart;
            const height = rowHeight;

            if (width >= MIN_CELL_WIDTH && height >= MIN_CELL_HEIGHT) {
                this.cropRegions.push({
                    id: nextId++,
                    x,
                    y,
                    width,
                    height,
                    name: `格子 ${this.cropRegions.length + 1}`
                });
            }
        }
    }

    this.nextCropRegionId = nextId; // 更新下一個 ID
    this.drawCropRegions();
    this.cdr.markForCheck();
}

    // 合併相鄰的線
    mergeLines(lines: number[]): number[] {
        if (lines.length === 0) return [0];

        const merged: number[] = [0]; // 從 0 開始
        let lastLine = -10;

        for (const line of lines) {
            if (line - lastLine > 5) { // 間隔大於 5 像素才算新的線
                merged.push(line);
                lastLine = line;
            }
        }

        // 加入結尾
        if (this.sourceImage) {
            const lastMerged = merged[merged.length - 1];
            const maxDim = merged === lines ? this.sourceImage.width : this.sourceImage.height;
            if (maxDim - lastMerged > 5) {
                merged.push(maxDim);
            }
        }

        return merged;
    }

    // 新增手動裁切區域
    addManualCropRegion(): void {
        if (this.newCropRegion.x !== undefined &&
            this.newCropRegion.y !== undefined &&
            this.newCropRegion.width !== undefined &&
            this.newCropRegion.height !== undefined) {

            this.cropRegions.push({
                id: this.nextCropRegionId++,
                x: this.newCropRegion.x,
                y: this.newCropRegion.y,
                width: this.newCropRegion.width,
                height: this.newCropRegion.height,
                name: this.newCropRegion.name || `區域 ${this.cropRegions.length + 1}`
            });

            this.drawCropRegions();

            // 重置表單
            this.newCropRegion = {
                x: 0,
                y: 0,
                width: 100,
                height: 100,
                name: '新裁切區域'
            };
            this.cdr.markForCheck();
        }
    }

    // 刪除裁切區域
    deleteCropRegion(id: number): void {
        this.cropRegions = this.cropRegions.filter(r => r.id !== id);
        this.drawCropRegions();

        // 同時刪除該區域的所有圖框
        this.frames = this.frames.filter(f => f.cropRegionId !== id);
        this.cdr.markForCheck();
    }

    // 編輯裁切區域
    editCropRegion(region: CropRegion): void {
        this.editingCropRegion = { ...region };
    }

    // 儲存編輯的裁切區域
    saveCropRegion(): void {
        if (this.editingCropRegion) {
            const index = this.cropRegions.findIndex(r => r.id === this.editingCropRegion!.id);
            if (index !== -1) {
                this.cropRegions[index] = this.editingCropRegion;
                this.drawCropRegions();
                this.cdr.markForCheck();
            }
            this.editingCropRegion = null;
        }
    }

    // 取消編輯
    cancelEdit(): void {
        this.editingCropRegion = null;
    }

    // 從裁切區域生成圖框
    generateFramesFromRegion(regionId: number): void {
        const region = this.cropRegions.find(r => r.id === regionId);
        if (!region || !this.sourceCanvas) return;

        const sourceCanvas = this.sourceCanvas.nativeElement;
        const sourceCtx = sourceCanvas.getContext('2d')!;

        // 建立新的 canvas 來存放裁切的圖片
        const frameCanvas = document.createElement('canvas');
        frameCanvas.width = region.width;
        frameCanvas.height = region.height;
        const frameCtx = frameCanvas.getContext('2d')!;

        // 裁切圖片
        frameCtx.drawImage(
            sourceCanvas,
            region.x, region.y, region.width, region.height,
            0, 0, region.width, region.height
        );

        const imageData = frameCtx.getImageData(0, 0, region.width, region.height);

        // 建立新圖框
        this.frames.push({
            id: this.nextFrameId++,
            canvas: frameCanvas,
            imageData: imageData,
            selected: true,
            delay: this.globalDelay,
            anchorX: this.globalAnchorX,
            anchorY: this.globalAnchorY,
            cropRegionId: regionId
        });
    }

    // 從所有裁切區域生成圖框
    generateAllFrames(): void {
        this.frames = [];
        this.cropRegions.forEach(region => {
            this.generateFramesFromRegion(region.id);
        });
        this.cdr.markForCheck();
    }

    // 刪除圖框
    deleteFrame(id: number): void {
        this.frames = this.frames.filter(f => f.id !== id);
        this.cdr.markForCheck();
    }

    // 切換圖框選擇狀態
    toggleFrameSelection(id: number): void {
        const frame = this.frames.find(f => f.id === id);
        if (frame) {
            frame.selected = !frame.selected;
        }
    }

    // 選擇所有圖框
    selectAllFrames(): void {
        this.frames.forEach(f => f.selected = true);
    }

    // 取消選擇所有圖框
    deselectAllFrames(): void {
        this.frames.forEach(f => f.selected = false);
    }

    // 應用全域延遲到所有選中的圖框
    applyGlobalDelay(): void {
        this.frames.forEach(f => {
            if (f.selected) {
                f.delay = this.globalDelay;
            }
        });
    }

    // 應用全域錨點到所有選中的圖框
    applyGlobalAnchor(): void {
        this.frames.forEach(f => {
            if (f.selected) {
                f.anchorX = this.globalAnchorX;
                f.anchorY = this.globalAnchorY;
            }
        });
    }

    // 向上移動圖框
    moveFrameUp(index: number): void {
        if (index > 0) {
            [this.frames[index], this.frames[index - 1]] = [this.frames[index - 1], this.frames[index]];
        }
    }

    // 向下移動圖框
    moveFrameDown(index: number): void {
        if (index < this.frames.length - 1) {
            [this.frames[index], this.frames[index + 1]] = [this.frames[index + 1], this.frames[index]];
        }
    }

    // 開始預覽動畫
    startPreview(): void {
        if (this.frames.filter(f => f.selected).length === 0) {
            alert('請至少選擇一個圖框');
            return;
        }

        this.isPreviewPlaying = true;
        this.previewFrameIndex = 0;
        this.playNextPreviewFrame();
    }

    // 播放下一幀
    playNextPreviewFrame(): void {
        if (!this.isPreviewPlaying) return;

        const selectedFrames = this.frames.filter(f => f.selected);
        if (selectedFrames.length === 0) return;

        const frame = selectedFrames[this.previewFrameIndex];
        this.drawPreviewFrame(frame);

        this.previewInterval = setTimeout(() => {
            this.previewFrameIndex = (this.previewFrameIndex + 1) % selectedFrames.length;
            this.playNextPreviewFrame();
        }, frame.delay);
    }

    // 繪製預覽幀
    drawPreviewFrame(frame: Frame): void {
        if (!this.previewCanvas) return;

        const canvas = this.previewCanvas.nativeElement;
        const ctx = canvas.getContext('2d')!;

        // 找出所有選中圖框的最大尺寸
        const selectedFrames = this.frames.filter(f => f.selected);
        let maxWidth = 0;
        let maxHeight = 0;

        selectedFrames.forEach(f => {
            maxWidth = Math.max(maxWidth, f.canvas.width);
            maxHeight = Math.max(maxHeight, f.canvas.height);
        });

        canvas.width = Math.min(maxWidth, this.maxCanvasWidth);
        canvas.height = Math.min(maxHeight, this.maxCanvasHeight);

        // 清空畫布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 根據錨點計算繪製位置
        const anchorPixelX = frame.canvas.width * frame.anchorX;
        const anchorPixelY = frame.canvas.height * frame.anchorY;

        const canvasAnchorX = canvas.width * 0.5; // 畫布中心 X
        const canvasAnchorY = canvas.height * 1.0; // 畫布底部 Y

        const drawX = canvasAnchorX - anchorPixelX;
        const drawY = canvasAnchorY - anchorPixelY;

        ctx.drawImage(frame.canvas, drawX, drawY);
    }

    // 停止預覽
    stopPreview(): void {
        this.isPreviewPlaying = false;
        if (this.previewInterval) {
            clearTimeout(this.previewInterval);
            this.previewInterval = null;
        }
    }

    // 生成 GIF
    generateGif(): void {
        const selectedFrames = this.frames.filter(f => f.selected);
        if (selectedFrames.length === 0) {
            alert('請至少選擇一個圖框');
            return;
        }

        this.isGenerating = true;

        // 找出最大尺寸
        let maxWidth = 0;
        let maxHeight = 0;
        selectedFrames.forEach(f => {
            maxWidth = Math.max(maxWidth, f.canvas.width);
            maxHeight = Math.max(maxHeight, f.canvas.height);
        });

        const gif = new GIF({
            workers: 2,
            quality: 10,
            width: maxWidth,
            height: maxHeight,
            workerScript: '/gif.worker.js'
        });

        // 添加每一幀
        selectedFrames.forEach(frame => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = maxWidth;
            tempCanvas.height = maxHeight;
            const tempCtx = tempCanvas.getContext('2d')!;

            // 根據錨點繪製
            const anchorPixelX = frame.canvas.width * frame.anchorX;
            const anchorPixelY = frame.canvas.height * frame.anchorY;

            const canvasAnchorX = maxWidth * 0.5;
            const canvasAnchorY = maxHeight * 1.0;

            const drawX = canvasAnchorX - anchorPixelX;
            const drawY = canvasAnchorY - anchorPixelY;

            tempCtx.drawImage(frame.canvas, drawX, drawY);

            gif.addFrame(tempCanvas, { delay: frame.delay });
        });

        gif.on('finished', (blob: Blob) => {
            this.generatedGifUrl = URL.createObjectURL(blob);
            this.isGenerating = false;
            this.cdr.markForCheck();
        });

        gif.render();
    }

    // 下載 GIF
    downloadGif(): void {
        if (!this.generatedGifUrl) return;

        const a = document.createElement('a');
        a.href = this.generatedGifUrl;
        a.download = 'sprite-animation.gif';
        a.click();
    }

    // 選擇圖框用於編輯
    selectFrame(frameId: number): void {
        this.selectedFrameId = frameId;
    }

    // 取得選中的圖框
    getSelectedFrame(): Frame | null {
        if (this.selectedFrameId === null) return null;
        return this.frames.find(f => f.id === this.selectedFrameId) || null;
    }
}

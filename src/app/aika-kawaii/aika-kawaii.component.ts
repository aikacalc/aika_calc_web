import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Sticker {
  image: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  lockAspect: boolean;
}

@Component({
  selector: 'app-aika-kawaii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aika-kawaii.component.html',
  styleUrl: './aika-kawaii.component.scss'
})
export class AikaKawaiiComponent implements AfterViewInit {
  @ViewChild('editCanvas') editCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('resultCanvas') resultCanvasRef!: ElementRef<HTMLCanvasElement>;

  sourceImage: string | null = null;
  sourceImageElement: HTMLImageElement | null = null;

  availableStickers: string[] = [
    '/assets/aika001.png',
    // '/assets/aika002.png',
  ];

  stickers: Sticker[] = [];
  selectedSticker: number | null = null;

  private editCtx!: CanvasRenderingContext2D;
  private resultCtx!: CanvasRenderingContext2D;
  private isDragging = false;
  private dragOffsetX = 0;
  private dragOffsetY = 0;

  ngAfterViewInit() {
    const editCanvas = this.editCanvasRef.nativeElement;
    const resultCanvas = this.resultCanvasRef.nativeElement;

    this.editCtx = editCanvas.getContext('2d')!;
    this.resultCtx = resultCanvas.getContext('2d')!;

    // 設定預設 canvas 大小
    editCanvas.width = 800;
    editCanvas.height = 600;
    resultCanvas.width = 800;
    resultCanvas.height = 600;
  }

  @HostListener('window:paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          this.loadImageFromFile(blob);
        }
      }
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.loadImageFromFile(input.files[0]);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files[0]) {
      this.loadImageFromFile(files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  private loadImageFromFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.sourceImage = e.target?.result as string;

      // 載入圖片到 canvas
      const img = new Image();
      img.onload = () => {
        this.sourceImageElement = img;

        // 調整 canvas 大小以適應圖片
        const editCanvas = this.editCanvasRef.nativeElement;
        const resultCanvas = this.resultCanvasRef.nativeElement;

        editCanvas.width = img.width;
        editCanvas.height = img.height;
        resultCanvas.width = img.width;
        resultCanvas.height = img.height;

        this.redrawCanvas();
        this.updateResult();
      };
      img.src = this.sourceImage;
    };
    reader.readAsDataURL(file);
  }

  addSticker(stickerPath: string) {
    const img = new Image();
    img.onload = () => {
      const canvas = this.editCanvasRef.nativeElement;

      // 計算貼圖初始大小為來源圖片的約 20%
      const targetSize = Math.max(canvas.width, canvas.height) * 0.2;
      const stickerSize = Math.max(img.width, img.height);
      const initialScale = targetSize / stickerSize;

      const sticker: Sticker = {
        image: img,
        x: canvas.width / 2,
        y: canvas.height / 2,
        width: img.width,
        height: img.height,
        scaleX: initialScale,
        scaleY: initialScale,
        rotation: 0,
        lockAspect: true
      };
      this.stickers.push(sticker);
      this.selectedSticker = this.stickers.length - 1;
      this.redrawCanvas();
      this.updateResult();
    };
    img.src = stickerPath;
  }

  onCanvasMouseDown(event: MouseEvent) {
    const canvas = this.editCanvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    // 考慮 canvas 顯示縮放比例
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    // 檢查是否點擊到某個貼圖（從後往前檢查，優先選擇最上層的）
    for (let i = this.stickers.length - 1; i >= 0; i--) {
      const sticker = this.stickers[i];
      const halfWidth = (sticker.width * sticker.scaleX) / 2;
      const halfHeight = (sticker.height * sticker.scaleY) / 2;

      if (
        x >= sticker.x - halfWidth &&
        x <= sticker.x + halfWidth &&
        y >= sticker.y - halfHeight &&
        y <= sticker.y + halfHeight
      ) {
        this.selectedSticker = i;
        this.isDragging = true;
        this.dragOffsetX = x - sticker.x;
        this.dragOffsetY = y - sticker.y;
        this.redrawCanvas();
        return;
      }
    }

    // 沒有點擊到貼圖，取消選擇
    this.selectedSticker = null;
    this.redrawCanvas();
  }

  onCanvasMouseMove(event: MouseEvent) {
    if (!this.isDragging || this.selectedSticker === null) return;

    const canvas = this.editCanvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    // 考慮 canvas 顯示縮放比例
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    this.stickers[this.selectedSticker].x = x - this.dragOffsetX;
    this.stickers[this.selectedSticker].y = y - this.dragOffsetY;

    this.redrawCanvas();
    this.updateResult();
  }

  onCanvasMouseUp() {
    this.isDragging = false;
  }

  updateStickerScale(event: Event, axis: 'x' | 'y') {
    if (this.selectedSticker === null) return;

    const value = parseFloat((event.target as HTMLInputElement).value);
    const sticker = this.stickers[this.selectedSticker];

    if (axis === 'x') {
      sticker.scaleX = value;
      if (sticker.lockAspect) {
        sticker.scaleY = value;
      }
    } else {
      sticker.scaleY = value;
      if (sticker.lockAspect) {
        sticker.scaleX = value;
      }
    }

    this.redrawCanvas();
    this.updateResult();
  }

  toggleLockAspect() {
    if (this.selectedSticker === null) return;
    const sticker = this.stickers[this.selectedSticker];
    sticker.lockAspect = !sticker.lockAspect;

    if (sticker.lockAspect) {
      sticker.scaleY = sticker.scaleX;
      this.redrawCanvas();
      this.updateResult();
    }
  }

  updateStickerRotation(event: Event) {
    if (this.selectedSticker === null) return;

    const value = parseFloat((event.target as HTMLInputElement).value);
    this.stickers[this.selectedSticker].rotation = value;

    this.redrawCanvas();
    this.updateResult();
  }

  deleteSelectedSticker() {
    if (this.selectedSticker === null) return;

    this.stickers.splice(this.selectedSticker, 1);
    this.selectedSticker = null;

    this.redrawCanvas();
    this.updateResult();
  }

  private redrawCanvas() {
    const canvas = this.editCanvasRef.nativeElement;
    this.editCtx.clearRect(0, 0, canvas.width, canvas.height);

    // 繪製來源圖片
    if (this.sourceImageElement) {
      this.editCtx.drawImage(this.sourceImageElement, 0, 0);
    }

    // 繪製所有貼圖
    this.stickers.forEach((sticker, index) => {
      this.drawSticker(this.editCtx, sticker, index === this.selectedSticker);
    });
  }

  private drawSticker(ctx: CanvasRenderingContext2D, sticker: Sticker, isSelected: boolean) {
    ctx.save();

    // 移動到貼圖中心點
    ctx.translate(sticker.x, sticker.y);

    // 旋轉
    ctx.rotate((sticker.rotation * Math.PI) / 180);

    // 繪製貼圖
    const width = sticker.width * sticker.scaleX;
    const height = sticker.height * sticker.scaleY;
    ctx.drawImage(
      sticker.image,
      -width / 2,
      -height / 2,
      width,
      height
    );

    // 如果被選中，繪製邊框
    if (isSelected) {
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 2;
      ctx.strokeRect(-width / 2, -height / 2, width, height);
    }

    ctx.restore();
  }

  private updateResult() {
    const resultCanvas = this.resultCanvasRef.nativeElement;
    this.resultCtx.clearRect(0, 0, resultCanvas.width, resultCanvas.height);

    // 繪製來源圖片
    if (this.sourceImageElement) {
      this.resultCtx.drawImage(this.sourceImageElement, 0, 0);
    }

    // 繪製所有貼圖（不顯示選擇框）
    this.stickers.forEach((sticker) => {
      this.drawSticker(this.resultCtx, sticker, false);
    });
  }

  exportImage() {
    const resultCanvas = this.resultCanvasRef.nativeElement;
    const link = document.createElement('a');
    link.download = 'kawaii-image.png';
    link.href = resultCanvas.toDataURL();
    link.click();
  }
}

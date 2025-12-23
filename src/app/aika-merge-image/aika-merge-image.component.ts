import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ImageItem {
  file: File;
  preview: string;
  name: string;
  width: number;
  height: number;
}

@Component({
    selector: 'app-aika-merge-image',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-merge-image.component.html',
    styleUrl: './aika-merge-image.component.scss'
})
export class AikaMergeImageComponent implements OnInit {
  images: ImageItem[] = [];
  mergeDirection: 'horizontal' | 'vertical' = 'horizontal';
  imagesPerRow: number = 2;
  scaleFactor: number = 1;
  backgroundColor: string = '#ffffff';

  mergedImageUrl: string = '';
  mergedImageWidth: number = 0;
  mergedImageHeight: number = 0;

  ngOnInit() {}

  // 監聽全域 Ctrl+V 事件
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'v') {
      this.pasteFromClipboard();
    }
  }

  // 拖曳事件處理
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(Array.from(files));
    }
  }

  // 檔案選擇處理
  onFileSelect(event: any) {
    const files = event.target.files;
    if (files) {
      this.handleFiles(Array.from(files));
    }
  }

  // 處理檔案
  private handleFiles(files: File[]) {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const imageItem: ImageItem = {
              file: file,
              preview: e.target?.result as string,
              name: file.name,
              width: img.width,
              height: img.height
            };
            this.images.push(imageItem);
            this.updateMerge();
          };
          img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 從剪貼簿貼上圖片
  async pasteFromClipboard() {
    try {
      const items = await navigator.clipboard.read();
      for (const item of items) {
        if (item.types.includes('image/png') || item.types.includes('image/jpeg')) {
          const blob = await item.getType('image/png') || await item.getType('image/jpeg');
          const file = new File([blob], `clipboard-${Date.now()}.png`, { type: blob.type });
          this.handleFiles([file]);
        }
      }
    } catch (err) {
      console.log('無法從剪貼簿讀取圖片:', err);
    }
  }

  // 移動圖片順序
  moveImage(index: number, direction: 'up' | 'down') {
    if (direction === 'up' && index > 0) {
      [this.images[index], this.images[index - 1]] = [this.images[index - 1], this.images[index]];
    } else if (direction === 'down' && index < this.images.length - 1) {
      [this.images[index], this.images[index + 1]] = [this.images[index + 1], this.images[index]];
    }
    this.updateMerge();
  }

  // 移除圖片
  removeImage(index: number) {
    this.images.splice(index, 1);
    this.updateMerge();
  }

  // 更新合併結果
  updateMerge() {
    if (this.images.length === 0) {
      this.mergedImageUrl = '';
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 計算合併後的尺寸
    this.calculateMergedSize(canvas);

    // 設定背景
    if (this.backgroundColor !== '#transparent') {
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 繪製圖片
    let loadedImages = 0;
    const totalImages = this.images.length;

    this.images.forEach((imageItem, index) => {
      const img = new Image();
      img.onload = () => {
        const position = this.calculateImagePosition(index, img.width, img.height);
        ctx.drawImage(img, position.x, position.y, position.width, position.height);

        loadedImages++;
        if (loadedImages === totalImages) {
          // 所有圖片都載入完成，生成結果
          this.mergedImageUrl = canvas.toDataURL('image/jpeg', 0.9);
          this.mergedImageWidth = canvas.width;
          this.mergedImageHeight = canvas.height;
        }
      };
      img.src = imageItem.preview;
    });
  }

  // 計算合併後的畫布尺寸
  private calculateMergedSize(canvas: HTMLCanvasElement) {
    if (this.images.length === 0) return;

    let maxWidth = 0;
    let maxHeight = 0;
    let totalWidth = 0;
    let totalHeight = 0;

    // 找出最大尺寸作為基準
    this.images.forEach(img => {
      const scaledWidth = img.width * this.scaleFactor;
      const scaledHeight = img.height * this.scaleFactor;
      maxWidth = Math.max(maxWidth, scaledWidth);
      maxHeight = Math.max(maxHeight, scaledHeight);
    });

    if (this.mergeDirection === 'horizontal') {
      const rows = Math.ceil(this.images.length / this.imagesPerRow);
      canvas.width = maxWidth * this.imagesPerRow;
      canvas.height = maxHeight * rows;
    } else {
      const cols = Math.ceil(this.images.length / this.imagesPerRow);
      canvas.width = maxWidth * cols;
      canvas.height = maxHeight * this.imagesPerRow;
    }
  }

  // 計算單個圖片的位置和尺寸
  private calculateImagePosition(index: number, originalWidth: number, originalHeight: number) {
    const scaledWidth = originalWidth * this.scaleFactor;
    const scaledHeight = originalHeight * this.scaleFactor;

    let row: number, col: number;

    if (this.mergeDirection === 'horizontal') {
      row = Math.floor(index / this.imagesPerRow);
      col = index % this.imagesPerRow;
    } else {
      col = Math.floor(index / this.imagesPerRow);
      row = index % this.imagesPerRow;
    }

    // 找出該行/列的最大尺寸
    let maxWidth = 0;
    let maxHeight = 0;
    this.images.forEach(img => {
      maxWidth = Math.max(maxWidth, img.width * this.scaleFactor);
      maxHeight = Math.max(maxHeight, img.height * this.scaleFactor);
    });

    return {
      x: col * maxWidth + (maxWidth - scaledWidth) / 2,
      y: row * maxHeight + (maxHeight - scaledHeight) / 2,
      width: scaledWidth,
      height: scaledHeight
    };
  }

  // 下載合併後的圖片
  downloadMergedImage() {
    if (!this.mergedImageUrl) return;

    const link = document.createElement('a');
    link.download = `merged-image-${Date.now()}.jpg`;
    link.href = this.mergedImageUrl;
    link.click();
  }
}

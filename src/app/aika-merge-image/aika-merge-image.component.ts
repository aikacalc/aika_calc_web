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
  sizeMode: 'fixed' | 'dynamic' = 'fixed'; // fixed: 固定網格, dynamic: 動態尺寸

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

    if (this.sizeMode === 'fixed') {
      // 固定網格模式：每個格子大小相同
      let maxWidth = 0;
      let maxHeight = 0;

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
    } else {
      // 動態尺寸模式：由每行圖片的實際尺寸決定
      const rowCount = Math.ceil(this.images.length / this.imagesPerRow);
      let canvasWidth = 0;
      let canvasHeight = 0;

      if (this.mergeDirection === 'horizontal') {
        // 水平排列：計算每行的寬度和高度
        for (let row = 0; row < rowCount; row++) {
          const startIdx = row * this.imagesPerRow;
          const endIdx = Math.min(startIdx + this.imagesPerRow, this.images.length);
          const rowImages = this.images.slice(startIdx, endIdx);

          // 該行的總寬度
          const rowWidth = rowImages.reduce((sum, img) => sum + img.width * this.scaleFactor, 0);
          // 該行的最大高度
          const rowHeight = Math.max(...rowImages.map(img => img.height * this.scaleFactor));

          canvasWidth = Math.max(canvasWidth, rowWidth);
          canvasHeight += rowHeight;
        }
      } else {
        // 垂直排列：計算每列的寬度和高度
        for (let col = 0; col < rowCount; col++) {
          const colImages: ImageItem[] = [];
          for (let i = col; i < this.images.length; i += this.imagesPerRow) {
            colImages.push(this.images[i]);
          }

          // 該列的最大寬度
          const colWidth = Math.max(...colImages.map(img => img.width * this.scaleFactor));
          // 該列的總高度
          const colHeight = colImages.reduce((sum, img) => sum + img.height * this.scaleFactor, 0);

          canvasWidth += colWidth;
          canvasHeight = Math.max(canvasHeight, colHeight);
        }
      }

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
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

    if (this.sizeMode === 'fixed') {
      // 固定網格模式：居中對齊
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
    } else {
      // 動態尺寸模式：緊密排列
      let x = 0;
      let y = 0;

      if (this.mergeDirection === 'horizontal') {
        // 計算前面行的累積高度
        for (let r = 0; r < row; r++) {
          const startIdx = r * this.imagesPerRow;
          const endIdx = Math.min(startIdx + this.imagesPerRow, this.images.length);
          const rowImages = this.images.slice(startIdx, endIdx);
          const rowHeight = Math.max(...rowImages.map(img => img.height * this.scaleFactor));
          y += rowHeight;
        }

        // 計算同一行前面圖片的累積寬度
        const rowStartIdx = row * this.imagesPerRow;
        for (let c = 0; c < col; c++) {
          const imgIdx = rowStartIdx + c;
          if (imgIdx < this.images.length) {
            x += this.images[imgIdx].width * this.scaleFactor;
          }
        }

        // 垂直居中對齊（在該行的最大高度內）
        const rowImages = this.images.slice(rowStartIdx, Math.min(rowStartIdx + this.imagesPerRow, this.images.length));
        const rowHeight = Math.max(...rowImages.map(img => img.height * this.scaleFactor));
        y += (rowHeight - scaledHeight) / 2;
      } else {
        // 垂直排列模式
        // 計算前面列的累積寬度
        for (let c = 0; c < col; c++) {
          const colImages: ImageItem[] = [];
          for (let i = c; i < this.images.length; i += this.imagesPerRow) {
            colImages.push(this.images[i]);
          }
          const colWidth = Math.max(...colImages.map(img => img.width * this.scaleFactor));
          x += colWidth;
        }

        // 計算同一列前面圖片的累積高度
        for (let r = 0; r < row; r++) {
          const imgIdx = col * this.imagesPerRow + r;
          if (imgIdx < this.images.length) {
            y += this.images[imgIdx].height * this.scaleFactor;
          }
        }

        // 水平居中對齊（在該列的最大寬度內）
        const colImages: ImageItem[] = [];
        for (let i = col; i < this.images.length; i += this.imagesPerRow) {
          colImages.push(this.images[i]);
        }
        const colWidth = Math.max(...colImages.map(img => img.width * this.scaleFactor));
        x += (colWidth - scaledWidth) / 2;
      }

      return {
        x,
        y,
        width: scaledWidth,
        height: scaledHeight
      };
    }
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

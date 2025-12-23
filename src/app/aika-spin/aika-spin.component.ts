import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


class AikaSpinImage {
    id: number;
    url: string;

    // ---- state ----
    imageLoading: boolean = false;
    imageLoaded: boolean = false;
    imageDataUrl: string = '';
    imageElement?: HTMLImageElement; // 快取 Image 元素
}

class AikaSpinSetting {
    rotateXAngle: number = 360;
    rotateYAngle: number = 0;
    rotateZAngle: number = 0;
    duration: number = 1;
    // rotateMethod: string = 'linear'; // linear, ease-in, ease-out, ease-in-out, step
    // stepCount: number = 8;
}
class AikaMoveOrbitSetting {
    centerX: number = 0;
    centerY: number = 0;
    radius: number = 100;
    angleX: number = 0;
    angleY: number = 0;
    angleZ: number = 0;
    duration: number = 3;
}
class AikaMovePathPoint {
    x: number = 0;
    y: number = 0;
}
class AikaMovePathSetting {
    pathPoints: AikaMovePathPoint[] = [];
    duration: number = 1;
}
class AikaScaleSetting {
    width: number = 0;
    height: number = 0;
    scaleX: number = 1;
    scaleY: number = 1;
}
class AikaAttachImage {
    imageId: number = 0;
    aikaImage: AikaSpinImage | null = null;

    // 動畫狀態
    currentX: number = 0;
    currentY: number = 0;
    currentAngle: number = 0;
}
class AikaActionSetting {
    type: 'spin' | 'orbit' | 'path' | 'scale' | '' = '';
    id: number = 0;
    attachImages: AikaAttachImage[] = [];

    spinSetting?: AikaSpinSetting;
    orbitSetting?: AikaMoveOrbitSetting;
    pathSetting?: AikaMovePathSetting;
    scaleSetting?: AikaScaleSetting;
}


@Component({
    selector: 'app-aika-spin',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-spin.component.html',
    styleUrl: './aika-spin.component.scss'
})
export class AikaSpinComponent implements OnInit, AfterViewInit {
    @ViewChild('orbitCanvas', { static: false }) orbitCanvas!: ElementRef<HTMLCanvasElement>;

    lastId: number = 1;
    aikaImages: AikaSpinImage[] = [];
    actionSettings: AikaActionSetting[] = [];
    defaultImageDataUrl: string = '';

    // 動畫控制
    isAnimating: boolean = false;
    animationId: number = 0;
    startTime: number = 0;

    // Canvas 相關
    private ctx!: CanvasRenderingContext2D;

    ngOnInit(): void {
        {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0);
                this.defaultImageDataUrl = canvas.toDataURL();
            }
            img.src = '/favicon.ico';
        }
    }

    ngAfterViewInit(): void {
        this.initCanvas();
    }

    initCanvas(): void {
        if (this.orbitCanvas) {
            this.ctx = this.orbitCanvas.nativeElement.getContext('2d')!;
            // 初始化時繪製靜態場景
            setTimeout(() => this.drawScene(), 0);
        }
    }

    getNewId(): number {
        return this.lastId++;
    }
    newAikaImage() {
        const newImage = new AikaSpinImage();
        newImage.id = this.getNewId();
        newImage.imageDataUrl = this.defaultImageDataUrl;
        newImage.imageElement = new Image();
        newImage.imageElement.src = newImage.imageDataUrl;
        this.aikaImages.push(newImage);
    }
    aikaImageLoadUrl(aikaImg: AikaSpinImage) {
        if (aikaImg.imageLoading) {
            return;
        }
        aikaImg.imageLoading = true;
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0);
            aikaImg.imageDataUrl = canvas.toDataURL();
            aikaImg.imageLoaded = true;
            aikaImg.imageLoading = false;

            // 快取 Image 元素用於繪圖
            aikaImg.imageElement = img;

            // 重新繪製場景
            setTimeout(() => this.drawScene(), 0);
        };
        img.src = aikaImg.url;
    }
    removeImage(img: AikaSpinImage) {
        this.aikaImages = this.aikaImages.filter(i => i !== img);
    }


    createSpin(): void {
        const newSetting = new AikaActionSetting();
        newSetting.id = this.getNewId();
        newSetting.type = 'spin';
        newSetting.spinSetting = new AikaSpinSetting();
        this.actionSettings.push(newSetting);
    }
    createOrbit(): void {
        const newSetting = new AikaActionSetting();
        newSetting.id = this.getNewId();
        newSetting.type = 'orbit';
        newSetting.orbitSetting = new AikaMoveOrbitSetting();
        // 設置預設值
        newSetting.orbitSetting.centerX = 0;
        newSetting.orbitSetting.centerY = 0;
        newSetting.orbitSetting.radius = 100;
        newSetting.orbitSetting.duration = 3;
        this.actionSettings.push(newSetting);

        // 重新繪製場景
        setTimeout(() => this.drawScene(), 0);
    }
    createPath(): void {
        const newSetting = new AikaActionSetting();
        newSetting.id = this.getNewId();
        newSetting.type = 'path';
        newSetting.pathSetting = new AikaMovePathSetting();
        this.actionSettings.push(newSetting);
    }
    createScale(): void {
        const newSetting = new AikaActionSetting();
        newSetting.id = this.getNewId();
        newSetting.type = 'scale';
        newSetting.scaleSetting = new AikaScaleSetting();
        this.actionSettings.push(newSetting);
    }

    addAttachImage(action: AikaActionSetting): void {
        action.attachImages.push(new AikaAttachImage());
    }

    removeAttachImage(action: AikaActionSetting, attachImg: AikaAttachImage): void {
        action.attachImages = action.attachImages.filter(img => img !== attachImg);
        // 重新繪製場景
        setTimeout(() => this.drawScene(), 0);
    }

    onOrbitSettingChange(): void {
        // 當軌道設定改變時重新繪製場景
        setTimeout(() => this.drawScene(), 0);
    }

    onAttachImageIdChange(img: AikaAttachImage): void {
        img.aikaImage = this.aikaImages.find(i => i.id === img.imageId) || null;

        // 初始化圖片位置到軌道起始點
        if (img.aikaImage) {
            // 找到對應的 action 設定
            const action = this.actionSettings.find(a => a.attachImages.includes(img));
            if (action && action.type === 'orbit' && action.orbitSetting) {
                const setting = action.orbitSetting;
                img.currentX = setting.centerX + setting.radius;
                img.currentY = setting.centerY;
                img.currentAngle = 0;
            } else {
                img.currentX = 0;
                img.currentY = 0;
                img.currentAngle = 0;
            }
        }

        // 重新繪製場景
        setTimeout(() => this.drawScene(), 0);
    }


    removeAction(action: AikaActionSetting): void {
        this.actionSettings = this.actionSettings.filter(a => a !== action);
    }

    // 動畫控制方法
    playAnimation(): void {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.startTime = performance.now();
        this.animate();
    }

    stopAnimation(): void {
        this.isAnimating = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = 0;
        }

        // 停止後重新繪製靜態場景
        this.drawScene();
    }

    private animate(): void {
        if (!this.isAnimating) return;

        const currentTime = performance.now();
        const elapsed = (currentTime - this.startTime) / 1000; // 轉換為秒

        this.updatePositions(elapsed);
        this.drawScene();

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    private updatePositions(elapsed: number): void {
        for (const action of this.actionSettings) {
            if (action.type === 'orbit' && action.orbitSetting) {
                const setting = action.orbitSetting;
                const progress = (elapsed % setting.duration) / setting.duration;
                const angle = progress * 2 * Math.PI;

                for (const attachImg of action.attachImages) {
                    if (attachImg.aikaImage) {
                        // 計算環繞位置，考慮初始角度偏移
                        const totalAngle = angle + (setting.angleZ * Math.PI / 180);
                        attachImg.currentX = setting.centerX + Math.cos(totalAngle) * setting.radius;
                        attachImg.currentY = setting.centerY + Math.sin(totalAngle) * setting.radius;
                        attachImg.currentAngle = totalAngle;
                    }
                }
            }
        }
    }

    private drawScene(): void {
        if (!this.ctx) return;

        const canvas = this.orbitCanvas.nativeElement;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 設置畫布中心
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // 繪製所有軌道和圖片
        for (const action of this.actionSettings) {
            if (action.type === 'orbit' && action.orbitSetting) {
                this.drawOrbitTrack(action.orbitSetting, centerX, centerY);

                // 如果沒有在動畫中，初始化圖片位置
                if (!this.isAnimating) {
                    this.initializeImagePositions(action);
                }

                this.drawOrbitImages(action, centerX, centerY);
            }
        }
    }

    private initializeImagePositions(action: AikaActionSetting): void {
        if (action.type === 'orbit' && action.orbitSetting) {
            const setting = action.orbitSetting;
            for (const attachImg of action.attachImages) {
                if (attachImg.aikaImage && (attachImg.currentX === 0 && attachImg.currentY === 0)) {
                    attachImg.currentX = setting.centerX + setting.radius;
                    attachImg.currentY = setting.centerY;
                    attachImg.currentAngle = 0;
                }
            }
        }
    }

    private drawOrbitTrack(setting: AikaMoveOrbitSetting, offsetX: number, offsetY: number): void {
        this.ctx.save();
        this.ctx.strokeStyle = '#888';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);

        this.ctx.beginPath();
        this.ctx.arc(
            offsetX + setting.centerX,
            offsetY + setting.centerY,
            setting.radius,
            0,
            2 * Math.PI
        );
        this.ctx.stroke();

        // 繪製中心點
        this.ctx.fillStyle = '#f00';
        this.ctx.beginPath();
        this.ctx.arc(
            offsetX + setting.centerX,
            offsetY + setting.centerY,
            3,
            0,
            2 * Math.PI
        );
        this.ctx.fill();

        this.ctx.restore();
    }

    private drawOrbitImages(action: AikaActionSetting, offsetX: number, offsetY: number): void {
        for (const attachImg of action.attachImages) {
            if (attachImg.aikaImage && attachImg.aikaImage.imageElement) {
                this.ctx.save();
                this.ctx.translate(
                    offsetX + attachImg.currentX,
                    offsetY + attachImg.currentY
                );

                // 可以根據需要旋轉圖片
                // this.ctx.rotate(attachImg.currentAngle);

                this.ctx.drawImage(attachImg.aikaImage.imageElement, -15, -15, 30, 30);
                this.ctx.restore();
            }
        }
    }
}

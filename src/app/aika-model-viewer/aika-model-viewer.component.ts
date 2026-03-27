import {
  Component, ElementRef, ViewChild, AfterViewInit,
  OnDestroy, NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface MeshItem {
  label: string;
  fullPath: string;
  visible: boolean;
  object: THREE.Object3D;
  textures: string[];
  depth: number;
}

export interface PosePreset {
  name: string;
  posX: number; posY: number; posZ: number;
  rotX: number; rotY: number; rotZ: number;
}

export interface ModelEntry {
  id: string;
  name: string;
  object: THREE.Object3D;
  enabled: boolean;
  brightness: number;
  presets: PosePreset[];
  meshItems: MeshItem[];
  meshFilter: string;
  baseColorMap: Map<string, THREE.Color>;
}

export interface TextureEntry {
  name: string;
  nameLower: string;
  texture: THREE.Texture;
  enabled: boolean;
}

/**
 * 3D 模型查看器 – 支援多模型管理
 * 主要支援 obj, fbx；拖曳或上傳模型/貼圖
 * 操作: 左鍵旋轉, 右鍵平移, 滾輪縮放
 */
@Component({
    selector: 'app-aika-model-viewer',
    imports: [CommonModule, FormsModule],
    templateUrl: './aika-model-viewer.component.html',
    styleUrl: './aika-model-viewer.component.scss'
})
export class AikaModelViewerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvasContainer') canvasContainerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  isDragging = false;
  panelCollapsed = false;

  /** 已上傳的模型列表 */
  models: ModelEntry[] = [];
  /** 已上傳的貼圖列表 */
  textures: TextureEntry[] = [];
  /** 目前選取的模型 */
  selectedModel: ModelEntry | null = null;

  /** 選取中模型的位置控制 */
  selPosX = 0; selPosY = 0; selPosZ = 0;
  /** 選取中模型的旋轉控制（度） */
  selRotX = 0; selRotY = 0; selRotZ = 0;

  exportWidth = 2000;
  exportHeight = 2000;
  bgColor = '#cccccc';
  readonly bgPresets = ['#cccccc', '#ffffff', '#888888', '#000000', '#1a1a2e', '#2d2d2d'];
  showExportPreview = false;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private modelGroup!: THREE.Group;
  private initCameraPos = new THREE.Vector3();
  private initCameraTarget = new THREE.Vector3();
  private animFrameId = 0;
  private textureLoader = new THREE.TextureLoader();
  private textureMap = new Map<string, THREE.Texture>();
  private pendingTextures = new Map<string, THREE.MeshBasicMaterial[]>();
  private sharedMaterial!: THREE.MeshBasicMaterial;
  private idCounter = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void { this.initThree(); }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrameId);
    this.renderer.dispose();
  }

  // ────────────────────────────────────────────────
  // Three.js 初始化
  // ────────────────────────────────────────────────
  private initThree(): void {
    const container = this.canvasContainerRef.nativeElement;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const savedBg = localStorage.getItem('aika-model-viewer-bg');
    if (savedBg) this.bgColor = savedBg;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    this.renderer.setClearColor(this.bgColor);
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.modelGroup = new THREE.Group();
    this.scene.add(this.modelGroup);

    this.sharedMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide });

    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 10000);
    this.camera.position.set(0, 1, 5);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN
    };
    this.controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.07;

    const ro = new ResizeObserver(() => this.onResize());
    ro.observe(container);

    this.ngZone.runOutsideAngular(() => this.animate());
  }

  private animate(): void {
    this.animFrameId = requestAnimationFrame(() => this.animate());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  private onResize(): void {
    const container = this.canvasContainerRef.nativeElement;
    const w = container.clientWidth, h = container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  // ────────────────────────────────────────────────
  // 選取模型
  // ────────────────────────────────────────────────
  selectModel(entry: ModelEntry): void {
    this.selectedModel = entry;
    const p = entry.object.position;
    this.selPosX = +p.x.toFixed(4);
    this.selPosY = +p.y.toFixed(4);
    this.selPosZ = +p.z.toFixed(4);
    const r = entry.object.rotation;
    this.selRotX = this.toDeg(r.x);
    this.selRotY = this.toDeg(r.y);
    this.selRotZ = this.toDeg(r.z);
  }

  toggleModelEnabled(entry: ModelEntry): void {
    entry.enabled = !entry.enabled;
    entry.object.visible = entry.enabled;
  }

  // ────────────────────────────────────────────────
  // 位置控制
  // ────────────────────────────────────────────────
  onPositionChange(): void {
    if (!this.selectedModel) return;
    this.selectedModel.object.position.set(this.selPosX, this.selPosY, this.selPosZ);
  }

  resetPosition(): void {
    if (!this.selectedModel) return;
    this.selPosX = 0; this.selPosY = 0; this.selPosZ = 0;
    this.onPositionChange();
  }

  // ────────────────────────────────────────────────
  // 旋轉控制
  // ────────────────────────────────────────────────
  onRotationChange(): void {
    if (!this.selectedModel) return;
    this.selectedModel.object.rotation.set(
      THREE.MathUtils.degToRad(this.selRotX),
      THREE.MathUtils.degToRad(this.selRotY),
      THREE.MathUtils.degToRad(this.selRotZ)
    );
  }

  resetRotation(): void {
    this.selRotX = 0; this.selRotY = 0; this.selRotZ = 0;
    this.onRotationChange();
  }

  stepRotation(axis: 'x' | 'y' | 'z', deg: number): void {
    if (axis === 'x') this.selRotX = this.clampDeg(this.selRotX + deg);
    if (axis === 'y') this.selRotY = this.clampDeg(this.selRotY + deg);
    if (axis === 'z') this.selRotZ = this.clampDeg(this.selRotZ + deg);
    this.onRotationChange();
  }

  private clampDeg(deg: number): number {
    let d = deg % 360;
    if (d > 180)  d -= 360;
    if (d < -180) d += 360;
    return Math.round(d * 10) / 10;
  }

  private toDeg(rad: number): number {
    return Math.round(THREE.MathUtils.radToDeg(rad) * 10) / 10;
  }

  // ────────────────────────────────────────────────
  // Preset（位置+旋轉配置）
  // ────────────────────────────────────────────────
  savePreset(): void {
    if (!this.selectedModel) return;
    const raw = window.prompt('請輸入配置名稱：', '配置' + (this.selectedModel.presets.length + 1));
    if (raw === null) return;
    const name = raw.trim() || ('配置' + (this.selectedModel.presets.length + 1));
    this.selectedModel.presets.push({
      name,
      posX: this.selPosX, posY: this.selPosY, posZ: this.selPosZ,
      rotX: this.selRotX, rotY: this.selRotY, rotZ: this.selRotZ,
    });
  }

  applyPreset(preset: PosePreset): void {
    if (!this.selectedModel) return;
    this.selPosX = preset.posX; this.selPosY = preset.posY; this.selPosZ = preset.posZ;
    this.selRotX = preset.rotX; this.selRotY = preset.rotY; this.selRotZ = preset.rotZ;
    this.onPositionChange();
    this.onRotationChange();
  }

  deletePreset(entry: ModelEntry, index: number): void {
    entry.presets.splice(index, 1);
  }

  // ────────────────────────────────────────────────
  // 亮度（針對選取模型）
  // ────────────────────────────────────────────────
  onBrightnessChange(): void {
    if (!this.selectedModel) return;
    const br = this.selectedModel.brightness;
    this.selectedModel.object.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mats = Array.isArray((child as THREE.Mesh).material)
        ? (child as THREE.Mesh).material as THREE.MeshBasicMaterial[]
        : [(child as THREE.Mesh).material as THREE.MeshBasicMaterial];
      mats.forEach(m => {
        const base = this.selectedModel!.baseColorMap.get(m.uuid);
        if (base) { m.color.copy(base).multiplyScalar(br); m.needsUpdate = true; }
      });
    });
  }

  // ────────────────────────────────────────────────
  // 背景顏色
  // ────────────────────────────────────────────────
  onBgColorChange(): void {
    localStorage.setItem('aika-model-viewer-bg', this.bgColor);
    this.renderer.setClearColor(this.bgColor);
  }

  setBgColor(color: string): void {
    this.bgColor = color;
    this.onBgColorChange();
  }

  resetView(): void {
    this.camera.position.copy(this.initCameraPos);
    this.controls.target.copy(this.initCameraTarget);
    this.controls.update();
  }

  get exportPreviewStyle(): Record<string, string> {
    if (!this.canvasContainerRef) return {};
    const vw = this.canvasContainerRef.nativeElement.clientWidth;
    const vh = this.canvasContainerRef.nativeElement.clientHeight;
    const arExp = this.exportWidth / this.exportHeight;
    const arVp  = vw / vh;
    let pw: number, ph: number;
    if (arExp > arVp) { pw = vw; ph = vw / arExp; }
    else              { ph = vh; pw = ph * arExp; }
    return {
      width: `${pw}px`, height: `${ph}px`,
      left: `${(vw - pw) / 2}px`, top: `${(vh - ph) / 2}px`,
    };
  }

  // ────────────────────────────────────────────────
  // 拖曳 / 上傳
  // ────────────────────────────────────────────────
  onDragOver(e: DragEvent): void { e.preventDefault(); e.stopPropagation(); this.isDragging = true; }
  onDragLeave(e: DragEvent): void { e.preventDefault(); this.isDragging = false; }
  onDrop(e: DragEvent): void {
    e.preventDefault(); e.stopPropagation(); this.isDragging = false;
    if (!e.dataTransfer?.files.length) return;
    Array.from(e.dataTransfer.files).forEach(f => this.handleFile(f));
  }
  onFileInputChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (!input.files?.length) return;
    Array.from(input.files).forEach(f => this.handleFile(f));
    input.value = '';
  }
  onEmptyHintClick(): void { this.fileInputRef?.nativeElement.click(); }
  openFilePicker(): void  { this.fileInputRef?.nativeElement.click(); }

  private handleFile(file: File): void {
    const name = file.name.toLowerCase();
    if (name.endsWith('.obj')) this.loadOBJ(file);
    else if (name.endsWith('.fbx')) this.loadFBX(file);
    else if (/\.(png|jpg|jpeg|webp|bmp|gif)$/i.test(name)) this.loadTexture(file);
  }

  // ────────────────────────────────────────────────
  // 模型載入
  // ────────────────────────────────────────────────
  private loadOBJ(file: File): void {
    const url = URL.createObjectURL(file);
    new OBJLoader().load(url, (obj) => {
      URL.revokeObjectURL(url);
      obj.name = obj.name || file.name;
      this.addModelEntry(obj, file.name);
    }, undefined, err => console.error('OBJ load error', err));
  }

  private loadFBX(file: File): void {
    const url = URL.createObjectURL(file);
    new FBXLoader().load(url, (fbx) => {
      URL.revokeObjectURL(url);
      fbx.name = fbx.name || file.name;
      this.addModelEntry(fbx, file.name);
    }, undefined, err => console.error('FBX load error', err));
  }

  private addModelEntry(obj: THREE.Object3D, filename: string): void {
    const entry: ModelEntry = {
      id: String(++this.idCounter),
      name: filename,
      object: obj,
      enabled: true,
      brightness: 1.6,
      presets: [],
      meshItems: [],
      meshFilter: '',
      baseColorMap: new Map()
    };
    this.applyMaterials(obj, entry);
    this.modelGroup.add(obj);
    this.fitCameraToScene();
    this.ngZone.run(() => {
      entry.meshItems = this.buildMeshList(obj);
      this.models.push(entry);
      if (!this.selectedModel) this.selectModel(entry);
    });
  }

  private applyMaterials(obj: THREE.Object3D, entry: ModelEntry): void {
    obj.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;
      const origMats = Array.isArray(mesh.material)
        ? mesh.material as THREE.Material[]
        : [mesh.material as THREE.Material];

      const newMats = origMats.map(orig => {
        const mat = this.sharedMaterial.clone();
        const origColor = (orig as any).color as THREE.Color | undefined;
        if (origColor) mat.color.copy(origColor);

        const origMap: THREE.Texture | null = (orig as any).map ?? null;
        if (origMap && origMap.image) {
          origMap.colorSpace = THREE.SRGBColorSpace;
          mat.map = origMap;
        } else {
          const requested = this.extractTextureName(orig);
          if (requested) {
            const lc = requested.toLowerCase();
            if (this.textureMap.has(lc)) {
              mat.map = this.textureMap.get(lc)!;
            } else {
              if (!this.pendingTextures.has(lc)) this.pendingTextures.set(lc, []);
              this.pendingTextures.get(lc)!.push(mat);
            }
          }
        }
        mat.needsUpdate = true;
        entry.baseColorMap.set(mat.uuid, mat.color.clone());
        mat.color.multiplyScalar(entry.brightness);
        return mat;
      });

      mesh.material = newMats.length === 1 ? newMats[0] : newMats;
    });
  }

  private extractTextureName(mat: THREE.Material): string | null {
    const texData = (mat as any).userData?.FBX_TextureData;
    if (texData?.fileName) return (texData.fileName as string).split(/[\\/]/).pop() ?? null;
    const mapName: string | undefined = (mat as any).map?.name;
    if (mapName) return mapName.split(/[\\/]/).pop() ?? null;
    if (mat.name && /\.(png|jpg|jpeg|bmp|tga|webp)$/i.test(mat.name))
      return mat.name.split(/[\\/]/).pop() ?? null;
    return null;
  }

  // ────────────────────────────────────────────────
  // Mesh 清單
  // ────────────────────────────────────────────────
  private buildMeshList(root: THREE.Object3D): MeshItem[] {
    const items: MeshItem[] = [];
    const traverse = (node: THREE.Object3D, depth: number, pathPrefix: string) => {
      if (node instanceof THREE.Light) return;
      if ((node as THREE.Mesh).isMesh) {
        const displayName = node.name || node.uuid.slice(0, 8);
        const fullPath = pathPrefix ? `${pathPrefix} / ${displayName}` : displayName;
        items.push({
          label: displayName, fullPath,
          visible: node.visible, object: node,
          textures: this.getMeshTextureNames(node as THREE.Mesh),
          depth
        });
      }
      node.children.forEach(child => {
        const nodeName = node.name || node.uuid.slice(0, 8);
        const nextPrefix = (node as THREE.Mesh).isMesh
          ? `${pathPrefix ? pathPrefix + ' / ' : ''}${nodeName}` : pathPrefix;
        traverse(child, (node as THREE.Mesh).isMesh ? depth + 1 : depth, nextPrefix);
      });
    };
    traverse(root, 0, '');
    return items;
  }

  private getMeshTextureNames(mesh: THREE.Mesh): string[] {
    const names = new Set<string>();
    const mats = Array.isArray(mesh.material)
      ? mesh.material as THREE.Material[]
      : [mesh.material as THREE.Material];
    mats.forEach(m => {
      const map = (m as THREE.MeshBasicMaterial).map;
      if (!map) return;
      if (map.name) { names.add(map.name); return; }
      const src: string = (map.image as HTMLImageElement)?.src ?? '';
      if (src) names.add(src.split('/').pop() ?? src);
    });
    return Array.from(names);
  }

  filteredMeshItems(entry: ModelEntry): MeshItem[] {
    const f = entry.meshFilter.trim().toLowerCase();
    if (!f) return entry.meshItems;
    return entry.meshItems.filter(m => m.label.toLowerCase().includes(f));
  }

  setAllMeshVisible(entry: ModelEntry, visible: boolean): void {
    this.filteredMeshItems(entry).forEach(item => {
      item.visible = visible;
      item.object.visible = visible;
    });
  }

  toggleVisibility(item: MeshItem): void {
    item.visible = !item.visible;
    item.object.visible = item.visible;
  }

  // ────────────────────────────────────────────────
  // 貼圖載入
  // ────────────────────────────────────────────────
  private loadTexture(file: File): void {
    const lc = file.name.toLowerCase();
    if (this.textures.some(t => t.nameLower === lc)) return;
    const url = URL.createObjectURL(file);
    this.textureLoader.load(url, (t) => {
      URL.revokeObjectURL(url);
      t.name = file.name;
      t.colorSpace = THREE.SRGBColorSpace;
      this.textureMap.set(lc, t);

      const entry: TextureEntry = { name: file.name, nameLower: lc, texture: t, enabled: true };

      if (this.pendingTextures.has(lc)) {
        this.pendingTextures.get(lc)!.forEach(mat => { mat.map = t; mat.needsUpdate = true; });
        this.pendingTextures.delete(lc);
      } else {
        this.modelGroup.traverse(child => {
          if (!(child as THREE.Mesh).isMesh) return;
          const mats = Array.isArray((child as THREE.Mesh).material)
            ? (child as THREE.Mesh).material as THREE.MeshBasicMaterial[]
            : [(child as THREE.Mesh).material as THREE.MeshBasicMaterial];
          mats.forEach(m => { if (!m.map) { m.map = t; m.needsUpdate = true; } });
        });
      }

      this.ngZone.run(() => {
        this.textures.push(entry);
        this.models.forEach(m => m.meshItems = this.buildMeshList(m.object));
      });
    });
  }

  toggleTextureEnabled(entry: TextureEntry): void {
    entry.enabled = !entry.enabled;
    this.modelGroup.traverse(child => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mats = Array.isArray((child as THREE.Mesh).material)
        ? (child as THREE.Mesh).material as THREE.MeshBasicMaterial[]
        : [(child as THREE.Mesh).material as THREE.MeshBasicMaterial];
      mats.forEach(m => {
        if (entry.enabled) {
          if (!m.map) { m.map = entry.texture; m.needsUpdate = true; }
        } else {
          if (m.map === entry.texture) { m.map = null; m.needsUpdate = true; }
        }
      });
    });
  }

  // ────────────────────────────────────────────────
  // 清除場景
  // ────────────────────────────────────────────────
  clearScene(): void {
    this.modelGroup.children.slice().forEach(obj => {
      obj.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry?.dispose();
          const m = (child as THREE.Mesh).material;
          if (Array.isArray(m)) m.forEach(x => x.dispose());
          else (m as THREE.Material)?.dispose();
        }
      });
      this.modelGroup.remove(obj);
    });
    this.textureMap.forEach(t => t.dispose());
    this.textureMap.clear();
    this.pendingTextures.clear();
    this.models = [];
    this.textures = [];
    this.selectedModel = null;
  }

  // ────────────────────────────────────────────────
  // 相機自動對焦
  // ────────────────────────────────────────────────
  private fitCameraToScene(): void {
    const box = new THREE.Box3();
    this.modelGroup.children.forEach(c => box.expandByObject(c));
    if (box.isEmpty()) return;
    const size   = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const dist   = Math.abs(maxDim / (2 * Math.tan(this.camera.fov * Math.PI / 360))) * 1.5;
    this.camera.position.set(center.x, center.y, center.z + dist);
    this.controls.target.copy(center);
    this.controls.update();
    this.initCameraPos.copy(this.camera.position);
    this.initCameraTarget.copy(this.controls.target);
  }

  // ────────────────────────────────────────────────
  // 輸出 JPG
  // ────────────────────────────────────────────────
  exportImage(): void {
    const W = this.exportWidth, H = this.exportHeight;
    this.renderer.setSize(W, H);
    this.camera.aspect = W / H;
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
    const dataUrl = this.renderer.domElement.toDataURL('image/jpeg', 0.95);
    const container = this.canvasContainerRef.nativeElement;
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `model_${W}x${H}.jpg`;
    a.click();
  }
}




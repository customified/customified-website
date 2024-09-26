import { create } from 'zustand';
import { fabric } from 'fabric';

interface CanvasState {
  canvast: 'front' | 'back';
  setCanvasType: (canvast: 'front' | 'back') => void;
  frontCanvas: fabric.Canvas | null;
  backCanvas: fabric.Canvas | null;
  setFrontCanvas: (canvas: fabric.Canvas) => void;
  setBackCanvas: (canvas: fabric.Canvas) => void;
  addText: (canvasType: 'front' | 'back', text: string, options: fabric.ITextOptions) => void;
  addImage: (canvasType: 'front' | 'back', url: string, options: fabric.IImageOptions) => void;
  updateSelectedObject: (canvasType: 'front' | 'back', options: fabric.ITextOptions) => void;
  updateSelectedFont: (canvasType: 'front' | 'back', fontFamily: string) => void;
  getCanvasDataURL: (canvasType: 'front' | 'back') => string | null;
  getCanvasElement: (canvasType: 'front' | 'back') => HTMLCanvasElement | null;
  getTextProperties: (canvasType: 'front' | 'back') => Array<{ text: string, fontFamily: string, fill: string }>;
  getCanvasImages: (canvasType: 'front' | 'back') => string[];
}

export const useCanvasStore = create<CanvasState>((set, get) => ({
  canvast: 'front',
  setCanvasType: (canvasT) => set({ canvast: canvasT }),
  frontCanvas: null,
  backCanvas: null,
  setFrontCanvas: (canvas) => set({ frontCanvas: canvas }),
  setBackCanvas: (canvas) => set({ backCanvas: canvas }),
  addText: (canvasType, text, options = {}) => {
    const state = get();
    const canvas = canvasType === 'front' ? state.frontCanvas : state.backCanvas;
    if (canvas) {
      const iText = new fabric.IText(text, {
        ...options,
        selectable: true,
        evented: true,
        hasControls: true,
        hasBorders: true,
        lockUniScaling: true,
        editable: true,
      });
      canvas.add(iText);
      canvas.setActiveObject(iText);
      canvas.requestRenderAll();
    }
  },
  addImage: (canvasType, url, options = {}) => {
    const state = get();
    const canvas = canvasType === 'front' ? state.frontCanvas : state.backCanvas;
    if (canvas) {
      fabric.Image.fromURL(url, (img) => {
        const maxWidth = 80;
        const maxHeight = 100;
        img.scaleToWidth(maxWidth);
        img.scaleToHeight(maxHeight);
        img.set({
          left: (canvas.getWidth() - img.getScaledWidth()) / 2,
          top: (canvas.getHeight() - img.getScaledHeight()) / 2,
          ...options,
          selectable: true,
          evented: true,
          hasControls: true,
          hasBorders: true,
        });
        canvas.add(img);
        canvas.setActiveObject(img);
        canvas.requestRenderAll();
      });
    }
  },
  updateSelectedObject: (canvasType, options) => {
    const state = get();
    const canvas = canvasType === 'front' ? state.frontCanvas : state.backCanvas;
    const activeObject = canvas?.getActiveObject();
    if (activeObject && activeObject instanceof fabric.IText) {
      activeObject.set(options);
      canvas?.requestRenderAll();
    }
  },
  updateSelectedFont: (canvasType, fontFamily) => {
    const state = get();
    const canvas = canvasType === 'front' ? state.frontCanvas : state.backCanvas;
    const activeObject = canvas?.getActiveObject();
    if (activeObject && activeObject instanceof fabric.IText) {
      activeObject.set({ fontFamily });
      canvas?.requestRenderAll();
    }
  },
  getCanvasDataURL: (canvasType) => {
    const state = get();
    const canvas = canvasType === 'front' ? state.frontCanvas : state.backCanvas;
    return canvas ? canvas.toDataURL() : '';
  },
  getCanvasElement: (canvasType) => {
    return document.getElementById(`${canvasType}-canvas-id`) as HTMLCanvasElement | null;
  },
  getTextProperties: (canvasType: 'front' | 'back') => {
    const state = get();
    const canvas = canvasType === 'front' ? state.frontCanvas : state.backCanvas;
    
    if (canvas) {
      return canvas.getObjects('i-text').map((obj) => {
        if (obj instanceof fabric.IText) {
          const { text, fontFamily, fill } = obj;
          return {
            text: text || '',
            fontFamily: fontFamily || 'Arial',
            fill: fill as string || '#000000'
          };
        }
        return null;
      }).filter((textProperties): textProperties is { text: string, fontFamily: string, fill: string } => textProperties !== null);
    }
  
    return [];
  },
  getCanvasImages:  (canvasType) => {
    const canvas = canvasType === 'front' ? get().frontCanvas : get().backCanvas;
    if (canvas) {
      return canvas.getObjects('image').map((img) => (img as fabric.Image).getSrc());
    }
    return [];
  },
}));
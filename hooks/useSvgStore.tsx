import { create } from 'zustand';

interface SvgState {
    selectedImage: boolean;
    setSelectedImage: (value: boolean) => void;
    color: string;
    setColor: (value: string) => void;
    insideColor: boolean;
    setInsideColor: (value: boolean) => void;
    text: string;
    setText: (value: string) => void;
    font: string;
    setFont: (value: string) => void;
    textColor: string;
    setTextColor: (value: string) => void;
   }

export const useSvgStore = create<SvgState>((set) => ({
    selectedImage: false,
    setSelectedImage: (value) => set({ selectedImage: value }),
    color: '#A3CCD0',
    setColor: (value) => set({ color: value }),
    insideColor: false,
    setInsideColor: (value) => set({ insideColor: value }),
    text: 'Your text here',
    setText: (value) => set({ text: value }),
    font: 'Arial',
    setFont: (value) => set({ font: value }),
    textColor: '#000000',
    setTextColor: (value) => set({ textColor: value }),   
}));

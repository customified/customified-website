import { Upgrade } from '@/types';
import { create } from 'zustand';

interface productState {
    product: string;
    setProduct: (value: string) => void;
    productID: string;
    setProductID: (value: string) => void;
    category: string | null;
    setCategory: (value: string) => void;
    image: string;
    additional : string[];
    setAdditional : (arr : string[]) => void;
    setImage: (value: string) => void;
    quantity: number;
    setQuantity: (value: number) => void;
    productSize: string | undefined;
    setProductSize: (value: string | undefined) => void;
    quantities: { [key: string]: number };
    setQuantities: (quantities: { [key: string]: number }) => void;
    isUpgrade: { [key: string]: boolean }
    setIsUpgrade: (key: string, value: boolean) => void;
    upgrades: { [key: string]: Upgrade };
    setUpgrade: (key: string, value: Upgrade) => void;
    upgradeCost: { [key: string]: string };
    setUpgradeCost: (key: string, value: string) => void;
    removeUpgrade: (key: string) => void;
    emptyUpgrades: () => void;
    frontDesignUrl: string | null;
    setFrontDesignUrl: (url: string | null) => void;
    backDesignUrl: string | null;
    setBackDesignUrl: (url: string | null) => void;
}

export const useProductStore = create<productState>((set) => ({
    product: '',
    setProduct: (value) => set({ product: value }),
    productID: '',
    setProductID: (value) => set({ productID: value }),
    category: null,
    setCategory: (value) => set({ category: value }),
    additional: [], 
    setAdditional: (arr) => set({ additional: arr }),
    image: '',
    setImage: (value) => set({ image: value }),
    quantity: 0,
    setQuantity: (value) => set({ quantity: value }),
    productSize: undefined,
    setProductSize: (value) => set({ productSize: value }),
    quantities: {},
    setQuantities: (quantities) => set({ quantities }),
    isUpgrade: {},
    setIsUpgrade: (key, value) => set((state) => ({ isUpgrade: { ...state.isUpgrade, [key]: value } })),
    upgrades: {},
    setUpgrade: (key, value) => set((state) => ({ upgrades: { ...state.upgrades, [key]: value } })),
    upgradeCost: {},
    setUpgradeCost: (key, value) => set((state) => ({ upgradeCost: { ...state.upgradeCost, [key]: value } })),
    removeUpgrade: (key) => set((state) => {
        const newUpgrades = { ...state.upgrades };
        delete newUpgrades[key];
        return { upgrades: newUpgrades };
    }),
    emptyUpgrades: () => set({ upgrades: {} }),
    frontDesignUrl: null,
    setFrontDesignUrl: (url) => set({ frontDesignUrl: url }),
    backDesignUrl: null,
    setBackDesignUrl: (url) => set({ backDesignUrl: url }),
}));

import { create } from 'zustand';

interface PriceState {
    unitCost: number | string;
    totalCost: number;
    deliveryCostPerUnit: number;
    totalDeliveryCost: number;
    totalCostWithoutDelivery: number;
    basePriceForDatePicker: number;
    setUnitCost: (cost: number | string) => void;
    setTotalCost: (cost: number) => void;
    setDeliveryCostPerUnit: (cost: number) => void;
    setTotalDeliveryCost: (cost: number) => void;
    setTotalCostWithoutDelivery: (cost: number) => void;
    setBasePriceForDatePicker: (price: number) => void;
}

export const usePriceStore = create<PriceState>((set) => ({
    unitCost: 0,
    totalCost: 0,
    deliveryCostPerUnit: 0,
    totalDeliveryCost: 0,
    totalCostWithoutDelivery: 0,
    basePriceForDatePicker: 0,
    setUnitCost: (cost) => set({ unitCost: cost }),
    setTotalCost: (cost) => set({ totalCost: cost }),
    setDeliveryCostPerUnit: (cost) => set({ deliveryCostPerUnit: cost }),
    setTotalDeliveryCost: (cost) => set({ totalDeliveryCost: cost }),
    setTotalCostWithoutDelivery: (cost) => set({ totalCostWithoutDelivery: cost }),
    setBasePriceForDatePicker: (price) => set({ basePriceForDatePicker: price }),
}));

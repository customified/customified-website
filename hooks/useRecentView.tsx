import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';

interface RecentlyViewedStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeAll: () => void;
}

export const useRecentlyViewed = create(
    persist<RecentlyViewedStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItemIndex = currentItems.findIndex((item) => item._id === data._id);

                let updatedItems;

                if (existingItemIndex !== -1) {
                    // Remove the existing item
                    updatedItems = [
                        data,
                        ...currentItems.filter((item) => item._id !== data._id),
                    ];
                } else {
                    // Add new item to the front
                    updatedItems = [data, ...currentItems];
                }

                if (updatedItems.length > 4) {
                    updatedItems = updatedItems.slice(0, 4); 
                }

                set({ items: updatedItems });
            },
            removeAll: () => set({ items: [] }),
        }),
        {
            name: 'recently-viewed-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

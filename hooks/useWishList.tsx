import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';
import toast from 'react-hot-toast';

interface WishlistStore {
    wishitems: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

export const useWishlist = create(
    persist<WishlistStore>((set, get) => ({
        wishitems: [],
        addItem: (data: Product) => {
            const currentItems = get().wishitems;
            const existingItem = currentItems.find((item) => item._id === data._id);

            if (existingItem) {
                return toast("Item already in wishlist.");
            }

            set({ wishitems: [...get().wishitems, data] });
            toast.success("Item added to wishlist!");
        },
        removeItem: (id: string) => {
            set({ wishitems: get().wishitems.filter((item) => item._id !== id) });
            toast.success("Item removed from wishlist");
        },
        removeAll: () => set({ wishitems: [] })
    }), {
        name: 'wishlist-storage',
        storage: createJSONStorage(() => localStorage)
    })
);

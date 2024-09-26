import { Cart } from '@/types';
import toast from 'react-hot-toast';
import {create } from 'zustand'
import {persist, createJSONStorage} from "zustand/middleware"

interface CartStore {
    items: Cart[];
    addItem: (data: Cart) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

export const useCart = create(
    persist<CartStore>((set, get) =>({
        items: [],
        addItem: (data: Cart) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.product.id === data.product.id);

            if(existingItem) {
                return toast("Item Already in cart.")
            }

            set({items: [...get().items, data]})
            toast.success("Item added to cart!")
        },
        removeItem: (id: string) => {
            set({items: [...get().items.filter((item) => item.id !== id)] });
            toast.success("Item removed from cart")
        },
        removeAll: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)


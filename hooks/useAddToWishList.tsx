import { Product } from '@/types';
import { useWishlist } from '@/hooks/useWishList';

export const toggleWishlist = (product: Product) => {
    const { addItem, removeItem, wishitems } = useWishlist.getState();

    const isInWishlist = wishitems.some(item => item._id === product._id);

    if (isInWishlist) {
        removeItem(product._id);
    } else {
        addItem(product);
    }
};
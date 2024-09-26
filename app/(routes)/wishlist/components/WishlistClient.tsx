"use client"

import ProductCard from '@/components/ui/ProductCard'
import IconButton from '@/components/ui/shadcn/IconButton'
import { useProductStore } from '@/hooks/useProductStore'
import { useWishlist } from '@/hooks/useWishList'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const WishlistClient = () => {

    const { wishitems } = useWishlist()

    const router = useRouter();
    const wishlist = useWishlist();
    const { emptyUpgrades } = useProductStore();

    const removeItem = (id: string) => {
        wishlist.removeItem(id);
    };

    const handleClick = (id: string) => {
        emptyUpgrades();
        router.push(`/product/${id}`);
    };
  return (
    <div>
         <div className="my-10">
                        {wishitems.length === 0 ? (<p
                            className='text-neutral-500'> No Recent Views</p>) :
                            (
                                <>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10  items-center justify-center ">
                                        {
                                            wishitems.map((item) => (
                                                <div className="relative"
                                                    onClick={() => handleClick(item._id)}
                                                    key={item._id}>
                                                    <ProductCard
                                                        key={item._id}
                                                        data={item}
                                                    />
                                                    <div className="absolute z-10 right-0 top-0">
                                                        <IconButton onClick={() => removeItem(item._id)} icon={<X size={15} color="white" />} className="bg-[#d52626]" />
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </>
                            )}

                    </div>
    </div>
  )
}

export default WishlistClient
"use client"

import ProductCard from '@/components/ui/ProductCard';
import { useRecentlyViewed } from '@/hooks/useRecentView';

const Item = () => {

    const { items } = useRecentlyViewed();
 
  return (
    <div>
        <div className='mt-12 lg:grid lg:grid-cols-4 lg:items-start gap-x-12'>
                        {items.length === 0 && <p
                            className='text-neutral-500'> No Recent Views</p>
                        }

                        {items.map((item) => (
                            <div className='lg:col-span-1 my-7' key={item._id}>
                                <ProductCard
                                    key={item._id}
                                    data={item}
                                />
                            </div>
                        ))}

                    </div>
    </div>
  )
}

export default Item
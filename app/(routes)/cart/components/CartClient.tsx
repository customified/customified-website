"use client"

import { useCart } from '@/hooks/useCartStore'
import CartItem from './CartItem'
import Summary from './Summary'

const CartClient = () => {
    const cart = useCart()
  return (
    <div>
         <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                    <div className='lg:col-span-7'>
                        {cart.items.length === 0 && <p
                        className='text-neutral-500'> No Items Added to Cart</p>
                        }
                        <ul>
                            {cart.items.map((item) => (
                                <CartItem 
                                key={item.id}
                                data={item}
                                />
                            ))}
                        </ul>
                    </div>
                    <Summary />
                </div>
    </div>
  )
}

export default CartClient
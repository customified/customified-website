"use client"

import Currency from '@/components/ui/Currency'
import { Button } from '@/components/ui/shadcn/Button'
import { useCart } from '@/hooks/useCartStore'
import axios from 'axios'

import { useUser } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const Summary = () => {

  const { user } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed")
      removeAll()
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong")
    }
  }, [searchParams, removeAll])

  const totalPriceWODelivery = items.reduce((total, item) => {
    return total + item.totalCostWithoutDelivery
  }, 0);

  const totalDeliveryPrice = items.reduce((total, item) => {
    return total + item.totalDeliveryCost
  }, 0);

  const totalPriceWDelivery = items.reduce((total, item) => {
    return total + item.totalCost
  }, 0);

  const onCheckout = async () => {
    try {
      if (!user) {
        const redirectUrl = `/sign-up?sign_up_force_redirect_url=${encodeURIComponent(window.location.href)}&sign_in_force_redirect_url=${encodeURIComponent(window.location.href)}`;
        router.push(redirectUrl);
        return;
      }
  
      const userData = {
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress
      };
  
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        cartItems: items,
        user: userData
      });
  
      window.location = response.data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to initiate checkout. Please try again.");
    }
  };
  

  return (
    <div className='mt-16 rounded-lg bg-slate-800 text-white px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium'>Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium">Subtotal</div>
          <Currency data={totalPriceWODelivery} />
        </div>
        <div className="flex items-center justify-between  border-gray-200 pt-4">
          <div className="text-base font-medium">Shipping</div>
          <Currency data={totalDeliveryPrice} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium">Subtotal</div>
          <Currency data={totalPriceWDelivery} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className='w-full mt-6 bg-white text-slate-800 font-bold text-lg'>
        Checkout
      </Button>
    </div>
  )
}

export default Summary
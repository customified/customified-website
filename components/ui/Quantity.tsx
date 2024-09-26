import React, { useEffect } from 'react'
import { Input } from './shadcn/input'
import { Label } from './shadcn/label'
import { useProductStore } from '@/hooks/useProductStore'
import { usePriceUpdater } from '@/hooks/usePriceUpdater'
import { Customization, DeliveryCost } from '@/types'

interface QuantityProps {
    customizationOptions: Customization[];
    deliveryCosts: DeliveryCost
}

const Quantity: React.FC<QuantityProps> = ({customizationOptions, deliveryCosts}) => {

    const {setQuantity, quantity, upgrades} = useProductStore()
    const { updatePrice } = usePriceUpdater(customizationOptions, deliveryCosts);

        
    useEffect(() => {
        updatePrice();
    }, [quantity, upgrades]);
    
    const handleQuantityChange = (newValue: number) => {
        const validQuantity = isNaN(newValue) ? 0 : Math.max(0, newValue);
        setQuantity(validQuantity);
        updatePrice();
    };

  return (
    <div className='my-7 flex flex-col gap-3 w-full px-5'>
        <Label htmlFor='quantity' className='font-bold'>Quantity</Label>
        <Input 
        placeholder='Enter 1 or more Quantity'
         type='number'
          max={100000} 
          name='quantity' 
          className='w-full border-[2px]'
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
          />
    </div>
  )
}

export default Quantity
"use client"

import Currency from '@/components/ui/Currency';
import { Order } from '@/types';
import { format } from 'date-fns';
import { CheckCircle2, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SummaryProps {
  order: Order
}

const Summary: React.FC<SummaryProps> = ({ order }) => {

  const router = useRouter();

  return (
    <div>
      <div className='bg-white p-4 border rounded-lg shadow-md md:px-10 md:py-8 px-3 py-8 '>

        <div className="flex mb-4 items-center gap-4">
          <ChevronLeft stroke='gray' onClick={()=> router.push('/ordertracker')} className='cursor-pointer'/>
          <h2 className='md:text-xl text-base font-bold  text-teal-700'>Order #{order._id}</h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-0" >

          <div className="md:col-span-1  md:my-7 my-5 border border-gray-200 rounded-lg h-fit md:p-5 p-2">
            <h3 className='text-base font-semibold text-gray-600 '>Order Items</h3>
            {order.orderItems.map((item) => (
              <div key={item.product._id} className='border-b border-gray-200 pb-4 my-4 grid md:grid-cols-6 grid-cols-5 items-center justify-between gap-2'>
                <img src={item.product.image} className='md:w-14 w-12 h-12 md:h-14 rounded-full col-span-1'></img>
                <h3 className='text-sm  font-semibold col-span-2 text-teal-800'>{item.product.name}</h3>
                <div className='text-gray-600  text-xs text-nowrap col-span-1 flex flex-col gap-0.5'>
                  <p className='font-medium border-b'>{item.product.productSize}</p>
                  <div className='md:hidden flex flex-col gap-1'>
                    {Object.entries(item.product.quantities).map(([colorId, qty]) => (
                      <p key={colorId} className='flex gap-2 text-nowrap'>{colorId}: {qty}</p>
                    ))}
                  <p className=' col-span-1 md:px-0 md:text-base text-sm'><Currency data={item.product.totalCost} /></p>
                  </div>
                </div>
                <div className=' text-xs text-gray-600 md:col-span-1 md:block hidden'>
                  {Object.entries(item.product.quantities).map(([colorId, qty]) => (
                    <p key={colorId} className='flex gap-2 text-nowrap'>{colorId}: {qty}</p>
                  ))}
                </div>
                <p className=' col-span-1 md:px-0 px-2 md:text-base text-sm hidden md:block'><Currency data={item.product.totalCost} /></p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:max-w-sm my-10 col-span-1 h-fit">
            <div className="col-span-1 grid grid-rows-5  md:gap-1 gap-2 font-semibold text-sm ">
              <h5 className='row-span-1'>Date</h5>
              <h5 className='row-span-1'>Name</h5>
              <h5 className='row-span-1'>Address</h5>
              <h5 className='row-span-1'>Payment Status</h5>
              <h5 className='row-span-1'>Order Status</h5>
            </div>

            <div className="col-span-1 grid grid-rows-5  md:gap-1 gap-2 font-medium text-sm ">
              <h5 className='row-span-1'>{format(order.createdAt, "MMMM do, yyyy")}</h5>
              <h5 className='row-span-1'>{order.username ? order.username : '-'}</h5>
              <h5 className='row-span-1'>{order.address ? order.address : '-'}</h5>
              <h5 className="font-bold  row-span-1"><span className="text-green-500">Paid</span></h5>
              <div className="font-medium  row-span-1">
                  <span className="flex gap-2 items-center"><CheckCircle2 fill="green" stroke="white" /> {order.status} </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Summary
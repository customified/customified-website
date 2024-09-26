"use client"

import { Order } from "@/types";
import { format } from 'date-fns';
import { CheckCircle2, Dot } from "lucide-react";
import { useRouter } from "next/navigation";

interface OrderItemProps {
    order: Order
  }
  
  const OrderItem: React.FC<OrderItemProps> = ({ order }) => {

    const router = useRouter()

    const totalPrice = order.orderItems.reduce((total, item) => {
      return total + item.product.totalCost
    }, 0);
  
    return (
      <div className="cursor-pointer border shadow rounded-md p-3 md:w-[80%] w-full self-center hover:scale-[1.02] hover:bg-teal-50 hover:border-teal-800 transition-all ease-in" onClick={()=>router.push(`/ordertracker/${order._id}`)}>

        <div className="flex md:flex-row flex-col md:items-end md:gap-8  mb-2">
        <h1 className="md:text-xl text-base font-bold text-teal-800">Order #{order._id}</h1>
        <p className="font-medium md:text-base text-xs text-gray-600">{format(order.createdAt, "MMMM do, yyyy")}</p>
        </div>

      <div className="flex  w-[100%]  items-center justify-between ">
        <div className="flex flex-col">
        {order.orderItems.map(item => (
          <div className="flex flex-col" key={item.product._id}>
            <div className="flex gap-1">
              <div className="font-medium text-sm md:text-base flex items-center text-nowrap"><Dot />{item.product.name} </div>
            </div>
           
            </div>
        ))}
        </div>
       
        <div className="flex flex-col text-right items-end text-sm md:text-base">
        <p className="font-bold">${totalPrice.toFixed(2)}</p>
            <p className="font-bold"><span className="text-green-500">Paid</span></p>
            <div className="font-medium text-nowrap">
                  <span className="flex gap-2 w-fit items-center"><CheckCircle2 fill="green" stroke="white" className="w-5 h-5 md:w-8 md:h-8"/> <p className="w-fit">{order.status}</p> </span>
             </div>
            </div>
          </div>
          </div>
    
    );
  };
  
  export default OrderItem;
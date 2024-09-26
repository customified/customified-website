"use client"

import { useProductStore } from "@/hooks/useProductStore"
import { Product } from "@/types"
import { Expand } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Currency from "./Currency"
import { Button } from "./shadcn/Button"
import IconButton from "./shadcn/IconButton"

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const { emptyUpgrades,setQuantities , setQuantity} = useProductStore()
    const router = useRouter()
    const handleClick = () => {
        emptyUpgrades()
        setQuantity(0)
        setQuantities({})
        router.push(`/product/${data?._id}`)
       
    }

    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded shadow-xl border md:p-3 p-1.5 space-y-4 h-full">
            <div className="flex flex-col gap-2 h-full justify-between">
            <div className="aspect-square rounded bg-gray-100 relative">
                <Image
                    alt="Image"
                    width={300}
                    height={300}
                    src={data?.images[0]}
                    className="aspect-square object-cover rounded"
                    priority={true}
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => {handleClick }}
                            icon={<Expand size={20}
                                className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
            {/* description */}
            <div className="flex flex-col items-center justify-center text-center md:gap-3 gap-2">
                <p className="font-semibold text-xs md:text-sm   h-full px-1.5 md:px-5">
                    {data.name}
                </p>
                <p className="">
                    <Button 
                    className="bg-[#097392] font-semibold rounded-none text-[12px] md:text-xs px-1.5 py-1 gap-1"
                    onClick={handleClick}>Customize <span className="hidden md:block">Now</span></Button>
                </p>
            </div>
            {/* price */}
            <div className="flex items-center justify-evenly gap-1 text-red-500 text-xs md:text-sm">
                <p className="text-black  ">As low as</p>
            <Currency data={data.customizations?.[0]?.options?.[0]?.prices?.slice(-1)[0]?.price ?? '0'} />
            </div>
            </div>
            </div>
        </div>
    )
}

export default ProductCard
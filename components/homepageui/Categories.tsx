"use client"

import { Category, Product } from '@/types'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Currency from '../ui/Currency'
import { Button } from '../ui/shadcn/Button'

interface props {
    cat: Category[]
    data: Product[]
}

const Categories: React.FC<props> = ({ cat, data }) => {


    const router = useRouter()

    const getLowestPrice = (categoryId: string): string => {
        const product = data.find((product) => product.category._id === categoryId)
        if (!product) return '0'
        const customizationOption = product.customizations?.[0]?.options?.[0]
        const lowestPrice = customizationOption?.prices?.slice(-1)[0]?.price ?? '0'
        return lowestPrice
    }

    return (
        <div className='flex flex-col gap-10 pt-8 md:py-10 md:mx-20' id='categories'>
            <div className="flex flex-col items-center">
                <h1 className='text-2xl md:text-3xl font-semibold text-[#000000] text-center'><span className='text-[#097392]'>Explore</span> Other Categories</h1>
                <h2 className='text-gray-600'>Find your next favorite</h2>
            </div>
            <div className="bg-gradient-to-r from-[#96DEDA] to-[#3D72B4] w-full md:p-14 px-4 pt-8">
                <div className="grid md:grid-cols-3 grid-cols-2 justify-around md:gap-10 gap-5 ">
                    {cat.map(category => (
                        <div
                            key={category._id}
                            className="col-span-1 flex flex-col cursor-pointer " onClick={() => router.push(`/category/${category._id}`)}
                            >
                            <div className="flex flex-col bg-[#ffffff]  pb-4 self-center items-center justify-center">
                                <Image src={category.image}
                                    width={300}
                                    height={250}
                                    alt={category.name}
                                    className='aspect-square'></Image>

                                <div className=" w-fit self-center">
                                    <h1 className="text-center font-bold text-sm md:text-base">{category.name}</h1>
                                    <button
                                        className="bg-[#097392] font-semibold rounded-none text-[12px] md:text-xs p-2 gap-1 text-white flex my-0.5"
                                        onClick={() => router.push(`/category/${category._id}`)}>Customize <span className="hidden md:block">Now</span></button>
                                    {/* price */}
                                    <div className="flex items-center justify-evenly gap-1 italic text-[#D55534] md:text-base text-xs">
                                        <p className='text-black'>As low as</p>
                                        <Currency data={getLowestPrice(category._id)} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Categories
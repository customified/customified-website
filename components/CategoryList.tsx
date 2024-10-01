"use client"

import { cn } from '@/lib/utils';
import { Category } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface CategoryListProps {
    category: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
    const pathname = usePathname();

    const categoryRoutes = category?.map((route) => ({
        _id: route._id,
        href: `/category/${route._id}`,
        label: route.name,
        active: pathname === `/category/${route._id}`,
        imageUrl: route.image
    }));

    return (
        <div className='flex flex-col gap-5 transition-all md:px-4'>
            <p className='text-center md:text-base text-sm md:px-0 px-6'>
                <span className='text-[#097392] font-bold  '>Most popular categories</span> from our collection
            </p>
            <div className='flex md:gap-4 gap-2 overflow-x-auto scrollbar-none w-full h-full md:justify-center items-center self-center'>
                {categoryRoutes.map(cat => (
                    <Link
                        key={cat._id}
                        href={cat.href}
                        className={cn(
                            "transition-colors hover:text-black flex items-center font-semibold h-full flex-col gap-3",
                            cat.active ? "text-black " : "text-neutral-500"
                        )}>
                        <div className={`w-[53px] h-[53px] md:w-[80px] md:h-[80px] rounded-full bg-[#83B4B3B2] hover:border-2 hover:border-[#23A6F0] md:p-1 transition-all relative overflow-hidden 
                            ${cat.active && 'border-2 border-[#23A6F0] shadow-sm shadow-[#bce1f6]'}`}>
                            <Image
                                src={cat.imageUrl}
                                alt={cat.label}
                                fill
                                priority={true}
                                className="w-full h-full object-cover rounded-full"
                                style={{ imageRendering: 'crisp-edges' }}
                            />
                        </div>
                        <p className='text-center font-bold md:text-[11px] text-[9px] text-nowrap'>{cat.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryList;

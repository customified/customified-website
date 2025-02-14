"use client";

import { Category, Product } from "@/types";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Currency from "../ui/Currency";
import { Button } from "../ui/shadcn/Button";

interface props {
  cat: Category[];
  data: Product[];
}

const Categories: React.FC<props> = ({ cat, data }) => {
  const router = useRouter();

  const getLowestPrice = (categoryId: string): string => {
    const product = data.find((product) => product.category._id === categoryId);
    if (!product) return "0";
    const customizationOption = product.customizations?.[0]?.options?.[0];
    const lowestPrice = customizationOption?.prices?.slice(-1)[0]?.price ?? "0";
    return lowestPrice;
  };

  return (
    <div
      className="flex flex-col gap-5 pt-8 md:py-10 md:mx-10"
      id="categories"
    >
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#000000] text-center">
          <span className="text-[#097392]">Explore</span> Other Categories
        </h1>
        <h2 className="text-gray-600">Find your next favorite</h2>
      </div>
      <div className=" w-full ">
        <div className="grid md:grid-cols-3 grid-cols-2 justify-around md:gap-5 gap-4 ">
          {cat.map((category) => (
            <div
              key={category._id}
              className="cursor-pointer border border-gray-200 rounded-lg p-2 shadow-sm hover:shadow-lg"
              onClick={() => router.push(`/category/${category._id}`)}
            >
              <div className="flex flex-col items-center justify-center">
              <Image
                src={category.image}
                width={200}
                height={200}
                alt={category.name}
                className="aspect-square object-center"
                  loading="lazy"
                />
              </div>
              <div className="">
                {/* description */}
                <div className="flex flex-col items-center justify-center text-center my-1">
                  <p className="font-semibold text-xs md:text-sm">
                    {category.name}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-black text-sm">As low as</p>
                    <Currency data={getLowestPrice(category._id)} />
                  </div>
                </div>
                {/* price */}
                <Button
                  className="bg-teal-600 font-semibold rounded-sm text-[12px] md:text-xs px-1.5 py-1 gap-1 w-full"
                  onClick={() => router.push(`/category/${category._id}`)}
                >
                  Explore <span className="hidden md:block">Now</span>
                </Button>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

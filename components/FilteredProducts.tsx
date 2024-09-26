"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types";
import NoResults from "./ui/NoResults";

interface FilteredProductsProps {
    groupedProducts: Record<string, Product[]>;
    products: Product[];
    hasSubCategories: boolean;
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({
    groupedProducts,
    products,
    hasSubCategories
}) => {
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    const handleFilterClick = (subcategory: string) => {
        setSelectedSubCategory(prev => prev === subcategory ? null : subcategory);
    };

    const allGroupedProducts = selectedSubCategory
        ? { [selectedSubCategory]: groupedProducts[selectedSubCategory] }
        : groupedProducts;

    const productswithoutaccesories = products.filter(item => !(item.additionalCategories?.includes('Accessories')))

    const accessories = products.filter(item => item.additionalCategories?.includes('Accessories'))

    return (
        <div className=" sm:px-6 lg:px-8 pb-16">
            {hasSubCategories && (
                <div className="flex flex-wrap md:gap-4 gap-2 md:mx-11 mt-1 px-4">
                    <button
                        onClick={() => handleFilterClick('All Products')}
                        className={`md:px-3 md:py-1 px-2 py-1 rounded-md border-2 border-[#097392] font-medium text-xs ${selectedSubCategory === 'All Products'
                            ? 'bg-[#097392] text-white'
                            : 'bg-white text-black'
                            }`}
                    >
                        All Products
                    </button>
                    {Object.keys(groupedProducts).map(subcategory => (
                        <button
                            key={subcategory}
                            onClick={() => handleFilterClick(subcategory)}
                            className={`md:px-3 md:py-1 px-2 py-1 rounded-md border-2 border-[#097392] font-medium text-xs  ${selectedSubCategory === subcategory
                                ? 'bg-[#097392] text-white'
                                : 'bg-white text-black'
                                }`}
                        >
                            {subcategory}
                        </button>
                    ))}
                </div>
            )}
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:mt-0 md:px-10 px-4 justify-center items-center">
                    {(hasSubCategories && selectedSubCategory && selectedSubCategory !== 'All Products') && (
                        <div className="mt-14">

                            <div className="flex items-center justify-center border-t-[2px] border-gray-400  relative my-5 mb-10">
                                <h2 className="md:text-xl text-lg font-bold mb-5 text-center absolute top-[-16px] px-4 bg-white transition-all ease-in">
                                    {selectedSubCategory}
                                </h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center">
                                {allGroupedProducts[selectedSubCategory]?.map((item) => (
                                    <ProductCard
                                        key={item._id}
                                        data={item}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    )}

                    {(selectedSubCategory === 'All Products' || selectedSubCategory === null) && (

                        <div className="mt-14">
                            {products.length === 0 ? (<NoResults />) :
                                (
                                    <>
                                        <div className="flex items-center justify-center border-t-[2px] border-gray-400  relative my-5 mb-10">
                                            <h2 className="md:text-xl text-lg font-bold mb-5 text-center absolute top-[-16px] px-4 bg-white">All Products</h2>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center">
                                            {
                                                productswithoutaccesories.map((item) => (
                                                    <ProductCard
                                                        key={item._id}
                                                        data={item}
                                                    />
                                                ))}
                                        </div>

                                        {accessories.length > 0 && (
                                            <>
                                                <div className="flex items-center justify-center border-t-[2px] border-gray-400  relative md:mt-24 mt-16 mb-10">
                                                    <h2 className="md:text-xl text-lg font-bold mb-7 text-center absolute top-[-16px] px-4 bg-white">Accessories</h2>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center">
                                                    {
                                                        accessories.map((item) => (
                                                            <ProductCard
                                                                key={item._id}
                                                                data={item}
                                                            />
                                                        ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilteredProducts;

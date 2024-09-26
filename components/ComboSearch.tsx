import React, { useState, useEffect } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import { Category, Product } from '@/types';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/hooks/useProductStore';

interface SearchProps {
    categories: Category[];
    products: Product[];
}

const ComboSearch: React.FC<SearchProps> = ({ categories, products }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const {emptyUpgrades,setQuantity, setQuantities} = useProductStore()

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        handleSearch(searchInput);
    };

    const handleSearch = (value: string) => {
        setSearchInput(value);

        let results = products;

        if (selectedCategory) {
            results = results.filter(product => {
                const isMainCategoryMatch = product.category.name === selectedCategory;
                const isAdditionalCategoryMatch = product.additionalCategories?.some(
                    additionalCategory => additionalCategory === selectedCategory
                );
                return isMainCategoryMatch || isAdditionalCategoryMatch;
            });
        }

        if (value) {
            results = results.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
        }

        setFilteredProducts(results);
    };

    const handleProductClick = (id: string) => {
        emptyUpgrades()
        setQuantity(0)
        setQuantities({})
        router.push(`/product/${id}`);
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        handleSearch(searchInput);
    }, [selectedCategory, searchInput]);

    return (
        <div className=' ' onBlur={handleBlur}>
            <div className="relative lex flex-col">
                <div className="flex border-2 border-[#EBEEF6] md:rounded-full rounded-2xl lg:text-sm text-xs mx-auto relative">
                    <div className="flex bg-[#EBEEF6] md:rounded-s-full rounded-s-3xl lg:px-4 px-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 outline-none border-0 text-nowrap">
                                {selectedCategory || "All Categories"} <ChevronDown strokeWidth={2} size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onSelect={() => handleCategorySelect(null)}>All Categories</DropdownMenuItem>
                                {categories.map((category) => (
                                    <DropdownMenuItem key={category._id} onSelect={() => handleCategorySelect(category.name)}>
                                        {category.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex px-4 py-2 gap-10">
                        <input
                            placeholder="Search anything..."
                            className="outline-none border-0"
                            onFocus={() => setOpen(true)}
                            value={searchInput}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <Search strokeWidth={1} color="#23A6F0" className="cursor-pointer md:block hidden" />
                    </div>
                </div>
                {open &&
                    <div className="mt-2 absolute top-12 right-0 bg-[#ffffff] shadow-lg border rounded-md z-[9999] max-h-[40vh] overflow-y-scroll scrollbar-thin">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div
                                    key={product._id}
                                    className="py-3 px-5 text-sm md:text-base font-medium cursor-pointer hover:bg-[#f5f5f5] "
                                    onClick={() => handleProductClick(product._id)}
                                >
                                    {product.name}
                                </div>
                            ))
                        ) : (
                            <div className="p-3">No products found.</div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default ComboSearch;

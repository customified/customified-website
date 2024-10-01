import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/shadcn/navigation-menu";
import { Category, Industry, Product } from "@/types";
import Link from "next/link";

interface props {
  products: Product[];
  industries: Industry[];
}


const ProductsIndustry: React.FC<props> = ({ products, industries }) => {
  return (
    <>
      <NavigationMenu className="w-full  ">
        <NavigationMenuList className="w-full flex justify-between">
          <div className="flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" text-xs  py-2.5">All Products</NavigationMenuTrigger>
              <NavigationMenuContent className="px-8 md:px-5 py-4 z-50 h-[50vh] overflow-y-scroll scrollbar-thin">

                {products.map(product => (
                  <div className="flex flex-col flex-wrap z-50 gap-1" key={product._id}>
                    <NavigationMenuLink className="text-nowrap md:w-[25vw] font-semibold text-gray-700 text-sm md:text-sm py-1.5 rounded px-3 hover:bg-gray-100 hover:text-black"><Link href={`/product/${product._id}`}>{product.name}</Link></NavigationMenuLink>
                  </div>
                ))}

              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" text-xs  py-2.5">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent className="px-8 md:px-5 py-4 z-50 overflow-y-scroll scrollbar-thin">
                {industries.map(industry => (
                  <div className="flex flex-col gap-2 " key={industry._id}>
                    <NavigationMenuLink className="text-nowrap md:w-[15vw] font-semibold text-gray-700 text-sm md:text-sm py-1.5 rounded px-3 hover:bg-gray-100 hover:text-black"><Link href={`/industry/${industry._id}`}>{industry.name}</Link></NavigationMenuLink>
                  </div>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export default ProductsIndustry
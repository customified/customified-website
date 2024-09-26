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

interface props{
  categorys: Category[];
  products: Product[];
  industries: Industry[];
}


const ProductsIndustry: React.FC<props> = ({products, categorys, industries}) => {
  return (
    <>
      <NavigationMenu className="w-full  ">
        <NavigationMenuList className="w-full flex justify-between">
          <div className="flex">
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-xs  py-2.5">All Products</NavigationMenuTrigger>
            <NavigationMenuContent className="px-8 md:px-10 py-10 z-50 h-[50vh] overflow-y-scroll scrollbar-thin">

              {products.map(product =>(
                <div className="flex flex-col flex-wrap z-50 " key={product._id}>
                 <NavigationMenuLink className="text-nowrap md:w-[25vw] font-semibold text-sm md:text-base "><Link href={`/product/${product._id}`}>{product.name}</Link></NavigationMenuLink><br/>
                 </div>
              ))}
             
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-xs  py-2.5">
           Industries
            </NavigationMenuTrigger>
            <NavigationMenuContent className="px-8 md:px-10 py-10  z-50  overflow-y-scroll scrollbar-thin">
            {industries.map(industry =>(
                <div className="flex flex-col gap-2 " key={industry._id}>
                 <NavigationMenuLink className="text-nowrap font-semibold text-sm md:text-base"><Link href={`/industry/${industry._id}`}>{industry.name}</Link></NavigationMenuLink><br/>
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
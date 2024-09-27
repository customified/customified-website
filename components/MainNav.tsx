"use client"

import { Category, Industry, Product } from "@/types";
import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import ComboSearch from "./ComboSearch";
import ProductsIndustry from "./ProductsIndustry";
import Container from "./ui/Container";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "./ui/shadcn/navigation-menu";

interface MainNavProps {
  categories: Category[];
  products: Product[];
  industries: Industry[];
}
export const revalidate = 0

const MainNav: React.FC<MainNavProps> = ({ categories, products, industries }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isNavOpen);
  }, [isNavOpen]);
  return (
    <>
      <div className="md:hidden md:mb-0 flex self-center justify-center items-center w-full mb-4 ">
        <ComboSearch categories={categories} products={products} />
      </div>
      <div className="bg-[#393939] text-white self-center flex items-center justify-center">
        <div className="max-w-[1580px]  md:w-[82%] w-[95%]">

          <nav className="items-center space-x-4 w-full flex justify-between">

            <NavigationMenu className="w-full  hidden md:flex">
              <NavigationMenuList className="w-full flex justify-between">
                <div className="flex">
                  {categories.slice(1).map((category) => (
                    <NavigationMenuItem key={category._id}>
                      <NavigationMenuTrigger className=" text-xs  py-2.5">{category.name}</NavigationMenuTrigger>
                      <NavigationMenuContent className="px-8 md:px-10 py-10 z-50 h-[50vh] overflow-y-scroll scrollbar-thin">

                        {products.filter(product => product.category._id === category._id).map(product => (
                          <div className="flex flex-col flex-wrap z-50 " key={product._id}>
                            <NavigationMenuLink className="text-nowrap md:w-[25vw] font-semibold text-sm "><Link href={`/product/${product._id}`}>{product.name}</Link></NavigationMenuLink><br />
                          </div>
                        ))}

                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </div>
              </NavigationMenuList >
            </NavigationMenu>

            <div className="flex items-center">
            <ProductsIndustry categorys={categories} products={products} industries={industries} />

            <div className="flex font-semibold space-x-8 md:text-sm text-xs">
              {/* mobile menu */}
              <button className="flex" onClick={handleNavToggle}>
                <Menu size={20} />
              </button>
            </div>
            </div>
          </nav>
        </div>
      </div>
      <Container>
        <div className="mt-5 md:px-12 px-4 ">
          <CategoryList category={categories} />
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      <div
        className={`absolute bg-[#181818] inset-0 z-40 w-screen h-screen md:w-[35vw] flex flex-col p-2 transition-transform duration-500 transform ${isNavOpen ? "translate-x-0" : "-translate-x-[120%]"
          }`}
      >
        <div className="flex w-full h-24 px-5 text-white items-center justify-between md:justify-between">
          <Link href="/" className="text-2xl  font-normal pr-1">
            Browse
          </Link>

          <button onClick={handleNavToggle} className="text-3xl ">
            {isNavOpen ? "✕" : "☰"}
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center space-y-5 md:space-y-3  pt-20 text-white">
          <Link href="/ordertracker" onClick={handleNavToggle} className=" ">
            Order Tracking
          </Link>
          <Link href="/recentviews" onClick={handleNavToggle} className=" ">
            Recently Viewed
          </Link>
        </nav>
      </div>
    </>
  );
}

export default MainNav;
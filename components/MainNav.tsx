"use client";

import { Category, Industry, Product } from "@/types";
import { ChevronRight, ChevronsRight, Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import ComboSearch from "./ComboSearch";
import ProductsIndustry from "./ProductsIndustry";
import Container from "./ui/Container";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./ui/shadcn/navigation-menu";
import VideoComponent from "./homepageui/VideoComponent";
import Image from "next/image";

interface MainNavProps {
  categories: Category[];
  products: Product[];
  industries: Industry[];
}
export const revalidate = 0;

const MainNav: React.FC<MainNavProps> = ({
  categories,
  products,
  industries,
}) => {
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
      <div className="bg-white self-center flex items-center justify-center border border-gray-200 py-3">
        <div className="max-w-[1580px]  md:w-[82%] w-full">
          <nav className="items-center md:space-x-4 w-full flex justify-between">
            <NavigationMenu className="w-full  hidden md:flex ">
              <NavigationMenuList className="w-full flex justify-between ">
                <div className="flex">
                  {categories.slice(1).map((category) => (
                    <NavigationMenuItem key={category._id}>
                      <NavigationMenuTrigger className=" text-xs  py-2.5 hover:bg-teal-600 hover:text-white">
                        {category.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-gray-50 px-3 py-2 z-50 max-h-[45vh] md:w-[70vw] border-t-2 border-teal-600">
                        <div className="flex justify-between">
                          <div className="grid grid-cols-2">
                            {products
                              .filter(
                                (product) =>
                                  product.category._id === category._id
                              )
                              .map((product) => (
                                <div
                                  className="flex flex-col z-50 py-2"
                                  key={product._id}
                                >
                                  <NavigationMenuLink className="">
                                    <Link
                                      href={`/product/${product._id}`}
                                      className=" text-sm hover:underline hover:text-teal-600 flex items-center gap-x-2"
                                    >
                                      <ChevronsRight className="w-4 h-4" />
                                      {product.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </div>
                              ))}
                          </div>
                          <div className="">
                            <Image
                              src={"/Promo-Banner-Home-Auto.jpg"}
                              alt="divider"
                              className="max-h-[45vh]"
                              width={200}
                              height={200}
                            />
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </div>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center w-full justify-evenly  md:justify-end">
              <ProductsIndustry products={products} industries={industries} />

              <div className="flex font-semibold space-x-8 md:text-sm text-xs ">
                {/* mobile menu */}
                <button className="flex" onClick={handleNavToggle}>
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <VideoComponent /> */}
      {/* <Container>
        <div className="mt-5 md:px-12 px-4 ">
          <CategoryList category={categories} />
        </div>
      </Container> */}

      {/* Mobile Navigation Panel */}
      <div
        className={`absolute bg-[#181818] inset-0 z-40 w-screen h-screen md:w-[35vw] flex flex-col p-2 transition-transform duration-500 transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-[120%]"
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
};

export default MainNav;

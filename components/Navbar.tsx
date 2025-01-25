import GetCategories from "@/actions/get-categories";
import Link from "next/link";
import MainNav from "./MainNav";
import NavbarActions from "./NavbarActions";
import Container from "./ui/Container";
import GetProducts from "@/actions/get-products";
import GetIndustries from "@/actions/get-industries";

import Image from "next/image";
export const revalidate = 0;

const Navbar = async () => {
  const categories = await GetCategories();
  const products = await GetProducts();
  const industries = await GetIndustries();

  return (
    <>
        <div className=" flex justify-between sticky top-0 bg-gray-50 z-50 border-b border-gray-200">
          <Link href="/" className="md:ml-4 flex lg:ml-4 ">
            <Image
                src="/logo.jpg"
                height={100}
                width={150}
                alt="customified-logo"
                className=""
              />
            </Link>
            
          <NavbarActions category={categories} products={products} />
        </div>
      <MainNav
        categories={categories}
        products={products}
        industries={industries}
      ></MainNav>
    </>
  );
};

export default Navbar;

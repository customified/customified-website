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
      <div className="">
        <Container>
          <div className="relative md:px-4 px-2 lg:px-8 flex md:h-[70px] h-[60px] items-center gap-2 md:justify-center justify-between  ">
            <Link href="/" className="md:ml-4 flex lg:ml-0 ">
              <Image
                src="/logo.png"
                height={85}
                width={200}
                alt="Imprintion"
                className=" w-[80%] "
              />
            </Link>
            <NavbarActions category={categories} products={products} />
          </div>
        </Container>
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

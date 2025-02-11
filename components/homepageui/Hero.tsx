"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import ProductCard from "../ui/ProductCard";

interface Heroprops {
  filteredProducts: Product[];
}

const PAGE_SIZE = 8; // Customize the number of products to load per page

const HeroSection: React.FC<Heroprops> = ({ filteredProducts }) => {
  const [showHero, setShowHero] = useState(true);
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setShowHero(false);
    // }, 3000);
    // return () => clearTimeout(timer);
  }, []);

  // Load products based on pagination
  const loadMoreProducts = useCallback(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const newProducts = filteredProducts.slice(start, end);

    if (newProducts.length === 0) {
      setHasMore(false); // Stop loading if no more products
      return;
    }

    setProductsToShow((prevProducts) => [...prevProducts, ...newProducts]);
  }, [filteredProducts, page]);

  useEffect(() => {
    loadMoreProducts();
  }, [page, loadMoreProducts]);

  // Intersection Observer to detect scrolling
  const lastProductRef = useCallback(
    (node: HTMLDivElement) => {
      if (!hasMore || !node) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <>
      {/* <div
        className={`hero-section ${
          showHero ? "visible" : "hidden"
        } flex md:flex-row flex-col md:gap-5 gap-8 lg:py-20 py-10`}
      >
        <div className="flex flex-col md:gap-5 gap-3 md:w-[50%] md:pt-14 pt-10">
          <h2 className="text-center font-bold text-base text-[#097392] xl:pb-3 pb-0">
            Create, Customize, Imprint
          </h2>
          <h1 className="text-center font-bold text-4xl md:text-5xl md:pb-2 pb-1 md:px-10 px-3 md:leading-[60px] text-[#252B42]">
            Craft Your Unique Identity with Imprintion
          </h1>
          <p className="text-center text-[#737373] text-xs md:font-normal font-medium xl:text-[20px] xl:leading-[30px] pb-2">
            Endless Customization Options to Express Yourself
          </p>
          <Link href="/#products" className="self-center">
            <button className="text-xs md:text-sm font-bold bg-[#097392] border border-[#23A6F0] xl:py-4 xl:px-9 px-6 py-3 text-white w-fit self-center rounded">
              SHOP NOW
            </button>
          </Link>
        </div>

        {showHero && (
          <div className="flex xl:w-[50%] md:w-[45%]">
            <Image
              src="https://res.cloudinary.com/dwpdwkw5h/image/upload/v1727448506/hero-img_1_1_1_jwwjst.png"
              alt="hero image"
              width={662}
              height={600}
              priority={showHero ? true : false}
              loading={showHero ? "eager" : "lazy"}
              className="rounded-lg border-0 w-fit"
            />
          </div>
        )}
      </div> */}

      {/* Top Products List with Infinite Scroll */}
      <div
        className={`top-products ${
          showHero ? "" : "scroll-up"
        } flex flex-col gap-5 px-4 sm:px-3 lg:px-4 items-center justify-center md:pb-20 md:pt-16 py-16 w-full`}
      >
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex items-center justify-center border-gray-600 border-b-2 relative w-[94%]">
            <h1
              className="flex gap-1 md:text-[27px] text-xl font-semibold text-black text-center px-4 bg-white w-fit absolute bottom-[-17px]"
              id="products"
            >
              <span className="text-[#097392]">Top </span>Products
            </h1>
          </div>
          <h2 className="text-[13px] md:text-base text-gray-600">
            Discover What{`'`}s Hot and Trending Now
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:gap-5 gap-4 md:mx-3">
          {productsToShow.map((product, index) => {
            if (productsToShow.length === index + 1) {
              // Attach last product ref to trigger loading more
              return (
                <div key={product._id} ref={lastProductRef}>
                  <ProductCard data={product} />
                </div>
              );
            } else {
              return (
                <div key={product._id}>
                  <ProductCard data={product} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

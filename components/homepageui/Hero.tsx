'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import ProductCard from '../ui/ProductCard';

interface Heroprops {
  filteredProducts: Product[]
}

const HeroSection: React.FC<Heroprops> = ({ filteredProducts }) => {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showHero]);

  return (
    <>
      <div className={`hero-section ${showHero ? 'visible' : 'hidden'} flex md:flex-row flex-col md:gap-5 gap-8 lg:py-20 py-10`}>
        <div className="flex flex-col md:gap-5 gap-3  md:w-[50%] md:pt-14 pt-10">
          <h2 className="text-center font-bold text-base  text-[#097392] xl:pb-3 pb-0">Create, Customize, Imprint</h2>
          <h1 className="text-center font-bold text-4xl md:text-5xl  md:pb-2 pb-1 md:px-10 px-3  md:leading-[60px] text-[#252B42]">Craft Your Unique Identity with Imprintion</h1>
          <p className="text-center text-[#737373] text-xs md:font-normal font-medium xl:text-[20px] xl:leading-[30px] pb-2">Endless Customization Options to Express Yourself</p>
          <Link href='/#products' className="self-center">
            <button className=" text-xs md:text-sm font-bold bg-[#097392] border border-[#23A6F0] xl:py-4 xl:px-9 px-6 py-3 text-white w-fit self-center rounded">SHOP NOW</button>
          </Link>
        </div>

        <div className="flex xl:w-[50%] md:w-[45%]">
          <Image
            src='https://res.cloudinary.com/dwpdwkw5h/image/upload/v1727448506/hero-img_1_1_1_jwwjst.png'
            alt='hero image'
            width={662}
            priority={true}
            height={600}
          />
        </div>
      </div>

      {/* Top Products list */}
      <div className={`top-products ${showHero ? '' : 'scroll-up '} flex flex-col gap-8 px-4 sm:px-6 lg:px-8 items-center justify-center md:pb-20 md:pt-16 py-16 w-full`}>
        <div className='flex flex-col items-center gap-5 w-full'>
          <div className="flex items-center justify-center border-gray-600 border-b-2 relative w-[94%]">
            <h1 className="flex gap-1 md:text-[27px] text-xl font-semibold text-black text-center px-4 bg-white w-fit absolute bottom-[-17px]" id='products'><span className="text-[#097392]">Top </span>Products</h1>
          </div>
          <h2 className="text-[13px] md:text-base text-gray-600">Discover What{`'`}s Hot and Trending Now</h2>
        </div>

          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-4 md:mx-10">
            {filteredProducts.map(product => (
                <ProductCard data={product} key={product._id} />
            ))}
          </div>
      </div>

    </>
  );
};

export default HeroSection;

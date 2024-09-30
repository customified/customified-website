import GetCategories from "@/actions/get-categories";
import GetProducts from "@/actions/get-products";
import Container from "@/components/ui/Container";

import dynamic from 'next/dynamic';
import React, { lazy, Suspense } from "react";

const HeroSection = React.memo(dynamic(() => import('@/components/homepageui/Hero'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
}));

const HowItWorks = lazy(() => import('@/components/homepageui/HowItWorks'));
const Categories = lazy(() => import('@/components/homepageui/Categories'));

export const revalidate = 3600;
export const dynamicParams = true

const HomePage = async () => {
  const categories = await GetCategories()
  const cat = categories.slice(1)

  const products = await GetProducts()

  const filteredProducts = products.filter(product => product.isFeatured)
  return (
    <Container>
      <div className=" pb-10">

        {/* hero */}
        <HeroSection filteredProducts={filteredProducts} />

        {/* Categories */}
        <Suspense fallback={<div>Loading Categories...</div>}>
          <Categories cat={cat} data={products} />
        </Suspense>

        {/* how it works  */}
        <Suspense fallback={<div>Loading How It Works...</div>}>
          <HowItWorks />
        </Suspense>
      </div>
    </Container>
  )
}

export default HomePage
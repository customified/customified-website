"use client";

import Image from "next/image";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import { useSvgStore } from "@/hooks/useSvgStore";
import { lazy, Suspense, useState, useEffect } from "react";
import { Product } from "@/types";
import InfoSummary from "../ui/InfoSummary";
import { Button } from "../ui/shadcn/Button";
import { HeartIcon, ShoppingCart, Info } from "lucide-react";
import { toggleWishlist } from "@/hooks/useAddToWishList";
import { useWishlist } from "@/hooks/useWishList";
import Currency from "../ui/Currency";
import { usePriceStore } from "@/hooks/usePriceStore";
import addToCart from "@/hooks/useAddToCart";
import { useRouter } from 'next/navigation';

//loazy loading svgs
const LanyardSvg = lazy(() => import("@/components/svg/LanyardSvg"));
const KoozieSvg = lazy(() => import("@/components/svg/KoozieSvg"));
const WristbandSvg = lazy(() => import("@/components/svg/WristbandSvg"));
const TshirtSvg = lazy(() => import("@/components/svg/TshirtSvg"));
const ToteBagSvg = lazy(() => import("@/components/svg/ToteBagSvg"));
const MugSvg = lazy(() => import("@/components/svg/MugSvg"));
const SweatshirtSvg = lazy(() => import("@/components/svg/SweatshirtSvg"));
const BackpackSvg = lazy(() => import("@/components/svg/BackpackSvg"));
const PoloShirtSvg = lazy(() => import("@/components/svg/PoloShirtSvg"));
const RoundBadgeSvg = lazy(() => import("@/components/svg/RoundBadgeSvg"));
const RectBadgeSvg = lazy(() => import("@/components/svg/RectBadgeSvg"));
const SquareBadgeSvg = lazy(() => import("@/components/svg/SquareBadgeSvg"));
const TriangleBadgeSvg = lazy(
  () => import("@/components/svg/TriangleBadgeSvg")
);
const HoodieSvg = lazy(() => import("@/components/svg/HoodieSvg"));
const JacketSvg = lazy(() => import("@/components/svg/JacketSvg"));
const DrawStringBagSvg = lazy(
  () => import("@/components/svg/DrawStringBagSvg")
);
const PaperBagSvg = lazy(() => import("@/components/svg/PaperBagSvg"));
const PlasticBagSvg = lazy(() => import("@/components/svg/PlasticBagSvg"));

interface GalleryProps {
  images: string[];
  data: Product;
}

const Gallery: React.FC<GalleryProps> = ({ images, data }) => {
  const router = useRouter();
  const { selectedImage } = useSvgStore();
  const { totalCost } = usePriceStore();
  const { wishitems } = useWishlist();
  const [showInfo, setShowInfo] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(totalCost);

  useEffect(() => {
    setCurrentPrice(totalCost);
  }, [totalCost]);

  const isInWishlist = wishitems.some((item) => item._id === data._id);

  const getCategorySvg = (categoryName: string) => {
    switch (categoryName) {
      case "Lanyards":
        return <LanyardSvg />;
      case "Wristbands":
        return <WristbandSvg />;
      default:
        return null;
    }
  };

  const getSubCategorySvg = (subCategoryName: string) => {
    switch (subCategoryName) {
      case "Tote Bags":
        return <ToteBagSvg />;
      case "Wristbands":
        return <WristbandSvg />;
      case "Paper Bags":
        return <PaperBagSvg />;
      case "Plastic Bags":
        return <PlasticBagSvg />;
      case "Drawstring Bags":
        return <DrawStringBagSvg />;
      case "Backpacks":
        return <BackpackSvg />;
      case "T-shirts":
        return <TshirtSvg />;
      case "Polos":
        return <PoloShirtSvg />;
      case "Sweatshirt":
        return <SweatshirtSvg />;
      case "Hoodies":
        return <HoodieSvg />;
      case "Jacket":
        return <JacketSvg />;
      case "Mugs":
        return <MugSvg />;
      case "Koozies":
        return <KoozieSvg />;
      case "Round Badges":
        return <RoundBadgeSvg />;
      case "Square Badges":
        return <SquareBadgeSvg />;
      case "Rectangle Badges":
        return <RectBadgeSvg />;
      case "Triangle Badges":
        return <TriangleBadgeSvg />;
      default:
        return null;
    }
  };

  const renderSvg = () => {
    const filteredCategories = data.additionalCategories?.filter(
      (category) =>
        !["New Arrivals", "On Sale", "Accessories"].includes(category)
    );

    if (filteredCategories && filteredCategories.length > 0) {
      return getSubCategorySvg(filteredCategories[0]);
    } else {
      return getCategorySvg(data.category.name);
    }
  };

  return (
    <TabGroup as="div" className="flex flex-col-reverse z-50">
      <div className="md:mx-auto mx-2 mt-2 w-full max-w-xl sm:block lg:max-w-none">
        <div className="mt-2 bg-white rounded-lg shadow-sm p-4 border">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  <Currency data={currentPrice} />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full p-2"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <Info className={`w-5 h-5 ${showInfo ? 'text-teal-600' : 'text-gray-500'}`} />
                </Button>
              </div>
              <Button
                variant="default"
                className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md shadow-md"
                onClick={() => addToCart(router)}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </Button>
            </div>
            <div className={`flex items-center justify-between border-t pt-4 ${showInfo ? '' : 'hidden'}`}>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                onClick={() => {
                  toggleWishlist(data);
                }}
              >
                {isInWishlist ? (
                  <HeartIcon className="w-6 h-6 text-red-500" />
                ) : (
                  <HeartIcon className="w-6 h-6" />
                )}
              </Button>
              <InfoSummary />
            </div>
          </div>
        </div>
      </div>
      <TabPanels>
        {selectedImage &&
        !data.additionalCategories?.includes("Accessories") &&
        !data.additionalCategories?.includes("Blank Lanyards") ? (
          <TabPanel>
            <div className="aspect-square sm:rounded-lg  border-2 max-h-80 md:max-h-96">
              <Suspense fallback={<div>Loading SVG...</div>}>
                {renderSvg()}
              </Suspense>
            </div>
          </TabPanel>
        ) : (
          images.map((image) => (
            <TabPanel key={image}>
              <div className="aspect-square relative sm:rounded-lg overflow-hidden border-2 max-h-60 md:max-h-96">
                <Image
                  fill
                  src={image}
                  alt="Image"
                  className="object-cover object-center"
                />
              </div>
            </TabPanel>
          ))
        )}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;

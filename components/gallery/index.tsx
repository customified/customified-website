"use client";

import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import { Image as ImageType, Product } from "@/types";
import { useSvgStore } from "@/hooks/useSvgStore";
import { useEffect } from "react";
import LanyardSvg from "@/components/svg/LanyardSvg";
import KoozieSvg from "@/components/svg/KoozieSvg";
import WristbandSvg from "../svg/WristbandSvg";
import TshirtSvg from "../svg/TshirtSvg";
import ToteBagSvg from "../svg/ToteBagSvg";
import MugSvg from "../svg/MugSvg";
import SweatshirtSvg from "../svg/SweatshirtSvg";
import BackpackSvg from "../svg/BackpackSvg";
import PoloShirtSvg from "../svg/PoloShirtSvg";
import RoundBadgeSvg from "../svg/RoundBadgeSvg";
import RectBadgeSvg from "../svg/RectBadgeSvg";
import SquareBadgeSvg from "../svg/SquareBadgeSvg";
import TriangleBadgeSvg from "../svg/TriangleBadgeSvg";
import HoodieSvg from "../svg/HoodieSvg";
import JacketSvg from "../svg/JacketSvg";
import DrawStringBagSvg from "../svg/DrawStringBagSvg";
import PaperBagSvg from "../svg/PaperBagSvg";
import PlasticBagSvg from "../svg/PlasticBagSvg";

interface GalleryProps {
  images: string[];
  data: Product;
}

const Gallery: React.FC<GalleryProps> = ({ images, data }) => {
  const { selectedImage, setSelectedImage } = useSvgStore();

  const getCategorySvg = (categoryName: string) => {
    switch (categoryName) {
      case 'Lanyards':
        return <LanyardSvg />;
      case 'Wristbands':
        return <WristbandSvg />;
      default:
        return null;
    }
  };

  const getSubCategorySvg = (subCategoryName: string) => {
    switch (subCategoryName) {
      case 'Tote Bags':
        return <ToteBagSvg />;
      case 'Wristbands':
        return <WristbandSvg />;
      case 'Paper Bags':
        return <PaperBagSvg />;
      case 'Plastic Bags':
        return <PlasticBagSvg />;
      // case 'Gift bags':
      //   return <GiftBagSvg />;
      case 'Drawstring Bags':
        return <DrawStringBagSvg />;
      case 'Backpacks':
        return <BackpackSvg />;
      case 'T-shirts':
        return <TshirtSvg />;
      case 'Polos':
        return <PoloShirtSvg />;
      case 'Sweatshirt':
        return <SweatshirtSvg />;
      case 'Hoodies':
        return <HoodieSvg />;
      case 'Jacket':
        return <JacketSvg />;
      case 'Mugs':
        return <MugSvg />;
      case 'Koozies':
        return <KoozieSvg />;
      // case 'Tumblers':
      //   return <TumblerSvg />;
      // case 'Beer mugs':
      //   return <BeerMugSvg />;
      case 'Round Badges':
        return <RoundBadgeSvg />;
      case 'Square Badges':
        return <SquareBadgeSvg />;
      case 'Rectangle Badges':
        return <RectBadgeSvg />;
      case 'Triangle Badges':
        return <TriangleBadgeSvg />;
      default:
        return null;
    }
  };

  const renderSvg = () => {
    const filteredCategories = data.additionalCategories?.filter(
      (category) => !["New Arrivals", "On Sale", "Accessories"].includes(category)
    );

    if (filteredCategories && filteredCategories.length > 0) {
      return getSubCategorySvg(filteredCategories[0]);
    } else {
      return getCategorySvg(data.category.name);
    }
  };

  console.log(selectedImage)

  return (
    <TabGroup
      as="div"
      className="flex flex-col-reverse"
    >
      <div className="md:mx-auto mx-2 mt-6 w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid md:grid-cols-4 grid-cols-3 gap-6">
          {images.map((image) => (
            <GalleryTab key={image} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels>
        {selectedImage && !(data.additionalCategories?.includes('Accessories')) && !(data.additionalCategories?.includes('Blank Lanyards')) ? (
          <TabPanel >
            <div className="aspect-square sm:rounded-lg  border-2 ">
              {renderSvg()}
            </div>
          </TabPanel>

        ) : (
          images.map((image) => (
            <TabPanel key={image}>
              <div className="aspect-square relative sm:rounded-lg overflow-hidden border-2">
                <Image
                  fill
                  src={image}
                  alt="Image"
                  className="object-cover object-center"
                />
              </div>
            </TabPanel>
          ))
        )
        }


      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;

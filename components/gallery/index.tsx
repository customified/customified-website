"use client";

import Image from "next/image";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import { useSvgStore } from "@/hooks/useSvgStore";
import { lazy, Suspense } from "react";
import { Product } from "@/types";

//loazy loading svgs
const LanyardSvg = lazy(() =>  import("@/components/svg/LanyardSvg"));
const KoozieSvg = lazy(() =>  import("@/components/svg/KoozieSvg"));
const WristbandSvg = lazy(() =>  import("@/components/svg/WristbandSvg"));
const TshirtSvg = lazy(() =>  import("@/components/svg/TshirtSvg"));
const ToteBagSvg = lazy(() =>  import("@/components/svg/ToteBagSvg"));
const MugSvg = lazy(() =>  import("@/components/svg/MugSvg"));
const SweatshirtSvg = lazy(() =>  import("@/components/svg/SweatshirtSvg"));
const BackpackSvg = lazy(() =>  import("@/components/svg/BackpackSvg"));
const PoloShirtSvg = lazy(() =>  import("@/components/svg/PoloShirtSvg"));
const RoundBadgeSvg = lazy(() =>  import("@/components/svg/RoundBadgeSvg"));
const RectBadgeSvg = lazy(() =>  import("@/components/svg/RectBadgeSvg"));
const SquareBadgeSvg = lazy(() =>  import("@/components/svg/SquareBadgeSvg"));
const TriangleBadgeSvg = lazy(() =>  import("@/components/svg/TriangleBadgeSvg"));
const HoodieSvg = lazy(() =>  import("@/components/svg/HoodieSvg"));
const JacketSvg = lazy(() =>  import("@/components/svg/JacketSvg"));
const DrawStringBagSvg = lazy(() =>  import("@/components/svg/DrawStringBagSvg"));
const PaperBagSvg = lazy(() =>  import("@/components/svg/PaperBagSvg"));
const PlasticBagSvg = lazy(() =>  import("@/components/svg/PlasticBagSvg"));

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
              <Suspense fallback={<div>Loading SVG...</div>}>
                {renderSvg()}
              </Suspense>
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

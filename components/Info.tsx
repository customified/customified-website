"use client";

import { Button } from "@/components/ui/shadcn/Button";
import Currency from "@/components/ui/Currency";
import Upgrades from "@/components/ui/Upgrades";
import CustomColor from "@/components/ui/CustomColor";
import { Customization, CustomizationType, Product } from "@/types";
import { usePriceStore } from "@/hooks/usePriceStore";
import { useProductStore } from "@/hooks/useProductStore";
import { useSvgStore } from "@/hooks/useSvgStore";
import addToCart from "@/hooks/useAddToCart";
import DatePicker from "@/components/ui/DatePicker";

import { useEffect, useState } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { HeartIcon, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoSummary from "./ui/InfoSummary";
import { useRecentlyViewed } from "@/hooks/useRecentView";
import { useWishlist } from "@/hooks/useWishList";
import { toggleWishlist } from "@/hooks/useAddToWishList";
import dynamic from "next/dynamic";
import Quantity from "./ui/Quantity";
import { Label } from "@/components/ui/shadcn/label";

interface Infoprops {
  data: Product;
  items: Product[];
}

const CustomFont = dynamic(() => import("@/components/ui/CustomFont"), {
  ssr: false,
});

const Info: React.FC<Infoprops> = ({ data, items }) => {
  const [noteText, setNoteText] = useState("");
  const [selectedLanyardLength, setSelectedLanyardLength] = useState<string | undefined>(undefined);

  const { basePriceForDatePicker } = usePriceStore();

  const { setSelectedImage } = useSvgStore();
  const router = useRouter();
  const {
    product,
    setProduct,
    setCategory,
    setProductSize,
    emptyUpgrades,
    productSize,
    setImage,
    setProductID,
    setQuantities,
    setAdditional,
    setQuantity,
    setOrderNote,
    deliveryDate,
    setDeliveryDate,
    setLanyardLength,
  } = useProductStore();
  const { totalCost } = usePriceStore();
  const { addItem } = useRecentlyViewed();
  const { wishitems } = useWishlist();
  const isInWishlist = wishitems.some((item) => item._id === data._id);

  useEffect(() => {
    if (basePriceForDatePicker > 0) {
      const date = new Date();
      date.setDate(date.getDate() + 7);
      setDeliveryDate(date);
      const { setDeliveryCostPerUnit } = usePriceStore.getState();
      setDeliveryCostPerUnit(basePriceForDatePicker);
    }
  }, [basePriceForDatePicker]);

  useEffect(() => {
    setProduct(data.name);
    setCategory(data.category.name);
    const sizeCustomization = data.customizations.find(
      (customization) => customization.type === "Size"
    );
    const size = sizeCustomization?.options?.[0]?.name;

    setProductSize(size);
    setImage(data.images[0]);
    setProductID(data._id);
    setAdditional(data.additionalCategories ? data.additionalCategories : []);
    addItem(data);
    setOrderNote(data.orderNote);
    
    // Reset lanyard length when product changes
    setSelectedLanyardLength(undefined);
    setLanyardLength(undefined);
  }, [
    data,
    setProduct,
    setCategory,
    setProductSize,
    setImage,
    setProductID,
    setAdditional,
    addItem,
    setOrderNote,
    setLanyardLength,
  ]);

  // Handle lanyard length selection
  const handleLanyardLengthSelect = (length: string) => {
    setSelectedLanyardLength(length);
    setLanyardLength(length);
  };

  const renderCustomization = (customization: Customization) => {
    switch (customization.type) {
      case CustomizationType.Size:
        return (
          <div
            key={customization.id}
            className="flex flex-col w-full pt-5 gap-4"
          >
            <div className="flex flex-col items-center gap-4">
              <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
                STEP 2: Choose Size
              </h3>
               
              {/* Width options */}
              <div className="w-full px-4">
                {data.category.name === 'Lanyards' && (
                  <h4 className="font-medium text-gray-700 mb-3">Select Width</h4>
                )}
                <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
                  {customization.options?.map((option) => (
                    <button
                      key={option.id}
                      className={`flex flex-col items-center justify-center border-2 rounded-lg p-4 transition-transform transform 
                        ${
                          option.name === productSize
                            ? "border-teal-600 bg-teal-100 shadow-lg scale-105"
                            : "border-gray-300 hover:border-teal-500"
                        }`}
                      onClick={() => {
                        setSelectedImage(true);
                        setProductSize(option.name);
                      }}
                    >
                      {option.mediaUrl && (
                        <Image
                          loading="lazy"
                          width={56}
                          height={56}
                          src={option?.mediaUrl ? option.mediaUrl : ""}
                          alt={option.name}
                          className="h-14 w-14 object-contain mb-2"
                        />
                      )}
                      <span className="font-medium text-gray-800">
                        {option.name}
                      </span>
                      {option.value && (
                        <span className="text-sm text-gray-500">
                          {option.value}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Length options for Lanyards */}
              {data.category.name === 'Lanyards' && (
                <div className="w-full px-4 mt-4">
                  <h4 className="font-medium text-gray-700 mb-3">Select Length</h4>
                  <div className="flex flex-wrap gap-4 w-full">
                    {/* Small - 30 inch */}
                    <button
                      className={`flex flex-col items-center justify-center border-2 rounded-lg p-4 min-w-[150px] transition-transform transform 
                        ${
                          selectedLanyardLength === "Small (30 inch)"
                            ? "border-teal-600 bg-teal-100 shadow-lg scale-105"
                            : "border-gray-300 hover:border-teal-500"
                        }`}
                      onClick={() => handleLanyardLengthSelect("Small (30 inch)")}
                    >
                      <span className="font-medium text-gray-800 text-lg">Small</span>
                      <span className="text-sm text-gray-500">30 inch</span>
                    </button>

                    {/* Standard - 36 inch */}
                    <button
                      className={`flex flex-col items-center justify-center border-2 rounded-lg p-4 min-w-[150px] transition-transform transform 
                        ${
                          selectedLanyardLength === "Standard (36 inch)"
                            ? "border-teal-600 bg-teal-100 shadow-lg scale-105"
                            : "border-gray-300 hover:border-teal-500"
                        }`}
                      onClick={() => handleLanyardLengthSelect("Standard (36 inch)")}
                    >
                      <span className="font-medium text-gray-800 text-lg">Standard</span>
                      <span className="text-sm text-gray-500">36 inch</span>
                    </button>

                    {/* Large - 42 inch */}
                    <button
                      className={`flex flex-col items-center justify-center border-2 rounded-lg p-4 min-w-[150px] transition-transform transform 
                        ${
                          selectedLanyardLength === "Large (42 inch)"
                            ? "border-teal-600 bg-teal-100 shadow-lg scale-105"
                            : "border-gray-300 hover:border-teal-500"
                        }`}
                      onClick={() => handleLanyardLengthSelect("Large (42 inch)")}
                    >
                      <span className="font-medium text-gray-800 text-lg">Large</span>
                      <span className="text-sm text-gray-500">42 inch</span>
                    </button>

                    {/* Extra Large - 48 inch */}
                    <button
                      className={`flex flex-col items-center justify-center border-2 rounded-lg p-4 min-w-[150px] transition-transform transform 
                        ${
                          selectedLanyardLength === "Extra Large (48 inch)"
                            ? "border-teal-600 bg-teal-100 shadow-lg scale-105"
                            : "border-gray-300 hover:border-teal-500"
                        }`}
                      onClick={() => handleLanyardLengthSelect("Extra Large (48 inch)")}
                    >
                      <span className="font-medium text-gray-800 text-lg">Extra Large</span>
                      <span className="text-sm text-gray-500">48 inch</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case CustomizationType.Color:
        return (
          <div
            className="flex flex-col items-center gap-4"
            key={customization.id}
          >
            <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
              STEP 3: Choose {data.category.name} Color
            </h3>
            <CustomColor
              data={customization}
              items={data.customizations}
              deliveryCosts={data.deliveryCosts}
            />
          </div>
        );
      case CustomizationType.Text:
        return (
          <div
            className="flex flex-col items-center gap-4"
            key={customization.id}
          >
            <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
              STEP 4: Customize Your Message
            </h3>
            <CustomFont data={data} key={customization.id} />
            
            {/* Order Note */}
            <div className="w-full px-4 mt-4">
              <Label htmlFor="orderNote" className="text-md font-semibold block mb-2">Order Note</Label>
              <textarea
                id="orderNote"
                value={noteText}
                onChange={(e) => {
                  setNoteText(e.target.value);
                  setOrderNote(e.target.value);
                }}
                placeholder="Add any special instructions or notes for your order..."
                className="w-full p-3 border rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        );
      case CustomizationType.Quantity:
        return (
          <div
            className="flex flex-col items-center gap-4"
            key={customization.id}
          >
            <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
              STEP 5: Select Quantity
            </h3>
            <Quantity
              customizationOptions={data.customizations}
              deliveryCosts={data.deliveryCosts}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-10 border-t-2 pt-6 md:pt-4">
       {/* overflow-y-auto h-[80vh] */}
      <div className="flex flex-col space-y-8  pb-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent md:scrollbar-none">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {data.name}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-600">
            Customize Your {data.category.name} in just a few easy steps
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
            STEP 1: Pick a Type That Fits Your Needs
          </h3>

          {/* Product List */}
          <div className="mx-10 mt-6 w-full max-w-2xl sm:block lg:max-w-none">
            <TabGroup>
              <TabList className="grid md:grid-cols-4 grid-cols-2 gap-6">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className={`flex flex-col rounded-md bg-white border-2 px-2 pt-2 
                                        ${
                                          item.name === product
                                            ? "border-[#097392] bg-[#0972921f] shadow-md scale-[1.008] transition delay-75"
                                            : ""
                                        }`}
                  >
                    <Tab
                      key={item.images[0]}
                      className="relative flex aspect-square cursor-pointer items-center justify-center border-0 outline-none"
                      onClick={() => {
                        setSelectedImage(false);
                        emptyUpgrades();
                        setQuantity(0);
                        setQuantities({});
                        router.push(`/product/${item?.slug}`);
                      }}
                    >
                      <Image

                        fill
                        src={item.images?.[0]}
                        alt="image"
                        className="absolute md:h-full md:w-full aspect-square inset-0 overflow-hidden rounded-md object-cover object-center"
                      />
                    </Tab>

                    <h2 className="2xl:text-base md:text-sm text-xs font-semibold md:font-medium py-1.5 text-center">
                      {item.name}
                    </h2>
                  </div>
                ))}
              </TabList>
            </TabGroup>
          </div>
        </div>

        {data.customizations.map(renderCustomization)}

        {data.upgrades.length > 0 && (
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
              STEP 5: Additional Upgrades
            </h3>
            <Upgrades upgrades={data.upgrades} />
          </div>
        )}

        {basePriceForDatePicker > 0 && (
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-white text-lg w-full bg-teal-600 rounded-md px-6 py-2">
              Select Delivery Date
            </h3>
            <div className="w-full px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => {
                  const date = new Date();
                  date.setDate(date.getDate() + 7 + index);
                  const isSelected = deliveryDate && date.toDateString() === deliveryDate.toDateString();
                  
                  let dt;
                  if (index === 5) {
                    dt = 0; // Free delivery
                  } else {
                    dt = basePriceForDatePicker - basePriceForDatePicker * index * 0.1;
                  }
                  
                  const priceDisplay = index === 5 ? 'FREE' : `+$${dt.toFixed(2)}/pc`;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setDeliveryDate(date);
                        const { setDeliveryCostPerUnit } = usePriceStore.getState();
                        setDeliveryCostPerUnit(dt);
                      }}
                      className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 min-w-[200px] transition-all ${isSelected ? 'border-[#097392] bg-[#0972921f] scale-[1.02]' : 'border-gray-200 hover:border-[#097392]'}`}
                    >
                      <span className="text-4xl font-bold text-[#1a365d]">
                        {date.getDate()}
                      </span>
                      <span className="text-lg text-gray-600">
                        {date.toLocaleString('default', { month: 'long' })}, {date.getFullYear()}
                      </span>
                      <span className="text-lg text-[#097392] mt-2">
                        {priceDisplay}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <hr className="border-gray-200" />
      {/* <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-4">
          <div className="text-2xl md:text-3xl font-bold text-gray-900">
            <Currency data={totalCost} />
          </div>

          <div className="flex items-center space-x-4">
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
              <span>
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </span>
            </Button>

            <Button
              variant="default"
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md shadow-md"
              onClick={addToCart}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </Button>

            <InfoSummary />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Info;

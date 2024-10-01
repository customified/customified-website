"use client"

import { Button } from "@/components/ui/shadcn/Button";
import Currency from "@/components/ui/Currency";
import Upgrades from "@/components/ui/Upgrades";
import CustomColor from "@/components/ui/CustomColor";
import { Customization, CustomizationType, Product } from "@/types";
import { usePriceStore } from "@/hooks/usePriceStore";
import { useProductStore } from "@/hooks/useProductStore";
import { useSvgStore } from "@/hooks/useSvgStore";
import addToCart from "@/hooks/useAddToCart";

import { useEffect } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Heart, HeartIcon, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InfoSummary from "./ui/InfoSummary";
import { useRecentlyViewed } from "@/hooks/useRecentView";
import { useWishlist } from "@/hooks/useWishList";
import { toggleWishlist } from "@/hooks/useAddToWishList";
import dynamic from "next/dynamic";
import Quantity from "./ui/Quantity";


interface Infoprops {
    data: Product;
    items: Product[];
}

const CustomFont = dynamic(() => import('@/components/ui/CustomFont'), { ssr: false })


const Info: React.FC<Infoprops> = ({
    data,
    items
}) => {

    const { setSelectedImage } = useSvgStore();
    const router = useRouter()
    const { product, setProduct, setCategory, setProductSize, emptyUpgrades, productSize, setImage, setProductID , setQuantities , setAdditional, setQuantity} = useProductStore()
    const { totalCost} = usePriceStore()
    const { addItem } = useRecentlyViewed();
    const { wishitems  } = useWishlist();
    const isInWishlist = wishitems.some(item => item._id === data._id);


    useEffect(() => {
        setProduct(data.name)
        setCategory(data.category.name)
        const sizeCustomization = data.customizations.find(customization => customization.type === 'Size');
        const size = sizeCustomization?.options?.[0]?.name;

        setProductSize(size);
        setImage(data.images[0])
        setProductID(data._id)
        setAdditional(data.additionalCategories? data.additionalCategories : [])
        addItem(data)
    }, [])

    const renderCustomization = (customization: Customization) => {
        switch (customization.type) {
            case CustomizationType.Size:
                return (
                    <div key={customization.id} className="flex flex-col w-full pt-5 gap-3">
                        <div className="flex flex-col items-center gap-x-4">
                            <h3 className="font-semibold text-white 2xl:text-lg md:text-base text-sm w-full bg-[#0c3643] rounded px-5 py-1">{`STEP 2: Choose Size`}</h3>
                            <div className="grid md:grid-cols-3 grid-cols-2 w-full xl:gap-5 md:gap-2 gap-2 pt-10 md:px-5 px-1 ">
                                {customization.options?.map(option => {
                                    return (
                                        <div
                                            key={option.id}
                                            className={`col-span-1 flex w-full border-2 h-20 px-2 py-1 rounded-lg md:gap-5 gap-2 items-center justify-between cursor-pointer hover:border-[#097392] active:border-black 
                                                 ${option.name === productSize ? 'border-[#097392] bg-[#0972921f] shadow-md scale-108 delay-75' : ''}`}
                                            onClick={() => {
                                                setSelectedImage(true)
                                                setProductSize(option.name)
                                            }
                                            }
                                        >
                                            {option.mediaUrl && 
                                            <Image
                                            loading="lazy"
                                            width={56}
                                            height={56}
                                            src={option?.mediaUrl ? option.mediaUrl : ''} alt={option.name} className="md:h-16 h-14 w-14 self-center "
                                             /> }
                                            <div className="flex flex-col">
                                                <h1 className="2xl:text-lg md:text-base text-sm font-semibold">{option.name}</h1>
                                                {option.value && <p className="text-gray-500 md:text-sm text-xs ">{option.value}</p>}
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                );
            case CustomizationType.Color:
                return (
                    <div className="flex flex-col items-center gap-x-4">
                        <h3 className="font-semibold text-white 2xl:text-lg md:text-base text-sm w-full bg-[#0c3643] rounded px-5 py-1">{`STEP 3: Choose ${data.category.name} Color`}</h3>
                        <CustomColor key={customization.id} data={customization} items={data.customizations} deliveryCosts={data.deliveryCosts} />
                    </div>
                );
            case CustomizationType.Text:
                return (
                    <div className="flex flex-col items-center md:gap-x-4">
                        <h3 className="font-semibold text-white 2xl:text-lg md:text-base text-sm w-full bg-[#0c3643] rounded px-5 py-1">{`STEP 4: Customize Your Message`}</h3>
                        <CustomFont key={customization.id} data={data} />
                    </div>
                );
            case CustomizationType.Quantity:
                    return (
                        <div className="flex flex-col items-center gap-x-4">
                            <h3 className="font-semibold text-white 2xl:text-lg md:text-base text-sm w-full bg-[#0c3643] rounded px-5 py-1">{`STEP 3: Select Quantity`}</h3>
                           <Quantity customizationOptions={data.customizations} deliveryCosts={data.deliveryCosts}/>
                        </div>
                    );
            default:
                return null;
        }
    };


    return (
        <div className="my-10 border-t-2 pt-2 md:pt-0 md:border-t-0 ">

            <div className="flex flex-col space-y-8 overflow-y-scroll h-[80vh] scrollbar-thin  md:scrollbar-none pb-10">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{`${data.name}`}</h1>
                    <p className="font-medium text-base md:text-lg ">{`Customize Your ${data.category.name} In just a few easy steps`}</p>
                </div>
                <div className="flex  flex-col items-center gap-x-4">
                    <h3 className="font-semibold text-white 2xl:text-lg md:text-base text-sm w-full bg-[#0c3643] rounded px-5 py-1">STEP 1:  Pick a type that fits your needs.</h3>

                    {/* product list */}
                    <div className="mx-10 mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                        <TabGroup>
                            <TabList className="grid md:grid-cols-4 grid-cols-2 gap-6">
                                {items.map((item) =>
                                (
                                    <div
                                        key={item._id}
                                        className={`flex flex-col rounded-md bg-white border-2 px-2 pt-2 
                                        ${item.name === product ? 'border-[#097392] bg-[#0972921f] shadow-md scale-[1.008] transition delay-75' : ''}`}>
                                        <Tab key={item.images[0]}
                                            className='relative flex aspect-square cursor-pointer items-center justify-center border-0 outline-none'
                                            onClick={() => {
                                                setSelectedImage(false)
                                                emptyUpgrades()
                                                setQuantity(0)
                                                setQuantities({})
                                                router.push(`/product/${item._id}`)
                                               
                                            }}
                                        >
                                            <Image
                                                fill
                                                src={item.images?.[0]}
                                                alt="image"
                                                className="absolute md:h-full md:w-full aspect-square inset-0 overflow-hidden rounded-md object-cover object-center"
                                            />
                                        </Tab>
                                        
                                        <h2 className="2xl:text-base md:text-sm text-xs font-semibold md:font-medium py-1.5 text-center">{item.name}</h2>
                                    </div>
                                ))
                                }
                            </TabList>
                        </TabGroup>
                    </div>
                </div>

                {data.customizations.map(renderCustomization)}

                {data.upgrades.length !== 0 && 
                <div className="flex flex-col items-center gap-x-4">
                    <h3 className="font-semibold text-white 2xl:text-lg md:text-base text-sm w-full bg-[#0c3643] rounded px-5 py-1">STEP 5: Additional Upgrades</h3>
                    <Upgrades upgrades={data.upgrades} />
                </div>
                }
            </div>

            <hr className=" shadow"/>
            <div className="mt-3 flex-col items-center gap-x-3">
                <div className=" mb-4 flex items-start  gap-5 justify-between">
                    <div className="md:text-2xl text-xl text-gray-900 mt-2">
                        <Currency data={totalCost} />
                    </div>


                                <div className="flex items-start  justify-center md:gap-4 gap-1">
                    <Button className="flex items-center gap-x-2 bg-white hover:bg-white selection:bg-white border-none"
                        onClick={()=>{toggleWishlist(data)}}>
                                       {isInWishlist ? <HeartIcon color="red" fill="red"/> : <HeartIcon color="gray" fill="gray"/>}
                    </Button>
                    
                    <div className="flex md:flex-row flex-col md:gap-4 gap-2  justify-center">
                    <Button className="flex items-center gap-x-2 bg-[#0c3643] text-sm  py-2 px-4 "
                        onClick={addToCart}>
                        Add to Cart
                        <ShoppingCart className="w-[22px] h-[22px]"/>
                    </Button>
                    <InfoSummary />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info
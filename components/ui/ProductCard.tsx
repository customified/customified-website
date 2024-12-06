"use client";

import { useProductStore } from "@/hooks/useProductStore";
import { Product } from "@/types";
import { Expand } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Currency from "./Currency";
import { Button } from "./shadcn/Button";
import IconButton from "./shadcn/IconButton";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { emptyUpgrades, setQuantities, setQuantity } = useProductStore();
  const router = useRouter();
  const handleClick = () => {
    emptyUpgrades();
    setQuantity(0);
    setQuantities({});
    router.push(`/product/${data?._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded shadow-md border space-y-4 h-full"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="aspect-square rounded bg-gray-100 relative">
          <Image
            alt="Image"
            width={312}
            height={312}
            src={data?.images[0]}
            className="aspect-square object-cover rounded"
            loading="lazy"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={() => {
                  handleClick;
                }}
                icon={<Expand size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {/* description */}
          <div className="flex flex-col items-center justify-center text-center my-1">
            <p className="font-semibold text-xs md:text-sm   h-full">
              {data.name}
            </p>
            <div className="flex items-center justify-center gap-1">
              <p className="text-black text-sm">As low as</p>
              <Currency
                data={
                  data.customizations?.[0]?.options?.[0]?.prices?.slice(-1)[0]
                    ?.price ?? "0"
                }
              />
            </div>
          </div>
          {/* price */}
          <Button
            className="bg-[#097392] font-semibold rounded-sm text-[12px] md:text-xs px-1.5 py-1 gap-1 w-full"
            onClick={handleClick}
          >
            Customize <span className="hidden md:block">Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

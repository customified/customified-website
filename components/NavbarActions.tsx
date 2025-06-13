"use client";

import { useCart } from "@/hooks/useCartStore";
import { ShoppingCart, User, Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Category, Product } from "@/types";
import ComboSearch from "./ComboSearch";
import { UserButton, useUser } from "@clerk/nextjs";
import { useWishlist } from "@/hooks/useWishList";

interface NavBarAcitonProps {
  category: Category[];
  products: Product[];
}

const NavbarActions: React.FC<NavBarAcitonProps> = ({ category, products }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const wish = useWishlist();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="md:mx-auto flex items-center  md:gap-x-12 gap-x-4">
      <div className="hidden md:block">
        <ComboSearch categories={category} products={products} />
      </div>

      <div className="flex">
        {isSignedIn ? (
          <div className="w-full h-full p-0 flex self-center mr-2">
            <UserButton />
          </div>
        ) : (
          <button
            className="flex items-center border-0 md:px-4 px-2 py-2 text-[#097392]"
            onClick={() => router.push("/sign-up")}
          >
            <User size={20} color="#097392" />
            <span className="lg:ml-1 text-sm font-bold md:block hidden">
              Login / Register
            </span>
          </button>
        )}

        {/* Cart */}
        <button
          className="flex items-center rounded-2xl  md:px-4 px-2 py-2"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCart size={20} color="#097392" />
          <span className="md:ml-2 ml-1 text-sm font-medium text-[#097392]">
            {cart.items.length}
          </span>
        </button>

        {/* WishList */}
        <button
          className="flex items-center rounded-2xl  md:px-4 px-2 py-2"
          onClick={() => router.push("/wishlist")}
        >
          <Heart size={20} color="#097392" />
          <span className="md:ml-2 ml-1 text-sm font-medium text-[#097392]">
            {wish.wishitems.length}
          </span>
        </button>
        {/*
          <button
            className="flex flex-col items-center  md:px-4 px-2 py-2"
            onClick={() => router.push("/rating")}
          >
            <div className="flex items-center">
              <Star size={15} color="#f59e0b" fill="#f59e0b" />
              <Star size={15} color="#f59e0b" fill="#f59e0b" />
              <Star size={15} color="#f59e0b" fill="#f59e0b" />
              <Star size={15} color="#f59e0b" fill="#f59e0b" />
              <Star size={15} color="#f59e0b" fill="#f59e0b" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="md:ml-2 ml-1 text-[#f59e0b] font-bold">2,123</span>
              <span className="text-[#f59e0b] text-sm font-bold hidden md:block">
                Reviews
              </span>
            </div>
          </button>
        */}
      </div>
    </div>
  );
};

export default NavbarActions;

import { Facebook, Instagram, Linkedin, TwitterIcon } from "lucide-react"
import Container from "./ui/Container"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#1c1b1b] text-white pb-10">
      <Container>      
      <div className="py-10 grid md:grid-cols-12  grid-cols-2 w-full px-10 md:px-0">
        <div className="md:col-span-3 col-span-2 text-[#097392] flex flex-col gap-3 justify-center md:justify-start mb-10 md:mb-0">
          <p className="font-bold text-2xl md:text-3xl">Imprintion</p>
          <div className="flex flex-col">
          <p className="text-base md:text-xl">Got questions? Call us 24/7! </p>
          <p className="font-medium text-sm md:text-base text-white">+1 202 555 0104</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-base md:text-xl">Contact info</p>
            <p className="text-white text-sm md:text-base">imprintion@example.com</p>
          </div>
          <div className="flex justify-between w-[50%] mt-1">
          <Facebook color="white" className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" fill="white"  />
          <TwitterIcon color="white" className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" fill="white" />
          <Linkedin color="white" className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" fill="white" />
          <Instagram color="white" className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" />
          </div>
        </div>

        <div className="col-span-1 hidden md:block"></div>

        <div className="md:col-span-2 col-span1 text-[#097392] flex flex-col gap-3">
          <h1 className="font-medium text-lg md:text-xl">Trending</h1>
          <div className="flex flex-col gap-2 md:text-base text-sm">
            <Link href='/' className="text-white">Home</Link>
            <Link href='/' className="text-white">Our Store</Link>
            <Link href='/aboutus' className="text-white">About Us</Link>
            <Link href='/' className="text-white">Our Partners</Link>
          </div>
        </div>

        <div className="col-span-1 hidden md:block"></div>

        <div className="md:col-span-2 col-span-1 text-[#097392] flex flex-col gap-3">
          <h1 className="font-medium text-lg md:text-xl">Information</h1>
          <div className="flex flex-col gap-2 md:text-base text-sm">
            <p className="text-white">About Us</p>
            <p className="text-white">Contact Us</p>
            <p className="text-white">Shipping & Return</p>
            <p className="text-white">Privacy Policy</p>
  
          </div>
        </div>

        <div className="col-span-1 hidden md:block"></div>

        <div className="col-span-2 text-[#097392] flex flex-col gap-3 mt-10 md:mt-0">
          <h1 className="font-medium text-lg md:text-xl">Customer Care</h1>
          <div className="flex flex-col gap-2 md:text-base text-sm">
            <p className="text-white">Track Your Order</p>
            <Link href='/recentviews' className="text-white">Recently Viewed</Link>
            <Link href='/wishlist' className="text-white">WishList</Link>
          </div>
        </div>

      </div>
      <p className="text-center text-xs "> &copy; 2024 Imprintion Inc. all rights reserved</p>
      </Container>
    </footer>
  )
}

export default Footer
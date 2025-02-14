import { ChevronsRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Container from "./ui/Container"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-0">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <p className="text-teal-400 font-bold text-2xl">Customified </p>
            <p className="text-sm">
              Your trusted partner for quality products. We are committed to providing the best services 24/7.
            </p>
            {/* <div className="flex space-x-4 mt-2">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="w-6 h-6 hover:text-teal-400 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="w-6 h-6 hover:text-teal-400 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-teal-400 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="w-6 h-6 hover:text-teal-400 transition-colors" />
              </Link>
            </div> */}
          </div>

          {/* Trending Links */}
          <div>
            <h2 className="text-teal-400 font-semibold mb-4">Trending</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Our Store
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h2 className="text-teal-400 font-semibold mb-4">Information</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-white transition-colors flex items-center  ">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h2 className="text-teal-400 font-semibold mb-4">Customer Care</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/track-order" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/recentviews" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Recently Viewed
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors flex items-center">
                <ChevronsRight className="w-4 h-4 mr-2" />
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Customified . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
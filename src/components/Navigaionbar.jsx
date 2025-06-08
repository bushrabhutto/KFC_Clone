'use client'
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Locate ,Radar} from 'lucide-react';
import { useCart } from "../pages/context/Cart.jsx"; // <-- import useCart

export default function Navigationbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart } = useCart(); // <-- get cart from context
  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0); // total items

  return (
    <header className="bg-black">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-2 lg:flex-1">
          <button className="mr-2" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <Menu size={28} color="#fff" />
          </button>
          <Link href="#" className="flex items-center gap-2 -m-1.5 p-1.5">
            <span className="text-red-600 font-extrabold italic text-2xl tracking-tight">KFC</span>
          </Link>
        </div>

        <div className="flex gap-2">
          <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-md border-2 border-red-600 bg-[#181313] focus:outline-none focus:ring-2 focus:ring-red-600" style={{ backgroundColor: "#181313" }}>
            <Image src="/assests/Delivery-bag.svg" alt="Delivery" width={24} height={18} />
            <span className="text-white font-bold text-sm">DELIVERY</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#232020] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-red-600" style={{ backgroundColor: "#232020" }}>
            <Image src="/assests/delivery-car.svg" alt="Pickup" width={24} height={18} />
            <span className="text-white font-bold text-sm">PICKUP</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
          <Link href="/cart" className="relative">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLJP0B2-dMhPMWLx7DWjv8G8PPa6fDlpfQw&s" alt="Cart" width={35} height={25} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
      
          <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-md flex items-center">
            LOGIN
          </Link>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#232020] z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-4">
            <Link href="/login" className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded-md">
              LOGIN
            </Link>
            <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <X size={28} color="#fff" />
            </button>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-black text-white px-4 py-1 rounded-full font-bold">Day</button>
            <button className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">Night</button>
          </div>
          <hr className="border-gray-600 mb-4" />
          <div className="flex flex-col gap-2 mb-4">
            <Link href="/store-locator" className="flex items-center gap-2 text-white font-bold px-2 py-2 rounded hover:bg-[#181313]">
              <Locate size={24} color="#dc2626" className="font-extrabold" />
              <span className="text-red-600 font-extrabold text-lg italic tracking-tight">Store Locators</span>
            </Link>
            <Link href="/track-order" className="flex items-center gap-2 text-white font-bold px-2 py-2 rounded hover:bg-[#181313]">
            <Radar size={24} color="#dc2626" className="font-extrabold" />
                <span className="text-red-600 font-extrabold text-lg italic tracking-tight">  Track Order</span>
            
            </Link>
            <Link href="/explore-menu" className="flex items-center gap-2 text-white font-bold px-2 py-2 rounded hover:bg-[#181313]">
   
                 <Menu size={24} color="#dc2626" className="font-extrabold"  />
                 <span className="text-red-600 font-extrabold text-lg italic tracking-tight">    Explore Menu</span>
            
            </Link>
          </div>
          <hr className="border-gray-600 mb-4" />
          <div className="flex flex-col gap-2">
            <Link href="/about-us" className="text-white font-bold hover:underline">About Us</Link>
            <Link href="#" className="text-white font-bold hover:underline">FeedBack</Link>
            <Link href="#" className="text-white font-bold hover:underline">Terms & Conditions</Link>
            <Link href="#" className="text-white font-bold hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-white font-bold hover:underline">Contact Us</Link>
            <Link href="#" className="text-white font-bold hover:underline">Mitao Bhook</Link>
            <Link href="#" className="text-white font-bold hover:underline">Mitao Bhook - Scholarship</Link>
            <Link href="#" className="text-white font-bold hover:underline">Careers</Link>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </header>
  )
}

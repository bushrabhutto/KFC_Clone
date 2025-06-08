import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#f5f6fa] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
        {/* Left Links */}
        <div className="flex flex-col gap-2 text-black font-medium text-base">
          <Link href="#" className="hover:underline">About Us</Link>
          <Link href="#" className="hover:underline">Mitao Bhook</Link>
          <Link href="#" className="hover:underline">Mitao Bhook - Scholarship</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Careers</Link>
        </div>
        {/* Center Logo & Social */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-red-600 font-extrabold italic text-3xl tracking-tight">KFC</span>
          <div className="flex gap-3">
            <Link href="#" aria-label="YouTube" className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
              <Image src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Instagram" className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
              <Image src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Facebook" className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
              <Image src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
          </div>
        </div>
        {/* Right Links */}
        <div className="flex flex-col gap-2 text-black font-medium text-base">
          <Link href="#" className="hover:underline">Contact Us</Link>
          <Link href="#" className="hover:underline">Store Locator</Link>
          <Link href="#" className="hover:underline">Track Order</Link>
          <Link href="#" className="hover:underline">Terms & Conditions</Link>
        </div>
        {/* App Store Buttons */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" width={80} height={40} className="h-10 w-auto" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={80} height={40} className="h-10 w-auto" />
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 gap-2">
        <span className="text-black font-bold text-base">2025 KFC. All rights reserved</span>
        <div className="flex flex-col items-end">
          <span className="text-red-600 font-bold text-base">Powered by</span>
          <Link href="#" className="text-black underline font-medium text-base">SimpleX Technology Solutions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

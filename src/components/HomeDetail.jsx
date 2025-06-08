"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaGooglePlay, FaApple } from "react-icons/fa";


export default function HomeDetail() {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      {/* Pick-up from Store Card */}

        <div className="bg-black p-6 flex flex-col items-center">
          <h2 className="text-red-600 font-extrabold text-2xl md:text-3xl text-center mb-1 italic tracking-wide">
            PICK-UP FROM STORE
          </h2>
          <p className="text-white text-base text-center mb-4">
            Beat the queue &amp; place the order online!
          </p>
          <Link href="/explore-menu" className="w-full flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full text-base flex items-center gap-2 transition">
              ORDER NOW <span aria-hidden="true">&rarr;</span>
            </button>
          </Link>
        </div>
  

      {/* Favorite Orders Card */}
      <div className="bg-black rounded-xl shadow flex flex-col items-center justify-between p-6">
        <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-2 italic tracking-wide" style={{ textShadow: "0 0 8px #dc2626" }}>
          FAVORITE ORDERS
        </h2>
        <p className="text-white text-base text-center mb-4">
          Order from your favorite list of items.
        </p>
        <Link href="/explore-menu" className="w-full flex justify-center mb-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full text-base flex items-center gap-2 transition">
            ORDER NOW <span aria-hidden="true">&rarr;</span>
          </button>
        </Link>
        <Link href="/explore-menu">
          <Image
            src="https://www.kfcpakistan.com/static/media/favorites-banner.afff26bc6d0127f68baa.png"
            alt="Favorite Orders"
            width={160}
            height={112}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Download Our App Card */}
      <div className="bg-white rounded-xl shadow flex flex-col md:flex-row items-center p-6 gap-4">
        <Link href="https://play.google.com/store/apps/details?id=com.kfcpakistan.app" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://www.kfcpakistan.com/static/media/scamOrdr.6f809bf83912dd8dbe31.jpg"
            alt="KFC App"
            width={128}
            height={224}
            className="object-contain"
          />
        </Link>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-red-600 font-extrabold text-xl md:text-2xl mb-2 tracking-wide">
            DOWNLOAD OUR APP
          </h2>
          <div className="flex gap-4 mb-2">
            <Link href="https://apps.apple.com/pk/app/kfc-pakistan/id1511934171" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
              <FaApple size={28} />
              <span className="font-bold">App Store</span>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.kfcpakistan.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
              <FaGooglePlay size={28} />
              <span className="font-bold">Google Play</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Explore Menu Card */}
      <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center p-6">
        <Link href="/explore-menu">
          <Image
            src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
            alt="Explore Menu"
            width={160}
            height={96}
            className="object-contain mb-2"
          />
        </Link>
        <p className="text-black font-bold text-center mb-4">
          Adding 11 herbs and spices, Explore our menu and add items to your cart.
        </p>
        <Link href="/explore-menu">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full text-base flex items-center gap-2 transition">
            EXPLORE MENU
          </button>
        </Link>
      </div>
   
    </div>
  );
}

"use client" 
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { menuData } from '../components/data/data'

const bestSellerIds = [3, 10, 11, 58]; // Example: Krunch Burger, Krunch Combo, Chicken & Chips, Hot Wings Bucket

function Bestsell() {
  // Flatten all items and filter for best sellers
  const allItems = menuData.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
  const bestSellers = allItems.filter(item => bestSellerIds.includes(item.id));

  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4; // Number of cards visible at once

  const handlePrev = () => {
    setStartIdx(idx => Math.max(0, idx - 1));
  };

  const handleNext = () => {
    setStartIdx(idx => Math.min(bestSellers.length - visibleCount, idx + 1));
  };

  return (
    <div className="bg-[#f5f6fa] py-8 px-4">
      <h2 className="text-black text-2xl font-extrabold mb-6">
        BEST SELLERS
      </h2>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIdx === 0}
          className="absolute left-0 z-10 bg-white rounded-full shadow p-2 text-red-600 text-2xl font-bold disabled:opacity-30"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          &lt;
        </button>
        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide mx-10 pb-4 border-b-4 border-red-600">
          {bestSellers.slice(startIdx, startIdx + visibleCount).map(item => (
            <Link
              key={item.id}
              href={`/card-detail/${item.id}`}
              className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-between w-64 min-w-[16rem] h-[22rem] relative cursor-pointer border border-gray-200"
            >
              {/* Red stripes */}
              <div className="flex justify-center mt-4 mb-2 gap-1">
                <span className="w-4 h-2 bg-red-600 rounded"></span>
                <span className="w-4 h-2 bg-red-600 rounded"></span>
                <span className="w-4 h-2 bg-red-600 rounded"></span>
              </div>
              {/* Title */}
              <h3 className="text-black font-extrabold text-lg mb-2 px-4 text-left w-full">{item.name}</h3>
              {/* Price Ribbon */}
              <div className="absolute right-0 top-10">
                <span className="bg-red-600 text-white font-bold px-4 py-1 rounded-l-full text-sm">
                  Rs {item.price}
                </span>
              </div>
              {/* Image */}
              <div className="flex-1 flex items-center justify-center w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={180}
                  height={120}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIdx >= bestSellers.length - visibleCount}
          className="absolute right-0 z-10 bg-white rounded-full shadow p-2 text-red-600 text-2xl font-bold disabled:opacity-30"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          &gt;
        </button>
      </div>
      {/* Scroll indicator line */}
      <div className="w-full h-1 bg-gray-200 mt-2 relative">
        <div
          className="h-1 bg-red-600 rounded transition-all duration-300"
          style={{
            width: `${Math.min((startIdx + visibleCount) / bestSellers.length, 1) * 100}%`
          }}
        />
      </div>
    </div>
  )
}

export default Bestsell

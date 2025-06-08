import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { menuData } from '../components/data/data'

const topDealIds = [26, 27, 28, 31] // Example: Crispy Duo Box, Xtreme Duo Box, Value Bucket, Family Festival 3

const Topdeal = () => {
  // Flatten all items and filter for top deals
  const allItems = menuData.flatMap(cat => cat.items)
  const topDeals = allItems.filter(item => topDealIds.includes(item.id))

  return (
    <div className="bg-[#f5f6fa] py-8 px-4">
      <h2 className="text-black text-2xl font-extrabold mb-6">
        TOP DEALS
        <div className="h-1 w-24 bg-red-600 mt-1 rounded" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topDeals.map(item => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl shadow-lg flex flex-col items-start p-6 min-h-[420px]"
          >
            {/* Heart Icon */}
            <button className="absolute top-4 right-4">
              <Heart size={24} color="#dc2626" fill="none" />
            </button>
            {/* Red stripes */}
            <div className="flex justify-center mt-2 mb-2 gap-1 w-full">
              <span className="w-4 h-2 bg-red-600 rounded"></span>
              <span className="w-4 h-2 bg-red-600 rounded"></span>
              <span className="w-4 h-2 bg-red-600 rounded"></span>
            </div>
            {/* Image */}
            <div className="flex justify-center w-full mb-2">
              <Image
                src={item.image}
                alt={item.name}
                width={160}
                height={100}
                className="object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="text-black font-extrabold text-lg mb-1">{item.name}</h3>
            {/* Description */}
            <p className="text-black text-sm mb-2 line-clamp-2">{item.description}</p>
            {/* Price */}
            <div className="text-black font-bold mb-4">Rs {item.price}</div>
            {/* Add to Bucket Button */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors">
              + ADD TO BUCKET
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topdeal

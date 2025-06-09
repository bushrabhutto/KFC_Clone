"use client";
import React from "react";
import { Heart } from "lucide-react";
import { menuData } from "./data.js"
import { useRouter } from "next/navigation";
import { useCart } from "../context/Cart"; 

export default function MenuCards({ items, onCardClick }) {
  const router = useRouter();
  const { dispatch } = useCart(); 


  const allItems = items && items.length > 0 ? items : menuData.flatMap(cat => cat.items);

  const handleAddToBucket = (item) => {
    dispatch({ type: "ADD", item }); // <-- add to cart
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allItems.map(item => (
        <div
          key={item.id}
          className="relative bg-[#181313] rounded-2xl shadow-lg flex flex-col items-center p-6 cursor-pointer"
          onClick={() => onCardClick && onCardClick(item.id)}
        >
        
          <button className="absolute top-4 right-4">
            <Heart size={24} color="#dc2626" fill="none" />
          </button>
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-44 h-44 object-contain mb-4"
            style={{ marginTop: "-1.5rem" }}
          />
          {/* Title */}
          <h3 className="text-white font-extrabold text-lg text-left w-full mb-1">
            {item.name}
          </h3>
          {/* Description */}
          <p className="text-gray-300 text-sm text-left w-full mb-2 truncate">
            {item.description}
          </p>
          {/* Price */}
          <div className="text-white font-bold text-left w-full mb-4">
            Rs {item.price}
          </div>
          {/* Add to Bucket Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors"
            onClick={e => {
              e.stopPropagation();
              handleAddToBucket(item);
            }}
          >
            + ADD TO BUCKET
          </button>
        </div>
      ))}
    </div>
  );
}

// items and onCardClick are passed as props from the parent component.
// If items is not provided, all menuData items are shown.

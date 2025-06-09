"use client"
import React from "react";
import { menuData } from "./data.js";

// Find item by id from all categories
function getItemById(id) {
  for (const category of menuData) {
    const found = category.items.find(item => item.id === id);
    if (found) return found;
  }
  return null;
}

export default function CardDetail({ id }) {
  const item = getItemById(id);

  if (!item) {
    return (
      <div className="text-white text-center p-8">
        Item not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center bg-[#181313] rounded-xl p-6 max-w-2xl mx-auto">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-48 h-48 object-contain mb-4 md:mb-0 md:mr-8"
      />
      {/* Details */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h2 className="text-white font-extrabold text-2xl mb-2">{item.name}</h2>
        <p className="text-gray-300 text-base mb-4 text-center md:text-left">{item.description}</p>
        {/* Show ID */}
        <div className="text-white font-bold text-lg mb-2">ID: {item.id}</div>
        {/* Price */}
        <span className="bg-red-600 text-white font-bold px-6 py-2 rounded text-lg">
          RS {item.price}
        </span>
      </div>
    </div>
  );
}

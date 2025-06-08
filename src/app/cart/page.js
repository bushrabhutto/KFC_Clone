"use client";
import React from 'react'
import { useCart } from "@/pages/context/Cart.jsx";
import { Link, X } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, dispatch } = useCart(); // <-- Use the cart context
  const router = useRouter();

  // Calculate total items and price
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-[#181313] rounded-xl shadow-lg w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2">
          <span className="text-white font-bold text-lg">Order Details</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <div className="w-3 h-3 rounded-full bg-red-600" />
            <button
              className="ml-4 p-1 rounded hover:bg-red-700 transition"
              onClick={() => router.back()}
              aria-label="Close Cart"
            >
              <X size={24} color="#fff" />
            </button>
          </div>
        </div>
        {/* Red line */}
        <div className="h-1 bg-red-600 w-full rounded-t-xl" />
        {/* Content */}
        <div className="flex flex-col items-center justify-center py-10 px-6">
          {cart.length === 0 ? (
            <>
              <img
                src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
                alt="KFC Bucket"
                className="w-48 h-32 object-contain mb-6"
              />
              <p className="text-white font-bold text-center text-lg">
                You haven’t added any items in bucket yet
              </p>
              <Link
                href="/explore-menu"/>
                <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded font-bold">
                EXPLORE MENU
              </button>
            </>
            
          ) : (
            <ul className="w-full">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center mb-4 bg-[#222] p-3 rounded">
                  <span className="text-white font-bold">{item.name} x {item.qty}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white">Rs {item.price ? item.price * item.qty : 0}</span>
                    <button
                      onClick={() => dispatch({ type: "DELETE", id: item.id })}
                      className="bg-red-600 text-white rounded px-2 py-1 text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between bg-gradient-to-r from-red-700 to-red-500 px-6 py-4 rounded-b-xl">
          <span className="text-white font-bold">
            {totalItems} Item{totalItems !== 1 ? "s" : ""}&nbsp; | &nbsp;Rs {totalPrice}
          </span>
          <button className="flex items-center gap-2 bg-transparent text-white font-bold text-base">
            View Bucket
            <span className="bg-white rounded-full p-1 ml-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
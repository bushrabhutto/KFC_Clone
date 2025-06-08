import React from 'react'
import { ArrowLeftCircle } from 'lucide-react'

export default function TrackOrder() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10">
      <div className="flex items-center mb-6">
        <ArrowLeftCircle size={32} color="#dc2626" className="mr-2 cursor-pointer" />
        <span className="text-gray-400 font-extrabold text-3xl tracking-tight mr-1">Track</span>
        <span className="text-white font-extrabold text-3xl tracking-tight">Order</span>
      </div>
      <div className="bg-[#181313] rounded-lg p-8 w-full max-w-2xl">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs font-bold text-white mb-2">
                Phone Number <span className="text-xs text-gray-400">(3XXXXXXXXX)</span> <span className="text-red-600">*</span>
              </label>
              <div className="flex items-center bg-[#232020] rounded-t-md px-4 py-3">
                <span className="text-white font-bold mr-2">+92</span>
                <input
                  type="text"
                  className="bg-transparent border-0 outline-none text-white w-full"
                  placeholder=""
                  maxLength={10}
                />
              </div>
              <div className="border-b border-white" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-white mb-2">
                Order ID <span className="text-red-600">*</span>
              </label>
              <div className="bg-[#232020] rounded-t-md px-4 py-3">
                <input
                  type="text"
                  className="bg-transparent border-0 outline-none text-white w-full"
                  placeholder=""
                />
              </div>
              <div className="border-b border-white" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#6b1a22] hover:bg-[#a71d2a] text-white font-bold py-2 rounded mt-2 transition-colors"
          >
            TRACK
          </button>
        </form>
      </div>
    </div>
  )
}


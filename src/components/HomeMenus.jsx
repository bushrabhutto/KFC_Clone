"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import Bestsell from './Bestsell'
import Topdeal from './Topdeal'
import { useRouter, useSearchParams } from 'next/navigation'


const categories = [
	{
		category: 'Ala-Carte-&-Combos',
		image: 'https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-alacart-2023-05-31095826.png',
	},
	{
		category: 'Signature-Boxes',
		image: 'https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png',
	},
	{
		category: 'Sharing',
		image: 'https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Sharing-2023-05-31095826.png',
	},
	{
		category: 'Snacks-&-Beverages',
		image: 'https://www.kfcpakistan.com/images/8d8e0870-1bbd-11f0-b63c-5f7f63100e69-Snack&beveragesgroupthumbnail(1)-2025-04-17185538.png',
	},
	{
		category: 'Midnight (Start at 12 am)',
		image: 'https://www.kfcpakistan.com/images/8d8e0870-1bbd-11f0-a233-f9aa269243c8-midnightdealgroupthumbnail(1)-2025-04-17185538.png',
	},
]

const CARD_SIZE = 110 // px
const GAP = 16 // px
const VISIBLE_COUNT = 3

const HomeMenus = () => {
	const [startIdx, setStartIdx] = useState(0)
	const router = useRouter()
	const searchParams = useSearchParams()
	const selectedCategory = searchParams.get('category')

	const handlePrev = () => {
		setStartIdx((idx) => Math.max(0, idx - 1))
	}

	const handleNext = () => {
		setStartIdx((idx) => Math.min(categories.length - VISIBLE_COUNT, idx + 1))
	}

	const handleCategoryClick = (cat) => {
		router.push(`/explore-menu#${encodeURIComponent(cat.category)}`);
	};

	return (
		<div className="bg-[#f5f6fa] py-8 px-4">
			<h2 className="text-black text-2xl font-extrabold mb-6">
				EXPLORE MENU
				<div className="h-1 w-24 bg-red-600 mt-1 rounded" />
			</h2>
			<div className="relative flex items-center justify-center mb-10">
				{/* Left Arrow */}
				<button
					onClick={handlePrev}
					disabled={startIdx === 0}
					className="absolute left-0 z-10 bg-white rounded-full shadow p-2 text-red-600 text-xl font-bold disabled:opacity-30"
					style={{ top: '50%', transform: 'translateY(-50%)' }}
				>
					&lt;
				</button>
				{/* Category Cards */}
				<div className="flex gap-4 overflow-x-hidden mx-12">
					{categories
						.slice(startIdx, startIdx + VISIBLE_COUNT)
						.map((cat) => (
							<div
								key={cat.category}
								onClick={() => handleCategoryClick(cat)}
								className="flex flex-col items-center justify-center w-[110px] h-[110px] bg-white rounded-full shadow-lg relative cursor-pointer border-2 border-transparent hover:border-black transition"
								tabIndex={0}
								role="button"
							>
								<Image
									src={cat.image}
									alt={cat.category}
									width={60}
									height={60}
									className="object-contain mb-1"
								/>
								<span className="text-black font-bold text-xs text-center">
									{cat.category}
								</span>
								<div className="h-1 w-8 bg-red-600 mt-1 rounded" />
							</div>
						))}
				</div>
				{/* Right Arrow */}
				<button
					onClick={handleNext}
					disabled={startIdx >= categories.length - VISIBLE_COUNT}
					className="absolute right-0 z-10 bg-white rounded-full shadow p-2 text-red-600 text-xl font-bold disabled:opacity-30"
					style={{ top: '50%', transform: 'translateY(-50%)' }}
				>
					&gt;
				</button>
			</div>
			<Bestsell />
			<Topdeal />
		</div>
	)
}

export default HomeMenus

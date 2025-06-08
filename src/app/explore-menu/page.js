"use client"
import React, { useState, useEffect } from 'react'
import { menuData } from '../../components/data/data'
import CartPage from '../cart/page'
import MenuCards from '../../components/cards/card'
import CardDetail from '../../components/cards/cardDetail'

// Horizontal menu list for categories
function MenuList({ categories, activeIndex, onSelect }) {
  return (
    <div className="flex gap-3 mb-8 overflow-x-auto">
      {categories.map((category, idx) => (
        <button
          key={category.category}
          onClick={() => onSelect(idx)}
          className={`px-5 py-2 rounded-md font-bold text-white whitespace-nowrap transition-colors ${
            idx === activeIndex
              ? 'bg-red-600'
              : 'bg-[#181313] hover:bg-[#232020]'
          }`}
        >
          {category.category}
        </button>
      ))}
    </div>
  );
}

export default function ExploreMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCardId, setSelectedCardId] = useState(null);

  // Listen for hash changes and update activeIndex accordingly
  useEffect(() => {
    function handleHash() {
      const hash = decodeURIComponent(window.location.hash.replace('#', ''));
      // Debug: log the hash and menuData categories
      // console.log("Hash:", hash, "Categories:", menuData.map(c => c.category));
      if (hash) {
        const idx = menuData.findIndex(cat =>
          cat.category.trim().toLowerCase() === hash.trim().toLowerCase()
        );
        // Debug: log the found index
        // console.log("Found index:", idx);
        if (idx !== -1) setActiveIndex(idx);
      }
    }
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const activeCategory = menuData[activeIndex];
  const cardsToShow = activeCategory ? activeCategory.items : [];

  // If menuData is empty, show a message
  if (!menuData || menuData.length === 0) {
    return (
      <div className="p-6 bg-black min-h-screen text-white flex items-center justify-center">
        No menu data found.
      </div>
    );
  }

  return (
    <div className="p-6 bg-black min-h-screen">
      <MenuList
        categories={menuData}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        {/* Left: Cards or Card Detail */}
        <div>
          {selectedCardId ? (
            <CardDetail id={selectedCardId} />
          ) : (
            <MenuCards
              items={cardsToShow}
              onCardClick={id => setSelectedCardId(id)}
            />
          )}
        </div>
        {/* Right: Cart */}
        <div>
          <CartPage />
        </div>
      </div>
    </div>
  );
}

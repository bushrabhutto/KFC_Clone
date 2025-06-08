"use client"
import React, { useState } from 'react'

const slides = [
  "https://www.kfcpakistan.com/images/24dcb5a0-3469-11f0-9d7f-7f02ac4de3b0-Web-Banner_desktop_image-2025-05-19042424.jpg",
  "https://www.kfcpakistan.com/images/8d8e0870-1bbd-11f0-ba6d-594cb6dd3546-Web-Banner-1675x600mitaobhook_desktop_image-2025-04-17185538.jpg",
  "https://www.kfcpakistan.com/images/08873930-3f62-11f0-87c6-c7cd48868ce1-Webbanner_desktop_image-2025-06-02033113.jpg",
  "https://www.kfcpakistan.com/images/24dcb5a0-3469-11f0-9d7f-7f02ac4de3b0-Web-Banner_desktop_image-2025-05-19042424.jpg",
  "https://www.kfcpakistan.com/images/08873930-3f62-11f0-87c6-c7cd48868ce1-Webbanner_desktop_image-2025-06-02033113.jpg"
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="w-full max-w-3xl mx-auto relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-64 object-cover flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition"
        aria-label="Previous"
      >
        &#8592;
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition"
        aria-label="Next"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-red-600" : "bg-gray-400"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider

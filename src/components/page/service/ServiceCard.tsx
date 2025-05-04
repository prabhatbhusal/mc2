"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { services } from '@/lib/constants/data'
import Link from "next/link";


export default function Carousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 500;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 500;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (index: number) => {
    if (window.innerWidth < 768) {
      setHoveredIndex(index);
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="absolute right-2 sm:right-4 top-[-50px] sm:-top-14 md:-top-16 flex gap-1 sm:gap-2">
        <button
          onClick={scrollPrev}
          className="flex h-10 w-10 md:h-12 md:w-12 text-gray-800 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-all hover:bg-white/100"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="flex h-10 w-10 md:h-12 md:w-12 text-gray-600 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-all hover:bg-white/100"
        >
          →
        </button>
      </div>

      {/* Carousel Items */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-[300px] w-[50vw] sm:h-[350px] md:h-[450px] lg:h-[500px]  sm:w-[350px] md:w-[399px] flex-shrink-0 rounded overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => handleTouchStart(index)}
            onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 3000)} // Reset after 3 seconds on touch devices
          >
            {/* Image with grayscale filter */}
            {service.url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.url}
                alt={service.title}
                className={`absolute inset-0 h-full  object-cover filter transition duration-300 ${hoveredIndex === index ? "grayscale-0" : "grayscale"
                  }`}
              />
            )}

            {/* Fallback background */}
            {!service.url && (
              <div className="absolute inset-0 w-full h-full bg-gray-100" />
            )}

            {/* Content */}
            <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col justify-end items-center">
              <h3
                className={`text-2xl md:text-3xl absolute mb-2 sm:mb-4 md:mb-6 transition-all-ease-in-out duration-500 ${hoveredIndex === index
                  ? "-translate-y-10"
                  : "translate-y-0"
                  }`}
              >
                {service.title}
              </h3>

              <Link href={service.link} className={`py-3 px-6 w-fit md:text-lg clip-custom bg-primary text-primary-foreground shadow-xs hover:bg-primary/80 transition-all-ease-in-out duration-500 ${hoveredIndex === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

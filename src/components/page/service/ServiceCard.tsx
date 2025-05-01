"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import {services} from '@/lib/constants/data'
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
    <div className="relative w-full px-2 sm:px-4 py-4 sm:py-8 z-[10]">
      {/* Navigation Buttons */}
      <div className="absolute right-2 sm:right-4 -top-12 sm:-top-20 z-10 flex gap-1 sm:gap-2">
        <button
          onClick={scrollPrev}
          className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur transition-all hover:bg-white/100"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur transition-all hover:bg-white/100"
        >
          →
        </button>
      </div>

      {/* Carousel Items */}
      <div
        ref={scrollContainerRef}
        className="flex h-auto sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative mx-2 sm:mx-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[432px] w-[280px] sm:w-[350px] md:w-[399px] flex-shrink-0 rounded overflow-hidden"
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
                className={`absolute inset-0 w-full h-full object-cover filter transition duration-300 ${
                  hoveredIndex === index ? "grayscale-0" : "grayscale"
                }`}
              />
            )}

            {/* Fallback background */}
            {!service.url && (
              <div className="absolute inset-0 w-full h-full bg-gray-100" />
            )}

            {/* Content */}
            <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col justify-end">
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl relative mb-2 sm:mb-4 md:mb-6 transition-all-ease-in-out duration-500 ${
                  hoveredIndex === index
                    ? "text-white bottom-[20px] sm:bottom-[30px]"
                    : "text-white bottom-[-40px] sm:bottom-[-80px]"
                }`}
              >
                {service.title}
              </h3>

              <Button
                className={`absolute bottom-3 sm:bottom-5 transform transition-all duration-300 w-[120px] sm:w-[140px] md:w-[15vh] ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } relative bg-primary text-sm sm:text-lg md:text-xl text-white items-center flex font-semibold gap-1 sm:gap-2 p-1 sm:p-2 md:p-3 ml-1 sm:ml-2`}
                size="lg"
              >
                <Link href={service.link}>
                  {" "}
                  <h6 className="font-semibold text-sm sm:text-base md:text-lg">
                    Read More
                  </h6>
                </Link>
                <span className="h-10 w-4 sm:h-10 sm:w-5 bg-primary absolute top-0 right-[-16px] sm:right-[-20px]"></span>
                <span className="h-7 w-6 sm:h-7 sm:w-6 bg-primary rotate-45 absolute top-7 lg:top-7 left-26.75 lg:left-38"></span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

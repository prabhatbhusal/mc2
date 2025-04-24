'use client'
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ClientReviewCard from "@/components/ClientReviewCard";
import { reviewdata } from "@/lib/constants/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define how many cards to show per slide based on screen size
  const cardsPerPage = {
    sm: 1, // Mobile: 1 card
    md: 2, // Tablet: 2 cards
    lg: 3, // Desktop: 3 cards
  };

  // Calculate max index
  const maxIndex = Math.max(0, reviewdata.length - cardsPerPage.lg);

  // Navigation functions
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <main>
      <div className="flex flex-col justify-center h-[20-vh] py-35 px-28 text-white">
        <h6 className="text-md font-medium">Customers Reviews</h6>
        <h2 className="text-[44px] font-medium">
          See What our <span className="text-primary">Customers</span> are
          Saying
        </h2>
      </div>

      <div className="relative px-4 md:px-8 lg:px-12">
        {/* Carousel container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / cardsPerPage.lg)
              }%)`,
            }}
          >
            {reviewdata.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-2"
              >
                <ClientReviewCard testimonial={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-gray-800 text-white ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full bg-gray-800 text-white ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-primary" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
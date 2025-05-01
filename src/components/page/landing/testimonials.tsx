"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ClientReviewCard from "@/components/ClientReviewCard";
import { reviewdata } from "@/lib/constants/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) setCardsPerPage(1);
      else if (screenWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, Math.max(0, reviewdata.length - cardsPerPage))
    );
  }, [cardsPerPage]);

  const maxIndex = Math.max(0, reviewdata.length - cardsPerPage);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <main>
      {/* Fixed height typo from 20-vh to 20vh */}
      <div className="flex flex-col justify-center h-[20vh] py-30 px-28 text-white">
        <h6 className="text-md font-medium">Customers Reviews</h6>
        <h2 className="sm:text-3xl text-2xl md:text-4xl lg:text-5xl font-medium">
          See What our <span className="text-primary">Customers</span> are
          Saying
        </h2>
      </div>

      <div className="relative px-4 md:px-8 lg:px-12">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
            }}
          >
            {reviewdata.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
              >
                <ClientReviewCard testimonial={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation remains the same */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full bg-gray-800 text-white ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700"
            }`}
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
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-primary" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;

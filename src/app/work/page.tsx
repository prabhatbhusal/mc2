'use client'
import React, { useState } from 'react'
import Pagebanner from '@/components/AboutPageBanner'
import {galleryimg} from '@/lib/constants/data'
import Image from 'next/image'
import Contact from '@/components/page/landing/contact'
const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Functions to navigate between images
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryimg.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryimg.length - 1 ? 0 : prev + 1
    );
  };

  // Open modal with specific image
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };
  return (
    <>
      <Pagebanner
        heading1={"Welcome to"}
        heading2={"Polk RoadSide Gallery"}
        info={"Gallery"}
        service1={"Gallery Images"}
        service2={""}
        content={"Recurring Moments"}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-semibold md:text-4xl text-white lg:text-5xl">
          Our Project Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryimg.map((image, index) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <div className="relative h-64 group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="group-hover:scale-110 transition-all duration-500 object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Popup */}
        {isModalOpen && (
          <div
            className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="bg-opacity-50 hover:bg-opacity-75 absolute top-0 right-2 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100/70 font-semibold text-black"
                onClick={closeModal}
              >
                ✕
              </button>
              {/* Navigation Buttons */}
              <button
                className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 left-2 z-20 flex h-12 w-12 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-gray-400/80 text-gray-800"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                &#10094;
              </button>
              id: 1,
              <button
                className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 right-2 z-20 flex h-12 w-12 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-gray-400/80 text-gray-800"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                &#10095;
              </button>
              {/* Current Image */}
              <div className="relative h-[80vh] w-full">
                <Image
                  src={galleryimg[currentImageIndex].src}
                  alt={galleryimg[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Image Counter */}
              <div className="bg-opacity-50 absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full bg-black px-4 py-2 text-white">
                {currentImageIndex + 1} / {galleryimg.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default page

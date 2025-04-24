// components/ImageSlider.tsx
'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  images: ImageItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate visible indices with looping
  const getVisibleIndices = (): number[] => {
    const totalImages = images.length;
    // We need 5-6 images for the exact style (with overflow)
    const indices: number[] = [];

    // Show more images to create the overflow effect
    for (let i = -2; i <= 3; i++) {
      let index = (currentIndex + i) % totalImages;
      // Handle negative indices for looping backward
      if (index < 0) index = totalImages + index;
      indices.push(index);
    }

    return indices;
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    // Start autoplay immediately
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex]);

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-full  ">
      {/* Overflow container that spans beyond screen width */}
      <div className="w-screen overflow-visible">
        <div
          className="flex items-center justify-center space-x-4"
          style={{ width: "120vw", marginLeft: "-20vw" }}
        >
          {visibleIndices.map((imageIndex, i) => {
            const isCenter = i === 2; // Middle position

            // Enhanced sizing for center image
            let width = isCenter ? "w-96 md:w-128" : "w-70 md:w-74";
            let height = isCenter ? "h-64 md:h-80" : "h-70 md:h-70";
            let scale = isCenter ? "scale-125" : "scale-100";
            let zIndex = isCenter ? "z-10" : "z-0";
            let opacity = isCenter ? "opacity-100" : "opacity-60";

            return (
              <div
                key={`${imageIndex}-${i}`}
                className={`transition-all duration-700 ease-in-out ${width} ${zIndex} ${opacity} ${scale}`}
              >
                <div
                  className={`relative overflow-hidden rounded-lg shadow-xl ${height}`}
                >
                  <Image
                    src={images[imageIndex].src}
                    alt={
                      images[imageIndex].alt ||
                      `Auto Service Image ${imageIndex + 1}`
                    }
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isCenter ? "scale-110" : ""
                    }`}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

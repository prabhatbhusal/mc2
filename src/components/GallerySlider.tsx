
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

  const getVisibleIndices = (): number[] => {
    const totalImages = images.length;
    const indices: number[] = [];

    for (let i = -2; i <= 3; i++) {
      let index = (currentIndex + i) % totalImages;
      if (index < 0) index = totalImages + index;
      indices.push(index);
    }

    return indices;
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-full">
      <div className="w-full md:w-screen overflow-visible">
        <div
          className="flex items-center justify-center space-x-2 md:space-x-4"
          style={{
            width: "100%",
            marginLeft: "0",
            // Responsive width adjustments
            ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {
              width: "120vw",
              marginLeft: "-20vw"
            } : {})
          }}
        >
          {visibleIndices.map((imageIndex, i) => {
            const isCenter = i === 2;

            // Responsive sizing
            let width = isCenter
              ? "lg:w-100 w-100 md:w-96 lg:w-128"
              : "w-30 sm:w-40 md:w-56 lg:w-72";

            let height = isCenter
              ? "h-50 sm:h-48 md:h-64 lg:h-80"
              : "h-24 sm:h-32 md:h-48 lg:h-64";

            let scale = isCenter
              ? "scale-110 md:scale-125"
              : "scale-90 md:scale-100";

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
                    alt={images[imageIndex].alt || `Auto Service Image ${imageIndex + 1}`}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isCenter ? "scale-100 md:scale-110" : ""
                    }`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

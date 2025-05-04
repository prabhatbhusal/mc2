'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { galleryimg } from '@/lib/constants/data';
import Image from 'next/image';

// Import Swiper styles - these are essential!
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Gallery = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // For handling slide change and updating the active index
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  // Ensure navigation elements are properly connected to Swiper
  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current && paginationRef.current) {
      swiper.navigation.update();
      swiper.pagination.update();
    }
  }, [swiper]);

  return (
    <section className="text-white font-medium py-12">
      <div className="container mx-auto px-4 mb-8">
        <h6 className="text-md font-medium">Gallery</h6>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Our <span className="text-primary">Services</span> in Action
        </h2>
      </div>

      <div className="relative">
        {/* Navigation buttons */}
        <div ref={prevRef} className="absolute top-1/2 left-4 z-10 bg-black/50 p-2 rounded-full cursor-pointer transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div ref={nextRef} className="absolute top-1/2 right-4 z-10 bg-black/50 p-2 rounded-full cursor-pointer transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          speed={800}
          loop={true}
          grabCursor={true}
          updateOnWindowResize={true}
          roundLengths={true}
          observeParents={true}
          observer={true}
          watchSlidesProgress={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            disabledClass: "opacity-40 cursor-not-allowed",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiper}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            // @ts-ignore
            swiper.params.pagination.el = paginationRef.current;
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="testimonial-swiper !overflow-visible">
          {galleryimg.map((image, index) => (
            <SwiperSlide key={index} className="py-6 transition-all duration-500">
              <div className={`transition-all duration-500 ${activeIndex === index ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}>
                <div className='relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded'>
                  <Image
                    src={image.src}
                    alt={image.alt || "Gallery image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority={index < 3}
                    className='object-cover'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-center mt-4'>
        <Button>
          <Link href="/work">
            View Gallery
          </Link>
        </Button>
        </div>
      </div>
    </section>
  );
}

export default Gallery
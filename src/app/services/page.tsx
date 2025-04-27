'use client'
import React, { useState } from 'react'
import {services} from '@/lib/constants/data'
import PageBanner from '@/components/PageBanner';
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { serviceprop } from '@/types/common.types';
import Link from 'next/link';
const page:React.FC<serviceprop> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const handleTouchStart = (index: number) => {
     if (window.innerWidth < 768) {
       setHoveredIndex(index);
     }
   };
  return (
    <main>
      <PageBanner
        heading1="Welcome to"
        heading2="POLK ROADSIDE"
        info="Stranded? Our expert team is always on call to get you back on track—quickly, safely, and hassle-free."
        content="Whether it’s a flat tire, a dead battery, or you’re simply locked out, we’ve got your back—day or night. With Polk Roadside Assistance, help is just a call away. Stranded? Our expert team is always on call to get you back on track—quickly, safely, and hassle-free."
        service="ALWAYS HERE, ALWAYS READY"
      />
      <div className="flex lg:flex-col md:flex-row sm:flex-row  justify-center items-center gap-[39px]  text-white font-medium px-10">
        {services.map((link, idx) => (
          <div
            key={idx}
            className="flex w-full px-10 gap-10 bg-[#323232] rounded"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => handleTouchStart(idx)}
            onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 3000)}
          >
            <div>
              {link.url && (
                <Image
                  src={link.url}
                  alt="alt"
                  width={2000}
                  height={30}
                  className={`relative inset-0 w-[830px] h-[223] object-cover filter transition duration-300 gap-[8px] rounded-lg pt-[24px] pr-[20px] pb-[16px] pl-[20px] ${
                    hoveredIndex === idx ? "grayscale-0" : "grayscale"
                  }`}
                />
              )}
            </div>
            {!link.url && (
              <div className="absolute inset-0 w-full h-full bg-gray-100" />
            )}

            <div className="flex flex-col  justify-center ">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl relative mb-2 sm:mb-4 md:mb-6 transition-all-ease-in-out duration-500 ${
                  hoveredIndex === idx
                    ? "text-white bottom-[-20px] sm:bottom-[10px]"
                    : "text-white bottom-[-40px] sm:bottom-[-80px]"
                }`}
              >
                {link.title}
              </h2>
              <p
                className={`text-lg  relative mb-2 sm:mb-4 md:mb-6 transition-all-ease-in-out duration-500 ${
                  hoveredIndex === idx
                    ? "text-white bottom-[-20px] sm:bottom-[30px]"
                    : "text-white bottom-[-40px] sm:bottom-[-80px]"
                }`}
              >
                {link.info}
              </p>
              <div className='flex items-end justify-end'>
                <Button
                  className={`absolute bottom-3 sm:bottom-5 transform transition-all duration-300 w-[120px] sm:w-[140px] md:w-[15vh] ${
                    hoveredIndex === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } relative bg-primary text-sm sm:text-lg md:text-xl text-white items-center flex font-semibold gap-1 sm:gap-2 p-1 sm:p-2 md:p-3 ml-1 sm:ml-2`}
                  size="lg"
                >
                  <Link href="">
                    <h6 className="font-medium text-sm sm:text-base md:text-lg">
                      View More
                    </h6>
                  </Link>
                  <span className="h-8 w-4 sm:h-10 sm:w-5 bg-primary absolute top-0 right-[-16px] sm:right-[-20px]"></span>
                  <span className="h-5 w-5 sm:h-7 sm:w-6 bg-primary rotate-45 absolute top-6 sm:top-7 left-32 sm:left-38"></span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default page

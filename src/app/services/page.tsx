"use client";
import React, { useState } from "react";
import { services } from "@/lib/constants/data";
import PageBanner from "@/components/ServicesBanner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Service = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleTouchStart = (index: number) => {
    if (window.innerWidth < 768) {
      setHoveredIndex(index);
    }
  };
  return (
    <main>
      <PageBanner
        heading1="Tailored Service"
        heading2="-A Call Away"
        info="No matter the situation, our expert team is ready to assist"
        content="From flat tires to dead batteries, our trained technicians are ready 24/7 to get you back on the road safely and quickly. We serve Killeen, Copperas Cove, Temple, and nearby areas with reliable and affordable roadside assistance."
        service1="Our Roadside "
        service2="Services"
      />
      <div className="flex lg:flex-col md:flex-col flex-col  justify-center items-center gap-[39px] sm:mt-5 mt-15 text-white font-medium px-10">
        {services.map((link, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row w-full p-6 gap-10 bg-[#323232] rounded-xl"
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
                  className={`relative inset-0 lg:w-[830px] lg:h-[223px] object-cover  transition duration-300 gap-[8px] rounded-xl ${
                    hoveredIndex === idx ? "grayscale-0" : "grayscale"
                  }`}
                />
              )}
            </div>
            {!link.url && (
              <div className="absolute inset-0 w-full h-full bg-gray-100" />
            )}

            <div className="flex flex-col lg:flex-col flex-wrap sm:flex-col  lg:w-[50vw] md:flex-col justify-center ">
              <div className="flex flex-col gap-[2px] justify-center ">
                <h2
                  className={`lg:text-[52px] sm:text-3xl  md:text-4xl relative mb-2 sm:mb-4 md:mb-6 transition-all-ease-in-out duration-700 ${
                    hoveredIndex === idx
                      ? "text-white  lg:bottom-[-20px] sm:bottom-[10px]"
                      : "text-white  lg:bottom-[-80px] sm:bottom-[-80px]"
                  }`}
                >
                  {link.title}
                </h2>
              </div>
              <div>
              <p
                className={`text-lg  relative mb-2 w-full lg:w-full md:w-full sm:mb-4 md:mb-6 transition-all-ease-in-out duration-700 ${
                  hoveredIndex === idx
                    ? "text-white opacity-100 block  lg:bottom-[10px] sm:bottom-[30px]"
                    : "text-white opacity-0 hidden bottom-[-40px] sm:bottom-[-80px]"
                }`}
              >
                {link.info}
              </p>
              <Button
                className={`absolute bottom-3 sm:bottom-5 transform transition-all duration-300 w-[120px] sm:w-[140px] md:w-[15vh] ${
                  hoveredIndex === idx
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } relative bg-primary text-sm sm:text-lg md:text-xl text-white items-center flex font-semibold gap-1 sm:gap-2 p-1 sm:p-2 md:p-3 ml-1 sm:ml-2`}
                size="lg"
              >
                <Link href={link.link}>
                  <h6 className="font-medium text-sm sm:text-base md:text-lg">
                    View More
                  </h6>
                </Link>
                <span className="lg:h-10 lg:w-4 h-10 w-5 bg-primary absolute top-0 lg:right-[-16px] right-[-16px]  sm:right-[-20px]"></span>
                <span className="lg:h-7 lg:w-5.75 h-7 w-5.75 bg-primary rotate-45 absolute lg:top-7 top-7 lg:left-37 left-27"></span>
              </Button>
              </div>
              <div className="flex items-end justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Service;

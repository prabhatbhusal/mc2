import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FastHelp = () => {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-16 xl:px-28 py-12 md:py-20 lg:py-28 gap-8 lg:gap-16 xl:gap-20 max-w-screen-2xl mx-auto">
        {/* Image section */}
        <div className="flex flex-col justify-center items-center relative w-full lg:w-1/2">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full max-h-[517px]">
            <Image
              src="/images/handtire.png"
              alt="Tire service"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Tire mark on mobile appears below the main image */}
          <div className="relative w-full h-40 md:h-64 lg:hidden overflow-hidden opacity-30">
            <Image
              src="/images/tiremark.png"
              alt="Tire mark"
              fill
              className="object-contain rotate-45"
            />
          </div>

          {/* Desktop tire mark */}
          <div className="hidden lg:block absolute left-0 top-1/4 w-full h-full opacity-50">
            <div className="relative w-full h-full">
              <Image
                src="/images/tiremark.png"
                alt="Tire mark"
                fill
                className="object-contain -translate-x-1/2"
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col font-medium text-white gap-3 w-full lg:w-1/2 relative">
          <h6 className="text-base md:text-lg text-white">Fast Help</h6>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary">
            24/7,
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
              Anywhere in <br className="hidden sm:block" /> the Killeen, TX!
            </span>
          </h2>

          <p className="text-sm md:text-base">Mon - Sun (12:00 AM -12:00 PM)</p>
          <p className="text-sm md:text-base max-w-lg">
            When you find yourself stranded on the side of the road in Killeen,
            TX the last thing you want to worry about is how to get help.
            That&apos;s where our reliable 24/7 roadside assistance service
            comes to the rescue.
          </p>

          <div className="mt-4">
            <Button
              size="lg"
              className="relative bg-primary text-white items-center flex font-medium gap-2 p-2 sm:p-3"
            >
              <h6 className="text-sm md:text-base">Request Virtual Estimate</h6>
              <span className="h-10 w-5 bg-primary absolute top-0 right-0 hidden md:block"></span>
              <span className="h-6 w-6 bg-primary rotate-45 absolute top-6 right-0 translate-x-1/2 translate-y-1/2 hidden md:block"></span>
            </Button>
          </div>

          {/* Background tire mark */}
          <div className="hidden lg:block absolute right-0 bottom-0 opacity-75 overflow-hidden">
            <div className="relative w-64 h-64">
              <Image
                src="/images/tiremark.png"
                alt="Tire mark"
                fill
                className="object-contain -rotate-35"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastHelp;

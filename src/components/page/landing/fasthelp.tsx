import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FastHelp = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16 lg:px-28 gap-8 lg:gap-20 bg-black py-8 md:py-16 lg:py-35 relative overflow-hidden">
        {/* Left side with images */}
        <div className="flex flex-col justify-center items-center relative">
          <Image
            src="/images/handtire.png"
            alt="image"
            width={835}
            height={517}
            className="object-cover w-full max-w-[835px] h-auto sm:h-[350px] md:h-[450px] lg:h-[517px]"
          />
          <Image
            src="/images/tiremark.png"
            alt="image"
            width={535}
            height={500}
            className="object-contain absolute rotate-270 lg:ml-[-65vw] h-[300px] sm:h-[400px] lg:h-[500px] w-[300px] sm:w-[400px] lg:w-[535px] opacity-50 hidden md:block"
          />
        </div>

        {/* Right side with text content */}
        <div className="flex flex-col font-medium text-white gap-3 relative">
          <h6 className="text-base lg:text-lg text-white">Fast Help</h6>
          <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium text-primary">
            24/7,
            <br />
            <span className="text-3xl sm:text-4xl md:text-[50px] font-medium text-white">
              Anywhere in <br /> the Killeen, TX!
            </span>
          </h2>

          <p className="">Mon - Sun (12:00 AM -12:00 PM)</p>
          <p className="w-full lg:w-200">
            When you find yourself stranded on the side of the road in Killeen,
            TX the last thing you want to worry about is how to get help.
            That&apos;s where our reliable 24/7 roadside assistance service
            comes to the rescue.
          </p>
          <div className="mt-4">
            <Button
              size="lg"
              className="relative bg-primary text-sm sm:text-md space-x-0.5 text-white items-center flex font-regular gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
            >
              <h6 className="font-medium">Request Virtual Estimate</h6>
              <span className="h-10 w-5 bg-primary absolute top-0 right-[-20px]"></span>
              <span className="h-7 w-7 bg-primary rotate-45 absolute top-6.75 left-49.5 sm:left-51.5"></span>
            </Button>
          </div>
          <Image
            src="/images/tiremark.png"
            alt="image"
            width={535}
            height={500}
            className="object-contain absolute rotate-[-35deg] right-0 lg:left-125 h-[300px] sm:h-[400px] lg:h-[500px] w-[300px] sm:w-[400px] lg:w-[535px] opacity-75 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default FastHelp;

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FastHelp = () => {
  return (
    <section className="bg-[#07070A] p__tb">
      <div className="container">
        <div className="flex flex-col md:flex-row md:gap-x-10 lg:gap-x-16 xl:gap-x-20 gap-y-10">
          {/* Left side with images */}
          <div className="w-full md:w-1/2 min-h-[260px] relative rounded-md flex flex-col justify-center items-center overflow-hidden">
            <Image
              src="/images/handtire.png"
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 flex flex-col font-medium text-white gap-3 relative">
            <h6 className="text-base lg:text-lg text-white">Fast Help</h6>
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-medium text-primary">
              24/7,
              <br />
              <span className="text-3xl sm:text-4xl md:text-[50px] font-medium text-white">
                Anywhere in <br /> the Killeen, TX!
              </span>
            </h2>

            <p>Mon - Sun (12:00 AM -12:00 PM)</p>
            <p>
              When you find yourself stranded on the side of the road in Killeen,
              TX the last thing you want to worry about is how to get help.
              That&apos;s where our reliable 24/7 roadside assistance service
              comes to the rescue.
            </p>
            <div className="mt-4">
              <Button
                variant="clip_primary">
                Request Virtual Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastHelp;

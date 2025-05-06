import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Getback = () => {
  return (
    <main>
      <div className="relative flex flex-col xl:flex-row lg:flex-col w-full h-auto px-4 md:px-10 lg:px-[100px] ">
        <div className="  h-auto ">
          <Image
            src="/images/helpimg.png"
            alt="Descriptive text"
            width={3000}
            height={400}
            className="object-cover bg-center  lg:w-[1055px] md:w-[800px] sm:w-[500px] relative md:h-[500px] lg:h-[827px]"
          />
        </div>
        <div className="flex flex-col text-white font-medium bg-[#292929] lg:w-[890px] lg:h-[595px] relative z-[10] top-30 xl:right-50 lg:-right-10 md:right-0 h-auto  p-6 sm:p-8 md:p-12  lg:p-[100px]  ">
          <div className="flex flex-col gap-6  md:gap-10 lg:gap-12">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <h2>Ready to Get Back </h2>
              <h2 className="text-primary">on the Road?</h2>
            </div>

            <div className="flex flex-col text-sm sm:text-base font-light gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <h6 className="w-auto ">
                Don't wait around—call us now and our technician will be on the
                way in minutes.
              </h6>
              <h6 className="w-auto">
                Our friendly and knowledgeable staff will gather the necessary
                details to dispatch our team to your location promptly.md:py-[5]
              </h6>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <Button variant="clip_primary" size="lg">
                <Link
                  href="tel:+2543936078"
                  className="flex items-center gap-2 uppercase"
                >
                  <MdOutlinePhone className="flex-shrink-0" />
                  <h6 className="font-light whitespace-nowrap overflow-hidden">
                    (254) 393-6078
                  </h6>
                </Link>
              </Button>

              <Button variant="default" size="lg">
                <Link
                  href="tel:+2543936078"
                  className="flex items-center gap-2 uppercase"
                >
                  <span className="font-light">Request Online Assistance</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Getback;

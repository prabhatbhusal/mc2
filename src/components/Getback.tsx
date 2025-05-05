import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Getback = () => {
  return (
    <main>
      <div className="relative flex flex-col lg:flex-row w-full px-4 md:px-12 lg:px-28">
        <div className="hidden lg:block w-full lg:w-1/2">
          <Image
            src="/images/helpimg.png"
            alt="Descriptive text"
            width={1000}
            height={300}
            className="object-cover bg-center bg-no-repeat w-full h-full"
          />
        </div>
        <section className="flex flex-col text-white font-medium bg-[#292929] w-[890px] h-[595px] lg:w-2/4 p-6 sm:p-8 md:p-12 lg:absolute lg:right-28 lg:top-90 lg:transform lg:-translate-y-1/2">
          <div className="flex flex-col gap-6  md:gap-10 lg:gap-12">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <h2>Ready to Get Back </h2>
              <h2 className="text-primary">on the Road?</h2>
            </div>

            <div className="flex flex-col text-sm sm:text-base font-light gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <h6 className="w-100 lg:w-full md:w-full">
                Don't wait around—call us now and our technician will be on the
                way in minutes.
              </h6>
              <h6 className="w-100 lg:w-full md:w-full">
                Our friendly and knowledgeable staff will gather the necessary
                details to dispatch our team to your location promptly.
              </h6>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              <Button
                size="lg"
                className="relative bg-primary text-base  md:text-xl text-white lg:w-75 md:w-75 w-75  items-center flex font-regular gap-2 p-2 sm:p-3"
              >
                <MdOutlinePhone className="flex-shrink-0" />
                <h6 className="font-light whitespace-nowrap overflow-hidden">
                  (254) 393-6078
                </h6>
                <span className="hidden md:block h-10 w-5 bg-primary absolute top-0 right-[-20px]"></span>
                <span className="hidden md:block h-7 w-7 bg-primary rotate-45 absolute top-[26px] right-[-14px]"></span>
              </Button>
              <Button variant="clip_primary_outline" size="lg">
                <Link
                  href="tel:+2543936078"
                  className="flex items-center gap-2 uppercase"
                >
                  <span className="font-light">Request Online Assistance</span>

                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Getback;

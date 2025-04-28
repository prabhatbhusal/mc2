import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-12 lg:px-28 gap-8 lg:gap-20 lg:py-20 font-semibold">
        <div className="w-full lg:w-auto">
          <video
            autoPlay
            muted
            loop
            className="object-contain w-full h-auto lg:h-[471px] lg:w-[838px]"
          >
            <source src="/video/video2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="text-white w-full lg:w-auto">
          <div className="flex flex-col gap-2 mb-6">
            <div>
              <h3 className="text-base">Contact Us</h3>
            </div>
            <div>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-orbitron hover:text-gray-300 transition duration-300">
                Get{" "}
                <span className="text-red-600 hover:text-red-400">Help</span>{" "}
                Now
              </h2>
            </div>
          </div>

          <form
            action=""
            className="flex flex-col gap-6 md:gap-10 text-neutral-600"
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full">
              <div className="flex flex-col w-full">
                <label className="mb-1">Name</label>
                <input type="text" className="border-none bg-transparent" />
                <hr className="text-neutral-700 w-full" />
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1">Contact</label>
                <input type="number" className="bg-transparent" />
                <hr className="text-neutral-700 w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-10">
              <div className="w-full">
                <label htmlFor="" className="mb-1">
                  Email
                </label>
                <input type="email" className="w-full bg-transparent" />
                <hr className="text-neutral-700 w-full" />
              </div>
              <div className="w-full">
                <label htmlFor="" className="mb-1">
                  Message
                </label>
                <input type="text" className="w-full bg-transparent" />
                <hr className="text-neutral-700 w-full" />
              </div>
            </div>

            <div className="mt-2">
              <Button
                size="lg"
                className="relative bg-primary text-lg md:text-xl text-white items-center flex font-semibold gap-2 p-2 sm:p-3"
              >
                <h6 className="font-semibold text-base md:text-lg">
                  Get Contact
                </h6>
                <span className="h-10 w-5 bg-primary absolute top-0 right-0 sm:right-[-20px]"></span>
                <span className="h-7 w-6 bg-primary rotate-45 absolute top-7 right-4 sm:right-[-13px]"></span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

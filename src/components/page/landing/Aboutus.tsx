import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-no-repeat bg-[url(/images/redcar.png)] bg-neutral-900 bg-blend-multiply bg-cover justify-center items-center h-[60vh] bg-center text-white">
      <div className="flex flex-col py-25 items-center gap-5 min-h-screen z-10 px-4  ">
        <h6 className="text-lg sm:text-xl md:text-2xl">About Us</h6>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary text-center">
          Polk Roadside Assistance
        </h1>
        <p className="max-w-prose md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-center px-4 sm:px-0">
          Welcome to Polk Roadside Assistance, your trusted partner for reliable
          and prompt roadside assistance services. At Polk Roadside Assistance,
          we understand that emergencies can happen at any time, leaving you
          stranded on the road. That's why our team of skilled professionals is
          available 24/7, ready to assist you with a wide range of roadside
          issues.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8">
          <Button
            size="lg"
            className="relative bg-primary text-md text-white items-center flex font-regular gap-2 p-1 sm:p-3 ml-1 sm:ml-2 clip-path-[polygon(100%_0,100%_67%,76%_100%,0_100%,0_0)]"
          >
            <Link href="#" className="inline font-medium">
              Contact Now
            </Link>
            <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
            <span className="h-7 w-7 bg-primary rotate-45 absolute top-6.5 left-27.5 "></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

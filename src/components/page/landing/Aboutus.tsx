import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-no-repeat bg-[url(/images/redcar.png)] bg-neutral-900 bg-blend-multiply bg-cover justify-center items-center h-[60vh] bg-center text-white">
      <div className="flex flex-col py-25 items-center gap-5 min-h-screen z-10 px-4  ">
        <h6 className="text-lg sm:text-xl md:text-2xl">About Us</h6>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary text-center">
          Polk Roadside Assistance
        </h2>
        <p className="text-[#A9A9A9] my-5">
          Welcome to Polk Roadside Assistance, your trusted partner for reliable
          and prompt roadside assistance services. At Polk Roadside Assistance,
          we understand that emergencies can happen at any time, leaving you
          stranded on the road. That's why our team of skilled professionals is
          available 24/7, ready to assist you with a wide range of roadside
          issues.
        </p>
        <Button
          variant="clip_primary"
        >
          <Link href="/about" className="inline font-medium">
            Contact Now
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Aboutus;

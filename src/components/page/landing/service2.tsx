import { Button } from "@/components/ui/button";
import React from "react";

const service2 = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row gap-15 px-4 md:px-28 py-10 sm:flex-col">
        <div className="w-full h-[300px] md:h-[561px] bg-[url(/images/image.png)] bg-cover top-10 bg-center text-white p-4 md:p-10 flex flex-col justify-end">
          <div className="lg:top-[-355px] relative">
            <h2 className="text-3xl">Speedy Oil Change Services You’ll Love</h2>
            <Button
              size="lg"
              className="relative bg-secondary text-xl text-white top-0 items-center flex font-semibold gap-2 p-2 sm:p-3 ml-1 sm:ml-2 w-[13vh]"
            >
              <h6 className=" xs:inline sm:inline font-semibold lg:text-lg text-[15px]">
                Get Contact
              </h6>
              <span className="h-10 w-5 bg-secondary absolute top-0 right-[-20]"></span>
              <span className="h-7 w-6 bg-secondary rotate-45 absolute top-7 left-20 sm:left-29.5  lg:left-32.5 "></span>
            </Button>
          </div>
        </div>
        <div className="w-full h-[300px] md:h-[561px] bg-[url(/images/image3.png)] bg-no-repeat bg-cover text-white p-4 md:p-10 flex flex-col justify-end items-end">
          <h2 className="text-[32px]">
            Stuck on road?
            <br /> Call us anytime.
          </h2>
          <Button
            size="lg"
            className="relative bg-secondary text-xl text-white items-center flex font-semibold gap-2 p-3 sm:p-3 ml-1 sm:ml-2 w-[13vh]"
          >
            <h6 className="xs:inline sm:inline font-semibold lg:text-lg text-[15px] ">
              Get Contact
            </h6>
            <span className="h-10 w-5 bg-secondary absolute top-0 right-[-20]"></span>
            <span className="h-7 w-6 bg-secondary rotate-45 absolute top-7 left-20 sm:left-29.5  lg:left-32.5 "></span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default service2;

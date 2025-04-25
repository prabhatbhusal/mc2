import { Button } from "@/components/ui/button";
import React from "react";

const service2 = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row gap-15 px-4 md:px-28 py-10">
        <div className="w-full h-[300px] md:h-[561px] bg-[url(/images/image.png)] bg-cover bg-center text-white p-4 md:p-10 flex flex-col justify-end">
          <h2 className="text-[32px]">
            Speedy Oil Change Services You’ll Love
          </h2>
          <Button
            size="lg"
            className="relative bg-secondary text-xl text-white items-center flex font-semibold gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
          >
            <h6 className="hidden xs:inline sm:inline font-semibold text-lg">
              Get Contact
            </h6>
            <span className="h-10 w-5 bg-secondary absolute top-0 right-[-20]"></span>
            <span className="h-7 w-6 bg-secondary rotate-45 absolute top-7 left-33"></span>
          </Button>
        </div>
        <div className="w-full h-[300px] md:h-[561px] bg-[url(/images/image3.png)] bg-no-repeat bg-cover text-white p-4 md:p-10 flex flex-col justify-end">
          <h2 className="text-[32px]">
            Stuck on road?
            <br /> Call us anytime.
          </h2>
          <Button
            size="lg"
            className="relative bg-secondary text-xl text-white items-center flex font-semibold gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
          >
            <h6 className="hidden xs:inline sm:inline font-semibold text-lg">
              Get Contact
            </h6>
            <span className="h-10 w-5 bg-secondary absolute top-0 right-[-20]"></span>
            <span className="h-7 w-6 bg-secondary rotate-45 absolute top-7 left-33"></span>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default service2;

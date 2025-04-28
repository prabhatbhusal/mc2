import React from "react";
import { innerpageprops } from "@/types/common.types";
import { Button } from "./ui/button";

const PageBanner: React.FC<innerpageprops> = (prop: innerpageprops) => {
  return (
    <main>
      <div className="text-white flex flex-col h-auto min-h-screen md:h-[130vh] items-center font-medium gap-12 md:gap-20 lg:gap-90 bg-[url(/images/car.png)] bg-fill bg-center bg-no-repeat bg-blend-overlay bg-neutral-500 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-16 md:py-32 lg:py-52 gap-3 md:gap-4 lg:gap-[24px] w-full">
          <div className="flex flex-col items-center gap-2 md:gap-[10px]">
            <p className="text-sm md:text-base">24/7 ASSISTANCE</p>
            <hr className="w-12 md:w-15 text-center text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[92px] font-bold text-center">
            {prop.heading1}
          </h2>
          <h1 className="text-primary text-3xl md:text-4xl lg:text-[92px] font-bold text-center">
            {prop.heading2}
          </h1>
          <p className="font-light text-center max-w-full md:max-w-2xl">
            {prop.info}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 md:gap-5 w-full pb-12 md:pb-16 lg:pb-20">
          <div className="text-3xl md:text-4xl lg:text-[60px] flex flex-col md:flex-row gap-2 md:gap-5 text-center">
            <h2 className="text-white">{prop.service1}</h2>
            <h2 className="text-primary">{prop.service2}</h2>
          </div>
          <div className="w-full md:w-4/5 lg:w-[1122px] flex text-center">
            <p className="font-light">{prop.content}</p>
          </div>
          <div className="mt-4">
            <Button
              size="lg1"
              className="relative bg-primary text-white items-center flex font-semibold gap-2 md:gap-5 p-3 lg:p-4"
            >
              <h6 className="font-light text-sm md:text-base lg:text-lg">
                Starting Price <br />
                {prop.price}
              </h6>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageBanner;

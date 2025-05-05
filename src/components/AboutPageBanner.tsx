import React from "react";
import { props } from "@/types/common.types";

const PageBanner: React.FC<props> = (prop) => {
  return (
    <main>
      <div className="text-white flex flex-col h-[60vh] sm:h-[60vh] md:h-[80vh] lg:min-h-screen  lg:h-[110vh] items-center font-medium gap-12 md:gap-20 lg:gap-80 bg-[url(/images/car.png)] bg-fill bg-center bg-no-repeat bg-blend-overlay bg-neutral-500 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center  py-20 md:py-32 lg:py-48 gap-3 md:gap-4 lg:gap-[24px] w-full">
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

        <div className="flex flex-col items-center justify-center gap-3 md:gap-5 w-full pb-2 md:pb-16 lg:pb-20">
          <div className="text-2xl md:text-4xl lg:text-[60px] flex flex-col md:flex-row gap-2 md:gap-5 text-center">
            <h2 className="text-white">{prop.service1}</h2>
            <h2 className="text-primary">{prop.service2}</h2>
          </div>
          <div className="w-full md:w-4/5 lg:w-[1122px] flex justify-center items-center text-center">
            <p className="font-light text-center">{prop.content}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageBanner;

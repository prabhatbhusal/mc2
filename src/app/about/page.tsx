import React from "react";

import PageBanner from "@/components/AboutPageBanner";
import { aboutdata } from "@/lib/constants/data";
import Image from 'next/image'
import Contact from "@/components/page/landing/contact";
const page = () => {
  return (
    <main>
      <PageBanner
        heading1="Welcome to"
        heading2="POLK ROADSIDE"
        info="Stranded? Our expert team is always on call to get you back on track—quickly, safely, and hassle-free."
        content="Whether it’s a flat tire, a dead battery, or you’re simply locked out, we’ve got your back—day or night. With Polk Roadside Assistance, help is just a call away. Stranded? Our expert team is always on call to get you back on track—quickly, safely, and hassle-free."
        service1="ALWAYS HERE, "
        service2="ALWAYS READY"
      />
      <div className="flex flex-col text-white">
        <div className="bg-center bg-[url(/images/time.png)] min-h-screen md:h-[128.51vh] bg-cover flex flex-col px-4 sm:px-8 md:px-12 lg:px-[202px] py-10 md:py-20 lg:py-40 gap-8 md:gap-16 lg:gap-30">
          {aboutdata.map((about, index) => (
            <div
              key={about.id}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } relative`}
            >
              <div className="flex flex-col justify-center items-center border-gray p-4 sm:p-6 md:p-8 lg:p-[50px] w-full md:w-4/5 lg:w-[956px] h-auto md:h-[270px] bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[0.5px] rounded-[10px] border border-white/20 z-10">
                <h6 className="text-base sm:text-lg md:text-xl lg:text-[24px] text-center md:text-left">
                  {about.content}
                </h6>
              </div>
              <div className="self-center md:self-auto">
                <h2 className="text-primary text-4xl md:text-5xl lg:text-[92px] font-bold md:absolute md:mt-55 md:ml-[-120px]">
                  {about.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/aboutcar.png"
            alt="cars"
            width={3000}
            height={10}
            className=" h-auto w-screen mx-auto bg-center object-contain z-1 "
          />
        </div>
      </div>
      <div>
        <Contact />
      </div>
    </main>
  );
};

export default page;

import React from 'react'
import { props } from '@/types/common.types'
import { Search } from 'lucide-react';

const PageBanner:React.FC<props> = (prop) => {
  return (
    <main>
      <div className="text-white flex flex-col h-auto  items-center font-medium  lg:gap-60 md:gap-45 sm:gap-30 gap-20  bg-[url(/images/car.png)]  bg-fill bg-center bg-no-repeat bg-blend-overlay bg-neutral-500 ">
        <div className="flex flex-col items-center justify-center lg:py-52 py-30   gap-[24px]">
          <div className="flex flex-col items-center gap-[10px]">
            <p className="">24/7 ASSISTANCE</p>
            <hr className="w-15 text-center text-white" />
          </div>

          <h2 className="lg:text-[92px] md:text-[50px] text-[30px] text-center  font-bold">
            {prop.heading1}
          </h2>
          <h1 className=" text-primary lg:text-[92px] md:text-4xl text-[30px] text-center  font-bold">
            {prop.heading2}
          </h1>
          <p className="font-light w-auto">{prop.info}</p>
        </div>
        <div className="flex flex-col items-center justify-center  gap-5 ">
          <div className="lg:text-[60px] md:text-4xl sm:text-3xl flex flex-wrap justify-center text-center gap-5">
            <h2 className="text-white lg:text-[92px] md:text-[50px] text-[25px] ">
              {prop.service1}
            </h2>
            <h2 className="text-primary lg:text-[92px] md:text-[50px] text-[25px] ">
              {prop.service2}
            </h2>
          </div>
          <div className="max-w-[1122px]  mx-auto flex flex-wrap text-center">
            <p className="font-light max-w-[1122px]  mx-auto flex  text-center  ">
              {prop.content}
            </p>
          </div>


        </div>
      </div>
    </main>
  );
}

export default PageBanner

import React from 'react'
import { props } from '@/types/common.types'
import { Search } from 'lucide-react';

const PageBanner:React.FC<props> = (prop) => {
  return (
    <main>
      <div className="text-white flex flex-col h-[125vh] items-center font-medium gap-45 lg:gap-90 bg-[url(/images/car.png)]  bg-fill bg-center bg-no-repeat bg-blend-overlay bg-neutral-500 ">
        <div className="flex flex-col items-center justify-center py-52 gap-[24px]">
          <div className="flex flex-col items-center gap-[10px]">
            <p className="">24/7 ASSISTANCE</p>
            <hr className="w-15 text-center text-white" />
          </div>

          <h2 className="lg:text-[92px] md:text-[50px] text-[50px] text-center  font-bold">
            {prop.heading1}
          </h2>
          <h1 className=" text-primary lg:text-[92px] md:text-4xl text-[50px] text-center  font-bold">
            {prop.heading2}
          </h1>
          <p className="font-light w-auto">{prop.info}</p>
        </div>
        <div className="flex flex-col items-center justify-center  gap-5 ">
          <div className="lg:text-[60px] md:text-4xl sm:text-3xl flex flex-wrap text-center gap-5">
            <h2 className="text-white lg:text-[92px] md:text-[50px] text-[50px] ">
              {prop.service1}
            </h2>
            <h2 className="text-primary lg:text-[92px] md:text-[50px] text-[50px] ">
              {prop.service2}
            </h2>
          </div>
          <div className="lg:w-[1122px] w-150  flex flex-wrap text-center">
            <p className="font-light lg:w-[1122px] w-100 ">{prop.content}</p>
          </div>

          <div
            className="absolute  max-w-md w-[406px] h-[44px] bottom-[-200px] lg:left-[1402px] gap-[10px] p-[10px] sm:left[140px]
"
          >
            <div className="absolute inset-y-0 left-2 flex items-center  pl-3 pointer-events-none ">
              <Search className="text-gray-400 w-5 h-5 relative top-2" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-10 py-2 border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageBanner

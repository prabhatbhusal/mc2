import React from 'react'
import { innerpageprops } from '@/types/common.types'
import { Button } from './ui/button';


const PageBanner:React.FC<innerpageprops> = (prop:innerpageprops) => {
  return (
    <main>
      <div className="text-white flex flex-col h-[130vh] items-center font-medium  gap-90 bg-[url(/images/car.png)]  bg-fill bg-center bg-no-repeat bg-blend-overlay bg-neutral-500">
        <div className="flex flex-col items-center justify-center py-52 gap-[24px]">
          <div className="flex flex-col items-center gap-[10px]">
            <p>24/7 ASSISTANCE</p>
            <hr className="w-15 text-center text-white" />
          </div>

          <h2 className="lg:text-[92px] md:text-4xl sm:text:3xl font-bold">
            {prop.heading1}
          </h2>
          <h1 className=" text-primary lg:text-[92px] md:text-4xl sm:text:3xl font-bold">
            {prop.heading2}
          </h1>
          <p className="font-light">{prop.info}</p>
        </div>
        <div className="flex flex-col items-center justify-center  gap-5 ">
          <div className="lg:text-[60px] md:text-4xl sm:text:3xl flex gap-5">
            <h2 className="text-white">{prop.service1}</h2>
            <h2 className="text-primary">{prop.service2}</h2>
          </div>
          <div className="w-[1122px] flex text-center">
            <p className="font-light ">{prop.content}</p>
          </div>
          <div>
            <Button
              size="lg1"
              className="relative bg-primary text-white items-center flex font-semibold gap-5 lg:p-4 sm:p-3"

            >
              <h6 className="font-light text-base md:text-lg">
                Starting Price <br />
                {prop.price}
              </h6>

            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageBanner

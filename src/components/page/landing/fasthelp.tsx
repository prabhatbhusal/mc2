import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

const fasthelp = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 bg-black py-35">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/handtire.png"
            alt="image"
            width={500}
            height={50}
            className="object-cover h-[517px] w-[835px]"
          />
        </div>
        <div className="flex flex-col justify-center font-medium text-white gap-3 relative ">
          <h6 className="text-lg text-white">Fast Help</h6>
          <h2 className="text-[50px] font-medium text-primary">
            24/7,
            <br />
            <span className="text-[50px] font-medium text-white">
              Anywhere in <br /> the Killeen, TX!
            </span>
          </h2>

          <p className="">Mon - Sun (12:00 AM -12:00 PM)</p>
          <p className="w-200">
            When you find yourself stranded on the side of the road in Killeen,
            TX the last thing you want to worry about is how to get help. That&apos;s
            where our reliable 24/7 roadside assistance service comes to the
            rescue.
          </p>
          <div className="">
            <Button
              size="lg"
              className="relative bg-primary text-md space-x-0.5 text-white items-center flex font-regular gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
            >
              <h6 className="hidden xs:inline sm:inline font-medium">
                Request Virtual Estimate
              </h6>
              <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
              <span className="h-7 w-7 bg-primary rotate-45 absolute top-6.5 left-58.5"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fasthelp

import { Button } from '@/components/ui/button';
import React from 'react'
import Image from 'next/image';
const Aboutus = () => {
  return (
    <div className="    bg-blend-multiply  ">
      <Image
        src="/images/redcar.png"
        alt="car"
        width={1000}
        height={100}
        className="bg-blend-overlay object-cover h-150 w-550 -z-1 opacity-50  absolute"
      />
      <div className="flex flex-col justify-center items-center gap-5 h-150 z-10">
        <h6>Aboout Us</h6>
        <h1 className="text-[4rem] text-primary">Polk Roadside Assistance</h1>
        <p className="w-150">
          Welcome to Polk Roadside Assistance , your trusted partner for
          reliable and prompt roadside assistance services. At Polk Roadside
          Assistance , we understand that emergencies can happen at any time,
          leaving you stranded on the road. That&apos;s why our team of skilled
          professional='s is available 24/7, ready to assist you with a wide
          range of roadside issues.
        </p>
        <div>
          <Button
            size="lg"
            className="relative bg-primary text-xl text-white items-center flex font-medium gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
          >
            <h6 className="hidden xs:inline sm:inline font-orbitron">
              Contact Now
            </h6>
            <span className="h-8 w-7 bg-neutral-800 rotate-45 absolute top-12 left-31"></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus

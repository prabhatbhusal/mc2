import { Button } from '@/components/ui/button';
import React from 'react'

const Aboutus = () => {
  return (
    <div
      className="bg-no-repeat bg-[url(/images/redcar.png)] bg-neutral-900 bg-blend-multiply bg-cover bg-center text-white"

    >
      <div className="flex flex-col justify-center items-center gap-5 h-150 z-10">
        <h6>Aboout Us</h6>
        <h1 className="text-[4rem] text-primary">Polk Roadside Assistance</h1>
        <p className="w-200">
          Welcome to Polk Roadside Assistance , your trusted partner for
          reliable and prompt roadside assistance services. At Polk Roadside
          Assistance , we understand that emergencies can happen at any time,
          leaving you stranded on the road. That&apos;s why our team of skilled
          professional&apos;s is available 24/7, ready to assist you with a wide
          range of roadside issues.
        </p>
        <div>
          <Button
            size="lg"
            className="relative bg-primary text-md text-white items-center flex font-regular gap-2 p-1 sm:p-3 ml-1 sm:ml-2"
          >
            <h6 className="hidden xs:inline sm:inline font-medium">
              Contact Now
            </h6>
            <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
            <span className="h-7 w-7 bg-primary rotate-45 absolute top-6.5 left-31.5"></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus

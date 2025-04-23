import { Button } from '@/components/ui/button';
import React from 'react'

const Aboutus = () => {
  return (
    <div className="flex flex-col bg-neutral-700 justify-center items-center gap-5 h-150">
      <h6>Aboout Us</h6>
      <h1 className='text-[4rem]'>Polk Roadside Assistance</h1>
      <p className='w-150'>
        Welcome to Polk Roadside Assistance , your trusted partner for reliable
        and prompt roadside assistance services. At Polk Roadside Assistance ,
        we understand that emergencies can happen at any time, leaving you
        stranded on the road. That's why our team of skilled professionals is
        available 24/7, ready to assist you with a wide range of roadside
        issues.
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
  );
}

export default Aboutus

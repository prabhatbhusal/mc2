import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
const contact = () => {
  return (
    <div className=" flex  px-28   gap-20 font-semibold ">
      <div>
        <Image
          src="/images/brokencar.png"
          alt="contact"
          height={40}
          width={1000}
          className="object-contain h-[471px] w-[838px]"
        />
      </div>

      <div className="text-white">
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-base ">Contact Us</h3>
          </div>
          <div>
            <h2 className=" text-white text-[44px] font-orbitron  hover:text-gray-300 transition duration-300">
              Get <span className="text-red-600 hover:text-red-400">Help</span>{" "}
              Now
            </h2>
          </div>
        </div>{" "}
        <form action="" className="flex flex-col gap-10 text-neutral-600">
          <div className="flex gap-10">
            {" "}
            <div className="flex flex-col">
              <label>Name</label>
              <input type="text" className="border-none" />
              <hr className="text-neutral-700" />
            </div>
            <div className="flex flex-col">
              <label>Contact</label>
              <input type="number" />
              <hr className="text-neutral-700" />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <label htmlFor="">Email</label>
              <input type="email" />
              <hr className="text-neutral-700" />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <input type="text" />
              <hr className="text-neutral-700" />
            </div>
          </div>
          <div>
            <Button
              size="lg"
              className="relative bg-primary text-xl text-white items-center flex font-semibold gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
            >
              <h6 className="hidden xs:inline sm:inline font-semibold text-lg">
                Get Contact
              </h6>
              <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
              <span className="h-7 w-6 bg-primary rotate-45 absolute top-7 left-33"></span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contact

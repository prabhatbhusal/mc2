import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
const contact = () => {
  return (
    <div className=" flex justify-center items-center px-5 bg-neutral-800  ">
      <div>
        <Image
          src="/images/brokencar.png"
          alt="contact"
          height={40}
          width={1000}
          className="object-contain h-200 w-200"
        />
      </div>

      <div className="text-white p-[50px]">
        <h3>Contact Us</h3>
        <h1 className=" text-white text-2xl font-orbitron inline-block hover:text-gray-300 transition duration-300">
          Get <span className="text-red-600 hover:text-red-400">Help</span> Now
        </h1>

        <form action="">
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
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="email" />
            <hr className="text-neutral-700" />
            <label htmlFor="">Message</label>
            <input type="text" />
            <hr className="text-neutral-700" />
          </div>
          <Button
            size="lg"
            className="relative bg-primary text-xl text-white items-center flex font-medium gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
          >
            <span className="hidden xs:inline sm:inline font-orbitron">
              Get Contact
            </span>
            <span className="h-8 w-7 bg-neutral-800 rotate-45 absolute top-12 left-31"></span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default contact

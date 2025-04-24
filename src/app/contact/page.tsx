import { Button } from '@/components/ui/button';
import React from 'react'

const page = () => {
  return (
    <main>
      <div className="h-[100vh]  bg-cover bg-[url(/images/contactbg.png)] px-[50px] py-[75px] flex flex-col justify-end items-end font-medium gap-10">
        <div className="bg-[#141414]  flex flex-col  w-[971px] h-[840px] py-[75px] px-[50px] gap-10">
          <div className="flex flex-col gap-5 justify-center items-center text-white">
            <p>Your journey matters</p>
            <hr className="w-[50px]" />
            <h1 className="text-[52px]">
              <span className="text-primary">Let us </span> know how we can{" "}
              <span className="text-primary">help.</span>
            </h1>
          </div>
          <form
            action=""
            className="flex flex-col border-none text-neutral-500 justify-center px-30 gap-10"
          >
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input type="text" className="px-5 py-3 w-full" />
              <hr className="w-full" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Contact</label>
              <input type="text" className="px-5 py-3 w-full" />
              <hr className="w-full" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="email" className="px-5 py-3 w-full" />
              <hr className="w-full" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Message</label>
              <input type="text" className="px-5 py-3 w-full" />
              <hr className="w-full" />
            </div>
            <div className="flex justify-end">
              <Button
                size="lg"
                className="relative bg-primary text-xl text-white items-center flex font-semibold gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
                type='submit'
              >
                <h6 className="hidden xs:inline sm:inline font-semibold text-lg">
                  Send Message
                </h6>
                <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
                <span className="h-7 w-6 bg-primary rotate-45 absolute top-7 left-40"></span>
              </Button>
            </div>
          </form>
        </div>
        <h6 className='absolute text-neutral-500 z-100 top-110 left-35'>1802 STANDRIDGE ST, KILLEEN, TX 76543, USA</h6>
      </div>
    </main>
  );
}

export default page

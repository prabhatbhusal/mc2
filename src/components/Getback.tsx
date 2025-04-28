import React from 'react'
import { MdOutlinePhone } from 'react-icons/md';
import { Button } from './ui/button';
import Image from 'next/image';

const Getback = () => {
  return (
    <main>
      <div className="flex  px-4 sm:px-6 md:px-12 lg:px-28">
        <div>
          <Image
            src="/images/helpimg.png"
            alt="Descriptive text"
            width={1000}
            height={300}
            className="object-cover bg-center bg-no-repeat w-[1055px
]
            h-[827px]"
          />
        </div>
        <section className="flex flex-col text-white font-medium  absolute right-45  bg-[#292929] mt-30   w-[890px] h-[595px]">
          <div className='"flex flex-col gap-[48px] p-[100px] justify-center items-center'>
            <div className="text-[60px]">
              <h2>Ready to Get Back </h2>
              <h2 className="text-primary">on the Road?</h2>
            </div>

            <div className="flex flex-col text-md font-light gap-10">
              <h6>
                Don’t wait around—call us now and our technician will be on the
                way in minutes.
              </h6>
              <h6>
                Our friendly and knowledgeable staff will gather the necessary
                details to dispatch our team to your location promptly.
              </h6>
            </div>

            <div className="flex  gap-10">
              <Button
                size="lg"
                className="relative bg-primary text-xl text-white items-center flex font-regular gap-2 p-2 sm:p-3"
              >
                <MdOutlinePhone className="flex-shrink-0" />
                <h6 className="hidden md:inline font-light whitespace-nowrap overflow-hidden">
                  (254) 393-6078
                </h6>
                <span className="hidden md:block h-10 w-5 bg-primary absolute top-0 right-[-20px]"></span>
                <span className="hidden md:block h-7 w-7 bg-primary rotate-45 absolute top-[26px] right-[-14px]"></span>
              </Button>
              <Button
                size="lg"
                className="relative bg-primary text-xl text-white items-center flex font-regular gap-2 p-2 sm:p-3"
              >
                <MdOutlinePhone className="flex-shrink-0" />
                <h6 className="hidden md:inline font-light whitespace-nowrap overflow-hidden">
                  Request Service Online
                </h6>
                <span className="hidden md:block h-10 w-5 border-primary border-1 bg-transparent absolute top-0 right-[-20px]"></span>
                <span className="hidden md:block h-7 w-7 border-primary border-1 border-bottm-transparent bg-transparent rotate-45 absolute top-[26px] right-[-14px]"></span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Getback

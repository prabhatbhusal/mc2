import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md"
import { Button } from "@/components/ui/button";
import Logobtn from '@/components/logobtn'
const Landingpage = () => {
  return (
    <div className="h-[100vh] bg-blend-overlay flex flex-row justify-center items-center   text-white z-10">
      <video
        autoPlay
        muted
        loop
        className="object-cover h-[100vh] w-full absolute grayscale"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <div className="w-[90%] flex flex-col justify-center items-center gap-2 relative right-[-10] z-10 ">
        <p className="text-lg text-white">POLK ROADSIDE ASSITANCE</p>
        <hr className="w-10 text-center text-white" />
        <h1 className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text font-bold text-[92px]">
          24/7 Roadside Assistance
        </h1>
        <h2 className="bg-gradient-to-b from-white to-neutral-800 text-transparent bg-clip-text font-bold text-[92px]">
          Anytime, Anywhere!
        </h2>
        <p>
          Polk Roadside Assistance is a professional roadside assistance service
          provider that offers a range of services to help you in case of an
          emergency.
        </p>
        <div className="flex gap-5">
          <button className="orbitron border-1 border-white px-10 py-2 text-white font-light">
            Text As Now
          </button>
          <Button
            size="lg"
            className="relative bg-primary text-xl text-white items-center flex font-regular gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
          >
            <span className="hidden xs:inline sm:inline font-light">
              Call Us Now
            </span>
            <MdArrowOutward />
            <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
            <span className="h-7 w-7 bg-primary rotate-45 absolute top-6.5 left-39"></span>
          </Button>
        </div>
      </div>
      <div className="w-10% flex flex-col justify-center items-center gap-5 z-10">
        <span className="rounded-full bg-neutral-500 px-5 py-3 ">
          <Image src="/icons/location.svg" alt="logo" height={8} width={20} />
        </span>
        <span className="rounded-full bg-neutral-500 px-5 py-4">
          <Image src="/icons/mail.svg" alt="logo" height={8} width={20} />
        </span>
        <span className="rounded-full bg-neutral-500 px-5 py-3">
          <Image src="/icons/phone.svg" alt="logo" height={8} width={20} />
        </span>
      </div>
    </div>
  );
};

export default Landingpage;

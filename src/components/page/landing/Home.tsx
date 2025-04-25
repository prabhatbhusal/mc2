"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/button";

const Landingpage = () => {
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const handleIconInteraction = (index: number, isActive: boolean) => {
    if (window.innerWidth <= 768) {
      // For mobile - toggle on click
      if (isActive) {
        setActiveIcon(index);
      } else {
        setActiveIcon(null);
      }
    } else {
      // For desktop - hover behavior
      if (isActive) {
        setActiveIcon(index);
      } else {
        setActiveIcon(null);
      }
    }
  };

  const contactInfo = [
    {
      icon: "/icons/location.svg",
      text: "1802 Standridge St, Killeen, TX 76543, USA",
      alt: "location",
    },
    {
      icon: "/icons/mail.svg",
      text: "info@polkroadsideassistance.com",
      alt: "email",
    },
    {
      icon: "/icons/phone.svg",
      text: "(254) 393-6078",
      alt: "phone",
    },
  ];

  return (
    <div className="h-screen bg-blend-overlay flex flex-col md:flex-row justify-center items-center text-white z-10 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="object-cover h-full w-full absolute grayscale"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <div className="w-full md:w-[90%] flex flex-col justify-center items-center gap-2 z-10 px-4 md:px-0">
        <p className="text-base md:text-lg text-white text-center">
          POLK ROADSIDE ASSITANCE
        </p>
        <hr className="w-10 text-center text-white" />
        <h1 className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[92px] text-center">
          24/7 Roadside Assistance
        </h1>
        <h2 className="bg-gradient-to-b from-white to-neutral-800 text-transparent bg-clip-text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[92px] text-center">
          Anytime, Anywhere!
        </h2>
        <p className="text-center max-w-2xl mb-4 px-4">
          Polk Roadside Assistance is a professional roadside assistance service
          provider that offers a range of services to help you in case of an
          emergency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full justify-center items-center">
          <button className="orbitron border border-white px-6 sm:px-10 py-2 text-white font-light w-full sm:w-auto">
            Text As Now
          </button>
          <Button
            size="lg"
            className="relative bg-primary text-lg sm:text-xl text-white items-center flex font-regular gap-2 p-2 sm:p-3 w-full sm:w-auto justify-center"
          >
            <span className="font-light">Call Us Now</span>
            <MdArrowOutward />
            <span className="h-10 w-5 bg-primary absolute top-0 right-0 sm:right-[-20px] hidden sm:block"></span>
            <span className="h-7 w-7 bg-primary rotate-45 absolute top-6.75 left-39.5 hidden sm:block"></span>
          </Button>
        </div>
      </div>

      <div className="flex flex-row md:flex-col justify-center items-center gap-3 md:gap-5 z-10 mt-8 md:mt-0 fixed bottom-4 md:bottom-auto md:right-4 md:top-1/2 md:-translate-y-1/2">
        {contactInfo.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`rounded-full ${
                activeIcon === index
                  ? "bg-primary"
                  : "bg-neutral-500 hover:bg-primary"
              } flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => handleIconInteraction(index, true)}
              onMouseLeave={() => handleIconInteraction(index, false)}
              onClick={() => handleIconInteraction(index, activeIcon !== index)}
            >
              {activeIcon === index && (
                <span className="hidden md:inline text-sm whitespace-nowrap">
                  {item.text}
                </span>
              )}
              <Image
                src={item.icon}
                alt={item.alt}
                height={8}
                width={20}
                className="min-w-5"
              />
            </div>
            {/* Mobile tooltip - only shows on click */}
            {activeIcon === index && (
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-primary text-white p-2 rounded text-xs whitespace-nowrap md:hidden">
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landingpage;

"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Mail, Map, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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
      icon: <MapPin className="text-white" />,
      text: "1802 Standridge St, Killeen, TX 76543, USA",
      alt: "location",
    },
    {
      icon: <Mail className="text-white" />,
      text: "info@polkroadsideassistance.com",
      alt: "email",
    },
    {
      icon: <Phone className="text-white" />,
      text: "(254) 393-6078",
      alt: "phone",
    },
  ];

  return (
    <div className="h-screen bg-blend-overlay flex flex-col md:flex-row justify-center items-center text-white z-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/40"></div>
      <video
        autoPlay
        muted
        loop
        className="object-cover h-full w-full absolute grayscale"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="container flex flex-col justify-center items-center gap-2 z-10">
        <p className="text-base md:text-lg text-white text-center">
          POLK ROADSIDE ASSITANCE
        </p>
        <hr className="w-20 text-center text-white" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text font-bold text-center">
          24 / 7 Roadside Assistance Anytime, Anywhere!
        </h1>
        <p className="text-base md:text-lg uppercase text-center max-w-3xl mb-4 px-4">
          Polk Roadside Assistance is a professional roadside assistance service
          provider that offers a range of services to help you in case of an
          emergency.
        </p>
        <div className="flex gap-4 sm:gap-5 w-full justify-center items-center">
          <Button variant="outline" size="lg" className="font-light w-fit">
            Text Us Now
          </Button>
          <Button
            variant="clip_primary"
            size="lg"

          >
            <Link href="tel:+2543936078" className="flex items-center gap-2 uppercase">
              <span className="font-light">Call Us Now</span>
              <MdArrowOutward />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end gap-3 md:gap-5 z-30 fixed bottom-5 sm:bottom-10 right-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`rounded-full ${activeIcon === index
                ? "bg-primary"
                : "bg-white/30 hover:bg-primary"
                } flex gap-2 px-3 md:px-5 py-2 md:py-3 transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => handleIconInteraction(index, true)}
              onMouseLeave={() => handleIconInteraction(index, false)}
              onClick={() => handleIconInteraction(index, activeIcon !== index)}
            >
              {activeIcon === index && (
                <span className="text-sm whitespace-nowrap">
                  {item.text}
                </span>
              )}
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landingpage;

import React from "react";
import Image from "next/image";
import { Footerareas, Footercontact, Footerserve } from "@/lib/constants/data";

const Footer = () => {
  return (
    <div className=" ">
      {/* Top Tire Image */}
      <Image
        alt="logo"
        src="/images/tire.png"
        className="h-[350px] w-[500px] absolute mt-140 rotate-[195deg] left-[-110px] p-2 object-contain hidden md:block"
        height={50}
        width={500}
      />

      {/* Map Section */}
      <div className="z-[100]">
        <iframe
          title="Google Maps - Polk Roadside Assistance Location"
          width="100%"
          height="503"
          className="h-[300px] md:h-[503px]"
          src="https://maps.google.com/maps?width=100%25&amp;height=503&amp;hl=en&amp;q=1802%20Standridge%20St,%20Killeen,%20TX%2076543,%20USA+(Polk%20Roadside%20Assistance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/personal-trackers/">
            real-time gps tracker,
          </a>
        </iframe>
      </div>

      {/* Footer Content */}
      <div className="bg-[url(/images/bg.png)] bg-blend-multiply text-white flex flex-col items-center gap-18 py-5 ">
        {/* Logo */}
        <div className="h-[10%]">
          <div className="bg-[#575757CC] h-[89px] rounded-xl px-2">
            <Image
              alt="logo"
              src="/images/logo.png"
              className="h-[89px] w-[245px] p-2 object-contain rounded-xl"
              height={50}
              width={500}
            />
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-60 md:gap-30 gap-10 px-4 md:px-0">
          {/* Contact Section */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div>
              <h3>Contact</h3>
              <hr className="border-[#D23631] w-7 border-1 mx-auto md:mx-0" />
              <div className="space-y-2">
                {Footercontact.map((items) => (
                  <div
                    className="flex gap-2 items-center justify-center md:justify-start"
                    key={items.id}
                  >
                    <Image
                      src={items.url}
                      alt="logo"
                      height={10}
                      width={20}
                      className="object-contain"
                    />
                    <span>{items.content}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Business hours</h3>
              <hr className="border-[#D23631] w-14 border-1 mx-auto md:mx-0" />
              <div className="flex flex-col">
                <span>MON-FRI: 9:00AM - 5:00PM</span>
                <span>SAT-SUN: Closed</span>
              </div>
            </div>
          </div>

          {/* Areas We Serve */}
          <div className="text-center md:text-left">
            <h3>Areas We Serve</h3>
            <hr className="border-[#D23631] w-10 border-1 mx-auto md:mx-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Footerareas.map((items) => (
                <div className="flex flex-col" key={items.id}>
                  <span>{items.content}</span>
                  <hr className="h-1 w-40 mx-auto md:mx-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3>Services</h3>
            <hr className="border-primary w-10 border-1 mx-auto md:mx-0" />
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Footerserve.map((items) => (
                <div className="flex flex-col" key={items.id}>
                  <span>{items.content}</span>
                  <hr className="h-1 w-40 mx-auto md:mx-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tire Image */}
        <Image
          alt="logo"
          src="/images/tire.png"
          className="h-[350px] w-[500px] absolute mt-15 rotate-[15.66deg] right-[-100px] object-contain hidden md:block"
          height={50}
          width={500}
        />

        {/* Copyright Text */}
        <div className="mt-auto text-center px-4">
          <p className="text-sm">
            COPYRIGHT @2025 - POLK ROADSIDE ASSISTANCE ALL RIGHTS RESERVED.
            <br className="md:hidden" />
            DESIGNED BY ISTEM AI WEB STUDIOS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

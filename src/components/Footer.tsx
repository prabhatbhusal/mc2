import React from "react";
import Image from "next/image";
import { Footerareas, Footercontact, Footerserve } from "@/lib/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[url(/images/bg.png)] bg-blend-multiply">
      {/* Top Tire Image */}
      <Image
        alt="logo"
        src="/images/footer-tyre.png"
        className="h-[200px] w-[200px] absolute -left-10 top-10 object-contain hidden md:block -rotate-180 opacity-50 z-0"
        height={50}
        width={500}
      />

      <div className="container">
        {/* Footer Content */}
        <div className="relative text-white flex flex-col gap-18 py-5 z-10">
          {/* Logo */}
          <div className="bg-[#575757CC] max-w-[200px] mx-auto rounded-xl px-2">
            <Image
              alt="logo"
              src="/images/logo.png"
              className="h-[89px] w-[245px] p-2 object-contain rounded-xl"
              height={50}
              width={500}
            />
          </div>

          {/* Grid Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Contact Section */}
            <div className="flex flex-col gap-5 md:text-left">
              <div>
                <h3>Contact</h3>
                <hr className="border-[#D23631] w-7 border-1 mt-2" />
                <div className="space-y-2 mt-5">
                  {Footercontact.map((items) => (
                    <div
                      className="flex gap-2 items-center"
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
                <hr className="border-[#D23631] w-14 border-1 mt-2" />
                <div className="flex flex-col mt-5">
                  <span>MON-FRI: 9:00AM - 5:00PM</span>
                  <span>SAT-SUN: Closed</span>
                </div>
              </div>
            </div>

            {/* Areas We Serve */}
            <div>
              <h3>Areas We Serve</h3>
              <hr className="border-[#D23631] w-10 border-1 mt-2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 mt-5">
                {Footerareas.map((items) => (
                  <div className="flex flex-col border-b border-gray-500 w-fit" key={items.id}>
                    <span>{items.content}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3>Services</h3>
              <hr className="border-primary w-10 border-1 mt-2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 mt-5">
                {Footerserve.map((items) => (
                  <div className="flex flex-col border-b border-gray-500 w-fit" key={items.id}>
                    <span>{items.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="mt-auto px-4">
            <p className="text-sm text-center">
              COPYRIGHT @2025 - POLK ROADSIDE ASSISTANCE ALL RIGHTS RESERVED.
              <br className="md:hidden" />
              DESIGNED BY <Link href="https://istemlab.ai/" className="hover:underline">ISTEM AI WEB STUDIOS</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Tire Image */}
      <Image
        alt="logo"
        src="/images/footer-tyre.png"
        className="h-[200px] w-[200px] absolute -right-10 bottom-0 object-contain hidden md:block opacity-50 z-0"
        height={50}
        width={500}
      />
    </footer>
  );
};

export default Footer;

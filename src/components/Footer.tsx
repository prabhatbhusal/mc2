import React from "react";
import Image from "next/image";
import { Footerareas, Footercontact, Footerserve } from "@/lib/constants/data";
const Footer = () => {
  return (
    <div
      className="overflow-x-hidden
"
    >
      <div >
              <iframe
                title="Google Maps - Polk Roadside Assistance Location"
                width="100%"
                height="503"



                src="https://maps.google.com/maps?width=100%25&amp;height=503&amp;hl=en&amp;q=1802%20Standridge%20St,%20Killeen,%20TX%2076543,%20USA+(Polk%20Roadside%20Assistance)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/collections/personal-trackers/">
                  real-time gps tracker,
                </a>
              </iframe>
            </div>
      <div className="bg-[url(/images/bg.png)] bg-blend-multiply bg-neutral-500 text-white flex flex-col items-center gap-18 h-[500px] py-5 overflow-x-hidden ">
        <div className="h-[10%]">
          <div
            className="bg-[#575757CC
      ] h-[89px] rounded-xl px-2"
          >
            <Image
              alt="logo"
              src="/images/logo.png"
              className="h-[89px] w-[245px] p-2 object-contain bg-[#575757CC] rounded-xl "
              height={50}
              width={500}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-60">
          <div className="flex flex-col gap-5">
            <div>
              <h3>Contact</h3>
              <hr className="text-[#D23631] w-7 border-1 " />
              {Footercontact.map((items) => (
                <div className="flex gap-2" key={items.id}>
                  <Image
                    src={items.url}
                    alt="logo"
                    height={10}
                    width={20}
                    className="fill object-contain"
                  />
                  <span>{items.content}</span>
                </div>
              ))}
            </div>
            <div>
              <h3>Business hours</h3>
              <hr className="text-[#D23631]  w-14 border-1 " />
              <span>MON-FRI: 9:00AM - 5:00PM </span>
              <span>SAT-SUN: Closed</span>
            </div>
          </div>

          <div>
            <h3>Areas We Serve</h3>
            <hr className="text-[#D23631]  w-10 border-1 " />
            <div className="grid grid-cols-2 gap-3">
              {Footerareas.map((items) => (
                <div className="flex flex-col gap-2" key={items.id}>
                  <span>{items.content}</span>
                  <hr className="h-1 w-40" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>Services</h3>
            <hr className="text-primary  w-10 border-1 " />
            <div className="grid grid-cols-2 ">
              {Footerserve.map((items) => (
                <div className="flex  flex-col gap-3" key={items.id}>
                  <span>{items.content}</span>
                  <hr className="h-1 w-40" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p>
            COPYRIGHT @2025 - POLK ROADSIDE ASSISTANCE ALL RIGHTS RESERVED.
            DESIGNED BY ISTEM AI WEB STUDIOS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

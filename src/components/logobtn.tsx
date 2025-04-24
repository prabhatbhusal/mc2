"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactIcons() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="w-10% flex flex-col justify-center items-center gap-5 z-10 relative">
      {/* Location Icon */}
      <div
        className="relative"
        onMouseEnter={() => setActiveTooltip("location")}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <span className="rounded-full bg-neutral-500 px-5 py-3 cursor-pointer">
          <Image
            src="/icons/location.svg"
            alt="location"
            height={8}
            width={20}
          />
        </span>
        {activeTooltip === "location" && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg min-w-[200px]">
            <div className="text-sm font-semibold text-gray-700">
              16, 09 St., Killeen, TX
              <br />
              76545, USA
            </div>
            <div className="absolute w-3 h-3 bg-white rotate-45 -right-1 top-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>

      {/* Mail Icon */}
      <div
        className="relative"
        onMouseEnter={() => setActiveTooltip("mail")}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <span className="rounded-full bg-neutral-500 px-5 py-4 cursor-pointer">
          <Image src="/icons/mail.svg" alt="mail" height={8} width={20} />
        </span>
        {activeTooltip === "mail" && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg min-w-[200px]">
            <div className="text-sm font-semibold text-gray-700">
              info@example.com
              <br />
              support@example.com
            </div>
            <div className="absolute w-3 h-3 bg-white rotate-45 -right-1 top-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>

      {/* Phone Icon */}
      <div
        className="relative"
        onMouseEnter={() => setActiveTooltip("phone")}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <span className="rounded-full bg-neutral-500 px-5 py-3 cursor-pointer">
          <Image src="/icons/phone.svg" alt="phone" height={8} width={20} />
        </span>
        {activeTooltip === "phone" && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg min-w-[200px]">
            <div className="text-sm font-semibold text-gray-700">
              +1 (234) 567-8900
              <br />
              24/7 Emergency Support
            </div>
            <div className="absolute w-3 h-3 bg-white rotate-45 -right-1 top-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>
    </div>
  );
}

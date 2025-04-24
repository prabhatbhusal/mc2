"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const services = [
  { title: "Towing", url: "/Services/Towing.jpg" },
  { title: "Fuel Delivery", url: "/Services/Fueldelivery.jpg" },
  { title: "Lock Out Services", url: "/Services/lockout.jpg" },
  { title: "Roadside Assistance", url: "/Services/roadside.jpg" },
  { title: "JumpStart", url: "/Services/Jumpstart.jpg" },
  { title: "Heavy Duty Jump", url: "/Services/Heavyduty.jpg" },
  { title: "Tire Repair", url: "/Services/tirerepair.jpg" },
  { title: "Tire Change", url: "/Services/tirechange.jpg" },
  { title: "Mobile Battery Change", url: "/Services/mobile.jpg" },
  { title: "Car Battery Replacement", url: "/Services/Batteryreplace.png" },
  { title: "Air Delivery Service", url: "/Services/Towing.jpg" },
];

export default function Carousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full px-4 py-8">
      {/* Navigation Buttons */}
      <div className="absolute right-4 -top-20 z-10 flex gap-2">
        <button
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur transition-all hover:bg-white/100"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur transition-all hover:bg-white/100"
        >
          →
        </button>
      </div>

      {/* Carousel Items */}
      <div
        ref={scrollContainerRef}
        className="flex h-[700px] overflow-x-auto scrollbar-hide pb-4"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative mx-4 h-[432px] w-[399px] flex-shrink-0 rounded overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image with grayscale filter */}
            {service.url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.url}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover filter transition duration-300 ${
                  hoveredIndex === index ? "grayscale-0" : "grayscale"
                }`}
              />
            )}

            {/* Fallback background */}
            {!service.url && (
              <div className="absolute inset-0 w-full h-full bg-gray-100" />
            )}

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col justify-end">
              <h3
                className={`text-4xl relative font-bold mb-6 transition-all-ease-in-out duration-500 ${
                  hoveredIndex === index
                    ? "text-white bottom-[30px]"
                    : "text-white"
                }`}
              >
                {service.title}
              </h3>

              <Button
                className={`absolute bottom-5  transform transition-all duration-300 w-[15vh] ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } relative bg-primary text-xl text-white items-center flex font-semibold gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
              >`}
              size='lg'
              >
                <h6 className="hidden xs:inline sm:inline font-semibold text-lg">
                  Read More
                </h6>
                <span className="h-10 w-5 bg-primary absolute top-0 right-[-20px] "></span>
                <span className="h-7 w-6 bg-primary rotate-45 absolute top-7 left-38"></span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

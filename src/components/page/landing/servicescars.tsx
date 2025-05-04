import React from 'react'
import Image from 'next/image'
const servicescars = () => {
  return (
    <section className="bg-[#07070A] p__tb">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center">
          <h6 className='text-white'>Services</h6>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold my-5">
            We Also Offer Reliable <br />{" "}
            <span className="text-primary ">Towing Services!</span>{" "}
          </h2>
          <p className="text-[#E0E0E0]">
            We understand that car breakdowns, flat tires, dead batteries, and
            accidents can happen at any time of the day or night, and
            that&apos;s why we are committed to providing round-the-clock
            assistance to drivers in the Killeen, TX area.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/cars.png"
            alt="cars"
            width={3000}
            height={10}
            className=" h-auto w-400 bg-center object-contain z-1 "
          />
        </div>
      </div>
    </section>
  );
}

export default servicescars

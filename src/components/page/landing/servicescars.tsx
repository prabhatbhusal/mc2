import React from 'react'
import Image from 'next/image'
const servicescars = () => {
  return (
    <main className="text-white font-medium bg-black">
      <div className='py-10'>
        <div className="flex flex-col justify-center text-center items-center gap-5 ">
          <h6 className=''>Services</h6>
          <h1 className="text-white text-4xl font-bold">
            We Also Offer Reliable <br />{" "}
            <span className="text-primary ">Towing Services!</span>{" "}
          </h1>
          <p className='w-200'>
            We understand that car breakdowns, flat tires, dead batteries, and
            accidents can happen at any time of the day or night, and that&apos;s why
            we are committed to providing round-the-clock assistance to drivers
            in the Killeen, TX area.
          </p>
        </div>
        <div className='flex justify-center'>
          <Image src='/images/cars.png' alt='cars' width={3000} height={10} className=' h-200 w-400 bg-center object-contain z-1'/>
        </div>
      </div>
    </main>
  );
}

export default servicescars

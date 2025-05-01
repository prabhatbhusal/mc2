import React from 'react'
import ServiceCard from '@/components/page/service/ServiceCard'
import Image from 'next/image'

const Service = () => {
  return (
    <div className="h-[90vh] ">
      <Image
        src="/images/halftire.png"
        alt="cars"
        width={3000}
        height={10}
        className=" h-[650.1620432780828px] absolute w-[600px] bg-center ml-[-11vw] top-350 object-contain z-[-1]"
      />
      <div className="h-[25vh] text-white font-medium px-28 pt-35 z-[100]">
        <div className=" ">
          <h2
            className="text-[52px] font-bold
"
          >
            Services 24/7
          </h2>
          <p>
            Polk Roadside Assistance is a professional roadside assistance
            service provider that offers a range of services to help you in case
            of an emergency.
          </p>
        </div>
        <div>
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Service

import React from 'react'
import ServiceCard from '@/components/page/service/ServiceCard'


const Service = () => {
  return (
    <>
      <div className="h-[25vh] text-white font-medium px-28 pt-35 ">
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
      </div>
      <ServiceCard />
    </>
  );
}

export default Service

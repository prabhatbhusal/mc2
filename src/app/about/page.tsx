import React from 'react'

import PageBanner from '@/components/PageBanner'
import { aboutdata } from '@/lib/constants/data'
const page = () => {
  return (
    <main>
      <PageBanner
        heading1="Welcome to"
        heading2="POLK ROADSIDE"
        info="Stranded? Our expert team is always on call to get you back on track—quickly, safely, and hassle-free."
        content="Whether it’s a flat tire, a dead battery, or you’re simply locked out, we’ve got your back—day or night. With Polk Roadside Assistance, help is just a call away. Stranded? Our expert team is always on call to get you back on track—quickly, safely, and hassle-free."
        service1="ALWAYS HERE, "
        service2="ALWAYS READY"
      />
      <div className="flex flex-col text-white">
        <div className="bg-center bg-[url(/images/time.png)] h-[128.51vh] bg-cover flex flex-col px-[202px] py-40 gap-30">
          {aboutdata.map((about, index) => (
            <div
              key={about.id}
              className={`flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="flex flex-col justify-center items-center border-gray p-[50px] w-[956px] h-[270px] bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[0.5px] rounded-[10px] border border-white/20">
                <h6 className="text-[24px]">{about.content}</h6>
              </div>
              <div>
                <h2 className="absolute mt-55 ml-[-120px]  text-primary lg:text-[92px] md:text-5xl sm:text-4xl font-bold">
                  {about.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-cover bg-center bg-[url(/images/aboutcar.png)] h-[1238px]"></div>
      </div>
    </main>
  );
}

export default page

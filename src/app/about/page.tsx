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
        service="ALWAYS HERE, ALWAYS READY"
      />
      <div className="flex flex-col text-white">
        <div className="flex-col bg-center bg-[url(/images/time.png)] h-[128.51vh] bg-cover ">
          {aboutdata.map((about, idx) => (
            <div key={idx} className="flex flex-row-reverse">
              <div className=" flex flex-col border p-20 w-auto rouunded">
                <h6 className="text-3xl">{about.content}</h6>
              </div>
              <div>
                <h2 className=" text-primary lg:text-5xl md:">{about.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default page

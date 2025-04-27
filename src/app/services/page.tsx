import React from 'react'
import {services} from '@/lib/constants/data'
import PageBanner from '@/components/PageBanner';
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
      <div className="flex lg:flex-col md:flex-row sm:flex-row ">
        {services.map((link, idx) => (
          <div key={idx}>
            <div>
              <h2>{link.title}</h2>
              <p>{link.info}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default page

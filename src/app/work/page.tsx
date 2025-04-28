import React from 'react'
import Pagebanner from '@/components/AboutPageBanner'
import {galleryimg} from '@/lib/constants/data'
import Image from 'next/image'
const page = () => {
  return (
    <main>
      <Pagebanner
        heading1={"Welcome to"}
        heading2={"Polk RoadSide Gallery"}
        info={"Gallery"}
        service1={"Gallery Images"}
        service2={""}
        content={"Recurring Moments"}
      />
      <div className="flex flex-col">
        <div>
          <h2>Gallery</h2>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-10'>
            {galleryimg.map((link, idx) => (
              <div className="" key={idx}>
                <Image src={link.src} alt={link.alt} width={1000} height={50} className='h-100 object-cover bg-center '  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page

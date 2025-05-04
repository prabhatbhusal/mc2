import React from 'react'
import ServiceCard from '@/components/page/service/ServiceCard'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Service = () => {
  return (
    <section className="relative p__tb">
      <Image
        src="/images/tyre-bg.png"
        alt="cars"
        width={200}
        height={100}
        className="absolute left-0 w-[100px] md:w-[200px] top-[45%] md:top-[55%] opacity-40 z-0"
      />
      <div className="container">
        <div className="text-white font-medium">
          <div className="max-w-[700px] mb-10">
            <h2
              className="lg:text-[52px] md:text-4xl sm:text-3xl text-2xl  font-bold
"
            >
              Services 24/7
            </h2>
            <p className='text-[#A9A9A9] my-5'>
              Polk Roadside Assistance is a professional roadside assistance
              service provider that offers a range of services to help you in case
              of an emergency.
            </p>
          </div>
          <div>
            <ServiceCard />
          </div>
        </div>
        <div className="flex flex-col max-w-[1060px] text-center mx-auto items-center p__t z-10 relative">
          <h6 className="text-lg sm:text-xl md:text-2xl text-white">About Us</h6>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary text-center">
            Polk Roadside Assistance
          </h2>
          <p className="text-[#A9A9A9] my-5">
            Welcome to Polk Roadside Assistance, your trusted partner for reliable
            and prompt roadside assistance services. At Polk Roadside Assistance,
            we understand that emergencies can happen at any time, leaving you
            stranded on the road. That's why our team of skilled professionals is
            available 24/7, ready to assist you with a wide range of roadside
            issues.
          </p>
          <Button
            variant="clip_primary"
          >
            <Link href="/contact" className="inline font-medium text-white">
              Contact Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Service

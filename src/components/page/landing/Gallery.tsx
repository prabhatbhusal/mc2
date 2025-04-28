import GallerySlider from '@/components/GallerySlider';
import { Button } from '@/components/ui/button';
import React from 'react'
import { images } from '@/lib/constants/data';
import Link from 'next/link';
const Gallery = () => {
  return (
    <main className="text-white font-medium">
      <div className="flex flex-col justify-center h-auto py-35 px-28">
        <h6 className="text-md font-medium">Gallery</h6>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Our <span className="text-primary">Services</span> in Action
        </h2>
      </div>
      <div className="container mx-auto py-8">
        <GallerySlider images={images} />
      </div>
      <Link href="#" className="justify-center flex mt-5">
        <Button
          size="lg"
          className="relative bg-primary text-xl text-white items-center flex font-regular gap-2 px-[16px]  sm:p-3 ml-1 sm:ml-2"
        >
          <h6 className=" xs:inline sm:inline font-medium text-[16px]">
            View Gallery
          </h6>
          <span className="lg:h-10 lg:w-5 sm:w-5 sm:h-10 bg-primary absolute top-0 xs:hidden lg:right-[-20]"></span>
          <span className="h-7 w-5 bg-primary rotate-45 absolute top-7.25 left-29.5  xs:hidden lg:left-33.5"></span>
        </Button>
      </Link>
    </main>
  );
}

export default Gallery

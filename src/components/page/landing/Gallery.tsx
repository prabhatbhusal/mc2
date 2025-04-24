import GallerySlider from '@/components/GallerySlider';
import { Button } from '@/components/ui/button';
import React from 'react'
import { images } from '@/lib/constants/data';
import Link from 'next/link';
const Gallery = () => {
  return (
    <main className="text-white font-medium">
      <div className="flex flex-col justify-center h-[20-vh] py-35 px-28">
        <h6 className="text-md font-medium">Gallery</h6>
        <h2 className="text-[44px]">
          Our <span className="text-primary">Services</span> in Action
        </h2>
      </div>
      <div className="container mx-auto py-8">

        <GallerySlider images={images} />
      </div>
      <Link href='#' className="justify-center flex mt-5">
        <Button
          size="lg"
          className="relative bg-primary text-xl text-white items-center flex font-regular gap-2 px-[16px] sm:p-3 ml-1 sm:ml-2"
        >
          <h6 className="hidden xs:inline sm:inline font-medium text-[16px]">
            View Gallery
          </h6>
          <span className="h-10 w-5 bg-primary absolute top-0 right-[-20] "></span>
          <span className="h-7 w-5 bg-primary rotate-45 absolute top-7.25 left-33.75"></span>
        </Button>
      </Link>
    </main>
  );
}

export default Gallery

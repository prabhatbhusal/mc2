import React from 'react'
import Image from 'next/image'
const carimg = () => {
  return (
    <main>
      <div className='font-medium'>
        <div>

        </div>
          <div className="flex justify-center">
                    <Image
                      src="/images/cars.png"
                      alt="cars"
                      width={3000}
                      height={10}
                      className=" h-auto w-400 bg-center object-contain z-1 "
                    />
      </div>
    </main>
  )
}

export default carimg

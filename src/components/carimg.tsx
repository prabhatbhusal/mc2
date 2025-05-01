import React from 'react'
import Image from 'next/image'
interface  img{
  img:string
}

const carimg = ({img}:img) => {
  return (
    <main>
      <div className='font-medium'>

          <div className="flex justify-center">
                    <Image
                      src={img}
                      alt="cars"
                      width={3000}
                      height={10}
                      className=" h-auto w-400 bg-center object-contain z-1 "
                    />
      </div>
      </div>
    </main>
  )
}

export default carimg

import React from 'react'
import {services} from '@/lib/constants/data'
const page = () => {
  return (
    <main>
      <div className='flex lg:flex-col md:flex-row sm:flex-row '>
      {
        services.map((link,idx)=>(
          <div key={idx}>

          </div>
        )

        )
      }
      </div>
    </main>
  )
}

export default page

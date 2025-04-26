import React from 'react'
import { props } from '@/types/common.types'

const PageBanner:React.FC<props> = (prop) => {
  return (
    <main>
      <div className="">
        <div>
          <p>24/7 Assistance</p>
          <hr />
          <h1 className="">{prop.heading1}</h1>
          <h2 className="">{prop.heading2}</h2>
          <p>{prop.info}</p>
        </div>
        <div>
          <h2>{prop.service}</h2>
          <p>{prop.content}</p>
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default PageBanner

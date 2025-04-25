import React from 'react'
import { props } from '@/types/common.types'

const PageBanner = (props:props) => {
  return (
    <main>
      <div className="">
        <div>
          <p>24/7 Assistance</p>
          <hr />
          <h1 className="">{props.heading1}</h1>
          <h2 className="">{props.heading2}</h2>
          <p>{props.info}</p>
        </div>
        <div>
          <h2>{props.service}</h2>
          <p>{props.content}</p>
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default PageBanner

import React from 'react'
import ClientSlider from '@/components/ClientSlider'
const testimonials = () => {
  return(
  <main>
    <div className="flex flex-col justify-center h-[20-vh] py-35 px-28">
      <h6 className="text-md font-medium">Custmoers Reviews</h6>
      <h2 className="text-[44px]">
        See What our  <span className="text-primary">Customers</span> are Saying
      </h2>
    </div>
    <div>
      <ClientSlider/>
    </div>
  </main>)

}

export default testimonials

import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";
import Contact from "@/components/page/landing/contact";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Heavy Jumpstart "
        service1="More Than Just a"
        service2="Heavy Jumpstart"
        info="Need a jumpstart? Our experienced technicians are available 24/7 to provide quick and safe heavy-duty jumpstarts, getting your truck, RV, or commercial vehicle back on the road in no time."
        content="For those times when a regular jump start isn't enough, Polk Roadside Experts offer Heavy Duty Jump Start services. This service is ideal for larger vehicles or stubborn batteries. They provide a rapid solution for vehicles with completely discharged batteries. Their expertise ensures drivers receive prompt and efficient service for battery-related issues. With presence across Texas, they bring peace of mind to drivers requiring extra assistance."
        price="$135"
      />
      <Carsprop title="Heavy Jumpstart" img="/images/Imagecar.png" />
      <div>
        <Getback />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default towing;

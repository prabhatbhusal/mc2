import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Lock Out Service"
        service1="More Than Just a"
        service2="Lock Out Service"
        info="Locked out? Our experienced technicians are available 24/7 to quickly and safely unlock your vehicle, getting you back inside and on the road in no time."
        content="Our Lockout Service is here to help you when you are locked out of your vehicle. Our highly trained technicians are available 24/7 and can quickly get you back on the road. We use the latest tools and techniques to ensure your vehicle is unlocked quickly and safely."
        price="$65"
      />
      <Carsprop title="Lock Out Service" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

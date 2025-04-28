import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Fuel Delivery "
        service1="More Than Just a"
        service2="Fuel Delivery"
        info="Ran out of fuel? Our experienced technicians are available 24/7 to provide quick and safe tire changes, getting you back on the road in no time."
        content="Our Fuel Delivery service provides the convenience of having fuel brought to your location if you are out of gas. With just one call, one of our experienced technicians can arrive with the necessary fuel to get you back on the road. Our service is available 24/7, so you can rely on us when you need us most."
        price="$65"
      />
      <Carsprop title="Fuel Delivery" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

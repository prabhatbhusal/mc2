import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Air Delivery "
        service1="More Than Just a"
        service2="Air Delivery"
        info="Low on air? Our experienced technicians are available 24/7 to deliver and refill your tires with the right air pressure, getting you back on the road in no time."
        content="Tire issues are no match for Polk Roadside Experts and their Air Delivery Service. It provides on-site tire inflation to quickly solve flat tire incidents. Part of their comprehensive roadside assistance, this service aims to reduce your downtime efficiently. Available alongside other amenities, the Air Delivery Service ensures you receive timely support, helping your journey continue without a hitch."
        price="$100"
      />
      <Carsprop title="Air Delivery" img="/images/airdelivery.png" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

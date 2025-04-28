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
        content="Our Air Delivery Service provides customers with fast and reliable transportation solutions. We offer a range of services, including ground and air transportation, to ensure that your goods arrive on time and in perfect condition. With our professional and experienced staff, you can rest assured that your items will be safely and securely delivered."
        price="$100"
      />
      <Carsprop title="Air Delivery" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

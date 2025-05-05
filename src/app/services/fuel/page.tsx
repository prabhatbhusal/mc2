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
        heading2="Fuel Delivery "
        service1="More Than Just a"
        service2="Fuel Delivery"
        info="Ran out of fuel? Our experienced technicians are available 24/7 to provide quick and safe tire changes, getting you back on the road in no time."
        content="Running out of fuel is inconvenient, but Polk Roadside Assistance is here to help. They provide quick fuel delivery directly to wherever you are. This allows you to get back on track without waiting long. As part of their comprehensive roadside services, fuel delivery ensures you are never stuck for too long. Their efficient and timely assistance helps you resume your journey with ease."
        price="$65"
      />
      <Carsprop title="Fuel Delivery" img="/images/fuel.png" />
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

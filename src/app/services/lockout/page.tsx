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
        content="Getting locked out of your car can be frustrating. Polk Roadside Assistance ensures a smooth resolution to such situations. Their lockout services are swift, making sure you regain access without hassle. They aim to resolve the issue without needing to tow the vehicle, adding convenience for drivers. This efficient service means that getting back into your car is easier than ever, letting you continue your day smoothly."
        price="$65"
      />
      <Carsprop title="Lock Out Service" img="/images/lockout.png" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

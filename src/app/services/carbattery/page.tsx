import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Car Battery Replacement"
        service1="More Than Just a"
        service2="Car Battery Replacement"
        info="Need a battery replacement? Our experienced technicians are available 24/7 to deliver and install a new battery wherever you are, getting you back on the road in no time."
        content="Polk Roadside Assistance features a responsive Car Battery Replacement service to address battery malfunctions. If your battery fails, their skilled technicians will assist with prompt solutions. Equipped with necessary tools for roadside service, they minimize disruptions to your travel plans. This crucial service ensures that drivers receive timely help, enabling them to get back on the road quickly. "
        price="$65"
      />
      <Carsprop title="Car Battery Replacement" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

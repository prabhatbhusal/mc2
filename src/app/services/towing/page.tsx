import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Towing "
        service1="More Than Just a"
        service2="Towing"
        info="Need a tow? Whether you’ve broken down or been in an accident, our 24/7 towing service will get your vehicle safely where it needs to go—quick, reliable, and always ready to help."
        content="Polk Roadside Experts are reliable when it comes to towing services. Their offerings include both emergency and general vehicle towing. When you find yourself with a broken-down car, they have the expertise to help. Along with towing, they provide tire repair and jump-start solutions, making them a one-stop service for motorists in need. Their dedication to assisting drivers ensures that you’ll be back on the road in no time."
        price="$65"
      />
      <Carsprop title="Towing" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

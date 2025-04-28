import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Jumpstart "
        service1="More Than Just a"
        service2="Jumpstart"
        info="Need a jumpstart? Whether your battery is dead at home, work, or on the road, our 24/7 jumpstart service will get you powered up and back on your way—quick, reliable, and always ready to help."
        content="Our jumpstart service offers quick and reliable help. Whether your battery is dead at home, work, or on the road, our 24/7 team is ready to assist. We’ll quickly dispatch a professional to jumpstart your vehicle—anytime, anywhere—so you’re never left stranded.
Pricing for jump start & battery installation ranges from $65-$155 depending on vehicle type and scope of work required."
        price="$65-$155"
      />
      <Carsprop title="Jumpstart" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

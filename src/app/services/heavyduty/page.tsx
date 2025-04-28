import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Heavy Jumpstart "
        service1="More Than Just a"
        service2="Heavy Jumpstart"
        info="Need a jumpstart? Our experienced technicians are available 24/7 to provide quick and safe heavy-duty jumpstarts, getting your truck, RV, or commercial vehicle back on the road in no time."
        content="Our heavy-duty jumpstart service offers quick and reliable help. Whether you're dealing with a dead battery in a truck, RV, or commercial vehicle, our 24/7 team is ready to assist. We’ll quickly dispatch a professional to safely jumpstart your heavy-duty vehicle—anytime, anywhere—so you’re never left stranded.
Our pricing starts at $135 for heavy-duty jumps."
        price="$135"
      />
      <Carsprop title="Heavy Jumpstart" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

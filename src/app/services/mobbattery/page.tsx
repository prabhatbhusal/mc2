import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Mobile Battery Change "
        service1="More Than Just a"
        service2="Mobile Battery Change"
        info="Need a new battery? Our experienced technicians are available 24/7 to deliver and install a replacement battery on the spot, getting you back on the road in no time."
        content="Whether you're at home, work, or on the go, our team is here to provide hassle-free battery installation and quick delivery right to your doorstep. Our pricing for mobile battery services are based on location, battery brand & battery reserve power. "
        price="$188.99"
      />
      <Carsprop title="Mobile Battery Change" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

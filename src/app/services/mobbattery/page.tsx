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
        content="For drivers stranded with a dead battery, Polk Roadside Assistance offers Mobile Battery service. This service provides swift and reliable assistance, ensuring a quick response. Technicians are equipped to replace batteries right on the roadside, minimizing your downtime. Available 24/7, their mobile battery service is part of comprehensive roadside support, offering constant help throughout Texas."
        price="$188.99"
      />
      <Carsprop title="Mobile Battery Change" img="/images/Imagecar.png" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

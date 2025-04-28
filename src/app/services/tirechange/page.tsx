import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Tire Change "
        service1="More Than Just a"
        service2="Tire Change"
        info="Stranded with a flat tire? Our experienced technicians are available 24/7 to provide quick and safe tire changes, getting you back on the road in no time."
        content="Our tire change service offers quick and reliable assistance when you are stuck on the side of the road with a flat tire. Our experienced technicians will arrive promptly and have your spare tire installed in no time, so you can get back on the road safely. We use only the highest quality materials to ensure your tire change is done right the first time."
        price="$75"
      />
      <Carsprop title="Tire Change" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

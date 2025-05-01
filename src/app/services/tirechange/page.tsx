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
        content="Polk Roadside Assistance specializes in prompt tire changes to keep your journey uninterrupted. If you have a flat tire, they provide efficient and reliable tire repair services, from plugging to replacing. Operating across numerous counties in Texas, their tire services ensure peace of mind for drivers. Their goal is to get you moving again quickly, making roadside emergencies feel manageable."
        price="$75"
      />
      <Carsprop title="Tire Change" img="/images/Imagecar.png" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

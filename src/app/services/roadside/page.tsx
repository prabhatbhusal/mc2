import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Roadside Assistance "
        service1="More Than Just a"
        service2="Roadside Assistance"
        info="Need roadside help? Whether it’s a flat tire, dead battery, lockout, or no fuel, our 24/7 roadside assistance will get you back on the road—quick, reliable, and always ready to help."
        content="With Polk Roadside Experts, you get comprehensive roadside assistance to tackle any vehicle issue. Whether it's a flat tire, a dead battery, or getting locked out, their team is ready. They provide reliable mobile battery services, allowing you to quickly resume your journey. Fuel delivery is another essential service they offer, ensuring you never stay stranded for long. Their roadside services are tailored to keep drivers moving with minimal delay."
        price="$65"
      />
      <Carsprop title="Roadside Assistance" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

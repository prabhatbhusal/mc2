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
        content="Whether its ar breakdowns, flat tires, dead batteries, we are there dor immediate help due to a car breakdown or roadside emergency? Don't worry; we've got you covered! Call now for fast and reliable roadside assistance services available 24/7."
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

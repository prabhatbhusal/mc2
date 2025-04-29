import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Tire Repair"
        service1="More Than Just a"
        service2="Tire Repair"
        info="Stranded with a flat tire? Our experienced technicians are available 24/7 to provide quick and safe tire changes, getting you back on the road in no time."
        content="When a tire issue arises, Polk Roadside Experts are ready to help. They offer comprehensive tire repair services across Texas, including flat tire repair and replacement. With their mobile tire repair solutions, drivers receive efficient help right on the roadside. Whether it’s a quick air delivery or replacing a flat tire, Polk Roadside Experts ensure you're back on the road without unnecessary delays."
        price="$75"
      />
      <Carsprop title="Tire Repair" />
      <div>
        <Getback />
      </div>
    </div>
  );
};

export default towing;

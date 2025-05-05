import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";
import Getback from "@/components/Getback";
import Contact from "@/components/page/landing/contact";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Jumpstart "
        service1="More Than Just a"
        service2="Jumpstart"
        info="Need a jumpstart? Whether your battery is dead at home, work, or on the road, our 24/7 jumpstart service will get you powered up and back on your way—quick, reliable, and always ready to help."
        content="No one likes dealing with a dead battery, but with the jump start services of Polk Roadside Assistance, it's a quick fix. If you accidentally left your lights on, they can get your car running again. Their team provides reliable jump-start assistance, ensuring your car is operational swiftly. This essential service ensures peace of mind, helping you get back on the road with minimal stress."
        price="$65-$155"
      />
      <Carsprop title="Jumpstart" img="/images/Imagecar.png" />
      <div>
        <Getback />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default towing;

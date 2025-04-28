import PageBanner from "@/components/InnerServicesBanner";
import Carsprop from "@/components/Carsprop";
import React from "react";

const towing = () => {
  return (
    <div>
      <PageBanner
        heading1="Fast, Reliable"
        heading2="Towing "
        service1="More Than Just a"
        service2="Towing"
        info="Need a tow? Whether you’ve broken down or been in an accident, our 24/7 towing service will get your vehicle safely where it needs to go—quick, reliable, and always ready to help."
        content="Our towing service offers quick and reliable assistance, Whether your car broke down, won’t start, or you've been in an accident, our 24/7 towing service is here to help. We’ll quickly dispatch a reliable professional to safely transport your vehicle—anytime, anywhere—so you’re never left stranded."
        price='$65'
      />
      <Carsprop  title="Towing" />
    </div>
  );
};

export default towing;

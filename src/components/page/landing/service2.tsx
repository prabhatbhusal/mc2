import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const service2 = () => {
  return (
    <section className="p__tb">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative w-full h-[300px] md:h-[561px] bg-[url(/images/image.png)] bg-cover bg-center p-10 text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <div className="relative max-w-[500px] z-10">
              <h2 className="text-3xl mb-5">Speedy Oil Change Services You’ll Love</h2>
              <Button
                variant="clip_secondary"
              >
                <Link href="/contact">
                  Get Contact
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-[561px] bg-[url(/images/image3.png)] bg-no-repeat bg-cover p-10 text-white flex justify-end items-end">
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <div className="relative max-w-[500px] text-right z-10">
              <h2 className="text-3xl mb-5">Stuck on road?
                Call us anytime.</h2>
              <Button
                variant="clip_secondary"
              >
                <Link href="/contact">
                  Get Contact
                </Link>

              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default service2;

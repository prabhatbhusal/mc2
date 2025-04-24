import ClientReviewCard from "@/components/ClientReviewCard";
import { reviewdata } from "@/lib/constants/data";
import React from "react";

const ClientReviewSection = () => {
    return (
        <section className="p__b">
            <div className="container">
                <div className="flex flex-col items-center max-w-[600px] mx-auto text-center mb-5 md:mb-8">
                    <span className="title__meta">client reviews</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#333] font-semibold uppercase mb-2 md:mb-4">See what our customers are saying</h2>
                    {/* <p className="text-gray-200">
                        We specialize in a wide range of renovation services designed to enhance the beauty and functionality of your space. Trust us to bring your vision to life with high-quality
                        materials and a seamless experience.
                    </p> */}
                </div>
                
            </div>
        </section>
    );
};

export default ClientReviewSection;

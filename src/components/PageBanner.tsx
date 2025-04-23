import Image from "next/image";
import React from "react";

interface PageBannerSliderProps {
    title: string;
    currentPage: string;
    links: { title: string; url: string }[];
}

const PageBanner = ({ title, currentPage, links = [] }: PageBannerSliderProps) => {
    return (
        <div className="relative min-h-[300px] overflow-hidden bg-black md:min-h-[400px] lg:min-h-[600px]">
            <Image src={`/wood-flooring.jpg`} alt="img" fill className="absolute inset-0 h-full w-full object-cover" />
            {/* Dark overlay */}
            <div className="absolute inset-0 z-20 bg-[#091120] opacity-65"></div>
            {/* Text content */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center mt-16 md:mt-[150px]">
                <div className="mx-auto flex max-w-[800px] flex-col items-center md:gap-4">
                    <h1 className="text-3xl text-[#EEEEF0] md:text-4xl lg:text-6xl">{title}</h1>

                    {links && links.length > 0 && (
                        <div className="breadcrumb text-sm md:text-base">
                            {links.map((link, index) => (
                                <React.Fragment key={index}>
                                    <a href={link.url} className="font-medium text-[#999] hover:text-white">
                                        {link.title}
                                    </a>
                                    {index < links.length && <span className="mx-2 text-[#999]">/</span>}
                                </React.Fragment>
                            ))}
                            <span className="font-medium text-[#FCFCFC]">{currentPage}</span>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageBanner;

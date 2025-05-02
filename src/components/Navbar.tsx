"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/constants/data";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
import { Button } from "./ui/button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll event listener to track when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Check if window exists (for SSR compatibility)
      if (typeof window !== "undefined") {
        // Set scrolled to true when scrolled more than 120px
        setScrolled(window.scrollY > 120);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call once on mount to set initial state
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-4 sm:px-8 md:px-[90px]  w-full fixed z-[100] ${
        scrolled
          ? "bg-[#575757CC] transition-colors duration-300"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="bg-[#575757CC] h-[50px] sm:h-[65px] md:h-[89px] rounded-xl px-2 flex items-center">
        <Link href='/'>
          <Image
            alt="logo"
            src="/images/logo.png"
            className="h-[38px] sm:h-[50px] md:h-[69px] w-auto max-w-[100px] sm:max-w-[140px] md:max-w-[245px] p-1 sm:p-2 object-contain bg-transparent rounded-xl"
            height={89}
            width={245}
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center text-white gap-[20px] lg:gap-[40px] py-[8px] lg:py-[12px] px-[14px] lg:px-[28px] rounded-full font-medium bg-[#575757bb]">
        {navItems.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="flex items-center gap-2 relative whitespace-nowrap"
          >
            {pathname === link.url && (
              <span className="text-white text-[8px]">●</span>
            )}
            {link.title}
          </Link>
        ))}
      </div>

      {/* Phone Button and Hamburger */}
      <div className="flex items-center">
        <Button
          size="lg"
          className="relative bg-primary md:visible hidden  text-xl text-white items-center md:flex font-regular gap-2 p-3 sm:p-3"
        >
          <MdOutlinePhone className="flex-shrink-0" />
          <span className="hidden md:inline font-light whitespace-nowrap overflow-hidden">
            (254) 393-6078
          </span>
          <span className="hidden md:block h-10 w-5 bg-primary absolute top-0 right-[-20px]"></span>
          <span className="hidden md:block h-7 w-7 bg-primary rotate-45 absolute top-[26px] right-[-14px]"></span>
        </Button>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden right-5  text-primary fixed focus:outline-none z-[1300]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={58} /> : <HiMenu size={58} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#575757ee] flex flex-col items-center justify-center gap-8 z-[120] transition-all">
          {navItems.map((link) => (
            <div key={link.id}>
              <Link
                href={link.url}
                className="flex items-center gap-2 text-white text-xl font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {pathname === link.url && (
                  <span className="text-white text-[8px]">●</span>
                )}
                {link.title}
              </Link>
            </div>
          ))}
          <Link href="/">
            <Button
              size="lg"
              className="relative bg-primary text-xl text-white items-center  w-[40vw] flex font-regular gap-2 p-5 sm:p-3"
            >
              <MdOutlinePhone className="flex" />
              <span className=" md:inline text-sm font-light whitespace-nowrap overflow-hidden">
                (254) 393-60
              </span>
              <span className="hidden md:block h-10 w-5 bg-primary absolute top-0 right-[-20px]"></span>
              <span className="hidden md:block h-7 w-7 bg-primary rotate-45 absolute top-[26px] right-[-14px]"></span>
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

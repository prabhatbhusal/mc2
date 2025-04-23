"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/constants/data";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
import { Button } from "./ui/button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-[90px] mt-3 sm:mt-5 w-full fixed z-[100] bg-transparent">
      {/* Logo */}
      <div className="bg-[#575757CC] h-[50px] sm:h-[65px] md:h-[89px] rounded-xl px-2 flex items-center">
        <Image
          alt="logo"
          src="/images/logo.png"
          className="h-[38px] sm:h-[50px] md:h-[89px] w-[100px] sm:w-[140px] md:w-[245px] p-1 sm:p-2 object-contain bg-transparent rounded-xl"
          height={38}
          width={245}
        />
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center text-white gap-[20px] lg:gap-[40px] py-[8px] lg:py-[12px] px-[14px] lg:px-[28px] rounded-full font-medium bg-[#575757bb]">
        {navItems.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="flex items-center gap-2 relative"
          >
            {pathname === link.url && (
              <span className="text-white text-[8px]">&#9679;</span>
            )}
            {link.title}
          </Link>
        ))}
      </div>
      {/* Hamburger for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
      {/* Phone Button */}
      <Button
        size="lg"
        className="relative bg-primary text-xl text-white items-center flex font-regular gap-2 p-2 sm:p-3 ml-1 sm:ml-2"
      >
        <MdOutlinePhone />
        <span className="hidden xs:inline sm:inline font-light">(254) 393-6078</span>
        <span className="h-8 w-7 bg-black rotate-45 absolute top-11 left-49"></span>
      </Button>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#575757ee] flex flex-col items-center gap-8 pt-24 z-[120] transition-all">
          {navItems.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="flex items-center gap-2 text-white text-xl font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {pathname === link.url && (
                <span className="text-white text-[8px]">&#9679;</span>
              )}
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

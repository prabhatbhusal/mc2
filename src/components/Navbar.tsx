"use client";
import React, { useState } from "react";

import { navItems } from "../lib/constants/data";
import Link from "next/link";

import { MdOutlinePhone } from "react-icons/md";
import Image from "next/image";
const Navbar = () => {
  const [active, isactive] = useState(true);
  return (
    <div className="flex justify-between items-center px-[90px] mt-5 fixed w-full z-100">
      <div
        className="bg-[#575757CC
] h-[89px] rounded-xl px-2"
      >
        <Image
          alt="logo"
          src="/images/logo.png"
          className="h-[89px] w-[245px] p-2 object-contain bg-[#575757CC] rounded-xl "
          height={50}
          width={500}
        />
      </div>
      <div
        className="flex items-center text-white  gap-[40px]  py-[12px] px-[28px] rounded-full font-medium bg-[#575757CC]
"
      >
        {navItems.map(
          (link) =>
            active && (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            )
        )}
      </div>
      <div className="primary flex ">
        <button className='text-xl text-white  items-center flex font-medium gap-2 p-3'>
          <MdOutlinePhone />
          (254) 393-6078
        </button>
        <div className="h-8 w-7 bg-black rotate-45 relative  top-9 left-3"></div>
      </div>
    </div>
  );
};

export default Navbar;

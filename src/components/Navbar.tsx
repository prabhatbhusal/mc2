import React from 'react'
import { navItems } from '../lib/constants/data';
import  Link  from 'next/link';
import { Button } from './ui/button';
import { MdOutlinePhone } from "react-icons/md";
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-[100px] mt-5'>
      <div className='border h-20 rounded-xl px-2'><Image alt='logo' src='/images/logo.png' className='h-20 w-40 object-contain' height={50} width={500} /></div>
      <div className="flex items-center  gap-[40px] border py-5 px-10 rounded-full">
        {navItems.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <div>
        <Button variant='custom'><MdOutlinePhone/>(254) 393-6078</Button>
      </div>
    </div>
  );
}

export default Navbar

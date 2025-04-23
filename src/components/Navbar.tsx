import React from 'react'
import { navItems } from '../lib/constants/data';
import  Link  from 'next/link';
const Navbar = () => {
  return (
    <div>
      <div className='flex items-center '>
        {navItems.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar

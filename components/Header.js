import Image from 'next/image';
import React from 'react';
import { MagnifyingGlassCircleIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <div className='grid grid-cols-3 p-4 shadow-md z-10 fixed top-0 w-full bg-white'>
      <div>
        <Image src='https://links.papareact.com/qd3' width={100} height={100} />
      </div>

      <div className='flex md:border-2 rounded-full items-center justify-between text-gray-600 p-1 shadow-md'>
        <input type='text' placeholder='Start Your Destination' className='focus:outline-none mx-4' />
        <MagnifyingGlassCircleIcon className='h-8 sm:hidden md:inline text-red-400 cursor-pointer' />
      </div>

      <div className='flex justify-end items-center space-x-2 text-gray-700'>
        <h2 className='hidden md:inline text-xl'>Become host</h2>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex border-2 border-gray-700 rounded-full space-x-1 px-2 cursor-pointer'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </div>
  );
}

export default Header;

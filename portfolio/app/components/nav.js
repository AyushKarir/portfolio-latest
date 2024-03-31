import React from 'react';
import Image from 'next/image';
const Nav = () => {
  return (
    <div>
      {' '}
      <div className='flex justify-between items-center p-8'>
        <div className='flex'>
          <p className='text-[#f2f2f2] cursor-pointer text-2xl tracking-[7.03px]'>
            AYUSH KARIR
          </p>
        </div>
        <Image
          src='/logo.png'
          width='60'
          height='60'
          className='justify-center'
        />
        <div className='flex justify-end gap-10'>
          <div className='flex flex-row'>
            <p className='text-[#f2f2f2] nav-arrow-trigger tracking-[5.03px] text-2xl cursor-pointer'>
              WORKS
            </p>
            <Image
              src='/arrow-nav.svg'
              width='15'
              height='15'
              className='arrow-nav'
            />
          </div>
          <div className='flex flex-row'>
            <p className='text-[#f2f2f2] nav-arrow-trigger tracking-[5.03px] text-2xl cursor-pointer'>
              CONTACT
            </p>
            <Image
              src='/arrow-nav.svg'
              width='15'
              height='15'
              className='arrow-nav'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

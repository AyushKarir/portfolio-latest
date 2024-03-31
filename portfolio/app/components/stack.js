'use client';
import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import React from 'react';

const Stack = () => {
  const image = useRef(null);
  const speed = 0.05;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    gsap.set(image.current, {
      x: `+=${movementX * speed}`,
      y: `+=${movementY * speed}`,
    });
  };

  return (
    <div
      className='overflow-hidden h-[80vh]'
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <div className='flex mt-32 px-20 py-10'>
        <div ref={image}>
          <Image
            src='/stack.svg'
            className=' -mr-20 z-10 relative -mt-16  ml-16'
            width={250}
            height={250}
          />
        </div>
        <div data-scroll data-scroll-speed='0.7'>
          <h1 className=' text-[#f2f2f2] text-[100px] relative -ml-16 z-40'>
            Stuff I Use
          </h1>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-5/6 '>
          <p
            data-scroll
            data-scroll-speed='-0.2'
            className=' text-3xl text-[#ccc] tracking-wide leading-relaxed'
          >
            Next.Js, Typescript, React, Firebase, Redux, Prisma, PostgreSQL,
            Tailwind, GSAP, Framer-Motion, AWS, C++(DSA)
          </p>
          <p
            data-scroll
            data-scroll-speed='-0.2'
            className='text-3xl mt-4 text-[#ccc] tracking-wide leading-relaxed'
          >
            Github, Figma, Photoshop
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stack;

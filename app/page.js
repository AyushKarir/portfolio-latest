'use client';
import Image from 'next/image';

import { useEffect } from 'react';
import Nav from './components/nav';
import VidnText from './components/vidntext';
import RevealText from './components/revealText';
import Works from './components/works/works';
import gsap from 'gsap';
import Stack from './components/stack';
import Contact from './components/contact';
// import Video from 'next-video';
// import videoLoop from '/videos/herovid.mp4';

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);
  return (
    <div>
      <Nav />
      <VidnText />
      <RevealText />
      <Works />
      <Stack />
      <Contact />

      {/* <video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className='hero-vid'
      ></video> */}
    </div>
  );
}

'use client';
import React, { useState } from 'react';
import Projects from './projects/projects';
import Modal from './modal';

const Works = () => {
  const projects = [
    {
      title: 'SWITTER',
      src: 'switter.png',
    },
    {
      title: 'ANNAPURNA',
      src: 'annapurna.png',
    },
    {
      title: 'TRAVELA',
      src: 'travela.png',
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className='text-[#f2f2f2]'>
      <h1
        data-scroll
        data-scroll-speed='0.3'
        className='px-12 py-10 text-[#f2f2f2] text-[100px] '
      >
        Works
      </h1>
      {projects.map((project, index) => {
        return (
          <Projects
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        );
      })}
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Works;

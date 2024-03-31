'use client';
import React, { useState } from 'react';
import Projects from './projects/projects';
import Modal from './modal';

const Works = () => {
  const projects = [
    {
      title: 'SWITTER',
      src: 'switter.png',
      nopes: 'https://github.com/AyushKarir/switter/tree/master',
    },
    {
      title: 'ANNAPURNA',
      src: 'annapurna.png',
      nopes: 'https://devfolio.co/projects/annapurna-dd5d',
    },
    {
      title: 'TRAVELA',
      src: 'travela.png',
      nopes:
        'https://drive.google.com/file/d/1Da6aP4p-5HybVPtz6UhU3erqJH_Lydxy/view',
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className='text-[#f2f2f2] overflow-hidden'>
      <h1 className='px-12 py-10 text-[#f2f2f2] text-[70px] sm:text-[100px] '>
        Works
      </h1>
      {projects.map((project, index) => {
        return (
          <Projects
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
            nopes={project.nopes}
          />
        );
      })}
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Works;

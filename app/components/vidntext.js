import React from 'react';

const VidnText = () => {
  return (
    <div>
      {' '}
      <div className='flex justify-center w-3/5 mt-16'>
        <div className=' w-[3/5] flex items-center p-12'>
          <p className='text-[#f2f2f2]  tracking-[5.03px] text-6xl '>
            DESIGNING
          </p>
          <div id='flip'>
            <div>
              <div className='text-6xl'>EXPERIENCE</div>
            </div>
            <div>
              <div className='text-6xl'>PRODUCTS</div>
            </div>
            <div>
              <div className='text-6xl'>APPLICATIONS</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-500'>
        <video
          src={require('../../public/herovidTrim.mp4')}
          autoPlay
          muted
          loop
          className='herovid z-10'
        />
      </div>
    </div>
  );
};

export default VidnText;

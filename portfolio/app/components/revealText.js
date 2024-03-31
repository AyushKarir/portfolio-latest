import React from 'react';

const RevealText = () => {
  return (
    <div>
      <div className='flex justify-center w-4/5 mt-16'>
        <div className=' w-[4/5] flex items-center p-12 '>
          {/* Start */}
          <div className=' h-[400vh] [view-timeline-name:--reveal-wrapper] '>
            <div className='sticky top-0 min-h-screen flex items-center'>
              <div>
                <p className='z-40 blend supports-[animation-timeline]:reveal-text text-[#a9a9a9] text-5xl  leading-snug blend reveal-text'>
                  I am a highly skilled full stack developer based in India,
                  boasting over 4 years of experience in web development.
                  Specializing in modern web and app development, I prioritize
                  crafting visually appealing UI/UX and engaging web
                  interactions. I consistently deliver top-notch websites and
                  applications, meeting deadlines with efficiency and
                  creativity.
                </p>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default RevealText;

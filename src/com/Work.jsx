import React from 'react';
import WorkIMG from '../assets/Untitled video.mp4';
import Killring from '../assets/KillRing.mp4';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1fb4a0]'>
      <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full relative'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#d6cb32]'>Work</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>
            <div className='absolute top-0 left-0 w-full h-full'>
              <video autoPlay muted loop className='w-full h-full object-cover'>
                <source src={WorkIMG} type='video/mp4' />
              </video>
              <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full'>
                <span className='text-2xl font-bold text-[#d6cb32] tracking-wider'>
                  Java Chess Application
                </span>
                <div className='pt-8'>
                  <a href="https://www.youtube.com/watch?v=RNuzRwEmf88" target="_blank">
                    <button className='rounded-lg px-4 py-3 m-2 bg-[#d6cb32] text-gray-700 font-bold text-lg'>Video</button>
                  </a>
                  <a href="https://github.com/Antigohbg8/JavaChessGUI/blob/master/src/Main.java" target="_blank">
                    <button className='rounded-lg px-4 py-3 m-2 bg-[#d6cb32] text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>
            <div className='absolute top-0 left-0 w-full h-full'>
              <video autoPlay muted loop className='w-full h-full object-cover'>
                <source src={Killring} type='video/mp4' />
              </video>
              <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full'>
                <span className='text-2xl font-bold text-[#d6cb32] tracking-wider'>
                  Java Kill Ring Assissination
                </span>
                <div className='pt-8'>
                  <a href="https://www.youtube.com/watch?v=Ax_yr-_OiFQ" target="_blank">
                    <button className='rounded-lg px-4 py-3 m-2 bg-[#d6cb32] text-gray-700 font-bold text-lg'>Video</button>
                  </a>
                  <a href="https://github.com/Antigohbg8/Assassination_Game/tree/master/src" target="_blank">
                    <button className='rounded-lg px-4 py-3 m-2 bg-[#d6cb32] text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

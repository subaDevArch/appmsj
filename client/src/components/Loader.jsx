import React from 'react';

function Loader() {
  return (
    <div className='flex items-center justify-center h-screen bg-green-500'>
      <div className="animate-pulse text-center">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          src="robot.png"
          alt="robot"
        />
        <h1 className='text-white font-bold font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4'>
          PRECEPTOR 2.00
        </h1>
      </div>
    </div>
  );
}

export default Loader;

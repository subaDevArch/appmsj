import React from 'react';

function Loader() {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-green-700 to-gray-600'>
      <div className="animate-pulse flex flex-col items-center">
        <img
          className="w-34 h-42 sm:w-47 sm:h-46 md:w-46 md:h-47 lg:w-72 lg:h-72 xl:w-38 xl:h-72"
          src="robot.png"
          alt="robot"
        />
        <h1 className='text-white font-bold font-orbitron text-3xl sm:text-2xl md:text-3xl lg:text-3xl mt-2 text-center' style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}>
          PRECEPTOR 2.00
        </h1>
      </div>
    </div>
  );
}

export default Loader;

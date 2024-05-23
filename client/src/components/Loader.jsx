import React from 'react'

function Loader() {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-green-700 to bg-gray-600'>
      <div className="animate-pulse flex flex-col items-center">
        <img src="robot.png" alt="robot" />
        <h1 className='text-white font-bold font-orbitron text-4xl mt-2 '>PRECEPTOR 2.00</h1>
      </div>
    </div>
  )
}

export default Loader
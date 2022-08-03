import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-12 py-5 z-10 w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div className='text-white text-md font-bold'>
            <button className='text-white pr-4'>sign in</button>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer ml-8">sign up</button>
        </div>
    </div>
  )
}

export default Navbar
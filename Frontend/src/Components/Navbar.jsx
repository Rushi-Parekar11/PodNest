import React from 'react'
import podcastIcon from '../assets/podcastIcon.png'

function Navbar() {
  return (
    <div className='h-[10vh] w-[100%] bg-[#121212] flex items-center px-20  '>
    <img src={podcastIcon} alt="icon" className='h-8 w-8' />
      <h1 className='text-white text-[18px]'>PodNest</h1>
    </div>
  )
}

export default Navbar

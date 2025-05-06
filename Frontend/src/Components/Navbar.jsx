import React from 'react'
import podcastIcon from '../assets/podcastIcon.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='h-[10vh] w-[100%] bg-[#121212] flex items-center px-20  '>
    <div className='flex cursor-pointer' onClick={()=>navigate('/')}>
    <img src={podcastIcon} alt="icon" className='h-8 w-8' />
      <h1 className='text-white text-[18px]'>PodNest</h1>
    </div>

    </div>
  )
}

export default Navbar

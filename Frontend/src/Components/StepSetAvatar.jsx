import React from 'react'

function StepSetAvatar({onNext}) {
  return (
    <div>
      <h1 className='text-white'>StepSetAvatar</h1>
      <button className='bg-white text-black' onClick={onNext}>next</button>

    </div>
  )
}

export default StepSetAvatar

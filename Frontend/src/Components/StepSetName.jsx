import React from 'react'

function StepSetName({onNext}) {
  return (
    <div>
      <h1 className='text-white'>StepSetName</h1>
      <button className='bg-white text-black' onClick={onNext}>next</button>

    </div>
  )
}

export default StepSetName

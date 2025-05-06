import React, { useState } from 'react'
import { FaArrowRight  } from "react-icons/fa6";

function StepOtp({onNext}) {
  const [otp,setotp] = useState('');
  return (
    <>
    <div className="h-[90vh] w-[100%] flex justify-center items-center">


              <div className="h-[45vh] w-[33vw] bg-[#1d1d1d] flex flex-col items-center rounded-xl pt-11 px-[60px] mb-[50px]">
                          <h3 className='text-white text-[19px] font-semibold mb-2 '>Enter The OTP</h3>
          
                          <div className="w-[200px] max-w-sm bg-[#262626] px-2 py-3 my-5 rounded-md flex items-center space-x-2 overflow-hidden">
                      
                              <input
                                  type="Number"
                                  placeholder="Enter four digit OTP"
                                  value={otp}
                                  onChange={(e) => setotp(e.target.value)}
                              className="flex-1 text-center font-3xl bg-transparent text-white font-semibold placeholder-[#484a4b] outline-none text-sm appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              />
                          </div>
          
          
                          <div className="h-9 w-[170px] bg-[#0077ff] rounded-3xl text-white flex items-center justify-center gap-1 mt-4 mb-2 cursor-pointer hover:bg-[#0053b3]"
                          ><p className='text-[13px] font-semibold'> verify </p><FaArrowRight /> </div>
                          <p className='text-center text-[#727272] text-[10px] w-[17vw] mt-3'>By entering your Email, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
                      </div>

                      </div>
  
      </>
  )
}

export default StepOtp

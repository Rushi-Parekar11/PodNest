import React from 'react'
import { FaArrowRight  } from "react-icons/fa6";

function Email({onNext}) {
  return (
    <>
            <div className="h-[45vh] w-[33vw] bg-[#1d1d1d] flex flex-col items-center rounded-xl pt-11 px-[60px] mb-[50px]">
                        <h3 className='text-white text-[19px] font-semibold mb-2 '>Enter your Email Id</h3>
        
                        <div className="w-[299px] max-w-sm bg-[#262626] px-2 py-3 my-5 rounded-md flex items-center space-x-2 overflow-hidden">
                    
                            {/* Phone input */}
                            <input
                                type="tel"
                                placeholder="example@gmail.com"
                            //    value={phone}
                            //    onChange={(e) => setPhone(e.target.value)}
                                className="flex-1 text-center bg-transparent text-[#727779] font-semibold placeholder-[#484a4b] outline-none text-sm"
                            />
                        </div>
        
        
                        <div onClick={onNext} className="h-9 w-[170px] bg-[#0077ff] rounded-3xl text-white flex items-center justify-center gap-1 mt-4 mb-2 cursor-pointer hover:bg-[#0053b3]"
                        ><p className='text-[13px] font-semibold'> verify your email</p><FaArrowRight /> </div>
                        <p className='text-center text-[#727272] text-[10px] w-[17vw] mt-3'>By entering your Email, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
                    </div>

    </>
  )
}

export default Email

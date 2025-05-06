import React, { useState } from 'react'
import StepPhoneEmail from '../Components/StepPhoneEmail'
import StepOtp from '../Components/StepOtp'

function Authenticate() {
    const steps ={
        1:StepPhoneEmail,
        2:StepOtp
    }
        const [step,setstep] = useState(1);
        const Step = steps[step];
        
        const HandelonNext=()=>{
            setstep(step+1);
        }
  return (
    <>
    <div className="h-[90vh] w-full bg-[#121212] relative overflow-hidden">
                <Step onNext={HandelonNext}/>
          </div>
      
    </>
  )
}

export default Authenticate

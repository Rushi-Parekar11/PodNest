import React, { useState } from 'react';
import Phone from './Phone';
import Email from './Email';
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";


function StepPhoneEmail({ onNext }) {
  const phoneEmailMap = {
    Phone: Phone,
    Email: Email
  };

  const [type, setType] = useState('Phone');
  const RenderedCompo = phoneEmailMap[type];


  return (
    <>
<div className='h-[90vh] w-full bg-[#121212] flex flex-col items-center justify-center'>
      <div className="flex gap-2 justify-end  w-[33vw]">
        <button className={`text-white h-11 w-10 rounded-md flex items-center justify-center ${ type === 'Phone' ? 'bg-[#0077ff]' : 'bg-[#1d1d1d]'}`} onClick={() => setType('Phone')}  >
          <IoMdPhonePortrait className='h-6 w-6'/>
        </button>
        <button className={`text-white h-11 w-10 rounded-md flex items-center justify-center ${ type === 'Email' ? 'bg-[#0077ff]' : 'bg-[#1d1d1d]'}`} onClick={() => setType('Email')} >
          <MdOutlineMail className='h-6 w-6'/>
        </button>
      </div>
      <div className="m-4">
        <RenderedCompo onNext={onNext} />
      </div>
      </div>
    </>
  );
}

export default StepPhoneEmail;

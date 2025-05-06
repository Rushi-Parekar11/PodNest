import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";


const countries = [
    { name: 'India', code: '+91' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Australia', code: '+61' },
];

function Phone({onNext}) {
    const [selectedCode, setSelectedCode] = useState('+91');
    const [phone, setPhone] = useState('');
    return (
        <>
            <div className="h-[45vh] w-[33vw] bg-[#1d1d1d] flex flex-col items-center rounded-xl pt-11 px-[60px] mb-[50px]">
                <h3 className='text-white text-[19px] font-semibold mb-2 '>Enter your Phone Number</h3>

                <div className="w-full max-w-sm bg-[#262626] px-2 py-2 my-5 rounded-md flex items-center space-x-2 overflow-hidden">
                    {/* Country dropdown */}
                    <div className="relative w-[120px]">
                        <select
                            value={selectedCode}
                            onChange={(e) => setSelectedCode(e.target.value)}
                            className="w-full bg-[#262626] text-white outline-none text-sm appearance-none pr-6"
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.code} className="bg-[#262626] text-white">
                                    {country.name} ({country.code})
                                </option>
                            ))}
                        </select>
                        <div className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-xs pointer-events-none">
                            <IoIosArrowDown/>
                        </div>
                    </div>

                    {/* Country code */}
                    <span className="text-[#5b6061] text-sm font-semibold whitespace-nowrap">{selectedCode}</span>

                    {/* Phone input */}
                    <input
                        type="tel"
                        placeholder="Enter mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 bg-transparent text-[#5b6061] font-semibold placeholder-[#5b6061] outline-none text-sm"
                    />
                </div>


                <div onClick={onNext} className="h-9 w-[170px] bg-[#0077ff] rounded-3xl text-white flex items-center justify-center gap-1 mt-4 mb-2 cursor-pointer hover:bg-[#0053b3]"
                ><p>Next</p><FaArrowRight /> </div>
                <p className='text-center text-[#727272] text-[10px] w-[17vw] mt-3'>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
            </div>
        </>
    )
}

export default Phone

import React, { useEffect, useState } from 'react';
import podcastIcon from '../assets/podcastIcon.png';
import { FaArrowRight  } from "react-icons/fa6";


function Home() {
  const [phase, setPhase] = useState('initial'); // 'initial', 'welcome', 'main'

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('welcome'), 500),   // After 0.5s
      setTimeout(() => setPhase('main'), 2000),     // After 4s
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-[90vh] w-full bg-[#121212] relative overflow-hidden">
      <style>
        {`
          body {
            background-color: #000 !important;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1s ease forwards;
          }
          .slide-fade {
            animation: slideFadeUp 1s ease forwards;
          }
        `}
      </style>

      {/* Mic Background */}
      <img src={podcastIcon} alt="Mic" className="absolute opacity-30 w-[70%] md:w-[40%] lg:w-[30%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"/>

      {/* Welcome text */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-1000 ${
          phase === 'welcome' ? 'opacity-100 fade-in' : 'opacity-0'
        }`}
      >
        <div className="text-center space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">
            Welcome to <span className="text-green-400">PodNest</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Tune in, relax, and enjoy the vibe 🎙️
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-1000 ${ phase === 'main' ? 'opacity-100 slide-fade' : 'opacity-0' }`}>
    
        <div className="h-[55vh] w-[33vw] bg-[#1d1d1d] flex flex-col items-center rounded-xl pt-11 px-[60px]">
            <h3 className='text-white text-[21px] mt-2 '>Welcome PodNest 🎙️</h3>

            <p className="text-[#c4c5c5] text-[15px] text-center max-w-2xl mx-auto px-4 py-5 leading-relaxed">
  We’re building something special at <span className="text-white font-semibold">Codershouse</span>. a place where you can 
  <span className="text-white font-medium"> listen, create, and collaborate</span> on podcasts in real-time.
  While we put the final touches in place, we’re rolling out access gradually to ensure everything runs smoothly.
</p>

             <div className="h-9 w-[240px] bg-[#0077ff] rounded-3xl text-white flex items-center justify-center gap-1 mt-4 mb-2 cursor-pointer hover:bg-[#0053b3]"><p>Get your username</p><FaArrowRight /> </div>

             <p className='text-[#0077ff] text-sm cursor-pointer hover:text-[#fdba00]'>already have account ? Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

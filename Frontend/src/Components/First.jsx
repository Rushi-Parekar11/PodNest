import React, { useEffect, useState } from 'react';
import podcastIcon from '../assets/podcastIcon.png';

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
      <img
        src={podcastIcon}
        alt="Mic"
        className="absolute opacity-30 w-[70%] md:w-[40%] lg:w-[30%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />

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
      <div
        className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-1000 ${
          phase === 'main' ? 'opacity-100 slide-fade' : 'opacity-0'
        }`}
      >
        <div className="h-[60vh] w-[35vw] bg-[#1d1d1d]  rounded-xl"></div>
      </div>
    </div>
  );
}

export default Home;

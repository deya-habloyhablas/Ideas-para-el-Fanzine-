import React from 'react';

export const Stickers: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left */}
      <div className="absolute top-4 left-4 text-6xl opacity-80 animate-pulse transform -rotate-12 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
        🥘
      </div>
      
      {/* Top Right */}
      <div className="absolute top-10 right-10 text-6xl opacity-80 animate-bounce-slow transform rotate-12 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
        💃
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-10 left-10 text-6xl opacity-80 animate-pulse delay-100 transform rotate-45 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
        💀
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-20 right-5 text-6xl opacity-80 animate-bounce delay-700 transform -rotate-12 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
        🪭
      </div>
      
      {/* Randoms */}
      <div className="absolute top-1/2 left-5 text-4xl opacity-60 transform -rotate-90">
        🌵
      </div>
      <div className="absolute top-1/3 right-8 text-4xl opacity-60 transform rotate-12">
        🎸
      </div>
    </div>
  );
};
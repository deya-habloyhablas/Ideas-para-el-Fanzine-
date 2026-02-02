import React, { useEffect } from 'react';
import { GameState } from '../types';

interface Props {
  setGameState: (state: GameState) => void;
}

export const PrepScreen: React.FC<Props> = ({ setGameState }) => {
  
  // Auto advance logic is not requested, but a button or click is needed. 
  // User said "Then to the questions". Usually a click is better for presenters.
  // I will make it clickable anywhere.

  return (
    <div 
        onClick={() => setGameState('QUIZ')}
        className="min-h-screen bg-black flex items-center justify-center cursor-pointer relative"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-curtain-red to-black opacity-50" />
        
        <h1 className="relative z-10 text-6xl md:text-9xl font-neon text-neon-gold text-center animate-bounce-slow drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] select-none">
            ¿PREPARADAS?
        </h1>

        <div className="absolute bottom-10 text-white/50 text-sm animate-pulse">
            (Clic para comenzar)
        </div>
    </div>
  );
};
import React from 'react';
import { GameState } from '../types';

interface Props {
  setGameState: (state: GameState) => void;
}

export const StartScreen: React.FC<Props> = ({ setGameState }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Image Simulation - In a real app, use the actual uploaded file */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1514306191717-45224512c2d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
        }}
      />
      
      <div className="z-10 flex flex-col items-center p-8 bg-black/60 border-4 border-neon-gold rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.6)] backdrop-blur-sm max-w-4xl w-full">
        {/* Neon Title Simulation */}
        <div className="border-8 border-dotted border-neon-gold p-8 rounded-lg mb-12 shadow-[0_0_20px_rgba(255,0,0,0.8)] bg-curtain-red/90 relative">
            <h1 className="text-6xl md:text-8xl font-neon text-white text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-flicker">
              FANZINE
            </h1>
            <p className="font-serif text-neon-gold text-2xl md:text-4xl text-center mt-4 tracking-wider italic drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]">
              Bienvenidas a nuestro
            </p>
        </div>

        <button
          onClick={() => setGameState('SETUP')}
          className="group relative px-12 py-4 bg-transparent border-4 border-neon-gold text-neon-gold text-2xl font-bold uppercase tracking-widest hover:bg-neon-gold hover:text-deep-red transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] rounded-full"
        >
          <span className="relative z-10">Comenzar</span>
        </button>
      </div>
      
      {/* Decorative Curtains (CSS Only) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-0 opacity-80" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-0 opacity-80" />
    </div>
  );
};
import React, { useState } from 'react';
import { GameState, Team } from '../types';
import { ArrowRight, Plus, Minus, Users } from 'lucide-react';
import { Stickers } from './Stickers';

interface Props {
  setGameState: (state: GameState) => void;
  setTeams: (teams: Team[]) => void;
}

export const TeamSetup: React.FC<Props> = ({ setGameState, setTeams }) => {
  const [count, setCount] = useState(2);
  const [names, setNames] = useState<string[]>(['', '']);

  const handleCountChange = (delta: number) => {
    const newCount = Math.max(1, Math.min(8, count + delta));
    setCount(newCount);
    if (newCount > names.length) {
      setNames([...names, '']);
    } else if (newCount < names.length) {
      setNames(names.slice(0, newCount));
    }
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleNext = () => {
    const finalTeams: Team[] = names.map((name, i) => ({
      id: `team-${i}`,
      name: name.trim() || `Equipo ${i + 1}`,
      score: 0,
    }));
    setTeams(finalTeams);
    setGameState('PREP');
  };

  return (
    <div className="min-h-screen bg-deep-red flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Stickers />
      
      <div className="z-10 w-full max-w-2xl bg-black/80 border-2 border-neon-red p-8 rounded-xl shadow-[0_0_20px_rgba(255,0,60,0.4)] backdrop-blur-md">
        <h2 className="text-4xl font-neon text-neon-gold mb-8 text-center drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]">
          Equipos
        </h2>

        {/* Counter */}
        <div className="flex items-center justify-center mb-8 gap-6">
            <button 
                onClick={() => handleCountChange(-1)}
                className="p-3 rounded-full border-2 border-white/50 hover:border-neon-gold hover:bg-neon-gold/20 transition text-white"
            >
                <Minus size={24} />
            </button>
            <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-white font-neon">{count}</span>
                <span className="text-sm uppercase tracking-widest text-white/60">Grupos</span>
            </div>
            <button 
                onClick={() => handleCountChange(1)}
                className="p-3 rounded-full border-2 border-white/50 hover:border-neon-gold hover:bg-neon-gold/20 transition text-white"
            >
                <Plus size={24} />
            </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-h-[40vh] overflow-y-auto custom-scrollbar p-2">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="relative group">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 group-focus-within:text-neon-red transition" size={20} />
                    <input 
                        type="text"
                        placeholder={`Nombre Equipo ${i + 1}`}
                        value={names[i] || ''}
                        onChange={(e) => handleNameChange(i, e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-neon-red focus:ring-1 focus:ring-neon-red transition font-bold"
                    />
                </div>
            ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
            <button 
                onClick={handleNext}
                className="flex items-center gap-2 bg-neon-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600 transition shadow-[0_0_15px_rgba(255,0,60,0.6)] animate-pulse hover:animate-none"
            >
                SIGUIENTE <ArrowRight size={24} />
            </button>
        </div>
      </div>
    </div>
  );
};
import React, { useEffect } from 'react';
import { GameState, Team } from '../types';
import confetti from 'canvas-confetti';
import { Trophy, Star } from 'lucide-react';
import { Stickers } from './Stickers';

interface Props {
  teams: Team[];
  setGameState: (state: GameState) => void;
}

export const RankingScreen: React.FC<Props> = ({ teams, setGameState }) => {
  // Sort teams by score descending
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const winner = sortedTeams[0];
  const runnersUp = sortedTeams.slice(1);

  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = window.setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-deep-red via-transparent to-transparent opacity-60" />
      <Stickers />

      <div className="z-10 flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-neon text-neon-gold mb-12 drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] text-center animate-pulse">
            RANKING FINAL
        </h1>

        {/* Winner Podium */}
        <div className="relative mb-16 flex flex-col items-center">
            <div className="animate-bounce-slow">
                <Trophy size={120} className="text-neon-gold drop-shadow-[0_0_30px_rgba(255,215,0,1)]" />
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
                    {winner.name}
                </h2>
                <div className="inline-block px-6 py-2 bg-neon-gold text-black font-black text-2xl rounded-full shadow-lg">
                    {winner.score} PUNTOS
                </div>
            </div>
            <div className="absolute -top-10 -right-10 text-6xl animate-pulse delay-75">🎉</div>
            <div className="absolute -top-10 -left-10 text-6xl animate-pulse delay-150">✨</div>
        </div>

        {/* Other Players Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm max-h-[40vh] overflow-y-auto custom-scrollbar">
            {runnersUp.map((team, index) => (
                <div key={team.id} className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5 hover:border-neon-red/50 transition">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 font-mono text-xl">#{index + 2}</span>
                        <span className="text-xl font-bold text-gray-200">{team.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-neon-red font-bold text-xl">{team.score}</span>
                        <Star size={16} className="text-neon-red fill-current" />
                    </div>
                </div>
            ))}
        </div>

        <button 
            onClick={() => window.location.reload()}
            className="mt-12 text-gray-500 hover:text-white underline underline-offset-4 transition"
        >
            Volver a empezar
        </button>
      </div>
    </div>
  );
};
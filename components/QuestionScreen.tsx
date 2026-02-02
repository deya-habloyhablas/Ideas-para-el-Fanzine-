import React, { useState } from 'react';
import { GameState, Question, Team } from '../types';
import { QUESTIONS } from '../constants';
import { ArrowRight, Check, Eye } from 'lucide-react';
import { Stickers } from './Stickers';

interface Props {
  setGameState: (state: GameState) => void;
  teams: Team[];
  setTeams: (teams: Team[]) => void;
}

export const QuestionScreen: React.FC<Props> = ({ setGameState, teams, setTeams }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [winners, setWinners] = useState<string[]>([]); // Array of Team IDs

  const currentQ = QUESTIONS[currentIndex];

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const toggleWinner = (teamId: string) => {
    if (winners.includes(teamId)) {
      setWinners(winners.filter(id => id !== teamId));
    } else {
      setWinners([...winners, teamId]);
    }
  };

  const handleNextQuestion = () => {
    // Update scores
    const updatedTeams = teams.map(team => ({
      ...team,
      score: winners.includes(team.id) ? team.score + 1 : team.score
    }));
    setTeams(updatedTeams);

    // Reset state for next Q
    setWinners([]);
    setIsRevealed(false);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setGameState('RANKING');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-deep-red via-black to-black z-0" />
      <Stickers />

      {/* Main Container */}
      <div className="z-10 w-full max-w-5xl flex flex-col flex-grow">
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-800 rounded-full mb-6">
            <div 
                className="h-full bg-neon-red shadow-[0_0_10px_rgba(255,0,60,0.8)] transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
            />
        </div>

        {/* Question Box */}
        <div className="relative bg-black/60 border-4 border-neon-gold rounded-2xl p-6 md:p-10 mb-6 shadow-[0_0_30px_rgba(255,215,0,0.3)] backdrop-blur-sm flex flex-col md:flex-row gap-6 items-center">
            
            <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neon-gold drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] leading-tight">
                    {currentQ.questionEs}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 font-light italic border-l-4 border-neon-red pl-4">
                    {currentQ.questionEn}
                </p>
            </div>

            {/* Question Image (If applicable) */}
            {currentQ.imageQuestion && (
                <div className="w-full md:w-1/3 shrink-0">
                     <img 
                        src={currentQ.imageQuestion} 
                        alt="Question Hint" 
                        className="w-full h-auto rounded-lg border-2 border-white/20 shadow-lg object-cover max-h-60"
                     />
                </div>
            )}
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {currentQ.options.map((opt) => {
                const isCorrect = opt.id === currentQ.correctOptionId;
                const isHighlighted = isRevealed && isCorrect;
                
                return (
                    <div 
                        key={opt.id}
                        className={`
                            relative p-6 rounded-xl border-2 transition-all duration-500 flex flex-col items-center justify-center text-center
                            ${isHighlighted 
                                ? 'bg-green-900/80 border-green-400 scale-105 shadow-[0_0_20px_rgba(74,222,128,0.6)] z-20' 
                                : 'bg-white/5 border-white/10 hover:border-white/30'
                            }
                            ${isRevealed && !isCorrect ? 'opacity-50 blur-[1px]' : 'opacity-100'}
                        `}
                    >
                        <span className={`text-4xl font-bold mb-2 ${isHighlighted ? 'text-green-300' : 'text-neon-red'}`}>
                            {opt.id}
                        </span>
                        <div className="text-xl font-bold">{opt.textEs}</div>
                        <div className="text-sm text-gray-400">{opt.textEn}</div>
                    </div>
                );
            })}
        </div>

        {/* Answer Image (Shown only when revealed) */}
        {isRevealed && currentQ.imageAnswer && (
            <div className="mb-8 w-full flex justify-center animate-fade-in-up">
                 <div className="relative p-2 bg-white/10 rounded-xl transform rotate-1">
                     <div className="absolute -top-3 -right-3 bg-neon-red text-white px-3 py-1 rounded-full font-bold shadow-lg">Respuesta</div>
                     <img 
                        src={currentQ.imageAnswer} 
                        alt="Answer" 
                        className="max-h-64 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                     />
                 </div>
            </div>
        )}

        {/* Controls Area */}
        <div className="mt-auto">
            {!isRevealed ? (
                <div className="flex justify-end">
                    <button 
                        onClick={handleReveal}
                        className="group flex items-center gap-2 px-8 py-3 bg-neon-gold text-black font-bold rounded-full hover:bg-white transition shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                    >
                        <Eye className="group-hover:scale-110 transition" />
                        VER RESPUESTA
                    </button>
                </div>
            ) : (
                <div className="bg-black/80 border border-white/20 p-6 rounded-xl animate-fade-in">
                    <h3 className="text-center text-neon-gold uppercase tracking-widest mb-4 font-bold">
                        ¿Quién ha acertado? (+1 Punto)
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {teams.map(team => (
                            <button
                                key={team.id}
                                onClick={() => toggleWinner(team.id)}
                                className={`
                                    px-4 py-2 rounded-full border-2 transition font-bold flex items-center gap-2
                                    ${winners.includes(team.id) 
                                        ? 'bg-green-600 border-green-400 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]' 
                                        : 'bg-transparent border-gray-600 text-gray-400 hover:border-white hover:text-white'
                                    }
                                `}
                            >
                                {winners.includes(team.id) && <Check size={16} />}
                                {team.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center w-full">
                         <button 
                            onClick={handleNextQuestion}
                            className="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-neon-red text-white font-bold rounded-lg hover:bg-red-600 transition shadow-[0_0_20px_rgba(255,0,60,0.4)] text-xl"
                        >
                            SIGUIENTE PREGUNTA <ArrowRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
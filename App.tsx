import React, { useState } from 'react';
import { GameState, Team } from './types';
import { StartScreen } from './components/StartScreen';
import { TeamSetup } from './components/TeamSetup';
import { PrepScreen } from './components/PrepScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { RankingScreen } from './components/RankingScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('START');
  const [teams, setTeams] = useState<Team[]>([]);

  // Simple Router based on state
  const renderScreen = () => {
    switch (gameState) {
      case 'START':
        return <StartScreen setGameState={setGameState} />;
      case 'SETUP':
        return <TeamSetup setGameState={setGameState} setTeams={setTeams} />;
      case 'PREP':
        return <PrepScreen setGameState={setGameState} />;
      case 'QUIZ':
        return <QuestionScreen setGameState={setGameState} teams={teams} setTeams={setTeams} />;
      case 'RANKING':
        return <RankingScreen teams={teams} setGameState={setGameState} />;
      default:
        return <StartScreen setGameState={setGameState} />;
    }
  };

  return (
    <main className="w-full h-full">
      {renderScreen()}
    </main>
  );
};

export default App;
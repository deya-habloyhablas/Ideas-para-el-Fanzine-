export interface Team {
  id: string;
  name: string;
  score: number;
}

export interface Option {
  id: string;
  textEs: string;
  textEn: string;
}

export interface Question {
  id: number;
  questionEs: string;
  questionEn: string;
  options: Option[];
  correctOptionId: string;
  imageQuestion?: string; // URL for image shown WITH question
  imageAnswer?: string;   // URL for image shown WITH answer
}

export type GameState = 'START' | 'SETUP' | 'PREP' | 'QUIZ' | 'RANKING';

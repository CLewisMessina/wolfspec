import { Answer } from './answer';

export interface Question {
  id: string;
  title: string;
  subtitle: string;
  phase: number;
  phaseTitle: string;
  order: number;
  mode: 'express' | 'full' | 'both';
  defaultAnswers: Answer[];
  aiEnhanced?: boolean;
  required?: boolean;
}

export interface QuestionProgress {
  questionId: string;
  isAnswered: boolean;
  selectedAnswer?: Answer;
  timeSpent?: number; // seconds
  revisited?: number; // count of times revisited
}
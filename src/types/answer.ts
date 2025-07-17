export type AnswerType = 'DEFAULT' | 'AI' | 'SKIP' | 'CUSTOM';

export interface Answer {
  id: string;
  text: string;
  type: AnswerType;
  metadata?: {
    industry?: string;
    confidence?: number;
    source?: string;
  };
}

export interface SelectedAnswer extends Answer {
  selectedAt: string; // ISO timestamp
  questionId: string;
}

export interface AnswerOption extends Answer {
  isSelected?: boolean;
  onClick?: () => void;
}
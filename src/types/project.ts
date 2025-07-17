import { SelectedAnswer, QuestionProgress } from './question';

export type ProjectMode = 'express' | 'full';
export type ProjectStatus = 'draft' | 'in-progress' | 'complete';
export type InteractionMode = 'drag' | 'click';

export interface ProjectProgress {
  mode: ProjectMode;
  currentPhase: number;
  currentQuestion: number;
  totalQuestions: number;
  completedQuestions: number;
  completion: number; // 0-1
  timeSpent: number; // total seconds
  questionsProgress: QuestionProgress[];
}

export interface Project {
  id: string;
  title: string;
  mode: ProjectMode;
  status: ProjectStatus;
  created: string; // ISO timestamp
  lastModified: string; // ISO timestamp
  progress: ProjectProgress;
  answers: SelectedAnswer[];
  settings: {
    interactionMode: InteractionMode;
    aiEnabled: boolean;
    autoSave: boolean;
  };
}

export interface ProjectContextType {
  currentProject: Project | null;
  projects: Project[];
  loading: boolean;
  error: string | null;
  
  // Actions
  createProject: (mode: ProjectMode, title?: string) => void;
  loadProject: (id: string) => void;
  saveProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  updateProgress: (questionId: string, answer: SelectedAnswer) => void;
  setInteractionMode: (mode: InteractionMode) => void;
}
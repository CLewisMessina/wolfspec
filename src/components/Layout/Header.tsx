import React from 'react';
import { Project, ProjectMode } from '@/types';

interface HeaderProps {
  currentProject?: Project | null;
  onNavigateHome?: () => void;
  onSaveProject?: () => void;
  onShowPhaseNavigator?: () => void;
}

export function Header({ 
  currentProject, 
  onNavigateHome, 
  onSaveProject,
  onShowPhaseNavigator 
}: HeaderProps) {
  const getModeIcon = (mode: ProjectMode) => {
    return mode === 'express' ? '⚡' : '🔬';
  };

  const getModeLabel = (mode: ProjectMode) => {
    return mode === 'express' ? 'EXPRESS' : 'FULL';
  };

  return (
    <header className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-wolfspec-gray-800">
            🐺 WolfSpec
          </h1>
          {currentProject && (
            <div className="flex items-center gap-2">
              <div className="bg-wolfspec-blue-100 px-3 py-1 rounded text-sm font-mono">
                {getModeIcon(currentProject.mode)} {currentProject.title}
              </div>
              <div className={`
                text-xs px-2 py-1 rounded font-bold
                ${currentProject.mode === 'express' 
                  ? 'bg-wolfspec-green-500 text-white' 
                  : 'bg-wolfspec-blue-500 text-white'
                }
              `}>
                {getModeLabel(currentProject.mode)}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {currentProject && (
            <>
              <button 
                onClick={onShowPhaseNavigator}
                className="px-3 py-1 bg-wolfspec-gray-500 text-white rounded text-sm hover:bg-wolfspec-gray-600 transition-colors"
                aria-label="Show phase navigator"
              >
                📋 Phase Navigator
              </button>
              <button 
                onClick={onSaveProject}
                className="px-3 py-1 bg-wolfspec-gray-500 text-white rounded text-sm hover:bg-wolfspec-gray-600 transition-colors"
                aria-label="Save project"
              >
                💾 Save
              </button>
            </>
          )}
          <button 
            onClick={onNavigateHome}
            className="px-3 py-1 bg-wolfspec-gray-500 text-white rounded text-sm hover:bg-wolfspec-gray-600 transition-colors"
            aria-label="Go to projects"
          >
            🏠 Projects
          </button>
        </div>
      </div>
      
      {currentProject && (
        <div className="mt-3 text-sm text-wolfspec-gray-600 flex justify-between items-center">
          <span>
            Question {currentProject.progress.currentQuestion} of {currentProject.progress.totalQuestions} • 
            Phase {currentProject.progress.currentPhase}: Problem Framing
          </span>
          <span>
            {Math.round(currentProject.progress.completion * 100)}% Complete
          </span>
        </div>
      )}
    </header>
  );
}
import React from 'react';
import { InteractionMode } from '@/types';

interface InteractionModeToggleProps {
  currentMode: InteractionMode;
  onModeChange: (mode: InteractionMode) => void;
  className?: string;
}

export function InteractionModeToggle({ 
  currentMode, 
  onModeChange, 
  className = '' 
}: InteractionModeToggleProps) {
  return (
    <div className={`flex bg-wolfspec-gray-100 rounded-lg p-1 ${className}`}>
      <button
        onClick={() => onModeChange('drag')}
        className={`px-4 py-2 rounded text-sm font-medium transition-all ${
          currentMode === 'drag'
            ? 'bg-wolfspec-blue-500 text-white shadow-sm' 
            : 'text-wolfspec-gray-600 hover:text-wolfspec-gray-800'
        }`}
        aria-pressed={currentMode === 'drag'}
        aria-label="Switch to drag and drop mode"
      >
        🎯 Drag & Drop
      </button>
      <button
        onClick={() => onModeChange('click')}
        className={`px-4 py-2 rounded text-sm font-medium transition-all ${
          currentMode === 'click'
            ? 'bg-wolfspec-green-500 text-white shadow-sm' 
            : 'text-wolfspec-gray-600 hover:text-wolfspec-gray-800'
        }`}
        aria-pressed={currentMode === 'click'}
        aria-label="Switch to click to select mode"
      >
        ⚡ Click & Select
      </button>
    </div>
  );
}
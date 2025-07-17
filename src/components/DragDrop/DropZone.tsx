import React, { useState } from 'react';
import { SelectedAnswer } from '@/types';

interface DropZoneProps {
  selectedAnswer: SelectedAnswer | null;
  isDragMode: boolean;
  onDrop: (optionId: string) => void;
  onClear: () => void;
}

export function DropZone({ 
  selectedAnswer, 
  isDragMode, 
  onDrop, 
  onClear 
}: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  if (!isDragMode) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const optionId = e.dataTransfer.getData('text/plain');
    if (optionId) {
      onDrop(optionId);
    }
  };

  const dropZoneClasses = `
    border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 my-4
    ${isDragOver 
      ? 'border-wolfspec-green-500 bg-wolfspec-green-50 text-wolfspec-green-700 scale-105' 
      : selectedAnswer 
        ? 'border-wolfspec-green-500 bg-wolfspec-green-100' 
        : 'border-gray-300 bg-wolfspec-gray-50 text-wolfspec-gray-500'
    }
  `;

  return (
    <div 
      className={dropZoneClasses}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      role="region"
      aria-label="Drop zone for selected answer"
    >
      {selectedAnswer ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-wolfspec-green-600 text-xl" role="img" aria-label="Selected">
              ✅
            </span>
            <div className="text-left">
              <div className="font-medium text-wolfspec-green-800">Selected Answer:</div>
              <div className="text-wolfspec-green-700">{selectedAnswer.text}</div>
            </div>
          </div>
          <button 
            onClick={onClear}
            className="text-red-500 hover:text-red-700 font-bold text-lg transition-colors"
            aria-label="Clear selected answer"
          >
            ✖
          </button>
        </div>
      ) : (
        <div>
          <div className="text-2xl mb-2" role="img" aria-label="Drop zone">
            📥
          </div>
          <div className="text-sm">
            {isDragOver ? 'Drop here!' : 'Drop your selected answer here'}
          </div>
        </div>
      )}
    </div>
  );
}
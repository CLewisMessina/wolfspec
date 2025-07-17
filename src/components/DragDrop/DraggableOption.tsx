import React, { useState, useRef } from 'react';
import { AnswerOption, AnswerType } from '@/types';

interface DraggableOptionProps {
  option: AnswerOption;
  isSelected: boolean;
  isDragMode: boolean;
  onSelect: (option: AnswerOption) => void;
  onDragStart?: (optionId: string) => void;
}

const getAnswerIcon = (type: AnswerType): string => {
  switch (type) {
    case 'DEFAULT': return '📝';
    case 'AI': return '🤖';
    case 'SKIP': return '⚠️';
    case 'CUSTOM': return '✏️';
    default: return '📝';
  }
};

const getAnswerBadgeStyles = (type: AnswerType): string => {
  switch (type) {
    case 'DEFAULT': return 'bg-green-500 text-white';
    case 'AI': return 'bg-blue-500 text-white';
    case 'SKIP': return 'bg-yellow-500 text-yellow-900';
    case 'CUSTOM': return 'bg-purple-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
};

export function DraggableOption({ 
  option, 
  isSelected, 
  isDragMode, 
  onSelect,
  onDragStart 
}: DraggableOptionProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDragMode) return;
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isDragMode) return;
    setIsDragging(true);
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (!isDragMode) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('text/plain', option.id);
    onDragStart?.(option.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!isDragMode) {
      onSelect(option);
    }
  };

  const baseClasses = `
    relative border-2 rounded-lg p-3 mb-2 transition-all duration-200 cursor-pointer select-none
    ${isDragMode ? 'border-dashed' : 'border-solid'}
    ${isSelected 
      ? 'bg-wolfspec-green-50 border-wolfspec-green-500 text-wolfspec-green-700' 
      : 'bg-wolfspec-blue-50 border-wolfspec-blue-400 hover:bg-wolfspec-blue-100 hover:border-wolfspec-blue-500'
    }
    ${!isDragMode ? 'hover:shadow-md' : ''}
    ${isDragging ? 'opacity-75 z-50 rotate-1' : ''}
    ${option.type === 'SKIP' ? 'bg-yellow-50 border-yellow-400' : ''}
  `;

  return (
    <div
      ref={dragRef}
      className={baseClasses}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      draggable={isDragMode}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Answer option: ${option.text}`}
    >
      {/* Icon and Content */}
      <div className="flex items-start gap-3">
        <div className="text-lg mt-0.5" role="img" aria-label={`${option.type} answer`}>
          {getAnswerIcon(option.type)}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium leading-relaxed">
            {option.text}
          </div>
        </div>
        <div className={`
          text-xs px-2 py-1 rounded font-bold
          ${getAnswerBadgeStyles(option.type)}
        `}>
          {option.type}
        </div>
      </div>
      
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-2 left-2 w-4 h-4 bg-wolfspec-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
      
      {/* Drag Handle Indicator */}
      {isDragMode && (
        <div className="absolute top-2 right-2 text-gray-400 text-xs">
          ⋮⋮
        </div>
      )}
    </div>
  );
}
'use client';

import React from 'react';

interface QuizProgressProps {
  current: number;
  total: number;
  score?: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ current, total, score }) => {
  const pct = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="font-semibold text-base-content/60">
          Question {current} of {total}
        </span>
        {score !== undefined && (
          <span className="font-bold text-primary">{score} correct so far</span>
        )}
      </div>
      <div className="h-2 w-full bg-base-content/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;

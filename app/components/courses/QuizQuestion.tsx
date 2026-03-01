'use client';

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestionData {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctId: string;
}

interface QuizQuestionProps {
  question: QuizQuestionData;
  questionNumber: number;
  selectedId: string | null;
  revealed: boolean;
  onSelect: (id: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  selectedId,
  revealed,
  onSelect,
}) => {
  return (
    <div className="rounded-2xl border border-base-content/10 bg-base-100 p-6 sm:p-8">
      {/* Question header */}
      <p className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-3">
        Question {questionNumber}
      </p>
      <h3 className="text-lg sm:text-xl font-bold text-base-content leading-snug mb-6">
        {question.prompt}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt) => {
          const isSelected = selectedId === opt.id;
          const isCorrect  = opt.id === question.correctId;

          let stateClass = 'border-base-content/10 bg-base-100 text-base-content/75 hover:border-primary/30 hover:bg-primary/5';
          let iconEl: React.ReactNode = null;

          if (revealed) {
            if (isCorrect) {
              stateClass = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-700 font-semibold';
              iconEl = <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />;
            } else if (isSelected && !isCorrect) {
              stateClass = 'border-rose-500/40 bg-rose-500/10 text-rose-700 font-semibold';
              iconEl = <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />;
            }
          } else if (isSelected) {
            stateClass = 'border-primary/50 bg-primary/10 text-primary font-semibold';
          }

          return (
            <button
              key={opt.id}
              onClick={() => !revealed && onSelect(opt.id)}
              disabled={revealed}
              className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl border text-left text-sm transition-all duration-200 ${stateClass}`}
            >
              {/* Letter badge */}
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-current text-xs font-bold opacity-60">
                {opt.id.toUpperCase()}
              </span>
              <span className="flex-1">{opt.text}</span>
              {iconEl}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;

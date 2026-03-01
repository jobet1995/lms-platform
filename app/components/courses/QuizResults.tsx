'use client';

import React from 'react';
import Link from 'next/link';
import { Award, RefreshCw, ArrowLeft, BookOpen } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  total: number;
  courseId: string;
  nextLessonId?: string;
  onRetry: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  total,
  courseId,
  nextLessonId,
  onRetry,
}) => {
  const pct  = Math.round((score / total) * 100);
  const pass = pct >= 70;

  return (
    <div className="flex flex-col items-center text-center py-10">
      {/* Score ring */}
      <div className={`relative w-36 h-36 flex items-center justify-center rounded-full border-8 shadow-2xl mb-6 ${
        pass ? 'border-emerald-400 bg-emerald-500/10' : 'border-rose-400 bg-rose-500/10'
      }`}>
        <div>
          <p className={`text-4xl font-extrabold ${pass ? 'text-emerald-500' : 'text-rose-500'}`}>
            {pct}%
          </p>
          <p className="text-xs text-base-content/50 font-medium mt-0.5">
            {score}/{total} correct
          </p>
        </div>
        {pass && (
          <Award className="absolute -top-4 -right-4 h-10 w-10 text-amber-400 drop-shadow-lg" />
        )}
      </div>

      <h2 className="text-2xl font-extrabold text-base-content mb-2">
        {pass ? '🎉 Great job!' : '😅 Keep practicing!'}
      </h2>
      <p className="text-base-content/60 text-sm max-w-xs mb-8">
        {pass
          ? `You scored ${pct}% — well above the passing mark. Keep going!`
          : `You scored ${pct}%. The passing mark is 70%. Review the lesson and try again.`}
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-base-content/10 text-sm font-semibold text-base-content/70 hover:text-primary hover:border-primary/30 transition-all"
        >
          <RefreshCw className="h-4 w-4" />
          Retry Quiz
        </button>

        <Link
          href={`/courses/${courseId}`}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-base-content/10 text-sm font-semibold text-base-content/70 hover:text-primary hover:border-primary/30 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Course Overview
        </Link>

        {nextLessonId && pass && (
          <Link
            href={`/courses/${courseId}/learn/${nextLessonId}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-focus transition-all shadow-lg shadow-primary/20"
          >
            <BookOpen className="h-4 w-4" />
            Next Lesson
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuizResults;

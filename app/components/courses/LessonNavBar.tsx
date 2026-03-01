'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface NavLesson {
  id: string;
  title: string;
}

interface LessonNavBarProps {
  courseId: string;
  prev?: NavLesson;
  next?: NavLesson;
  isCompleted?: boolean;
  onMarkComplete?: () => void;
}

const LessonNavBar: React.FC<LessonNavBarProps> = ({
  courseId,
  prev,
  next,
  isCompleted = false,
  onMarkComplete,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-t border-base-content/10 mt-8">
      {/* Prev */}
      <div className="flex-1">
        {prev ? (
          <Link
            href={`/courses/${courseId}/learn/${prev.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/10 bg-base-100 text-sm font-medium text-base-content/60 hover:border-primary/30 hover:text-primary transition-all group max-w-[220px]"
          >
            <ArrowLeft className="h-4 w-4 flex-shrink-0 group-hover:-translate-x-0.5 transition-transform" />
            <span className="truncate">{prev.title}</span>
          </Link>
        ) : (
          <Link
            href={`/courses/${courseId}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/10 text-sm font-medium text-base-content/50 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Course Overview
          </Link>
        )}
      </div>

      {/* Mark complete */}
      <button
        onClick={onMarkComplete}
        disabled={isCompleted}
        className={`
          flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all
          ${isCompleted
            ? 'bg-emerald-500/15 text-emerald-600 border border-emerald-500/20 cursor-default'
            : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-focus hover:-translate-y-0.5'
          }
        `}
      >
        <CheckCircle2 className="h-4 w-4" />
        {isCompleted ? 'Completed' : 'Mark Complete'}
      </button>

      {/* Next */}
      <div className="flex-1 flex justify-end">
        {next && (
          <Link
            href={`/courses/${courseId}/learn/${next.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/10 bg-base-100 text-sm font-medium text-base-content/60 hover:border-primary/30 hover:text-primary transition-all group max-w-[220px]"
          >
            <span className="truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonNavBar;

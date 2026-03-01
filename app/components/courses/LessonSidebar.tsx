'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PlayCircle, FileText, HelpCircle, CheckCircle2,
  ChevronDown, ChevronUp, PanelLeftClose, PanelLeft,
} from 'lucide-react';
import { Section, Lesson } from './CourseCurriculum';

interface LessonSidebarProps {
  sections: Section[];
  courseId: string;
  activeLessonId: string;
  completedIds?: Set<string>;
}

const typeIcon = (type: Lesson['type'], completed?: boolean) => {
  if (completed) return <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />;
  switch (type) {
    case 'video': return <PlayCircle className="h-4 w-4 text-primary/60 flex-shrink-0" />;
    case 'quiz':  return <HelpCircle className="h-4 w-4 text-secondary/60 flex-shrink-0" />;
    default:      return <FileText className="h-4 w-4 text-base-content/40 flex-shrink-0" />;
  }
};

const LessonSidebar: React.FC<LessonSidebarProps> = ({
  sections,
  courseId,
  activeLessonId,
  completedIds = new Set(),
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(sections.map((s) => s.id))
  );

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const totalLessons = sections.reduce((acc, s) => acc + s.lessons.length, 0);
  const completedCount = sections
    .flatMap((s) => s.lessons)
    .filter((l) => completedIds.has(l.id)).length;

  if (collapsed) {
    return (
      <aside className="flex flex-col items-center py-4 px-2 gap-4 border-r border-base-content/10 w-14 bg-base-100 h-full">
        <button
          onClick={() => setCollapsed(false)}
          aria-label="Expand sidebar"
          className="p-2 rounded-lg hover:bg-base-content/8 text-base-content/50 hover:text-primary transition-colors"
        >
          <PanelLeft className="h-5 w-5" />
        </button>
      </aside>
    );
  }

  return (
    <aside className="flex flex-col w-72 xl:w-80 flex-shrink-0 border-r border-base-content/10 bg-base-100 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-base-content/10">
        <div>
          <p className="text-sm font-bold text-base-content">Course Content</p>
          <p className="text-xs text-base-content/40 mt-0.5">
            {completedCount}/{totalLessons} completed
          </p>
        </div>
        <button
          onClick={() => setCollapsed(true)}
          aria-label="Collapse sidebar"
          className="p-1.5 rounded-lg hover:bg-base-content/8 text-base-content/40 hover:text-base-content transition-colors"
        >
          <PanelLeftClose className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 py-2 border-b border-base-content/8">
        <div className="h-1.5 w-full bg-base-content/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Sections list */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section) => {
          const isOpen = openSections.has(section.id);
          return (
            <div key={section.id} className="border-b border-base-content/8 last:border-0">
              {/* Section header */}
              <button
                onClick={() => toggle(section.id)}
                className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-base-content/5 transition-colors"
              >
                <span className="text-xs font-bold text-base-content/80 leading-snug pr-2">
                  {section.title}
                </span>
                {isOpen
                  ? <ChevronUp className="h-3.5 w-3.5 text-base-content/30 flex-shrink-0" />
                  : <ChevronDown className="h-3.5 w-3.5 text-base-content/30 flex-shrink-0" />}
              </button>

              {/* Lessons */}
              {isOpen && (
                <ul>
                  {section.lessons.map((lesson) => {
                    const isActive  = lesson.id === activeLessonId;
                    const isDone    = completedIds.has(lesson.id);
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/courses/${courseId}/learn/${lesson.id}`}
                          className={`
                            flex items-start gap-3 px-4 py-2.5 text-xs transition-colors
                            ${isActive
                              ? 'bg-primary/10 border-l-2 border-primary text-primary font-semibold'
                              : 'text-base-content/65 hover:bg-base-content/5 hover:text-base-content border-l-2 border-transparent'
                            }
                          `}
                        >
                          <span className="mt-0.5">{typeIcon(lesson.type, isDone)}</span>
                          <span className="flex-1 leading-snug">{lesson.title}</span>
                          {lesson.duration && (
                            <span className="text-base-content/30 flex-shrink-0">{lesson.duration}</span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default LessonSidebar;

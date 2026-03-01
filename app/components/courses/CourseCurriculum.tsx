'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, FileText, HelpCircle, Lock } from 'lucide-react';

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz';
  duration?: string;
  preview?: boolean;
  completed?: boolean;
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseCurriculumProps {
  sections: Section[];
  courseId: string;
  isEnrolled?: boolean;
  className?: string;
}

const lessonIcon = (type: Lesson['type']) => {
  switch (type) {
    case 'video': return <PlayCircle className="h-4 w-4 text-primary/70" />;
    case 'quiz':  return <HelpCircle className="h-4 w-4 text-secondary/70" />;
    default:      return <FileText className="h-4 w-4 text-base-content/40" />;
  }
};

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  sections,
  courseId,
  isEnrolled = false,
  className = '',
}) => {
  const [openSections, setOpenSections] = useState<Set<string>>(() =>
    new Set(sections.length > 0 ? [sections[0].id] : [])
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
  const totalDuration = sections
    .flatMap((s) => s.lessons)
    .map((l) => {
      const m = l.duration?.match(/(\d+)m/);
      return m ? parseInt(m[1]) : 0;
    })
    .reduce((a, b) => a + b, 0);

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-base-content">Course Curriculum</h2>
        <span className="text-sm text-base-content/50">
          {totalLessons} lessons · {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
        </span>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map((section) => {
          const isOpen = openSections.has(section.id);
          return (
            <div
              key={section.id}
              className="rounded-xl border border-base-content/10 overflow-hidden"
            >
              {/* Section header */}
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-center justify-between px-5 py-3.5 bg-base-100 hover:bg-base-content/3 transition-colors"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="font-bold text-base-content text-sm">{section.title}</span>
                  <span className="text-xs text-base-content/40">
                    {section.lessons.length} lessons
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-base-content/40 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-base-content/40 flex-shrink-0" />
                )}
              </button>

              {/* Lesson list */}
              {isOpen && (
                <ul className="border-t border-base-content/8 divide-y divide-base-content/5">
                  {section.lessons.map((lesson) => {
                    const accessible = isEnrolled || lesson.preview;
                    return (
                      <li key={lesson.id}>
                        {accessible ? (
                          <a
                            href={`/courses/${courseId}/learn/${lesson.id}`}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-primary/5 transition-colors group"
                          >
                            <span className="flex-shrink-0">{lessonIcon(lesson.type)}</span>
                            <span className="flex-1 text-sm text-base-content/80 group-hover:text-primary transition-colors">
                              {lesson.title}
                            </span>
                            {lesson.preview && !isEnrolled && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary uppercase tracking-wide">
                                Preview
                              </span>
                            )}
                            {lesson.completed && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600">
                                ✓
                              </span>
                            )}
                            {lesson.duration && (
                              <span className="text-xs text-base-content/35 flex-shrink-0">
                                {lesson.duration}
                              </span>
                            )}
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 px-5 py-3 opacity-60 cursor-not-allowed">
                            <Lock className="h-4 w-4 text-base-content/30 flex-shrink-0" />
                            <span className="flex-1 text-sm text-base-content/50">{lesson.title}</span>
                            {lesson.duration && (
                              <span className="text-xs text-base-content/30 flex-shrink-0">
                                {lesson.duration}
                              </span>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCurriculum;

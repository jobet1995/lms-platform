'use client';

import React from 'react';

export type CourseTab = 'overview' | 'curriculum' | 'instructor' | 'reviews';

const TABS: { id: CourseTab; label: string }[] = [
  { id: 'overview',    label: 'Overview'    },
  { id: 'curriculum',  label: 'Curriculum'  },
  { id: 'instructor',  label: 'Instructor'  },
  { id: 'reviews',     label: 'Reviews'     },
];

interface CourseTabBarProps {
  active: CourseTab;
  onChange: (tab: CourseTab) => void;
  className?: string;
}

const CourseTabBar: React.FC<CourseTabBarProps> = ({ active, onChange, className = '' }) => {
  return (
    <div className={`border-b border-base-content/10 ${className}`}>
      <nav className="-mb-px flex gap-0 overflow-x-auto no-scrollbar">
        {TABS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              id={`tab-${id}`}
              onClick={() => onChange(id)}
              className={`
                relative flex-shrink-0 px-5 py-3.5 text-sm font-semibold whitespace-nowrap
                transition-colors duration-200
                ${isActive
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-base-content/50 border-b-2 border-transparent hover:text-base-content'
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default CourseTabBar;

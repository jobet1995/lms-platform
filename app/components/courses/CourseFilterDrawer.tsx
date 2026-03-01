'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import CourseFilterSidebar, { FilterState } from './CourseFilterSidebar';

interface CourseFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  activeCount: number;
}

const CourseFilterDrawer: React.FC<CourseFilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onChange,
  onReset,
  activeCount,
}) => {
  // Prevent body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Course filters"
        className="fixed inset-y-0 left-0 z-50 flex flex-col w-72 max-w-[90vw] bg-base-100 shadow-2xl"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-base-content/10">
          <span className="text-base font-bold text-base-content">Filter Courses</span>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="p-1.5 rounded-full text-base-content/50 hover:text-base-content hover:bg-base-content/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable filter body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <CourseFilterSidebar
            filters={filters}
            onChange={onChange}
            onReset={onReset}
            activeCount={activeCount}
          />
        </div>

        {/* Apply button */}
        <div className="px-5 py-4 border-t border-base-content/10">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-focus transition-colors shadow-lg shadow-primary/20"
          >
            Show Results
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseFilterDrawer;

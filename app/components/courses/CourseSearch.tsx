'use client';

import React, { useRef } from 'react';
import { Search, X } from 'lucide-react';

interface CourseSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CourseSearch: React.FC<CourseSearchProps> = ({
  value,
  onChange,
  placeholder = 'Search courses, instructors, topics…',
  className = '',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40 pointer-events-none" />
      <input
        ref={inputRef}
        id="course-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full pl-11 pr-10 py-3
          rounded-xl border border-base-content/10
          bg-base-100 text-base-content placeholder:text-base-content/35
          text-sm font-medium
          shadow-sm
          outline-none
          focus:ring-2 focus:ring-primary/30 focus:border-primary/50
          transition-all duration-200
        "
      />
      {value && (
        <button
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-base-content/40 hover:text-base-content/70 hover:bg-base-content/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default CourseSearch;

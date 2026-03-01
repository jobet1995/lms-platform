'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronDown, ArrowUpDown } from 'lucide-react';

export type SortOption = 'popular' | 'rating' | 'newest' | 'title-asc' | 'title-desc';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' },
  { value: 'title-asc', label: 'Title A–Z' },
  { value: 'title-desc', label: 'Title Z–A' },
];

interface CourseSortDropdownProps {
  value: SortOption;
  onChange: (v: SortOption) => void;
}

const CourseSortDropdown: React.FC<CourseSortDropdownProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedLabel = sortOptions.find((o) => o.value === value)?.label ?? 'Sort';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        id="course-sort-btn"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          flex items-center gap-2 pl-4 pr-3 py-2.5
          rounded-xl border border-base-content/10 bg-base-100
          text-sm font-semibold text-base-content/70
          hover:border-primary/30 hover:text-primary
          shadow-sm transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary/30
          whitespace-nowrap
        "
      >
        <ArrowUpDown className="h-3.5 w-3.5 text-primary/70" />
        {selectedLabel}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="
            absolute right-0 top-full z-50 mt-2 w-48
            rounded-xl border border-base-content/10
            bg-base-100 shadow-xl shadow-black/10
            py-1.5 overflow-hidden
            animate-in fade-in zoom-in-95 duration-150
          "
        >
          {sortOptions.map((opt) => (
            <li key={opt.value} role="option" aria-selected={value === opt.value}>
              <button
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 text-sm font-medium transition-colors
                  ${
                    value === opt.value
                      ? 'text-primary bg-primary/8 font-semibold'
                      : 'text-base-content/70 hover:bg-base-content/5 hover:text-base-content'
                  }
                `}
              >
                {value === opt.value && (
                  <span className="mr-2 text-primary">✓</span>
                )}
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseSortDropdown;

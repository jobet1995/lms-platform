'use client';

import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';

export interface FilterState {
  difficulty: string[];
  duration: string[];
  minRating: number | null;
}

interface CourseFilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  activeCount: number;
}

const difficulties = ['Beginner', 'Intermediate', 'Advanced'] as const;
const durations = [
  { label: 'Under 2 hours', value: 'lt2' },
  { label: '2–5 hours', value: '2-5' },
  { label: '5–10 hours', value: '5-10' },
  { label: '10+ hours', value: 'gt10' },
];
const ratings = [4.5, 4.0, 3.5, 3.0];

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

const CourseFilterSidebar: React.FC<CourseFilterSidebarProps> = ({
  filters,
  onChange,
  onReset,
  activeCount,
}) => {
  return (
    <aside className="w-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-base-content">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          <span className="text-sm">Filters</span>
          {activeCount > 0 && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary text-white">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary/70 font-semibold transition-colors"
          >
            <X className="h-3 w-3" /> Reset
          </button>
        )}
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-3">
          Difficulty
        </h3>
        <div className="flex flex-col gap-2">
          {difficulties.map((d) => {
            const checked = filters.difficulty.includes(d);
            const color =
              d === 'Beginner'
                ? 'text-emerald-500'
                : d === 'Intermediate'
                ? 'text-amber-500'
                : 'text-rose-500';
            return (
              <label
                key={d}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onChange({
                      ...filters,
                      difficulty: toggle(filters.difficulty, d),
                    })
                  }
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span
                  className={`text-sm font-medium transition-colors ${
                    checked ? color : 'text-base-content/60'
                  } group-hover:text-base-content`}
                >
                  {d}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-3">
          Duration
        </h3>
        <div className="flex flex-col gap-2">
          {durations.map((dur) => {
            const checked = filters.duration.includes(dur.value);
            return (
              <label
                key={dur.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    onChange({
                      ...filters,
                      duration: toggle(filters.duration, dur.value),
                    })
                  }
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span
                  className={`text-sm font-medium transition-colors ${
                    checked ? 'text-base-content' : 'text-base-content/60'
                  } group-hover:text-base-content`}
                >
                  {dur.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-3">
          Minimum Rating
        </h3>
        <div className="flex flex-col gap-2">
          {ratings.map((r) => {
            const active = filters.minRating === r;
            return (
              <button
                key={r}
                onClick={() =>
                  onChange({ ...filters, minRating: active ? null : r })
                }
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-left transition-all border ${
                  active
                    ? 'bg-primary/10 border-primary/30 text-primary'
                    : 'bg-transparent border-transparent text-base-content/60 hover:text-base-content hover:bg-base-content/5'
                }`}
              >
                <span className="text-accent">★</span>
                {r.toFixed(1)}+
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CourseFilterSidebar;

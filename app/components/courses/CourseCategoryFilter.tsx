'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Category {
  id: string;
  label: string;
  count?: number;
}

interface CourseCategoryFilterProps {
  categories: Category[];
  selected: string;
  onChange: (id: string) => void;
}

const CourseCategoryFilter: React.FC<CourseCategoryFilterProps> = ({
  categories,
  selected,
  onChange,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    if (el) ro.observe(el);
    return () => {
      el?.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
    };
  }, [categories]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center gap-1">
      {/* Left fade + arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scroll('left')}
        className={`
          flex-shrink-0 p-1.5 rounded-full border border-base-content/10 bg-base-100 text-base-content/50
          hover:text-primary hover:border-primary/30 transition-all duration-200
          ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto scroll-smooth pb-1 no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {categories.map((cat) => {
          const active = selected === cat.id;
          return (
            <button
              key={cat.id}
              id={`category-${cat.id}`}
              onClick={() => onChange(cat.id)}
              className={`
                flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
                whitespace-nowrap transition-all duration-200 border
                ${active
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-base-100 text-base-content/60 border-base-content/10 hover:border-primary/30 hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              {cat.label}
              {cat.count !== undefined && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    active
                      ? 'bg-white/20 text-white'
                      : 'bg-base-content/10 text-base-content/40'
                  }`}
                >
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Right fade + arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scroll('right')}
        className={`
          flex-shrink-0 p-1.5 rounded-full border border-base-content/10 bg-base-100 text-base-content/50
          hover:text-primary hover:border-primary/30 transition-all duration-200
          ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CourseCategoryFilter;

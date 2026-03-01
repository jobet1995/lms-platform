'use client';

import React from 'react';
import TestimonialCard, { Testimonial } from './TestimonialCard';

interface TestimonialListProps {
  testimonials: Testimonial[];
  columns?: 3 | 4;
  className?: string;
}

const TestimonialList: React.FC<TestimonialListProps> = ({ 
  testimonials, 
  columns = 3, 
  className = "" 
}) => {
  const gridColsClass = columns === 4 
    ? "lg:grid-cols-4" 
    : "lg:grid-cols-3";

  return (
    <div 
      className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${gridColsClass} ${className}`}
    >
      {testimonials.map((testimonial, index) => (
        <div 
          key={testimonial.id}
          className="animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out fill-mode-both"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <TestimonialCard testimonial={testimonial} className="h-full" />
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;

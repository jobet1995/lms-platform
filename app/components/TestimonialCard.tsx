'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export interface Testimonial {
  id: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = "" }) => {
  const { content, authorName, authorRole, authorAvatar, rating = 5 } = testimonial;

  return (
    <article 
      className={`group relative flex flex-col p-8 rounded-[2.5rem] bg-base-100 border border-base-content/5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${className}`}
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote size={48} strokeWidth={1} />
      </div>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < Math.floor(rating) ? "fill-accent text-accent" : "text-base-content/20"}`}
            />
          ))}
        </div>
      )}

      {/* Testimonial Content */}
      <blockquote className="flex-1 mb-8">
        <p className="text-lg leading-relaxed text-base-content/80 font-medium italic">
          &quot;{content}&quot;
        </p>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-base-content/5">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10 transition-transform group-hover:scale-110">
          {authorAvatar ? (
            <Image 
              src={authorAvatar} 
              alt={authorName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-bold">
              {authorName.charAt(0)}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-base-content tracking-tight truncate">
            {authorName}
          </h4>
          <p className="text-sm text-base-content/50 font-medium truncate">
            {authorRole}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;

'use client';

import React from 'react';
import Image from 'next/image';
import { User, ArrowRight, Star, Clock } from 'lucide-react';
import CTAButton from './CTAButton';

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar?: string;
    role?: string;
  };
  image: string;
  category: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  rating?: number;
  students?: number;
  badge?: string;
}

interface CourseCardProps {
  course: Course;
  onCtaClick?: (id: string) => void;
  ctaText?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  onCtaClick, 
  ctaText = "View Course" 
}) => {
  const {
    title,
    description,
    instructor,
    image,
    category,
    difficulty,
    duration,
    rating,
    students,
    badge
  } = course;

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-2xl border border-base-content/5 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={`Thumbnail for ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-md rounded-lg">
            {category}
          </span>
          {badge && (
            <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-secondary/90 backdrop-blur-md rounded-lg">
              {badge}
            </div>
          )}
          {difficulty && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-neutral/80 backdrop-blur-md rounded-lg">
              {difficulty}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating & Duration */}
        <div className="flex items-center justify-between mb-3 text-xs text-base-content/50">
          {rating && (
            <div className="flex items-center gap-1 text-accent font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{duration}</span>
            </div>
          )}
          {students && (
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{students.toLocaleString()} students</span>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="mb-2 text-lg font-bold leading-snug text-base-content group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mb-6 text-sm text-base-content/60 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Instructor & CTA Footer */}
        <div className="mt-auto pt-4 border-t border-base-content/5 flex flex-col gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex-shrink-0 w-9 h-9 overflow-hidden rounded-full bg-primary/10 border border-primary/20">
              {instructor.avatar ? (
                <Image 
                  src={instructor.avatar} 
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-primary">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-base-content truncate">{instructor.name}</p>
              <p className="text-[11px] text-base-content/40 truncate">{instructor.role || 'Instructor'}</p>
            </div>
          </div>

          <CTAButton 
            text={ctaText}
            onClick={() => onCtaClick?.(course.id)}
            variant="primary"
            className="w-full"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
            size="md"
          />
        </div>
      </div>
    </article>
  );
};

export default CourseCard;

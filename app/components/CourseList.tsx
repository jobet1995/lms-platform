'use client';

import React from 'react';
import CourseCard, { Course } from './CourseCard';

interface CourseListProps {
  courses: Course[];
  layout?: 'grid' | 'list';
  onCourseClick?: (id: string) => void;
  className?: string;
}

const CourseList: React.FC<CourseListProps> = ({ 
  courses, 
  layout = 'grid', 
  onCourseClick,
  className = "" 
}) => {
  if (!courses || courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 rounded-full bg-base-content/5 p-6 text-base-content/20">
          <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-base-content">No courses found</h3>
        <p className="mt-2 text-base-content/60">We couldn&apos;t find any courses matching your criteria.</p>
      </div>
    );
  }

  if (layout === 'list') {
    return (
      <div className={`flex flex-col gap-6 ${className}`}>
        {courses.map((course) => (
          <div key={course.id} className="w-full max-w-4xl mx-auto">
            <CourseCard 
              course={course} 
              onCtaClick={onCourseClick}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className={`grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {courses.map((course) => (
        <div key={course.id} className="flex h-full">
          <CourseCard 
            course={course} 
            onCtaClick={onCourseClick}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseList;

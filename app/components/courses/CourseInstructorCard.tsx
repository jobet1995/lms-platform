'use client';

import React from 'react';
import Image from 'next/image';
import { User, Star, Users, BookOpen } from 'lucide-react';

export interface InstructorInfo {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
  rating?: number;
  students?: number;
  courses?: number;
}

interface CourseInstructorCardProps {
  instructor: InstructorInfo;
  className?: string;
}

const CourseInstructorCard: React.FC<CourseInstructorCardProps> = ({
  instructor,
  className = '',
}) => {
  return (
    <div className={`rounded-2xl border border-base-content/8 bg-base-100 p-6 ${className}`}>
      <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/40 mb-4">
        Your Instructor
      </h3>

      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-primary/10 border-2 border-primary/20 shadow-md">
          {instructor.avatar ? (
            <Image
              src={instructor.avatar}
              alt={instructor.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-primary">
              <User className="h-8 w-8" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-base-content">{instructor.name}</h4>
          <p className="text-sm text-primary font-medium">{instructor.role}</p>

          {/* Mini stats */}
          <div className="flex flex-wrap gap-3 mt-3">
            {instructor.rating && (
              <span className="flex items-center gap-1 text-xs text-base-content/60 font-medium">
                <Star className="h-3.5 w-3.5 text-accent fill-current" />
                {instructor.rating.toFixed(1)} rating
              </span>
            )}
            {instructor.students && (
              <span className="flex items-center gap-1 text-xs text-base-content/60 font-medium">
                <Users className="h-3.5 w-3.5 text-primary" />
                {instructor.students.toLocaleString()} students
              </span>
            )}
            {instructor.courses && (
              <span className="flex items-center gap-1 text-xs text-base-content/60 font-medium">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                {instructor.courses} courses
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      {instructor.bio && (
        <p className="mt-4 text-sm text-base-content/60 leading-relaxed border-t border-base-content/8 pt-4">
          {instructor.bio}
        </p>
      )}
    </div>
  );
};

export default CourseInstructorCard;

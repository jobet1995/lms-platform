'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseList from '../CourseList';
import { Course } from '../CourseCard';
import SectionTitle from '../SectionTitle';

import { ALL_COURSES } from '@/lib/data/mock';

const defaultCourses = ALL_COURSES.slice(0, 4);

interface CoursesSectionProps {
  title?: string;
  subtitle?: string;
  tag?: string;
  courses?: Course[];
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
  title = "Explore Our Popular Courses",
  subtitle = "Choose from over 500+ high-quality courses designed by industry experts to help you master new skills.",
  tag = "Top Rated",
  courses = defaultCourses
}) => {
  return (
    <section id="courses" className="py-24 sm:py-32 bg-base-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          tag={tag}
          alignment="center"
        />
        <CourseList courses={courses} layout="grid" className="lg:grid-cols-4 xl:grid-cols-4" />

        {/* Footer CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-2 text-lg font-bold text-primary transition-all hover:gap-4">
            Browse all courses
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

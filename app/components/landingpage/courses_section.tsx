'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseList from '../CourseList';
import { Course } from '../CourseCard';
import SectionTitle from '../SectionTitle';

const defaultCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development with Next.js 14',
    description: 'Master the latest features of Next.js 14, including Server Components, Server Actions, and the App Router. Build high-performance applications.',
    category: 'Development',
    instructor: {
      name: 'Alex Rivers',
      role: 'Senior Web Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'
    },
    rating: 4.9,
    students: 1250,
    duration: '12h 30m',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    badge: 'Bestseller',
    difficulty: 'Advanced'
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass 2026',
    description: 'Learn to create stunning user interfaces and seamless user experiences. From wireframing to high-fidelity prototyping with Figma.',
    category: 'Design',
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Product Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    rating: 4.8,
    students: 840,
    duration: '10h 15m',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Intermediate'
  },
  {
    id: '3',
    title: 'Data Science & Machine Learning Bootcamp',
    description: 'Dive deep into data analysis, visualization, and predictive modeling. Learn Python, Pandas, and Scikit-Learn from scratch.',
    category: 'Data Science',
    instructor: {
      name: 'Dr. Michael Chen',
      role: 'Data Scientist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    rating: 4.7,
    students: 2100,
    duration: '24h 45m',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    badge: 'New',
    difficulty: 'Beginner'
  },
  {
    id: '4',
    title: 'Full-Stack Cybersecurity Mastery',
    description: 'Learn the fundamentals of network security, ethical hacking, and secure application development. Protect your data from modern threats.',
    category: 'Cybersecurity',
    instructor: {
      name: 'James Wilson',
      role: 'Security Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    rating: 4.8,
    students: 1560,
    duration: '18h 20m',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Intermediate'
  }
];

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

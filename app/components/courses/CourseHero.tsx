'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Play, Star, BookOpen, Users } from 'lucide-react';

interface CourseHeroProps {
  courseId: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty?: string;
  badge?: string;
  rating?: number;
  students?: number;
  totalLessons?: number;
  isEnrolled?: boolean;
  onEnroll?: () => void;
}

const CourseHero: React.FC<CourseHeroProps> = ({
  courseId,
  title,
  description,
  image,
  category,
  difficulty,
  badge,
  rating,
  students,
  totalLessons,
  isEnrolled = false,
  onEnroll,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral/95 via-neutral to-primary/40 text-white">
      {/* BG image blurred */}
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover opacity-20 blur-sm scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral/95 via-neutral/85 to-neutral/60" />
      </div>

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
        {/* Back link */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Left: info */}
          <div>
            {/* Badges row */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-primary/80 text-white rounded-full">
                {category}
              </span>
              {difficulty && (
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/10 text-white/80 rounded-full border border-white/20">
                  {difficulty}
                </span>
              )}
              {badge && (
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-secondary/80 text-white rounded-full">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              {title}
            </h1>
            <p className="text-base text-white/65 leading-relaxed max-w-xl mb-7">
              {description}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-5 mb-8 text-sm">
              {rating && (
                <div className="flex items-center gap-1.5 text-accent font-bold">
                  <Star className="h-4 w-4 fill-current" />
                  {rating.toFixed(1)}
                </div>
              )}
              {students && (
                <div className="flex items-center gap-1.5 text-white/60">
                  <Users className="h-4 w-4" />
                  {students.toLocaleString()} students
                </div>
              )}
              {totalLessons && (
                <div className="flex items-center gap-1.5 text-white/60">
                  <BookOpen className="h-4 w-4" />
                  {totalLessons} lessons
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {isEnrolled ? (
                <Link
                  href={`/courses/${courseId}/learn/lesson-1`}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-focus transition-all hover:-translate-y-0.5"
                >
                  <Play className="h-4 w-4 fill-white" />
                  Continue Learning
                </Link>
              ) : (
                <button
                  onClick={onEnroll}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-focus transition-all hover:-translate-y-0.5"
                >
                  Enroll Free
                </button>
              )}
              <Link
                href={`/courses/${courseId}/learn/lesson-1`}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Play className="h-4 w-4" />
                Preview
              </Link>
            </div>
          </div>

          {/* Right: Thumbnail card */}
          <div className="hidden lg:block">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image src={image} alt={title} fill className="object-cover" />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-primary shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;

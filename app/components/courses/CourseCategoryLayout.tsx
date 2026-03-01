import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Star, Clock, BookOpen } from 'lucide-react';
import { Course } from '../CourseCard';

interface CourseCategoryLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;       // e.g. "from-emerald-500/20 to-primary/10"
  badgeClass: string;        // e.g. "bg-emerald-500/10 text-emerald-600"
  skills: string[];
  courses: Course[];
  categorySlug: string;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  Beginner: 'text-emerald-600 bg-emerald-500/10',
  Intermediate: 'text-amber-600 bg-amber-500/10',
  Advanced: 'text-rose-600 bg-rose-500/10',
};

const BADGE_COLOR: Record<string, string> = {
  Bestseller: 'bg-amber-400 text-black',
  Popular: 'bg-primary text-white',
  New: 'bg-emerald-500 text-white',
  Hot: 'bg-rose-500 text-white',
};

import CTAButton from '../CTAButton';

export function CourseCategoryLayout({
  title, subtitle, description, icon,
  accentClass, badgeClass, skills, courses, categorySlug,
}: CourseCategoryLayoutProps) {
  return (
    <main className="">
      {/* ── Hero ── */}
      <section className={`relative overflow-hidden min-h-screen flex items-center -mt-20 pt-20 bg-gradient-to-br ${accentClass}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.05)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.1)_0%,rgba(10,10,10,0)_100%)]" />
        <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-[40%] [mask-image:radial-gradient(closest-side,white,transparent)]">
          <svg viewBox="0 0 1024 1024" className="h-full w-full stroke-primary/10 dark:stroke-primary/20 [mask-image:radial-gradient(40%_40%_at_50%_50%,white,transparent)]" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="none" strokeWidth="2" />
            <circle cx="512" cy="512" r="412" fill="none" strokeWidth="2" />
            <circle cx="512" cy="512" r="312" fill="none" strokeWidth="2" />
          </svg>
        </div>

        <div className="container px-6 mx-auto sm:px-14 lg:-mt-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Content Column */}
            <div className="flex-1 text-center lg:text-left">
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 ${badgeClass} shadow-sm`}>
                {icon} {subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content leading-[1.15] mb-6 tracking-tight">
                <span className="block">{title.split(' ').slice(0, -2).join(' ')}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">
                  {title.split(' ').slice(-2).join(' ')}
                </span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-base-content/60 text-lg sm:text-xl leading-relaxed mb-10">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CTAButton 
                  text="Get Started Free" 
                  href="/signup" 
                  variant="primary" 
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                />
                <CTAButton 
                  text="Browse All" 
                  href={`/courses?category=${encodeURIComponent(categorySlug)}`} 
                  variant="outline" 
                  size="lg"
                  icon={<BookOpen className="h-5 w-5" />}
                  iconPosition="left"
                />
              </div>
            </div>

            {/* Skills Column */}
            <div className="w-full lg:w-72 flex-shrink-0">
              <div className="p-6 rounded-[2rem] border border-base-content/10 bg-base-100/40 backdrop-blur-xl shadow-2xl relative group">
                {/* Decorative blob */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 mb-5 pl-1">Skills you&apos;ll gain</p>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((s) => (
                    <span 
                      key={s} 
                      className="px-3.5 py-2 rounded-xl bg-base-100/80 border border-base-content/5 text-xs font-bold text-base-content/70 hover:border-primary/30 hover:text-primary transition-all cursor-default hover:-translate-y-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-base-content/8 bg-base-100">
        <div className="container mx-auto px-6 sm:px-14 py-5 flex flex-wrap gap-8 justify-center sm:justify-start">
          {[
            { icon: <BookOpen className="h-4 w-4 text-primary" />, label: `${courses.length} courses` },
            { icon: <Users className="h-4 w-4 text-secondary" />, label: `${courses.reduce((a: number, c: Course) => a + (c.students ?? 0), 0).toLocaleString()} students` },
            { icon: <Star className="h-4 w-4 text-amber-400" />, label: `${(courses.reduce((a: number, c: Course) => a + (c.rating ?? 0), 0) / (courses.length || 1)).toFixed(1)} avg rating` },
            { icon: <Clock className="h-4 w-4 text-base-content/40" />, label: 'Self-paced' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-sm font-semibold text-base-content/60">
              {s.icon} {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section className="container mx-auto px-6 sm:px-14 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold text-base-content">{courses.length} Courses in {subtitle}</h2>
          <Link href={`/courses?category=${encodeURIComponent(categorySlug)}`} className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group flex flex-col rounded-2xl border border-base-content/8 bg-base-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {course.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-extrabold px-2.5 py-1 rounded-full ${BADGE_COLOR[course.badge] ?? 'bg-primary text-white'}`}>
                    {course.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full ${DIFFICULTY_COLOR[course.difficulty ?? 'Beginner']}`}>
                  {course.difficulty}
                </span>
                <h3 className="font-extrabold text-base-content leading-snug group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-base-content/55 flex-1 leading-relaxed line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="w-7 h-7 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-base-content truncate">{course.instructor.name}</p>
                    <p className="text-[11px] text-base-content/40 truncate">{course.instructor.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-base-content/8 mt-1">
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" /> {course.rating ?? 0}
                    <span className="text-base-content/40 font-normal ml-1">({(course.students ?? 0).toLocaleString()})</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-base-content/40">
                    <Clock className="h-3.5 w-3.5" /> {course.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

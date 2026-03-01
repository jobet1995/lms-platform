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

export function CourseCategoryLayout({
  title, subtitle, description, icon,
  accentClass, badgeClass, skills, courses, categorySlug,
}: CourseCategoryLayoutProps) {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className={`bg-gradient-to-br ${accentClass} py-20 px-6 sm:px-14`}>
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 ${badgeClass}`}>
              {icon} {subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight mb-4">{title}</h1>
            <p className="text-base-content/60 text-lg leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-focus transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/courses?category=${encodeURIComponent(categorySlug)}`}
                className="px-6 py-3 rounded-xl border border-base-content/15 font-semibold text-base-content/70 hover:text-primary hover:border-primary/30 transition-all flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" /> Browse All
              </Link>
            </div>
          </div>

          {/* Skills chips */}
          <div className="flex-shrink-0 w-full md:w-64">
            <p className="text-xs font-bold uppercase tracking-widest text-base-content/40 mb-3">Skills you&apos;ll gain</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-base-100/80 border border-base-content/10 text-xs font-semibold text-base-content/70">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-base-content/8 bg-base-100">
        <div className="container mx-auto px-6 sm:px-14 py-5 flex flex-wrap gap-8 justify-center sm:justify-start">
          {[
            { icon: <BookOpen className="h-4 w-4 text-primary" />, label: `${courses.length} courses` },
            { icon: <Users className="h-4 w-4 text-secondary" />, label: `${courses.reduce((a, c) => a + (c.students ?? 0), 0).toLocaleString()} students` },
            { icon: <Star className="h-4 w-4 text-amber-400" />, label: `${(courses.reduce((a, c) => a + (c.rating ?? 0), 0) / (courses.length || 1)).toFixed(1)} avg rating` },
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

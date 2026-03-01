'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Play, Star, BookOpen, Users, ShieldCheck } from 'lucide-react';
import CTAButton from '../CTAButton';

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
    <section className="relative overflow-hidden min-h-screen flex items-center -mt-20 pt-20 bg-neutral text-white">
      {/* Background image blurred with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={image} 
          alt="" 
          fill 
          className="object-cover opacity-20 blur-sm scale-110" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral/95 via-neutral/80 to-primary/20 dark:to-primary/10" />
      </div>

      {/* Decorative SVG Patterns */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-[50%] [mask-image:radial-gradient(closest-side,white,transparent)] opacity-30">
        <svg viewBox="0 0 1024 1024" className="h-full w-full stroke-white/10" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="none" strokeWidth="2" />
          <circle cx="512" cy="512" r="412" fill="none" strokeWidth="2" />
          <circle cx="512" cy="512" r="312" fill="none" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:-mt-12">
        {/* Back Link */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-all mb-10 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Explor Courses
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Content Column */}
          <div className="flex-1 lg:max-w-2xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] bg-primary/20 text-primary-content border border-primary/30 rounded-full backdrop-blur-md">
                {category}
              </span>
              {difficulty && (
                <span className="px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] bg-white/5 text-white/70 border border-white/10 rounded-full backdrop-blur-md">
                  {difficulty}
                </span>
              )}
              {badge && (
                <span className="px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.15em] bg-secondary/20 text-secondary-content border border-secondary/30 rounded-full backdrop-blur-md animate-pulse">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 tracking-tight">
              <span className="block">{title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x underline decoration-primary/30 decoration-4 underline-offset-8">
                {title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10">
              {description}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 py-6 border-y border-white/5">
              {rating && (
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-1.5 text-amber-400 font-black text-lg">
                    <Star className="h-5 w-5 fill-current" />
                    {rating.toFixed(1)}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Avg Rating</div>
                </div>
              )}
              {students && (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/90 font-black text-lg">
                    <Users className="h-5 w-5 text-secondary" />
                    {(students / 1000).toFixed(1)}k
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Students</div>
                </div>
              )}
              {totalLessons && (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/90 font-black text-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {totalLessons}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Lessons</div>
                </div>
              )}
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-white/90 font-black text-lg">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    Life
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">Access</div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              {isEnrolled ? (
                <CTAButton 
                  text="Continue Learning" 
                  href={`/courses/${courseId}/learn/lesson-1`}
                  variant="primary" 
                  size="lg"
                  icon={<Play className="h-5 w-5 fill-current" />}
                />
              ) : (
                <CTAButton 
                  text="Enroll for Free" 
                  onClick={onEnroll}
                  variant="primary" 
                  size="xl"
                  icon={<ArrowLeft className="h-5 w-5 rotate-180" />}
                />
              )}
              <CTAButton 
                text="Watch Preview" 
                href={`/courses/${courseId}/learn/lesson-1`}
                variant="outline" 
                size="lg"
                icon={<Play className="h-5 w-5" />}
                iconPosition="left"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              />
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 w-full lg:max-w-md">
            <div className="relative group">
               {/* Decorative blobs */}
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700" />
               
               {/* Card Frame */}
               <div className="relative p-3 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] transition-all duration-500 group-hover:scale-[1.03] group-hover:bg-white/10">
                 <div className="relative overflow-hidden rounded-[1.8rem] aspect-square lg:aspect-[4/5]">
                   <Image 
                     src={image} 
                     alt={title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-white/95 text-primary flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                        <Play className="h-7 w-7 fill-current ml-1" />
                      </div>
                   </div>
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

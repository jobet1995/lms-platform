'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle2, Users, BookOpen } from 'lucide-react';
import CTAButton from '../CTAButton';

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Unlock Your Potential with ElevateLMS",
  subtitle = "The world's most advanced free learning platform. Master your craft with high-quality courses from industry experts, at absolutely no cost.",
  primaryCTA = "Join for Free",
  secondaryCTA = "View Courses",
  imageSrc = "https://images.unsplash.com/photo-1760009229725-7ef1990e585f?auto=format&fit=crop&q=80&w=3840" // Premium 4K Unsplash Illustration
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.1)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.15)_0%,rgba(10,10,10,0)_100%)]" />
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-[60%] [mask-image:radial-gradient(closest-side,white,transparent)] sm:-translate-y-[50%] lg:-translate-y-[40%]">
        <svg viewBox="0 0 1024 1024" className="h-full w-full stroke-primary/10 dark:stroke-primary/20 [mask-image:radial-gradient(40%_40%_at_50%_50%,white,transparent)]" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="none" strokeWidth="2" />
          <circle cx="512" cy="512" r="412" fill="none" strokeWidth="2" />
          <circle cx="512" cy="512" r="312" fill="none" strokeWidth="2" />
          <circle cx="512" cy="512" r="212" fill="none" strokeWidth="2" />
        </svg>
      </div>

      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          
          {/* Content Column */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-base-content leading-tight">
                {title.split(' ').slice(0, -1).join(' ')}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">
                {title.split(' ').slice(-1)}
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-base-content/70 lg:mx-0 sm:text-xl">
              {subtitle}
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <CTAButton 
                text={primaryCTA} 
                href="/signup" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              />
              
              <CTAButton 
                text={secondaryCTA} 
                href="#courses" 
                variant="outline" 
                size="lg"
                icon={<Play className="w-5 h-5 fill-current" />}
                iconPosition="left"
              />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 lg:max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-1 text-2xl font-bold text-base-content">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  25k+
                </div>
                <div className="text-sm text-base-content/60">Active Students</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-1 text-2xl font-bold text-base-content">
                  <BookOpen className="w-5 h-5 mr-2 text-secondary" />
                  500+
                </div>
                <div className="text-sm text-base-content/60">Expert Courses</div>
              </div>
              <div className="hidden flex-col items-center lg:items-start sm:flex">
                <div className="flex items-center mb-1 text-2xl font-bold text-base-content">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-accent" />
                  99%
                </div>
                <div className="text-sm text-base-content/60">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="relative group">
              {/* Decorative blobs */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
              
              {/* Glassmorphism card for the image */}
              <div className="relative p-4 overflow-hidden border bg-base-100/40 backdrop-blur-xl border-white/10 dark:border-white/5 shadow-2xl rounded-[2.5rem] transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <div className="relative overflow-hidden rounded-[2rem] aspect-video">
                  {/* Using a relative path for the image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                  <Image
                    src={imageSrc}
                    alt="LMS Hero Illustration"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl border border-white/20 animate-float delay-150 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Safe & Secure</div>
                    <div className="text-xs text-base-content/60">Verified Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 lg:mt-32">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 rounded-full border-base-content/20 flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

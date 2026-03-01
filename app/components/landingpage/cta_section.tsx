'use client';

import React from 'react';
import CTAButton from '../CTAButton';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  background?: 'gradient' | 'glass' | 'dark';
  className?: string;
  id?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  className = "",
  id = "get-started"
}) => {
  const bgStyles = {
    gradient: "bg-gradient-to-br from-primary via-indigo-600 to-secondary text-white",
    glass: "bg-base-100 border border-base-content/5 shadow-2xl backdrop-blur-xl relative overflow-hidden",
    dark: "bg-neutral text-neutral-content"
  };

  return (
    <section id={id} className={`py-16 sm:py-24 px-6 sm:px-10 lg:px-16 ${className}`}>
      <div className={`max-w-[1400px] mx-auto rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-2xl shadow-primary/20 ${bgStyles[background]} relative overflow-hidden group`}>
        
        {/* Background Decorative Elements */}
        {background === 'gradient' && (
          <>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
          </>
        )}

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content Column */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl opacity-80 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Actions Column */}
          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <CTAButton 
              text={primaryCTA.text}
              href={primaryCTA.href}
              variant="secondary"
              size="xl"
              className="shadow-2xl shadow-black/20 hover:scale-105 active:scale-95"
              icon={<ArrowRight className="w-6 h-6" />}
            />
            {secondaryCTA && (
              <CTAButton 
                text={secondaryCTA.text}
                href={secondaryCTA.href}
                variant="outline"
                size="xl"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white"
              />
            )}
          </div>

        </div>

        {/* Bottom Badge for social proof or trust */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="text-sm font-bold tracking-widest uppercase">Open Source & Free</div>
           <div className="text-sm font-bold tracking-widest uppercase">Unlimited Access</div>
           <div className="text-sm font-bold tracking-widest uppercase">Join and Learn</div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;

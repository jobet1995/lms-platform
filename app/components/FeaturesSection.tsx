'use client';

import React from 'react';

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  tag?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'subtle' | 'gradient';
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  tag,
  children,
  id = "features",
  className = "",
  background = 'default'
}) => {
  const bgClasses = {
    default: 'bg-base-100',
    subtle: 'bg-base-200/50',
    gradient: 'bg-base-100 relative overflow-hidden'
  };

  return (
    <section 
      id={id} 
      className={`${bgClasses[background]} py-24 sm:py-32 ${className}`}
    >
      {/* Optional Background Pattern/Gradient for 'gradient' mode */}
      {background === 'gradient' && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.05)_0%,rgba(255,255,255,0)_100%)] dark:bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.1)_0%,rgba(10,10,10,0)_100%)]" />
      )}
      
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header Heading */}
        <div className="mb-16 flex flex-col items-center text-center lg:mb-24">
          {tag && (
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold tracking-wider text-primary uppercase">
              {tag}
            </span>
          )}
          <h2 className="mb-6 text-4xl font-black tracking-tight text-base-content sm:text-5xl lg:text-7xl max-w-4xl leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl text-lg text-base-content/60 font-medium leading-relaxed sm:text-xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Area - Typically a FeatureList or Grid of FeatureCards */}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

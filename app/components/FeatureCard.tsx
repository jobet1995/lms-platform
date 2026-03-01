'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success';
}

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

const colorMap = {
  primary: 'bg-primary/10 text-primary ring-primary/20',
  secondary: 'bg-secondary/10 text-secondary ring-secondary/20',
  accent: 'bg-accent/10 text-accent ring-accent/20',
  info: 'bg-info/10 text-info ring-info/20',
  success: 'bg-success/10 text-success ring-success/20',
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className = "" }) => {
  const { title, description, icon: Icon, badge, color = 'primary' } = feature;

  return (
    <div 
      className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-base-content/5 bg-base-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${className}`}
    >
      {/* Decorative Gradient Background (Hover only) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[2.5rem]" />

      {/* Icon Container */}
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-inset transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${colorMap[color]}`}>
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-bold tracking-tight text-base-content group-hover:text-primary transition-colors">
            {title}
          </h3>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-base-content/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-base-content/60 ring-1 ring-inset ring-base-content/10">
              {badge}
            </span>
          )}
        </div>
        <p className="text-base leading-7 text-base-content/60 group-hover:text-base-content/80 transition-colors">
          {description}
        </p>
      </div>

      {/* Accessibility Link (Optional - if the whole card should be clickable, wrap in a link) */}
      <span className="sr-only">Feature: {title}</span>
    </div>
  );
};

export default FeatureCard;

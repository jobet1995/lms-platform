'use client';

import React from 'react';
import FeatureCard, { Feature } from './FeatureCard';

interface FeatureListProps {
  features: Feature[];
  columns?: 3 | 4;
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ 
  features, 
  columns = 3, 
  className = "" 
}) => {
  const gridColsClass = columns === 4 
    ? "lg:grid-cols-4" 
    : "lg:grid-cols-3";

  return (
    <div 
      className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${gridColsClass} ${className}`}
    >
      {features.map((feature, index) => (
        <div 
          key={feature.id}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <FeatureCard feature={feature} className="h-full" />
        </div>
      ))}
    </div>
  );
};

export default FeatureList;

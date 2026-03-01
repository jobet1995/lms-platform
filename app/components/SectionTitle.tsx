'use client';

import React from 'react';

interface SectionTitleProps {
  /**
   * The main headline text for the section.
   */
  title: string;
  /**
   * Optional supporting text below the main title.
   */
  subtitle?: string;
  /**
   * Optional small tag displayed above the title.
   */
  tag?: string;
  /**
   * Horizontal alignment of the text.
   * @default 'center'
   */
  alignment?: 'left' | 'center' | 'right';
  /**
   * Whether to show a subtle accent line under the title.
   * @default true
   */
  showAccent?: boolean;
  /**
   * Additional CSS classes for the container.
   */
  className?: string;
  /**
   * Unique ID for accessibility and linking.
   */
  id?: string;
}

/**
 * A reusable SectionTitle component for the LMS landing page.
 * Features responsive typography and customizable alignment.
 */
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  tag,
  alignment = 'center',
  showAccent = true,
  className = "",
  id,
}) => {
  // Alignment mapping
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div 
      id={id}
      className={`flex flex-col mb-16 lg:mb-24 ${alignmentStyles[alignment]} ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      {tag && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold tracking-wider text-primary uppercase">
          {tag}
        </span>
      )}

      <h2 
        id={id ? `${id}-title` : undefined}
        className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-tight"
      >
        {title}
      </h2>
      
      {showAccent && (
        <div 
          className="mt-6 h-1.5 w-24 rounded-full bg-primary" 
          aria-hidden="true"
        />
      )}

      {subtitle && (
        <p className="mt-8 max-w-2xl text-lg text-base-content/60 font-medium leading-relaxed sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

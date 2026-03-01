'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  /**
   * Whether to apply a hover animation (scale and increased shadow).
   * @default true
   */
  hoverEffect?: boolean;
  /**
   * Whether to show a shadow by default.
   * @default true
   */
  shadow?: boolean;
  /**
   * Whether to have rounded corners.
   * @default true
   */
  rounded?: boolean;
  /**
   * Additional CSS classes for customization.
   */
  className?: string;
}

/**
 * A reusable Card component designed for LMS landing pages.
 * Supports features like hover animations, custom shadows, and responsiveness.
 */
const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  shadow = true,
  rounded = true,
  className = "",
}) => {
  // Base classes for the card
  const baseStyles = "bg-base-100 dark:bg-neutral-900/50 backdrop-blur-sm border border-base-200 dark:border-neutral-800 transition-all duration-300 p-6";
  
  // Dynamic classes based on props
  const shadowStyles = shadow ? "shadow-md hover:shadow-xl" : "";
  const roundedStyles = rounded ? "rounded-2xl" : "";
  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-1 hover:scale-[1.02] cursor-pointer" 
    : "";

  return (
    <div 
      className={`
        ${baseStyles} 
        ${shadowStyles} 
        ${roundedStyles} 
        ${hoverStyles} 
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Card;

'use client';

import React from 'react';

interface IconProps {
  /**
   * The icon element to display (e.g., <Star />, <BookOpen />, or an SVG).
   */
  icon: React.ReactNode;
  /**
   * Predefined size variants or a custom numeric size in pixels.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | number;
  /**
   * Text color class or value (e.g., 'text-primary', '#ff0000').
   * @default 'currentColor'
   */
  color?: string;
  /**
   * Whether to apply a subtle hover scaling and rotation effect.
   * @default false
   */
  hoverEffect?: boolean;
  /**
   * Label for screen readers. If provided, the icon is treated as an image.
   * If omitted, the icon is hidden from screen readers (aria-hidden).
   */
  ariaLabel?: string;
  /**
   * Additional CSS classes for the container.
   */
  className?: string;
}

/**
 * A reusable Icon wrapper component for the LMS landing page.
 * Standardizes icon sizing, coloring, and accessibility across the platform.
 */
const Icon: React.FC<IconProps> = ({
  icon,
  size = 'md',
  color = 'currentColor',
  hoverEffect = false,
  ariaLabel,
  className = "",
}) => {
  // Mapping predefined sizes to pixel values
  const sizeMap = {
    sm: 18,
    md: 24,
    lg: 32,
  };

  const currentSize = typeof size === 'number' ? size : sizeMap[size];

  const hoverStyles = hoverEffect 
    ? "hover:scale-110 hover:rotate-3 transition-transform duration-300 cursor-default" 
    : "";

  const colorClasses = color.startsWith('text-') ? color : "";

  return (
    <span 
      className={`inline-flex items-center justify-center shrink-0 leading-none ${hoverStyles} ${colorClasses} ${className}`.trim()}
      style={{ 
        width: currentSize, 
        height: currentSize, 
        color: !color.startsWith('text-') ? color : undefined 
      }}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      {/* 
        We use React.cloneElement to inject the size and strokeWidth 
        directly into Lucide-style icons for perfect scaling.
      */}
      {React.isValidElement(icon) 
        ? React.cloneElement(icon as React.ReactElement<{ size?: number; strokeWidth?: number; className?: string }>, { 
            size: currentSize,
            // Consistency across the UI: slightly bolder icons look premium
            strokeWidth: 2, 
            className: "block max-w-full max-h-full" 
          }) 
        : icon}
    </span>
  );
};

export default Icon;

'use client';

import React from 'react';

/**
 * Valid color variants for the Badge component.
 * These map to theme-aware background and text colors.
 */
type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'ghost';

interface BadgeProps {
  /**
   * The text to display inside the badge.
   */
  text: string;
  /**
   * The color theme variant for the badge.
   * @default 'primary'
   */
  variant?: BadgeVariant;
  /**
   * The size of the badge.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether to apply a subtle hover animation.
   * @default false
   */
  hoverEffect?: boolean;
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
  /**
   * Optional icon to display before the text.
   */
  icon?: React.ReactNode;
}

/**
 * A reusable Badge component for the LMS landing page.
 * Perfect for tags, status indicators, stats, or highlighting features.
 */
const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  hoverEffect = false,
  className = "",
  icon,
}) => {
  // Mapping size to Tailwind classes
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold",
    md: "px-3 py-1 text-xs font-bold",
    lg: "px-4 py-1.5 text-sm font-bold",
  };

  // Mapping variants to theme-aware Tailwind classes (DaisyUI compatible or custom)
  const variantStyles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    error: "bg-error/10 text-error border-error/20",
    ghost: "bg-base-200 text-base-content border-base-300",
  };

  const hoverStyles = hoverEffect 
    ? "hover:scale-105 hover:shadow-sm cursor-default active:scale-95" 
    : "";

  return (
    <span 
      className={`
        inline-flex items-center justify-center rounded-full border transition-all duration-200
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        ${hoverStyles} 
        ${className}
      `.trim()}
      role="status"
    >
      {icon && <span className="mr-1.5 opacity-80">{icon}</span>}
      {text}
    </span>
  );
};

export default Badge;

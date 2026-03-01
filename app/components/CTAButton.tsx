'use client';

import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  variant = 'primary',
  onClick,
  className = "",
  icon,
  iconPosition = 'right',
  ariaLabel,
  size = 'md',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg"
  };

  const variantStyles = {
    primary: "bg-primary text-primary-content hover:bg-primary-focus hover:shadow-xl hover:shadow-primary/30 focus:ring-primary",
    secondary: "bg-secondary text-secondary-content hover:bg-secondary-focus hover:shadow-xl hover:shadow-secondary/30 focus:ring-secondary",
    outline: "bg-transparent border-2 border-base-content/10 text-base-content hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus:ring-primary"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
      <span className="tracking-wide uppercase">{text}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const commonProps = {
    className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
    'aria-label': ariaLabel || text,
  };

  if (href) {
    if (href.startsWith('http') || href.startsWith('//')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} {...commonProps}>
      {content}
    </button>
  );
};

export default CTAButton;

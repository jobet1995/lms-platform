'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = "",
  type = 'button',
  disabled = false,
  ariaLabel,
  icon,
  iconPosition = 'right'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    primary: "bg-primary text-primary-content hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg active:scale-95",
    secondary: "bg-primary/10 text-primary hover:bg-primary/20 active:scale-98",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-content active:scale-95"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {text}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  const commonProps = {
    className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`,
    'aria-label': ariaLabel || text,
    onClick,
  };

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} {...commonProps}>
      {content}
    </button>
  );
};

export default Button;

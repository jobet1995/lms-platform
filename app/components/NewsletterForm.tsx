'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import CTAButton from './CTAButton';

interface NewsletterFormProps {
  className?: string;
  variant?: 'inline' | 'stacked';
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  className = "", 
  variant = 'inline' 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Newsletter error:', err);
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 px-6 py-4 bg-success/10 text-success rounded-2xl border border-success/20 animate-fade-in ${className}`}>
        <CheckCircle size={20} className="shrink-0" />
        <p className="text-sm font-bold">Successfully subscribed! Check your inbox soon.</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <form 
        onSubmit={handleSubmit} 
        className={`flex flex-col gap-3 ${variant === 'inline' ? 'sm:flex-row' : ''}`}
        noValidate
      >
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/40 group-focus-within:text-primary transition-colors">
            <Mail size={18} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full pl-11 pr-4 py-4 bg-base-100 border-2 rounded-2xl transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
              error ? 'border-error/50 focus:border-error' : 'border-base-content/5 focus:border-primary'
            }`}
            aria-label="Email address"
            aria-invalid={!!error}
            disabled={status === 'loading'}
          />
        </div>
        
        <CTAButton
          type="submit"
          text={status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          variant="primary"
          className={variant === 'inline' ? 'sm:w-auto min-w-[140px]' : 'w-full'}
          size="lg"
          disabled={status === 'loading'}
          icon={status === 'loading' ? <Loader2 className="animate-spin w-5 h-5" /> : undefined}
        />
      </form>

      {error && (
        <div className="flex items-center gap-2 mt-3 ml-1 text-xs text-error font-medium animate-shake">
          <AlertCircle size={14} />
          {error}
        </div>
      )}
      
      {status === 'error' && !error && (
        <div className="flex items-center gap-2 mt-3 ml-1 text-xs text-error font-medium animate-fade-in">
          <AlertCircle size={14} />
          Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;

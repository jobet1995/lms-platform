'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import CTAButton from './CTAButton';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center p-8 bg-success/10 rounded-3xl border border-success/20 animate-fade-in ${className}`}>
        <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-base-content mb-2">Message Sent!</h3>
        <p className="text-base-content/60 max-w-sm mb-8">
          Thank you for reaching out. Our team will get back to you as soon as possible.
        </p>
        <CTAButton 
          text="Send Another Message" 
          onClick={() => setStatus('idle')}
          variant="outline"
          size="md"
        />
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-6 ${className}`}
      noValidate
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold text-base-content/70 ml-1">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-5 py-4 bg-base-200 border-2 rounded-2xl transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                errors.name ? 'border-error/50 focus:border-error' : 'border-transparent focus:border-primary'
              }`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div id="name-error" className="flex items-center gap-1 mt-1.5 text-xs text-error font-medium animate-shake">
                <AlertCircle size={12} />
                {errors.name}
              </div>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-bold text-base-content/70 ml-1">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-5 py-4 bg-base-200 border-2 rounded-2xl transition-all focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                errors.email ? 'border-error/50 focus:border-error' : 'border-transparent focus:border-primary'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div id="email-error" className="flex items-center gap-1 mt-1.5 text-xs text-error font-medium animate-shake">
                <AlertCircle size={12} />
                {errors.email}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-base-content/70 ml-1">
          Your Message
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className={`w-full px-5 py-4 bg-base-200 border-2 rounded-2xl transition-all resize-none focus:outline-none focus:ring-4 focus:ring-primary/10 ${
              errors.message ? 'border-error/50 focus:border-error' : 'border-transparent focus:border-primary'
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <div id="message-error" className="flex items-center gap-1 mt-1.5 text-xs text-error font-medium animate-shake">
              <AlertCircle size={12} />
              {errors.message}
            </div>
          )}
        </div>
      </div>

      {/* Error Message for form-level errors */}
      {status === 'error' && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-center gap-3 text-error text-sm font-medium animate-fade-in">
          <AlertCircle size={18} />
          Failed to send message. Please try again later.
        </div>
      )}

      {/* Submit Button */}
      <CTAButton
        type="submit"
        text={status === 'loading' ? 'Sending...' : 'Send Message'}
        variant="primary"
        className="w-full sm:w-auto"
        size="lg"
        disabled={status === 'loading'}
        icon={status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
      />
    </form>
  );
};

export default ContactForm;

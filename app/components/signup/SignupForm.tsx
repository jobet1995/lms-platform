'use client';

import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Button from '../Button';

interface SignupFormProps {
  onSuccess?: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup logic
    if (onSuccess) {
      onSuccess();
    } else {
      window.location.href = '/courses';
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Full Name</label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-base-content/30" />
            <input
              required 
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jane Smith"
              className="input input-bordered w-full pl-10 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-base-content/30" />
            <input
              required 
              type="email" 
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="input input-bordered w-full pl-10 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-base-content/30" />
            <input
              required 
              type={show ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="At least 8 characters"
              minLength={8}
              className="input input-bordered w-full pl-10 pr-10 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button 
              type="button" 
              onClick={() => setShow(!show)} 
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-base-content transition-colors"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <p className="text-xs text-base-content/40 leading-relaxed">
          By signing up you agree to our{' '}
          <a href="#" className="text-primary hover:underline font-medium">Terms</a> and{' '}
          <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>.
        </p>

        <Button
          text="Create Free Account"
          type="submit"
          className="w-full mt-2"
          icon={<ArrowRight className="h-4 w-4" />}
          iconPosition="right"
        />
      </form>

      <div className="divider text-xs text-base-content/30 my-6 uppercase tracking-wider font-bold">or sign up with</div>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/15 text-sm font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all active:scale-95">
          <span className="text-lg">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/15 text-sm font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all active:scale-95">
          <span className="text-lg">GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SignupForm;

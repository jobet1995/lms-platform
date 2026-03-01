'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import LoginForm from '../components/login/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <div className="w-full max-w-md">
        {/* Brand */}
        <Link href="/" className="flex items-center justify-center gap-2 group mb-8">
          <div className="bg-primary text-primary-content p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
            <BookOpen size={22} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-extrabold text-base-content">
            Elevate<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LMS</span>
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-3xl border border-base-content/10 bg-base-100 shadow-2xl p-8 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-base-content mb-2 text-center">Welcome back</h1>
            <p className="text-sm text-base-content/50 text-center">Sign in to continue your learning journey</p>
          </div>

          <LoginForm />
        </div>

        <p className="text-center text-sm text-base-content/50 mt-8">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary font-bold hover:underline transition-all">Sign up free</Link>
        </p>
      </div>
    </main>
  );
}

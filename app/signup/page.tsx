'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import SignupForm from '../components/signup/SignupForm';

const PERKS = [
  'Access 500+ courses completely free',
  'Earn shareable certificates',
  'Track your learning progress',
  'Join 120,000+ learners worldwide',
];

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-10 items-center">

        {/* Left: Pitch */}
        <div className="hidden lg:flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="bg-primary text-primary-content p-2.5 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <BookOpen size={22} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-extrabold text-base-content">
              Elevate<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LMS</span>
            </span>
          </Link>
          <h2 className="text-4xl font-extrabold text-base-content leading-tight">
            Start learning for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">free</span> today
          </h2>
          <p className="text-lg text-base-content/60 leading-relaxed">
            Join over 120,000 students who have already leveled up their skills with ElevateLMS — no credit card required.
          </p>
          <ul className="space-y-4 mt-2">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                </div>
                <span className="text-base font-semibold text-base-content/75">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Form */}
        <div>
          {/* Mobile brand */}
          <div className="lg:hidden mb-10">
            <Link href="/" className="flex items-center justify-center gap-2 group">
              <div className="bg-primary text-primary-content p-2.5 rounded-xl">
                <BookOpen size={22} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold text-base-content">
                Elevate<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LMS</span>
              </span>
            </Link>
          </div>

          <div className="rounded-3xl border border-base-content/10 bg-base-100 shadow-2xl p-8 sm:p-10">
            <div className="mb-8 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-base-content mb-2">Create your account</h1>
              <p className="text-sm text-base-content/50">Free forever. No credit card needed.</p>
            </div>

            <SignupForm />

            <p className="text-center text-sm text-base-content/50 mt-8">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-bold hover:underline transition-all">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

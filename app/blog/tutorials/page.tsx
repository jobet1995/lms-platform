import React from 'react';
import Link from 'next/link';
import { Code2, ArrowRight, Clock } from 'lucide-react';

const TUTORIALS = [
  {
    id: '1', title: 'Building a Full-Stack App with Next.js 16 & Prisma',
    excerpt: 'Step-by-step guide to wiring up Next.js 16 server actions with Prisma ORM and PostgreSQL.',
    readTime: '12 min', date: 'Feb 28, 2026', level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Alex Rivers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '6', title: 'Authentication in Next.js 16: NextAuth vs Clerk vs Auth.js',
    excerpt: 'An honest comparison of top auth solutions with benchmarks and recommendation.',
    readTime: '14 min', date: 'Feb 10, 2026', level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    author: { name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '3', title: 'Mastering Tailwind CSS v4: New Utilities & Best Practices',
    excerpt: 'Config changes, new utilities, and performance wins in the latest release.',
    readTime: '10 min', date: 'Feb 20, 2026', level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  },
];

const LEVEL_COLOR: Record<string, string> = {
  Beginner: 'bg-emerald-500/10 text-emerald-600',
  Intermediate: 'bg-amber-500/10 text-amber-600',
  Advanced: 'bg-rose-500/10 text-rose-600',
};

export default function TutorialsPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-emerald-500/10 via-base-100 to-primary/10 py-20 px-6 sm:px-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-bold mb-4">
          <Code2 className="h-4 w-4" /> Tutorials
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-4">
          Step-by-step
          <span className="bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent"> developer guides</span>
        </h1>
        <p className="text-base-content/60 max-w-lg mx-auto">Practical, hands-on tutorials written by engineers with real production experience.</p>
      </section>

      <div className="container mx-auto px-6 sm:px-12 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TUTORIALS.map((t) => (
            <Link key={t.id} href={`/blog/${t.id}`} className="group rounded-2xl border border-base-content/8 bg-base-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all flex flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.image} alt={t.title} className="h-44 w-full object-cover" />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${LEVEL_COLOR[t.level]}`}>
                    {t.level}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-base-content/40 ml-auto">
                    <Clock className="h-3 w-3" />{t.readTime}
                  </span>
                </div>
                <h2 className="font-extrabold text-base-content group-hover:text-primary transition-colors leading-snug">{t.title}</h2>
                <p className="text-sm text-base-content/60 flex-1">{t.excerpt}</p>
                <div className="flex items-center gap-2 mt-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.author.avatar} alt={t.author.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs text-base-content/50">{t.author.name} · {t.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-base-content/15 font-semibold text-base-content/70 hover:border-primary/30 hover:text-primary transition-all">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}

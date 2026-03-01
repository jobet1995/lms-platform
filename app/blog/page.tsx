import React from 'react';
import Link from 'next/link';
import { PenLine, Code2, Lightbulb, Youtube, Clock, ArrowRight, Tag } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Tutorial' | 'Tech' | 'Video' | 'News';
  readTime: string;
  date: string;
  image: string;
  author: { name: string; avatar: string };
  tag?: string;
}

const ARTICLES: Article[] = [
  {
    id: '1', category: 'Tutorial',
    title: 'Building a Full-Stack App with Next.js 16 & Prisma',
    excerpt: 'Step-by-step guide to wiring up Next.js 16 server actions with Prisma ORM and a PostgreSQL database.',
    readTime: '12 min', date: 'Feb 28, 2026',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Alex Rivers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
    tag: 'Featured',
  },
  {
    id: '2', category: 'Tech',
    title: 'The State of AI in 2026: What Developers Need to Know',
    excerpt: 'A practical overview of LLMs, vector databases, and AI-assisted development tools shaping the industry.',
    readTime: '8 min', date: 'Feb 25, 2026',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Dr. Michael Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '3', category: 'Tutorial',
    title: 'Mastering Tailwind CSS v4: New Utilities & Best Practices',
    excerpt: 'Everything you need to know about the latest Tailwind CSS release — config changes, new utilities, and performance wins.',
    readTime: '10 min', date: 'Feb 20, 2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '4', category: 'Video',
    title: 'React 19 Deep Dive: Server Actions & Concurrent Features',
    excerpt: 'Watch and follow along as we explore React 19\'s most exciting additions with real-world examples.',
    readTime: '25 min', date: 'Feb 18, 2026',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Alex Rivers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '5', category: 'Tech',
    title: 'Why Every Developer Should Learn TypeScript in 2026',
    excerpt: 'The business case and technical benefits for adopting TypeScript across your entire codebase.',
    readTime: '6 min', date: 'Feb 15, 2026',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Priya Nair', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '6', category: 'Tutorial',
    title: 'Authentication in Next.js 16: NextAuth vs Clerk vs Auth.js',
    excerpt: 'An honest comparison of the top auth solutions for Next.js apps — with benchmarks and recommendation.',
    readTime: '14 min', date: 'Feb 10, 2026',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    author: { name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  },
];

const CATEGORY_META = {
  Tutorial: { icon: <Code2 className="h-4 w-4" />, color: 'text-emerald-600 bg-emerald-500/10' },
  Tech:     { icon: <Lightbulb className="h-4 w-4" />, color: 'text-amber-600 bg-amber-500/10' },
  Video:    { icon: <Youtube className="h-4 w-4" />, color: 'text-rose-600 bg-rose-500/10' },
  News:     { icon: <PenLine className="h-4 w-4" />, color: 'text-primary bg-primary/10' },
};

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const meta = CATEGORY_META[article.category];
  return (
    <Link href={`/blog/${article.id}`} className={`group flex flex-col rounded-2xl border border-base-content/8 bg-base-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all ${featured ? 'lg:flex-row' : ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.image}
        alt={article.title}
        className={`object-cover ${featured ? 'lg:w-1/2 h-56 lg:h-auto' : 'h-48'} w-full`}
      />
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${meta.color}`}>
            {meta.icon} {article.category}
          </span>
          {article.tag && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-white">
              <Tag className="h-3 w-3" /> {article.tag}
            </span>
          )}
        </div>
        <h3 className={`font-extrabold text-base-content group-hover:text-primary transition-colors leading-snug ${featured ? 'text-xl' : 'text-base'}`}>
          {article.title}
        </h3>
        <p className="text-sm text-base-content/60 leading-relaxed flex-1">{article.excerpt}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.author.avatar} alt={article.author.name} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-xs font-medium text-base-content/60">{article.author.name}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-base-content/40">
            <Clock className="h-3 w-3" /> {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-20 px-6 sm:px-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
          <PenLine className="h-4 w-4" /> ElevateLMS Blog
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-4">
          Insights, tutorials
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> & ideas</span>
        </h1>
        <p className="text-base-content/60 max-w-xl mx-auto text-lg">
          Fresh articles from our team of industry experts. Level up your skills every week.
        </p>
      </section>

      {/* Category tabs */}
      <div className="sticky top-20 z-10 bg-base-100/95 backdrop-blur-md border-b border-base-content/8">
        <div className="container mx-auto px-6 sm:px-12 flex gap-1 py-3 overflow-x-auto">
          {[
            { label: 'All', href: '/blog' },
            { label: 'Tutorials', href: '/blog/tutorials', icon: <Code2 className="h-3.5 w-3.5" /> },
            { label: 'Tech Insights', href: '/blog/tech', icon: <Lightbulb className="h-3.5 w-3.5" /> },
            { label: 'Video Lessons', href: '/blog/videos', icon: <Youtube className="h-3.5 w-3.5" /> },
          ].map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-base-content/60 hover:bg-base-content/5 hover:text-primary transition-all whitespace-nowrap"
            >
              {tab.icon}{tab.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 py-12">
        {/* Featured */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-base-content mb-5">Featured Article</h2>
          <ArticleCard article={featured} featured />
        </section>

        {/* Latest */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-base-content">Latest Articles</h2>
            <Link href="/blog/tutorials" className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
              All Tutorials <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      </div>
    </main>
  );
}

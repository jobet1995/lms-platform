import React from 'react';
import Link from 'next/link';
import { Lightbulb, Clock, ArrowRight } from 'lucide-react';

const TECH_ARTICLES = [
  {
    id: '2', title: 'The State of AI in 2026: What Developers Need to Know',
    excerpt: 'LLMs, vector databases, and AI-assisted development tools shaping the industry.',
    readTime: '8 min', date: 'Feb 25, 2026',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Dr. Michael Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: '5', title: 'Why Every Developer Should Learn TypeScript in 2026',
    excerpt: 'The business case and technical benefits for adopting TypeScript across your entire codebase.',
    readTime: '6 min', date: 'Feb 15, 2026',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Priya Nair', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200' },
  },
];

export default function TechInsightsPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-amber-500/10 via-base-100 to-primary/10 py-20 px-6 sm:px-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-sm font-bold mb-4">
          <Lightbulb className="h-4 w-4" /> Tech Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-4">
          Trends & deep dives
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> in technology</span>
        </h1>
        <p className="text-base-content/60 max-w-lg mx-auto">Industry analysis and opinion pieces from engineers in the field.</p>
      </section>

      <div className="container mx-auto px-6 sm:px-12 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {TECH_ARTICLES.map((a) => (
            <Link key={a.id} href={`/blog/${a.id}`} className="group rounded-2xl border border-base-content/8 bg-base-100 overflow-hidden hover:shadow-xl transition-all flex flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={a.title} className="h-52 w-full object-cover" />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className="font-extrabold text-lg text-base-content group-hover:text-primary transition-colors leading-snug">{a.title}</h2>
                <p className="text-sm text-base-content/60 flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.author.avatar} alt={a.author.name} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs text-base-content/50">{a.author.name} · {a.date}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-base-content/40"><Clock className="h-3 w-3" />{a.readTime}</span>
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

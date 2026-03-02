import React from 'react';
import Link from 'next/link';
import { PenLine, Code2, Lightbulb, Youtube, Clock, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import { ARTICLES, type Article } from '@/lib/data/mock';

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
      <Image
        src={article.image}
        alt={article.title}
        width={featured ? 800 : 400}
        height={featured ? 450 : 250}
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
            <Image src={article.author.avatar} alt={article.author.name} width={28} height={28} className="w-7 h-7 rounded-full object-cover" />
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
    <main>
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

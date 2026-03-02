import Link from 'next/link';
import { Code2, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import { ARTICLES } from '@/lib/data/mock';

const TUTORIALS = ARTICLES.filter(a => a.category === 'Tutorial');

const LEVEL_COLOR: Record<string, string> = {
  Beginner: 'bg-emerald-500/10 text-emerald-600',
  Intermediate: 'bg-amber-500/10 text-amber-600',
  Advanced: 'bg-rose-500/10 text-rose-600',
};

export default function TutorialsPage() {
  return (
    <main>
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
              <Image src={t.image} alt={t.title} width={800} height={450} className="h-44 w-full object-cover" />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${LEVEL_COLOR[t.level || 'Beginner']}`}>
                    {t.level || 'Beginner'}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-base-content/40 ml-auto">
                    <Clock className="h-3 w-3" />{t.readTime}
                  </span>
                </div>
                <h2 className="font-extrabold text-base-content group-hover:text-primary transition-colors leading-snug">{t.title}</h2>
                <p className="text-sm text-base-content/60 flex-1">{t.excerpt}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Image src={t.author.avatar} alt={t.author.name} width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
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

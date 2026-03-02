import Link from 'next/link';
import { Youtube, Play, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { ARTICLES } from '@/lib/data/mock';

const VIDEOS = ARTICLES.filter(a => a.category === 'Video');

export default function VideoLessonsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-rose-500/10 via-base-100 to-primary/10 py-20 px-6 sm:px-12 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-600 text-sm font-bold mb-4">
          <Youtube className="h-4 w-4" /> Video Lessons
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-4">
          Free video content
          <span className="bg-gradient-to-r from-rose-500 to-primary bg-clip-text text-transparent"> & screencasts</span>
        </h1>
        <p className="text-base-content/60 max-w-lg mx-auto">Watch and code along with our expert instructors — no account needed.</p>
      </section>

      <div className="container mx-auto px-6 sm:px-12 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v) => (
            <Link key={v.id} href={`/blog/${v.id}`} className="group rounded-2xl border border-base-content/8 bg-base-100 overflow-hidden hover:shadow-xl transition-all flex flex-col">
              <div className="relative">
                <Image src={v.image} alt={v.title} width={800} height={450} className="h-48 w-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    <Play className="h-7 w-7 text-primary fill-current ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <Clock className="h-3 w-3" />{v.readTime}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h2 className="font-extrabold text-base-content group-hover:text-primary transition-colors leading-snug">{v.title}</h2>
                <p className="text-sm text-base-content/60 flex-1">{v.excerpt}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Image src={v.author.avatar} alt={v.author.name} width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs text-base-content/50">{v.author.name} · {v.date}</span>
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

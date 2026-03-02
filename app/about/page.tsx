import React from 'react';
import Link from 'next/link';
import {
  Target, Users, Star, Briefcase,
  BookOpen, GraduationCap, Globe, Heart,
  CheckCircle2, ArrowRight, Mail,
} from 'lucide-react';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const TEAM: TeamMember[] = [
  {
    name: 'Alex Rivers',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    bio: '10+ years building scalable web platforms. Previously at Vercel and Netlify.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    bio: 'Award-winning product designer. Passionate about intuitive learning experiences.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of Curriculum',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    bio: 'PhD in Computer Science. Built AI courses used by 50k+ students worldwide.',
  },
  {
    name: 'Priya Nair',
    role: 'Lead Engineer',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
    bio: 'Full-stack expert with deep cloud architecture background (AWS, GCP).',
  },
  {
    name: 'James Wilson',
    role: 'Community Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    bio: 'Cybersecurity enthusiast turned community builder with 8 years of teaching.',
  },
  {
    name: 'Emma Larson',
    role: 'Content Strategist',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200',
    bio: 'Crafts engaging learning paths. Formerly at Coursera and edX.',
  },
];

const STATS = [
  { icon: <GraduationCap className="h-6 w-6 text-primary" />, value: '120K+', label: 'Students Enrolled' },
  { icon: <BookOpen className="h-6 w-6 text-secondary" />, value: '500+', label: 'Courses Available' },
  { icon: <Globe className="h-6 w-6 text-primary" />, value: '80+', label: 'Countries Reached' },
  { icon: <Star className="h-6 w-6 text-amber-400" />, value: '4.8★', label: 'Average Rating' },
];

const TESTIMONIALS = [
  {
    quote: 'ElevateLMS changed the trajectory of my career. The courses are practical, well-structured, and constantly updated.',
    name: 'Daniel Park',
    role: 'Software Engineer at Google',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    quote: 'I went from zero to landing my first dev job in 6 months, all through ElevateLMS. Worth every minute.',
    name: 'Aisha Obi',
    role: 'Junior Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
  {
    quote: 'Best platform for learning cloud and DevOps. The instructors are industry experts and the community is amazing.',
    name: 'Leo Martinez',
    role: 'DevOps Engineer at AWS',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
  },
];

const PRESS = [
  { name: 'TechCrunch', logo: '⚡' },
  { name: 'Forbes', logo: '📰' },
  { name: 'Product Hunt', logo: '🐱' },
  { name: 'Wired', logo: '🔌' },
  { name: 'Hacker News', logo: '🧡' },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main>
      {/* ── Mission Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 min-h-[calc(100vh-80px)] flex items-center justify-center px-6 sm:px-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto -mt-16 sm:-mt-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <Target className="h-4 w-4" /> Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight mb-6">
            Democratizing world-class
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> education</span>
          </h1>
          <p className="text-base-content/60 text-lg leading-relaxed mb-8">
            ElevateLMS was built on a simple belief — great education shouldn&apos;t be gatekept by geography or cost.
            We partner with industry experts to deliver practical, career-changing courses, completely free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/courses"
              className="px-7 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-focus transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" /> Browse Courses
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl border border-base-content/15 text-base-content/70 font-semibold hover:border-primary/30 hover:text-primary transition-all flex items-center gap-2"
            >
              <Mail className="h-4 w-4" /> Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-base-content/8 bg-base-100">
        <div className="container mx-auto px-6 sm:px-12 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              {s.icon}
              <p className="text-2xl font-extrabold text-base-content">{s.value}</p>
              <p className="text-sm text-base-content/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="container mx-auto px-6 sm:px-12 py-20">
        <h2 className="text-3xl font-extrabold text-base-content mb-2 text-center">What we stand for</h2>
        <p className="text-center text-base-content/50 mb-12">The principles that guide every decision we make</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Heart className="h-5 w-5 text-rose-500" />, title: 'Free Forever', body: 'Core learning content will always be 100% free. No paywalls, no surprise charges.' },
            { icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />, title: 'Expert-Led', body: 'Every course is built by practitioners with real-world experience in their field.' },
            { icon: <Globe className="h-5 w-5 text-sky-500" />, title: 'Globally Accessible', body: 'Full multi-language support and offline download options for learners everywhere.' },
            { icon: <Users className="h-5 w-5 text-primary" />, title: 'Community Driven', body: 'Peer forums, study groups, and mentorship programs built into the platform.' },
            { icon: <Star className="h-5 w-5 text-amber-400" />, title: 'Always Current', body: 'Content is reviewed quarterly and updated to reflect the latest industry standards.' },
            { icon: <GraduationCap className="h-5 w-5 text-secondary" />, title: 'Certified Growth', body: 'Shareable certificates recognized by companies worldwide upon course completion.' },
          ].map((v) => (
            <div key={v.title} className="flex gap-4 p-5 rounded-2xl border border-base-content/8 bg-base-100 hover:border-primary/20 hover:shadow-lg transition-all">
              <div className="p-3 rounded-xl bg-base-content/5 flex-shrink-0">{v.icon}</div>
              <div>
                <h3 className="font-bold text-base-content mb-1">{v.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="bg-base-200/40 py-20">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="text-3xl font-extrabold text-base-content mb-2 text-center">Meet the team</h2>
          <p className="text-center text-base-content/50 mb-12">The humans building the future of learning</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="flex gap-4 p-5 rounded-2xl bg-base-100 border border-base-content/8 hover:shadow-xl transition-all">
                <Image src={m.avatar} alt={m.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/20" />
                <div>
                  <p className="font-bold text-base-content">{m.name}</p>
                  <p className="text-xs text-primary font-semibold mb-2">{m.role}</p>
                  <p className="text-sm text-base-content/60 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="container mx-auto px-6 sm:px-12 py-20">
        <h2 className="text-3xl font-extrabold text-base-content mb-2 text-center">What students say</h2>
        <p className="text-center text-base-content/50 mb-12">Real stories from real learners</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col gap-4 p-6 rounded-2xl bg-base-100 border border-base-content/8 shadow-sm hover:shadow-lg transition-all">
              <p className="text-sm text-base-content/75 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto">
                <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm text-base-content">{t.name}</p>
                  <p className="text-xs text-base-content/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Press ── */}
      <section id="press" className="border-t border-base-content/8 bg-base-100 py-14">
        <div className="container mx-auto px-6 sm:px-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-base-content/40 mb-8">As seen in</p>
          <div className="flex flex-wrap justify-center gap-8">
            {PRESS.map((p) => (
              <div key={p.name} className="flex items-center gap-2 text-base-content/40 hover:text-base-content transition-colors">
                <span className="text-2xl">{p.logo}</span>
                <span className="font-extrabold text-lg tracking-tight">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Careers ── */}
      <section id="careers" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 sm:px-12 text-center max-w-2xl">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-base-content mb-3">Join our team</h2>
          <p className="text-base-content/60 mb-8 leading-relaxed">
            We&apos;re a remote-first team on a mission to make learning accessible. If you&apos;re passionate about education and technology, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-focus transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
          >
            View Open Roles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

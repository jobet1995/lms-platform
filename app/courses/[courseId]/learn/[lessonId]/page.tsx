'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import LessonVideoPlayer from '../../../../components/courses/LessonVideoPlayer';
import LessonSidebar from '../../../../components/courses/LessonSidebar';
import LessonContent from '../../../../components/courses/LessonContent';
import LessonNavBar from '../../../../components/courses/LessonNavBar';
import { Section } from '../../../../components/courses/CourseCurriculum';

// ─── Mock Data ────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  {
    id: 's1',
    title: 'Introduction & Setup',
    lessons: [
      { id: 'lesson-1', title: 'Welcome & Course Overview',                type: 'video', duration: '5m',  preview: true },
      { id: 'lesson-2', title: 'Setting Up Your Development Environment',  type: 'video', duration: '12m', preview: true },
      { id: 'lesson-3', title: 'Understanding the Next.js App Router',     type: 'text',  duration: '8m' },
    ],
  },
  {
    id: 's2',
    title: 'Server Components & Data Fetching',
    lessons: [
      { id: 'lesson-4', title: 'What are React Server Components?', type: 'video', duration: '18m' },
      { id: 'lesson-5', title: 'Data Fetching Patterns',            type: 'video', duration: '22m' },
      { id: 'lesson-6', title: 'Caching Strategies Deep Dive',      type: 'video', duration: '25m' },
      { id: 'lesson-7', title: 'Knowledge Check',                   type: 'quiz',  duration: '10m' },
    ],
  },
  {
    id: 's3',
    title: 'Authentication with NextAuth.js',
    lessons: [
      { id: 'lesson-8',  title: 'Setting Up NextAuth',              type: 'video', duration: '20m' },
      { id: 'lesson-9',  title: 'OAuth Providers (Google, GitHub)', type: 'video', duration: '15m' },
      { id: 'lesson-10', title: 'Protecting Routes & Middleware',   type: 'video', duration: '18m' },
    ],
  },
];

// Flat lesson list for prev/next navigation
const ALL_LESSONS = SECTIONS.flatMap((s) => s.lessons);

const LESSON_CONTENT: Record<string, { title: string; body: string; resources?: { title: string; url: string; type: 'pdf' | 'link' | 'file' }[] }> = {
  'lesson-1': {
    title: 'Welcome & Course Overview',
    body: `Welcome to Advanced Web Development with Next.js 14! In this course, you'll go from understanding core Next.js concepts to building production-grade applications.

Here's what we'll cover: Server Components, Server Actions, the App Router, authentication with NextAuth.js, database integration with Prisma, and deployment to Vercel.

By the end, you'll have built a full-stack LMS application — similar to the one you're studying in right now.`,
    resources: [
      { title: 'Course Slides (PDF)', url: '#', type: 'pdf' },
      { title: 'Next.js Official Docs', url: 'https://nextjs.org/docs', type: 'link' },
    ],
  },
  'lesson-2': {
    title: 'Setting Up Your Development Environment',
    body: `Before we start coding, let's make sure your environment is set up correctly.

You'll need Node.js 18 or higher installed. You can verify by running \`node -v\` in your terminal. We'll also be using VS Code as our editor — install the ESLint and Prettier extensions if you haven't already.

Create a new Next.js 14 project with: \`npx create-next-app@latest my-app\`. Select TypeScript, App Router, and Tailwind CSS when prompted.`,
    resources: [
      { title: 'Node.js Download', url: 'https://nodejs.org', type: 'link' },
      { title: 'VS Code Setup Guide', url: '#', type: 'pdf' },
    ],
  },
  'lesson-3': {
    title: 'Understanding the Next.js App Router',
    body: `The App Router is the new default in Next.js 13+ and is significantly different from the Pages Router.

With the App Router, every component is a Server Component by default. This means they render on the server and send plain HTML to the client, massively reducing your JavaScript bundle size.

To opt into client-side interactivity, add \`'use client'\` at the top of the file. Use this only when you need browser APIs, event handlers, or React state.`,
  },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = React.use(params);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(['lesson-1']));

  const currentIndex = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  const currentLesson = ALL_LESSONS[currentIndex] ?? ALL_LESSONS[0];
  const prevLesson = currentIndex > 0 ? ALL_LESSONS[currentIndex - 1] : undefined;
  const nextLesson = currentIndex < ALL_LESSONS.length - 1 ? ALL_LESSONS[currentIndex + 1] : undefined;

  const content = LESSON_CONTENT[currentLesson.id] ?? {
    title: currentLesson.title,
    body: 'Lesson content will be available once you enroll.',
  };

  const markComplete = () => {
    setCompletedIds((prev) => new Set([...prev, currentLesson.id]));
  };

  // Quiz redirect
  if (currentLesson.type === 'quiz') {
    return (
      <div className="flex items-center justify-center min-h-[60vh] flex-col gap-5">
        <div className="text-5xl">📝</div>
        <h2 className="text-2xl font-bold text-base-content">Ready for the Quiz?</h2>
        <p className="text-base-content/60 text-sm max-w-sm text-center">
          This lesson is a quiz. Test your knowledge on what you&apos;ve learned so far.
        </p>
        <Link
          href={`/courses/${courseId}/quiz/${currentLesson.id}`}
          className="mt-2 px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-focus transition-colors shadow-lg shadow-primary/20"
        >
          Start Quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-5rem)] overflow-hidden">
      {/* Sidebar */}
      <LessonSidebar
        sections={SECTIONS}
        courseId={courseId}
        activeLessonId={currentLesson.id}
        completedIds={completedIds}
      />

      {/* Main area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-base-100/90 backdrop-blur-md border-b border-base-content/8 shadow-sm">
          <Link
            href={`/courses/${courseId}`}
            className="flex items-center gap-2 text-sm font-medium text-base-content/50 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
          <span className="text-sm font-bold text-base-content/70 truncate max-w-sm hidden sm:block">
            {content.title}
          </span>
          <span className="text-xs text-base-content/40">
            Lesson {currentIndex + 1} of {ALL_LESSONS.length}
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-8">
          {/* Video Player */}
          {currentLesson.type === 'video' && (
            <div className="mb-8">
              <LessonVideoPlayer
                videoTitle={content.title}
                thumbnailUrl={`https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200`}
                isCompleted={completedIds.has(currentLesson.id)}
                onComplete={markComplete}
              />
            </div>
          )}

          {/* Lesson content */}
          <LessonContent
            title={content.title}
            body={content.body}
            resources={content.resources}
          />

          {/* Prev / Next navigation */}
          <LessonNavBar
            courseId={courseId}
            prev={prevLesson}
            next={nextLesson}
            isCompleted={completedIds.has(currentLesson.id)}
            onMarkComplete={markComplete}
          />
        </div>
      </main>
    </div>
  );
}

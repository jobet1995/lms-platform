'use client';

import React, { use, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

// Components
import CourseHero from '../../components/courses/CourseHero';
import CourseStats from '../../components/courses/CourseStats';
import CourseCurriculum, { Section } from '../../components/courses/CourseCurriculum';
import CourseInstructorCard, { InstructorInfo } from '../../components/courses/CourseInstructorCard';
import CourseTabBar, { CourseTab } from '../../components/courses/CourseTabBar';
import CourseList from '../../components/CourseList';
import { Course } from '../../components/CourseCard';

// ─── Mock Data ────────────────────────────────────────────────────────────────

const COURSE_DATA = {
  id: '1',
  title: 'Advanced Web Development with Next.js 14',
  description:
    'Master the latest features of Next.js 14, including Server Components, Server Actions, and the App Router. Build high-performance, production-ready web applications from the ground up.',
  category: 'Development',
  difficulty: 'Advanced' as const,
  badge: 'Bestseller',
  rating: 4.9,
  students: 1250,
  duration: '12h 30m',
  image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200',
  totalLessons: 38,
  reviewCount: 340,
  objectives: [
    'Build scalable apps with Next.js 14 App Router',
    'Implement Server Components and Server Actions',
    'Deploy to Vercel with CI/CD pipelines',
    'Integrate databases with Prisma & PostgreSQL',
    'Implement authentication with NextAuth.js',
    'Optimize performance with ISR, SSG & PPR',
  ],
  requirements: [
    'Basic knowledge of React and JavaScript',
    'Familiarity with HTML & CSS',
    'Node.js installed on your machine',
  ],
};

const INSTRUCTOR: InstructorInfo = {
  name: 'Alex Rivers',
  role: 'Senior Web Architect',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
  bio:
    'Alex has 10+ years building full-stack web applications at scale. He has worked with companies like Vercel and Netlify and is passionate about teaching modern web development practices.',
  rating: 4.9,
  students: 3800,
  courses: 6,
};

const SECTIONS: Section[] = [
  {
    id: 's1',
    title: 'Introduction & Setup',
    lessons: [
      { id: 'lesson-1', title: 'Welcome & Course Overview', type: 'video', duration: '5m', preview: true },
      { id: 'lesson-2', title: 'Setting Up Your Development Environment', type: 'video', duration: '12m', preview: true },
      { id: 'lesson-3', title: 'Understanding the Next.js App Router', type: 'text', duration: '8m' },
    ],
  },
  {
    id: 's2',
    title: 'Server Components & Data Fetching',
    lessons: [
      { id: 'lesson-4', title: 'What are React Server Components?', type: 'video', duration: '18m' },
      { id: 'lesson-5', title: 'Data Fetching Patterns', type: 'video', duration: '22m' },
      { id: 'lesson-6', title: 'Caching Strategies Deep Dive', type: 'video', duration: '25m' },
      { id: 'lesson-7', title: 'Knowledge Check', type: 'quiz', duration: '10m' },
    ],
  },
  {
    id: 's3',
    title: 'Authentication with NextAuth.js',
    lessons: [
      { id: 'lesson-8', title: 'Setting Up NextAuth', type: 'video', duration: '20m' },
      { id: 'lesson-9', title: 'OAuth Providers (Google, GitHub)', type: 'video', duration: '15m' },
      { id: 'lesson-10', title: 'Protecting Routes & Middleware', type: 'video', duration: '18m' },
    ],
  },
  {
    id: 's4',
    title: 'Database Integration with Prisma',
    lessons: [
      { id: 'lesson-11', title: 'Prisma Schema Design', type: 'text', duration: '12m' },
      { id: 'lesson-12', title: 'Migrations & Seeding', type: 'video', duration: '16m' },
      { id: 'lesson-13', title: 'Server Actions with Prisma', type: 'video', duration: '30m' },
    ],
  },
  {
    id: 's5',
    title: 'Deployment & Performance',
    lessons: [
      { id: 'lesson-14', title: 'Deploying to Vercel', type: 'video', duration: '14m' },
      { id: 'lesson-15', title: 'Performance Profiling & Optimization', type: 'video', duration: '28m' },
      { id: 'lesson-16', title: 'Final Project & Certificate', type: 'quiz', duration: '20m' },
    ],
  },
];

const RELATED_COURSES: Course[] = [
  {
    id: '5',
    title: 'Python for Beginners: Zero to Hero',
    description: 'Start your programming journey with Python.',
    category: 'Development',
    instructor: { name: 'Emma Larson', role: 'Software Engineer' },
    rating: 4.6, students: 3200, duration: '8h 10m',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
  },
  {
    id: '8',
    title: 'React Native: Build Mobile Apps Fast',
    description: 'Create production-ready iOS and Android apps with React Native.',
    category: 'Development',
    instructor: { name: 'Carlos Diaz', role: 'Mobile Developer' },
    rating: 4.7, students: 1340, duration: '14h 30m',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Intermediate',
  },
  {
    id: '7',
    title: 'Cloud Architecture with AWS & Terraform',
    description: 'Design and deploy scalable systems using AWS and Infrastructure-as-Code.',
    category: 'DevOps',
    instructor: { name: 'Priya Nair', role: 'Cloud Architect' },
    rating: 4.9, students: 720, duration: '22h 0m',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Advanced',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { courseId: _courseId } = use(params);
  const [activeTab, setActiveTab] = useState<CourseTab>('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);

  const { id, title, description, category, difficulty, badge, rating, students, duration, image, totalLessons, reviewCount, objectives, requirements } = COURSE_DATA;

  return (
    <>
      {/* Hero */}
      <CourseHero
        courseId={id}
        title={title}
        description={description}
        image={image}
        category={category}
        difficulty={difficulty}
        badge={badge}
        rating={rating}
        students={students}
        totalLessons={totalLessons}
        isEnrolled={isEnrolled}
        onEnroll={() => setIsEnrolled(true)}
      />

      {/* Stats bar */}
      <div className="border-b border-base-content/8 bg-base-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-4">
          <CourseStats
            students={students!}
            rating={rating!}
            reviewCount={reviewCount}
            lessons={totalLessons!}
            duration={duration}
          />
        </div>
      </div>

      {/* Tab bar */}
      <div className="sticky top-20 z-30 bg-base-100/90 backdrop-blur-md border-b border-base-content/8 shadow-sm">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <CourseTabBar active={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      {/* Tab content */}
      <main className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          
          {/* Main column */}
          <div>
            {activeTab === 'overview' && (
              <div className="space-y-10">
                {/* What you'll learn */}
                <section>
                  <h2 className="text-xl font-bold text-base-content mb-5">What You&apos;ll Learn</h2>
                  <div className="grid sm:grid-cols-2 gap-3 rounded-2xl border border-base-content/8 bg-base-100 p-6">
                    {objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-base-content/80">{obj}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Requirements */}
                <section>
                  <h2 className="text-xl font-bold text-base-content mb-5">Requirements</h2>
                  <ul className="space-y-2">
                    {requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-base-content/70">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/50 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Description */}
                <section>
                  <h2 className="text-xl font-bold text-base-content mb-3">About This Course</h2>
                  <p className="text-sm text-base-content/70 leading-relaxed">{description}</p>
                </section>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <CourseCurriculum
                sections={SECTIONS}
                courseId={id}
                isEnrolled={isEnrolled}
              />
            )}

            {activeTab === 'instructor' && (
              <CourseInstructorCard instructor={INSTRUCTOR} />
            )}

            {activeTab === 'reviews' && (
              <div className="flex flex-col items-center justify-center py-20 text-center text-base-content/40">
                <span className="text-6xl mb-4">⭐</span>
                <p className="text-lg font-bold text-base-content">Reviews coming soon</p>
                <p className="text-sm mt-2">Be the first to review this course after enrolling.</p>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:flex flex-col gap-5 sticky top-36">
            {/* Enroll card */}
            <div className="rounded-2xl border border-base-content/10 bg-base-100 shadow-xl p-6">
              <p className="text-3xl font-extrabold text-base-content mb-1">Free</p>
              <p className="text-xs text-base-content/40 mb-5">Full lifetime access</p>
              {isEnrolled ? (
                <a
                  href={`/courses/${id}/learn/lesson-1`}
                  className="block w-full text-center py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-focus transition-colors shadow-lg shadow-primary/20"
                >
                  Continue Learning
                </a>
              ) : (
                <button
                  onClick={() => setIsEnrolled(true)}
                  className="block w-full text-center py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-focus transition-colors shadow-lg shadow-primary/20"
                >
                  Enroll Now — It&apos;s Free
                </button>
              )}
              <ul className="mt-5 space-y-2 text-xs text-base-content/60">
                <li>✓ {totalLessons} lessons · {duration}</li>
                <li>✓ Certificate of completion</li>
                <li>✓ Downloadable resources</li>
                <li>✓ Access on mobile & desktop</li>
              </ul>
            </div>

            {/* Instructor mini */}
            <CourseInstructorCard instructor={INSTRUCTOR} />
          </aside>
        </div>

        {/* Related courses */}
        <section className="mt-20 pt-10 border-t border-base-content/8">
          <h2 className="text-2xl font-bold text-base-content mb-8">Related Courses</h2>
          <CourseList courses={RELATED_COURSES} layout="grid" className="md:grid-cols-3" />
        </section>
      </main>
    </>
  );
}

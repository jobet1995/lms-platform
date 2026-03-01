'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
// Shared course components
import CourseList from '../components/CourseList';
import { Course } from '../components/CourseCard';

// Page-specific components
import CourseSearch from '../components/courses/CourseSearch';
import CourseCategoryFilter, { Category } from '../components/courses/CourseCategoryFilter';
import CourseFilterSidebar, { FilterState } from '../components/courses/CourseFilterSidebar';
import CourseFilterDrawer from '../components/courses/CourseFilterDrawer';
import CourseSortDropdown, { SortOption } from '../components/courses/CourseSortDropdown';

// ─── Sample Data ──────────────────────────────────────────────────────────────

const ALL_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Web Development with Next.js 14',
    description: 'Master the latest features of Next.js 14, Server Components, Server Actions, and the App Router.',
    category: 'Development',
    instructor: { name: 'Alex Rivers', role: 'Senior Web Architect', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
    rating: 4.9, students: 1250, duration: '12h 30m',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    badge: 'Bestseller', difficulty: 'Advanced',
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass 2026',
    description: 'Create stunning user interfaces and seamless experiences. From wireframing to prototyping with Figma.',
    category: 'Design',
    instructor: { name: 'Sarah Jenkins', role: 'Product Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    rating: 4.8, students: 840, duration: '10h 15m',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    title: 'Data Science & Machine Learning Bootcamp',
    description: 'Dive deep into data analysis, visualization, and predictive modeling using Python, Pandas, and Scikit-Learn.',
    category: 'Data Science',
    instructor: { name: 'Dr. Michael Chen', role: 'Data Scientist', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
    rating: 4.7, students: 2100, duration: '24h 45m',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    badge: 'New', difficulty: 'Beginner',
  },
  {
    id: '4',
    title: 'Full-Stack Cybersecurity Mastery',
    description: 'Learn network security, ethical hacking, and secure application development to protect data from modern threats.',
    category: 'Cybersecurity',
    instructor: { name: 'James Wilson', role: 'Security Analyst', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    rating: 4.8, students: 1560, duration: '18h 20m',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Intermediate',
  },
  {
    id: '5',
    title: 'Python for Beginners: Zero to Hero',
    description: 'Start your programming journey with Python. Covers fundamentals, OOP, file handling, and mini projects.',
    category: 'Development',
    instructor: { name: 'Emma Larson', role: 'Software Engineer', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200' },
    rating: 4.6, students: 3200, duration: '8h 10m',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    badge: 'Popular', difficulty: 'Beginner',
  },
  {
    id: '6',
    title: 'Digital Marketing & Growth Hacking',
    description: 'Master SEO, paid ads, email marketing, and analytics funnels to grow your business online.',
    category: 'Marketing',
    instructor: { name: 'Rahul Sharma', role: 'Growth Marketer', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200' },
    rating: 4.5, students: 980, duration: '6h 50m',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Beginner',
  },
  {
    id: '7',
    title: 'Cloud Architecture with AWS & Terraform',
    description: 'Design and deploy scalable, fault-tolerant systems using AWS services and Infrastructure-as-Code.',
    category: 'DevOps',
    instructor: { name: 'Priya Nair', role: 'Cloud Architect', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200' },
    rating: 4.9, students: 720, duration: '22h 0m',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    badge: 'Hot', difficulty: 'Advanced',
  },
  {
    id: '8',
    title: 'React Native: Build Mobile Apps Fast',
    description: 'Create production-ready iOS and Android apps with React Native, Expo, and modern navigation patterns.',
    category: 'Development',
    instructor: { name: 'Carlos Diaz', role: 'Mobile Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    rating: 4.7, students: 1340, duration: '14h 30m',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    difficulty: 'Intermediate',
  },
];

const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Courses', count: ALL_COURSES.length },
  { id: 'Development', label: 'Development', count: ALL_COURSES.filter(c => c.category === 'Development').length },
  { id: 'Design', label: 'Design', count: ALL_COURSES.filter(c => c.category === 'Design').length },
  { id: 'Data Science', label: 'Data Science', count: ALL_COURSES.filter(c => c.category === 'Data Science').length },
  { id: 'Cybersecurity', label: 'Cybersecurity', count: ALL_COURSES.filter(c => c.category === 'Cybersecurity').length },
  { id: 'Marketing', label: 'Marketing', count: ALL_COURSES.filter(c => c.category === 'Marketing').length },
  { id: 'DevOps', label: 'DevOps', count: ALL_COURSES.filter(c => c.category === 'DevOps').length },
];

// ─── Duration helper ───────────────────────────────────────────────────────────

function parseDurationHours(d: string): number {
  const match = d.match(/(\d+)h/);
  return match ? parseInt(match[1]) : 0;
}

function durationInBucket(d: string, buckets: string[]): boolean {
  if (buckets.length === 0) return true;
  const h = parseDurationHours(d);
  return buckets.some((b) => {
    if (b === 'lt2') return h < 2;
    if (b === '2-5') return h >= 2 && h <= 5;
    if (b === '5-10') return h > 5 && h <= 10;
    if (b === 'gt10') return h > 10;
    return false;
  });
}

// ─── Default filter state ──────────────────────────────────────────────────────

const DEFAULT_FILTERS: FilterState = {
  difficulty: [],
  duration: [],
  minRating: null,
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category') ?? 'all';

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(() => urlCategory);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SortOption>('popular');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeFilterCount =
    filters.difficulty.length +
    filters.duration.length +
    (filters.minRating !== null ? 1 : 0);

  const filteredCourses = useMemo(() => {
    let result = ALL_COURSES;

    // Category
    if (category !== 'all') {
      result = result.filter((c) => c.category === category);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.instructor.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Difficulty
    if (filters.difficulty.length > 0) {
      result = result.filter(
        (c) => c.difficulty && filters.difficulty.includes(c.difficulty)
      );
    }

    // Duration
    if (filters.duration.length > 0) {
      result = result.filter(
        (c) => c.duration && durationInBucket(c.duration, filters.duration)
      );
    }

    // Rating
    if (filters.minRating !== null) {
      result = result.filter((c) => (c.rating ?? 0) >= filters.minRating!);
    }

    // Sort
    return [...result].sort((a, b) => {
      switch (sort) {
        case 'popular':    return (b.students ?? 0) - (a.students ?? 0);
        case 'rating':     return (b.rating ?? 0) - (a.rating ?? 0);
        case 'newest':     return parseInt(b.id) - parseInt(a.id);
        case 'title-asc':  return a.title.localeCompare(b.title);
        case 'title-desc': return b.title.localeCompare(a.title);
        default:           return 0;
      }
    });
  }, [search, category, filters, sort]);

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-secondary/80 py-20 sm:py-28">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-secondary/20 blur-2xl" />
        </div>

        <div className="relative container mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white backdrop-blur-sm border border-white/20">
            Course Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Expand Your{' '}
            <span className="underline decoration-white/50 decoration-wavy underline-offset-4">
              Knowledge
            </span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10">
            Browse 500+ expert-led courses across development, design, data science, and more — all completely free.
          </p>

          {/* Search bar in hero */}
          <div className="max-w-xl mx-auto">
            <CourseSearch
              value={search}
              onChange={setSearch}
              placeholder="Search courses, instructors, topics…"
              className="shadow-2xl shadow-black/20"
            />
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Category tabs */}
        <div className="mb-8">
          <CourseCategoryFilter
            categories={CATEGORIES}
            selected={category}
            onChange={setCategory}
          />
        </div>

        <div className="flex gap-8 items-start">
          {/* ── Sidebar (desktop) ──────────────────────── */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24">
            <div className="rounded-2xl border border-base-content/8 bg-base-100 p-5 shadow-sm">
              <CourseFilterSidebar
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                activeCount={activeFilterCount}
              />
            </div>
          </aside>

          {/* ── Results ────────────────────────────────── */}
          <section className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                {/* Mobile: filter trigger */}
                <button
                  id="mobile-filter-btn"
                  onClick={() => setDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-base-content/10 bg-base-100 text-sm font-semibold text-base-content/70 hover:border-primary/30 hover:text-primary shadow-sm transition-all"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-primary text-white">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <p className="text-sm text-base-content/50 font-medium">
                  <span className="font-bold text-base-content">{filteredCourses.length}</span> courses found
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CourseSortDropdown value={sort} onChange={setSort} />

                {/* Layout toggle */}
                <div className="flex items-center gap-1 p-1 rounded-xl border border-base-content/10 bg-base-100">
                  <button
                    id="layout-grid-btn"
                    onClick={() => setLayout('grid')}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-lg transition-colors ${layout === 'grid' ? 'bg-primary text-white shadow' : 'text-base-content/40 hover:text-base-content'}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    id="layout-list-btn"
                    onClick={() => setLayout('list')}
                    aria-label="List view"
                    className={`p-1.5 rounded-lg transition-colors ${layout === 'list' ? 'bg-primary text-white shadow' : 'text-base-content/40 hover:text-base-content'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {(activeFilterCount > 0 || search) && (
              <div className="flex flex-wrap gap-2 mb-5">
                {search && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    Search: &ldquo;{search}&rdquo;
                    <button onClick={() => setSearch('')} aria-label="Remove search" className="hover:opacity-70">✕</button>
                  </span>
                )}
                {filters.difficulty.map((d) => (
                  <span key={d} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {d}
                    <button onClick={() => setFilters(f => ({ ...f, difficulty: f.difficulty.filter(x => x !== d) }))} aria-label={`Remove ${d}`} className="hover:opacity-70">✕</button>
                  </span>
                ))}
                {filters.minRating !== null && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    ★ {filters.minRating}+
                    <button onClick={() => setFilters(f => ({ ...f, minRating: null }))} aria-label="Remove rating filter" className="hover:opacity-70">✕</button>
                  </span>
                )}
              </div>
            )}

            {/* Course list */}
            <CourseList
              courses={filteredCourses}
              layout={layout}
              className={layout === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : ''}
            />
          </section>
        </div>
      </main>

      {/* ── Mobile Filter Drawer ─────────────────────────────────── */}
      <CourseFilterDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={filters}
        onChange={setFilters}
        onReset={resetFilters}
        activeCount={activeFilterCount}
      />
    </>
  );
}

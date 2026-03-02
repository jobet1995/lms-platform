'use client';

import{ useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
// Shared course components
import CourseList from '../components/CourseList';

// Page-specific components
import CourseSearch from '../components/courses/CourseSearch';
import CourseCategoryFilter from '../components/courses/CourseCategoryFilter';
import CourseFilterSidebar, { FilterState } from '../components/courses/CourseFilterSidebar';
import CourseFilterDrawer from '../components/courses/CourseFilterDrawer';
import CourseSortDropdown, { SortOption } from '../components/courses/CourseSortDropdown';

// Data
import { ALL_COURSES, COURSE_CATEGORIES as CATEGORIES } from '@/lib/data/mock';
import { DEFAULT_FILTERS, durationInBucket } from '@/lib/utils/course-filters';

function CoursesPageContent() {
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

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/50 font-medium animate-pulse">Loading amazing courses...</p>
        </div>
      </div>
    }>
      <CoursesPageContent />
    </Suspense>
  );
}

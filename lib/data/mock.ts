/**
 * Shared mock data for courses and blog articles.
 * This file centralizes static data to keep component files clean.
 */

// ─── Course Types & Data ───────────────────────────────────────────────────

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  instructor: Instructor;
  rating: number;
  students: number;
  duration: string;
  image: string;
  badge?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface CourseCategory {
  id: string;
  label: string;
  count: number;
}

export const ALL_COURSES: Course[] = [
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

export const COURSE_CATEGORIES: CourseCategory[] = [
  { id: 'all', label: 'All Courses', count: ALL_COURSES.length },
  { id: 'Development', label: 'Development', count: ALL_COURSES.filter(c => c.category === 'Development').length },
  { id: 'Design', label: 'Design', count: ALL_COURSES.filter(c => c.category === 'Design').length },
  { id: 'Data Science', label: 'Data Science', count: ALL_COURSES.filter(c => c.category === 'Data Science').length },
  { id: 'Cybersecurity', label: 'Cybersecurity', count: ALL_COURSES.filter(c => c.category === 'Cybersecurity').length },
  { id: 'Marketing', label: 'Marketing', count: ALL_COURSES.filter(c => c.category === 'Marketing').length },
  { id: 'DevOps', label: 'DevOps', count: ALL_COURSES.filter(c => c.category === 'DevOps').length },
];

// ─── Blog Types & Data ─────────────────────────────────────────────────────

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Tutorial' | 'Tech' | 'Video' | 'News';
  readTime: string;
  date: string;
  image: string;
  author: { name: string; avatar: string };
  tag?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const ARTICLES: Article[] = [
  {
    id: '1', category: 'Tutorial',
    title: 'Building a Full-Stack App with Next.js 16 & Prisma',
    excerpt: 'Step-by-step guide to wiring up Next.js 16 server actions with Prisma ORM and a PostgreSQL database.',
    readTime: '12 min', date: 'Feb 28, 2026',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Alex Rivers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
    tag: 'Featured',
    level: 'Intermediate',
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
    level: 'Beginner',
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
    author: { name: 'Alex Rivers', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: 'v2', category: 'Video',
    title: 'Prisma ORM in 30 Minutes: Schema, Queries & Migrations',
    excerpt: 'A rapid-fire introduction to Prisma — from schema design to production-ready queries.',
    readTime: '32 min', date: 'Feb 5, 2026',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Priya Nair', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200' },
  },
  {
    id: 'v3', category: 'Video',
    title: 'TailwindCSS + DaisyUI: Build a Beautiful Dashboard',
    excerpt: 'Live coding session — build a stunning admin dashboard from scratch in under an hour.',
    readTime: '52 min', date: 'Jan 30, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
  },
];

// ─── Testimonial Types & Data ─────────────────────────────────────────────

export interface Testimonial {
  id: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: "ElevateLMS has completely transformed the way I learn. The interactive lessons and the support from the community are unparalleled. Within months, I've gone from absolute beginner to building full-stack apps.",
    authorName: "Sarah Miller",
    authorRole: "Software Engineer at TechFlow",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: '2',
    content: "The quality of the courses here is top-tier. I've taken several Next.js and Prisma courses, and the depth of knowledge provided by the instructors is better than anything I've seen on other platforms.",
    authorName: "Thomas Wright",
    authorRole: "Full-Stack Developer",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: '3',
    content: "As a student, the project-based approach helped me build a portfolio that got me hired before I even graduated. The progress tracking keeps me motivated to reach my goals every day.",
    authorName: "Elena Rodriguez",
    authorRole: "Frontend Developer",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 4.8
  }
];

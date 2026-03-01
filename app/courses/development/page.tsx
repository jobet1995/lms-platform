import React from 'react';
import { Code2 } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'Development');

export default function DevelopmentPage() {
  return (
    <CourseCategoryLayout
      title="Learn Web & Software Development"
      subtitle="Development"
      description="From frontend to backend, mobile to desktop — master the tools and frameworks powering modern software. Build real projects and launch your dev career."
      icon={<Code2 className="h-4 w-4" />}
      accentClass="from-emerald-500/15 via-base-100 to-primary/10"
      badgeClass="bg-emerald-500/10 text-emerald-700"
      categorySlug="Development"
      skills={['Next.js', 'React', 'Python', 'TypeScript', 'Node.js', 'REST APIs', 'React Native', 'Tailwind CSS']}
      courses={courses}
    />
  );
}

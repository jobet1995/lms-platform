import React from 'react';
import { Palette } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'Design');

export default function DesignPage() {
  return (
    <CourseCategoryLayout
      title="UI/UX Design & Visual Creativity"
      subtitle="Design"
      description="Create products people love. Master Figma, design systems, user research, and prototyping workflows used at top product companies worldwide."
      icon={<Palette className="h-4 w-4" />}
      accentClass="from-rose-500/15 via-base-100 to-secondary/10"
      badgeClass="bg-rose-500/10 text-rose-700"
      categorySlug="Design"
      skills={['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Wireframing', 'Typography', 'Color Theory']}
      courses={courses}
    />
  );
}

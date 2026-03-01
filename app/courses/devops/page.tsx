import React from 'react';
import { Cloud } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'DevOps');

export default function DevOpsPage() {
  return (
    <CourseCategoryLayout
      title="DevOps & Cloud Engineering"
      subtitle="DevOps & Cloud"
      description="Ship software faster with confidence. Learn CI/CD pipelines, container orchestration, cloud infrastructure, and site reliability engineering at scale."
      icon={<Cloud className="h-4 w-4" />}
      accentClass="from-sky-500/15 via-base-100 to-primary/10"
      badgeClass="bg-sky-500/10 text-sky-700"
      categorySlug="DevOps"
      skills={['AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Monitoring']}
      courses={courses}
    />
  );
}

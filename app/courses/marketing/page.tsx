import React from 'react';
import { TrendingUp } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'Marketing');

export default function MarketingPage() {
  return (
    <CourseCategoryLayout
      title="Digital Marketing & Growth"
      subtitle="Marketing"
      description="Grow any business online. Learn SEO, paid ads, content strategy, email marketing, analytics, and growth hacking from practitioners with proven results."
      icon={<TrendingUp className="h-4 w-4" />}
      accentClass="from-orange-500/15 via-base-100 to-secondary/10"
      badgeClass="bg-orange-500/10 text-orange-700"
      categorySlug="Marketing"
      skills={['SEO', 'Google Ads', 'Email Marketing', 'Analytics', 'Copywriting', 'Social Media', 'A/B Testing', 'Funnels']}
      courses={courses}
    />
  );
}

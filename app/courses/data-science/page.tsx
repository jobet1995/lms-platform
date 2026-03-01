import React from 'react';
import { Cpu } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'Data Science');

export default function DataSciencePage() {
  return (
    <CourseCategoryLayout
      title="Data Science & Artificial Intelligence"
      subtitle="Data Science & AI"
      description="Unlock the power of data. Learn machine learning, deep learning, neural networks, and analytics using Python, TensorFlow, and real-world datasets."
      icon={<Cpu className="h-4 w-4" />}
      accentClass="from-fuchsia-500/15 via-base-100 to-primary/10"
      badgeClass="bg-fuchsia-500/10 text-fuchsia-700"
      categorySlug="Data Science"
      skills={['Python', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Neural Networks', 'Data Visualization', 'SQL']}
      courses={courses}
    />
  );
}

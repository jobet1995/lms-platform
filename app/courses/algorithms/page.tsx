import React from 'react';
import { Terminal } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'Algorithms');

export default function AlgorithmsPage() {
  return (
    <CourseCategoryLayout
      title="Algorithms & Data Structures"
      subtitle="Algorithms & DS"
      description="Crack coding interviews and write faster, smarter code. Deep-dive into sorting, searching, graphs, trees, and dynamic programming patterns used at FAANG."
      icon={<Terminal className="h-4 w-4" />}
      accentClass="from-blue-500/15 via-base-100 to-primary/10"
      badgeClass="bg-blue-500/10 text-blue-700"
      categorySlug="Algorithms"
      skills={['Big O Notation', 'Sorting', 'Graphs', 'Trees', 'Dynamic Programming', 'BFS/DFS', 'Hash Tables', 'Recursion']}
      courses={courses}
    />
  );
}

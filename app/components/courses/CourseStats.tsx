'use client';

import React from 'react';
import { Users, Star, BookOpen, Clock, Award } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

interface CourseStatsProps {
  students: number;
  rating: number;
  reviewCount?: number;
  lessons: number;
  duration: string;
  certificate?: boolean;
  className?: string;
}

const CourseStats: React.FC<CourseStatsProps> = ({
  students,
  rating,
  reviewCount = 0,
  lessons,
  duration,
  certificate = true,
  className = '',
}) => {
  const stats: Stat[] = [
    {
      icon: <Star className="h-5 w-5" />,
      label: `${reviewCount.toLocaleString()} reviews`,
      value: rating.toFixed(1),
      highlight: true,
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: 'enrolled',
      value: students.toLocaleString(),
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: 'lessons',
      value: String(lessons),
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'total',
      value: duration,
    },
    ...(certificate
      ? [{ icon: <Award className="h-5 w-5" />, label: 'certificate', value: 'Included' }]
      : []),
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border ${
            s.highlight
              ? 'bg-accent/10 border-accent/20 text-accent'
              : 'bg-base-100 border-base-content/10 text-base-content/70'
          }`}
        >
          <span className={s.highlight ? 'text-accent' : 'text-primary/70'}>{s.icon}</span>
          <div className="leading-tight">
            <p className={`text-base font-bold ${s.highlight ? 'text-accent' : 'text-base-content'}`}>
              {s.value}
            </p>
            <p className="text-[11px] text-base-content/50 capitalize">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseStats;

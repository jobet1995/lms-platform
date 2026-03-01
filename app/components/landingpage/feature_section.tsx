'use client';

import React from 'react';
import { 
  Zap, 
  Target, 
  Users, 
  Award, 
  Smartphone, 
  ShieldCheck 
} from 'lucide-react';
import { Feature } from '../FeatureCard';
import FeatureList from '../FeatureList';
import FeaturesSection from '../FeaturesSection';

const features: Feature[] = [
  {
    id: '1',
    title: 'Interactive Lessons',
    description: 'Engage with dynamic content, quizzes, and code playgrounds that make learning active and memorable.',
    icon: Zap,
    badge: 'Popular',
    color: 'primary'
  },
  {
    id: '2',
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics, daily goals, and performance insights.',
    icon: Target,
    color: 'secondary'
  },
  {
    id: '3',
    title: 'Community Learning',
    description: 'Connect with thousands of developers, share projects, and learn together in real-time.',
    icon: Users,
    badge: 'Trending',
    color: 'accent'
  },
  {
    id: '4',
    title: 'Certified Courses',
    description: 'Gain industry-recognized certificates upon completion to showcase your skills to employers.',
    icon: Award,
    color: 'success'
  },
  {
    id: '5',
    title: 'Learning on the Go',
    description: 'Access your courses anywhere, anytime with our fully responsive and offline-capable platform.',
    icon: Smartphone,
    color: 'info'
  },
  {
    id: '6',
    title: 'Secure & Reliable',
    description: 'Your data and progress are always safe with our state-of-the-art encryption and cloud backups.',
    icon: ShieldCheck,
    color: 'success'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <FeaturesSection
      title="Everything you need to master your journey."
      subtitle="ElevateLMS is more than just a course platform. We provide the tools and community support to ensure your growth from beginner to expert."
      tag="Our Key Features"
      background="subtle"
    >
      <FeatureList features={features} columns={3} />
    </FeaturesSection>
  );
};

export default FeatureSection;

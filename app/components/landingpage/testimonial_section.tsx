'use client';

import React from 'react';
import TestimonialList from '../TestimonialList';
import { Testimonial } from '../TestimonialCard';
import SectionTitle from '../SectionTitle';

const testimonials: Testimonial[] = [
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

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-base-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Trusted by thousands of developers worldwide."
          subtitle="Don't just take our word for it. Join the community and experience the most comprehensive LMS for programming and tech skills."
          tag="Student Success Stories"
          alignment="center"
        />
        <TestimonialList testimonials={testimonials} columns={3} />
      </div>
    </section>
  );
};

export default TestimonialSection;

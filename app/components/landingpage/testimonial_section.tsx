'use client';

import React from 'react';
import TestimonialList from '../TestimonialList';
import SectionTitle from '../SectionTitle';

import { TESTIMONIALS as testimonials } from '@/lib/data/mock';

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

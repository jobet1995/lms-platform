import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ALL_COURSES } from '../../components/courses/coursesData';
import { CourseCategoryLayout } from '../../components/courses/CourseCategoryLayout';

const courses = ALL_COURSES.filter((c) => c.category === 'Cybersecurity');

export default function CybersecurityPage() {
  return (
    <CourseCategoryLayout
      title="Cybersecurity & Ethical Hacking"
      subtitle="Cybersecurity"
      description="Defend systems, find vulnerabilities, and protect organizations from modern threats. Learn penetration testing, network security, and secure development practices."
      icon={<ShieldCheck className="h-4 w-4" />}
      accentClass="from-amber-500/15 via-base-100 to-primary/10"
      badgeClass="bg-amber-500/10 text-amber-700"
      categorySlug="Cybersecurity"
      skills={['Penetration Testing', 'Network Security', 'Ethical Hacking', 'OWASP', 'CTF', 'Kali Linux', 'SIEM', 'Cryptography']}
      courses={courses}
    />
  );
}

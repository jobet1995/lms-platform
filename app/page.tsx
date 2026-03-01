import Hero from "./components/landingpage/hero";
import FeatureSection from "./components/landingpage/feature_section";
import CoursesSection from "./components/landingpage/courses_section";
import TestimonialSection from "./components/landingpage/testimonial_section";
import NewsletterSection from "./components/landingpage/newsletter_section";
import ContactSection from "./components/landingpage/contact_section";
import CTASection from "./components/landingpage/cta_section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeatureSection />
      <CoursesSection />
      <TestimonialSection />
      <NewsletterSection />
      <ContactSection />
      <CTASection 
        title="Ready to elevate your skills?"
        subtitle="Join 25,000+ developers learning on the world's most advanced LMS. Start your journey for free today."
        primaryCTA={{ text: "Enroll Now", href: "/signup" }}
        secondaryCTA={{ text: "Schedule a Demo", href: "/demo" }}
        background="gradient"
      />
      {/* Other sections can go here */}
    </div>
  );
}

'use client';

import React from 'react';
import NewsletterForm from '../NewsletterForm';
import { Send, Bell, Gift, Sparkle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="newsletter">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-[1240px] mx-auto bg-base-100 dark:bg-neutral-900 border border-base-content/5 rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-500 hover:shadow-primary/5">
          
          {/* Content Column */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold tracking-wider rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 uppercase">
              <Sparkle className="w-4 h-4" />
              <span>Stay Ahead</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
              Get the latest <span className="text-primary italic">Free</span> course updates directly in your inbox.
            </h2>
            <p className="text-lg text-base-content/60 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join our community of over 50,000 developers! We send one email a week with curated resources, open-source projects, and new course releases. No spam, ever.
            </p>
            
            {/* Features/Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
              <div className="flex items-center gap-2 text-sm font-bold text-base-content/70">
                <div className="p-1 px-1.5 rounded-md bg-success/10 text-success">
                  <Gift size={16} />
                </div>
                Free Weekly Resources
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-base-content/70">
                <div className="p-1 px-1.5 rounded-md bg-info/10 text-info">
                   <Bell size={16} />
                </div>
                Instant notifications
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:max-w-[480px] space-y-4">
             <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4 mb-2 animate-bounce-scroll">
                <div className="w-10 h-10 shrink-0 bg-primary/20 text-primary rounded-xl flex items-center justify-center font-bold text-lg">
                  <Send size={20} />
                </div>
                <p className="text-sm font-medium text-base-content/80 leading-relaxed">
                  Subscribe now and get our <span className="text-primary font-bold italic underline">FREE</span> E-book: &quot;The Modern Developer&apos;s Roadmap 2026&quot;.
                </p>
             </div>
             <NewsletterForm variant="inline" />
             <p className="text-[11px] text-center lg:text-left text-base-content/40 tracking-wide font-medium">
               By subscribing, you agree to our <a href="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</a> and <a href="/terms" className="underline hover:text-primary transition-colors">Terms of Service</a>.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

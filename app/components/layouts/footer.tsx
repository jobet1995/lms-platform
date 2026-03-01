"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowRight,
  Github
} from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Courses",
    links: [
      { name: "Algorithms & DS", href: "/courses/algorithms" },
      { name: "Software Engineering", href: "/courses/software-eng" },
      { name: "Artificial Intelligence", href: "/courses/ai" },
      { name: "Cybersecurity", href: "/courses/security" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Reviews", href: "/reviews" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: <Twitter size={20} />, href: "#", label: "Follow us on Twitter" },
  { name: "Facebook", icon: <Facebook size={20} />, href: "#", label: "Follow us on Facebook" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#", label: "Connect with us on LinkedIn" },
  { name: "Instagram", icon: <Instagram size={20} />, href: "#", label: "Follow us on Instagram" },
  { name: "GitHub", icon: <Github size={20} />, href: "#", label: "View our projects on GitHub" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-base-100 border-t border-base-content/5 pt-20 pb-10 mt-auto">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-primary-content p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <BookOpen size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tight text-base-content">
                Elevate<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">LMS</span>
              </span>
            </Link>
            <p className="text-base-content/60 max-w-sm leading-relaxed text-lg font-medium">
              Empowering developers with the highest quality computer science and programming education. Master your craft with industry experts.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-full bg-base-content/5 text-base-content/60 hover:bg-primary hover:text-primary-content transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-base-content/40">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-base font-semibold text-base-content/70 hover:text-primary transition-colors inline-block group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-base-content">Subscribe to our newsletter</h3>
              <p className="text-base-content/50 font-medium">Get the latest course updates and developer tips.</p>
            </div>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-base-content/5 border border-base-content/10 rounded-2xl py-4 pl-12 pr-4 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder:text-base-content/30"
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={20} />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-content rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            <div className="flex items-center gap-2 text-xs text-base-content/40 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              Join 5,000+ developers already registered
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-base-content/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-base-content/40 tracking-tight">
            &copy; 2026 <span className="text-base-content/60">ElevateLMS</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs font-bold text-base-content/40 hover:text-base-content transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs font-bold text-base-content/40 hover:text-base-content transition-colors uppercase tracking-widest">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

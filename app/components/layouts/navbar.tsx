"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, ChevronDown,
  Cpu, Code2, Terminal, ShieldCheck, Palette, TrendingUp, Cloud,
  Info, Users, Star, Newspaper,
  PenLine, Lightbulb, Youtube,
  Mail, MessageSquare, HelpCircle, Phone,
} from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

interface SubLink {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavLink {
  name: string;
  href: string;
  badge?: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Courses",
    href: "/courses",
    badge: "New",
    subLinks: [
      {
        name: "Browse All Courses",
        href: "/courses",
        description: "Explore our full catalog of 500+ courses",
        icon: <BookOpen size={18} className="text-primary" />,
      },
      {
        name: "Development",
        href: "/courses/development",
        description: "Next.js, React, Python & more",
        icon: <Code2 size={18} className="text-emerald-600" />,
      },
      {
        name: "Data Science & AI",
        href: "/courses/data-science",
        description: "ML, neural networks & analytics",
        icon: <Cpu size={18} className="text-fuchsia-600" />,
      },
      {
        name: "Cybersecurity",
        href: "/courses/cybersecurity",
        description: "Ethical hacking & network safety",
        icon: <ShieldCheck size={18} className="text-amber-600" />,
      },
      {
        name: "Design",
        href: "/courses/design",
        description: "UI/UX, Figma & visual design",
        icon: <Palette size={18} className="text-rose-500" />,
      },
      {
        name: "DevOps & Cloud",
        href: "/courses/devops",
        description: "AWS, Terraform & CI/CD pipelines",
        icon: <Cloud size={18} className="text-sky-500" />,
      },
      {
        name: "Algorithms & DS",
        href: "/courses/algorithms",
        description: "Core logic and data structures",
        icon: <Terminal size={18} className="text-blue-600" />,
      },
      {
        name: "Marketing",
        href: "/courses/marketing",
        description: "SEO, growth hacking & analytics",
        icon: <TrendingUp size={18} className="text-orange-500" />,
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    subLinks: [
      {
        name: "Our Mission",
        href: "/about",
        description: "Why we built ElevateLMS",
        icon: <Lightbulb size={18} className="text-amber-500" />,
      },
      {
        name: "The Team",
        href: "/about#team",
        description: "Meet the people behind the platform",
        icon: <Users size={18} className="text-primary" />,
      },
      {
        name: "Testimonials",
        href: "/about#testimonials",
        description: "What our students say",
        icon: <Star size={18} className="text-amber-400" />,
      },
      {
        name: "Press & Media",
        href: "/about#press",
        description: "News and media mentions",
        icon: <Newspaper size={18} className="text-base-content/60" />,
      },
      {
        name: "Careers",
        href: "/about#careers",
        description: "Join our growing team",
        icon: <Info size={18} className="text-emerald-500" />,
      },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    subLinks: [
      {
        name: "Latest Articles",
        href: "/blog",
        description: "Fresh reads from our editorial team",
        icon: <PenLine size={18} className="text-primary" />,
      },
      {
        name: "Tutorials",
        href: "/blog/tutorials",
        description: "Step-by-step developer guides",
        icon: <Code2 size={18} className="text-emerald-600" />,
      },
      {
        name: "Tech Insights",
        href: "/blog/tech",
        description: "Trends & deep dives in technology",
        icon: <Lightbulb size={18} className="text-amber-500" />,
      },
      {
        name: "Video Lessons",
        href: "/blog/videos",
        description: "Free video content & screencasts",
        icon: <Youtube size={18} className="text-rose-500" />,
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    subLinks: [
      {
        name: "Send a Message",
        href: "/contact",
        description: "Reach out to our support team",
        icon: <Mail size={18} className="text-primary" />,
      },
      {
        name: "Live Chat",
        href: "/contact#chat",
        description: "Chat with us in real time",
        icon: <MessageSquare size={18} className="text-emerald-500" />,
      },
      {
        name: "FAQ",
        href: "/contact#faq",
        description: "Quick answers to common questions",
        icon: <HelpCircle size={18} className="text-amber-500" />,
      },
      {
        name: "Call Us",
        href: "/contact#phone",
        description: "Speak to a team member directly",
        icon: <Phone size={18} className="text-base-content/60" />,
      },
    ],
  },
];

const DesktopNavLink: React.FC<{ link: NavLink; pathname: string }> = ({ link, pathname }) => {
  const isActive = pathname === link.href || (link.subLinks?.some(sub => pathname === sub.href));
  
  if (link.subLinks) {
    return (
      <div className="dropdown dropdown-hover group">
        {/* Clickable link + chevron indicator */}
        <Link
          href={link.href}
          tabIndex={0}
          className={`relative text-sm font-semibold tracking-wide flex items-center gap-1.5 whitespace-nowrap transition-premium py-2 ${
            isActive ? "text-primary" : "text-base-content/70 hover:text-primary"
          }`}
        >
          {link.name}
          {link.badge && (
            <span className="badge badge-primary badge-sm scale-75 origin-left font-bold border-none shadow-sm">
              {link.badge}
            </span>
          )}
          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full transition-all duration-300" />
          )}
        </Link>
        <div className={`dropdown-content z-[1] pt-2 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto ${
          link.subLinks.length > 4 ? 'w-[680px] -left-48' : 'w-[340px]'
        }`}>
          <div className="dropdown-box shadow-2xl rounded-2xl p-4 overflow-hidden shadow-black/10">
            {link.subLinks.length > 4 && (
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-base-content/8">
                <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">
                  Browse by Category
                </p>
                <Link href={link.href} className="text-xs font-bold text-primary hover:underline">
                  View All →
                </Link>
              </div>
            )}
            <div className={`grid gap-1 ${link.subLinks.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {link.subLinks.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-base-content/5 transition-all group/item"
                >
                  <div className="mt-0.5 p-2.5 rounded-xl bg-base-content/5 group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors shadow-sm ring-1 ring-base-content/5 shrink-0">
                    {sub.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-base-content group-hover/item:text-primary transition-colors truncate">
                      {sub.name}
                    </span>
                    {sub.description && (
                      <span className="text-[11px] text-base-content/60 font-medium leading-tight mt-1 group-hover/item:text-base-content/80 line-clamp-2">
                        {sub.description}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`relative text-sm font-semibold tracking-wide flex items-center gap-1 group whitespace-nowrap transition-premium ${
        isActive ? "text-primary" : "text-base-content/70 hover:text-primary"
      }`}
    >
      {link.name}
      {link.badge && (
        <span className="badge badge-primary badge-sm scale-75 origin-left font-bold border-none shadow-sm">
          {link.badge}
        </span>
      )}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary rounded-full transition-all duration-300" />
      )}
      {!isActive && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300" />
      )}
    </Link>
  );
};

const MobileNavLink: React.FC<{ link: NavLink; pathname: string; onClose: () => void }> = ({ link, pathname, onClose }) => {
  const [isSubExpanded, setIsSubExpanded] = useState(false);
  const isActive = pathname === link.href || (link.subLinks?.some(sub => pathname === sub.href));

  if (link.subLinks) {
    return (
      <div className="flex flex-col space-y-1">
        {/* Row: clickable label + chevron expand button */}
        <div className={`flex items-center rounded-2xl transition-all ${
          isActive ? "bg-primary/10 text-primary font-bold border border-primary/20 shadow-sm shadow-primary/5" : "text-base-content/90 hover:bg-white/5"
        }`}>
          <Link
            href={link.href}
            onClick={onClose}
            className="flex-1 flex items-center gap-2 px-4 py-3"
          >
            {link.name}
            {link.badge && (
              <span className={`badge badge-sm ${isActive ? "badge-outline border-white/30" : "badge-primary"}`}>
                {link.badge}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsSubExpanded(!isSubExpanded)}
            aria-label="Toggle submenu"
            className="px-3 py-3"
          >
            <ChevronDown size={18} className={`transition-transform duration-300 ${isSubExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 flex flex-col pl-4 space-y-1 ${isSubExpanded ? "max-h-[1000px] mt-1 mb-2" : "max-h-0"}`}>
          {link.subLinks.map((sub) => (
            <Link
              key={sub.name}
              href={sub.href}
              className={`px-4 py-2.5 rounded-2xl flex items-center gap-3 transition-all ${
                pathname === sub.href
                  ? "text-primary font-bold bg-primary/10 border border-primary/10"
                  : "text-base-content/60 hover:text-primary hover:bg-white/5"
              }`}
              onClick={onClose}
            >
              <div className="p-1.5 rounded-md bg-base-300/50">
                {sub.icon}
              </div>
              <div className="text-sm font-medium">{sub.name}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`px-4 py-3 rounded-2xl flex items-center justify-between transition-all ${
        isActive
          ? "bg-primary/10 text-primary font-bold border border-primary/20 shadow-sm shadow-primary/5"
          : "text-base-content/90 hover:bg-white/5 hover:text-primary"
      }`}
      onClick={onClose}
    >
      {link.name}
      {link.badge && (
        <span
          className={`badge badge-sm ${
            isActive ? "badge-outline border-white/30" : "badge-primary"
          }`}
        >
          {link.badge}
        </span>
      )}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Small threshold increase to avoid jitter on micro-scrolls
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes (Render-phase synchronization)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-10 lg:px-16">
        <nav className="flex items-center justify-between">
          {/* Brand - Far Left */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary text-primary-content p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
              <BookOpen size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-base-content group-hover:text-primary transition-colors flex items-center">
              Elevate<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-0.5">LMS</span>
            </span>
          </Link>

          {/* Right Group: Navigation Links + Actions */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <DesktopNavLink key={link.name} link={link} pathname={pathname} />
              ))}
            </div>

            {/* Action Buttons & Theme Toggle */}
            <div className="flex items-center space-x-4 border-l border-base-content/10 pl-10">
              <ThemeToggle />
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-semibold text-base-content/90 hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="btn btn-primary btn-sm px-7 h-11 rounded-full font-extrabold tracking-wide shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-premium hover:scale-[1.03] active:scale-95 border-none"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-base-content/80 hover:text-primary transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Background Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md lg:hidden transition-opacity duration-500 animate-in fade-in"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out relative z-50 ${
            isOpen ? "max-h-[85vh] opacity-100 mt-4" : "max-h-0 opacity-0 m-0"
          }`}
        >
          <div className="bg-base-100/40 backdrop-blur-[40px] saturate-[250%] rounded-[32px] border border-white/10 p-4 flex flex-col space-y-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-y-auto max-h-[80vh] scrollbar-hide">
            {navLinks.map((link) => (
              <MobileNavLink key={link.name} link={link} pathname={pathname} onClose={() => setIsOpen(false)} />
            ))}
            <div className="divider opacity-5 m-1"></div>
            <div className="flex flex-col space-y-3 pt-2">
              <Link
                href="/login"
                className="btn btn-ghost btn-md justify-center text-base-content/90"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="btn btn-primary btn-md justify-center shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

interface NavLink {
  name: string;
  href: string;
  badge?: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses", badge: "New" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

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
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-semibold tracking-wide flex items-center gap-1 group whitespace-nowrap transition-premium ${
                      isActive ? "text-primary" : "text-base-content/70 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {link.badge && (isActive || true) && (
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
              })}
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

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 m-0"
          }`}
        >
          <div className="bg-base-200/50 backdrop-blur-lg rounded-2xl border border-base-content/5 p-4 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl flex items-center justify-between transition-all ${
                    isActive
                      ? "bg-primary text-primary-content font-semibold"
                      : "text-base-content/90 hover:bg-base-300 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {link.badge && (
                    <span
                      className={`badge badge-sm ${
                        isActive ? "badge-outline" : "badge-primary"
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="divider opacity-10 m-2"></div>
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

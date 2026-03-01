"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    // Delaying to avoid potential "cascading renders" warning in specific React 19 environments
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  // Use resolvedTheme to correctly handle 'system' preference
  const currentTheme = resolvedTheme || theme;

  if (!mounted) {
    return (
      <div className="p-2 w-10 h-10 flex items-center justify-center opacity-0">
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <button
      className="btn btn-ghost btn-circle transition-all focus-visible:ring-2 focus-visible:ring-primary"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label={`Toggle theme (currently ${currentTheme})`}
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5 transition-all text-yellow-400 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 transition-all text-slate-700 rotate-0 scale-100" />
      )}
    </button>
  );
}

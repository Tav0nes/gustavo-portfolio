"use client";
import { useEffect, useState } from 'react';
import ThemeToggle from './theme-toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#hero" className="text-xl font-bold">
          GB
        </a>
        <div className="hidden gap-6 sm:flex">
          <a href="#hero" className="border border-border p-2 rounded-full text-muted transition-colors hover:text-highlight hover:border-border-hover">
            Home
          </a>
          <a href="#about" className="border border-border p-2 rounded-full text-muted transition-colors hover:text-highlight hover:border-border-hover">
            About
          </a>
          <a href="#skills" className="border border-border p-2 rounded-full text-muted transition-colors hover:text-highlight hover:border-border-hover">
            Skills
          </a>
          <a href="#projects" className="border border-border p-2 rounded-full text-muted transition-colors hover:text-highlight hover:border-border-hover">
            Projects
          </a>
          <a href="#contact" className="border border-border p-2 rounded-full text-muted transition-colors hover:text-highlight hover:border-border-hover">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-muted transition-colors hover:text-highlight">
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-muted transition-colors hover:text-highlight">
              About
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-muted transition-colors hover:text-highlight">
              Skills
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-muted transition-colors hover:text-highlight">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-muted transition-colors hover:text-highlight">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
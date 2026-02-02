"use client";
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#hero" className="text-xl font-bold">
          GB
        </a>
        <div className="hidden gap-6 sm:flex">
          <a href="#hero" className="text-muted transition-colors hover:text-highlight">
            Home
          </a>
          <a href="#about" className="text-muted transition-colors hover:text-highlight">
            About
          </a>
          <a href="#skills" className="text-muted transition-colors hover:text-highlight">
            Skills
          </a>
          <a href="#projects" className="text-muted transition-colors hover:text-highlight">
            Projects
          </a>
          <a href="#contact" className="text-muted transition-colors hover:text-highlight">
            Contact
          </a>
        </div>
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
        </button>
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
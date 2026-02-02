"use client";
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 px-6 py-4 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#hero" className="text-xl font-bold">
          GB
        </a>
        <div className="hidden gap-6 sm:flex">
          <a href="#hero" className="text-gray-400 transition-colors hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-400 transition-colors hover:text-white">
            About
          </a>
          <a href="#skills" className="text-gray-400 transition-colors hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-400 transition-colors hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 transition-colors hover:text-white">
            Contact
          </a>
        </div>
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-800 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-gray-400 transition-colors hover:text-white">
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-400 transition-colors hover:text-white">
              About
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-400 transition-colors hover:text-white">
              Skills
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-400 transition-colors hover:text-white">
              Projects
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-400 transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
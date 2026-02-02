"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-800 px-6 py-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          GB
        </Link>
        <div className="hidden gap-6 sm:flex">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
        </div>
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-800 px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="transition-colors hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="transition-colors hover:text-gray-400">
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
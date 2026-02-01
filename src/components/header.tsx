import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 px-6 py-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          GB
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
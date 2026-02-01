import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Software Developer
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-7xl">
          Hi! I&apos;m{" "}
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Gustavo Bastos</span>
        </h1>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-gray-400">
          Born in Brazil, passionate about web technologies and open-source.
          Currently learning and building with modern tools like React, Next.js, and TypeScript.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/about" className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium transition-colors hover:bg-blue-700">
            About Me
          </Link>
          <a href="https://github.com/Tav0nes" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-700 px-8 py-3 text-sm font-medium transition-colors hover:border-gray-500">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
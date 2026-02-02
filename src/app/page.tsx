
export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6">
      <section id="hero" className="max-w-2xl text-center">
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
          <a href="#about" className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium transition-colors hover:bg-blue-700">
            About Me
          </a>
          <a href="https://github.com/Tav0nes" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-700 px-8 py-3 text-sm font-medium transition-colors hover:border-gray-500">
            GitHub
          </a>
        </div>
      </section>
      <section id="about" className="mx-auto mt-24 max-w-3xl text-left">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-8 space-y-6 leading-relaxed text-gray-400">
          <p>
            My name is Gustavo Bastos. I was born in Brazil and I&apos;m currently on my journey to becoming a Software Developer.
          </p>
          <p>
            I&apos;m passionate about web technologies, open-source software, and building things that live on the internet. I love watching coding videos, exploring new frameworks, and traveling to new places.    
          </p>
          <p>
            Right now I&apos;m learning and building with modern tools like{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Next.js</span>,{" "}
            <span className="text-white font-medium">TypeScript</span>, and{" "}
            <span className="text-white font-medium">Tailwind CSS</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
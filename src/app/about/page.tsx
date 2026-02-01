export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="mt-8 space-y-6 text-gray-400 leading-relaxed">
        <p>
          My name is Gustavo Bastos. I was born in brazil and I&apos;m currently on my journey to becoming a software developer.
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

      <h2 className="mt-12 text-2xl font-bold">Tech I&apos;m Learning</h2>
      <div className="mt-6 flex flex-wrap grap-3">
        {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git"].map(
          (tech) => (
            <span key={tech} className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300">
              {tech}
            </span>
          )
        )}
      </div>
    </div>
  );
}
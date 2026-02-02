import FadeIn from "@/components/fade-in";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6">

      {/* Hero Section */}  
      <section id="hero" className="max-w-2xl pt-16 text-center">
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

      {/* About Section */}
      <FadeIn>
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
      </FadeIn>

      {/* Skills Section */}
      <FadeIn>
        <section id="skills" className="mx-auto mt-24 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-500">Skills</p>
          <h2 className="mt-2 text-3xl font-bold">Tech Stack</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git"].map(
              (tech) => (
                <span 
                  key={tech} 
                  className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                >
                  {tech}
                </span>
              )  
            )}
          </div>
        </section>
      </FadeIn>
      
      {/* Projects Section */}
      <FadeIn>
        <section id="projects" className="mx-auto mt-24 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-500">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <a 
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-800 p-6 transition-colors hover:border-gray-600"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Contact Section */}
      <FadeIn>
        <section id="contact" className="mx-auto mt-24 mb-16 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500">Get In Touch</p>
          <h2 className="mt-2 text-3xl font-bold">Contact</h2>
          <p className="mx-auto mt-6 max-w-lg text-gray-400">
            I&apos;m always open to new opportunities and connections. Feel free to reach out!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:gustavoelhuaick@gmail.com"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium transition-colors hover:bg-blue-700"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/gustavoelhuaickaraujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 px-8 py-3 text-sm font-medium transition-colors hover:border-gray-500"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
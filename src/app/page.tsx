import FadeIn from "@/components/fade-in";
import { projects } from "@/data/projects";
import ScrambleText from "@/components/scramble-text";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6">

      {/* Hero Section */}  
      <section id="hero" className="max-w-2xl pt-48 pb-48 text-center">
        <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-7xl">
          Hi, I&apos;m 
          <ScrambleText texts={[" Gustavo Bastos", " a Software Developer", " passionate about coding"]} />  
        </h1>
        <p className="text-5xl text-accent font-bold">Full stack developer</p>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-muted">
          Welcome to my developer portfolio! Here, I showcase my projects, skills, and journey in the world of software development.
        </p>
      </section>

      {/* About Section */}
      <FadeIn>
        <section id="about" className="mx-auto mt-24 max-w-3xl text-left">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-8 space-y-6 leading-relaxed text-muted">
            <p>
              My name is Gustavo Bastos. I was born in Brazil and I&apos;m currently on my journey to becoming a Software Developer.
            </p>
            <p>
              I&apos;m passionate about web technologies, open-source software, and building things that live on the internet. I love watching coding videos, exploring new frameworks, and traveling to new places.    
            </p>
            <p>
              Right now I&apos;m learning and building with modern tools like{" "}
              <span className="text-highlight font-medium">React</span>,{" "}
              <span className="text-highlight font-medium">Next.js</span>,{" "}
              <span className="text-highlight font-medium">TypeScript</span>, and{" "}
              <span className="text-highlight font-medium">Tailwind CSS</span>.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Skills Section */}
      <FadeIn>
        <section id="skills" className="mx-auto mt-24 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-muted-strong">Skills</p>
          <h2 className="mt-2 text-3xl font-bold">Tech Stack</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "Python", "C++", "C#", "Git", "Next.js", "React"].map(
              (tech) => (
                <span 
                  key={tech} 
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-border-hover hover:bg-accent-hover hover:text-highlight"
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
          <p className="text-sm uppercase tracking-widest text-muted-strong">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold">Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Contact Section */}
      <FadeIn>
        <section id="contact" className="mx-auto mt-24 mb-16 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-widest text-muted-strong">Get In Touch</p>
          <h2 className="mt-2 text-3xl font-bold">Contact</h2>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            I&apos;m always open to new opportunities and connections. Feel free to reach out!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:gustavoelhuaick@gmail.com"
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium transition-colors hover:bg-accent-hover"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/gustavoelhuaickaraujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-3 text-sm font-medium transition-colors hover:border-border-hover"
            >
              LinkedIn<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
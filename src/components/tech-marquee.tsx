"use client";

const techs = [
  { name: "HTML", src: "/html.png" },
  { name: "CSS", src: "/css-3.png" },
  { name: "JavaScript", src: "/js.png" },
  { name: "TypeScript", src: "/typescript.png" },
  { name: "React", src: "/react.png" },
  { name: "Python", src: "/python.png" },
  { name: "C++", src: "/c-.png" },
  { name: "C#", src: "/c-sharp.png" },
  { name: "Git", src: "/git.png" },
]

export default function TechMarquee() {
  return (
    // 2. Outer container: overflow-hidden so content clips at the edges
    <div className="overflow-hidden">
      {/* 3. Inner container: flex row with the animation class */}
      <div className="flex animate-marquee">
        {/* 4. Render the list TWICE — this is the duplication trick */}
        {[...techs, ...techs].map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="mt-4 mx-3 flex flex-col items-center justify-center
                       w-24 h-24 rounded-xl border border-border
                       bg-surface flex-shrink-0"
          >
            <img src={tech.src} alt={tech.name} className="w-8 h-8" />
            <span className="mt-2 text-xs text-muted">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
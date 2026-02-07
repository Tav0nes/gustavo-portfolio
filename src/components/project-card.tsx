"use client";
import { motion } from "motion/react";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-border p-6 transition-colors hover:border-border-hover hover:bg-accent-hover"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="text-xl font-semibold">{project.title}<span className="sr-only"> (opens in new tab)</span></h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors bg-background hover:border-border-hover hover:bg-surface hover:text-highlight"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
    

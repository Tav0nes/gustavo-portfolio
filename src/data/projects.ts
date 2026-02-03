export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Developer Portfolio",
    description: "My personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features responsive design and smooth scroll navigation.",
    url: "https://github.com/Tav0nes/gustavo-portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Task Manager App",
    description: "A web application to manage daily tasks with features like adding, editing, and deleting tasks. Built with React and Firebase.",
    url: "https://github.com/donhempsmyer/Hab-itz",
    tags: ["Kotlin", "Firebase", "CSS"],
  },
  {
    title: "Smarty Home Dashboard",
    description: "A responsive dashboard for controlling smart home devices. Built with React and Node.js.",
    url: "https://github.com/Tav0nes/Smarty-Dashboard",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Med-Q Queue Management",
    description: "A queue management system for clinics to streamline patient flow and reduce wait times. Developed using Java and MySQL.",
    url: "https://github.com/neutral207/medq/tree/dev",
    tags: ["JavaScript", "Python", "PostGreSQL"],
  },
];
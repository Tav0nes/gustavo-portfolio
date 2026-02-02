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
];
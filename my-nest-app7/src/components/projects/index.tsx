import { ProjectCard } from "./project-card";

// Sample project data
const projects = [
  {
    id: 1,
    image: "/images/r-menu.png",
    title: "Restaurant Menu App",
    description:
      "A digital menu application for restaurants with real-time updates and ordering capabilities.",
    projectLink: "https://github.com/MavisGit3/Delicious-Eats",
    demoLink: "https://eats-menu.vercel.app/",
  },
  {
    id: 2,
    image: "/images/e-commace.jpg",
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, and secure checkout.",
    projectLink: "https://github.com/MavisGit3/shop-hub-app",
    demoLink: "https://shop-hub-app.vercel.app/",
  },
  {
    id: 3,
    image: "/images/modern-blog.jpg",
    title: "Modern Blog",
    description:
      "A modern blog built with Next.js 15 and shadcn/ui, featuring dynamic content and a sleek design.",
    projectLink: "https://github.com/MavisGit3/blog-app",
    demoLink: "https://blog-app-vbtg.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto mt-20 px-4 py-12">
      <h1 className="text-2xl font-bold font-serif mb-8 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import ProjectCard from "./common/ProjectCards";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "gStandings",
      description:
        "web application for live scoring, game scheduling and standings built with React TS, Ionic, Capacitor, and Supabase.",
      videoUrl: "/gstandings.mp4",
      url: "https://www.gstandings.com",
    },
    {
      title: "taskMent",
      description:
        "modern, user-friendly task management application (CRUD) built with React TS, Tailwind CSS, and Vite.",
      videoUrl: "/taskment.mp4",
      url: "https://taskment.vercel.app/",
    },
    {
      title: "unWind",
      description:
        "is a modern, responsive single-page travel landing page built with React TS, CSS, and Vite.",
      videoUrl: "/unwind.mp4",
      url: "https://un-wind.vercel.app/",
    },
    {
      title: "elcom AR",
      description:
        "is a modern, responsive single-page landing page for our capstone built with React TS, Ionic, and Vite.",
      videoUrl: "/elcomweb.mp4",
      url: "https://elcom-ar-web.vercel.app/",
    },
    {
      title: "hoopBuy",
      description:
        "is a dedicated e-commerce platform specializing in high-quality basketball gear built with shopify",
      videoUrl: "/hoopBuy.mp4",
      url: "#",
    },
    {
      title: "gryffindor",
      description:
        "is a modern, responsive single-page landing page for gryffindor built with React TS, Ionic, and Vite.",
      videoUrl: "/gryffindor.mp4",
      url: "https://gryffindor-web-design.vercel.app/",
    },
    {
      title: "e-budget",
      description:
        "is a modern, responsive single-page landing page for capstone e-budget built with HTML, CSS, Javascript and Bootstrap.",
      videoUrl: "/ebudget.mp4",
      url: "https://e-budget-web.vercel.app/",
    },
    {
      title: "elcom-quiz",
      description:
        "is a fully functional quiz system for our capstone built with React TS, Ionic, Vite, and Supabase.",
      videoUrl: "/elcomquiz.mp4",
      url: "https://elcom-ar-quiz-web.vercel.app/",
    },
    {
      title: "passo-system",
      description:
        "is a fully functional print system beta built with React TS, Ionic, Vite, and Supabase.",
      videoUrl: "/passo.mp4",
      url: "https://passo-system.vercel.app/",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="xl:text-7xl text-center lg:text-6xl md:text-6xl text-5xl font-bold mb-16 text-gray-800">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              videoUrl={project.videoUrl}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

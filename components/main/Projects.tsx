import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-zinc-300 py-20">
      <span className="  text-transparent text-6xl bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500" >My Projects</span>
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/jobp.png"
          title="Job Portal"
          description="A Mordan Platform for Job Seekera And Recruters for finding jobs and hiring build on React.JS."
        />
        <ProjectCard
          src="/pomodoro.png"
          title="Pomodoro Clock"
          description="A Pomodoro Clock For Focus Assist, Based on an old technique that involves 25 Minutes of Focus with 5 minute Breakes."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Personal Portfolio"
          description="My personal portfolio build on Next.JS 13 for Server Side Rendering & Framer Motion for Smooth Scroll"
        />
      </div>
    </div>
  );
};

export default Projects;

"use client";
import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
// Move your big projectsData array into ./projectsData.js and export it:
//   export const projectsData = [ ... ];
import { projectsData } from "@/app/Data";

const ProjectsSection = () => {
  // Optional: add `category: "AI" | "Real-time" | "SaaS"` and `featured: true`
  // to projects. Filter buttons appear automatically when categories exist.
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.category).filter(Boolean));
    return set.size ? ["All", ...set] : [];
  }, []);

  const projects = useMemo(() => {
    const list = active === "All" ? projectsData : projectsData.filter((p) => p.category === active);
    // featured first, otherwise keep the order written in the data file
    return [...list].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [active]);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center space-y-6">
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
          Case <span className="text-blue-500">Studies</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium">
          {projectsData.length} full-stack projects, from AI products to real-time apps.
        </p>

        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-colors ${active === cat
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          // key uses title so it can never collide (id 3 was used twice before)
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
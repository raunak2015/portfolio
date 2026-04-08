import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="glass-container flex flex-col group overflow-hidden h-full border-t-2 border-l-2 border-white/10 hover:border-[#7c3aed]/50 transition-all duration-500"
    >
      {/* Image Area */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#16f2b3] transition-colors">
          {name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag.name}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white/60 font-mono uppercase tracking-widest"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
          <a
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-bold uppercase tracking-widest hover:bg-[#ec4899] hover:border-[#ec4899] transition-all duration-300"
          >
            Demo
          </a>
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-full border border-[#7c3aed] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#7c3aed] transition-all duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Clones", "Games", "React"];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#7c3aed] opacity-30"></div>
            <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
              Projects
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#7c3aed] opacity-30"></div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-[#ec4899] to-[#7c3aed] text-white shadow-lg shadow-[#ec4899]/20"
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button (Styled like the target site) */}
        <div className="flex justify-center mt-16">
           <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300">
             View All Projects
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
             </svg>
           </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;

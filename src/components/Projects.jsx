import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../constants";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    category,
    image,
    source_code_link,
    demo_link,
}) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col group h-full rounded-sm overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
        >
            {/* Image Area with Dark Overlay */}
            <div className="relative w-full h-[180px] bg-black overflow-hidden border-b border-white/5">
                <img 
                    src={image} 
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity hover:mix-blend-normal"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-100" />
                 
                 {/* Decorative tech lines */}
                 <div className="absolute top-4 left-4 w-8 h-[1px] bg-white/20 z-10" />
                 <div className="absolute bottom-4 right-4 w-12 h-[1px] bg-white/20 z-10" />
            </div>

            <div className="flex flex-col flex-grow p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white text-2xl font-serif">{name}</h3>
                </div>
                
                <p className="text-secondary text-sm font-sans font-light leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-white/20 text-secondary"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="font-mono text-[11px] text-green-400">
                        &lt; deployed /&gt;
                    </div>
                    
                    <div className="flex gap-4">
                        <a 
                            href={demo_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white font-mono text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1"
                        >
                            Live ↗
                        </a>
                        <a 
                            href={source_code_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-white font-mono text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filters = ['All', 'Clones', 'Games', 'React'];

    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'All') return true;
        return project.category === activeFilter;
    });

    return (
        <section id="work" className="max-w-7xl mx-auto px-6 sm:px-12 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            >
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em]">
                            / PROJECTS
                        </p>
                        <div className="h-[1px] w-12 bg-accent/30"></div>
                    </div>
                    <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-serif">
                        What I've <span className="italic text-accent">built.</span>
                    </h2>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mt-8 lg:mt-0">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 border transition-colors duration-300 ${
                                activeFilter === filter 
                                ? 'bg-white text-primary border-white' 
                                : 'bg-transparent text-secondary border-white/20 hover:border-white/50 hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.name} index={index} {...project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;

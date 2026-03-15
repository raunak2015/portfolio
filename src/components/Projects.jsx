import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import { projects } from "../constants";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    demo_link,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col group h-full rounded-sm overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
        >
            <div className="relative w-full h-[250px] overflow-hidden">
                <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                />
            </div>

            <div className="flex flex-col flex-grow p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white text-2xl font-serif">{name}</h3>
                </div>
                
                <p className="text-secondary text-sm font-sans font-light leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-white/20 text-secondary"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="font-mono text-[11px] text-green-400">
                        &lt; production ready /&gt;
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
    return (
        <section id="work" className="max-w-7xl mx-auto px-6 sm:px-12 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center gap-4 mb-4">
                    <p className="font-mono text-[11px] text-accent uppercase tracking-[0.3em]">
                        / PROJECTS
                    </p>
                    <div className="h-[1px] w-12 bg-accent/30"></div>
                </div>
                <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-serif">
                    What I've <span className="italic text-accent">built.</span>
                </h2>
                <p className="mt-6 text-secondary font-sans text-lg max-w-2xl font-light">
                    A selection of production-grade systems and technical explorations. From kernel-level logic to responsive frontends.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
                {projects.length === 0 && (
                    <p className="text-secondary font-mono text-sm">No projects added yet.</p>
                )}
            </div>
        </section>
    );
};

export default Projects;

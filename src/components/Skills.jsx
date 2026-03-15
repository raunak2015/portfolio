import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";

const Skills = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-32 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            >
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <p className="font-mono text-[11px] text-[#bf61ff] uppercase tracking-[0.3em]">
                            / TECHNOLOGIES
                        </p>
                        <div className="h-[1px] w-12 bg-[#bf61ff]/30"></div>
                    </div>
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif">
                        What I work <span className="italic text-[#bf61ff]">with.</span>
                    </h2>
                </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {technologies.map((technology, index) => (
                    <motion.div
                        className="group relative"
                        key={technology.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                            ease: "easeOut"
                        }}
                    >
                        <div className="h-16 bg-white/5 border border-white/10 flex items-center px-4 hover:bg-white/10 hover:border-[#bf61ff]/50 transition-colors duration-300">
                            <div className="text-secondary text-xs sm:text-sm font-mono tracking-wider group-hover:text-white transition-colors">
                                {technology.name}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

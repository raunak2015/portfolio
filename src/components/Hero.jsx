import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen mx-auto flex items-center justify-center pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-center">
                
                {/* Left Column: Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <p className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.2em] text-secondary">
                            SOFTWARE ENGINEER
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-2">
                        <h1 className="font-serif text-white text-[60px] sm:text-[80px] lg:text-[100px] leading-[1] font-semibold tracking-tight">
                            Raunak shahu<span className="italic text-accent">.</span>
                        </h1>
                        <div className="relative mb-2">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 p-1">
                                <div className="w-full h-full rounded-full overflow-hidden bg-white/5">
                                    <img 
                                        src="https://res.cloudinary.com/dhbxrjpgc/image/upload/v1770567788/WhatsApp_Image_2026-02-08_at_9.52.07_PM_dobxuw.jpg" 
                                        alt="Raunak" 
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#050505] rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                    
                    <h2 className="font-serif text-accent text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.2] mt-2 mb-8 italic">
                        Building intelligent systems.
                    </h2>

                    <p className="text-secondary font-sans text-[16px] sm:text-[18px] leading-relaxed max-w-xl font-light">
                        Full-stack AI Developer specializing in scalable web experiences, generative AI integration, and robust backend architectures. I ship production-grade software — not just coursework demos.
                    </p>

                    <div className="mt-12 flex gap-6 items-center">
                        <a href="#work" className="bg-accent hover:bg-white text-primary font-mono tracking-wide text-sm font-semibold py-4 px-8 transition-colors duration-300">
                            VIEW PROJECTS &rarr;
                        </a>
                        <a href="#contact" className="text-white hover:text-accent font-mono tracking-wide text-sm border-b border-transparent hover:border-accent transition-colors duration-300 pb-1">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="lg:col-span-5 flex flex-col gap-6"
                >
                    {/* Stat Card 1 */}
                    <div className="glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4">Projects Shipped</p>
                        <h3 className="text-white text-4xl font-serif mb-2">10+</h3>
                        <p className="text-secondary text-sm font-sans">Full-stack production deployments</p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#bf61ff] mb-4">Technologies</p>
                        <h3 className="text-white text-4xl font-serif mb-2">20+</h3>
                        <p className="text-secondary text-sm font-sans">Languages, frameworks & databases</p>
                    </div>
                    
                    {/* Stat Card 3 */}
                    <div className="p-8 border-l border-white/10 mt-4 pl-10">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">Focus Areas</p>
                        <h3 className="text-white text-3xl font-serif mb-2 italic">Applied AI</h3>
                        <p className="text-secondary text-sm font-sans">LLMs, RAG, Computer Vision</p>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll indicator (Optional, keeping it minimal) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
                <div className="w-[1px] h-[30px] bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;

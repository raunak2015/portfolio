import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="w-full sm:w-[280px] p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-start gap-6"
    >
        <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
            <Icon size={24} className="text-accent" />
        </div>
        
        <div>
            <h3 className="text-white text-xl font-serif mb-2">
                {title}
            </h3>
            <div className="w-8 h-[1px] bg-accent/30 group-hover:w-16 transition-all duration-500"></div>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 sm:px-12 py-32 border-t border-white/5">
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
                            / SERVICES
                        </p>
                        <div className="h-[1px] w-12 bg-accent/30"></div>
                    </div>
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif">
                        What I <span className="italic text-accent">do.</span>
                    </h2>
                </div>

                <p className="text-secondary font-sans text-base max-w-xl font-light">
                    I build robust end-to-end solutions combining modern frontend architectures with scalable backend systems and intelligent AI integrations.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default About;

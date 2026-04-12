import React from "react";
import { motion } from "framer-motion";

/**
 * About Component
 * Displays personal details, statistics, and a profile image with hover effects.
 */
const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      {/* Decorative Line */}
      <div className="absolute top-0 right-0 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[#16f2b3] text-2xl font-bold uppercase tracking-[0.3em]">
            Who Am I?
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16f2b3] to-transparent opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              My name is <span className="text-[#ec4899] font-bold">Raunak Shahu</span>. I am a passionate Software Engineer with a deep interest in building scalable web applications and intelligent systems. I thrive on solving complex problems and turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-white/60 leading-relaxed">
              With expertise in modern technologies like React, Next.js, and Node.js, I bridge the gap between design and functionality. Whether it's crafting intuitive user interfaces or architecting robust backend systems, I am committed to delivering high-quality software that makes an impact.
            </p>
            <div className="flex gap-8 mt-4">
              <div>
                <h4 className="text-white font-bold text-2xl">14+</h4>
                <p className="text-white/40 text-sm uppercase tracking-tighter">Projects Deployed</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">2+</h4>
                <p className="text-white/40 text-sm uppercase tracking-tighter">Years Experience</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">8+</h4>
                <p className="text-white/40 text-sm uppercase tracking-tighter">Certifications</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/10 p-2 glass-container shadow-2xl">
              <img
                src="https://res.cloudinary.com/dhbxrjpgc/image/upload/v1770567788/WhatsApp_Image_2026-02-08_at_9.52.07_PM_dobxuw.jpg"
                alt="Raunak Shahu"
                className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute -z-10 w-full h-full bg-[#7c3aed]/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

// style updates

// layout adjustments

// patch1

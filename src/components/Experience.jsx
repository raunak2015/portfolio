import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => (
  <div className="relative pl-12 pb-12 border-l border-white/10 last:pb-0">
    {/* Dot */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#16f2b3] shadow-[0_0_10px_#16f2b3]"></div>
    
    <div className="glass-container p-6 hover:border-[#16f2b3]/50 transition-all duration-300 group">
      <span className="text-[#16f2b3] font-mono text-sm mb-2 block">{experience.duration}</span>
      <h3 className="text-white text-xl font-bold group-hover:text-[#16f2b3] transition-colors">{experience.title}</h3>
      <p className="text-white/60 mt-1">{experience.company}</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Illustration & Title */}
        <div className="sticky top-32">
           <div className="flex items-center gap-4 mb-8">
            <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
              Experience
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16f2b3] to-transparent opacity-30"></div>
          </div>
          
          <div className="flex justify-center lg:justify-start">
             <motion.img 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                src="https://lottie.host/embed/d3568c4d-7738-4e1b-b72e-d096a6f1d211/X6t7hWnU2N.json" // Placeholder or actual Lottie
                className="w-full max-w-[300px] opacity-80"
                alt="Working Illustration"
             />
             {/* Fallback to a nice 3D-ish icon if lottie doesn't work well */}
             <div className="w-64 h-64 bg-gradient-to-br from-[#16f2b3]/20 to-[#7c3aed]/20 rounded-full blur-[100px] absolute -z-10"></div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

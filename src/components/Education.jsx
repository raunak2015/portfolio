import React from "react";
import { motion } from "framer-motion";
import { educations } from "../constants";

const EducationCard = ({ education }) => (
  <div className="relative pl-12 pb-12 border-l border-white/10 last:pb-0">
    {/* Dot */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#ec4899] shadow-[0_0_10px_#ec4899]"></div>
    
    <div className="glass-container p-6 hover:border-[#ec4899]/50 transition-all duration-300 group">
      <span className="text-[#ec4899] font-mono text-sm mb-2 block">{education.duration}</span>
      <h3 className="text-white text-xl font-bold group-hover:text-[#ec4899] transition-colors">{education.title}</h3>
      <p className="text-white/60 mt-1 font-medium">{education.institution}</p>
      {education.description && (
        <p className="text-white/50 mt-3 text-sm leading-relaxed border-t border-white/5 pt-3">
          {education.description}
        </p>
      )}
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Timeline */}
        <div className="flex flex-col order-2 lg:order-1">
          {educations.map((edu, idx) => (
            <EducationCard key={idx} education={edu} />
          ))}
        </div>

        {/* Right Column: Illustration & Title */}
        <div className="sticky top-32 order-1 lg:order-2">
           <div className="flex items-center gap-4 mb-8 justify-end">
            <div className="h-[2px] flex-1 bg-gradient-to-l from-[#ec4899] to-transparent opacity-30"></div>
            <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
              Education
            </h2>
          </div>
          
          <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 bg-gradient-to-br from-[#ec4899]/20 to-[#7c3aed]/20 rounded-full blur-[100px] absolute -z-10"></div>
              {/* Illustration Placeholder */}
              <motion.img 
                initial={{ rotate: -5 }}
                animate={{ rotate: 5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                src="https://lottie.host/embed/84e466e2-225d-4f1b-b466-93259837593c/xG4u2E5XzR.json" 
                className="w-full max-w-[300px] opacity-80"
                alt="Education Illustration"
              />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

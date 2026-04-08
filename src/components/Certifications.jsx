import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { ExternalLink, Award } from "lucide-react";

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="glass-container p-6 h-full flex flex-col hover:border-[#7c3aed]/50 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
          <Award size={24} />
        </div>
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white/40 hover:text-[#16f2b3] transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#16f2b3] transition-colors">
        {cert.title}
      </h3>
      <p className="text-[#16f2b3] font-mono text-sm mb-4">{cert.institution}</p>
      
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
        <span>{cert.date}</span>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/0 to-[#7c3aed]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10"></div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
            Certifications
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#7c3aed] to-transparent opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

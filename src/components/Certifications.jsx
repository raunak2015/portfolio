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
    <div className="glass-container p-0 h-full flex flex-col group overflow-hidden border border-white/10 hover:border-[#7c3aed]/50 transition-all duration-300">
      {/* Certificate Preview Container */}
      <div className="relative h-40 w-full overflow-hidden bg-[#0d1224] border-b border-white/5">
        <motion.img 
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={cert.link} 
          className="w-full h-full object-cover object-top"
          alt={cert.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-40"></div>
        <div className="absolute top-4 right-4 z-10">
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white/70 hover:text-[#16f2b3] hover:bg-black/80 transition-all duration-300 border border-white/10"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
            <Award size={20} />
          </div>
          <p className="text-[#16f2b3] font-mono text-xs uppercase tracking-wider">{cert.institution}</p>
        </div>

        <h3 className="text-white text-base font-bold mb-2 group-hover:text-[#16f2b3] transition-colors leading-snug">
          {cert.title}
        </h3>
        
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-tighter">
          <span>{cert.date}</span>
          <span className="px-2 py-0.5 rounded-full border border-white/10">Verified</span>
        </div>
      </div>

      {/* Background Glow Effect */}
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

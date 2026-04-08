import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { certifications } from "../constants";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";

const CertificationCard = ({ cert, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group h-full"
      >
        {/* Animated Border Trace */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 animate-border-flow pointer-events-none"></div>

        <div 
          style={{ transform: "translateZ(50px)" }}
          className="glass-container p-0 h-full flex flex-col group overflow-hidden border border-white/10 hover:border-[#7c3aed]/50 transition-all duration-300 relative bg-[#0d1224]/80"
        >
          {/* Certificate Preview Container */}
          <div className="relative h-44 w-full overflow-hidden bg-[#0d1224]">
            <motion.img 
              style={{ transform: "translateZ(75px)" }}
              src={cert.link} 
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              alt={cert.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-60"></div>
            
            <div className="absolute top-4 right-4 z-20">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 15 }}
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#16f2b3]/10 backdrop-blur-xl text-[#16f2b3] border border-[#16f2b3]/20 hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-300 shadow-[0_0_15px_rgba(22,242,179,0.3)]"
              >
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </div>

          {/* Details Container */}
          <div 
            style={{ transform: "translateZ(60px)" }}
            className="p-6 flex flex-col flex-1 relative z-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(124,58,237,0.2)]">
                <Award size={20} />
              </div>
              <p className="text-[#16f2b3] font-mono text-xs uppercase tracking-[0.2em] font-bold">{cert.institution}</p>
            </div>

            <h3 className="text-white text-[17px] font-black mb-3 group-hover:text-[#16f2b3] transition-colors leading-tight">
              {cert.title}
            </h3>
            
            <div className="mt-auto pt-5 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-white/40 font-bold uppercase tracking-widest">{cert.date}</span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16f2b3]/5 border border-[#16f2b3]/20 text-[#16f2b3] text-[9px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(22,242,179,0.05)]">
                <ShieldCheck size={12} className="animate-pulse" />
                Verified
              </div>
            </div>
          </div>

          {/* Inner Glows */}
          <div className="absolute top-[-20%] left-[-20%] w-[150px] h-[150px] bg-[#7c3aed]/10 blur-[60px] rounded-full group-hover:bg-[#7c3aed]/20 transition-all duration-700"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[150px] h-[150px] bg-[#16f2b3]/5 blur-[60px] rounded-full group-hover:bg-[#16f2b3]/10 transition-all duration-700"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03),transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20 relative px-4">
          <div className="w-12 h-[2px] bg-[#7c3aed]"></div>
          <h2 className="text-white text-3xl font-black uppercase tracking-[0.4em] drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            Certifications
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#7c3aed] to-transparent opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes border-flow {
          0%, 100% { transform: translateX(-100%) rotate(0deg); }
          50% { transform: translateX(100%) rotate(180deg); }
        }
        .animate-border-flow {
          animation: border-flow 4s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Certifications;

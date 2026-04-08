import React from "react";
import { motion } from "framer-motion";
import { hackathons } from "../constants";

const HackathonCard = ({ hackathon }) => (
  <div className="relative pl-12 pb-12 border-l border-white/10 last:pb-0">
    {/* Dot */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#16f2b3] shadow-[0_0_10px_#16f2b3]"></div>
    
    <div className="glass-container p-6 hover:border-[#16f2b3]/50 transition-all duration-300 group">
      <span className="text-[#16f2b3] font-mono text-sm mb-2 block">{hackathon.duration}</span>
      <h3 className="text-white text-xl font-bold group-hover:text-[#16f2b3] transition-colors">{hackathon.title}</h3>
      <p className="text-white/60 mt-1 font-medium">{hackathon.company}</p>
      
      {/* Images Gallery */}
      {hackathon.images && hackathon.images.length > 0 && (
        <div className={`mt-6 grid gap-4 ${hackathon.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {hackathon.images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl bg-[#0d1224] border border-white/5 relative group/img aspect-video">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={img} 
                className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity"
                alt={`${hackathon.title} view ${idx + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-40"></div>
            </div>
          ))}
        </div>
      )}

      {hackathon.description && (
        <p className="text-white/50 mt-6 text-sm leading-relaxed border-t border-white/5 pt-4">
          {hackathon.description}
        </p>
      )}
    </div>
  </div>
);

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Illustration & Title */}
        <div className="sticky top-32">
           <div className="flex items-center gap-4 mb-8">
            <h2 className="text-white text-2xl font-bold uppercase tracking-[0.3em]">
              Hackathons
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16f2b3] to-transparent opacity-30"></div>
          </div>
          
          <div className="flex justify-center lg:justify-start">
             <motion.img 
                initial={{ y: 15 }}
                animate={{ y: -15 }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                src="/assets/experience-3d.png" 
                className="w-full max-w-[340px] drop-shadow-[0_0_30px_rgba(22,242,179,0.2)] filter brightness-110"
                alt="Hackathon Illustration"
             />
             <div className="w-64 h-64 bg-gradient-to-br from-[#16f2b3]/20 to-[#7c3aed]/20 rounded-full blur-[100px] absolute -z-10"></div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="flex flex-col">
          {hackathons.map((hack, idx) => (
            <HackathonCard key={idx} hackathon={hack} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hackathons;

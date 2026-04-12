import React from "react";
import { motion } from "framer-motion";
import { hackathons } from "../constants";

const HackathonCard = ({ hackathon }) => {
  const hasImages = hackathon.images && hackathon.images.length > 0;
  
  return (
    <div className="glass-container p-6 md:p-8 hover:border-[#16f2b3]/50 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-center">
      {/* Left Side: Details */}
      <div className={`flex flex-col ${hasImages ? 'md:w-1/2' : 'w-full'}`}>
        <span className="text-[#16f2b3] font-mono text-sm mb-2 block">{hackathon.duration}</span>
        <h3 className="text-white text-2xl font-bold group-hover:text-[#16f2b3] transition-colors">{hackathon.title}</h3>
        <p className="text-white/60 mt-1 font-medium">{hackathon.company}</p>
        
        {hackathon.description && (
          <p className="text-white/50 mt-4 text-sm leading-relaxed">
            {hackathon.description}
          </p>
        )}
      </div>

      {/* Right Side: Images */}
      {hasImages && (
        <div className="md:w-1/2 w-full">
          <div className={`grid gap-4 ${hackathon.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {hackathon.images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl bg-[#0d1224] border border-white/5 relative group/img aspect-video">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={img} 
                  className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity"
                  alt={`${hackathon.title} view ${idx + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] to-transparent opacity-40 hover:opacity-0 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex items-center gap-4">
          <h2 className="text-white text-3xl font-bold uppercase tracking-[0.3em]">
            Hackathons
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16f2b3] to-transparent opacity-30"></div>
        </div>

        <div className="flex flex-col gap-8">
          {hackathons.map((hack, idx) => (
            <HackathonCard key={idx} hackathon={hack} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hackathons;

import React from "react";
import { motion } from "framer-motion";
import { hackathons } from "../constants";
import { Trophy, Image as ImageIcon } from "lucide-react";

const getGridClass = (index, length) => {
  if (length === 4) {
    if (index === 0) return "md:col-span-2 md:row-span-3 h-[250px] md:h-full";
    return "md:col-span-1 md:row-span-1 h-[120px] md:h-full";
  }
  // Default fallback for other sizes
  if (index === 0) return "md:col-span-2 md:row-span-2 h-[200px] md:h-full";
  return "md:col-span-1 md:row-span-1 h-[140px] md:h-full";
};

const HackathonCard = ({ hackathon }) => {
  const hasImages = hackathon.images && hackathon.images.length > 0;
  
  return (
    <div className="glass-container p-5 md:p-8 hover:border-[#16f2b3]/50 transition-all duration-300 group flex flex-col gap-5 relative overflow-hidden bg-[#0d1224]/80 text-left">
      
      {/* Top Details */}
      <div className="flex flex-col gap-4 relative z-10 w-full mb-2">
        {/* Badge */}
        {hackathon.badge ? (
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 text-yellow-500 bg-yellow-500/10 w-fit text-xs lg:text-sm font-semibold tracking-wider">
             <Trophy size={16} /> {hackathon.badge}
           </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 text-yellow-500 bg-yellow-500/10 w-fit text-xs lg:text-sm font-semibold tracking-wider">
             <Trophy size={16} /> Top Performer
          </div>
        )}
        
        <h3 className="text-white text-3xl md:text-4xl font-bold mt-2">{hackathon.title}</h3>
        
        <p className="text-[#a0a5ba] font-mono text-sm flex items-center gap-2">
          <span className="text-[#a0a5ba]">@</span> {hackathon.company}
        </p>
        
        {hackathon.description && (
          <p className="text-white/80 mt-4 text-base md:text-lg leading-relaxed max-w-4xl">
            {hackathon.description}
          </p>
        )}
      </div>

      {/* Gallery Section */}
      {hasImages && (
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white/50 font-mono text-sm uppercase tracking-widest font-semibold mb-2">
            <ImageIcon size={18} /> Event Gallery
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:h-[480px]">
             {hackathon.images.map((img, idx) => (
                <div 
                   key={idx} 
                   className={`overflow-hidden rounded-xl bg-[#111928] relative group/img ${getGridClass(idx, hackathon.images.length)}`}
                >
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={img} 
                    className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 transition-all duration-300"
                    alt={`${hackathon.title} event gallery ${idx + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent opacity-40"></div>
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
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-[#16f2b3] opacity-30 max-w-[150px]"></div>
          <h2 className="text-white text-3xl font-bold uppercase tracking-[0.3em] text-center">
            Hackathons
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-[#16f2b3] opacity-30 max-w-[150px]"></div>
        </div>

        <div className="flex flex-col gap-10">
          {hackathons.map((hack, idx) => (
            <HackathonCard key={idx} hackathon={hack} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hackathons;

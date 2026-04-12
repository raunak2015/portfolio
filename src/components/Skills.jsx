import React from "react";
import { technologies } from "../constants";

/**
 * Skills Component
 * Renders an infinite scrolling marquee of technology icons.
 */
const Skills = () => {
  // Duplicate technologies for smooth infinite loop
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] overflow-hidden">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-widest font-bold">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="my-12 w-full overflow-hidden">
        {/* Infinite Scrolling Container */}
        <div className="skills-scroll-container w-full flex overflow-hidden group">
          <div className="skills-scroll-inner flex gap-4 lg:gap-6 px-4 animate-marquee group-hover:[animation-play-state:paused]">
            {duplicatedTech.map((skill, id) => (
              <div
                key={id}
                className="w-32 h-36 sm:w-36 sm:h-40 flex-shrink-0 flex flex-col items-center justify-center transition-all duration-300 rounded-lg group/item relative cursor-pointer"
              >
                <div className="h-full w-full rounded-lg border border-white/5 bg-[#11152c]/50 backdrop-blur-sm group-hover/item:border-violet-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 relative p-4">
                  
                  {/* Subtle top glow */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-60"></div>
                  
                  {/* Icon Container */}
                    <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="h-full w-full object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.1)] group-hover/item:drop-shadow-[0_0_8px_rgba(124,58,237,0.4)] transition-all"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                  {/* Text Label */}
                  <p className="text-white/80 text-xs sm:text-sm font-medium tracking-tight mt-1 text-center">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic Style for Animation if not in tailwind.config */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Skills;

// layout updates

import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { useState } from "react";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-grid flex items-center justify-center pt-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            {/* Profile Photo in Hero (Requirement 3.0) */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#ec4899] shadow-xl shadow-[#ec4899]/20">
              <img 
                src="https://res.cloudinary.com/dhbxrjpgc/image/upload/v1770567788/WhatsApp_Image_2026-02-08_at_9.52.07_PM_dobxuw.jpg" 
                alt="Raunak Shahu" 
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Hello, <br />
              This is <span className="text-[#ec4899]">Raunak Shahu</span>, <br />
              I'm a Professional <span className="text-[#16f2b3]">Software Engineer</span>.
            </h2>
          </div>

          {/* Social Links (Requirement 5.12) */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-[#ec4899] hover:border-[#ec4899] transition-all duration-300 text-white group"
              >
                <social.icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ec4899] to-[#7c3aed] text-white font-medium hover:opacity-90 transition-opacity uppercase tracking-wider text-sm shadow-lg shadow-[#ec4899]/20"
            >
              Contact Me
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all uppercase tracking-wider text-sm flex items-center gap-2"
            >
              View Resume
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10.5L10.5 7.5L9.75 6.75L8 8.5V2.5H7V8.5L5.25 6.75L4.5 7.5L7.5 10.5ZM2.5 11.5V12.5H12.5V11.5H2.5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Resume Viewer Modal */}
        <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Right Column: Terminal */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative"
         >
           {/* Glass Card for Terminal */}
           <div className="glass-container border-t-2 border-l-2 border-white/10 shadow-2xl p-6 relative overflow-hidden">
             {/* Terminal Header */}
             <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
               <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
               <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
               <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
             </div>
 
             {/* Code Content */}
             <div className="font-mono text-sm leading-relaxed overflow-x-auto">
               <div className="flex gap-4">
                 <div className="flex flex-col text-white/30 text-right select-none">
                   {Array.from({ length: 15 }).map((_, i) => (
                     <span key={i}>{i + 1}</span>
                   ))}
                 </div>
                 <div className="text-white/90">
                   <span className="text-[#7c3aed]">const</span> <span className="text-[#ec4899]">developer</span> = {'{'} <br />
                   &nbsp;&nbsp;name: <span className="text-[#16f2b3]">'Raunak Shahu'</span>, <br />
                   &nbsp;&nbsp;skills: [<span className="text-[#16f2b3]">'React'</span>, <span className="text-[#16f2b3]">'NextJS'</span>, <span className="text-[#16f2b3]">'Tailwind'</span>, <span className="text-[#16f2b3]">'MongoDB'</span>, <span className="text-[#16f2b3]">'NodeJS'</span>, <span className="text-[#16f2b3]">'JS'</span>, <span className="text-[#16f2b3]">'CSS'</span>], <br />
                   &nbsp;&nbsp;hardWorker: <span className="text-[#ffbd2e]">true</span>, <br />
                   &nbsp;&nbsp;quickLearner: <span className="text-[#ffbd2e]">true</span>, <br />
                   &nbsp;&nbsp;problemSolver: <span className="text-[#ffbd2e]">true</span>, <br />
                   &nbsp;&nbsp;hireable: <span className="text-[#7c3aed]">function</span>() {'{'} <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7c3aed]">return</span> ( <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7c3aed]">this</span>.hardWorker && <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7c3aed]">this</span>.problemSolver && <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7c3aed]">this</span>.skills.length {'>='} <span className="text-[#ffbd2e]">5</span> <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;); <br />
                   &nbsp;&nbsp;{'}'} <br />
                   {'}'};
                 </div>
               </div>
             </div>
           </div>
 
           {/* Decorative Glows */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7c3aed]/20 blur-[80px] rounded-full"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ec4899]/20 blur-[80px] rounded-full"></div>
         </motion.div>

      </div>
    </section>
  );
};

export default Hero;

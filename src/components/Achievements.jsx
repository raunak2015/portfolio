import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../constants";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 lg:px-24 bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-[#16f2b3] text-2xl font-bold uppercase tracking-[0.3em]">
            Achievements
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16f2b3] to-transparent opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-container p-8 flex gap-6 items-start border-t-2 border-l-2 border-white/10 hover:border-[#16f2b3]/50 transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-[#16f2b3]/10 text-[#16f2b3] shrink-0">
                <achievement.icon size={32} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold tracking-wide">
                  {achievement.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

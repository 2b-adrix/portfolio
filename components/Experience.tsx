import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-10 sm:py-20 w-full">
      {/* Section header */}
      <div className="text-center mb-10 sm:mb-14 px-4">
        <div className="inline-flex items-center gap-2 status-pill mb-4">
          🛠 Work History
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          How I{" "}
          <span className="text-gradient-green">Build Android</span>
        </h1>
        <p className="text-[#9999BB] max-w-xl mx-auto font-medium text-sm sm:text-lg">
            Engineering fluidity from first wireframe to finalized Play Store release
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-3 sm:px-6">
        {/* Animated Glow Line — offset adjusted for mobile */}
        <div className="absolute left-[2.15rem] sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7F52FF] via-[#00DE8A] to-transparent shadow-[0_0_15px_rgba(127,82,255,0.3)]" />

        <div className="space-y-8 sm:space-y-12">
          {workExperience.map((card, index) => (
            <motion.div 
              key={card.id} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-3 sm:gap-8 group"
            >
              {/* Timeline Indicator */}
              <div className="relative flex-shrink-0 z-10">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center border glass-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl"
                  style={{ borderColor: index === 0 ? "#7F52FF40" : "#00BCD440" }}
                >
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    width={32}
                    height={32}
                    className="rounded-xl grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                {/* Connector dot — positioned to sit on the glow line */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ring-4 ring-white/10"
                  style={{ 
                    backgroundColor: index === 0 ? "#7F52FF" : "#00BCD4",
                    left: "-1.15rem",
                  }} 
                />
              </div>

              {/* Exp Content Card */}
              <div className="flex-1 min-w-0 glass-2 p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-black text-white leading-tight capitalize">{card.title}</h3>
                    <p
                      className="text-xs sm:text-sm font-bold mt-1 uppercase tracking-widest"
                      style={{ color: index === 0 ? "#7F52FF" : "#00BCD4" }}
                    >
                      {card.company}
                    </p>
                  </div>
                  <div className="status-pill glass-2 border-none bg-white/5 text-white/50 py-1 text-[10px] font-black self-start shrink-0">
                    {card.period}
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#9999BB] leading-relaxed mb-4 sm:mb-6 font-medium">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="chip text-[9px] sm:text-[10px] py-0.5 sm:py-1 bg-white/5 border-white/5 text-[#9999BB] group-hover:text-white transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graduation / Education Bottom Node */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative flex gap-3 sm:gap-8 mt-8 sm:mt-12"
        >
          <div className="relative flex-shrink-0 z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] sm:rounded-[1.25rem] flex items-center justify-center border border-[#FF6F0040] glass-2 text-2xl sm:text-3xl shadow-xl shadow-[#FF6F00]/10">
              🎓
            </div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FF6F00] ring-4 ring-[#FF6F00]/20"
              style={{ left: "-1.15rem" }} 
            />
          </div>
          <div className="flex-1 min-w-0 glass-2 p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border-[#FF6F0020] hover:border-[#FF6F0040] transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-base sm:text-xl font-black text-white leading-tight">B.Tech Computer Science</h3>
                <p className="text-xs sm:text-sm font-bold text-[#FF6F00] mt-1 uppercase tracking-widest py-1">Mewar University · RJ</p>
              </div>
              <div className="status-pill glass-1 border-none bg-[#FF6F00]/10 text-[#FF6F00] py-1 text-[10px] font-black uppercase tracking-widest self-start shrink-0">
                2024 – 2028
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
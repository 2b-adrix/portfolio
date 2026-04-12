import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      {/* Section header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 status-pill mb-4">
          🛠 Work History
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          How I{" "}
          <span className="text-gradient-green">Build Android</span>
        </h1>
        <p className="text-[#9999BB] max-w-xl mx-auto font-medium text-lg">
            Engineering fluidity from first wireframe to finalized Play Store release
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Animated Glow Line */}
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7F52FF] via-[#00DE8A] to-transparent shadow-[0_0_15px_rgba(127,82,255,0.3)]" />

        <div className="space-y-12">
          {workExperience.map((card, index) => (
            <motion.div 
              key={card.id} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-8 group"
            >
              {/* Timeline Indicator */}
              <div className="relative flex-shrink-0 z-10">
                <div
                  className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center border glass-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl"
                  style={{
                    borderColor: index === 0 ? "#7F52FF40" : "#00BCD440",
                  }}
                >
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="rounded-xl grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                {/* Connector Pulsing Ring */}
                <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white transition-all translate-x-[-3.85rem] ring-4 ring-white/10" 
                     style={{ backgroundColor: index === 0 ? "#7F52FF" : "#00BCD4" }} />
              </div>

              {/* Exp Content Card */}
              <div
                className="flex-1 glass-2 p-6 md:p-8 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight capitalize">{card.title}</h3>
                    <p
                      className="text-sm font-bold mt-1 uppercase tracking-widest"
                      style={{ color: index === 0 ? "#7F52FF" : "#00BCD4" }}
                    >
                      {card.company}
                    </p>
                  </div>
                  <div className="status-pill glass-2 border-none bg-white/5 text-white/50 py-1 text-[10px] font-black">
                    {card.period}
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#9999BB] leading-relaxed mb-6 font-medium">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="chip text-[10px] py-1 bg-white/5 border-white/5 text-[#9999BB] group-hover:text-white transition-colors">{tag}</span>
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
           className="relative flex gap-8 mt-12"
        >
          <div className="relative flex-shrink-0 z-10">
            <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center border border-[#FF6F0040] glass-2 text-3xl shadow-xl shadow-[#FF6F00]/10">
              🎓
            </div>
            <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF6F00] translate-x-[-3.85rem] ring-4 ring-[#FF6F00]/20" />
          </div>
          <div className="flex-1 glass-2 p-6 md:p-8 rounded-[2.5rem] border-[#FF6F0020] hover:border-[#FF6F0040] transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-white leading-tight">B.Tech Computer Science</h3>
                <p className="text-sm font-bold text-[#FF6F00] mt-1 uppercase tracking-widest py-1">Mewar University · RJ</p>
              </div>
              <div className="status-pill glass-1 border-none bg-[#FF6F00]/10 text-[#FF6F00] py-1 text-[10px] font-black uppercase tracking-widest">
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
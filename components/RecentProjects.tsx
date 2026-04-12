"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { MdStar, MdVerified } from "react-icons/md";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tight">
          App <span className="text-gradient-green">Showcase</span>
        </h2>
        <p className="text-[#9999BB] mt-3 uppercase tracking-[0.3em] font-bold text-xs">Production Grade Android Apps</p>
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-12 gap-y-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link.replace("https://", "")}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-8 rounded-3xl glass-1 border-white/5 group">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[#10132E] opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(127,82,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(127,82,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <img
                  src={item.img}
                  alt="bg-img"
                  className="z-10 absolute bottom-0 rotate-6 translate-y-4 group-hover:rotate-0 group-hover:translate-y-0 transition-transform duration-500 w-[80%]"
                />
              </div>

              <div className="px-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] flex items-center justify-center text-white text-xl shadow-lg">
                            {item.title.charAt(0)}
                        </div>
                        <div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white flex items-center gap-1">
                                {item.title}
                                <MdVerified className="text-[#00DE8A] text-lg" />
                            </h1>
                            <div className="flex items-center gap-1">
                                <span className="text-[10px] text-[#9999BB] font-bold uppercase tracking-wider">Android App</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 text-[#FF6F00]">
                            <MdStar />
                            <span className="text-xs font-black">4.9</span>
                        </div>
                        <span className="text-[9px] text-[#9999BB] font-bold">100+ Builds</span>
                    </div>
                </div>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#9999BB] mb-5 leading-relaxed"
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      className="flex items-center gap-1 px-4 py-2 rounded-xl glass-2 border-white/10 hover:border-[#7F52FF]/30 transition-all text-[#7F52FF] text-xs font-black uppercase tracking-widest"
                    >
                      Source <FaGithub className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
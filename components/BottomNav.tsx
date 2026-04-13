"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MdHome,
  MdInfo,
  MdCode,
  MdApps,
  MdWork,
  MdEmail,
  MdPerson,
} from "react-icons/md";
import { cn } from "@/lib/utils";

export type ScreenId = "home" | "profile" | "about" | "skills" | "projects" | "experience" | "contact";

const navItems = [
  { id: "home", label: "Home", icon: <MdHome /> },
  { id: "about", label: "About", icon: <MdInfo /> },
  { id: "skills", label: "Skills", icon: <MdCode /> },
  { id: "projects", label: "Projects", icon: <MdApps /> },
  { id: "experience", label: "Exp", icon: <MdWork /> },
  { id: "contact", label: "Mail", icon: <MdEmail /> },
  { id: "profile", label: "Profile", icon: <MdPerson /> },
];

interface BottomNavProps {
  activeTab: ScreenId;
  setActiveTab: (id: ScreenId) => void;
  className?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, className }) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[5000] px-2 sm:px-6 pb-5 sm:pb-8 pt-3 sm:pt-4 pointer-events-none",
        className
      )}
    >
      <div className="max-w-[480px] mx-auto glass-2 border-white/10 rounded-[2rem] sm:rounded-[3rem] p-1 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative pointer-events-auto">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as ScreenId)}
              className={cn(
                "relative flex flex-col items-center justify-center flex-1 py-1 sm:py-2 px-0 transition-all duration-500 gap-0 sm:gap-1 overflow-hidden",
                isActive ? "text-[#00DE8A]" : "text-[#9999BB] hover:text-white"
              )}
            >
              {/* Active indicator pill (Android Material 3 style) */}
              {isActive && (
                <motion.div
                  layoutId="bottomNavPill"
                  className="absolute inset-[4px] z-0 bg-gradient-to-br from-[#00DE8A]/20 to-[#7F52FF]/10 rounded-[1.5rem] border border-[#00DE8A]/20"
                  transition={{ 
                    type: "spring", 
                    damping: 18, 
                    stiffness: 120, 
                    mass: 0.8 
                  }}
                />
              )}
              
              <motion.span 
                animate={{ 
                    scale: isActive ? 1.15 : 1,
                    y: isActive ? -1 : 0
                }}
                className="text-lg sm:text-2xl relative z-10"
              >
                {item.icon}
              </motion.span>
              
              <motion.span 
                animate={{ 
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 0.9,
                    y: isActive ? 0 : 1
                }}
                className="text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] relative z-10 leading-none"
              >
                {item.label}
              </motion.span>

              {/* Haptic simulation click effect */}
              <motion.div
                 whileTap={{ scale: 2, opacity: 0.3 }}
                 className="absolute inset-0 bg-[#00DE8A]/20 rounded-full opacity-0 pointer-events-none"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;

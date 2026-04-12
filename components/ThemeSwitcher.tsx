"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuSun, LuMoon, LuMonitor } from "react-icons/lu";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { name: "light", icon: <LuSun className="w-4 h-4" /> },
    { name: "dark", icon: <LuMoon className="w-4 h-4" /> },
    { name: "system", icon: <LuMonitor className="w-4 h-4" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-[100] flex backdrop-blur-md rounded-2xl p-1.5 border border-white/10 bg-black/40 shadow-2xl"
    >
      <div className="flex gap-1 relative">
        {themes.map((t) => {
          const isActive = theme === t.name;
          return (
            <button
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={`relative z-10 p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
                isActive ? "text-white" : "text-[#9999BB] hover:text-white hover:bg-white/5"
              }`}
              title={`Switch to ${t.name} theme`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTheme"
                  className="absolute inset-0 bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {t.icon}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ThemeSwitcher;
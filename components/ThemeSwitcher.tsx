"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { name: 'light', icon: '☀️' },
    { name: 'dark', icon: '🌙' },
    { name: 'system', icon: '💻' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 z-[100] flex space-x-2 bg-black/20 backdrop-blur-lg rounded-lg p-2 border border-white/10"
    >
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`px-3 py-2 rounded-md transition-colors ${
            theme === t.name
              ? 'bg-purple-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
          title={`Switch to ${t.name} theme`}
        >
          {t.icon}
        </button>
      ))}
    </motion.div>
  );
};

export default ThemeSwitcher;
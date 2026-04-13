"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdSignalCellular4Bar, MdWifi, MdBatteryFull } from "react-icons/md";
import { useTheme } from "next-themes";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import BottomNav, { ScreenId } from "@/components/BottomNav";
import CustomCursor from "@/components/CustomCursor";
import CodeSnippet from "@/components/CodeSnippet";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Preloader from "@/components/Preloader";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Android3DBackground } from "@/components/Android3DBackground";
import ProfileSection from "@/components/ProfileSection";

// Inline theme button (lives inside the header so it's always above z-[5001])
const InlineThemeBtn = ({ name, label }: { name: string; label: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Only apply active state after client mount to avoid SSR/client mismatch
  const isActive = mounted && theme === name;

  return (
    <button
      onClick={() => setTheme(name)}
      title={`${name} mode`}
      className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center transition-all duration-200 ${
        isActive
          ? "bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] text-white shadow-md"
          : "text-[#9999BB] hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
    </button>
  );
};

const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-6 sm:h-8 px-4 sm:px-6 flex items-center justify-between text-[11px] font-bold text-white/50 relative z-[5002] bg-black/10">
      <div className="flex items-center gap-1.5">
        <span>{time}</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <MdSignalCellular4Bar />
        <MdWifi />
        <MdBatteryFull className="text-sm" />
      </div>
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState<ScreenId>("home");

  const renderScreen = () => {
    switch (activeTab) {
      case "home": return <Hero onExplore={() => setActiveTab("projects")} />;
      case "about": return <Grid />;
      case "skills": return <CodeSnippet />;
      case "projects": return <RecentProjects />;
      case "experience": 
        return (
          <div className="w-full flex flex-col gap-10">
            <Experience />
            <Approach />
          </div>
        );
      case "contact": return <Footer />;
      case "profile": return <ProfileSection />;
      default: return <Hero onExplore={() => setActiveTab("projects")} />;
    }
  };

  const getScreenTitle = () => {
    switch (activeTab) {
      case "home": return "AlphaDev Home";
      case "about": return "Profile & Arch";
      case "skills": return "Kotlin Lab";
      case "projects": return "App Portfolio";
      case "experience": return "Timeline & Flow";
      case "contact": return "Get In Touch";
      case "profile": return "My Digital DNA";
      default: return "Portfolio";
    }
  };

  return (
    <main 
      className="relative h-screen w-screen overflow-hidden flex flex-col items-center bg-black-100"
    >
      <Preloader />
      <div className="noise-overlay" />
      
      {/* ════════ GLOBAL 3D ANDROID SCENE ════════ */}
      <Android3DBackground />

      {/* ═══════════════════════════════════════════
           PREMIUM LAYERED AMBIENT BACKGROUND
           Muted palette matching font colors:
           #00DE8A → #00BCD4 → #7F52FF → #9999BB
      ═══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base dark canvas */}
        <div className="absolute inset-0 ambient-base" />

        {/* TOP-LEFT — Deep Teal Emerald orb */}
        <div className="absolute orb-1" style={{
          top: '-10%', left: '-5%',
          width: '70vw', height: '70vw',
          filter: 'blur(60px)',
          animation: 'drift-1 18s ease-in-out infinite alternate',
        }} />

        {/* TOP-RIGHT — Deep Cyan-Teal orb */}
        <div className="absolute orb-2" style={{
          top: '-15%', right: '-10%',
          width: '60vw', height: '60vw',
          filter: 'blur(80px)',
          animation: 'drift-2 22s ease-in-out infinite alternate',
        }} />

        {/* CENTER — Deep Slate-Blue orb */}
        <div className="absolute orb-3" style={{
          top: '30%', left: '25%',
          width: '55vw', height: '55vw',
          filter: 'blur(90px)',
          animation: 'drift-3 26s ease-in-out infinite alternate',
        }} />

        {/* BOTTOM-RIGHT — Deep Violet orb */}
        <div className="absolute orb-4" style={{
          bottom: '-10%', right: '5%',
          width: '50vw', height: '50vw',
          filter: 'blur(70px)',
          animation: 'drift-4 20s ease-in-out infinite alternate',
        }} />

        {/* BOTTOM-LEFT — Deep Teal accent */}
        <div className="absolute orb-5" style={{
          bottom: '5%', left: '10%',
          width: '35vw', height: '35vw',
          filter: 'blur(60px)',
          animation: 'drift-5 30s ease-in-out infinite alternate',
        }} />

        {/* Subtle grid overlay for depth */}
        <div className="absolute inset-0 ambient-grid" style={{
          backgroundSize: '60px 60px',
        }} />

        {/* Vignette - darkens edges for focus */}
        <div className="absolute inset-0 ambient-vignette" />
      </div>

      <CustomCursor />
      <FloatingActionButton />

      {/* Android System UI Simulation */}
      <StatusBar />

      {/* App Bar (Top Status Bar Style) */}
      <header className="w-full relative z-[5001] px-4 py-2.5 sm:px-5 sm:py-3.5 flex items-center justify-between border-b border-white/8 bg-white/[0.04] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        {/* Gradient border line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00DE8A]/30 to-transparent" />
        
        <div className="flex items-center gap-2.5 sm:gap-3.5">
            <motion.div 
              layoutId="appIcon"
              onClick={() => setActiveTab("profile")}
              className="relative w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] p-[1px] shadow-lg shadow-[#00DE8A]/10 cursor-pointer active:scale-90 transition-transform"
            >
              <div className="w-full h-full bg-[#050510]/90 rounded-[11px] flex items-center justify-center backdrop-blur-md">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] font-black text-xl">A</span>
              </div>
            </motion.div>
            
            <div className="flex flex-col justify-center">
                <span className="text-white-200 text-[9px] uppercase font-black tracking-[0.25em] leading-none mb-1 hidden sm:block">Android Native</span>
                <div className="h-6 flex items-center overflow-hidden">
                   <AnimatePresence mode="wait">
                     <motion.span 
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="text-white font-black tracking-tight text-[15px] sm:text-lg leading-tight whitespace-nowrap"
                     >
                       {getScreenTitle()}
                     </motion.span>
                   </AnimatePresence>
                </div>
            </div>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Theme Switcher — inline in header */}
            <div className="flex items-center gap-0.5 p-1 rounded-xl bg-white/5 border border-white/8">
              {[
                { name: "light" as const, label: "☀️" },
                { name: "dark"  as const, label: "🌙" },
                { name: "system" as const, label: "💻" },
              ].map((t) => (
                <InlineThemeBtn key={t.name} name={t.name} label={t.label} />
              ))}
            </div>

            <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#00DE8A]/10 border border-[#00DE8A]/20 shadow-[0_0_15px_rgba(0,222,138,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00DE8A] animate-pulse shadow-[0_0_8px_#00DE8A]" />
                <span className="text-[#00DE8A] text-[9px] font-black uppercase tracking-widest hidden sm:block">System Online</span>
                <span className="text-[#00DE8A] text-[9px] font-black uppercase tracking-widest hidden sm:block">Online</span>
            </div>
        </div>
      </header>

      {/* Screen Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 overflow-y-auto no-scrollbar pt-4 sm:pt-6 pb-28 sm:pb-32 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative w-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* App Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};

export default Home;
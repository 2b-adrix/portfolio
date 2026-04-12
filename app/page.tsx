"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdSignalCellular4Bar, MdWifi, MdBatteryFull } from "react-icons/md";

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
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";

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
    <div className="w-full h-8 px-6 flex items-center justify-between text-[11px] font-bold text-white/50 relative z-[5002] bg-black/10">
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
      case "home": return <Hero />;
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
      default: return <Hero />;
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
      default: return "Portfolio";
    }
  };

  return (
    <main 
      className="relative h-screen w-screen overflow-hidden flex flex-col items-center bg-[#08080f]"
    >
      <Preloader />
      <div className="noise-overlay" />
      
      {/* Global Immersive Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <BackgroundGradientAnimation 
          gradientBackgroundStart="#08080f"
          gradientBackgroundEnd="#050510"
          firstColor="0, 222, 138" // Android Green
          secondColor="127, 82, 255" // Kotlin Violet
          thirdColor="0, 188, 212" // Compose Cyan
          fourthColor="255, 111, 0" // Material Amber
          fifthColor="66, 133, 244" // Android Blue
        />
      </div>

      <CustomCursor />
      <ThemeSwitcher />
      <FloatingActionButton />

      {/* Android System UI Simulation */}
      <StatusBar />

      {/* App Bar (Top Status Bar Style) */}
      <header className="w-full relative z-[5001] px-6 py-3 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-xl shadow-lg">
        <div className="flex items-center gap-3">
            <motion.div 
              layoutId="appIcon"
              className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] flex items-center justify-center text-sm font-black shadow-lg shadow-black/40"
            >
              A
            </motion.div>
            <div className="flex flex-col -gap-1">
                <span className="text-[#9999BB] text-[10px] uppercase font-bold tracking-widest leading-none">Android Native</span>
                <span className="text-white font-black tracking-tight text-lg leading-tight">{getScreenTitle()}</span>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="status-pill text-[10px] py-1 px-3 glass-1 border-none bg-[#00DE8A]/10 text-[#00DE8A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00DE8A] pulse-ring" />
                <span className="ml-1">SYSTEM ONLINE</span>
            </div>
        </div>
      </header>

      {/* Screen Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-10 overflow-y-auto no-scrollbar pt-4 pb-32 relative z-10">
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
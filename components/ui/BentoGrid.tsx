"use client";

import { useState, useEffect, useRef } from "react";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

// ─── Tech Stack Data ──────────────────────────────────────────────────────────
const leftStack = [
  { name: "Kotlin", color: "#7F52FF", icon: "🏔" },
  { name: "Jetpack Compose", color: "#00BCD4", icon: "🎨" },
  { name: "Room DB", color: "#FF6F00", icon: "🗄" },
  { name: "Hilt DI", color: "#4285F4", icon: "💉" },
];
const rightStack = [
  { name: "Coroutines", color: "#7F52FF", icon: "⚡" },
  { name: "Retrofit", color: "#00DE8A", icon: "🌐" },
  { name: "MVVM", color: "#00DE8A", icon: "🏗" },
  { name: "Socket.IO", color: "#FF6F00", icon: "📡" },
];

// ─── Spotlight Component ──────────────────────────────────────────────────────
const SpotlightOverlay = ({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) => (
  <motion.div
    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/bento:opacity-100 transition duration-300"
    style={{
      background: useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(127,82,255,0.1), transparent 40%)`
      ),
    }}
  />
);

// ─── MVVM Architecture Diagram (Card 1) ──────────────────────────────────────
const MVVMDiagram = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none overflow-hidden">
    {/* Background grid lines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(127,82,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(127,82,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

    <div className="relative flex flex-col items-center gap-3 w-full max-w-xs">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl border px-4 py-3 text-center glass-1"
        style={{ borderColor: "#7F52FF40" }}
      >
        <div className="text-[10px] font-bold text-[#a78bfa] mb-1 uppercase tracking-[0.2em]">View Layer</div>
        <div className="flex justify-center gap-2 flex-wrap">
          {["🎨 Compose", "📐 XML"].map(t => (
            <span key={t} className="chip text-[9px] py-0">{t}</span>
          ))}
        </div>
      </motion.div>

      <div className="w-px h-8 bg-gradient-to-b from-[#7F52FF] to-[#00DE8A] shadow-[0_0_10px_rgba(127,82,255,0.5)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full rounded-2xl border px-4 py-4 text-center glass-2"
        style={{ borderColor: "#00DE8A60" }}
      >
        <div className="text-[10px] font-bold text-[#00DE8A] mb-1 uppercase tracking-[0.2em]">ViewModel</div>
        <div className="flex justify-center gap-2 flex-wrap">
          {["⚡ StateFlow", "🔄 LiveData"].map(t => (
            <span key={t} className="chip chip-green text-[9px] py-0">{t}</span>
          ))}
        </div>
      </motion.div>

      <div className="w-px h-8 bg-gradient-to-b from-[#00DE8A] to-[#FF6F00] shadow-[0_0_10px_rgba(0,222,138,0.5)]" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full rounded-2xl border px-4 py-3 text-center glass-1"
        style={{ borderColor: "#FF6F0040" }}
      >
        <div className="text-[10px] font-bold text-[#FF6F00] mb-1 uppercase tracking-[0.2em]">Repository</div>
        <div className="flex justify-center gap-2">
          {["🗄 Room", "🌐 Retrofit"].map(t => (
            <span key={t} className="chip chip-amber text-[9px] py-0">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

// ─── BentoGrid Wrapper ────────────────────────────────────────────────────────
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-5 mx-auto py-10",
        className
      )}
    >
      {children}
    </div>
  );
};

// ─── BentoGridItem ────────────────────────────────────────────────────────────
export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("vadityamishra777@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const cardStyle = {
    1: { border: "#7F52FF30", glow: "hover:shadow-[0_0_50px_rgba(127,82,255,0.1)]" },
    2: { border: "#00BCD430", glow: "hover:shadow-[0_0_50px_rgba(0,188,212,0.1)]" },
    3: { border: "#00DE8A30", glow: "hover:shadow-[0_0_50px_rgba(0,222,138,0.1)]" },
    4: { border: "#FF6F0030", glow: "hover:shadow-[0_0_50px_rgba(255,111,0,0.1)]" },
    5: { border: "#7F52FF30", glow: "hover:shadow-[0_0_50px_rgba(127,82,255,0.1)]" },
    6: { border: "#00DE8A30", glow: "hover:shadow-[0_0_50px_rgba(0,222,138,0.1)]" },
  }[id] ?? { border: "#ffffff10", glow: "" };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-[2rem] border group/bento transition-all duration-500 flex flex-col glass-1",
        cardStyle.glow,
        className
      )}
      style={{
        borderColor: cardStyle.border,
        minHeight: id === 1 ? "260px" : "220px",
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <SpotlightOverlay mouseX={mouseX} mouseY={mouseY} />

      {/* ── Card 1: MVVM ── */}
      {id === 1 && (
        <>
          <MVVMDiagram />
          <div className="relative z-10 mt-auto p-6 lg:p-8 pt-20 bg-gradient-to-t from-[#08080f] via-[#08080f]/80 to-transparent">
            <div className="text-white font-bold text-sm sm:text-base lg:text-xl leading-snug line-clamp-3 sm:line-clamp-none">{title}</div>
            <div className="text-[#9999BB] text-xs mt-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7F52FF]" />
                Architectural Excellence
            </div>
          </div>
        </>
      )}

      {/* ── Card 2: Globe ── */}
      {id === 2 && (
        <div className="h-full relative overflow-hidden">
          <GridGlobe />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-[#08080f] to-transparent pt-12">
            <div className="text-white font-bold text-base lg:text-lg leading-snug">{title}</div>
          </div>
        </div>
      )}

      {/* ── Card 3: Tech Stack ── */}
      {id === 3 && (
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full gap-4 sm:gap-5">
          <div className="text-white font-bold text-base sm:text-xl">{title}</div>
          <div className="flex gap-2 flex-1">
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              {leftStack.map((item) => (
                <div key={item.name} className="flex items-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-2xl border bg-white/[0.03] border-white/5 text-[10px] sm:text-[11px] font-bold text-white/80 group-hover/bento:border-[#7F52FF40] transition-colors min-w-0">
                  <span className="text-base sm:text-lg shrink-0">{item.icon}</span>
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              {rightStack.map((item) => (
                <div key={item.name} className="flex items-center gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-2xl border bg-white/[0.03] border-white/5 text-[10px] sm:text-[11px] font-bold text-white/80 group-hover/bento:border-[#00DE8A40] transition-colors min-w-0">
                  <span className="text-base sm:text-lg shrink-0">{item.icon}</span>
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Card 4: Education ── */}
      {id === 4 && (
        <div className="p-6 lg:p-8 flex flex-col justify-center h-full gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6F00]/10 border border-[#FF6F00]/30 flex items-center justify-center text-3xl shadow-lg shadow-[#FF6F00]/10">🎓</div>
            <div>
                <div className="text-white font-black text-lg leading-tight">Mewar University</div>
                <div className="text-[#FF6F00] text-xs font-bold tracking-wider uppercase mt-1">CSE · RAJASTHAN</div>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-2">
                <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 1.5, ease: "circOut" }} className="h-full bg-gradient-to-r from-[#FF6F00] to-[#FFCA28] rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#9999BB]">
                <span>2024 – 2028</span>
                <span className="text-[#FF6F00]">SEM 04 / 08</span>
            </div>
        </div>
      )}

      {/* ── Card 5: SIKSHA ── */}
      {id === 5 && (
        <div className="relative h-full flex flex-col p-6 lg:p-8">
            <div className="flex-1 relative flex items-center justify-center">
                {/* Floating Mockup Shadow */}
                <div className="absolute w-32 h-6 bg-black/40 blur-xl rounded-full bottom-0" />
                <div className="relative w-32 h-56 rounded-[2rem] border-2 border-white/10 overflow-hidden glass-2 shadow-2xl animate-float-phone">
                    <div className="h-1.5 w-full bg-black/20" />
                    <div className="p-2 space-y-2">
                        <div className="h-6 rounded-lg bg-[#7F52FF]/20 border border-[#7F52FF]/30 flex items-center px-1.5 gap-1">
                            <div className="w-2 h-2 rounded-full bg-white/40" />
                            <div className="flex-1 h-1 bg-white/20 rounded-full" />
                        </div>
                        {[1,2,3].map(i => <div key={i} className="h-10 rounded-xl bg-white/5 border border-white/5" />)}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="status-pill text-[9px] py-1 px-2 border-none bg-[#7F52FF]/10 text-[#7F52FF] mb-2">ACTIVE PROJECT</div>
                <div className="text-white font-black text-xl leading-tight">SIKSHA</div>
                <div className="text-[#9999BB] text-[10px] uppercase font-bold tracking-widest mt-1">Elite School Management</div>
            </div>
        </div>
      )}

      {/* ── Card 6: Mail ── */}
      {id === 6 && (
        <div className="h-full flex flex-col items-center justify-center p-5 sm:p-8 gap-5 sm:gap-6 text-center">
            <div className="text-white font-black text-base sm:text-xl lg:text-2xl leading-tight max-w-[280px]">
                Ready to build the <span className="text-gradient-green">Next Big App?</span>
            </div>
            <button 
                onClick={handleCopy}
                className="relative group/mail w-full max-w-[260px] px-4 sm:px-8 py-3 sm:py-4 rounded-2xl glass-2 border-white/20 hover:border-[#00DE8A]/50 transition-all active:scale-95 flex items-center gap-2 sm:gap-3 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00DE8A]/10 to-transparent opacity-0 group-hover/mail:opacity-100 transition-opacity" />
                {copied ? <IoCheckmarkOutline className="text-[#00DE8A] text-lg shrink-0" /> : <IoCopyOutline className="text-white text-lg shrink-0" />}
                <span className="text-white font-bold text-xs sm:text-sm truncate relative z-10">{copied ? "Copied!" : "vadityamishra777@gmail.com"}</span>
            </button>
            <div className="flex flex-wrap gap-2 justify-center">
                {["Android", "Freelance", "Remote"].map(t => (
                    <span key={t} className="text-[9px] font-bold text-[#9999BB] uppercase tracking-[0.2em]">{t}</span>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};
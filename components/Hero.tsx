"use client";

import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdPhoneIphone, MdEmail, MdCloudDownload } from "react-icons/md";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const codeLines = [
  "class MainActivity : AppCompatActivity() {",
  "  val viewModel: AppViewModel by viewModels()",
  "  override fun onCreate(...) {",
  "    setContent { AppTheme { HomeScreen() } }",
  "  }",
  "}",
];

const techStack = [
  { name: "Kotlin", color: "#7F52FF", icon: "🏔" },
  { name: "Jetpack Compose", color: "#00BCD4", icon: "🎨" },
  { name: "MVVM", color: "#00DE8A", icon: "🏗" },
  { name: "Room DB", color: "#FF6F00", icon: "🗄" },
  { name: "Hilt DI", color: "#4285F4", icon: "💉" },
  { name: "Retrofit", color: "#00DE8A", icon: "🌐" },
];

const Hero = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax Transfroms
  const phoneX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const phoneY = useTransform(smoothY, [-500, 500], [-30, 30]);
  const bgX = useTransform(smoothX, [-500, 500], [20, -20]);
  const bgY = useTransform(smoothY, [-500, 500], [20, -20]);

  useEffect(() => {
    // Crucial performance fix: Only attach costly mouse listeners on devices with physical mice.
    // This stops touch-swipes from triggering 60fps parallax calculations on mobile CPUs.
    if (!window.matchMedia("(hover: hover)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;
    const line = codeLines[lineIndex];
    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setDisplayedCode((p) => p + line[charIndex]);
        setCharIndex((c) => c + 1);
      }, 35);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedCode((p) => p + "\n");
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  return (
    <div ref={containerRef} className="pb-16 pt-24 lg:pt-10 relative min-h-screen lg:min-h-[calc(100vh-140px)] flex flex-col justify-center overflow-hidden">
      {/* Immersive Background elements — Pushed to GPU, disabled on phone for 60fps scrolling */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7F52FF]/10 blur-[120px] rounded-full transform-gpu" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00DE8A]/10 blur-[120px] rounded-full transform-gpu" />
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12 mt-4 lg:mt-0 px-4 sm:px-0">
        {/* Subtle Ambient Glow behind text */}
        <div className="absolute inset-x-0 top-0 h-full bg-radial-gradient from-[#08080f]/90 to-transparent lg:hidden -z-10 pointer-events-none" />

        {/* LEFT — Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8 max-w-2xl w-full text-center lg:text-left relative z-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="status-pill glass-2 border-none text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00DE8A] pulse-ring inline-block" />
              Available for Android Projects
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <h1 className="text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter">
              <span className="text-white">Aditya</span>
              <br />
              <span className="text-gradient-green">Kumar</span>
              <br />
              <span className="text-gradient-violet">Mishra</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start bg-[#12121A]/50 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none px-4 py-2.5 sm:px-5 sm:py-3 lg:p-0 rounded-3xl border border-white/5 lg:border-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-2 flex items-center justify-center text-[#00DE8A] text-xl sm:text-2xl shadow-xl shadow-black/40 shrink-0">
                <MdPhoneIphone />
            </div>
            <div className="text-left">
                <p className="text-lg sm:text-2xl font-bold text-white/90 leading-tight">
                    Native Android Architect 
                </p>
                <p className="text-[10px] sm:text-sm font-bold text-[#9999BB] uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-0.5">
                    Kotlin · Compose · MVVM
                </p>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="text-sm sm:text-base lg:text-lg text-[#9999BB] leading-relaxed max-w-sm sm:max-w-lg mx-auto lg:mx-0 font-medium">
            Engineering robust mobile experiences with a focus on <span className="text-white font-bold">clean architecture</span> and <span className="text-white font-bold">real-time performance</span>. Turning complex ideas into fluid Android apps.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full items-center justify-center lg:justify-start pb-2 sm:pb-4">
            <div className="w-full sm:w-auto">
              <MagicButton title="Explore Apps" icon={<FaLocationArrow />} position="right" />
            </div>
            
            <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, link: "https://github.com/2b-adrix" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/2b-adrix" },
                  { icon: <MdEmail />, link: "mailto:vadityamishra777@gmail.com" }
                ].map((s, i) => (
                  <a key={i} href={s.link} target="_blank" className="w-12 h-12 rounded-xl glass-2 flex items-center justify-center text-white/70 hover:text-[#00DE8A] hover:border-[#00DE8A]/30 transition-all material-bounce bg-[#1a1a24]/50">
                    {s.icon}
                  </a>
                ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Interactive Phone Parallax (hidden on mobile/tablet) */}
        <motion.div 
            style={{ x: phoneX, y: phoneY }}
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }} 
            animate={{ opacity: 1, scale: 1, rotate: -5 }} 
            transition={{ delay: 0.3, duration: 1, ease: "circOut" }}
            className="hidden lg:flex flex-1 flex-col items-center relative"
        >
          {/* Phone Shell */}
          <div className="relative z-20 w-64 xl:w-72 h-[520px] xl:h-[580px] rounded-[3.5rem] p-4 glass-2 border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] ring-1 ring-white/10 group">
             {/* Screen Content */}
             <div className="w-full h-full rounded-[2.5rem] bg-[#050510] border border-white/5 overflow-hidden flex flex-col">
                <div className="h-6 w-full flex justify-between items-center px-6 py-4">
                    <span className="text-[10px] text-white/40 font-bold">9:41</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-1.5 rounded-sm bg-[#00DE8A]/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                </div>
                
                {/* Simulated App Content */}
                <div className="p-4 flex flex-col gap-4 flex-1">
                    <div className="h-12 rounded-2xl bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] p-0.5 shadow-lg shadow-[#7F52FF]/20">
                        <div className="w-full h-full rounded-[14px] bg-[#050510] flex items-center px-3 gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[#7F52FF] animate-pulse" />
                            <div className="flex-1 h-2 bg-white/10 rounded-full" />
                        </div>
                    </div>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-20 rounded-2xl bg-white/[0.03] border border-white/5 p-3 flex gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white/5" />
                            <div className="flex-1 space-y-2 py-1">
                                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                <div className="w-1/2 h-2 bg-white/5 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* Dynamic Glow Overlay inside phone */}
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#00DE8A]/10 via-transparent to-[#7F52FF]/10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>

          {/* Floating Kotlin Snippet */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-20 -right-16 w-64 glass-2 border-[#7F52FF]/30 p-4 rounded-2xl shadow-2xl z-30 hidden xl:block"
          >
            <div className="text-[#a78bfa] text-[10px] font-bold uppercase tracking-widest mb-2">Live Debugger</div>
            <pre className="text-[10px] leading-relaxed text-[#9999BB] font-mono whitespace-pre-wrap">
              <code>{displayedCode}<span className="text-[#00DE8A] animate-pulse font-black">|</span></code>
            </pre>
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-2 xl:-left-12 px-4 xl:px-6 py-3 xl:py-4 glass-2 border-[#00DE8A]/30 rounded-2xl z-30 shadow-2xl"
          >
            <div className="text-2xl xl:text-3xl font-black text-gradient-green">98%</div>
            <div className="text-[8px] font-bold text-[#9999BB] uppercase tracking-[0.2em] mt-1">Compose Performance</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
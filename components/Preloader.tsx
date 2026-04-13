"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buildLogs = [
  "> Configure project :portfolio",
  "> Task :app:preBuild UP-TO-DATE",
  "> Task :app:compileKotlinNative",
  "> Task :app:buildJetpackCompose",
  "> Task :app:generateRClass",
  "> Task :app:processDebugResources",
  "> Task :app:linkDebugExecutable",
  "> Task :app:assembleRelease",
  "BUILD SUCCESSFUL in 2.4s",
];

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(128);

  useEffect(() => {
    // Reveal logs sequentially with varying speeds for realism
    const logIntervals = [400, 300, 450, 400, 200, 250, 300, 350, 200];
    let currentLog = 0;
    
    const showNextLog = () => {
      if (currentLog < buildLogs.length - 1) {
        setLogIndex(currentLog + 1);
        currentLog++;
        setTimeout(showNextLog, logIntervals[currentLog % logIntervals.length]);
      }
    };
    
    setTimeout(showNextLog, 600);

    // Progress bar math - smooth and natural
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const remaining = 100 - prev;
        const jump = Math.random() * (remaining * 0.15);
        const next = prev + jump;
        
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
      
      // Mock memory usage fluctuation
      setMemoryUsage(prev => {
        const delta = (Math.random() - 0.5) * 20;
        return Math.max(120, Math.min(850, prev + delta));
      });
    }, 150);

    // End preloader after sequence completes
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: 'blur(20px)',
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden ambient-base"
        >
          {/* ─── Immersive Background Layers ─── */}
          <div className="absolute inset-0 ambient-grid opacity-30" />
          <div className="absolute inset-0 ambient-vignette" />
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] orb-1 animate-[drift-1_20s_infinite_alternate]" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] orb-4 animate-[drift-4_25s_infinite_alternate]" />
             <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] orb-2 animate-[drift-2_18s_infinite_alternate]" />
          </div>

          {/* Premium Noise Overlay */}
          <div className="noise-overlay" />

          {/* Main Glassmorphic Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg mx-auto px-6"
          >
            <div className="glass-2 p-8 rounded-[2rem] border-glow overflow-hidden relative group">
                
                {/* Subtle Scanline Effect inside the card */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent bg-[length:100%_4px] opacity-20" />

                <div className="flex flex-col gap-10">
                  
                  {/* Header: App Info & System Stats */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-[-8px] bg-[#00DE8A]/20 blur-xl rounded-2xl"
                        />
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] p-[1.5px] shadow-2xl relative">
                          <div className="w-full h-full bg-[#08080F] rounded-[14.5px] flex items-center justify-center backdrop-blur-xl text-white font-black text-2xl tracking-tighter">
                            A
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-gradient-green text-sm font-black tracking-[0.2em] uppercase">Gradle Build</span>
                        <div className="flex items-center gap-2">
                           <span className="text-white/40 text-[10px] font-mono tracking-wider">Aditya_Portfolio_v2.apk</span>
                           <span className="w-1 h-1 rounded-full bg-white/20" />
                           <span className="text-[#7F52FF] text-[10px] font-mono font-bold tracking-wider">v2.4.0-stable</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end font-mono text-[9px] text-white/30 uppercase tracking-widest gap-1">
                       <div className="flex items-center gap-2">
                          <span>MEM</span>
                          <span className="text-white/60">{Math.round(memoryUsage)}MB</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <span>CPU</span>
                          <span className="text-white/60">{(progress * 0.8 + 12).toFixed(1)}%</span>
                       </div>
                    </div>
                  </div>

                  {/* Terminal Logs: JetBrains Mono feel */}
                  <div className="flex flex-col gap-2 min-h-[140px] font-mono text-[13px] relative">
                    <div className="space-y-1.5">
                      {buildLogs.slice(0, logIndex + 1).map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -5, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          className={`flex items-start gap-3 ${
                            log.includes('SUCCESSFUL') 
                              ? 'text-[#00DE8A] font-bold mt-2' 
                              : 'text-white/50'
                          }`}
                        >
                          <span className="text-white/20 select-none w-4">{index + 1}</span>
                          <span className="flex-1">
                            {log}
                            {index === logIndex && logIndex < buildLogs.length - 1 && (
                              <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 ml-1 bg-[#00DE8A]/60 align-middle"
                              />
                            )}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <div className="flex flex-col gap-1">
                         <span className="text-[10px] text-white/40 uppercase font-black tracking-[0.2em]">Executing Tasks</span>
                         <span className="text-[10px] text-[#00DE8A]/80 font-mono tracking-widest animate-pulse">
                            {progress < 100 ? `Building artifacts...` : `Build Success`}
                         </span>
                       </div>
                       <span className="text-2xl font-black text-white/90 font-mono italic">
                          {Math.round(progress)}%
                       </span>
                    </div>

                    <div className="relative h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                      {/* Glimmer/Shine track */}
                      <motion.div
                        className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent w-[30%]"
                        animate={{ x: ['-100%', '400%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Main Progress Bar */}
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#7F52FF] via-[#00DE8A] to-[#00DE8A] relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: [0.22, 1, 0.36, 1] }}
                      >
                         {/* Leading edge glow */}
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white blur-md opacity-40 shrink-0" />
                      </motion.div>
                    </div>

                    <div className="flex justify-between items-center text-[8px] text-white/20 font-mono uppercase tracking-[0.3em]">
                       <span>Daemon: 8.4.1</span>
                       <span>Threads: 16 (optimized)</span>
                    </div>
                  </div>

                </div>
            </div>
          </motion.div>

          {/* Bottom Footer Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-0 w-full text-center"
          >
             <span className="text-white/15 text-[10px] uppercase tracking-[0.5em] font-medium">
                Initializing System Drivers
             </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
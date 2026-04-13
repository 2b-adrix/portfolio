"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buildLogs = [
  "> Configure project :portfolio",
  "> Task :app:preBuild UP-TO-DATE",
  "> Task :app:compileKotlinNative",
  "> Task :app:buildJetpackCompose",
  "> Task :app:assembleRelease",
  "BUILD SUCCESSFUL in 2s",
];

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Reveal logs sequentially
    const logTimer = setInterval(() => {
      setLogIndex(prev => {
        if (prev < buildLogs.length - 1) return prev + 1;
        return prev;
      });
    }, 350);

    // Progress bar math
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 25;
        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return next;
      });
    }, 200);

    // End preloader after 2.5s
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(logTimer);
      clearInterval(progressTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050510] flex flex-col items-center justify-center font-mono"
        >
          {/* subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#00DE8A]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

          <div className="relative z-10 w-full max-w-md px-6 flex flex-col gap-8">
            
            {/* Minimal App Icon / Status */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] p-[1px] shadow-[0_0_30px_rgba(0,222,138,0.3)]">
                 <div className="w-full h-full bg-[#050510]/90 rounded-[11px] flex items-center justify-center backdrop-blur-md text-white font-black text-xl">
                   A
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#00DE8A] text-xs font-black tracking-widest uppercase">Gradle Build</span>
                <span className="text-[#9999BB] text-[10px]">Aditya_Portfolio_v2.apk</span>
              </div>
            </motion.div>

            {/* Terminal Logs */}
            <div className="space-y-2 h-32 flex flex-col justify-end">
              {buildLogs.slice(0, logIndex + 1).map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-xs sm:text-sm ${
                    log.includes('SUCCESSFUL') 
                      ? 'text-[#00DE8A] font-bold' 
                      : 'text-[#9999BB]'
                  }`}
                >
                  {log}
                </motion.div>
              ))}
            </div>

            {/* Loading Bar */}
            <div className="space-y-3">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7F52FF] to-[#00DE8A]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "circOut" }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-white/50 font-bold tracking-widest uppercase">
                 <span>Executing Tasks</span>
                 <span>{Math.round(progress)}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
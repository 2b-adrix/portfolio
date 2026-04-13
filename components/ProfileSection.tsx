"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdVerified, MdLocationOn, MdSchool, MdPhoneIphone, MdCheckCircle } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { userInfo } from "@/data";

const ProfileSection = () => {
  return (
    <div className="w-full py-10 sm:py-16 flex flex-col items-center">
      {/* ─── Profile Header ─── */}
      <div className="relative mb-12 flex flex-col items-center">
        {/* Background Atmosphere Glow */}
        <div className="absolute inset-x-[-100px] inset-y-[-50px] bg-radial from-[#7F52FF]/20 via-transparent to-transparent blur-[100px] pointer-events-none opacity-60" />
        <div className="absolute inset-x-[-50px] inset-y-[-20px] bg-radial from-[#00DE8A]/10 via-transparent to-transparent blur-[80px] pointer-events-none opacity-40 translate-x-20" />

        {/* Animated Rings */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-18px] rounded-full border-2 border-dashed border-[#00DE8A]/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-30px] rounded-full border border-dashed border-[#7F52FF]/15"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-45px] rounded-full border border-white/5"
          />
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-br from-[#7F52FF] via-[#00DE8A] to-[#00BCD4] shadow-[0_0_60px_rgba(0,222,138,0.25)]"
          >
            <div className="w-full h-full rounded-full bg-[#050510] overflow-hidden flex items-center justify-center relative ring-4 ring-black/50 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00DE8A]/10 z-10" />
               <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl font-black text-white/10 uppercase select-none">AM</span>
               <Image src={userInfo.avatar} alt={userInfo.name} fill className="object-cover relative z-10 hover:scale-110 transition-transform duration-700" /> 
            </div>
          </motion.div>
          
          {/* Status Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-[#050510] p-1.5 rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,222,138,0.3)] z-20 cursor-help"
            title="Verified Architect"
          >
            <div className="bg-[#00DE8A] p-1 rounded-full text-white text-lg">
                <MdVerified className="drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-8 space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
              {userInfo.name.split(' ')[0]} <span className="text-gradient-green">{userInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-[#7F52FF] tracking-wide uppercase">{userInfo.headline}</p>
        </div>
      </div>

      {/* ─── Bio Module ─── */}
      <div className="w-full max-w-3xl mb-12">
        <div className="glass-2 p-1 rounded-[2rem] border-white/5 shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00DE8A]/40 to-transparent" />
          <div className="p-6 sm:p-10 bg-[#080810]/40 rounded-[1.8rem] relative">
            <div className="text-[10px] font-black text-[#9999BB] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00DE8A]" />
                Initialization Protocol / Bio
            </div>
            <p className="text-white font-medium text-base sm:text-lg leading-relaxed italic opacity-90">
                &quot;{userInfo.bio}&quot;
            </p>
          </div>
        </div>
      </div>

      {/* ─── System Specifications (Details) ─── */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4">
        {[
          { icon: <MdSchool />, label: "University", value: userInfo.university, color: "#7F52FF" },
          { icon: <MdLocationOn />, label: "Location", value: userInfo.location, color: "#00DE8A" },
          { icon: <MdPhoneIphone />, label: "Primary Focus", value: userInfo.role, color: "#00BCD4" },
          { icon: <MdCheckCircle />, label: "Status", value: userInfo.availability, color: "#FF6F00" }
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-1 p-5 sm:p-6 rounded-[1.5rem] border-white/5 flex items-center gap-5 border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all cursor-default group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}>
                {item.icon}
            </div>
            <div>
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#9999BB] mb-1">{item.label}</p>
                <p className="text-white font-bold text-sm sm:text-base group-hover:text-white transition-colors">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── Social Nodes ─── */}
      <div className="flex items-center gap-4 mt-12 sm:mt-16">
        {[
            { icon: <FaGithub />, link: "https://github.com/2b-adrix", color: "hover:text-[#00DE8A]" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/2b-adrix", color: "hover:text-[#7f52ff]" },
            { icon: <FaTwitter />, link: "https://x.com/AdityaMishraSu1", color: "hover:text-[#00BCD4]" }
        ].map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-14 h-14 rounded-2xl glass-2 border-white/10 flex items-center justify-center text-2xl text-[#9999BB] ${s.color} transition-all material-bounce`}
            >
                {s.icon}
            </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;

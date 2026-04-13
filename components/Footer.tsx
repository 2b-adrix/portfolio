"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdMessage } from "react-icons/md";
import { socialMedia } from "@/data";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Android3DBackground } from "./Android3DBackground";

const iconMap: Record<string, React.ReactNode> = {
  "/git.svg": <FaGithub className="text-white text-lg" />,
  "/twit.svg": <FaTwitter className="text-[#1DA1F2] text-lg" />,
  "/link.svg": <FaLinkedin className="text-[#0A66C2] text-lg" />,
  "/insta.svg": <FaInstagram className="text-[#E1306C] text-lg" />,
};

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-32 md:pb-10 relative overflow-hidden" id="contact">
      <Android3DBackground />
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00DE8A]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header Segment */}
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="status-pill glass-2 border-none bg-[#7F52FF]/10 text-[#7F52FF] py-1.5"
          >
            <MdMessage className="text-sm" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Contact Node</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.92]">
            Let&apos;s Build <span className="text-gradient-green">The Future</span>
            <br />
            <span className="text-gradient-violet">Together.</span>
          </h1>
          
          <p className="text-[#9999BB] max-w-xl text-sm sm:text-base md:text-lg font-medium leading-relaxed px-2 sm:px-0">
            Ready to deploy your next Android project? I&apos;m currently open to full-time roles, high-impact freelance, and creative collaborations.
          </p>
        </div>

        {/* Contact Logic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {[
            {
              icon: <MdEmail />,
              label: "Direct Email",
              value: "vadityamishra777@gmail.com",
              href: "mailto:vadityamishra777@gmail.com",
              color: "#00DE8A",
            },
            {
              icon: <FaPhone />,
              label: "Secure Line",
              value: "+91 8249618758",
              href: "tel:+918249618758",
              color: "#7F52FF",
            },
            {
              icon: <MdLocationOn />,
              label: "Current Region",
              value: "Jharsuguda, Odisha 🇮🇳",
              href: null,
              color: "#FF6F00",
            },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-2 p-6 rounded-[2rem] border-white/5 group hover:border-white/20 transition-all flex flex-col gap-4"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                style={{ background: c.color + "15", border: `1px solid ${c.color}30`, color: c.color }}
              >
                <span className="text-2xl">{c.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#9999BB] mb-1">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm font-bold text-white hover:text-[#00DE8A] transition-colors line-clamp-1"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-bold text-white">{c.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Connection Engine (Form) */}
        <div className="glass-2 p-1 sm:p-2 rounded-[2rem] sm:rounded-[2.5rem] border-white/5 mb-12 sm:mb-20">
             <div className="bg-[#080810]/50 rounded-[1.8rem] sm:rounded-[2.2rem] p-4 sm:p-8 md:p-12 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F52FF]/10 blur-[80px] rounded-full" />
                 <ContactForm />
             </div>
        </div>

        {/* Final Trace */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8 pt-8 sm:pt-10 border-t border-white/5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#7F52FF] to-[#00DE8A] flex items-center justify-center text-[10px] font-black">A</div>
                <span className="text-white font-black tracking-tighter">ADITYA KUMAR MISHRA</span>
            </div>
            <p className="text-[10px] font-bold text-[#5A5A7A] uppercase tracking-[0.2em]">
                &copy; 2026 NATIVE ANDROID DEVELOPER
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                title={info.label}
                className="w-12 h-12 flex justify-center items-center rounded-2xl glass-2 border-white/5 hover:border-[#00DE8A]/30 hover:bg-[#00DE8A]/5 text-[#9999BB] hover:text-[#00DE8A] transition-all material-bounce"
              >
                {iconMap[info.img] ?? <Image src={info.img} alt={info.label ?? "social"} width={20} height={20} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
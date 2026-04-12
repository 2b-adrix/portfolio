"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdSend, MdCheckCircle, MdErrorOutline } from "react-icons/md";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = "Full name required";
    if (!formData.email.trim()) e.email = "Email address required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email format";
    if (!formData.message.trim()) e.message = "Message cannot be empty";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate high-fidelity network request
    await new Promise((r) => setTimeout(r, 2200));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) {
      setErrors((p) => ({ ...p, [e.target.name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="flex flex-col items-center text-center p-8 gap-4"
      >
        <div className="w-20 h-20 rounded-full bg-[#00DE8A]/10 border border-[#00DE8A]/30 flex items-center justify-center mb-2">
            <MdCheckCircle className="text-[#00DE8A] text-5xl animate-bounce" />
        </div>
        <h3 className="text-3xl font-black text-white leading-tight">Transmission <br /><span className="text-gradient-green">Successful</span></h3>
        <p className="text-[#9999BB] text-sm max-w-[280px]">Your message has been received. I normally respond within a single business day.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-8 py-3 rounded-2xl glass-2 border-white/10 text-white font-bold text-sm hover:border-[#00DE8A]/50 transition-all material-bounce"
        >
          Send New Node
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9999BB] ml-2">App User / Name</label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Aditya Kumar"
              className={cn(
                "w-full px-6 py-4 rounded-2xl glass-2 border-white/5 text-white font-medium placeholder:text-white/10 focus:outline-none focus:ring-2 transition-all",
                errors.name ? "ring-red-500/50 border-red-500/20" : "focus:ring-[#7F52FF]/30 active:scale-[0.99]"
              )}
            />
            {errors.name && <MdErrorOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 text-xl" />}
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9999BB] ml-2">Contact Point / Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vadityamishra777@gmail.com"
              className={cn(
                "w-full px-6 py-4 rounded-2xl glass-2 border-white/5 text-white font-medium placeholder:text-white/10 focus:outline-none focus:ring-2 transition-all",
                errors.email ? "ring-red-500/50 border-red-500/20" : "focus:ring-[#00DE8A]/30 active:scale-[0.99]"
              )}
            />
            {errors.email && <MdErrorOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500/80 text-xl" />}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9999BB] ml-2">Message Payload</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your vision for the next Android app..."
          rows={5}
          className={cn(
            "w-full px-6 py-4 rounded-[2rem] glass-2 border-white/5 text-white font-medium placeholder:text-white/10 focus:outline-none focus:ring-2 transition-all resize-none",
            errors.message ? "ring-red-500/50 border-red-500/20" : "focus:ring-[#7F52FF]/30 active:scale-[0.99]"
          )}
        />
      </div>

      {/* Action Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-5 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden group/submit",
          isSubmitting 
            ? "bg-[#1A1A28] border border-white/5 text-white/30" 
            : "bg-gradient-to-r from-[#7F52FF] to-[#00DE8A] text-white shadow-[0_10px_30px_rgba(127,82,255,0.3)] hover:shadow-[0_15px_40px_rgba(127,82,255,0.5)] hover:-translate-y-1 active:scale-95"
        )}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/submit:opacity-100 transition-opacity" />
        {isSubmitting ? (
          <div className="flex gap-1.5 items-center">
              <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse [animation-delay:200ms]" />
              <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse [animation-delay:400ms]" />
              <span className="ml-2 uppercase tracking-widest text-[10px]">Processing Node...</span>
          </div>
        ) : (
          <>
            <MdSend className="text-xl group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
            Establish Connection
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
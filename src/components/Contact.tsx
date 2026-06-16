"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, GitBranch, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shashankpatgaonkar200011@gmail.com",
      href: "mailto:shashankpatgaonkar200011@gmail.com",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      glowColor: "rgba(45, 212, 191, 0.15)",
      hoverBorder: "hover:border-cyan-500/30",
      hoverShadow: "hover:shadow-[0_8px_32px_rgba(45,212,191,0.12)]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91465 67388",
      href: "tel:+919146567388",
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
      glowColor: "rgba(167, 139, 250, 0.15)",
      hoverBorder: "hover:border-violet-500/30",
      hoverShadow: "hover:shadow-[0_8px_32px_rgba(139,92,246,0.12)]",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: null,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      glowColor: "rgba(52, 211, 153, 0.15)",
      hoverBorder: "hover:border-emerald-500/30",
      hoverShadow: "hover:shadow-[0_8px_32px_rgba(52,211,153,0.12)]",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shashank-patgaonkar-a83529213/",
      hoverClass: "hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:shadow-[0_0_16px_rgba(10,102,194,0.4)]",
    },
    {
      icon: GitBranch,
      label: "GitHub",
      href: "https://github.com/shashank-1112",
      hoverClass: "hover:text-white hover:border-slate-400/50 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]",
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t from-cyan-600/8 via-violet-600/8 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-violet-500" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Contact</span>
            <span className="h-px w-8 bg-violet-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-8 text-center transition-all duration-300 ${item.hoverBorder} ${item.hoverShadow}`}
            >
              <div className={`w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center border border-slate-700/50`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className={`${item.iconColor} text-sm font-medium hover:brightness-125 transition-all break-words leading-relaxed`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white text-sm font-medium">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-semibold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 border-0 text-base"
            >
              <a href="mailto:shashankpatgaonkar200011@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Send an Email
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto glass hover:bg-violet-900/30 border-violet-500/30 text-slate-200 hover:text-white hover:border-violet-400/60 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] text-base"
            >
              <a href="/Shashank-Patgaonkar.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className={`w-12 h-12 flex items-center justify-center rounded-full glass border border-slate-700/50 text-slate-400 transition-all duration-300 hover:scale-110 ${link.hoverClass}`}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-slate-800/60 text-slate-500 text-sm font-medium"
        >
          <p>© {new Date().getFullYear()} Shashank Patgaonkar. Engineered with precision.</p>
        </motion.div>
      </div>
    </section>
  );
}

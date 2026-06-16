"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-violet-600/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {/* Available for New Opportunities */}
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              <span className="block text-slate-300 text-3xl md:text-4xl font-light mb-2">Hello, I&apos;m</span>
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                Shashank
              </span>
              <br />
              <span className="text-white">Patgaonkar</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Software Engineer specializing in <strong className="text-cyan-300 font-medium">GenAI</strong> and <strong className="text-violet-300 font-medium">Full-Stack Development</strong>. I build intelligent, scalable, and beautifully designed web and mobile applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400 text-sm mb-10">
              <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-md border border-slate-700/50">
                <MapPin className="w-4 h-4 text-cyan-400" /> Mumbai, India
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1.5 rounded-md border border-slate-700/50">
                <Phone className="w-4 h-4 text-violet-400" /> +91 91465 67388
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="magic-cursor-hover bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-semibold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 border-0"
              >
                <Mail className="w-4 h-4 mr-2" />
                Let&apos;s Connect
              </Button>
              <Button
                variant="outline"
                asChild
                className="magic-cursor-hover border-violet-500/30 glass hover:bg-violet-900/20 text-slate-200 hover:text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:border-violet-400/60"
              >
                <a href="/Shashank-Patgaonkar.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-5 mt-10">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/shashank-patgaonkar-a83529213/" },
                { icon: Github, href: "https://github.com/shashank-1112" },
                { icon: Mail, href: "mailto:shashankpatgaonkar200011@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center order-first lg:order-last mb-4 lg:mb-0 pt-16 pb-14 sm:pt-0 sm:pb-0"
          >
            {/* Glowing borders around image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-[2rem] transform rotate-3 scale-105 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-violet-500/10 rounded-[2rem] transform -rotate-3 scale-105 blur-3xl" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[2rem] overflow-hidden glass-card p-2 border-slate-700/50 z-10">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-900 flex items-center justify-center group">
                <Image
                  src="/profile_pic.png"
                  alt="Shashank Patgaonkar"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Fallback if image not found during dev */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-800 -z-10">
                  <span className="text-sm">profile_pic.png</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 top-2 sm:-right-4 md:-right-8 lg:-right-12 sm:top-10 lg:top-20 px-4 py-3 rounded-2xl border border-cyan-500/50 z-30 shadow-2xl bg-slate-950/95 backdrop-blur-2xl whitespace-nowrap"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">GenAI Specialist</div>
                  <div className="text-xs text-slate-400">LangChain & RAG</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-4 bottom-2 sm:-left-4 md:-left-8 lg:-left-12 sm:bottom-10 lg:bottom-20 px-4 py-3 rounded-2xl border border-violet-500/50 z-30 shadow-2xl bg-slate-950/95 backdrop-blur-2xl whitespace-nowrap"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Full-Stack Dev</div>
                  <div className="text-xs text-slate-400">C#, Angular, Flutter</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer p-2 rounded-full glass border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

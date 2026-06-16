"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Briefcase, label: "2+ Years", desc: "Professional Experience", colSpan: "col-span-2 md:col-span-1" },
    { icon: Code2, label: "Full-Stack", desc: "Developer Toolkit", colSpan: "col-span-2 md:col-span-1" },
    { icon: Sparkles, label: "GenAI", desc: "Specialist", colSpan: "col-span-2 md:col-span-1" },
    { icon: GraduationCap, label: "B.Tech", desc: "CS Engineering", colSpan: "col-span-2 md:col-span-1" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-cyan-500"></span>
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Future</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-8 glass-card p-8 md:p-10 rounded-[2rem] flex flex-col justify-center relative overflow-hidden group"
          >
            {/* Subtle hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-violet-500/5 transition-all duration-700" />
            
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              My Journey
              <ArrowUpRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </h3>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed relative z-10">
              <p>
                Software Engineer and GenAI Developer with a passion for building scalable
                web and mobile applications. Currently at{" "}
                <span className="text-cyan-400 font-medium px-1 bg-cyan-400/10 rounded-md">
                  Swabhav Venturelabs
                </span>
                , where I design enterprise-grade solutions.
              </p>

              <p>
                My technical expertise spans across{" "}
                <span className="text-white font-medium">
                  C#, Angular, Flutter, and SQL Server
                </span>
                . I have a deep focus on GenAI development, designing sophisticated LLM-powered
                workflows using{" "}
                <span className="text-violet-400 font-medium px-1 bg-violet-400/10 rounded-md">
                  LangChain, LangGraph, RAG systems, and MCP
                </span>
                .
              </p>

              <p>
                I thrive in agile environments, transforming complex requirements into production-grade
                applications while continuously exploring the bleeding edge of AI and software engineering.
              </p>
            </div>
          </motion.div>

          {/* Bento Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-5 lg:col-span-4 grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className={`glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center group ${item.colSpan}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all duration-300 border border-slate-700/50 group-hover:border-cyan-500/30">
                  <item.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300">{item.label}</div>
                <div className="text-slate-500 text-xs font-medium uppercase tracking-wider">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

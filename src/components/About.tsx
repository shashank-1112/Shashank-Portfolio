"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Briefcase, label: "2+ Years", desc: "Experience" },
    { icon: Code2, label: "Full-Stack", desc: "Developer" },
    { icon: Sparkles, label: "GenAI", desc: "Specialist" },
    { icon: GraduationCap, label: "B.Tech", desc: "CS Engineering" },
  ];

  return (
    <section id="about" className="py-25">
      {/* Background gradient (now correctly contained) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            Building the Future with Code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Software Development Engineer with a passion for building scalable
              web and mobile applications. Currently at{" "}
              <span className="text-cyan-400 font-medium">
                Swabhav Venturelabs
              </span>
              , where I design enterprise-grade solutions using modern
              technologies.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              My expertise spans across{" "}
              <span className="text-white">
                C#, Angular, Flutter, and SQL Server
              </span>
              , with hands-on experience in GenAI development—designing LLM-powered
              workflows using{" "}
              <span className="text-violet-400 font-medium">
                LangChain, LangGraph, RAG systems, and MCP
              </span>
              .
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              I thrive in agile environments, delivering production-grade
              applications while continuously exploring the intersection of AI
              and software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">{item.label}</div>
                <div className="text-slate-500 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Experience() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const timelinePhases = [
    {
      period: 'Aug 2023 - Jul 2025',
      title: 'Foundation & Full-Stack Development',
      company: 'Swabhav Venturelabs',
      role: 'Software Development Engineer',
      description: 'Built foundational skills in enterprise application development',
      highlights: [
        'Designed and developed enterprise-grade web and mobile applications using C#, Angular, and Flutter',
        'Worked on BTL Agraeta, connecting 150+ companies with internal stakeholders',
        'Built and maintained RESTful APIs supporting real-time workflows',
        'Planned database schemas and optimized SQL queries for performance',
      ],
      projects: [
        { name: 'BTL Agraeta Platform', link: '#projects' },
      ],
      icon: Building2,
      color: 'from-cyan-500 to-blue-500',
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.4)]',
    },
    {
      period: 'Aug 2025 - Present',
      title: 'GenAI Specialization',
      company: 'Swabhav Venturelabs',
      role: 'Software Development Engineer (GenAI)',
      description: 'Advanced into AI-powered solution development',
      highlights: [
        'Contributed as a GenAI Developer, building LLM-based workflows using LangChain, LangGraph, and MCP',
        'Developed RevenuAI with semantic search over 200+ documents',
        'Implemented RAG systems and vector databases for intelligent data retrieval',
        'Collaborated in Agile sprints delivering AI-powered features',
      ],
      projects: [
        { name: 'RevenuAI - Nexsales', link: '#projects' },
      ],
      icon: Zap,
      color: 'from-violet-500 to-purple-500',
      glow: 'shadow-[0_0_30px_rgba(139,92,246,0.4)]',
    },
  ];

  const education = {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'TKIET, Warananagar',
    period: '2019 – 2023',
  };

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="absolute -top-10 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-violet-400/10 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-violet-500"></span>
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">Career Path</span>
            <span className="h-px w-8 bg-violet-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Education</span>
          </h2>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {/* Timeline Navigation */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            {/* Timeline track */}
            <div className="absolute top-1/2 left-8 right-8 h-1.5 bg-slate-800 rounded-full -translate-y-1/2" />
            
            {/* Glowing progress line */}
            <div 
              className="absolute top-1/2 left-8 h-1.5 rounded-full -translate-y-1/2 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              style={{ 
                width: `calc(${((selectedPhase) / (timelinePhases.length - 1)) * 100}% - 4rem)`,
                background: `linear-gradient(90deg, #06b6d4, #8b5cf6)`
              }}
            />

            {/* Timeline nodes */}
            <div className="relative flex justify-between z-10">
              {timelinePhases.map((phase, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedPhase(index)}
                  className="group flex flex-col items-center outline-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-16 h-16 rounded-full border-[3px] transition-all duration-500 flex items-center justify-center mb-4 cursor-pointer relative ${
                    selectedPhase === index 
                      ? `border-transparent bg-gradient-to-br ${phase.color} ${phase.glow} scale-110` 
                      : 'border-slate-700 bg-slate-900 hover:border-slate-500'
                  }`}>
                    {selectedPhase === index && (
                      <div className="absolute inset-[-6px] rounded-full border border-white/20 animate-ping" style={{ animationDuration: '3s' }} />
                    )}
                    <phase.icon className={`w-7 h-7 transition-colors duration-500 ${selectedPhase === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
                  </div>
                  <span className={`text-xs font-semibold text-center max-w-[120px] transition-colors duration-500 ${
                    selectedPhase === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    {phase.period}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Phase Details */}
          <div className="relative glass-card rounded-[2rem] overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 md:p-12 relative"
              >
                {/* Accent gradient strip */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${timelinePhases[selectedPhase].color}`} />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{timelinePhases[selectedPhase].title}</h3>
                    <div className="flex flex-col gap-2 text-slate-300">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold text-lg">{timelinePhases[selectedPhase].company}</span>
                      </div>
                      <p className="text-md font-medium text-slate-400">{timelinePhases[selectedPhase].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 rounded-full glass border-slate-700/50 text-slate-300 text-sm font-medium self-start">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    {timelinePhases[selectedPhase].period}
                  </div>
                </div>

                <p className="text-slate-300 text-lg mb-8 pb-8 border-b border-slate-800 relative">
                  {timelinePhases[selectedPhase].description}
                </p>

                <div className="space-y-4 mb-8">
                  {timelinePhases[selectedPhase].highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-1 bg-slate-800/50 p-1 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      </div>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Related Projects */}
                {timelinePhases[selectedPhase].projects.length > 0 && (
                  <div className="pt-6">
                    <p className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-4">Related Projects</p>
                    <div className="flex flex-wrap gap-3">
                      {timelinePhases[selectedPhase].projects.map((project, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          onClick={() => {
                            const section = document.querySelector(project.link);
                            section?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="glass hover:bg-slate-800 border-slate-700/50 text-slate-300 hover:text-white group rounded-full px-6"
                        >
                          {project.name}
                          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-cyan-400" />
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card p-8 rounded-[2rem] flex flex-col md:flex-row md:items-center md:justify-between group hover:border-cyan-500/30 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{education.degree}</h3>
              <p className="text-slate-400 text-lg">{education.institution}</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0 text-slate-500 text-sm font-medium px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800">
              <Calendar className="w-4 h-4 text-slate-400" />
              {education.period}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
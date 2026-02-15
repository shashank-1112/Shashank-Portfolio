"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, CheckCircle2, ExternalLink, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Experience() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const timelinePhases = [
    {
      period: 'Aug 2023 - Mar 2024',
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
    },
    {
      period: 'Nov 2025 - Present',
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
    },
  ];

  const education = {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'TKIET, Warananagar',
    period: '2019 – 2023',
  };

  return (
    <section id="experience" className="py-24 relative">
          <div className="absolute -top-10 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent rounded-full blur-3xl" />
<div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-violet-400/20 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Experience & Education
          </h2>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Timeline Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">Career Timeline</h3>
            <p className="text-slate-500 text-sm">Click on each phase to explore details</p>
          </div>

          {/* Timeline Navigation */}
          <div className="relative mb-8">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((selectedPhase + 1) / timelinePhases.length) * 100}%` }}
            />

            {/* Timeline nodes */}
            <div className="relative flex justify-between">
              {timelinePhases.map((phase, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedPhase(index)}
                  className="group flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-16 h-16 rounded-full border-4 ${
                    selectedPhase === index 
                      ? 'border-slate-900 bg-gradient-to-br ' + phase.color + ' scale-110' 
                      : 'border-slate-800 bg-slate-900 group-hover:border-slate-700'
                  } transition-all duration-300 flex items-center justify-center mb-4 cursor-pointer`}>
                    <phase.icon className={`w-7 h-7 ${selectedPhase === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'} transition-colors`} />
                  </div>
                  <span className={`text-xs font-medium text-center max-w-[120px] ${
                    selectedPhase === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'
                  } transition-colors`}>
                    {phase.period}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Selected Phase Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 overflow-hidden"
            >
              {/* Accent gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${timelinePhases[selectedPhase].color}`} />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{timelinePhases[selectedPhase].title}</h3>
                  <div className="flex flex-col gap-2 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">{timelinePhases[selectedPhase].company}</span>
                    </div>
                    <p className="text-sm">{timelinePhases[selectedPhase].role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 md:mt-0 px-4 py-2 rounded-full bg-slate-700/50 text-slate-300 text-sm">
                  <Calendar className="w-4 h-4" />
                  {timelinePhases[selectedPhase].period}
                </div>
              </div>

              <p className="text-slate-400 italic mb-6 pb-6 border-b border-slate-700/50">
                {timelinePhases[selectedPhase].description}
              </p>

              <div className="space-y-3 mb-6">
                {timelinePhases[selectedPhase].highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-400">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              {/* Related Projects */}
              {timelinePhases[selectedPhase].projects.length > 0 && (
                <div className="pt-6 border-t border-slate-700/50">
                  <p className="text-sm text-slate-500 mb-3">Related Projects:</p>
                  <div className="flex flex-wrap gap-3">
                    {timelinePhases[selectedPhase].projects.map((project, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const section = document.querySelector(project.link);
                          section?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="border-slate-700 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white group"
                      >
                        {project.name}
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
                <p className="text-slate-400">{education.institution}</p>
              </div>
              <div className="flex items-center gap-2 mt-3 md:mt-0 text-slate-500 text-sm">
                <Calendar className="w-4 h-4" />
                {education.period}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
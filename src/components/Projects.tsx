"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Bot, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'BTL Agraeta',
      type: 'Production Project',
      icon: Building2,
      description: 'Web and mobile platform enabling direct interaction between 150+ company stakeholders and 20+ salespersons. Implemented features such as sales tracking, demand-supply reporting, and role-based access control.',
      tech: ['C#', 'Angular', 'Flutter', 'SQL Server'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'hover:border-cyan-500/50',
      iconColor: 'text-cyan-400',
      stats: ['150+ Companies', '20+ Salespersons'],
    },
    {
      title: 'RevenuAI – Nexsales',
      type: 'AI Platform',
      icon: Bot,
      description: 'Developed a company-based AI chatbot capable of understanding and analyzing unstructured documents and files. Analysis is done over 200+ files at a time with semantic search system. Generated predictive insights by analyzing customer and sales data.',
      tech: ['Python', 'Angular', 'Firebase', 'Vertex AI', 'LangChain'],
      gradient: 'from-violet-500/20 to-purple-500/20',
      borderColor: 'hover:border-violet-500/50',
      iconColor: 'text-violet-400',
      stats: ['200+ Files', 'Semantic Search'],
    },
    {
      title: 'Stock Market Forecasting',
      type: 'Academic Project',
      icon: TrendingUp,
      description: 'Built time-series forecasting models to analyze stock price movements. Focused on predictive modeling and data-driven decision making using machine learning techniques.',
      tech: ['Python', 'Machine Learning'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'hover:border-emerald-500/50',
      iconColor: 'text-emerald-400',
      stats: ['Time-Series', 'Predictive Models'],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group h-full"
            >
              <div className={`h-full p-6 rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 ${project.borderColor} transition-all duration-500 flex flex-col`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                  </div>
                  <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
                    {project.type}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-3 mb-6">
                  {project.stats.map((stat) => (
                    <span key={stat} className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium">
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-xs border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
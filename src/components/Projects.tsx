"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Bot, TrendingUp, GitBranch, LayoutDashboard, Gem } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  type: string;
  image: string;
  icon: React.ElementType;
  description: string;
  tech: string[];
  gradient: string;
  iconColor: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative h-full rounded-[2rem] glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
        style={isFeatured ? {
          border: '1px solid rgba(251, 191, 36, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(251, 191, 36, 0.08)',
        } : undefined}
      >
        {/* Featured ribbon */}
        {isFeatured && (
          <div className="absolute top-5 right-4 z-20">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/60"
              style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 0.45)' }}
            >
              Featured
            </span>
          </div>
        )}

        {/* Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
              isFeatured ? 'rgba(251, 191, 36, 0.12)' : 'rgba(45, 212, 191, 0.15)'
            }, transparent 40%)`,
          }}
        />

        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900/50 -z-10">
            <span className="text-sm font-mono">{project.image}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="backdrop-blur-md bg-slate-900/50 border-slate-600 text-slate-300 text-xs py-1 px-3 rounded-full">
              {project.type}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-slate-700/50`}>
              <project.icon className={`w-6 h-6 ${project.iconColor}`} />
            </div>

            <div className="flex gap-2">
              <a
                href={project.githubUrl ?? '#'}
                target={project.githubUrl ? '_blank' : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700/50"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl ?? '#'}
                target={project.liveUrl ? '_blank' : undefined}
                rel="noreferrer"
                className={`w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 transition-colors border border-slate-700/50 ${
                  isFeatured ? 'hover:text-amber-400 hover:bg-amber-900/30' : 'hover:text-cyan-400 hover:bg-cyan-900/30'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {project.role && (
            <p className="text-xs font-medium text-amber-400/80 mb-1 tracking-wide">{project.role}</p>
          )}

          <h3 className={`text-2xl font-bold text-white mb-3 transition-all duration-300 ${
            isFeatured
              ? 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400'
              : 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400'
          }`}>
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  isFeatured
                    ? 'bg-amber-950/30 text-amber-300 border-amber-500/20 group-hover:border-amber-400/40'
                    : 'bg-slate-800/50 text-slate-300 border-slate-700/50 group-hover:border-slate-600/50'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'GS Euphoria',
      type: 'Client Project',
      role: 'Team Lead & Full-Stack Developer',
      icon: LayoutDashboard,
      image: '/project_gs_euphoria.png',
      description: 'An exhibition management platform digitizing exhibitor onboarding, stall booking, payment tracking, ticketing, and settlement workflows for admins, sales, accounts, and exhibitor teams.',
      tech: ['.NET Core', 'Angular', 'Flutter', 'SQL Server', 'Entity Framework', 'REST APIs', 'Payment Gateway'],
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
    },
    {
      title: 'Rivaazé',
      type: 'E-Commerce',
      icon: Gem,
      image: '/project_rivaaze.png',
      description: 'Full-stack luxury jewellery e-commerce platform with live metal rate pricing (Gold, Silver, Platinum via metals.dev), dynamic price calculation, product catalog with multi-filter support, and a complete admin panel with inventory management.',
      tech: ['ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'TanStack Query', 'JWT', 'Docker'],
      gradient: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-400',
      liveUrl: 'https://rivaaze.vercel.app',
    },
    {
      title: 'BTL Agraeta',
      type: 'Production Project',
      icon: Building2,
      image: '/project_btl_agraeta.png',
      description: 'Web and mobile platform enabling direct interaction between 150+ company stakeholders and 20+ salespersons. Implemented features such as sales tracking, demand-supply reporting, and role-based access control.',
      tech: ['C#', 'Angular', 'Flutter', 'SQL Server'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'RevenuAI – Nexsales',
      type: 'AI Platform',
      icon: Bot,
      image: '/project_revenuai.png',
      description: 'Developed a company-based AI chatbot capable of understanding and analyzing unstructured documents and files. Analysis is done over 200+ files at a time with semantic search system. Generated predictive insights by analyzing customer and sales data.',
      tech: ['Python', 'Angular', 'Firebase', 'Vertex AI', 'LangChain'],
      gradient: 'from-violet-500/20 to-purple-500/20',
      iconColor: 'text-violet-400',
    },
    {
      title: 'Stock Market Forecasting',
      type: 'Academic Project',
      icon: TrendingUp,
      image: '/project_stock_market.png',
      description: 'Built time-series forecasting models to analyze stock price movements. Focused on predictive modeling and data-driven decision making using machine learning techniques.',
      tech: ['Python', 'Machine Learning'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/5 via-violet-600/5 to-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-cyan-500"></span>
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Portfolio</span>
            <span className="h-px w-8 bg-cyan-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Projects</span>
          </h2>
        </motion.div>

        {/* Row 1: 3 cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 mx-auto">
          {projects.slice(3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

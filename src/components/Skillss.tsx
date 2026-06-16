"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SiPython, SiDart, SiJavascript, SiCplusplus, SiAngular, SiHtml5, SiFlutter, SiMysql, SiFirebase, SiGit, SiPostman, SiGooglecloud } from 'react-icons/si';
import { FaDatabase, FaNetworkWired, FaBrain, FaRobot, FaTerminal, FaUsers, FaProjectDiagram, FaCube, FaLightbulb, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-cyan-400 to-cyan-600',
      border: 'group-hover:border-cyan-500/50',
      bg: 'group-hover:bg-cyan-500/10',
      skills: [
        { name: 'C#', icon: TbBrandCSharp },
        { name: 'Python', icon: SiPython },
        { name: 'Dart', icon: SiDart },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'C/C++', icon: SiCplusplus },
        { name: 'SQL', icon: FaDatabase },
      ],
    },
    {
      title: 'Frontend',
      color: 'from-violet-400 to-violet-600',
      border: 'group-hover:border-violet-500/50',
      bg: 'group-hover:bg-violet-500/10',
      skills: [
        { name: 'Angular', icon: SiAngular },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'Flutter', icon: SiFlutter },
      ],
    },
    {
      title: 'Backend & DB',
      color: 'from-emerald-400 to-emerald-600',
      border: 'group-hover:border-emerald-500/50',
      bg: 'group-hover:bg-emerald-500/10',
      skills: [
        { name: 'RESTful APIs', icon: FaNetworkWired },
        { name: 'SQL Server', icon: FaDatabase },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      title: 'GenAI & AI',
      color: 'from-amber-400 to-orange-500',
      border: 'group-hover:border-amber-500/50',
      bg: 'group-hover:bg-amber-500/10',
      skills: [
        { name: 'LangChain', icon: FaBrain },
        { name: 'LangGraph', icon: FaBrain },
        { name: 'MCP', icon: FaNetworkWired },
        { name: 'Prompt Engineering', icon: FaTerminal },
        { name: 'Vertex AI', icon: SiGooglecloud },
        { name: 'Vector DB', icon: FaDatabase },
        { name: 'RAG', icon: FaRobot },
      ],
    },
    {
      title: 'Tools',
      color: 'from-pink-400 to-rose-600',
      border: 'group-hover:border-pink-500/50',
      bg: 'group-hover:bg-pink-500/10',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Postman', icon: SiPostman },
        { name: 'Agile/Scrum', icon: FaUsers },
      ],
    },
    {
      title: 'Core CS',
      color: 'from-blue-400 to-indigo-600',
      border: 'group-hover:border-blue-500/50',
      bg: 'group-hover:bg-blue-500/10',
      skills: [
        { name: 'Data Structures', icon: FaProjectDiagram },
        { name: 'OOP', icon: FaCube },
        { name: 'DBMS', icon: FaDatabase },
        { name: 'Problem Solving', icon: FaLightbulb },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-cyan-500"></span>
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Expertise</span>
            <span className="h-px w-8 bg-cyan-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`h-full p-8 rounded-[2rem] glass-card border-slate-700/50 transition-all duration-500 ${category.border} ${category.bg}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">{category.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-slate-800/80 backdrop-blur-sm text-slate-300 text-sm font-medium border border-slate-700/50 group-hover:border-slate-600/50 hover:text-white hover:shadow-lg transition-all duration-300 cursor-default flex items-center gap-2"
                    >
                      <skill.icon className="w-4 h-4" />
                      {skill.name}
                    </motion.span>
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
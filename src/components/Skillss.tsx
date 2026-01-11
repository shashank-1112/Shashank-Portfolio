"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-cyan-500 to-cyan-600',
      skills: ['C#', 'Python', 'Dart', 'JavaScript', 'C/C++', 'SQL'],
    },
    {
      title: 'Frontend',
      color: 'from-violet-500 to-violet-600',
      skills: ['Angular', 'HTML5', 'CSS3', 'Flutter'],
    },
    {
      title: 'Backend & DB',
      color: 'from-emerald-500 to-emerald-600',
      skills: ['RESTful APIs', 'SQL Server', 'MySQL', 'Firebase'],
    },
    {
      title: 'GenAI & AI',
      color: 'from-amber-500 to-orange-500',
      skills: ['LangChain', 'LangGraph', 'MCP', 'Prompt Engineering', 'Vertex AI', 'Vector DB', 'RAG'],
    },
    {
      title: 'Tools',
      color: 'from-pink-500 to-rose-500',
      skills: ['Git', 'Postman', 'Agile/Scrum'],
    },
    {
      title: 'Core CS',
      color: 'from-blue-500 to-indigo-500',
      skills: ['Data Structures', 'OOP', 'DBMS', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative ">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} text-white mb-4`}>
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 rounded-lg bg-slate-700/50 text-slate-300 text-sm hover:bg-slate-700 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
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
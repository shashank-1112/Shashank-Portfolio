"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shashankpatgaonkar200011@gmail.com',
      href: 'mailto:shashankpatgaonkar200011@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 91465 67388',
      href: 'tel:+919146567388',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shashank-patgaonkar',
      color: 'hover:text-blue-400 hover:border-blue-400/50',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/shashankpatgaonkar',
      color: 'hover:text-slate-300 hover:border-slate-500/50',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-cyan-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-8xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-white font-medium hover:text-cyan-400 transition-colors break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 pt-8 border-t border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-semibold px-8 py-6 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40"
              >
                <a href="mailto:shashankpatgaonkar200011@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-violet-700/50 bg-slate-800/50 hover:bg-violet-900/30 hover:border-violet-600/50 text-slate-300 hover:text-violet-300 px-8 py-6 rounded-full transition-all duration-300"
              >
                <a href="/resume-shashank-patgaonkar.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-slate-700/50 border border-slate-600/50 text-slate-400 transition-all duration-300 hover:scale-110 ${link.color}`}
                  title={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 text-slate-600 text-sm"
        >
          <p>© 2024 Shashank Patgaonkar. Built with passion.</p>
        </motion.div>
      </div>
    </section>
  );
}
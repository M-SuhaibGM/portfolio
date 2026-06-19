"use client";
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const EXPERIENCE_DATA = [
  {
    company: "NIT-SERVICES",
    location: "Lahore, Pakistan",
    role: "Full Stack Development ",
    duration: "2025",
    description: "Contributed to high-performance web solutions and collaborated with senior developers to implement scalable features.",
    achievements: [
      "Mastered production-grade Next.js workflows and server-side rendering strategies.",
      "Optimized database queries and schema designs using Prisma and PostgreSQL.",
      "Integrated secure authentication systems and role-based access control.",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-3xl font-black text-white tracking-tighter"
          >
            PROFESSIONAL <span className="text-blue-500 italic">JOURNEY</span>
          </motion.h2>
          <div className="h-1.5 w-32 bg-blue-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Professional Summary */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed">
              My professional background is rooted in building efficient, user-centric applications.
              I focus on bridging the gap between complex backend logic and seamless frontend experiences.
            </p>
            <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20">
              <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Philosophy</p>
              <p className="text-white text-sm italic font-medium">
                Code is not just about solving problems; it`&apos;s about creating scalable systems that empower users.
              </p>
            </div>
          </div>

          {/* Right Side: Experience Cards */}
          <div className="lg:col-span-8 space-y-8">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500 group overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] group-hover:bg-blue-600/20 transition-all" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-blue-500">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span className="text-xs font-black uppercase tracking-widest">{exp.role}</span>
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tight">{exp.company}</h3>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 text-slate-400 text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Learnings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-blue-400 uppercase tracking-tighter border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 

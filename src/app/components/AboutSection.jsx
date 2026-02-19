"use client";
import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabButton from "./TabButton";
import {
  AcademicCapIcon,
  MapPinIcon,
  SparklesIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="space-y-6"
      >
        {[
          {
            degree: "BS Computer Science",
            school: "University of Okara",
            year: "2022 - 2026",
            desc: "Focusing on Software Engineering and Modern Web Tech."
          },
          {
            degree: "ICS (Physics)",
            school: "Concordia College Ellah Abad",
            year: "2020 - 2022",
            desc: "Intermediate in Computer Science."
          },
          {
            degree: "Matriculation",
            school: "Govt. Higher Secondary School Kangan Pur",
            year: "2018 - 2020",
            desc: "Science Stream with Computer Science focus."
          },
        ].map((edu, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-blue-500/30 py-1">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7.5px] top-2 shadow-[0_0_12px_#3b82f6]" />
            <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{edu.degree}</h4>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.school}</p>
            <p className="text-xs text-slate-500 mt-1 italic">{edu.desc}</p>
            <p className="text-[10px] font-mono mt-2 uppercase tracking-tighter opacity-70 dark:text-slate-400">{edu.year}</p>
          </div>
        ))}
      </motion.div>
    ),
  },
  // You can add "Certifications" or "Experience" here later in the same format
];

const AboutSection = () => {
  // FIXED: Set default to 'education' to prevent the crash
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-20 text-slate-900 dark:text-slate-200" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-start xl:gap-24">

        {/* LEFT SIDE: Identity & Status */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 h-[450px] shadow-2xl group"
          >
            <img
              src="/images/bg.jpg"
              alt="Work Setup"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
              <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] opacity-70 uppercase font-black tracking-widest">Current Location</p>
                <span className="text-base font-bold">lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-blue-500/50 transition-all group">
              <SparklesIcon className="w-6 h-6 text-yellow-500 mb-3 group-hover:rotate-12 transition-transform" />
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Currently Learning</p>
              <p className="text-sm font-bold leading-tight dark:text-white">AWS (cdk)</p>
            </div>
            <div className="p-5 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-blue-500/50 transition-all group">
              <BriefcaseIcon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Status</p>
              <p className="text-sm font-bold leading-tight dark:text-white">Open for Web Development Roles</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Narrative & Education */}
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <div className="mb-8">
            <h2 className="text-5xl font-black mb-6 tracking-tighter dark:text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Me</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a specialized Full-Stack Developer with a deep focus on performance and minimalist design.
              Currently pursuing my <span className="text-blue-600 dark:text-blue-400 font-bold">Bachelor’s in Computer Science</span> at the University of Okara.
            </p>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              I thrive in the intersection of logic and creativity, building tools that are as powerful under the hood as they are beautiful to the user.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex flex-row gap-8 mb-8 border-b border-black/5 dark:border-white/10">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Content Area */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BACKGROUND TECH MARQUEE (Kept for visual flair) */}
      <div className="mt-32 overflow-hidden relative opacity-30 dark:opacity-60 pointer-events-none">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap select-none"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["NEXT.JS", "REACT", "AWS", "PRISMA", "MONGODB", "TYPESCRIPT", "TAILWIND", "NODE.JS"].map((tech) => (
                <span key={tech} className="text-6xl md:text-8xl font-black text-transparent border-b-4 border-blue-500/20 px-2 italic">
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
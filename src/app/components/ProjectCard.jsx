"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import {
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  TrophyIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

const ProjectCard = ({ project, index }) => {
  const { title, description, role, image, gitUrl, previewUrl, tech, features, achievements } = project;
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-40 lg:mb-64">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 lg:gap-24 items-start`}
      >

        {/* LEFT/RIGHT SIDE: STICKY THUMBNAIL */}
        {/* h-[fit-content] and sticky top allow the image to stay in view as you scroll the text */}
        <div className="w-full md:w-1/2 md:sticky md:top-32 h-fit">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 bg-slate-900"
          >
            <Image
              src={image}
              alt={title}
              width={1200}
              height={800}
              className="w-full h-auto aspect-video object-cover transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* View Project Button on Image Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {previewUrl != "/" && <Link href={previewUrl} target="_blank" className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl">
                VIEW LIVE
              </Link>}
            </div>
          </motion.div>
        </div>

        {/* CONTENT SIDE: THIS SCROLLS NATURALLY */}
        <div className="w-full md:w-1/2 py-4">
          <div className="space-y-8">
            {/* Header: Role & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20">
                {role}
              </span>
              <div className="flex gap-4">
                <Link href={gitUrl || "#"} target="_blank" className="hover:scale-110 transition-all opacity-70 hover:opacity-100">
                  <Image src={GithubIcon} alt="Github" width={24} height={24} className="invert dark:invert-0" />
                </Link>
                {previewUrl && previewUrl !== "/" && (
                  <Link href={previewUrl} target="_blank" className="text-blue-500 hover:scale-110 transition-all">
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </Link>
                )}
              </div>
            </div>

            {/* Title & Main Description */}
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                {title}
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* TECH STACK */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-blue-500">
                <CommandLineIcon className="w-5 h-5" />
                <p className="text-xs font-black uppercase tracking-widest">Core Stack</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-300 font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div className="space-y-4 pt-4">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-500">Key Features</p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 group">
                    <div className="mt-1 p-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <CheckBadgeIcon className="w-4 h-4" />
                    </div>
                    <span className="text-base lg:text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="space-y-4 pt-8 border-t border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2 text-amber-500">
                <TrophyIcon className="w-5 h-5" />
                <p className="text-xs font-black uppercase tracking-widest">Impact & Learning</p>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 text-slate-700 dark:text-amber-100/90 font-medium"
                  >
                    {achievement}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
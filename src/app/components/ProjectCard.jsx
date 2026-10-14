"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import {
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  TrophyIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const TECH_PREVIEW_COUNT = 8;

// "Real-time Multiplayer: Create a room..." -> { label, text }
const splitLabel = (str) => {
  const match = str.match(/^([^:]{2,40}):\s+(.+)$/);
  return match ? { label: match[1], text: match[2] } : { label: null, text: str };
};

const ProjectCard = ({ project, index }) => {
  const {
    title,
    description,
    role,
    image,
    gitUrl,
    previewUrl,
    tech = [],
    features = [],
    achievements = [],
    challenges = [],
  } = project;

  const reduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;
  const hasLive = Boolean(previewUrl) && previewUrl !== "/";
  const hasRepo = Boolean(gitUrl);

  // Only show tabs that actually have content
  const tabs = [
    { id: "features", label: "Features", items: features, Icon: CheckBadgeIcon, color: "emerald" },
    { id: "impact", label: "Impact & Learning", items: achievements, Icon: TrophyIcon, color: "amber" },
    { id: "challenges", label: "Challenges", items: challenges, Icon: WrenchScrewdriverIcon, color: "rose" },
  ].filter((t) => t.items.length > 0);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [showAllTech, setShowAllTech] = useState(false);

  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];
  const visibleTech = showAllTech ? tech : tech.slice(0, TECH_PREVIEW_COUNT);
  const hiddenCount = tech.length - TECH_PREVIEW_COUNT;

  const colorClasses = {
    emerald: {
      active: "bg-emerald-500 text-white border-emerald-500",
      icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    },
    amber: {
      active: "bg-amber-500 text-white border-amber-500",
      icon: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    },
    rose: {
      active: "bg-rose-500 text-white border-rose-500",
      icon: "bg-rose-500/10 border-rose-500/20 text-rose-500",
    },
  };

  const Thumbnail = (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      className="relative group rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 bg-slate-900"
    >
      <Image
        src={image}
        alt={`${title} screenshot`}
        width={1200}
        height={800}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="w-full h-auto aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      {hasLive && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl">
            VIEW LIVE
          </span>
        </div>
      )}
    </motion.div>
  );

  return (
    <article className="relative mb-24 lg:mb-40" aria-labelledby={`project-${project.id}-title`}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 lg:gap-24 items-start`}
      >
        {/* STICKY THUMBNAIL (whole image is a link when a live demo exists) */}
        <div className="w-full md:w-1/2 md:sticky md:top-32 h-fit">
          {hasLive ? (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="block rounded-[2rem] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
            >
              {Thumbnail}
            </Link>
          ) : (
            Thumbnail
          )}
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2 py-4">
          <div className="space-y-8">
            {/* Role + links */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20">
                {role}
              </span>
              <div className="flex gap-4">
                {hasRepo && (
                  <Link
                    href={gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} source code on GitHub`}
                    className="hover:scale-110 transition-all opacity-70 hover:opacity-100"
                  >
                    <Image src={GithubIcon} alt="" width={24} height={24} className="invert dark:invert-0" />
                  </Link>
                )}
                {hasLive && (
                  <Link
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live demo`}
                    className="text-blue-500 hover:scale-110 transition-all"
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </Link>
                )}
              </div>
            </div>

            {/* Title + description */}
            <div className="space-y-4">
              <h3
                id={`project-${project.id}-title`}
                className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none"
              >
                {title}
              </h3>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* Tech stack (collapsed when long) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <CommandLineIcon className="w-5 h-5" />
                <p className="text-xs font-black uppercase tracking-widest">Core Stack</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {visibleTech.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-sm text-slate-700 dark:text-slate-300 font-bold"
                  >
                    {item}
                  </li>
                ))}
                {hiddenCount > 0 && (
                  <li>
                    <button
                      type="button"
                      onClick={() => setShowAllTech((v) => !v)}
                      aria-expanded={showAllTech}
                      className="px-4 py-2 rounded-xl text-sm font-bold text-blue-500 border border-blue-500/30 hover:bg-blue-500/10 transition-colors"
                    >
                      {showAllTech ? "Show less" : `+${hiddenCount} more`}
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Tabbed details: Features / Impact / Challenges */}
            {current && (
              <div className="space-y-5 pt-6 border-t border-black/5 dark:border-white/10">
                <div role="tablist" aria-label={`${title} details`} className="flex flex-wrap gap-2">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      role="tab"
                      type="button"
                      aria-selected={t.id === current.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-colors ${
                        t.id === current.id
                          ? colorClasses[t.color].active
                          : "border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                      }`}
                    >
                      {t.label}
                      <span className="ml-2 opacity-70">{t.items.length}</span>
                    </button>
                  ))}
                </div>

                <ul role="tabpanel" className="space-y-4">
                  {current.items.map((entry) => {
                    const { label, text } = splitLabel(entry);
                    return (
                      <li key={entry} className="flex items-start gap-4 text-slate-600 dark:text-slate-400">
                        <div className={`mt-1 p-1 rounded-md border ${colorClasses[current.color].icon}`}>
                          <current.Icon className="w-4 h-4" />
                        </div>
                        <span className="text-base lg:text-lg font-medium">
                          {label && (
                            <strong className="text-slate-900 dark:text-white font-bold">{label}: </strong>
                          )}
                          {text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default ProjectCard;
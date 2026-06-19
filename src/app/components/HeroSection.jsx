"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  MapPinIcon,
  ArrowDownTrayIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const badges = [
  {
    icon: CodeBracketIcon,
    label: "React Development",
    position: "top-12 -left-6 lg:-left-12",
    delay: 0,
  },
  {
    icon: RocketLaunchIcon,
    label: "Next.js",
    position: "top-1/2 -right-6 lg:-right-12 -translate-y-1/2",
    delay: 0.4,
  },
  {
    icon: CloudIcon,
    label: "AWS / Cloud",
    position: "bottom-16 -left-4 lg:-left-10",
    delay: 0.8,
  },
];

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "30+", label: "Projects Completed" },
];

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 xl:py-32 overflow-hidden w-full">
      {/* Ambient blue glows — accents only, not a background fill */}
      <div className="absolute top-[-120px] left-[-80px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-600/15 blur-[100px] sm:blur-[130px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[5%] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-cyan-500/10 blur-[90px] sm:blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 relative z-10 gap-12 lg:gap-8 xl:gap-16 items-start lg:items-center">
        
        {/* LEFT CONTENT - Now first on all screens */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 pt-0 lg:pt-8"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Available for Work
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4">
            <span className="block text-lg sm:text-xl font-semibold text-slate-300 mb-2">
              Hi, I&apos;m M. Suhaib
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Let&apos;s Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Modern Web
              </span>{" "}
              Experiences Together
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-4 leading-relaxed">
            I build fast, responsive, and scalable web applications using
            React, Next.js, and AWS — turning ideas into products that
            actually ship.
          </p>

          {/* Typing animation shifted to Left Side & Increased Font Size */}
          <div className="flex items-center gap-2 mb-6 text-base md:text-xl font-bold min-h-[32px]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
            <span className="text-slate-400 font-medium">Currently:</span>
            <TypeAnimation
              sequence={[
                "Building with Next.js", 2000,
                "Crafting React Apps", 2000,
                "Deploying on AWS", 2000,
                "Designing Responsive UI", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-400"
            />
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-8">
            <MapPinIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span>Based in Lahore, Punjab — available remotely</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <Link
              href="#contact"
              className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-black hover:opacity-90 transition-all text-center shadow-lg shadow-blue-500/20"
            >
              Let&apos;s Talk
            </Link>
            <a
              href="/Resume.pdf"
              download
              className="px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/15 hover:bg-white/5 text-white font-bold flex items-center justify-center gap-2 transition-all"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download CV
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="w-px h-12 bg-white/10" />}
                <div className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl font-black text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE - Now second on all screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="col-span-1 lg:col-span-5 xl:col-span-6 flex flex-col items-center lg:items-start justify-center relative mt-6 lg:mt-0 order-2 lg:order-2"
        >
          {/* Bigger sizes: max 400px on mobile/tablet -> up to 460px on lg -> up to 520px on xl */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[460px] xl:max-w-[520px] lg:-ml-8 xl:-ml-12">
            
            {/* Soft circular shade behind the photo - added white tone */}
            <div
              className="absolute inset-0 -z-10 rounded-full blur-[60px] lg:blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(37,99,235,0.12) 35%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.03) 80%, transparent 100%)",
                transform: "scale(1.3)",
              }}
            />

            {/* Photo — edges feathered into the background */}
            <div
              className="relative w-full aspect-[4/6]"
              style={{
                maskImage:
                  "radial-gradient(ellipse 75% 85% at 50% 38%, black 65%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 75% 85% at 50% 38%, black 65%, transparent 100%)",
              }}
            >
              <Image
                src="/images/mypic.png"
                alt="M Suhaib"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating skill badges */}
            {badges.map(({ icon: Icon, label, position, delay }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                className={`absolute ${position} z-20 flex items-center gap-2 bg-[#0e131c]/95 backdrop-blur border border-white/10 rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-xl`}
              >
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/15">
                  <Icon className="w-3.5 h-3.5 sm:w-4 h-4 text-blue-400" />
                </span>
                <span className="text-white text-[11px] sm:text-xs font-bold whitespace-nowrap pr-1">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
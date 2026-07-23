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
  SparklesIcon,
} from "@heroicons/react/24/outline";

const badges = [
  {
    icon: CodeBracketIcon,
    label: "React Development",
    position: "top-6 -left-4 lg:-left-8",
    delay: 0,
    color: "from-blue-500/30 to-cyan-400/30",
  },
  {
    icon: RocketLaunchIcon,
    label: "Next.js",
    position: "top-1/2 -right-4 lg:-right-15 -translate-y-1/2",
    delay: 0.4,
    color: "from-purple-500/30 to-pink-400/30",
  },
  {
    icon: CloudIcon,
    label: "AWS / Cloud",
    position: "bottom-8 -left-3 lg:-left-6",
    delay: 0.8,
    color: "from-orange-500/30 to-yellow-400/30",
  },
];

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "30+", label: "Projects Completed" },
];

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 xl:py-32 overflow-hidden w-full">
      {/* Enhanced Ambient Glows with more colors */}
      <div className="absolute top-[-120px] left-[-80px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-600/20 blur-[100px] sm:blur-[130px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[5%] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-cyan-500/15 blur-[90px] sm:blur-[120px] rounded-full z-0 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full z-0" />
      <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-pink-500/5 blur-[100px] rounded-full z-0 animate-pulse delay-2000" />

      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 relative z-10 gap-8 lg:gap-6 xl:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Available for Work
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-3">
            <span className="block text-lg sm:text-xl font-semibold text-slate-300 mb-1">
              Hi, I&apos;m M. Suhaib
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Let&apos;s Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Modern Web
              </span>{" "}
              Experiences Together
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-3 leading-relaxed">
            I build fast, responsive, and scalable web applications using
            React, Next.js, and AWS — turning ideas into products that
            actually ship.
          </p>

          {/* Typing animation */}
          <div className="flex items-center gap-2 mb-4 text-base md:text-xl font-bold min-h-[32px]">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse flex-shrink-0" />
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
              className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            />
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-6">
            <MapPinIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span>Based in Lahore, Punjab — available remotely</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
            <Link
              href="#contact"
              className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-black hover:opacity-90 transition-all text-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Let&apos;s Talk
                <SparklesIcon className="w-4 h-4 group-hover:animate-spin" />
              </span>
            </Link>
            <a
              href="/Resume.pdf"
              download
              className="px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/15 hover:bg-white/5 text-white font-bold flex items-center justify-center gap-2 transition-all hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10"
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
                  <p className="text-3xl sm:text-4xl font-black text-white bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE - Perfectly Centered in Animation Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="col-span-1 lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-center relative order-2 lg:order-2"
        >
          <div className="relative flex items-center justify-center w-full">
            
            {/* Container that centers everything */}
            <div className="relative flex items-center justify-center w-[75%] sm:w-[70%] lg:w-[85%] xl:w-[80%] aspect-square">
              
              {/* Multiple animated ring effects - All centered */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                {/* Outer glow ring with multiple colors */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl animate-pulse" />
                
                {/* Rotating ring 1 - Blue gradient */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin-slow" />
                
                {/* Rotating ring 2 - Purple gradient */}
                <div className="absolute inset-[-5%] rounded-full border border-purple-400/15 animate-spin-slower" />
                
                {/* Rotating ring 3 - Cyan gradient */}
                <div className="absolute inset-[-10%] rounded-full border border-cyan-400/10 animate-spin-slow-reverse" />
                
                {/* Rotating ring 4 - Multi-color dots */}
                <div className="absolute inset-[-15%] rounded-full animate-spin-slower">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50" />
                </div>

                {/* Rotating ring 5 - Dotted pattern */}
                <div className="absolute inset-[-20%] rounded-full border border-dashed border-blue-400/5 animate-spin-slow" />
              </div>

              {/* Enhanced soft circular shade */}
              <div
                className="absolute inset-[-10%] rounded-full blur-[60px] lg:blur-[80px]"
                style={{
                  background: `
                    radial-gradient(circle at 40% 40%, rgba(56,189,248,0.3) 0%, rgba(139,92,246,0.2) 30%, rgba(6,182,212,0.15) 50%, rgba(236,72,153,0.1) 70%, transparent 100%)
                  `,
                  transform: "scale(1.3)",
                }}
              />

              {/* Circular frame with multi-color gradient border */}
              <div 
                className="relative w-full aspect-square rounded-full p-[3px] m-6"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)"
                }}
              >
                {/* Inner gradient overlay with multiple colors */}
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90 z-0" />
                
                {/* Photo container - Perfectly centered */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden z-10">
                  <Image
                    src="/images/mypic.png"
                    alt="M Suhaib"
                    fill
                    className="object-cover"
                    priority
                    style={{ objectPosition: '50% 50%' }}
                  />
                  
                  {/* Multi-color overlay gradients for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 z-20" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 via-transparent to-pink-400/5 z-20" />
                  
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-cyan-400/10 z-20" />
                </div>
              </div>
            </div>

            {/* Floating skill badges - Adjusted positions */}
            {badges.map(({ icon: Icon, label, position, delay, color }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                className={`absolute ${position} z-30 flex items-center gap-1.5 bg-[#0e131c]/95 backdrop-blur border border-white/10 rounded-xl px-2 py-1.5 sm:px-2.5 sm:py-1.5 shadow-xl hover:border-blue-400/50 hover:bg-[#0e131c] transition-all duration-300 group`}
              >
                <span className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${color}`}>
                  <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </span>
                <span className="text-white text-[9px] sm:text-[10px] font-bold whitespace-nowrap pr-0.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add custom CSS for spinning animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
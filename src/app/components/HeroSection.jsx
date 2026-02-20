"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPinIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
      {/* 🌙 Background Ambient Glow */}
      <div className="absolute top-[-100px] right-[10%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 relative z-10 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Available for Work
            </span>
          </div>

          {/* MAIN NAME - HUGE */}
          <h1 className="text-white text-4xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-4">
            M.<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SUHAIB</span>
          </h1>

          {/* SUB-ANIMATION - SMALLER */}
          <div className="h-12 flex items-center">
            <TypeAnimation
              sequence={[
                "Advance Web Development", 2000,
                "Responsive Design", 2000,
                "React Development", 2000,
                "Next js ", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white text-lg lg:text-2xl font-bold italic border-b-2 border-blue-500"
            />
          </div>

          {/* Location & Meta */}
          <div className="flex items-center gap-4 mt-6 mb-8">
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <MapPinIcon className="w-4 h-4 text-blue-500" />
              <span>Punjab, Lahore</span>
            </div>
            <div className="w-1 h-1 bg-slate-700 rounded-full" />
            {/* <div className="text-slate-400 text-sm">2+ Years Exp.</div> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#contact" className="px-10 py-4 rounded-full bg-white text-black font-black hover:bg-blue-500 hover:text-white transition-all text-center">
              HIRE ME
            </Link>
            <a href="/Resume.pdf" download className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold flex items-center justify-center gap-2 transition-all">
              <ArrowDownTrayIcon className="w-5 h-5" />
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE - CIRCLE FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-5 flex justify-center relative"
        >
          <div className="relative group">
            {/* Rotating Decorative Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 border border-dashed border-blue-500/30 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-blue-500/10 rounded-full"
            />

            {/* Main Circular Profile */}
            <div className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full p-2 bg-gradient-to-tr from-blue-600 to-cyan-400 relative z-10">
              <div className="w-full h-full rounded-full bg-[#0a0a0a] p-1 overflow-hidden relative">
                <Image
                  src="/images/mypic.jpeg"
                  alt="M Suhaib"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            {/* Floating Tech Stack Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 bg-slate-900 border border-white/10 p-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex flex-col items-center">
                <span className="text-blue-500 text-xs font-black uppercase tracking-tighter">Stack</span>
                <span className="text-white font-bold text-sm leading-none mt-1">Next.js • AWS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
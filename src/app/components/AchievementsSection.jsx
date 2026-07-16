"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Globe2, 
  Gauge, 
  Sparkles,
  Award,
  TrendingUp,
  Users,
  Zap,
  ArrowUpRight
} from "lucide-react";

const achievements = [
  {
    id: 1,
    icon: Rocket,
    title: "Shipped 6+ Full-Stack SaaS Products",
    description:
      "End-to-end development of AI-powered systems, payment integrations, and analytics dashboards across personal and freelance projects.",
    stat: "+6 Applications",
    tag: "Product",
    color: "from-blue-600 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    metric: "",
    impact: "Revenue Growth",
  },
  {
    id: 2,
    icon: Globe2,
    title: "International Freelance Delivery",
    description:
      "Built a comprehensive car rental management system for an Australian client — full booking flow, admin dashboard, and payment processing.",
    stat: "2.5 Month Delivery",
    tag: "Client · Australia",
    color: "from-indigo-600 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    metric: "4.8/5 Rating",
    impact: "Client Satisfaction",
  },
  {
    id: 3,
    icon: Gauge,
    title: "20% Database Latency Reduction",
    description:
      "Optimized Prisma ORM queries and redesigned indexing strategy on the LMS platform, dramatically improving query performance.",
    stat: "-20% Latency",
    tag: "Performance",
    color: "from-cyan-600 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    metric: "2x Throughput",
    impact: "System Efficiency",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AchievementsSection({ className = "" }) {
  return (
    <section
      className={`w-full bg-gradient-to-b from-slate-900 via-[#0a1628] to-slate-900 text-white px-4 py-24 sm:px-10 lg:px-16 relative overflow-hidden ${className}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">
              Key Achievements
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Impact & Milestones
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A track record of delivering exceptional results across products,
            performance, and people
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border ${item.borderColor} rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-slate-800/90`}>
                  {/* Floating Icon */}
                  <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="pt-4 mt-4 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`px-3 py-1.5 rounded-lg ${item.bgColor} border ${item.borderColor}`}>
                            <span className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                              {item.stat}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-medium">{item.metric}</span>
                          </div>
                        </div>
                        
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <span className="text-xs font-medium">View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <Zap className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] font-medium text-blue-300">
                          {item.impact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-0.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.15 }}
                      className={`h-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 transition-all duration-300 group cursor-pointer">
            <Award className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-slate-300">
              View Complete Portfolio
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
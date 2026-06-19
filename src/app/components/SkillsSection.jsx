"use client";
import React from "react";
import { motion } from "framer-motion";

const SKILLS_DATA = [
    {
        category: "Frontend & UI",
        skills: [
            { name: "React / Next.js", level: 92 },
            { name: "TypeScript", level: 88 },
            { name: "Tailwind CSS", level: 90 },
            { name: "ShadCN UI", level: 85 },
            { name: "Framer Motion", level: 85 },
            { name: "Chakra UI", level: 80 },
        ],
    },
    {
        category: "Backend & API Development",
        skills: [
            { name: "Node.js / Express", level: 85 },
            { name: "Next.js API Routes", level: 90 },
            { name: "Prisma ORM", level: 82 },
            { name: "RESTful APIs", level: 88 },
            { name: "WebSockets (Pusher)", level: 85 },
        ],
    },
    {
        category: "Database & Storage",
        skills: [
            { name: "MongoDB Atlas", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "PostgreSQL", level: 78 },
            { name: "Amazon RDS", level: 75 },
            { name: "Supabase", level: 70 },
        ],
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "Amazon S3", level: 82 },
            { name: "AWS Lambda", level: 80 },
            { name: "AWS Amplify", level: 78 },
            { name: "Vercel", level: 90 },
            { name: "Firebase", level: 75 },
        ],
    },
    {
        category: "AI & Real-time Features",
        skills: [
            { name: "Stability AI API", level: 80 },
            { name: "Vapi AI", level: 85 },
            { name: "Inngest", level: 82 },
            { name: "UploadThing", level: 90 },
            { name: "Realtime Features", level: 85 },
        ],
    },
    {
        category: "Tools & Workflow",
        skills: [
            { name: "Git / GitHub", level: 88 },
            { name: "Postman", level: 85 },
            { name: "React Hook Form", level: 85 },
            { name: "Zod Validation", level: 82 },
            { name: "Redux Toolkit", level: 80 },
        ],
    },
];

const ADDITIONAL_SKILLS = [
    // Frontend & UI
    "Responsive Design",
    "Lucide Icons",
    "Fabric.js",

    // Backend
    "NextAuth.js",
    "JWT Authentication",
    "Webhook Integration",
,
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4"
                    >
                        TECHNICAL <span className="text-blue-500 italic">ARSENAL</span>
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base">
                        Categorized proficiency in modern web architecture and cloud solutions.
                    </p>
                </div>

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILLS_DATA.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 shadow-xl"
                        >
                            <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                                <span className="w-6 h-px bg-blue-500" />
                                {group.category}
                            </h3>

                            <div className="space-y-6">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-slate-300 text-[10px] font-black uppercase tracking-[0.15em]">
                                                {skill.name}
                                            </span>
                                            <span className="text-blue-400 font-mono text-[10px]">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative"
                                            >
                                                <div className="absolute right-0 top-0 h-full w-4 bg-white/20 blur-sm" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ADDITIONAL SKILLS SECTION - CENTERED LAYOUT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-24 text-center"
                >
                    {/* Centered Heading */}
                    <div className="inline-block mb-10">
                        <h4 className="text-white font-black text-2xl uppercase tracking-[0.3em]">
                            Additional <span className="text-blue-500">Toolkit</span>
                        </h4>
                        <div className="h-1 w-1/3 bg-blue-500 mx-auto mt-2 rounded-full" />
                    </div>

                    {/* Centered Skills Grid */}
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {ADDITIONAL_SKILLS.map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                                    borderColor: "rgba(59, 130, 246, 0.5)"
                                }}
                                className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 text-xs font-black uppercase tracking-widest hover:text-white transition-all cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
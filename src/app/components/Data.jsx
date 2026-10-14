 export const projectsData = [
  {
    id: 1,
    title: "AI-Powered Voice Recruiter Agent",
    description: "An advanced full-stack autonomous AI Voice Recruiter that automates HR screening with real-time multilingual voice interviews, anti-cheat monitoring, and AI-generated candidate feedback using Vapi AI, OpenAI, and Groq.",
    role: "Full Stack Developer & System Architect",
    image: "/images/projects/ai.png",
    gitUrl: "https://github.com/M-SuhaibGM",
    previewUrl: "https://ai-recruter-five.vercel.app",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "MySQL / TiDB",
      "Vapi AI SDK",
      "OpenAI GPT-4o-mini",
      "Groq AI Cloud",
      "Deepgram Nova-2",
      "NextAuth.js",
      "Stripe Payments",
      "Nodemailer",
      "Shadcn UI"
    ],
    features: [
      "Autonomous real-time voice interviews with Vapi AI and Deepgram speech recognition",
      "Multilingual support for English, Hindi, and Urdu with culturally appropriate AI responses",
      "Real-time anti-cheat monitoring with tab switch detection and browser fingerprinting",
      "AI-powered candidate grading using Llama 3.3 70B with structured JSON feedback",
      "Interactive recruiter dashboard with candidate analytics and selection letter generation",
      "Stripe-integrated credit-based billing system with transaction history",
      "Pre-interview device check combining microphone and camera testing"
    ],
    achievements: [
      "Built a real-time AI voice interview system with sub-second latency across 3 languages",
      "Implemented robust anti-cheat detection with tab tracking and security logging",
      "Created a multi-model AI feedback pipeline with 99.9% reliability using Groq",
      "Developed complete SaaS billing with Stripe and idempotent payment verification",
      "Engineered pre-interview device checks with waveform analysis and face detection"
    ],
    challenges: [
      "Resolved TiDB JSON serialization issues with raw SQL queries and CAST operations",
      "Managed complex WebSocket lifecycle for Vapi AI with proper error recovery",
      "Prevented duplicate payments with database-level idempotency and atomic transactions",
      "Built multi-model LLM fallback system for reliable feedback generation",
      "Solved race conditions in payment verification with ref-based guard locks"
    ]
  },
  {
    id: 3, // or your preferred sequence ID
    title: "Ludo: Real-time Multiplayer Game",
    description: "An online Ludo game where friends play together in real time from any device, or play alone against computer opponents. No account needed, just share a room code.",
    role: "Full Stack Developer",
    image: "/images/projects/ludo.png",
    gitUrl: "https://github.com/M-SuhaibGM", // replace with your repo
    previewUrl: "https://ludo-real-time-frontend.vercel.app/",    // replace with your live link
    tech: [
      "Next.js",
      "TypeScript",
      "Socket.IO",
      "Node.js",
      "Framer Motion",
      "Tailwind CSS",
      "SVG"
    ],
    features: [
      "Real-time Multiplayer: Create a room for 2, 3 or 4 players and join with a 6-character code, with live board updates for everyone",
      "Play vs Computer: Single-player mode with Easy, Medium and Hard bots that capture, avoid danger and chase safe cells",
      "Live Chat and Reactions: In-game chat with emoji buttons that float up from the sender's player box",
      "Online Presence: Players show as online or offline, and reconnect to the same seat after a refresh or dropped connection",
      "Auto-Landscape Mobile Layout: The game rotates itself on phones, so players never have to turn the device",
      "Custom 3D Dice and SVG Board: Animated dice roll, stacked-token handling and capture, safe-cell and home-column rules",
      "Rematch and Exit: Winner screen with confetti, a one-tap Play Again and an exit back to the home page"
    ],
    achievements: [
      "Built a server-authoritative game engine, so all moves, captures and turn order are validated on the server and players cannot cheat",
      "Learned to handle real-time state sync with Socket.IO, including rooms, acknowledgements, reconnects and secret session tokens",
      "Designed bot logic with three difficulty levels using a move-scoring system based on captures, safety and progress",
      "Created a responsive layout that works from phones to desktops using CSS transforms and container query units",
      "Kept everything in memory with automatic room cleanup, so the game runs with no database"
    ]
  },
  {
    id: 2, // or your preferred sequence ID
    title: "LMS Pro: Learning Management System",
    description: "A comprehensive educational platform allowing instructors to create, publish, and sell courses with integrated progress tracking and sales analytics.",
    role: "Full Stack Developer",
    image: "/images/projects/lms.png",
    gitUrl: "https://github.com/M-SuhaibGM/lms.git",
    previewUrl: "https://lms-seven-sand.vercel.app/",
    tech: [
      "Next.js",
      "Clerk Auth",
      "Prisma",
      "MySQL",
      "Stripe",
      "ShadCN UI",
      "UploadThing",
      "Recharts",
      "Tailwind CSS"
    ],
    features: [
      "Teacher Mode: Dedicated dashboard for course creation, chapter management, and publishing",
      "Sales Analytics: Visual data representation of revenue and enrollments using Recharts",
      "Secure Payments: Complete student checkout flow integrated with Stripe",
      "Media Management: Seamless server-side video and image uploads via UploadThing",
      "Role-Based Access: Protected routes and authentication handled via Clerk"
    ],
    achievements: [
      "Mastered complex database relationships using Prisma to handle course progress and user enrollments",
      "Learned to implement secure webhook handling for real-time Stripe payment verification",
      "Improved user engagement by designing a modern, responsive UI with ShadCN primitives",
      "Architected a scalable backend structure capable of handling large video file metadata and student data"
    ]
  }, {
    id: 3,
    title: "Messenger: Real-Time Chat Experience",
    description: "A high-performance communication platform enabling seamless instant messaging, group dynamics, and live presence tracking.",
    role: "Full Stack Developer",
    image: "/images/projects/messanger.png",
    gitUrl: "https://github.com/M-SuhaibGM/Messenger.git",
    previewUrl: "https://messenger-smoky-three.vercel.app/",
    tech: [
      "Next.js",
      "Pusher",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Tailwind CSS",
      "ShadCN UI",
      "UploadThing"
    ],
    features: [
      "Real-Time Messaging: Instant one-to-one and group conversations powered by Pusher",
      "Presence Tracking: Live 'Active/Offline' status indicators for all users",
      "Group Management: Capability to create collaborative groups and invite friends",
      "Profile Customization: User ability to update status, display names, and profile pictures",
      "NextAuth Security: Robust authentication flow featuring secure Google Provider sign-in",
      "Media Sharing: Seamless profile and chat image uploads via UploadThing"
    ],
    achievements: [
      "Implemented complex WebSocket logic with Pusher to handle real-time event broadcasting",
      "Designed a highly responsive UI that maintains 60fps animations during chat transitions",
      "Mastered NoSQL data modeling with MongoDB and Prisma to optimize message retrieval",
      "Learned to manage global state for user presence and message read-receipts efficiently"
    ]
  }, {
    id: 12,
    title: "Graphix: AI-Powered Canva Clone",
    description: "A sophisticated graphic design suite featuring a full-featured canvas editor, AI image generation, and cloud-based asset management.",
    role: "Full Stack Developer",
    image: "/images/projects/canva.png",
    gitUrl: "https://github.com/M-SuhaibGM/canva-clone.git",
    previewUrl: "https://canva-clone-xi-jet.vercel.app/",
    tech: [
      "Next.js",
      "Fabric.js",
      "Stability AI",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Cloudinary",
      "ShadCN UI",
      "Tailwind CSS"
    ],
    features: [
      "Advanced Canvas Editor: Drag-and-drop design toolset powered by Fabric.js for professional layout creation",
      "AI Image Generation: Seamless integration with Stability AI to generate unique assets from text prompts",
      "Cloud Asset Management: High-performance image storage and optimization utilizing Cloudinary",
      "Secure Workspace: Individual user accounts and design saving via NextAuth Google Provider",
      "Modular Component Library: Polished and responsive interface built using ShadCN UI primitives"
    ],
    achievements: [
      "Engineered a complex state-management system to handle real-time canvas object manipulation and layer ordering",
      "Implemented server-side API routes to securely communicate with Stability AI for generative design features",
      "Optimized frontend performance to handle high-resolution image rendering within the Fabric.js workspace",
      "Learned to architect a scalable NoSQL schema for storing complex JSON representations of user canvas designs"
    ]
  }, {
    id: 4,
    title: "Taskify: Organizational Management Suite",
    description: "A high-end task management system featuring dynamic organizational workspaces, real-time activity tracking, and drag-and-drop workflow automation.",
    role: "Full Stack Developer",
    image: "/images/projects/trelo.png",
    gitUrl: "https://github.com/M-SuhaibGM/Taskify.git",
    previewUrl: "https://taskify-lyart-psi.vercel.app/",
    tech: [
      "Next.js",
      "Clerk (Orgs)",
      "Prisma",
      "Neon DB",
      "@hello-pangea/dnd",
      "Unsplash API",
      "ShadCN UI",
      "Tailwind CSS"
    ],
    features: [
      "Organization Workspaces: Multi-tenant architecture using Clerk for team and organizational management",
      "Interactive Boards: Drag-and-drop lists and cards powered by @hello-pangea/dnd for seamless task movement",
      "Unsplash Integration: Dynamic board backgrounds utilizing the Unsplash API for custom aesthetics",
      "Activity Audit Log: Real-time history tracking for every database operation (Create, Update, Delete)",
      "Relational Storage: Optimized PostgreSQL performance using Neon Serverless Database",
      "Advanced UI: Responsive and accessible task cards and modals built with ShadCN UI"
    ],
    achievements: [
      "Implemented a comprehensive Activity Log system that tracks user actions across the entire workspace for accountability",
      "Optimized drag-and-drop performance for large datasets by handling optimistic UI updates",
      "Architected a complex database schema in Neon DB to support nested lists, cards, and organizational relationships",
      "Mastered the integration of third-party APIs to handle dynamic assets and real-time organizational switching"
    ]
  },
  {
    id: 5,
    title: "Spotify 2.0: Personal Music Hub",
    description: "A high-fidelity music streaming clone featuring local library management and a sleek, interactive audio player interface.",
    role: "Full Stack Developer",
    image: "/images/projects/spotify.png",
    gitUrl: "https://github.com/M-SuhaibGM/Spotify-Clone.git",
    previewUrl: "/",
    tech: ["Next.js", "Prisma", "MySQL", "React", "Tailwind CSS"],
    features: [
      "Dynamic Audio Player: Fully functional play/pause and seek controls with persistent playback",
      "Library Management: Ability for users to upload and manage their personal song collections",
      "Responsive Glassmorphism UI: High-end aesthetic inspired by the modern Spotify desktop app",
      "Relational Data: Structured MySQL schema for users, songs, and artist relationships"
    ],
    achievements: [
      "Optimized audio loading states to ensure zero-latency playback transitions",
      "Mastered the Prisma ORM for complex data fetching and song categorization",
      "Implemented custom CSS animations for smooth UI transitions between views"
    ]
  },

  {
    id: 6, // or appropriate number based on your projects array
    title: "AI-Powered Presentation Generator",
    description: "An intelligent presentation generator that converts complex text prompts and meeting notes into fully structured slide decks in seconds using event-driven architecture and LLM orchestration.",
    role: "Full Stack Developer & System Architect",
    image: "/images/projects/ppt-to-text.jpg", // Update with your image path
    gitUrl: "https://github.com/M-SuhaibGM/text-to-ppt.git", // Update with actual URL
    previewUrl: "", // Update with live demo URL
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "TanStack Query",
      "Inngest",
      "Vercel AI SDK",
      "Groq AI Cloud",
      "Zod"
    ],
    features: [
      "AI-Powered Generation: Converts text prompts and meeting notes into professional slide decks using Llama 3.3-70B model",
      "Event-Driven Architecture: Asynchronous background processing with Inngest serverless step functions for reliable 10-15 second generation",
      "Zero-Latency Layout: Server Components pre-fetch initial state with TanStack Query client seeding for instant UI feedback",
      "Smart Polling System: Optimized 3-second interval polling with seamless state transitions from GENERATING to COMPLETE",
      "JSON Validation Pipeline: Custom sanitization and Zod validation to handle non-deterministic LLM outputs",
      "Polymorphic Server Actions: Unified endpoint handling both initial generation and status polling requests"
    ],
    achievements: [
      "Engineered a production-grade event-driven architecture handling 10-15 second asynchronous LLM processing without HTTP timeout issues",
      "Implemented sophisticated TanStack Query polling with optimistic UI updates for seamless user experience during long-running operations",
      "Developed a robust prompt engineering and sanitization pipeline to reliably extract valid JSON from non-deterministic LLM responses",
      "Designed a scalable schema with Prisma ORM to manage generation jobs, status tracking, and error handling across distributed systems"
    ],
    challenges: [
      "Managed non-deterministic LLM outputs by combining Vercel AI SDK's json_object mode with custom regex sanitization for markdown stripping",
      "Overcame HTTP timeout limitations by implementing Inngest background workers for reliable long-running task processing",
      "Ensured zero-layout-shift experience by pre-seeding TanStack Query with server-fetched initial data and polling updates",
      "Addressed edge cases in prompt parsing and output validation to ensure consistent presentation structure across varied inputs"
    ]
  },

];

 export const EXPERIENCE_DATA = [
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
  },
  {
    company: "Allainet",
    location: "Rawalpindi, Pakistan",
    role: "Full Stack Developer",
    duration: "2026",
    description: "Built and shipped scalable backend and frontend features across the stack, from NestJS APIs and Next.js interfaces to containerized deployments on AWS with automated CI/CD pipelines.",
    achievements: [
      "Developed modular, maintainable REST APIs with NestJS, PostgreSQL and Prisma.",
      "Containerized applications with Docker for consistent development, testing and production environments.",
      "Set up CI/CD pipelines to automate testing, builds and deployments.",
      "Deployed and managed applications on AWS cloud infrastructure.",
      "Built responsive Next.js frontends integrated with secure authentication and role-based access control.",
    ],
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "AWS",
      "Tailwind CSS",
    ],
  },
];

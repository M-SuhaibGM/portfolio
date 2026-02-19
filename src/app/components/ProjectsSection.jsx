"use client"
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 4, // or your preferred sequence ID
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
  },{
    id: 6,
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
  },{
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
  },{
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
    id: 2,
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
    id: 7,
    title: "Netflix Cinema: Premium Streaming UI",
    description: "An immersive movie browsing platform with custom video player integration and category-based content discovery.",
    role: "Frontend Engineer",
    image: "/images/projects/netflix.png",
    gitUrl: "https://github.com/M-SuhaibGM/Netflix-Clone.git",
    previewUrl: "/",
    tech: ["Next.js", "Chakra UI", "Prisma", "NextAuth", "TMDB API"],
    features: [
      "Dynamic Hero Section: Features auto-playing trailers and featured content sliders",
      "Categorized Content: Filterable movie lists ranging from Trending to Top Rated",
      "Authentication: Secure user login and personalized 'My List' functionality",
      "Mobile-First Design: Pixel-perfect responsiveness using Chakra UI's layout system"
    ],
    achievements: [
      "Integrated the TMDB API to fetch and display real-time global movie data",
      "Configured robust authentication guards to protect premium content routes",
      "Reduced bundle size by 20% through efficient Chakra UI component utilization"
    ]
  },
  {
    id: 5,
    title: "Facebook Core: Social Networking",
    description: "A social media recreation focusing on core community features including real-time posting, feed interactions, and profile management.",
    role: "Backend Specialist",
    image: "/images/projects/facebook.png",
    gitUrl: "https://github.com/M-SuhaibGM/facebook-clone.git",
    previewUrl: "/",
    tech: ["React", "Express.js", "Node.js", "MySQL", "Tailwind CSS"],
    features: [
      "CRUD Feed: Create, read, update, and delete posts with real-time UI updates",
      "User Authentication: Custom JWT-based login and registration system",
      "Profile Ecosystem: Personalized user pages featuring wall posts and bio updates",
      "Interaction Logic: Dynamic like and comment sections for user engagement"
    ],
    achievements: [
      "Built a secure RESTful API from scratch using Node.js and Express",
      "Architected a relational database schema in MySQL to handle social graph relationships",
      "Implemented state management to handle multi-step form data for user registration"
    ]
  },
  {
    id: 1,
    title: "DevBlog: Full Stack Content Platform",
    description: "A multi-user blogging engine featuring markdown support, secure authoring, and a robust CMS-style backend.",
    role: "Full Stack Developer",
    image: "/images/projects/blog.png",
    gitUrl: "https://github.com/M-SuhaibGM/blog-app.git",
    previewUrl: "/",
    tech: ["React", "Express.js", "MySQL", "Node.js", "CSS3"],
    features: [
      "Rich Text Authoring: Intuitive interface for writers to create and format blog posts",
      "Session Security: Cookie-based authentication for persistent user sessions",
      "Content Discovery: Search and filter functionality to navigate through blog archives",
      "Image Storage: Integrated backend for handling post thumbnail uploads"
    ],
    achievements: [
      "Successfully deployed a decoupled architecture (Separate React Frontend & Express Backend)",
      "Learned to handle secure password hashing and storage using Bcrypt",
      "Improved database query efficiency by 30% through MySQL indexing"
    ]
  },
  {
    id: 3,
    title: "SkyCast: Real-Time Weather Hub",
    description: "A precision weather tracking tool that utilizes live API data to provide accurate forecasts based on user location.",
    role: "Frontend Developer",
    image: "/images/projects/weather.png",
    gitUrl: "https://github.com/M-SuhaibGM/weather-app.git",
    previewUrl: "https://weather-app-nu-tan-11.vercel.app/",
    tech: ["React", "OpenWeather API", "Geolocation API", "Tailwind CSS"],
    features: [
      "Dynamic Backgrounds: Interface colors and imagery change based on current weather conditions",
      "Geo-Location: Automatically detects user city for instant local weather updates",
      "5-Day Forecast: Detailed breakdown of temperature, humidity, and wind speed trends",
      "Unit Conversion: Toggle between Celsius and Fahrenheit for global accessibility"
    ],
    achievements: [
      "Mastered asynchronous data fetching using the Fetch API and React Hooks",
      "Learned to handle API errors and edge cases (e.g., city not found) gracefully",
      "Achieved a 95+ score on Google Lighthouse for performance and accessibility"
    ]
  },
  {
    id: 8,
    title: "Modern Portfolio: Personal Branding",
    description: "The high-performance, dark-themed developer portfolio you are currently viewing, built with a focus on speed and UX.",
    role: "UI/UX Designer & Developer",
    image: "/images/projects/portfolio.png",
    gitUrl: "https://github.com/M-SuhaibGM/portfolio.git",
    previewUrl: "/",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "React"],
    features: [
      "Side-by-Side Layouts: Alternating project views for a dynamic scrolling experience",
      "Glassmorphism: Modern frosted-glass UI elements with subtle backdrop blurs",
      "Optimized Images: Next.js Image component utilized for lightning-fast load times",
      "Dark Mode Ready: Full dark/light theme support for all UI components"
    ],
    achievements: [
      "Implemented complex scroll-linked animations using Framer Motion",
      "Designed a custom project gallery with advanced filtering capabilities",
      "Achieved near-instant page transitions using Next.js client-side routing"
    ]
  },
  {
    id: 9, // Updated ID for sequence
    title: "Dice Royale: JS Logic Game",
    description: "A fast-paced interactive dice game designed to demonstrate core JavaScript logic and DOM manipulation techniques.",
    role: "Javascript Developer",
    image: "/images/projects/dice.png",
    gitUrl: "https://github.com/M-SuhaibGM/dice-game.git",
    previewUrl: "/",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    features: [
      "Game Logic: Randomized dice rolling with win/loss condition checking",
      "Score Tracking: Persistent session scoring to keep track of player streaks",
      "Interactive UI: Dynamic DOM updates without the need for page refreshes"
    ],
    achievements: [
      "Mastered the 'Model-View-Controller' (MVC) concept in Vanilla JS",
      "Refined CSS Flexbox skills to create a centered, balanced game board",
      "Developed a bug-free game loop with clear event listener management"
    ]
  }
  // Add more projects following this same structure...
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h2 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
          Case <span className="text-blue-500">Studies</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
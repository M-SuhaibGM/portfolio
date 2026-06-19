# M.SUHAIB | Full-Stack Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> **Live Demo:** [msuhaibgm.vercel.app](https://msuhaibgm.vercel.app/)

## 📋 Table of Contents
- [About The Project](#-about-the-project)
- [Built With](#️-built-with)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Projects Showcase](#-projects-showcase)
- [Contact](#-contact)

## 🚀 About The Project

This is my personal developer portfolio built with Next.js 15, showcasing my journey as a Full-Stack Developer specializing in modern web technologies, cloud solutions (AWS), and minimalist design. The portfolio features a clean, dark-themed interface with interactive elements, project case studies, and comprehensive technical skills visualization.

### My Philosophy
> **"Code is not just about solving problems; it's about creating scalable systems that empower users."**

I thrive at the intersection of logic and creativity, building tools that are as powerful under the hood as they are beautiful to the user.

## 🛠️ Built With

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 15, React 18 |
| **Language** | TypeScript, JavaScript |
| **Styling** | Tailwind CSS, ShadCN UI, Framer Motion |
| **State Management** | Zustand, Redux Toolkit |
| **Backend** | Node.js, Express, Next.js API Routes |
| **Databases** | MongoDB, MySQL, PostgreSQL, Prisma ORM |
| **Authentication** | NextAuth.js, Clerk, JWT |
| **Cloud Services** | AWS (RDS, S3, Lambda, Amplify), Vercel, Firebase |
| **Real-time** | Pusher, WebSockets, Inngest |
| **AI Integration** | Stability AI API, Vapi AI |
| **Tools** | Git, GitHub, Postman, ESLint, Prettier |

## ✨ Key Features

### 🎨 Design & UX
- **Dark Theme** with subtle blue/cyan accents
- **Glassmorphism** effects with backdrop blurs
- **Interactive Animations** using Framer Motion
- **Responsive Design** optimized for all devices
- **Dynamic Typing Effects** in hero section
- **Floating Skill Badges** with animation

### 📊 Technical Sections
- **Technical Arsenal** - Categorized skill proficiency bars
- **Professional Journey** - Experience timeline
- **Case Studies** - Detailed project breakdowns with tech stacks
- **Interactive Project Cards** with hover effects
- **Real-time Status Indicators** (Available for Work)

### ⚡ Performance
- **Optimized Images** with Next.js Image component
- **Lazy Loading** for improved initial load time
- **Server Components** where applicable
- **Smooth Page Transitions** with client-side routing
- **Code Splitting** for better bundle management

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── images/
│   │   ├── mypic.png
│   │   └── projects/
│   ├── Resume.pdf
│   └── favicon.ico
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## 🏗️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional - if you have any API integrations
NEXT_PUBLIC_SITE_URL=https://msuhaibgm.vercel.app
```

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and scalability.

### Deploy on Vercel

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Deploy with default settings

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio)

### Manual Build

```bash
npm run build
npm start
```

## 📂 Projects Showcase

The portfolio highlights several projects demonstrating full-stack capabilities:

### 🎓 LMS Pro - Learning Management System
- **Stack:** Next.js, Clerk Auth, Prisma, MySQL, Stripe
- **Key Features:** Course creation, sales analytics, secure payments, media management

### 💬 Messenger - Real-Time Chat
- **Stack:** Next.js, Pusher, TypeScript, Prisma, MongoDB
- **Key Features:** Real-time messaging, presence tracking, group management

### 🎨 Graphix - AI-Powered Canva Clone
- **Stack:** Next.js, Fabric.js, Stability AI, Cloudinary
- **Key Features:** Canvas editor, AI image generation, cloud asset management

### ✅ Taskify - Organizational Management
- **Stack:** Next.js, Clerk (Orgs), Prisma, Neon DB
- **Key Features:** Drag-and-drop boards, activity audit logs, workspace management

### 🎵 Spotify 2.0 - Personal Music Hub
- **Stack:** Next.js, Prisma, MySQL, Tailwind CSS
- **Key Features:** Dynamic audio player, library management, glassmorphism UI

## 📞 Contact

**M. Suhaib**
- 📧 Email: mmsohaib617@gmail.com
- 🌐 Portfolio: [msuhaibgm.vercel.app](https://msuhaibgm.vercel.app/)
- 📍 Location: Lahore, Punjab, Pakistan

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
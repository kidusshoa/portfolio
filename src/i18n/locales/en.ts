import type { Dictionary } from '../types'

export const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    viewProjects: 'View Projects',
    getInTouch: 'Get In Touch',
    dragToRotate: 'Drag to rotate',
  },
  about: {
    kicker: 'About Me',
    title: 'Building scalable, user-focused software',
  },
  skills: {
    kicker: 'Skills',
    title: 'Technologies I work with',
    description:
      'A snapshot of the tools and technologies I use to build modern, scalable applications.',
  },
  experience: {
    kicker: 'Experience',
    title: "Where I've worked",
    description:
      'Professional experience building full-stack applications, mobile apps, and production systems.',
  },
  projects: {
    kicker: 'Projects',
    title: 'Featured work',
    description:
      'Selected projects from university, ALX, and personal builds.',
    featured: 'Featured',
    github: 'GitHub',
    backend: 'Backend',
    liveDemo: 'Live Demo',
  },
  leadership: {
    kicker: 'Leadership',
    title: 'Community involvement',
    description:
      'Leading initiatives that foster innovation, mentorship, and technical excellence.',
  },
  contact: {
    kicker: 'Contact',
    title: "Let's connect",
    description:
      'Open to full-stack engineering opportunities. Reach out anytime.',
    email: 'Email',
    phone: 'Phone',
    telegram: 'Telegram',
    location: 'Location',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    rights: 'All rights reserved.',
    tagline: 'You should hire me.',
  },
  notFound: {
    title: 'Page not found',
    description: "That page doesn't exist. Head back to the portfolio.",
    backHome: 'Back to Home',
  },
  personal: {
    title: 'Full-Stack Software Engineer',
    objective:
      'I build full-stack products end to end — from clean interfaces to reliable APIs and databases. I care about clear code, fast delivery, and solutions that actually work for real users.',
    about:
      'Full-stack engineer specializing in scalable web platforms, APIs, and modern frontend systems. I build production-ready applications across React, Next.js, NestJS, and cloud-native backends — with a strong focus on performance, clean architecture, and delivering measurable product impact.',
    location: 'Addis Ababa, Ethiopia',
  },
  skillCategories: {
    'Web Development': 'Web Development',
    Frameworks: 'Frameworks',
    'Programming Languages': 'Programming Languages',
    Databases: 'Databases',
    DevOps: 'DevOps',
    'Operating Systems': 'Operating Systems',
    Other: 'Other',
  },
  education: [
    {
      degree: 'Bachelor of Science in Information Systems',
      location: 'Harar, Ethiopia',
    },
    {
      degree: 'Full-Stack Developer',
      location: 'Remote',
      description:
        'A 12-month (70 hrs/week) immersive programme that prepares participants for a global career as a Full-Stack Developer.',
    },
  ],
  experienceItems: [
    {
      role: 'Full-Stack Engineer',
      location: 'Addis Ababa, Ethiopia',
      highlights: [
        'Building scalable full-stack applications using Next.js, NestJS, Express.js, Django, Golang, PostgreSQL, and microservices architecture',
        'Developing interactive, real-time gaming and media platforms',
        'Implementing secure APIs, optimization pipelines, and cloud-native deployments',
        'Collaborating with designers, backend teams, and product leads to deliver high-quality features',
        'Leading performance improvements and automation for production systems',
      ],
    },
    {
      role: 'JavaScript and Web Development Instructor',
      location: 'Addis Ababa, Ethiopia (Remote)',
      highlights: [
        'Teaching JavaScript and web development as a part-time instructor',
        'Delivering practical lessons on modern frontend and backend fundamentals',
        'Guiding students through hands-on projects using Express.js and related web technologies',
      ],
    },
    {
      role: 'Software Engineer Part-Time',
      location: 'Addis Ababa, Ethiopia (Hybrid)',
      highlights: [
        'Built and maintained web-based solutions using Next.js and Ruby on Rails',
        'Collaborated with cross-functional teams to deliver scalable, responsive features',
        'Contributed to deployment, testing, and debugging of production-ready apps',
        'Developed mobile applications using React Native and Expo',
        'Provided DevOps engineering and related maintenance services',
      ],
    },
    {
      role: 'Software Engineer Intern',
      location: 'Remote',
      highlights: [
        'Developed and optimized mobile applications using React Native and Expo',
        'Assisted in building responsive and interactive frontend features',
        'Designed UI/UX workflows and prototypes using Figma',
        'Collaborated with senior developers on code reviews and product improvements',
      ],
    },
    {
      role: 'Back-End Developer Intern',
      location: 'Addis Ababa, Ethiopia (Remote)',
      highlights: [
        'Designed and implemented server-side logic using Express.js and PostgreSQL',
        'Built and optimized APIs for business applications',
        'Worked on database schema design, queries, and performance tuning',
        'Collaborated with the frontend team, contributing to nearly half of the frontend tasks',
        'Strengthened application performance, security, and scalability',
      ],
    },
  ],
  leadershipItems: [
    {
      role: 'Co-Founder & Research & Innovation Team Leader',
      highlights: [
        'Co-founded the official tech association at Haramaya University',
        'Served as Lead Software Engineer, overseeing development projects and mentorship',
        'Instructed a Competitive Programming with Python course, certifying 25+ students',
        'Fostered a culture of innovation, collaboration, and technical excellence among students',
      ],
    },
  ],
  projectItems: {
    khanut: {
      title: 'Khanut — AI Local Business Finder',
      description:
        'Final year university project: an AI-powered local business finder for Ethiopia with Gemini API integration, Express.js backend, and a hybrid recommendation engine built with FastAPI and machine learning combining collaborative filtering and content-based approaches.',
      links: { 'Recommendation Engine': 'Recommendation Engine' },
    },
    'erc4337-paymaster': {
      title: 'ERC-4337 Paymaster & Gas Relayer',
      description:
        'Production-shaped ERC-4337 Verifying Paymaster and gas relayer/bundler backend with on-chain Foundry contracts and a NestJS service that signs sponsorship approvals, submits UserOperations on-chain, and recovers automatically when transactions get stuck. Includes Postgres, Redis, BullMQ, e2e tests, and a Docker Compose demo.',
    },
    'weather-forecasting': {
      title: 'Weather Forecasting ML Platform',
      description:
        'University machine learning class project with a Django REST backend and Next.js frontend for weather forecasting, data processing, and visualization.',
      links: { Frontend: 'Frontend' },
    },
    kebron: {
      title: 'Kebron Rents',
      description:
        'ALX Software Engineering capstone — an online home and apartment renting platform built for Ethiopia with a Django backend and React frontend.',
    },
    'javafx-car-rental': {
      title: 'Car Rental Management System',
      description:
        'University OOP project — a desktop car rental management system built with Java and JavaFX.',
    },
  },
}

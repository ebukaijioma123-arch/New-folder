// This file is your "content database."
// All text, links, and data live here — change ONE line here instead
// of hunting through 9 different component files.

export const PERSONAL_INFO = {
  name: ' Osesumen Edionwele Jahsent',
  shortName: 'Osas', // or whatever you prefer to go by
  initials: 'OJ',
  title: 'Frontend Developer & AI content Creator', // adjust to taste
  tagline: "I build clean web experiences and craft content that connects.",
  email: 'eosesumen@gmail.com',
  location: 'Nigeria',
};

export const ABOUT_STATS = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed',  value: '15+' },
  { label: 'Happy Clients',       value: '10+' },
  { label: 'Core Skills',         value: '8' },
];

export const ABOUT_PARAGRAPHS = [
  "I'm a frontend developer working at the intersection of interface design and AI-generated content — which means I don't just build interfaces, I build experiences shaped by intelligent, adaptive content.",
  "My journey started in AI content — prompting, fine-tuning, and shaping how generative models communicate — where I learned how to make machine-generated output feel human, clear, and useful. Moving into frontend development with React felt like a natural extension of that — instead of just crafting prompts that produce good content, I now write code that turns that content into experiences people actually enjoy using.",
  "I care about clean code, accessible design, and interfaces that feel intuitive from the first click — especially when AI is doing some of the heavy lifting behind the scenes. Whether I'm building a UI component or designing how an AI feature surfaces content to a user, my goal is the same: make something people understand instantly and trust enough to keep coming back to.",
];

export const NAV_LINKS = [
  { label: 'Home',       to: 'hero' },
  { label: 'About',      to: 'about' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Services',   to: 'services' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact',    to: 'contact' },
];

export const SKILLS = [
  // Technical Skills
  { name: 'React',                icon: 'react',     category: 'technical', level: 75 },
  { name: 'HTML5',                icon: 'html',      category: 'technical', level: 90 },
  { name: 'CSS3',                 icon: 'css',       category: 'technical', level: 85 },
  // Creative Skills
  { name: 'Community Management', icon: 'community', category: 'creative',  level: 90 },
  { name: 'AI Content Creation',     icon: 'content',   category: 'creative',  level: 88 },
];

export const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, fast, and accessible web interfaces using React, HTML, CSS, and JavaScript.',
    icon: 'code',
  },
  {
    title: 'AIContent Strategy',
    description: 'Crafting compelling content strategies that grow audiences, increase engagement, and drive conversions.',
    icon: 'strategy',
  },
  {
    title: 'AI Content Writer',
    description: 'Writing SEO-friendly, engaging articles, blogs, and web copy that convert readers into customers.',
    icon: 'writing',
  },
];

export const PROJECTS = [
  {
    title: 'Content Calendar App',
    description: 'A drag-and-drop content calendar for planning and scheduling social media posts across platforms.',
    tags: ['React', 'HTML', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: 'from-violet-500 to-primary-400',
  },
  {
    title: 'Personal Blog',
    description: 'A clean, minimal blog focused on web development and content creation tips.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: 'from-blue-500 to-primary-400',
  },
];

export const EXPERIENCE = [
  {
    role: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    period: '2023 — Present',
    description: 'Building responsive websites and web apps for clients using React and modern CSS.',
  },
  {
    role: 'Content Writer',
    company: 'Freelance',
    period: '2021 — 2022',
    description: 'Produced SEO-optimized blog posts, articles, and website copy for tech and lifestyle brands.',
  },
];

export const SOCIAL_LINKS = {
  github:   'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter:  'https://twitter.com',
};
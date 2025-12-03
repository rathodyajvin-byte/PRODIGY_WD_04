import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { NavItem, ExperienceItem, SkillItem, ProjectItem, SocialLink } from './types';

export const SCROLL_THRESHOLD = 50;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const PROFILE = {
  name: "Yajvin Rathod",
  title: "Junior Web Developer",
  tagline: "Building digital experiences that matter.",
  bio: "I'm a motivated developer at the beginning of my professional journey, passionate about building intuitive and responsive web applications. I love solving problems with clean code, learning modern frameworks, and turning complex logic into user-friendly experiences.",
  location: "Mumbai, India",
  email: "yajvin@example.com",
  avatarUrl: "" 
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Junior Web Developer",
    company: "StartUp Solutions",
    period: "2023 - Present",
    description: "Collaborating with senior engineers to build reusable React components for the main product dashboard. Assisting in bug fixes, code reviews, and writing unit tests to ensure application stability.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Jest"]
  },
  {
    id: 2,
    role: "Frontend Intern",
    company: "Creative Digital Agency",
    period: "2022 - 2023",
    description: "Converted Figma designs into pixel-perfect, responsive HTML/CSS templates. Optimized web assets for performance and assisted in migrating legacy pages to a modern stack.",
    technologies: ["HTML5", "SASS", "JavaScript", "Figma"]
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self Employed",
    period: "2021 - 2022",
    description: "Designed and deployed landing pages for local small businesses. Managed domain setup, hosting configuration, and basic SEO optimization for clients.",
    technologies: ["WordPress", "CSS", "Hosting", "SEO"]
  }
];

export const SKILLS: SkillItem[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js (Basic)", level: 60, category: "Backend" },
  { name: "SQL", level: 65, category: "Backend" },
  { name: "Figma", level: 75, category: "Design" },
  { name: "Git / GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "neon-tictactoe",
    title: "Neon Tactics",
    description: "A futuristic, unbeatable Tic-Tac-Toe game featuring a heuristic AI opponent and local multiplayer mode. Built with React state management and Tailwind for the neon glassmorphism aesthetic.",
    tags: ["React", "Game Logic", "AI", "Tailwind"],
    componentName: "TicTacToe",
    repoUrl: "https://github.com/username/neon-tictactoe"
  },
  {
    id: "chronos-stopwatch",
    title: "Chronos Timer",
    description: "A high-precision stopwatch application utilizing requestAnimationFrame for millisecond accuracy. Features lap tracking, split times, and a responsive glass UI.",
    tags: ["React", "Performance", "Hooks"],
    componentName: "Stopwatch",
    repoUrl: "https://github.com/username/chronos"
  },
  {
    id: "lumina-nav",
    title: "Lumina Navigation",
    description: "A responsive, scroll-aware navigation component system. Demonstrates advanced CSS transitions, mobile drawer patterns, and accessible DOM structure.",
    tags: ["UI/UX", "Components", "Responsive"],
    repoUrl: "https://github.com/username/lumina-nav"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com", icon: Twitter },
];
import { LucideIcon } from 'lucide-react';

// Previous Types
export type Player = 'X' | 'O' | null;

export interface WinInfo {
  winner: Player;
  line: number[] | null;
  isDraw: boolean;
}

export type GameMode = 'PvP' | 'PvCPU';

export interface ScoreBoard {
  X: number;
  O: number;
  Draws: number;
}

export interface Lap {
  id: number;
  time: number;
  split: number;
}

// Portfolio Types
export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  componentName?: 'TicTacToe' | 'Stopwatch'; // For the interactive demo
  demoUrl?: string;
  repoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  bgColor?: string;
}
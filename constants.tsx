
import React from 'react';
import { Project, Experience, Skill } from './types';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code2, 
  Palette, 
  Zap, 
  Globe,
  Layout,
  ShoppingCart,
  Search
} from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/adnan', icon: <Github size={20} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/adnan', icon: <Linkedin size={20} /> },
  { name: 'Twitter', url: 'https://twitter.com/adnan', icon: <Twitter size={20} /> },
  { name: 'Email', url: 'mailto:contact@adnan.com', icon: <Mail size={20} /> },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'WooCommerce Luxury Store',
    description: 'A custom-built WordPress e-commerce solution with advanced product filtering, multi-currency support, and optimized checkout flow.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Elementor'],
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Real Estate Portal',
    description: 'A high-performance WordPress site for property listings featuring dynamic maps, custom post types, and an automated lead generation system.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tags: ['WordPress', 'ACF Pro', 'Google Maps API', 'PHP'],
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'News & Media Hub',
    description: 'Custom Gutenberg-based editorial platform with automated SEO tools and integration for high-traffic content delivery.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    tags: ['WordPress', 'Gutenberg', 'SEO', 'JavaScript'],
    link: '#',
    github: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'PixelPerfect WP Agency',
    role: 'Lead WordPress Developer',
    period: '2022 - Present',
    description: [
      'Engineered complex WordPress architectures for Fortune 500 clients.',
      'Developed custom themes and plugins using modern PHP standards and React-based Gutenberg blocks.',
      'Reduced page load times by 60% through advanced caching and database optimization.'
    ]
  },
  {
    id: 'exp2',
    company: 'CMS Solutions',
    role: 'WordPress Specialist',
    period: '2020 - 2022',
    description: [
      'Migrated 50+ websites from legacy CMS platforms to WordPress with zero downtime.',
      'Specialized in WooCommerce scalability for stores processing 10k+ monthly orders.',
      'Implemented robust security protocols protecting client sites from SQL injections and DDoS attacks.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'WordPress Core', level: 98, category: 'Frontend' },
  { name: 'WooCommerce', level: 95, category: 'Backend' },
  { name: 'PHP / MySQL', level: 90, category: 'Backend' },
  { name: 'Elementor / Divi', level: 98, category: 'Frontend' },
  { name: 'Custom Theme Dev', level: 92, category: 'Frontend' },
  { name: 'Gutenberg Blocks', level: 85, category: 'Frontend' },
  { name: 'WP Engine / Hosting', level: 90, category: 'Tools' },
  { name: 'SEO Optimization', level: 95, category: 'Other' },
  { name: 'JavaScript / React', level: 80, category: 'Frontend' },
  { name: 'Speed Optimization', level: 94, category: 'Tools' },
];

export const FEATURES = [
  {
    title: 'Custom WP Themes',
    description: 'Bespoke designs tailored to your brand identity, built for speed and performance.',
    icon: <Layout className="text-brand-primary" size={24} />
  },
  {
    title: 'WooCommerce Expert',
    description: 'Scalable e-commerce solutions that convert visitors into loyal customers.',
    icon: <ShoppingCart className="text-brand-secondary" size={24} />
  },
  {
    title: 'SEO Optimized',
    description: 'Sites built from the ground up with search engines in mind for maximum visibility.',
    icon: <Search className="text-brand-primary" size={24} />
  },
  {
    title: 'Fast & Secure',
    description: 'Optimized code and enterprise-grade security to keep your business running.',
    icon: <Zap className="text-brand-secondary" size={24} />
  }
];

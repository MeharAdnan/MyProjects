export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

/**
 * Interface for AI Chat messages
 */
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  approach: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency?: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  type: "work" | "education" | "community";
}

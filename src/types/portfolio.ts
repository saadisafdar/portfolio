export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  bio: string;
  avatarSvg: string;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    facebook: string;
    discord: string;
    reddit: string;
    tiktok: string;
    x: string;
    threads: string;
    email: string;
    phone: string;
    [key: string]: string; // Fallback indexer for iteration
  };
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  image: string;
  highlight: boolean;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: {
    categories: SkillCategory[];
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
}

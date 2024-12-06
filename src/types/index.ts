export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}
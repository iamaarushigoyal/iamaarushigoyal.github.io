import { SocialLink, Experience, Education } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/aarushigoyal',
    icon: 'github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/aarushigoyal',
    icon: 'linkedin'
  },
  {
    platform: 'Resume',
    url: '/resume.pdf',
    icon: 'file-text'
  }
];

export const experiences: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Software Engineer',
    duration: '2020 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored junior developers and conducted technical interviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    company: 'Innovation Labs',
    position: 'Software Engineer',
    duration: '2018 - 2020',
    description: [
      'Developed full-stack applications using React and Node.js',
      'Optimized database queries improving performance by 40%',
      'Collaborated with cross-functional teams to deliver features'
    ]
  }
];

export const education: Education[] = [
  {
    institution: 'Stanford University',
    degree: 'Master of Science in Computer Science',
    duration: '2016 - 2018',
    description: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    institution: 'Indian Institute of Technology',
    degree: 'Bachelor of Technology in Computer Science',
    duration: '2012 - 2016',
    description: 'Graduated with First Class Honours'
  }
];
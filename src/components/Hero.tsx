import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { socialLinks } from '../data/profile';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-24 text-center">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Aarushi Goyal"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Aarushi Goyal
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Senior Software Engineer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Passionate about building scalable applications and creating impactful solutions.
          Specialized in full-stack development with expertise in React, Node.js, and cloud technologies.
        </p>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {link.icon === 'github' && <Github className="w-6 h-6" />}
              {link.icon === 'linkedin' && <Linkedin className="w-6 h-6" />}
              {link.icon === 'file-text' && <FileText className="w-6 h-6" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
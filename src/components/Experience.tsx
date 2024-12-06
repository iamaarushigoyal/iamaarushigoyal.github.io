import React from 'react';
import { experiences } from '../data/profile';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <Briefcase className="w-8 h-8" />
          Professional Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-200 dark:before:bg-gray-700"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 -translate-x-[3px]" />
              <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
              <h4 className="text-purple-600 dark:text-purple-400 mb-2">{exp.company}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { education } from '../data/profile';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8" />
          Education
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
              <h4 className="text-purple-600 dark:text-purple-400 mb-2">{edu.degree}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.duration}</p>
              <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
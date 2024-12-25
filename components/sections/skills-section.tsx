"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'JavaScript', level: 95, color: '#F7DF1E' },
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'Next.js', level: 90, color: '#005020' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Redux', level: 85, color: '#764ABC' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'GraphQL', level: 80, color: '#E10098' },
  { name: 'MongoDB', level: 78, color: '#671848' },
  { name: 'Docker', level: 75, color: '#2496ED' },
  { name: 'MySQL', level: 75, color: '#4479A1' },
  { name: 'AWS', level: 70, color: '#FF9900' },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ backgroundColor: skill.color }}
                  className="h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
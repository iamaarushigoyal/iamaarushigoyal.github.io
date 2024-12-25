"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const education = [
  {
    degree: "Masters in Data Science and Engineering",
    institution: "Birla Institute of Technology, Pilani",
    year: "2025",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
  },
  {
    degree: "Bachelors in Computer Science and Engineering",
    institution: "Malaviya National Institute of Technology",
    year: "2017",
    cgpa: "7.8",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Mnit_logo.png",
  },
];

const experience = [
  {
    company: "Tech Corp",
    role: "Senior Software Engineer",
    period: "2020-Present",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
  },
  {
    company: "Digital Solutions Inc",
    role: "Software Engineer",
    period: "2017-2020",
    logo: "https://images.unsplash.com/photo-1516387938699-a93567ec168e",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 neon-text">Education</h2>
            {education.map((edu, index) => (
              <Card key={index} className="mb-6 bg-card/50 hover:neon-box transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm">Year: {edu.year}</p>
                      {edu.cgpa && <p className="text-sm">CGPA: {edu.cgpa}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 neon-text">Experience</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {experience.map((exp, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-card/50 hover:neon-box transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                            <p className="text-sm">{exp.period}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
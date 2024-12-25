"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: "Masters in Data Science and Engineering",
    institution: "Birla Institute of Technology, Pilani",
    year: "2025",
    cgpa: "9.3",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
  },
  {
    degree: "Bachelors in Computer Science and Engineering",
    institution: "Malaviya National Institute of Technology",
    year: "2017",
    cgpa: "7.8",
    logo: "https://mnit.ac.in/Images/Mnit_logo.png",
  },
];

const experience = [
  {
    company: "GoDaddy",
    role: "Senior Software Engineer",
    period: "Oct 2024-Present",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGxVeCjaxsH6fcJFBNTqsYGDJaiToH9eljA&s",
  },
  {
    company: "Chegg",
    role: "Senior Software Engineer",
    period: "Oct 2020- Oct 2024",
    logo: "data:image/png;base64,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",
  },
  {
    company: "InfoEdge",
    role: "Software Engineer",
    period: "Dec 2018- Sep 2020",
    logo: "data:image/png;base64,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",
  },
  {
    company: "Deqode",
    role: "Solution Engineer",
    period: "Jul 2017 - Nov 2018",
    logo: "data:image/jpeg;base64,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",
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="mb-6 bg-card/50 hover:bg-card/70 transition-all duration-300">
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
                      <h4 className="font-semibold">{edu.degree}</h4>
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
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            {/* <Carousel className="w-full">
              <CarouselContent>
                {experience.map((exp, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-card/50 hover:bg-card/70 transition-all duration-300">
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
                            <h4 className="font-semibold">{exp.role}</h4>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                            <p className="text-sm">{exp.period}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel> */}
             {experience.map((exp, index) => (
              <Card key={index} className="mb-6 bg-card/50 hover:bg-card/70 transition-all duration-300">
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
                            <h4 className="font-semibold">{exp.role}</h4>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                            <p className="text-sm">{exp.period}</p>
                          </div>
                        </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
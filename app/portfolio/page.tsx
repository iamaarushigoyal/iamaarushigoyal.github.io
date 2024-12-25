"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const projects = {
  frontend: [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Tailwind CSS",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with dark mode and animations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      link: "#"
    }
  ],
  uiux: [
    {
      title: "Mobile Banking App",
      description: "UX/UI design for a modern banking application",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      link: "#"
    },
    {
      title: "Travel Booking Platform",
      description: "Complete UI design system for a travel platform",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      technologies: ["Sketch", "InVision", "Design System"],
      link: "#"
    }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          Portfolio
        </motion.h1>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="frontend">FullStack Development</TabsTrigger>
            <TabsTrigger value="uiux">AI</TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:neon-box transition-all duration-300">
                      <div className="relative h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-primary/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
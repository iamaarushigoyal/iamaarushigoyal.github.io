"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const projects = {
  frontend: [
    {
      title: "Job Seeker Platform",
      description: "A modern job-seeker platform built with Reactjs and Nodejs",
      image: "https://longlist.io/_next/image?url=https%3A%2F%2Fcdn.longlist.io%2Fjob_seeker_meaning_1b0cdadd05.webp&w=1200&q=75",
      technologies: ["React.js", "TypeScript", "Node.js", "Redux"],
      link: "https://www.hirist.tech/",
    },
    {
      title: `Student's Solution Portal`,
      description: "A platform for students to get answers from certified tutors via chat and online sessions.",
      image: "https://a.storyblok.com/f/192322/5030x3353/e661010531/1-we-match-every-student.jpg/m/1024x0",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://www.gostudent.org/"
    },
    {
      title: "Immersive Learning Experience",
      description: "Developed an AR/VR learning tool with 3D models using Sketchfab APIs for interactive education",
      image: "https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/download/c467ac970d550e5f9c62973223b7f4cb-v2.jpg",
      technologies: ["React.js", "SketchFab APIs", "Node.js"],
    }
  ],
  uiux: [
    {
      title: "Price Prediction for AirBNB",
      description: "Analyzed Airbnb data to identify pricing factors, customer preferences, and investment strategies using analytics.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      technologies: ["Data Science", "Data Analysis", "Machine Learning", "AI"],
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

export function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Portfolio
        </motion.h2>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="frontend">FullStack Development</TabsTrigger>
            <TabsTrigger value="uiux">AI/ML</TabsTrigger>
          </TabsList>

          <div ref={ref}>
            {Object.entries(projects).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:bg-card/70 transition-all duration-300" onClick={() => project.link && window.open(project.link, '_blank') } style={{ cursor: 'pointer'}}>
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
          </div>
        </Tabs>
      </div>
    </section>
  );
}
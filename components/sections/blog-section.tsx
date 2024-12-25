"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { LinkedInEmbed } from 'react-social-media-embed';

const blogPosts = [
  {
    title: "Supercharge your React Application",
    excerpt: "Performance optimisation techniques in Frontend Development",
    date: "2024-12-15",
    category: "Development",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*E16L9JJzsAMx8j1S8bmhYg.png",
    readTime: "5 min read",
    url: 'https://medium.com/@iamaarushigoyal/beyond-the-basics-supercharging-your-react-app-performance-199f0de7dcfc'
  },
  {
    title: "Building Progressive Web Apps (PWAs) in React",
    excerpt: "A deep dive into building Progressive Web Apps (PWAs) in React with a hands-on guide",
    date: "2024-12-24",
    category: "Development",
    image: "https://miro.medium.com/v2/resize:fit:1276/format:webp/1*IxvFHx7XDb6InS9m9b1Utg.jpeg",
    readTime: "8 min read",
    url: 'https://medium.com/@iamaarushigoyal/building-progressive-web-apps-pwas-in-react-a-hands-on-guide-6d0ff0f54449'
  },
  // {
  //   title: "The Art of Travel Photography",
  //   excerpt: "Tips and tricks for capturing memorable moments during your travels.",
  //   date: "2024-03-05",
  //   category: "Photography",
  //   image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  //   readTime: "6 min read"
  // }
];

export function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Blog
        </motion.h2>

        <div className="max-w-md mx-auto mb-12">
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:bg-card/70 transition-all duration-300" onClick={() => window.open(post.url, '_blank') } style={{ cursor: 'pointer'}}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <LinkedInEmbed
                url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7133364854962200577"
                height={400}
              />
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}
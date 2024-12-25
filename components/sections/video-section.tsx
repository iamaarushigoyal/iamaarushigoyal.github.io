"use client";

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Video
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center group">
            <Play className="w-16 h-16 transition-transform group-hover:scale-110" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
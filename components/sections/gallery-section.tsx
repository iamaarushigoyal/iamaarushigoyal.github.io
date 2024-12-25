"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Autoplay from 'embla-carousel-autoplay';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    title: "Mountain Adventure",
    category: "Travel"
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Sunset Photography",
    category: "Photography"
  },
  {
    src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    title: "Art Exhibition",
    category: "Art"
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Nature Exploration",
    category: "Travel"
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    title: "Landscape",
    category: "Photography"
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    title: "Urban Adventure",
    category: "Travel"
  }
];

export function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  return (
    <section id="gallery" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Gallery
        </motion.h2>

        <div ref={ref} className="relative">
          <Carousel
            plugins={[plugin]}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group cursor-pointer">
                      <div className="relative aspect-square">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                            <p className="text-sm text-white/80">{image.category}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
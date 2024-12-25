"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    title: "Mountain Adventure",
    category: "Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Sunset Photography",
    category: "Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    title: "Art Exhibition",
    category: "Art",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Nature Exploration",
    category: "Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    title: "Landscape",
    category: "Photography",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    title: "Urban Adventure",
    category: "Travel",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          Gallery
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg neon-box"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
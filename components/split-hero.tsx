"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Compass } from 'lucide-react';
import Image from 'next/image';

const explorerImages = [
  'https://images.unsplash.com/photo-1488085061387-422e29b40080',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
];

const developerImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
];

export function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'explorer' | 'developer' | null>(null);
  const [explorerIndex, setExplorerIndex] = useState(0);
  const [developerIndex, setDeveloperIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExplorerIndex((prev) => (prev + 1) % explorerImages.length);
      setDeveloperIndex((prev) => (prev + 1) % developerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex">
      <motion.div
        className="relative w-1/2 flex items-center justify-center cursor-pointer overflow-hidden"
        onHoverStart={() => setHoveredSide('explorer')}
        onHoverEnd={() => setHoveredSide(null)}
        animate={{
          width: hoveredSide === 'developer' ? '30%' : '50%',
        }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={explorerIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={explorerImages[explorerIndex]}
              alt="Explorer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90" />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 text-center">
          <Compass className="w-16 h-16 mx-auto mb-4 text-[var(--neon-blue)]" />
          <h2 className="text-4xl font-bold mb-4 neon-text">Explorer</h2>
          {hoveredSide === 'explorer' && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto text-lg"
            >
              Passionate about art, travel, and discovering new perspectives
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="relative w-1/2 flex items-center justify-center cursor-pointer overflow-hidden"
        onHoverStart={() => setHoveredSide('developer')}
        onHoverEnd={() => setHoveredSide(null)}
        animate={{
          width: hoveredSide === 'explorer' ? '30%' : '50%',
        }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={developerIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={developerImages[developerIndex]}
              alt="Developer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-[var(--neon-purple)]/80 to-blue-900/90" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center">
          <Code2 className="w-16 h-16 mx-auto mb-4 text-[var(--neon-pink)]" />
          <h2 className="text-4xl font-bold mb-4 neon-text">Developer</h2>
          {hoveredSide === 'developer' && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto text-lg"
            >
              Crafting digital experiences through code and innovation
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
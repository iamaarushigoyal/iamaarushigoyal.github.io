"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className="h-screen flex">
      <Link href="#explorer" className="w-1/2 h-full">
        <motion.div
          className="relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredSide('explorer')}
          onHoverEnd={() => setHoveredSide(null)}
        >
          <div className="absolute inset-0">
            <Image
              src={explorerImages[0]}
              alt="Explorer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90" />
          </div>
          
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
      </Link>

      <Link href="#developer" className="w-1/2 h-full">
        <motion.div
          className="relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden"
          onHoverStart={() => setHoveredSide('developer')}
          onHoverEnd={() => setHoveredSide(null)}
        >
          <div className="absolute inset-0">
            <Image
              src={developerImages[0]}
              alt="Developer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-[var(--neon-purple)]/80 to-blue-900/90" />
          </div>

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
      </Link>
    </div>
  );
}
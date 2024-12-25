"use client";

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

export function ProfileHeader() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)]/20 to-[var(--neon-pink)]/20" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-48 h-48"
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQEV18iD89K5ZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694262645004?e=1739404800&v=beta&t=nQgZ7lLZjMD-iGw0z3vOHDBp6FU2RWxsdZdOgpmZGj0"
              alt="Aarushi Goyal"
              fill
              className="object-cover rounded-full border-4 border-[var(--neon-pink)] neon-box"
              priority
            />
          </motion.div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 neon-text">Aarushi Goyal</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              I'm a senior software developer at GoDaddy with 7+ years of experience crafting future-proof, efficient, and practical solutions. 
              Proficient in ReactJS, NextJS, GraphQL, and NodeJS, I’m passionate about learning and connecting with the tech community.
            </p>
            <Button
              className="group bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://drive.google.com/file/d/1f91yqMprRdah2Zoa4gnoZCyh497FsAhp/view?usp=drive_link', '_blank')}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Resume
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
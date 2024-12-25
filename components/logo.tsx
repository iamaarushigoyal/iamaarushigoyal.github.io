"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-pink)] to-[var(--neon-purple)]">
          <span className="text-xl font-bold text-white">AG</span>
        </div>
        <span className="text-xl font-bold neon-text">Aarushi Goyal</span>
      </motion.div>
    </Link>
  );
}
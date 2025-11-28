'use client';

import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/animations';

export default function Logo({ name, onClick }) {
  const firstName = name?.split(' ')[0] || 'Dev';
  
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="text-xl font-bold text-white cursor-pointer"
      onClick={onClick || (() => scrollToSection('home'))}
    >
      {firstName}
      <span className="text-blue-500">.</span>
    </motion.span>
  );
}


'use client';

import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/animations';

// Desktop Navigation Link
export function NavLink({ section, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick || (() => scrollToSection(section))}
      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
      }`}
    >
      {label || section}
    </button>
  );
}

// Mobile Navigation Link
export function MobileNavLink({ section, label, onClick, variants }) {
  return (
    <motion.button
      variants={variants}
      onClick={onClick}
      className="text-3xl font-bold capitalize text-zinc-300 hover:text-blue-500 transition-colors"
    >
      {label || section}
    </motion.button>
  );
}

export default NavLink;



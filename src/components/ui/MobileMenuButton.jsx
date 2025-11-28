'use client';

import { motion } from 'framer-motion';

export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={onClick}
      className="md:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="flex flex-col gap-1.5">
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          className="w-5 h-0.5 bg-blue-500 block"
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-5 h-0.5 bg-blue-500 block"
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          className="w-5 h-0.5 bg-blue-500 block"
        />
      </div>
    </motion.button>
  );
}


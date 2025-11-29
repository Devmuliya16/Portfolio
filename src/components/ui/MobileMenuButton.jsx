'use client';

import { motion } from 'framer-motion';
import { HiX, HiMenu } from 'react-icons/hi';

export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      onClick={onClick}
      className="md:hidden fixed top-4 right-4 z-50 w-11 h-11 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 rounded-xl flex items-center justify-center"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <HiX className="w-5 h-5 text-blue-400" />
        ) : (
          <HiMenu className="w-5 h-5 text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
}



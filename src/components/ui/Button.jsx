'use client';

import { motion } from 'framer-motion';

// Primary Button (filled)
export function PrimaryButton({ children, href, onClick, className = '', ...props }) {
  const baseClasses = 'px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors';
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Secondary Button (outlined)
export function SecondaryButton({ children, href, onClick, className = '', ...props }) {
  const baseClasses = 'px-5 py-2 bg-zinc-800 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-700 transition-colors';
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Icon Button
export function IconButton({ children, onClick, className = '', ariaLabel, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-12 h-12 bg-zinc-800/50 border border-zinc-700 rounded-xl flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-600/50 transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default PrimaryButton;



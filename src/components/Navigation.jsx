'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navSections } from '@/lib/constants';
import { staggerContainer, staggerItem, scrollToSection } from '@/lib/animations';

export default function Navigation({ activeSection, config }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              scrolled
                ? 'bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 shadow-2xl'
                : 'bg-transparent'
            }`}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              {config.personal.name.split(' ')[0]}
              <span className="text-blue-500">.</span>
            </motion.span>

            <div className="flex items-center gap-1">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-blue-600 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <a
              href={config.personal.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-xl flex items-center justify-center"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 text-center"
            >
              {navSections.map((section) => (
                <motion.button
                  key={section}
                  variants={staggerItem}
                  onClick={() => {
                    scrollToSection(section);
                    setIsOpen(false);
                  }}
                  className="text-3xl font-bold capitalize text-zinc-300 hover:text-blue-500 transition-colors"
                >
                  {section}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navSections } from '@/lib/constants';
import { staggerContainer, staggerItem, scrollToSection } from '@/lib/animations';

// Import reusable UI components
import Logo from '@/components/ui/Logo';
import { NavLink, MobileNavLink } from '@/components/ui/NavLink';
import MobileMenuButton from '@/components/ui/MobileMenuButton';
import { PrimaryButton } from '@/components/ui/Button';

export default function Navigation({ activeSection, config }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

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
            {/* Logo */}
            <Logo name={config.personal.name} />

            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {navSections.map((section) => (
                <NavLink
                  key={section}
                  section={section}
                  isActive={activeSection === section}
                />
              ))}
            </div>

            {/* Resume Button */}
            <PrimaryButton href={config.personal.resumeLink}>
              Resume
            </PrimaryButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <MobileMenuButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />

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
                <MobileNavLink
                  key={section}
                  section={section}
                  variants={staggerItem}
                  onClick={() => handleMobileNavClick(section)}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { HiGlobeAlt, HiChevronDown } from 'react-icons/hi';
import { navSections } from '@/lib/constants';
import { localeNames, localeCodes } from '@/lib/localeConfig';
import { staggerContainer, staggerItem, scrollToSection } from '@/lib/animations';

// Import reusable UI components
import Logo from '@/components/ui/Logo';
import { NavLink, MobileNavLink } from '@/components/ui/NavLink';
import MobileMenuButton from '@/components/ui/MobileMenuButton';
import { PrimaryButton } from '@/components/ui/Button';

// Language Switcher Component (SEO-friendly with Links)
function LanguageSwitcher({ locale }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const locales = ['en', 'fr', 'de'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-blue-500/50 hover:bg-zinc-800 transition-all text-sm group"
      >
        <HiGlobeAlt className="text-blue-400 text-lg" />
        <span className="text-zinc-300 font-medium">{localeCodes[locale]}</span>
        <HiChevronDown className={`text-zinc-500 text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden shadow-2xl z-50 min-w-[150px]">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={router.asPath}
                locale={loc}
                className={`flex items-center justify-between px-4 py-3 hover:bg-zinc-800 transition-colors ${
                  locale === loc ? 'bg-blue-600/20 text-blue-400' : 'text-zinc-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{localeNames[loc]}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${locale === loc ? 'bg-blue-600 text-white' : 'bg-zinc-700 text-zinc-400'}`}>
                  {localeCodes[loc]}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Navigation({ activeSection, config, t, locale }) {
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
                  label={t?.nav?.[section] || section}
                  isActive={activeSection === section}
                />
              ))}
            </div>

            {/* Right side: Language + Resume */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale || 'en'} />
              <PrimaryButton href={config.personal.resumeLink}>
                {t?.nav?.resume || 'Resume'}
              </PrimaryButton>
            </div>
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
                  label={t?.nav?.[section] || section}
                  variants={staggerItem}
                  onClick={() => handleMobileNavClick(section)}
                />
              ))}
              
              {/* Language switcher in mobile menu */}
              <motion.div variants={staggerItem} className="flex justify-center gap-3 pt-6 border-t border-zinc-800">
                {['en', 'fr', 'de'].map((loc) => (
                  <Link
                    key={loc}
                    href="/"
                    locale={loc}
                    className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl transition-all ${
                      locale === loc 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                        : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    <HiGlobeAlt className="text-xl" />
                    <span className="text-xs font-semibold">{localeCodes[loc]}</span>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

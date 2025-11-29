'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import { socialIconMap } from '@/lib/constants';
import { scrollToSection } from '@/lib/animations';

export default function HeroSection({ config, t }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {t?.hero?.available || config.personal.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
        >
          {config.personal.name}
        </motion.h1>

        {/* Typewriter Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-zinc-400 mb-4 h-12"
        >
          <Typewriter
            options={{ loop: true, delay: 50, deleteSpeed: 30 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`${config.personal.title}`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(`${config.personal.subtitle}`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(t?.hero?.buildingIdeas || 'Building Ideas')
                .pauseFor(1500)
                .deleteAll()
                .typeString(t?.hero?.creatingSolutions || 'Creating Solutions')
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t?.hero?.description || config.personal.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-full hover:from-blue-500 hover:to-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/25"
          >
            <span>{t?.hero?.viewWork || 'View My Work'}</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-transparent border border-zinc-600 text-zinc-300 text-sm font-medium rounded-full hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
          >
            {t?.hero?.getInTouch || 'Get In Touch'}
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {config.social.map((item) => {
            const Icon = socialIconMap[item.icon];
            if (!Icon) return null;
            return (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-12 h-12 bg-zinc-800/50 border border-zinc-700 rounded-xl flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-600/50 transition-all"
              >
                <Icon className="text-xl" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-zinc-500 hover:text-blue-400 transition-colors"
        >
          <HiChevronDown className="text-3xl" />
        </motion.button>
      </motion.div>
    </section>
  );
}





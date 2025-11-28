'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutSection({ config }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader number="01" title="About Me" isInView={isInView} />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.p variants={staggerItem} className="text-zinc-400 text-lg leading-relaxed">
              {config.about.intro}
            </motion.p>
            <motion.p variants={staggerItem} className="text-zinc-400 leading-relaxed">
              {config.about.description}
            </motion.p>
            <motion.p variants={staggerItem} className="text-blue-400">
              {config.about.currentFocus}
            </motion.p>

            {/* Traits */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-4">
              {config.about.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-sm text-zinc-300"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image + Stats */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Image with overlay */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-blue-600/50 transition-colors">
                <img
                  src={config.personal.profileImage}
                  alt={config.personal.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-semibold">{config.personal.name}</p>
                  <p className="text-zinc-400 text-sm">{config.personal.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {config.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center hover:border-blue-600/30 transition-colors group"
                >
                  <p className="text-2xl font-bold text-blue-500 group-hover:scale-110 transition-transform">{stat.value}</p>
                  <p className="text-zinc-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




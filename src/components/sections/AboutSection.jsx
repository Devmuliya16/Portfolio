'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutSection({ config, t }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader 
          number="01" 
          title={t?.about?.title || "About Me"} 
          subtitle={t?.about?.subtitle}
          isInView={isInView} 
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.p variants={staggerItem} className="text-zinc-400 text-lg leading-relaxed">
              {t?.about?.intro || config.about.intro}
            </motion.p>
            <motion.p variants={staggerItem} className="text-zinc-400 leading-relaxed">
              {t?.about?.description || config.about.description}
            </motion.p>
            <motion.p variants={staggerItem} className="text-blue-400">
              {t?.about?.currentFocus || config.about.currentFocus}
            </motion.p>

            {/* Traits */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2 pt-4">
              {(t?.about?.traits || config.about.traits).map((trait, index) => (
                <span
                  key={index}
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
                  <p className="text-zinc-400 text-sm">{config.personal.role || config.personal.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




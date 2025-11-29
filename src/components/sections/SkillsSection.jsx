'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function SkillsSection({ config, t }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categoryLabels = {
    languages: t?.skills?.languages || 'Languages',
    frameworks: t?.skills?.frameworks || 'Frameworks',
    'databases & tools': t?.skills?.databases || 'Databases & Tools',
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader 
          number="02" 
          title={t?.skills?.title || "Skills"} 
          subtitle={t?.skills?.subtitle}
          isInView={isInView} 
        />

        <div className="space-y-12">
          {Object.entries(config.skills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.15 }}
            >
              <h3 className="text-blue-400 font-medium mb-6 capitalize">{categoryLabels[category] || category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex items-center gap-3 px-4 py-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-blue-600/50 transition-all cursor-pointer"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                    <span className="text-zinc-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

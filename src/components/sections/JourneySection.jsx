'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { fadeInUp, timelineCardVariants } from '@/lib/animations';

export default function JourneySection({ journey }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="journey" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-blue-500 font-mono">04.</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">My Journey</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-zinc-500 mb-16"
        >
          A timeline of my growth as a developer.
        </motion.p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - centered with dot */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-800">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-600 to-violet-600"
            />
          </div>

          {/* Timeline Items */}
          {journey.map((item, index) => (
            <motion.div
              key={index}
              variants={timelineCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot - centered on line */}
              <div className="absolute left-[7px] md:left-1/2 -translate-x-1/2 top-6 z-10">
                {/* Glow */}
                <div className="absolute -inset-2 bg-blue-500/40 rounded-full blur-md" />
                {/* Dot */}
                <div className="relative w-4 h-4 bg-blue-600 rounded-full border-[3px] border-zinc-950 shadow-lg" />
              </div>

              {/* Card Container */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-24px)] ${
                  index % 2 === 0 ? 'md:pr-6 md:text-right' : 'md:pl-6 md:ml-auto'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-blue-600/30 transition-all"
                >
                  <span className="inline-block px-3 py-1 bg-blue-600/10 text-blue-400 text-xs font-mono rounded-full mb-3">
                    {item.time}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">{item.expr}</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {item.work.map((work, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-zinc-400 text-sm ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="text-blue-500 mt-0.5">▹</span>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

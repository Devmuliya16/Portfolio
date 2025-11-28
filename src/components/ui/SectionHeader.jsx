import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function SectionHeader({ number, title, subtitle, isInView }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="mb-16"
    >
      <div className="flex items-start gap-6">
        {/* Large number */}
        <span className="text-6xl sm:text-7xl md:text-8xl font-black text-white/10 leading-none">
          {number}
        </span>
        
        {/* Title & subtitle */}
        <div className="pt-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-zinc-500 mt-2">{subtitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}




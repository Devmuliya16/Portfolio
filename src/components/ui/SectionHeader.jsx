import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function SectionHeader({ number, title, isInView }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex items-center gap-4 mb-16"
    >
      <span className="text-blue-500 font-mono">{number}.</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-zinc-800" />
    </motion.div>
  );
}




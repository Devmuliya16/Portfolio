'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { socialIconMap } from '@/lib/constants';

// Large Background Badge - subtle rotation on scroll
const OpenToWorkBadge = ({ scrollProgress }) => {
  const badgeRotate = useTransform(scrollProgress, [0, 1], [-10, 15]);

  return (
    <motion.div 
      style={{ rotate: badgeRotate }}
      className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] opacity-[0.12]"
    >
      {/* Text ring */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          />
        </defs>
        <text className="text-[6px] uppercase tracking-[0.4em] fill-white font-bold">
          <textPath href="#circlePath">
            ✦ OPEN TO WORK ✦ OPEN TO WORK ✦ OPEN TO WORK 
          </textPath>
        </text>
      </svg>
      
      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40%] h-[40%] border-4 border-white rounded-full flex items-center justify-center">
          <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
          </svg>
        </div>
      </div>
      
      {/* Ring */}
      <div className="absolute inset-0 rounded-full border-4 border-white" />
    </motion.div>
  );
};

export default function ContactSection({ config, t }) {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'end start'],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([form, {}]),
      });
      const data = await response.json();
      alert(data.success ? (t?.contact?.success || 'Message sent successfully!') : (t?.contact?.error || 'Failed to send'));
      if (data.success) setForm({ name: '', email: '', message: '' });
    } catch {
      alert(t?.contact?.error || 'Failed to send message');
    }
    setSending(false);
  };

  // Subtle scroll animations
  const textY = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>

      {/* Large Background Badge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none">
        <OpenToWorkBadge scrollProgress={scrollYProgress} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={headerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-start justify-center gap-6">
            {/* Large number */}
            <span className="text-6xl sm:text-7xl md:text-8xl font-black text-white/10 leading-none">
              05
            </span>
            
            {/* Title & subtitle */}
            <div className="pt-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {t?.contact?.title || 'Get In Touch'}
              </h2>
              <p className="text-zinc-400 mt-2 max-w-md">
                {t?.contact?.subtitle || "I'm available for full-time roles & freelance projects. Feel free to reach out!"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form & Info Grid */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t?.contact?.namePlaceholder || "Your name"}
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-blue-600 outline-none transition-colors"
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t?.contact?.emailPlaceholder || "Your email"}
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-blue-600 outline-none transition-colors"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t?.contact?.messagePlaceholder || "Your message"}
              required
              rows={4}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-blue-600 outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? (t?.contact?.sending || 'Sending...') : (
                <>
                  {t?.contact?.send || 'Send Message'}
                  <HiArrowRight />
                </>
              )}
            </button>
          </motion.form>

          {/* Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            <motion.div
              variants={staggerItem}
              className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">{t?.contact?.available || config.personal.availability}</span>
              </div>
              <p className="text-zinc-400 text-sm">
                {t?.contact?.letsWork || "Let's build something great together!"}
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <HiOutlineMail className="text-blue-500 text-xl" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">{t?.contact?.email || 'Email'}</p>
                  <a href={`mailto:${config.personal.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {config.personal.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">{t?.contact?.location || 'Location'}</p>
                  <p className="text-white">{config.personal.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5"
            >
              <h4 className="text-white font-semibold mb-4">{t?.contact?.connectWithMe || 'Connect with me'}</h4>
              <div className="flex gap-3">
                {config.social.map((item) => {
                  const Icon = socialIconMap[item.icon];
                  if (!Icon) return null;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-600/50 transition-all"
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-zinc-600 text-sm">
        <p>Designed & Built by {config.personal.name}</p>
        <p className="mt-1">© {new Date().getFullYear()} {t?.footer?.rights || 'All rights reserved'}.</p>
      </div>
    </section>
  );
}

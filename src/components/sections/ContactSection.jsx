'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { socialIconMap } from '@/lib/constants';

export default function ContactSection({ config }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

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
      alert(data.message);
      if (data.success) setForm({ name: '', email: '', message: '' });
    } catch {
      alert('Failed to send message');
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-mono">05. What&apos;s Next?</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">Get In Touch</h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            I&apos;m currently open to new opportunities. Feel free to reach out if you have a question or just want to say hi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-blue-600 outline-none transition-colors"
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              required
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-blue-600 outline-none transition-colors"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-blue-600 outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
             <motion.div
              variants={staggerItem}
              className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">{config.personal.availability}</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Looking for full-time positions or freelance projects. Let&apos;s build something great together!
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <HiOutlineMail className="text-blue-500 text-xl" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Email</p>
                  <p className="text-white">{config.personal.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-500" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Location</p>
                  <p className="text-white">{config.personal.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6"
            >
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {config.social.map((item) => {
                  const Icon = socialIconMap[item.icon];
                  if (!Icon) return null;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-600/50 transition-all"
                    >
                      <Icon className="text-lg" />
                    </a>
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
        <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </section>
  );
}




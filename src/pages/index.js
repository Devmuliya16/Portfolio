import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { getSiteConfig, getProjects, getJourney } from '@/lib/configReader';
import { navSections } from '@/lib/constants';

// Import all components
import {
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  JourneySection,
  ContactSection,
} from '@/components';

// Global ambient glow component
const AmbientGlow = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {/* Top area glow */}
    <motion.div
      animate={{ 
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px]"
    />
    <motion.div
      animate={{ 
        x: [0, -40, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[30%] -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px]"
    />
    
    {/* Middle area glow */}
    <motion.div
      animate={{ 
        x: [0, 30, 0],
        y: [0, -40, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[50%] left-1/4 w-[700px] h-[700px] bg-blue-500/12 rounded-full blur-[160px]"
    />
    <motion.div
      animate={{ 
        x: [0, -50, 0],
        y: [0, 40, 0],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[60%] right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]"
    />
    
    {/* Bottom area glow */}
    <motion.div
      animate={{ 
        x: [0, 40, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[75%] -left-20 w-[550px] h-[550px] bg-violet-500/12 rounded-full blur-[150px]"
    />
    <motion.div
      animate={{ 
        x: [0, -30, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[85%] -right-32 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]"
    />
  </div>
);

export default function Home({ config, projects, journey }) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of navSections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <meta name="keywords" content={config.seo.keywords} />
      </Head>

      <main className="bg-zinc-950 text-white min-h-screen overflow-x-hidden relative">
        <AmbientGlow />
        <div className="relative z-10">
          <Navigation activeSection={activeSection} config={config} />
          <HeroSection config={config} />
          <AboutSection config={config} />
          <SkillsSection config={config} />
          <ProjectsSection projects={projects} />
          <JourneySection journey={journey} />
          <ContactSection config={config} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const config = await getSiteConfig();
  const projects = await getProjects();
  const journey = await getJourney();

  return {
    props: { config, projects, journey },
  };
}

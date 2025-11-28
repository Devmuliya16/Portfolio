'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { BiLinkExternal } from 'react-icons/bi';
import { projectGradients } from '@/lib/constants';
import SectionHeader from '@/components/ui/SectionHeader';
import BrowserMockup from '@/components/ui/BrowserMockup';

// Project Card Component
const ProjectCard = ({ project, index, gradient, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`relative grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Image */}
      <Link href={`/project/${index}`} className={`block group ${!isEven ? 'lg:col-start-2' : ''}`}>
        <div className="relative">
          <div className={`absolute -inset-3 bg-gradient-to-br ${gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          
          <BrowserMockup url={project.Link}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
            />
          </BrowserMockup>
        </div>
      </Link>

      {/* Content */}
      <div className={`${!isEven ? 'lg:col-start-1 lg:text-right' : ''}`}>
        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${gradient} rounded-full text-white text-xs font-medium mb-4`}>
          Featured Project
        </span>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-6">
          {project.para || project.about}
        </p>

        {/* Features */}
        {project.Discription && (
          <ul className={`space-y-2 mb-6 ${!isEven ? 'lg:ml-auto' : ''}`}>
            {project.Discription.slice(0, 4).map((desc, i) => (
              <li key={i} className={`flex items-start gap-2 text-zinc-300 text-sm ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <span className="text-cyan-400 mt-0.5">✦</span>
                <span>{desc.replace(/[^\w\s:,.'"-]/g, '').trim()}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-2 mb-6 ${!isEven ? 'lg:justify-end' : ''}`}>
          {project.technology.map(([icon, name]) => (
            <span
              key={name}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full text-sm text-zinc-300"
            >
              <img src={icon.startsWith('/') ? icon : `/${icon}`} alt={name} className="w-4 h-4" />
              {name}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className={`flex gap-4 ${!isEven ? 'lg:justify-end' : ''}`}>
          <Link
            href={`/project/${index}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
          >
            View Details
            <HiArrowRight />
          </Link>
          <a
            href={project.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-zinc-700 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors"
          >
            <BiLinkExternal />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection({ projects }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        <SectionHeader number="03" title="Featured Projects" isInView={isInView} />

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              gradient={projectGradients[index % projectGradients.length]}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

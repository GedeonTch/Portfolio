// Section Projets avec cards
'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { useTheme } from '@/lib/theme-context';

export default function Projects() {
  const { theme } = useTheme();
  const accentColor = theme === 'terminal' ? 'text-[#00ff9d]' : 'text-[#ff6b6b]';
  const borderColor = theme === 'terminal' ? 'border-[#00ff9d]' : 'border-[#ff6b6b]';

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-4xl font-bold mb-12 ${accentColor}`}
        >
          Projets
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {content.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              theme={theme}
              accentColor={accentColor}
              borderColor={borderColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, theme, accentColor, borderColor }: any) {
  const isFeatured = project.featured;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={`${
        isFeatured ? 'md:col-span-2' : ''
      } group relative p-6 rounded-lg border ${borderColor} bg-[var(--card-bg)] hover:shadow-xl transition-all duration-300`}
    >
      {/* Indicateur featured */}
      {isFeatured && (
        <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold ${
          theme === 'terminal' ? 'bg-[#00ff9d] text-black' : 'bg-[#ff6b6b] text-black'
        } rounded-bl-lg`}>
          FEATURED
        </div>
      )}

      {/* Tag du projet */}
      <div className={`inline-block px-3 py-1 text-xs font-semibold rounded mb-3 ${
        theme === 'terminal' ? 'bg-[#00ff9d]/20 text-[#00ff9d]' : 'bg-[#ff6b6b]/20 text-[#ff6b6b]'
      }`}>
        {project.tag}
      </div>

      {/* Titre */}
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${accentColor}`}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Stack technique */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className={`px-2 py-1 text-xs rounded border ${borderColor} text-[var(--foreground)]`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Lien GitHub */}
      <div className={`flex items-center gap-2 ${accentColor} font-semibold group-hover:underline`}>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span>Voir sur GitHub</span>
      </div>
    </motion.a>
  );
}
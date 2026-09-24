// Section Compétences
'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { useTheme } from '@/lib/theme-context';

export default function Skills() {
  const { theme } = useTheme();
  const accentColor = theme === 'terminal' ? 'text-[#00ff9d]' : 'text-[#ff6b6b]';
  const borderColor = theme === 'terminal' ? 'border-[#00ff9d]' : 'border-[#ff6b6b]';

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-3xl md:text-4xl font-bold mb-12 ${accentColor}`}
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${borderColor} bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${accentColor}`}>
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-3 ${
                      theme === 'terminal' ? 'bg-[#00ff9d]' : 'bg-[#ff6b6b]'
                    }`} />
                    <span className="text-[var(--foreground)]">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
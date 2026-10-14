// Section À propos — animation en cascade (stagger) au scroll
'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

// Conteneur : déclenche la cascade à l'entrée dans le viewport
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Élément de la cascade : fondu + montée, easing doux et réaliste
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Card : apparaît puis enchaîne ses paragraphes en sous-cascade
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function About() {
  const { t } = useLanguage();

  // Répartition équilibrée des paragraphes en deux colonnes (2 / 1 avec 3 paragraphes)
  const midpoint = Math.ceil(t.about.paragraphs.length / 2);
  const columns = [
    t.about.paragraphs.slice(0, midpoint),
    t.about.paragraphs.slice(midpoint),
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-3xl md:text-4xl font-bold mb-8 text-[var(--accent)]"
          >
            {t.about.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {columns.map((columnParagraphs, columnIndex) => (
              <motion.div
                key={columnIndex}
                variants={cardVariants}
                className="card-hover-glow p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)]"
              >
                {columnParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className={`text-lg leading-relaxed ${
                      index < columnParagraphs.length - 1 ? 'mb-4' : ''
                    }`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

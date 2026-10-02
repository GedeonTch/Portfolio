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

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 text-[var(--accent)]"
          >
            {t.about.title}
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)]"
          >
            {t.about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className={`text-lg leading-relaxed ${
                  index < t.about.paragraphs.length - 1 ? 'mb-4' : ''
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

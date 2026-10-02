// Section Compétences — animation en cascade (stagger) au scroll
'use client';

import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import BrandText from '@/components/BrandText';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Card : entrée puis sous-cascade des items de la liste
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Skills() {
  const { t, data } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-[var(--accent)]"
          >
            {t.skills.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-[var(--accent)]">
                  {skillCategory.category}
                </h3>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      variants={listItemVariants}
                      className="flex items-center"
                    >
                      <span className="w-2 h-2 rounded-full mr-3 bg-[var(--accent)]" />
                      <span className="text-[var(--foreground)]">
                        <BrandText text={skill} />
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

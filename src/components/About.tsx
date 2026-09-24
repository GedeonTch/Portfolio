// Section À propos
'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

export default function About() {
  const { theme } = useTheme();
  const accentColor = theme === 'terminal' ? 'text-[#00ff9d]' : 'text-[#ff6b6b]';
  const borderColor = theme === 'terminal' ? 'border-[#00ff9d]' : 'border-[#ff6b6b]';

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${accentColor}`}>
            À propos
          </h2>

          <div className={`p-6 rounded-lg border ${borderColor} bg-[var(--card-bg)]`}>
            <p className="text-lg leading-relaxed mb-4">
              Étudiant en Informatique de Gestion avec spécialisation en cybersécurité à l'Université 
              Lumière de Bujumbura (ULBU), Burundi. Originaire de Bukavu en République Démocratique du Congo.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Passionné par l'analyse SOC (Security Operations Center), les tests d'intrusion et le 
              développement de logiciels orientés sécurité. Mon objectif est de contribuer à la protection 
              des infrastructures critiques et des données sensibles.
            </p>

            <p className="text-lg leading-relaxed">
              Approche professionnelle et méthodique, axée sur l'apprentissage continu et l'application 
              pratique des concepts de cybersécurité dans des environnements réels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
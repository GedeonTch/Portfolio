'use client';

import { motion } from 'framer-motion';

export default function About() {
  return <section id="about" className="relative px-5 py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
      <div><p className="section-kicker mb-4">01 / Profil</p><h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Comprendre le risque.<br /><span className="text-[var(--accent)]">Réduire l'exposition.</span></h2></div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface p-7 sm:p-10">
        <p className="text-lg leading-relaxed text-[var(--foreground)]">Étudiant en Informatique de Gestion, orientation cybersécurité, à l'Université Lumière de Bujumbura (ULBU).</p>
        <p className="mt-5 leading-relaxed text-[var(--text-muted)]">Basé à Bujumbura et originaire de Bukavu (RDC), je travaille sur des problématiques concrètes de sécurité : analyse SOC, tests d'intrusion en environnement contrôlé et développement de logiciels fiables.</p>
        <div className="mt-8 grid gap-4 border-t border-[var(--border)] pt-6 text-sm sm:grid-cols-3"><div><span className="section-kicker">Focus</span><p className="mt-2">Détection &amp; réponse</p></div><div><span className="section-kicker">Méthode</span><p className="mt-2">Précise, documentée</p></div><div><span className="section-kicker">Terrain</span><p className="mt-2">Bujumbura / Bukavu</p></div></div>
      </motion.div>
    </div>
  </section>;
}

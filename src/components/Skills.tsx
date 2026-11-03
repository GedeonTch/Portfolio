'use client';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { toolEvidence } from '@/data/content';
import BrandText from '@/components/BrandText';

export default function Skills() {
  const { data, lang } = useLanguage();
  return <section id="skills" className="py-20 px-4 relative"><div className="max-w-6xl mx-auto">
    <span id="tools" className="scroll-mt-24" />
    <h2 className="section-title text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]">{lang === 'fr' ? 'Compétences & outils' : 'Skills & tools'}</h2>
    <p className="text-[var(--text-muted)] mb-10">{lang === 'fr' ? 'Explore les réalisations associées ou les labs à venir.' : 'Explore related work or upcoming labs.'}</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{data.skills.map(category => <div key={category.category} className="card-hover-glow p-6 rounded-lg border border-[var(--border)] bg-[var(--card-bg)]">
      <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">{category.category}</h3>
      <ul className="flex flex-wrap gap-2">{category.items.map(item => <li key={item}>{toolEvidence[item] ? <Link href={toolEvidence[item]} className="inline-block rounded-md border border-[var(--border)] hover:border-[var(--accent)] px-3 py-2 text-sm"><BrandText text={item} /> ↗</Link> : <span className="inline-block rounded-md bg-[var(--background)] px-3 py-2 text-sm"><BrandText text={item} /></span>}</li>)}</ul>
    </div>)}</div>
  </div></section>;
}

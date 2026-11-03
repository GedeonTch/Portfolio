import Link from 'next/link';
import { notFound } from 'next/navigation';
import { plannedSkills } from '@/data/content';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
export function generateStaticParams() { return Object.keys(plannedSkills).map(slug => ({ slug })); }
export default function PlannedSkill({ params }: { params: { slug: string } }) {
 const title = plannedSkills[params.slug as keyof typeof plannedSkills];
 if (!title) notFound();
 return <><Navigation /><main className="min-h-screen max-w-4xl mx-auto px-4 pt-32 pb-20"><p className="text-[var(--accent)] font-mono text-sm">LAB À VENIR / COMING SOON</p><h1 className="text-4xl font-bold mt-4 mb-6">{title}</h1><p className="text-[var(--text-muted)]">Ce lab est prévu, mais aucune réalisation n’est encore publiée. / This lab is planned; no work has been published yet.</p><Link className="inline-block mt-8 text-[var(--accent)] underline" href="/labs">Explorer les labs / Explore labs →</Link></main><Footer /></>;
}

'use client';
import { education } from '@/data/content';
import { useLanguage } from '@/lib/language-context';
export default function Education() {
 const { lang } = useLanguage(); const copy = education[lang];
 return <section id="formation" className="py-20 px-4"><div className="max-w-6xl mx-auto">
  <h2 className="section-title text-3xl md:text-4xl font-bold mb-10 text-[var(--accent)]">{copy.title}</h2>
  <div className="grid md:grid-cols-2 gap-6">
   <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6"><h3 className="text-xl font-semibold mb-5">{copy.studyLabel}</h3><ul className="space-y-5">{copy.studies.map(x => <li key={x.school}><strong>{x.school}</strong><p className="text-[var(--text-muted)] mt-1">{x.detail}</p></li>)}</ul></div>
   <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6"><h3 className="text-xl font-semibold mb-5">{copy.courseLabel}</h3><ul className="space-y-4">{copy.courses.map(x => <li key={x.name} className="flex justify-between gap-4"><div><strong>{x.name}</strong><p className="text-sm text-[var(--text-muted)]">{x.status}</p></div>{x.href && <a className="text-[var(--accent)] underline shrink-0" href={x.href} target="_blank" rel="noopener noreferrer">{copy.view} ↗<span className="sr-only"> {x.name}</span></a>}</li>)}</ul></div>
  </div></div></section>;
}

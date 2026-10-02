// Pied de page (traduit via useLanguage)
'use client';

import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t, data } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="max-w-6xl mx-auto text-center text-[var(--text-muted)]">
        <p>© {new Date().getFullYear()} {data.hero.name}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

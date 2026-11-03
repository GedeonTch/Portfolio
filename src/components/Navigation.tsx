'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
export default function Navigation() {
 const { t, lang } = useLanguage(); const pathname = usePathname(); const [open, setOpen] = useState(false);
 useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
 const items = [ {href:'/#hero', name:t.nav[0]}, {href:'/#about', name:t.nav[1]}, {href:'/#skills', name:lang === 'fr' ? 'Compétences' : 'Skills'}, {href:'/#projects', name:t.nav[4]}, {href:'/labs', name:t.nav[5]}, {href:'/#formation', name:lang === 'fr' ? 'Formation' : 'Education'}, {href:'/#contact', name:t.nav[6]} ];
 return <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm"><div className="max-w-6xl mx-auto px-4"><div className="flex items-center justify-between h-16 gap-3"><Link href="/#hero" className="font-mono text-xl font-bold text-[var(--accent)]" onClick={() => setOpen(false)}>GC</Link><div className="hidden lg:flex items-center gap-4">{items.map(item => <Link key={item.href} href={item.href} aria-current={item.href === '/labs' && pathname.startsWith('/labs') ? 'page' : undefined} className="text-sm hover:text-[var(--accent)]">{item.name}</Link>)}</div><div className="flex items-center gap-2 ml-auto lg:ml-0"><LanguageToggle /><ThemeToggle /><button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer le menu / Close menu' : 'Ouvrir le menu / Open menu'} onClick={() => setOpen(!open)} className="lg:hidden border border-[var(--border)] rounded px-3 py-2">{open ? '✕' : '☰'}</button></div></div><div id="mobile-menu" hidden={!open} className="lg:hidden pb-4"><div className="flex flex-col gap-1">{items.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-[var(--card-bg)]">{item.name}</Link>)}</div></div></div></nav>;
}

'use client';

import { FormEvent, useState } from 'react';
import { content } from '@/data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const response = await fetch(content.contact.formEndpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) { setError('Le formulaire est temporairement indisponible. Écrivez-moi directement par e-mail.'); return; }
    form.reset(); setSent(true);
  };
  return <section id="contact" className="relative px-5 py-24">
    <div className="mx-auto max-w-7xl"><p className="section-kicker mb-4">05 / Échange</p><h2 className="mb-10 text-3xl font-medium sm:text-4xl">Construisons quelque chose de sûr.</h2>
      <div className="grid gap-px overflow-hidden rounded border border-[var(--border)] bg-[var(--border)] lg:grid-cols-2">
        <div className="bg-[var(--card-bg)] p-7 sm:p-10"><p className="max-w-md leading-relaxed text-[var(--text-muted)]">Une question sur un projet, une analyse ou une collaboration ? Les messages arrivent directement dans ma boîte.</p><div className="mt-10 space-y-4 text-sm"><a className="block text-[var(--accent)] hover:underline" href={`mailto:${content.contact.email}`}>{content.contact.email}</a><a className="block text-[var(--text-muted)] hover:text-[var(--accent)]" href={content.contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp / +257 66 50 41 65</a><a className="block text-[var(--text-muted)] hover:text-[var(--accent)]" href={content.contact.github} target="_blank" rel="noopener noreferrer">GitHub / GedeonTch</a><a className="block text-[var(--text-muted)] hover:text-[var(--accent)]" href={content.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn / Gédéon Tchibanvunya</a></div></div>
        <div className="bg-[var(--card-bg)] p-7 sm:p-10">{sent ? <div className="border border-[var(--accent)] p-5 text-sm text-[var(--accent)]">Message envoyé, je réponds sous 48 h.</div> : <form onSubmit={submit} className="space-y-5"><label className="block text-xs text-[var(--text-muted)]">Nom<input required name="name" className="mt-2 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none focus:border-[var(--accent)]" /></label><label className="block text-xs text-[var(--text-muted)]">E-mail<input required type="email" name="email" className="mt-2 w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none focus:border-[var(--accent)]" /></label><label className="block text-xs text-[var(--text-muted)]">Message<textarea required name="message" rows={5} className="mt-2 w-full resize-none border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none focus:border-[var(--accent)]" /></label>{error && <p className="text-xs text-[var(--signal)]">{error}</p>}<button className="rounded border border-[var(--accent)] px-5 py-3 text-sm text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--background)]" type="submit">Envoyer le message</button><a href={`mailto:${content.contact.email}`} className="ml-4 text-xs text-[var(--text-muted)] hover:text-[var(--accent)]">ou écris-moi directement</a></form>}</div>
      </div>
    </div>
  </section>;
}

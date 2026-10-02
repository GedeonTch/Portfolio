// Section Contact avec formulaire fonctionnel (Formspree) et informations
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t, data } = useLanguage();
  const [status, setStatus] = useState<FormStatus>('idle');

  // Soumission réelle via fetch : états loading / success / error
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Récupérer les données AVANT tout await (le formulaire est démonté après succès)
    const formData = new FormData(event.currentTarget);
    setStatus('sending');

    try {
      const response = await fetch(data.contact.formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-[var(--accent)]"
        >
          {t.contact.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne informations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[var(--accent)]">
              {t.contact.coords}
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${data.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[var(--foreground)]">{data.contact.email}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={data.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-[var(--foreground)]">WhatsApp</span>
              </a>

              {/* GitHub */}
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-[var(--foreground)]">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-[var(--foreground)]">LinkedIn</span>
              </a>

              {/* CV */}
              <a
                href={data.contact.cvPath}
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:scale-105 transition-transform duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[var(--foreground)]">{t.contact.downloadCv}</span>
              </a>
            </div>
          </motion.div>

          {/* Colonne formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[var(--accent)]">
              {t.contact.sendMessage}
            </h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                // État succès : icône de validation animée (tracé progressif)
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] text-center"
                >
                  <motion.svg
                    className="w-14 h-14 mx-auto mb-4 text-[var(--accent)]"
                    viewBox="0 0 52 52"
                    fill="none"
                    stroke="currentColor"
                  >
                    <motion.circle
                      cx="26" cy="26" r="24" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                    <motion.path
                      d="M15 27l7 7 15-15"
                      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.45, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </motion.svg>
                  <p className="text-lg font-semibold mb-2">{t.contact.successTitle}</p>
                  <p className="text-[var(--text-muted)]">{t.contact.successBody}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm underline text-[var(--accent)] hover:opacity-80 transition-opacity"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : status === 'error' ? (
                // État erreur : message clair + possibilité de réessayer
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="p-6 rounded-lg border border-red-400/50 bg-[var(--card-bg)] text-center"
                  role="alert"
                >
                  <svg
                    className="w-14 h-14 mx-auto mb-4 text-red-400"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <p className="text-lg font-semibold mb-2">{t.contact.errorTitle}</p>
                  <p className="text-[var(--text-muted)] mb-4">
                    {t.contact.errorBody}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-[var(--accent)] text-black hover:bg-[var(--accent-secondary)]"
                    >
                      {t.contact.retry}
                    </button>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="px-5 py-2 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
                    >
                      {t.contact.writeByEmail}
                    </a>
                  </div>
                </motion.div>
              ) : (
                // Formulaire (idle + sending)
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  action={data.contact.formEndpoint}
                  method="POST"
                  onSubmit={handleFormSubmit}
                  className="p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--foreground)]">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-[var(--accent)] text-black ${
                      status === 'sending'
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:scale-105 hover:bg-[var(--accent-secondary)]'
                    }`}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        {t.contact.sending}
                      </>
                    ) : (
                      t.contact.send
                    )}
                  </button>

                  {/* Fallback mailto */}
                  <p className="text-center text-sm text-[var(--text-muted)]">
                    {t.contact.orText} <a href={`mailto:${data.contact.email}`} className="underline text-[var(--accent)]">{t.contact.directMailLink}</a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

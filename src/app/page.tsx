// Page principale du portfolio
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Fond avec pattern de circuit */}
      <div className="circuit-pattern" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[var(--border)] bg-[var(--card-bg)]">
        <div className="max-w-6xl mx-auto text-center text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Gédéon Cibanvunya. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
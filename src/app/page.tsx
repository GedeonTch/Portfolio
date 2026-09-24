// Page principale du portfolio
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
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
      
      {/* Bouton de changement de thème */}
      <ThemeToggle />
      
      {/* Sections */}
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="tools">
        <Tools />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[var(--border)] bg-[var(--card-bg)]">
        <div className="max-w-6xl mx-auto text-center text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Gédéon Cibanvunya. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
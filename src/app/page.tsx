// Page principale du portfolio
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Fond animé : réseau de particules plexus couleur du thème */}
      <NetworkBackgroundClient />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Boutons de changement de thème et de langue */}
      <ThemeToggle />
      <LanguageToggle />
      
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
      <Footer />
    </main>
  );
}
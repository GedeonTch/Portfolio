// Page principale du portfolio
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Tools from '@/components/Tools';
import Projects from '@/components/Projects';
import RecentLabs from '@/components/RecentLabs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Fond animé : réseau de particules plexus couleur du thème */}
      <NetworkBackgroundClient />
      
      {/* Navigation (thème et langue intégrés dans la barre) */}
      <Navigation />
      
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

      <section id="recent-labs">
        <RecentLabs />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
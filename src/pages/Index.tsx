import BackgroundParticles from '@/components/BackgroundParticles';
import Hero from '@/components/Hero';
import QuickFacts from '@/components/QuickFacts';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundParticles />
      
      <main className="relative z-10">
        <Hero />
        <QuickFacts />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

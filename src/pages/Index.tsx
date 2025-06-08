
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import LinkedInArticles from '@/components/LinkedInArticles';
import CodingProfiles from '@/components/CodingProfiles';
import YouTubeSection from '@/components/YouTubeSection';
import ThemeToggle from '@/components/ThemeToggle';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navigation activeSection={activeSection} />
      <ThemeToggle />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <LinkedInArticles />
        <CodingProfiles />
        <YouTubeSection />
      </main>
    </div>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootSequence } from '@/components/BootSequence';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Handle keyboard press to skip boot
    const handleKeyPress = () => {
      if (showBoot) {
        setShowBoot(false);
        setIsReady(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showBoot]);

  const handleBootComplete = () => {
    setShowBoot(false);
    setTimeout(() => setIsReady(true), 100);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {showBoot && (
          <BootSequence onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {!showBoot && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
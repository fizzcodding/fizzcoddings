import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BootSequence } from '@/components/BootSequence';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { CustomCursor } from '@/components/CustomCursor';
import { NameBadge } from '@/components/NameBadge';
import { RetroEffects } from '@/components/RetroEffects';
import { CRTFrame } from '@/components/CRTFrame';
import { IconSidebar } from '@/components/IconSidebar';

const Index = () => {
  const [showBoot, setShowBoot] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Apply dark mode by default
    document.documentElement.classList.add('dark');

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
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {showBoot && (
          <BootSequence onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {!showBoot && (
        <CRTFrame>
          <div className="crt-flicker">
            <RetroEffects />
            <NameBadge />
            <Navigation />
            <IconSidebar />
            <main className="relative z-50">
              <HeroSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </main>
          </div>
        </CRTFrame>
      )}
    </div>
  );
};

export default Index;

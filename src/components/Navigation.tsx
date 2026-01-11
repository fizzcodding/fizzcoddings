import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useRetroSound } from '@/hooks/useRetroSound';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playClick, playHover } = useRetroSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireMe = () => {
    playClick();
    window.location.href = 'mailto:frozeplaysminecraft@gmail.com';
  };

  const scrollToSection = (sectionId: string) => {
    playClick();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={playHover}
            className="font-mono text-xl font-bold text-primary hover:opacity-80 transition-opacity chromatic-hover"
          >
            Fizz_World
          </button>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Hire Me Button */}
          <button
            onClick={handleHireMe}
            onMouseEnter={playHover}
            className="hidden md:block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all chromatic-hover glitch-hover"
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            onMouseEnter={playHover}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors chromatic-hover"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={handleHireMe}
                onMouseEnter={playHover}
                className="mx-4 mt-2 px-4 py-3 bg-primary text-primary-foreground text-center font-medium rounded-lg chromatic-hover"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

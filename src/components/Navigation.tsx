import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="#" className="flex items-center gap-2 font-mono text-primary">
            <Terminal className="w-5 h-5" />
            <span className="font-bold">FAIYAZ<span className="text-foreground">_OS</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:frozeplaysminecraft@gmail.com"
              className="ml-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:frozeplaysminecraft@gmail.com"
                className="mx-4 mt-2 px-4 py-3 bg-primary text-primary-foreground text-center font-medium rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
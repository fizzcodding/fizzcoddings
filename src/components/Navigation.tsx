 
import { useRetroSound } from '@/hooks/useRetroSound';
import { NameBadge } from './NameBadge';

// export const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { playClick, playHover } = useRetroSound();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleHireMe = () => {
//     playClick();
//     window.location.href = 'mailto:frozeplaysminecraft@gmail.com';
//   };

//   const scrollToSection = (sectionId: string) => {
//     playClick();
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${
//         isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <>
//           <button
//             type="button"
//             onClick={() => scrollToSection('hero')}
//             onMouseEnter={playHover}
//             className="group flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/40 px-4   backdrop-blur transition-colors hover:bg-secondary/60 chromatic-hover"
//             aria-label="Go to top"
//           >
//            <NameBadge />
//           </button>
//            </>

//           {/* Right side controls */}
//           <div className="flex items-center gap-4">
//           {/* Theme Toggle */}
//           <ThemeToggle />

//           {/* Hire Me Button */}
//           <button
//             onClick={handleHireMe}
//             onMouseEnter={playHover}
//             className="hidden md:block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all chromatic-hover glitch-hover"
//           >
//             Hire Me
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => {
//               playClick();
//               setIsMobileMenuOpen(!isMobileMenuOpen);
//             }}
//             onMouseEnter={playHover}
//             className="md:hidden p-2 text-foreground hover:text-primary transition-colors chromatic-hover"
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden py-4 border-t border-border"
//           >
//             <div className="flex flex-col gap-2">
//               <button
//                 onClick={handleHireMe}
//                 onMouseEnter={playHover}
//                 className="mx-4 mt-2 px-4 py-3 bg-primary text-primary-foreground text-center font-medium rounded-lg chromatic-hover"
//               >
//                 Hire Me
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16  ">
          {/* NameBadge Button */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            onMouseEnter={playHover}
            className="group flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/40 px-4 py-2 backdrop-blur transition-colors hover:bg-secondary/60 chromatic-hover"
            aria-label="Go to top"
          >
            <NameBadge inline />
          </button>

          {/* Right side items */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hire Me Button */}
            <a
              href="mailto:frozeplaysminecraft@gmail.com"
              className="hidden md:block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 font-mono text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
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

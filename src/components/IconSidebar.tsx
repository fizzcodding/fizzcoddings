import { motion } from 'framer-motion';
import { Home, Briefcase, FolderKanban, Code2, Mail } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useRetroSound } from '@/hooks/useRetroSound';

const sidebarItems = [
  { icon: Home, href: '#hero', label: 'Home' },
  { icon: Briefcase, href: '#experience', label: 'Experience' },
  { icon: FolderKanban, href: '#projects', label: 'Projects' },
  { icon: Code2, href: '#skills', label: 'Skills' },
  { icon: Mail, href: '#contact', label: 'Contact' },
];

export const IconSidebar = () => {
  const { playClick, playHover } = useRetroSound();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    playClick();

    if (!href.startsWith('#')) return;

    e.preventDefault();

    if (href === '#' || href.length <= 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-60 hidden md:flex flex-col gap-3"
    >
      <div className="bg-background/30 backdrop-blur-md border border-border/30 rounded-xl p-2 flex flex-col gap-2">
        {sidebarItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            onMouseEnter={playHover}
            className="group relative p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 chromatic-hover"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 px-2 py-1 bg-background/90 backdrop-blur-sm border border-border rounded text-xs font-mono text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
};

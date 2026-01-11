import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PixelEarth, PixelBlackhole } from './PixelArt';
import { useRetroSound } from '@/hooks/useRetroSound';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const { playClick } = useRetroSound();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => {
        playClick();
        setIsDark(!isDark);
      }}
      className="relative p-2 rounded-lg bg-secondary border border-border transition-colors hover:border-primary chromatic-hover"
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? <PixelBlackhole /> : <PixelEarth />}
      </motion.div>
    </motion.button>
  );
};

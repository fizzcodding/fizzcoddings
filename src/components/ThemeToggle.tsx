import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

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
      onClick={() => setIsDark(!isDark)}
      className="relative w-14 h-7 rounded-full bg-secondary border border-border p-1 transition-colors hover:border-primary"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-1 flex items-center"
        initial={false}
      >
        <motion.div
          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
          animate={{
            x: isDark ? 0 : 26,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-primary-foreground" />
          ) : (
            <Sun className="w-3 h-3 text-primary-foreground" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

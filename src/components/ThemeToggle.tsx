import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRetroSound } from '@/hooks/useRetroSound';

export const ThemeToggle = () => {
  const { playClick } = useRetroSound();
  const { resolvedTheme, theme, setTheme } = useTheme();

  const current = resolvedTheme ?? theme ?? 'dark';
  const isDark = current === 'dark';

  return (
    <motion.button
      type="button"
      onClick={() => {
        playClick();
        setTheme(isDark ? 'light' : 'dark');
      }}
      className="relative p-2 rounded-lg bg-secondary border border-border transition-colors hover:border-primary chromatic-hover"
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.35 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-primary" />
        ) : (
          <Sun className="w-5 h-5 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};

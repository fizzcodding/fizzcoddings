import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface NameBadgeProps {
  inline?: boolean;
}

export const NameBadge = ({ inline = false }: NameBadgeProps) => {
  const badgeContent = (
    <div className="glass-card rounded-lg px-3 py-2 border border-border/50 flex items-center gap-2 font-mono text-xs">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-terminal-amber" />
        <span className="w-2 h-2 rounded-full bg-destructive/60" />
      </div>
      <div className="w-px h-4 bg-border" />
      <Terminal className="w-3 h-3 text-primary" />
      <span className="text-primary font-semibold">fizz</span>
      <span className="text-muted-foreground">_</span>
      <span className="text-foreground">world</span>
    </div>
  );

  if (inline) {
    return (
      <div className="flex items-center gap-2 font-mono text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-terminal-amber" />
          <span className="w-2 h-2 rounded-full bg-destructive/60" />
        </div>
        <div className="w-px h-4 bg-border" />
        <Terminal className="w-3 h-3 text-primary" />
        <span className="text-primary font-semibold">fizz</span>
        <span className="text-muted-foreground">_</span>
        <span className="text-foreground">world</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed top-4 left-4 z-50"
    >
      {badgeContent}
    </motion.div>
  );
};
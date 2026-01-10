import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: 'FAIYAZ_OS v2.0', delay: 0, type: 'header' },
  { text: 'MEM: 64/64GB OK', delay: 200, type: 'status' },
  { text: 'BIOS DATE 01/10/26 14:22:54 VER 2.5.1', delay: 400, type: 'info' },
  { text: 'INITIALIZING KERNEL...', delay: 600, type: 'process' },
  { text: 'LOADING MODULES: [REACT] [TAILWIND] [FRAMER]', delay: 900, type: 'process' },
  { text: 'ESTABLISHING SECURE CONNECTION...', delay: 1200, type: 'process' },
  { text: 'LOADING PORTFOLIO DATA...', delay: 1500, type: 'process' },
  { text: 'SYSTEM INTEGRITY CHECK: PASSED', delay: 1800, type: 'success' },
  { text: 'BOOT SEQUENCE COMPLETE.', delay: 2100, type: 'success' },
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    setShowSkip(true);
    
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
        setProgress(Math.round(((index + 1) / bootLines.length) * 100));
      }, line.delay);
    });

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  const getTimestamp = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 8);
  };

  const getLineColor = (type: string) => {
    switch (type) {
      case 'header': return 'text-primary';
      case 'success': return 'text-terminal-green';
      case 'process': return 'text-terminal-amber';
      case 'status': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full font-mono text-sm space-y-1">
        <AnimatePresence>
          {bootLines.map((line, index) => (
            visibleLines.includes(index) && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4"
              >
                <span className="text-muted-foreground shrink-0">[{getTimestamp()}]</span>
                <span className={getLineColor(line.type)}>{line.text}</span>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <motion.div 
          className="mt-8 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">SYSTEM LOAD</span>
            <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-terminal-green"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-terminal-green font-bold">{progress}%</span>
          </div>
        </motion.div>
      </div>

      {showSkip && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
          className="absolute bottom-8 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
        >
          Press any key or click to skip...
        </motion.button>
      )}
    </motion.div>
  );
};
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: 'FIZZ_OS v3.0.1', delay: 0, type: 'header' },
  { text: 'MEM: 32/32GB OK', delay: 150, type: 'status' },
  { text: 'BIOS DATE 01/10/26 14:22:54 VER 2.5.1', delay: 300, type: 'info' },
  { text: 'INITIALIZING KERNEL...', delay: 450, type: 'process' },
  { text: 'LOADING MODULES: [REACT] [TAILWIND] [MOTION]', delay: 650, type: 'process' },
  { text: 'ESTABLISHING SECURE CONNECTION...', delay: 850, type: 'process' },
  { text: 'OPTIMIZING NEURAL PATHWAYS...', delay: 1050, type: 'process' },
  { text: 'SYSTEM INTEGRITY CHECK: PASSED', delay: 1250, type: 'success' },
  { text: 'MOUNTING FILE SYSTEM...', delay: 1400, type: 'process' },
  { text: 'BOOT SEQUENCE COMPLETE.', delay: 1600, type: 'success' },
];

const errorMessages = [
  { text: 'ERROR: STACK_OVERFLOW at 0x7FFD', x: '15%', y: '20%' },
  { text: 'SEGFAULT: core dumped', x: '60%', y: '15%' },
  { text: 'WARNING: undefined behavior detected', x: '30%', y: '70%' },
  { text: 'PANIC: kernel exception', x: '70%', y: '60%' },
  { text: 'ERROR: null pointer dereference', x: '10%', y: '45%' },
  { text: 'FATAL: memory corruption at 0xDEADBEEF', x: '50%', y: '80%' },
  { text: 'ERROR: infinite loop detected', x: '80%', y: '35%' },
  { text: 'CRITICAL: system unstable', x: '25%', y: '85%' },
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [phase, setPhase] = useState<'boot' | 'chaos' | 'settling'>('boot');
  const [visibleErrors, setVisibleErrors] = useState<number[]>([]);

  const startChaos = useCallback(() => {
    setPhase('chaos');
    
    // Rapidly show errors
    errorMessages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleErrors(prev => [...prev, index]);
      }, index * 80);
    });

    // Start settling after chaos
    setTimeout(() => {
      setPhase('settling');
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 1200);
  }, [onComplete]);

  useEffect(() => {
    setShowSkip(true);
    
    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
        setProgress(Math.round(((index + 1) / bootLines.length) * 100));
      }, line.delay);
    });

    // After boot completes, start chaos
    const chaosTimer = setTimeout(() => {
      startChaos();
    }, 2000);

    return () => clearTimeout(chaosTimer);
  }, [startChaos]);

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
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-8 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* CRT scan lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--foreground)/0.03)_2px,hsl(var(--foreground)/0.03)_4px)]" />
      </div>

      {/* Boot terminal */}
      <div className={`max-w-2xl w-full font-mono text-sm space-y-1 transition-opacity duration-300 ${phase === 'chaos' ? 'opacity-30' : 'opacity-100'}`}>
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
          transition={{ delay: 0.3 }}
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

      {/* Error chaos overlay */}
      <AnimatePresence>
        {phase === 'chaos' && (
          <>
            {errorMessages.map((error, index) => (
              visibleErrors.includes(index) && (
                <motion.div
                  key={index}
                  className="absolute font-mono text-xs sm:text-sm text-destructive bg-destructive/10 border border-destructive/30 px-2 py-1 rounded"
                  style={{ left: error.x, top: error.y }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0.8],
                    scale: [0.8, 1.1, 1, 1],
                    rotate: [0, Math.random() * 6 - 3, 0],
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {error.text}
                </motion.div>
              )
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Settling phase - clear message */}
      <AnimatePresence>
        {phase === 'settling' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="font-mono text-lg text-terminal-green bg-background/90 px-8 py-4 rounded-lg border border-terminal-green/30"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <span className="animate-pulse">█</span> SYSTEM STABILIZED. LAUNCHING...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSkip && phase === 'boot' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onComplete}
          className="absolute bottom-8 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
        >
          Press any key or click to skip...
        </motion.button>
      )}
    </motion.div>
  );
};

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaneAnimation } from './PlaneAnimation';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: 'BIOS DATE 01/10/26 14:22:54 VER 1.8.4', delay: 0, type: 'header' },
  { text: 'INITIALIZING KERNEL...', delay: 200, type: 'process' },
  { text: 'LOADING MODULES: [REACT] [TAILWIND] [MOTION]', delay: 400, type: 'process' },
  { text: 'ESTABLISHING SECURE CONNECTION...', delay: 600, type: 'process' },
  { text: 'OPTIMIZING NEURAL PATHWAYS...', delay: 800, type: 'process' },
  { text: 'SYSTEM INTEGRITY CHECK: PASSED', delay: 1000, type: 'success' },
  { text: 'MOUNTING FILE SYSTEM...', delay: 1200, type: 'process' },
  { text: 'BOOT SEQUENCE COMPLETE.', delay: 1400, type: 'success' },
];

const errorMessages = [
  { text: 'ERROR: STACK_OVERFLOW at 0x7FFD', x: '12%', y: '15%' },
  { text: 'SEGFAULT: core dumped', x: '55%', y: '12%' },
  { text: 'WARNING: undefined behavior detected', x: '25%', y: '65%' },
  { text: 'PANIC: kernel exception at addr 0xBAADF00D', x: '65%', y: '55%' },
  { text: 'ERROR: null pointer dereference', x: '8%', y: '40%' },
  { text: 'FATAL: memory corruption at 0xDEADBEEF', x: '45%', y: '75%' },
  { text: 'ERROR: infinite loop detected in main()', x: '72%', y: '30%' },
  { text: 'CRITICAL: system unstable - reboot required', x: '20%', y: '82%' },
  { text: 'ERR_HEAP_CORRUPTION: malloc failed', x: '58%', y: '88%' },
  { text: 'EXCEPTION_ACCESS_VIOLATION at 0x00000000', x: '5%', y: '58%' },
  { text: 'ERROR: buffer overflow in stack frame', x: '38%', y: '22%' },
  { text: 'SIGSEGV: invalid memory access', x: '75%', y: '72%' },
  { text: 'FATAL: double free detected', x: '15%', y: '92%' },
  { text: 'WARNING: race condition in thread pool', x: '82%', y: '48%' },
  { text: 'ERROR: use after free at 0xCAFEBABE', x: '30%', y: '35%' },
  { text: 'KERNEL PANIC: unable to mount root fs', x: '48%', y: '8%' },
  { text: 'ERR: dangling pointer in heap', x: '88%', y: '18%' },
  { text: 'CRITICAL: stack smashing detected', x: '3%', y: '75%' },
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [phase, setPhase] = useState<'boot' | 'chaos' | 'settling' | 'plane'>('boot');
  const [visibleErrors, setVisibleErrors] = useState<number[]>([]);

  const startChaos = useCallback(() => {
    setPhase('chaos');
    
    // Rapidly show errors
    errorMessages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleErrors(prev => [...prev, index]);
      }, index * 50);
    });

    // Start settling after chaos
    setTimeout(() => {
      setPhase('settling');
      // After settling, transition to plane animation
      setTimeout(() => {
        setPhase('plane');
      }, 1200);
    }, 1500);
  }, []);

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
    }, 1800);

    return () => clearTimeout(chaosTimer);
  }, [startChaos]);

  const getTimestamp = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${mins}:${secs}`;
  };

  const getLineColor = (type: string) => {
    switch (type) {
      case 'header': return 'text-terminal-green';
      case 'success': return 'text-terminal-green';
      case 'process': return 'text-terminal-green';
      case 'status': return 'text-terminal-green';
      default: return 'text-terminal-green';
    }
  };

  // Show plane animation phase
  if (phase === 'plane') {
    return <PlaneAnimation onComplete={onComplete} />;
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-[#1a1a2e] z-50 flex items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Old PC Monitor Frame */}
      <div className="relative w-full max-w-3xl">
        {/* Monitor bezel */}
        <div className="bg-[#c4c4b4] rounded-xl p-6 shadow-2xl">
          {/* Monitor brand label */}
          <div className="flex items-center justify-between mb-2 px-2">
            <span className="text-[10px] text-gray-600 font-sans">⬚ Schneider</span>
            <span className="text-[10px] text-gray-600 font-sans">PC_fizz</span>
          </div>
          
          {/* Screen area */}
          <div className="bg-[#0a0a12] rounded-lg p-6 relative overflow-hidden border-4 border-[#2a2a3a] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
            {/* CRT scan lines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]" />
            </div>
            
            {/* CRT curvature overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.3)_100%)]" />

            {/* Boot terminal */}
            <div className={`font-mono text-sm space-y-1 min-h-[300px] transition-opacity duration-300 ${phase === 'chaos' ? 'opacity-30' : 'opacity-100'}`}>
              <AnimatePresence>
                {bootLines.map((line, index) => (
                  visibleLines.includes(index) && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-terminal-green/60 shrink-0">[{getTimestamp()}]</span>
                      <span className={getLineColor(line.type)}>{line.text}</span>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Progress bar */}
              <motion.div 
                className="mt-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-terminal-green/60 text-xs">SYSTEM LOAD</span>
                  <div className="flex-1 h-2 bg-[#0a2a0a] rounded overflow-hidden border border-terminal-green/30">
                    <motion.div 
                      className="h-full bg-terminal-green"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-terminal-green font-bold text-sm">{progress}%</span>
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
                        className="absolute font-mono text-[10px] sm:text-xs text-red-500 bg-red-500/10 border border-red-500/40 px-2 py-1 rounded whitespace-nowrap"
                        style={{ left: error.x, top: error.y }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0.9],
                          scale: [0.5, 1.15, 1, 1],
                          rotate: [0, Math.random() * 8 - 4, 0],
                        }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.2 }}
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
                  className="absolute inset-0 flex items-center justify-center bg-[#0a0a12]/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="font-mono text-base text-terminal-green px-6 py-3 rounded border border-terminal-green/50"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    <span className="animate-pulse">█</span> SYSTEM STABILIZED. LAUNCHING...
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Monitor base indicator */}
          <div className="flex justify-center mt-3">
            <div className="w-3 h-3 rounded-full bg-terminal-green/80 shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
          </div>
        </div>
        
        {/* Monitor stand */}
        <div className="flex justify-center">
          <div className="w-32 h-4 bg-[#b4b4a4] rounded-b-lg" />
        </div>
        <div className="flex justify-center">
          <div className="w-48 h-3 bg-[#a4a494] rounded-b-lg" />
        </div>
      </div>

      {showSkip && phase === 'boot' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onComplete}
          className="absolute bottom-8 text-terminal-green/60 hover:text-terminal-green transition-colors font-mono text-sm"
        >
          Press any key or click to skip...
        </motion.button>
      )}
    </motion.div>
  );
};
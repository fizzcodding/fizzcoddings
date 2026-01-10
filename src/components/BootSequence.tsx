import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import oldPcMonitor from '@/assets/old-pc-monitor.png';

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
  const [phase, setPhase] = useState<'boot' | 'chaos' | 'settling'>('boot');
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
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 1500);
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

  return (
    <motion.div 
      className="fixed inset-0 bg-[#c5c7cc] z-50 flex items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Old PC with Monitor - using actual image */}
      <div className="relative w-full max-w-3xl">
        {/* PC Image Container */}
        <div className="relative">
          <img 
            src={oldPcMonitor} 
            alt="Old PC Monitor"
            className="w-full h-auto"
          />
          
          {/* Screen overlay - positioned on the monitor screen area */}
          <div 
            className="absolute overflow-hidden"
            style={{
              top: '8%',
              left: '22%',
              width: '56%',
              height: '42%',
              borderRadius: '4px',
            }}
          >
            {/* CRT scan lines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.05)_2px,rgba(0,255,0,0.05)_4px)]" />
            </div>
            
            {/* CRT glow effect */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />

            {/* Boot terminal content */}
            <div className={`p-3 font-mono text-[10px] sm:text-xs space-y-0.5 h-full overflow-hidden transition-opacity duration-300 ${phase === 'chaos' ? 'opacity-30' : 'opacity-100'}`}>
              <AnimatePresence>
                {bootLines.map((line, index) => (
                  visibleLines.includes(index) && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-terminal-green/60 shrink-0">[{getTimestamp()}]</span>
                      <span className="text-terminal-green">{line.text}</span>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Progress bar */}
              <motion.div 
                className="mt-4 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green/60 text-[8px] sm:text-[10px]">LOAD</span>
                  <div className="flex-1 h-1.5 bg-[#0a2a0a] rounded overflow-hidden border border-terminal-green/30">
                    <motion.div 
                      className="h-full bg-terminal-green"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-terminal-green font-bold text-[10px]">{progress}%</span>
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
                        className="absolute font-mono text-[6px] sm:text-[8px] text-red-500 bg-red-500/10 border border-red-500/40 px-1 py-0.5 rounded whitespace-nowrap"
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
                  className="absolute inset-0 flex items-center justify-center bg-black/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="font-mono text-[10px] sm:text-xs text-terminal-green px-3 py-2 rounded border border-terminal-green/50"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  >
                    <span className="animate-pulse">█</span> SYSTEM STABILIZED. LAUNCHING...
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {showSkip && phase === 'boot' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onComplete}
          className="absolute bottom-8 text-gray-600 hover:text-gray-800 transition-colors font-mono text-sm bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm"
        >
          Press any key or click to skip...
        </motion.button>
      )}
    </motion.div>
  );
};

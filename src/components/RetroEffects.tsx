import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Floating binary/hex characters
const RetroParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => {
  const chars = ['0', '1', '/', '>', '<', '{', '}', '#', '$', '%', '&'];
  const char = chars[Math.floor(Math.random() * chars.length)];
  
  return (
    <motion.span
      className="absolute font-mono text-primary/20 text-xs pointer-events-none select-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 0.4, 0],
        y: [20, -30, -50],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      {char}
    </motion.span>
  );
};

// VHS-style tracking line
const VHSTrackingLine = () => {
  return (
    <motion.div
      className="fixed left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none z-50"
      initial={{ top: '-2px' }}
      animate={{ top: '100%' }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// Scanline overlay
const ScanlineOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 opacity-30">
      <div 
        className="w-full h-full"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--primary) / 0.02) 2px,
            hsl(var(--primary) / 0.02) 4px
          )`,
        }}
      />
    </div>
  );
};

// Random glitch block
const GlitchBlock = ({ delay }: { delay: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, w: 0, h: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
        w: 20 + Math.random() * 80,
        h: 2 + Math.random() * 8,
      });
    }, 3000 + delay * 1000);
    
    return () => clearInterval(interval);
  }, [delay]);
  
  return (
    <motion.div
      className="fixed pointer-events-none z-30 bg-primary/5"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.w}px`,
        height: `${position.h}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 0.2,
        delay: delay + Math.random() * 2,
        repeat: Infinity,
        repeatDelay: 5 + Math.random() * 5,
      }}
    />
  );
};

// Matrix-style falling characters - using primary color instead of green
const MatrixRain = () => {
  const columns = 15;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden opacity-20">
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 font-mono text-xs text-primary/40"
          style={{ left: `${(i / columns) * 100}%` }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(10)].map((_, j) => (
            <div key={j} className="opacity-50">
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// CRT corner vignette
const CRTVignette = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        background: `radial-gradient(
          ellipse at center,
          transparent 0%,
          transparent 60%,
          hsl(var(--background) / 0.4) 100%
        )`,
      }}
    />
  );
};

// Flickering terminal cursor scattered around - using primary color
const TerminalCursor = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
  return (
    <motion.span
      className="absolute font-mono text-primary/50 text-sm pointer-events-none select-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 0.8,
        delay,
        repeat: Infinity,
      }}
    >
      █
    </motion.span>
  );
};

// Retro grid background
const RetroGrid = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-10 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  );
};

export const RetroEffects = () => {
  // Generate random positions for particles
  const particles = [...Array(12)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.5,
  }));

  const cursors = [...Array(5)].map((_, i) => ({
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    delay: i * 0.3,
  }));

  return (
    <>
      {/* Background grid */}
      <RetroGrid />
      
      {/* Scanlines */}
      <ScanlineOverlay />
      
      {/* VHS tracking line */}
      <VHSTrackingLine />
      
      {/* CRT vignette */}
      <CRTVignette />
      
      {/* Matrix rain - subtle */}
      <MatrixRain />
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {particles.map((p, i) => (
          <RetroParticle key={i} {...p} />
        ))}
      </div>
      
      {/* Scattered cursors */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {cursors.map((c, i) => (
          <TerminalCursor key={i} {...c} />
        ))}
      </div>
      
      {/* Random glitch blocks */}
      {[...Array(3)].map((_, i) => (
        <GlitchBlock key={i} delay={i * 2} />
      ))}
    </>
  );
};

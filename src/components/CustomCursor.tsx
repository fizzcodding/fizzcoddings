import { useState, useEffect, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  const trailX = useSpring(0, { stiffness: 150, damping: 25 });
  const trailY = useSpring(0, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollProgress(progress);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  // Click particle effect
  const handleClick = useCallback((e: MouseEvent) => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX,
      y: e.clientY,
    }));
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 600);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * { cursor: none !important; }
        a, button, [role="button"] { cursor: none !important; }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-3 h-3 rounded-full bg-foreground"
          animate={{
            scale: isClicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Trailing ring with scroll percentage */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-primary/60 flex items-center justify-center"
          animate={{
            scale: isClicking ? 0.8 : 1,
            borderColor: isClicking ? 'hsl(var(--accent))' : 'hsl(var(--primary) / 0.6)',
          }}
          transition={{ duration: 0.15 }}
        >
          <span className="text-[8px] font-mono text-primary font-bold">
            {scrollProgress}%
          </span>
        </motion.div>
      </motion.div>

      {/* Click particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-[9997] w-1.5 h-1.5 rounded-full bg-primary"
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: particle.x + Math.cos((i * Math.PI * 2) / 8) * 40,
            y: particle.y + Math.sin((i * Math.PI * 2) / 8) * 40,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </>
  );
};

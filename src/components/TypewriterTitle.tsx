import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  'Web Developer',
  'DSA Expert',
  'Competitive Programmer',
  'Mobile App Developer',
  'Robotics Engineer',
  'Graphic Designer',
];

export const TypewriterTitle = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
      
      const deleteTimer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 50);
      return () => clearTimeout(deleteTimer);
    }

    if (displayedText === currentTitle) {
      setIsPaused(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
    }, 100);
    
    return () => clearTimeout(typeTimer);
  }, [displayedText, isDeleting, isPaused, currentTitleIndex]);

  return (
    <div className="font-mono">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
        <AnimatePresence mode="wait">
          <motion.span
            key={displayedText}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
          >
            {displayedText}
          </motion.span>
        </AnimatePresence>
        <motion.span 
          className="text-primary inline-block"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          _
        </motion.span>
      </h1>
    </div>
  );
};

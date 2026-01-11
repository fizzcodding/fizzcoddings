import { motion } from 'framer-motion';

// Pixel-style Earth for light theme
export const PixelEarth = () => {
  return (
    <motion.div
      className="relative w-8 h-8"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 16 16" className="w-full h-full" style={{ imageRendering: 'pixelated' }}>
        {/* Ocean base */}
        <rect x="4" y="1" width="8" height="1" fill="#4A90D9" />
        <rect x="2" y="2" width="12" height="1" fill="#4A90D9" />
        <rect x="1" y="3" width="14" height="1" fill="#4A90D9" />
        <rect x="1" y="4" width="14" height="1" fill="#4A90D9" />
        <rect x="0" y="5" width="16" height="1" fill="#4A90D9" />
        <rect x="0" y="6" width="16" height="1" fill="#4A90D9" />
        <rect x="0" y="7" width="16" height="1" fill="#4A90D9" />
        <rect x="0" y="8" width="16" height="1" fill="#4A90D9" />
        <rect x="0" y="9" width="16" height="1" fill="#4A90D9" />
        <rect x="0" y="10" width="16" height="1" fill="#4A90D9" />
        <rect x="1" y="11" width="14" height="1" fill="#4A90D9" />
        <rect x="1" y="12" width="14" height="1" fill="#4A90D9" />
        <rect x="2" y="13" width="12" height="1" fill="#4A90D9" />
        <rect x="4" y="14" width="8" height="1" fill="#4A90D9" />
        
        {/* Land masses */}
        <rect x="3" y="3" width="3" height="1" fill="#3CB371" />
        <rect x="2" y="4" width="4" height="1" fill="#3CB371" />
        <rect x="3" y="5" width="3" height="1" fill="#3CB371" />
        <rect x="4" y="6" width="2" height="1" fill="#3CB371" />
        
        <rect x="9" y="4" width="4" height="1" fill="#3CB371" />
        <rect x="8" y="5" width="6" height="1" fill="#3CB371" />
        <rect x="9" y="6" width="5" height="1" fill="#3CB371" />
        <rect x="10" y="7" width="4" height="1" fill="#3CB371" />
        <rect x="11" y="8" width="3" height="1" fill="#3CB371" />
        
        <rect x="4" y="9" width="3" height="1" fill="#3CB371" />
        <rect x="3" y="10" width="5" height="1" fill="#3CB371" />
        <rect x="4" y="11" width="4" height="1" fill="#3CB371" />
        <rect x="5" y="12" width="2" height="1" fill="#3CB371" />
      </svg>
    </motion.div>
  );
};

// Pixel-style Blackhole for dark theme
export const PixelBlackhole = () => {
  return (
    <motion.div
      className="relative w-8 h-8"
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 16 16" className="w-full h-full" style={{ imageRendering: 'pixelated' }}>
        {/* Accretion disk - outer ring */}
        <rect x="3" y="0" width="10" height="1" fill="#FF6B6B" />
        <rect x="1" y="1" width="3" height="1" fill="#FF8E53" />
        <rect x="12" y="1" width="3" height="1" fill="#FF8E53" />
        <rect x="0" y="2" width="2" height="1" fill="#FFD93D" />
        <rect x="14" y="2" width="2" height="1" fill="#FFD93D" />
        
        <rect x="0" y="3" width="1" height="1" fill="#FF8E53" />
        <rect x="15" y="3" width="1" height="1" fill="#FF8E53" />
        
        <rect x="0" y="4" width="1" height="1" fill="#FF6B6B" />
        <rect x="15" y="4" width="1" height="1" fill="#FF6B6B" />
        
        {/* Event horizon - black center */}
        <rect x="5" y="5" width="6" height="1" fill="#0a0a0a" />
        <rect x="4" y="6" width="8" height="1" fill="#0a0a0a" />
        <rect x="4" y="7" width="8" height="1" fill="#000000" />
        <rect x="4" y="8" width="8" height="1" fill="#000000" />
        <rect x="4" y="9" width="8" height="1" fill="#0a0a0a" />
        <rect x="5" y="10" width="6" height="1" fill="#0a0a0a" />
        
        {/* Bottom accretion */}
        <rect x="0" y="11" width="1" height="1" fill="#FF6B6B" />
        <rect x="15" y="11" width="1" height="1" fill="#FF6B6B" />
        
        <rect x="0" y="12" width="1" height="1" fill="#FF8E53" />
        <rect x="15" y="12" width="1" height="1" fill="#FF8E53" />
        
        <rect x="0" y="13" width="2" height="1" fill="#FFD93D" />
        <rect x="14" y="13" width="2" height="1" fill="#FFD93D" />
        <rect x="1" y="14" width="3" height="1" fill="#FF8E53" />
        <rect x="12" y="14" width="3" height="1" fill="#FF8E53" />
        <rect x="3" y="15" width="10" height="1" fill="#FF6B6B" />
        
        {/* Inner glow rings */}
        <rect x="3" y="5" width="1" height="1" fill="#9B59B6" />
        <rect x="12" y="5" width="1" height="1" fill="#9B59B6" />
        <rect x="3" y="10" width="1" height="1" fill="#9B59B6" />
        <rect x="12" y="10" width="1" height="1" fill="#9B59B6" />
      </svg>
      
      {/* Glow effect */}
      <div className="absolute inset-0 blur-sm opacity-50">
        <svg viewBox="0 0 16 16" className="w-full h-full">
          <circle cx="8" cy="8" r="6" fill="url(#blackholeGlow)" />
          <defs>
            <radialGradient id="blackholeGlow">
              <stop offset="0%" stopColor="#9B59B6" stopOpacity="0" />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.5" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};

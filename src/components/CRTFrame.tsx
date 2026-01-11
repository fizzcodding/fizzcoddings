import { ReactNode } from 'react';

interface CRTFrameProps {
  children: ReactNode;
}

export const CRTFrame = ({ children }: CRTFrameProps) => {
  return (
    <div className="relative min-h-screen">
      {/* CRT Monitor outer frame */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        {/* Top bezel */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#2a2a3a] to-transparent" />
        
        {/* Bottom bezel */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#2a2a3a] to-transparent" />
        
        {/* Left bezel */}
        <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-[#2a2a3a] to-transparent" />
        
        {/* Right bezel */}
        <div className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-l from-[#2a2a3a] to-transparent" />
        
        {/* Corner accents - rounded CRT effect */}
        <div className="absolute top-0 left-0 w-12 h-12 bg-[radial-gradient(ellipse_at_top_left,#1a1a2a_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-12 h-12 bg-[radial-gradient(ellipse_at_top_right,#1a1a2a_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-[radial-gradient(ellipse_at_bottom_left,#1a1a2a_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-[radial-gradient(ellipse_at_bottom_right,#1a1a2a_0%,transparent_70%)]" />
        
        {/* Scanline overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.3) 2px,
              rgba(0, 0, 0, 0.3) 4px
            )`
          }}
        />
        
        {/* CRT curvature vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              ellipse at center,
              transparent 60%,
              rgba(0, 0, 0, 0.15) 80%,
              rgba(0, 0, 0, 0.4) 100%
            )`
          }}
        />
        
        {/* Subtle screen glare */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 50%
            )`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

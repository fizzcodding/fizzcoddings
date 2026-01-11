import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { useRetroSound } from '@/hooks/useRetroSound';
import { cn } from '@/lib/utils';

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
}

export const RetroButton = forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ children, className, variant = 'default', onClick, onMouseEnter, ...props }, ref) => {
    const { playClick, playHover } = useRetroSound();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClick();
      onClick?.(e);
    };

    const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
      playHover();
      onMouseEnter?.(e);
    };

    const baseStyles = "relative font-mono text-sm transition-all duration-300 chromatic-hover";
    
    const variants = {
      default: "px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90",
      outline: "px-4 py-2 border border-border bg-card/50 rounded-lg hover:border-primary hover:bg-primary/5",
      ghost: "p-2 hover:bg-secondary/50 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        onClick={handleClick}
        onMouseEnter={handleHover}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RetroButton.displayName = 'RetroButton';

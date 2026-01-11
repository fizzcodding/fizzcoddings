import { motion } from 'framer-motion';
import { Github, MessageSquare, Mail, Twitter, Sparkles, Code2, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from '@/assets/profile.jpg';
import { TypewriterTitle } from './TypewriterTitle';
import { useRetroSound } from '@/hooks/useRetroSound';

const languages = [
  'TypeScript', 'JavaScript', 'Python', 'C++', 'C#', 'Dart', 'Java', 'HTML5', 'CSS3'
];

// Large pixel Earth for hero background
const LargePixelEarth = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: 'pixelated' }}>
    {/* Ocean base */}
    <rect x="8" y="2" width="16" height="2" fill="#4A90D9" />
    <rect x="4" y="4" width="24" height="2" fill="#4A90D9" />
    <rect x="2" y="6" width="28" height="2" fill="#4A90D9" />
    <rect x="2" y="8" width="28" height="2" fill="#4A90D9" />
    <rect x="0" y="10" width="32" height="2" fill="#4A90D9" />
    <rect x="0" y="12" width="32" height="2" fill="#4A90D9" />
    <rect x="0" y="14" width="32" height="2" fill="#4A90D9" />
    <rect x="0" y="16" width="32" height="2" fill="#4A90D9" />
    <rect x="0" y="18" width="32" height="2" fill="#4A90D9" />
    <rect x="0" y="20" width="32" height="2" fill="#4A90D9" />
    <rect x="2" y="22" width="28" height="2" fill="#4A90D9" />
    <rect x="2" y="24" width="28" height="2" fill="#4A90D9" />
    <rect x="4" y="26" width="24" height="2" fill="#4A90D9" />
    <rect x="8" y="28" width="16" height="2" fill="#4A90D9" />
    
    {/* Land masses - scaled up */}
    <rect x="6" y="6" width="6" height="2" fill="#3CB371" />
    <rect x="4" y="8" width="8" height="2" fill="#3CB371" />
    <rect x="6" y="10" width="6" height="2" fill="#3CB371" />
    <rect x="8" y="12" width="4" height="2" fill="#3CB371" />
    
    <rect x="18" y="8" width="8" height="2" fill="#3CB371" />
    <rect x="16" y="10" width="12" height="2" fill="#3CB371" />
    <rect x="18" y="12" width="10" height="2" fill="#3CB371" />
    <rect x="20" y="14" width="8" height="2" fill="#3CB371" />
    <rect x="22" y="16" width="6" height="2" fill="#3CB371" />
    
    <rect x="8" y="18" width="6" height="2" fill="#3CB371" />
    <rect x="6" y="20" width="10" height="2" fill="#3CB371" />
    <rect x="8" y="22" width="8" height="2" fill="#3CB371" />
    <rect x="10" y="24" width="4" height="2" fill="#3CB371" />
  </svg>
);

// Large pixel Blackhole for hero background (dark mode)
const LargePixelBlackhole = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full" style={{ imageRendering: 'pixelated' }}>
    {/* Accretion disk - outer ring */}
    <rect x="6" y="0" width="20" height="2" fill="#FF6B6B" />
    <rect x="2" y="2" width="6" height="2" fill="#FF8E53" />
    <rect x="24" y="2" width="6" height="2" fill="#FF8E53" />
    <rect x="0" y="4" width="4" height="2" fill="#FFD93D" />
    <rect x="28" y="4" width="4" height="2" fill="#FFD93D" />
    
    <rect x="0" y="6" width="2" height="2" fill="#FF8E53" />
    <rect x="30" y="6" width="2" height="2" fill="#FF8E53" />
    
    <rect x="0" y="8" width="2" height="2" fill="#FF6B6B" />
    <rect x="30" y="8" width="2" height="2" fill="#FF6B6B" />
    
    {/* Event horizon - black center */}
    <rect x="10" y="10" width="12" height="2" fill="#0a0a0a" />
    <rect x="8" y="12" width="16" height="2" fill="#0a0a0a" />
    <rect x="8" y="14" width="16" height="2" fill="#000000" />
    <rect x="8" y="16" width="16" height="2" fill="#000000" />
    <rect x="8" y="18" width="16" height="2" fill="#0a0a0a" />
    <rect x="10" y="20" width="12" height="2" fill="#0a0a0a" />
    
    {/* Bottom accretion */}
    <rect x="0" y="22" width="2" height="2" fill="#FF6B6B" />
    <rect x="30" y="22" width="2" height="2" fill="#FF6B6B" />
    
    <rect x="0" y="24" width="2" height="2" fill="#FF8E53" />
    <rect x="30" y="24" width="2" height="2" fill="#FF8E53" />
    
    <rect x="0" y="26" width="4" height="2" fill="#FFD93D" />
    <rect x="28" y="26" width="4" height="2" fill="#FFD93D" />
    <rect x="2" y="28" width="6" height="2" fill="#FF8E53" />
    <rect x="24" y="28" width="6" height="2" fill="#FF8E53" />
    <rect x="6" y="30" width="20" height="2" fill="#FF6B6B" />
    
    {/* Inner glow rings */}
    <rect x="6" y="10" width="2" height="2" fill="#9B59B6" />
    <rect x="24" y="10" width="2" height="2" fill="#9B59B6" />
    <rect x="6" y="20" width="2" height="2" fill="#9B59B6" />
    <rect x="24" y="20" width="2" height="2" fill="#9B59B6" />
  </svg>
);

export const HeroSection = () => {
  const { playClick, playHover } = useRetroSound();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const socials = [
    { icon: Github, href: 'https://github.com/fizzcodding', label: 'GITHUB' },
    { icon: MessageSquare, href: 'https://wa.me/8801993227968', label: 'WHATSAPP' },
    { icon: Twitter, href: 'https://twitter.com/fizz_codding', label: 'X' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/faiyaz-bin-iqbal-b494162bb/', label: 'LINKEDIN' },
    { icon: Mail, href: 'mailto:frozeplaysminecraft@gmail.com', label: 'EMAIL' },
  ];

  const skills = [
    { name: 'ADVANCED_WEB_DEV', color: 'bg-primary' },
    { name: 'DSA_EXPERTISE', color: 'bg-terminal-green' },
    { name: 'FULLSTACK_EXPERT', color: 'bg-accent' },
    { name: 'COMPETITIVE_PROGRAMMER', color: 'bg-terminal-amber' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden scanlines">
      {/* Large Earth/Blackhole Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-10"
          animate={{ rotate: isDark ? -360 : 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          {isDark ? <LargePixelBlackhole /> : <LargePixelEarth />}
        </motion.div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Identity badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">IDENTITY:</span>
            <span className="font-mono text-sm text-foreground">FAIYAZ BIN IQBAL</span>
            <span className="font-mono text-xs text-primary">(FIZZ)</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Main content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Typewriter Title */}
              <TypewriterTitle />
              
              <p className="text-lg text-muted-foreground mb-8">
                Fullstack + <span className="text-primary retro-underline">Vibe Coder</span>, Robotics Expert
              </p>
            </motion.div>

            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-6 mb-8 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mission Statement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    My goal is to contribute something useful to the world—something that can genuinely change lives. I'm driven by the belief that technology, when built with purpose, can solve real problems and make a{' '}
                    <span className="text-primary">meaningful difference in people's everyday lives.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 group chromatic-hover glitch-hover"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </motion.div>

            {/* Made by footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-4 border-t border-dashed border-primary/30"
            >
              <div className="font-mono text-xs">
                <span className="text-primary/50">10100101 01010010 01100000 01010000 111</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-primary">Made By Faiyaz</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card rounded-xl p-6 border border-border/50 max-w-sm ml-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-primary/30">
                    <img 
                      src={profileImage} 
                      alt="Faiyaz Bin Iqbal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-mono">WEB_DEVELOPER</p>
                    <p className="text-sm font-semibold text-foreground">Faiyaz Bin Iqbal</p>
                    <p className="text-xs text-muted-foreground font-mono italic mt-0.5">"There isn't no end to learning"</p>
                  </div>
                </div>
                <Code2 className="w-5 h-5 text-primary" />
              </div>

              {/* Skills */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">SKILLSET_PROTOCOL</span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span className={`w-2 h-2 rounded-full ${skill.color}`} />
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Languages Carousel */}
              <div className="mb-4 py-3 border-t border-b border-border/50 overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-muted-foreground">LANGUAGES:</span>
                </div>
                <div className="relative overflow-hidden">
                  <motion.div
                    className="flex gap-2"
                    animate={{ x: [0, -50 * languages.length] }}
                    transition={{
                      x: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Duplicate languages for seamless loop */}
                    {[...languages, ...languages].map((lang, i) => (
                      <span key={`${lang}-${i}`} className="skill-tag text-xs whitespace-nowrap shrink-0">
                        {lang}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">STATUS:</span>
                  <span className="font-mono text-xs text-terminal-green">AVAILABLE</span>
                </div>
                <a
                  href="mailto:frozeplaysminecraft@gmail.com"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="font-mono text-xs text-foreground hover:text-primary transition-colors chromatic-hover"
                >
                  Open to Projects
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

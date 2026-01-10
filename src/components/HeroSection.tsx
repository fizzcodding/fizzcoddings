import { motion } from 'framer-motion';
import { Github, MessageSquare, Mail, Twitter, Sparkles, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const HeroSection = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/fizzcodding', label: 'GITHUB' },
    { icon: MessageSquare, href: 'https://wa.me/+8801993227968', label: 'WHATSAPP' },
    { icon: Twitter, href: 'https://twitter.com/fizz_codding', label: 'X (TWITTER)' },
    { icon: Mail, href: 'mailto:frozeplaysminecraft@gmail.com', label: 'EMAIL' },
  ];

  const skills = [
    { name: 'ADVANCED_WEB_DEV', color: 'bg-primary' },
    { name: 'DSA_EXPERTISE', color: 'bg-terminal-green' },
    { name: 'FULLSTACK_EXPERT', color: 'bg-accent' },
    { name: 'COMPETITIVE_PROGRAMMER', color: 'bg-terminal-amber' },
  ];

  return (
    <section className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden">
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
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
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
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 font-mono italic">
                Web
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-mono">
                Developer
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Fullstack + <span className="text-primary">Vibe Coder</span>, Robotics Expert
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
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

          {/* Right column - 3D Laptop with Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative perspective-1000"
          >
            {/* Laptop mockup container */}
            <div className="relative max-w-md ml-auto">
              {/* Laptop screen */}
              <motion.div 
                className="relative bg-[#1a1a2e] rounded-t-xl p-2 border-4 border-[#2a2a3a] shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(10deg) rotateY(-5deg)',
                }}
                whileHover={{
                  transform: 'rotateX(5deg) rotateY(-2deg)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Screen bezel */}
                <div className="bg-[#0a0a12] rounded-lg p-4 relative overflow-hidden">
                  {/* Screen reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  
                  {/* Profile card content */}
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
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
                        </div>
                      </div>
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>

                    {/* Skills */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-muted-foreground">SKILLSET_PROTOCOL</span>
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      {skills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-border" />
                          <span className={`w-2 h-2 rounded-full ${skill.color}`} />
                          <span className="font-mono text-xs text-foreground">{skill.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-muted-foreground">STATUS:</span>
                        <span className="font-mono text-[10px] text-terminal-green">AVAILABLE</span>
                      </div>
                      <a
                        href="mailto:frozeplaysminecraft@gmail.com"
                        className="font-mono text-[10px] text-foreground hover:text-primary transition-colors"
                      >
                        Open to Projects
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Webcam dot */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2a2a3a] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#0a0a12]" />
                </div>
              </motion.div>
              
              {/* Laptop base/keyboard */}
              <div 
                className="h-4 bg-gradient-to-b from-[#3a3a4a] to-[#2a2a3a] rounded-b-lg mx-2"
                style={{
                  transform: 'rotateX(60deg) translateY(-8px)',
                  transformOrigin: 'top',
                }}
              />
              <div className="h-2 bg-[#2a2a3a] rounded-b-xl mx-4 shadow-lg" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Github, MessageSquare, Mail, Twitter, Linkedin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const HeroSection = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/fizzcodding' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/faiyaz-bin-iqbal-b494162bb/' },
    { icon: Code2, href: '#' }, // Placeholder for dev icon
  ];

  return (
    <section className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden">
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 border border-border/50 relative"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Profile Image */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src={profileImage} 
                    alt="Faiyaz Bin Iqbal"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-terminal-green border-2 border-background" />
              </div>

              {/* Info */}
              <div className="flex-1">
                {/* Status dot */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                  Faiyaz Bin Iqbal
                </h1>
                <p className="text-primary font-medium mb-4">
                  Full-Stack Developer & IoT Innovator
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Creative developer with 5+ years building responsive web apps, smart robotics, and automation systems. Skilled in React, Flutter, Arduino, and ESP32. Merging software and hardware for real-world solutions.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href="mailto:frozeplaysminecraft@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Hire Me
                  </a>
                  <a
                    href="https://wa.me/8801993227968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card/50 text-foreground font-medium text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book a Call
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm">Find me on</span>
                  <div className="flex gap-2">
                    {socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border border-border bg-card/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Typography intro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-left"
          >
            <div className="mb-4">
              <span className="text-muted-foreground font-mono text-sm">Hi, I'm</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2 font-serif italic tracking-tight">
              Fizz,
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-mono tracking-wide mb-6">
              Software Engineer<span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground mb-8">
              Passionate Techy and Tech Author
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border bg-transparent text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Quick Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Github, href: 'https://github.com/fizzcodding', label: 'GitHub' },
            { icon: MessageSquare, href: 'https://wa.me/8801993227968', label: 'WhatsApp' },
            { icon: Twitter, href: 'https://twitter.com/fizz_codding', label: 'X' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/faiyaz-bin-iqbal-b494162bb/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:frozeplaysminecraft@gmail.com', label: 'Email' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Mail, Calendar, Github, Linkedin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

export const HeroSection = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/fizz7-ui', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/faiyaz', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/ice__fizz', label: 'LeetCode' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div 
          className="glass-card rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <motion.div 
              className="relative shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden glow-border animate-glow">
                <img 
                  src={profileImage} 
                  alt="Faiyaz Bin Iqbal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-terminal-green rounded-full border-4 border-background" />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-xs font-mono text-primary mb-2 inline-block">◯</span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Faiyaz Bin Iqbal
                </h1>
                <p className="text-lg text-primary font-medium mb-4">
                  Full-Stack Developer & IoT Innovator
                </p>
              </motion.div>

              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Creative developer with 5+ years building responsive web apps, smart robotics, 
                and automation systems. Skilled in React, Flutter, Arduino, and ESP32. 
                Merging software and hardware for real-world solutions.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-3 justify-center md:justify-start mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a 
                  href="mailto:frozeplaysminecraft@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </a>
                <a 
                  href="mailto:frozeplaysminecraft@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div 
                className="flex gap-2 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-sm text-muted-foreground mr-2">Find me on</span>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
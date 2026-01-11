import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Code2, Globe } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/fizz7-ui', label: 'GitHub', username: '@fizz7-ui' },
  { icon: Linkedin, href: 'https://linkedin.com/in/faiyaz', label: 'LinkedIn', username: '/faiyaz' },
  { icon: Code2, href: 'https://leetcode.com/u/ice__fizz', label: 'LeetCode', username: '@ice__fizz' },
  { icon: Globe, href: 'https://fizzfolios.vercel.app', label: 'Portfolio', username: 'fizzfolios.vercel.app' },
];

export const ContactSection = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 glitch">
            <Mail className="w-7 h-7 text-primary retro-blink" />
            <span className="retro-underline">Get In Touch</span><span className="text-primary cursor-blink">_</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a 
                href="mailto:frozeplaysminecraft@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground">Email</p>
                  <p className="text-sm">frozeplaysminecraft@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+8801715088959"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground">Phone</p>
                  <p className="text-sm">+880 1715088959</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground">Location</p>
                  <p className="text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-6">Find Me Online</h3>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground font-mono terminal-prompt">
            <span className="text-terminal-green">{'>'}</span>
            <span className="matrix-glow"> Built with React & Tailwind</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2 retro-blink">
            © 2025 Faiyaz Bin Iqbal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
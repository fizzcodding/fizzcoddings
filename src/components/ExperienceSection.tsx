import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { useRetroSound } from '@/hooks/useRetroSound';
const experiences = [
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    type: 'Self-Employed',
    period: '2023 - Present',
    location: 'Remote, Worldwide',
    description: 'Delivered multiple web development projects including e-commerce platforms, dental websites, and enterprise bug fixes for clients across USA, Canada, India, and Bangladesh.',
  },
  {
    company: 'Software Arena Limited',
    role: 'Bug Fix Specialist',
    type: 'Contract',
    period: '2024',
    location: 'Bangladesh',
    description: 'Resolved high-level production bugs and ERP system issues, improving system reliability and performance.',
  },
  {
    company: 'Shopify E-commerce',
    role: 'Web Developer',
    type: 'Freelance',
    period: '2023',
    location: 'USA - Remote',
    description: 'Built custom Shopify storefronts with optimized checkout flows and responsive design.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const ExperienceSection = () => {
  const { playHover } = useRetroSound();
  
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 glitch">
            <Briefcase className="w-7 h-7 text-primary retro-blink" />
            <span className="retro-underline">Experiences</span><span className="text-primary cursor-blink">_</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={playHover}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 chromatic-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{exp.role}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-secondary text-primary text-xs font-mono rounded">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

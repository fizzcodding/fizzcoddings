import { motion } from 'framer-motion';
import { Briefcase, MapPin, ExternalLink } from 'lucide-react';

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
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const ExperienceSection = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-primary" />
            Experiences<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground text-sm">{exp.role}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-mono rounded-md mb-1">
                    {exp.type}
                  </span>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed pl-16">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
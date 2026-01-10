import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Bot, Cpu, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Hollow AI',
    description: 'An all-in-one app-controlled robot for security, home automation, and pill dispensing. Features voice commands, intruder detection with mini-guards, and AI assistant powered by ChatGPT, Gemini, Claude, and Grok.',
    tags: ['Flutter', 'Arduino', 'ESP32', 'AI/ML', 'IoT'],
    icon: Bot,
    status: 'In Progress',
    year: '2025',
  },
  {
    title: 'Smart Home Automation',
    description: 'Control lights, fans, and devices using voice commands or through an app even remotely. Features Lock Mode with security alerts and real-time monitoring.',
    tags: ['React', 'Node.js', 'ESP32', 'Firebase'],
    icon: Cpu,
    year: '2024',
  },
  {
    title: 'E-commerce Platforms',
    description: 'Built multiple Shopify storefronts with custom themes, optimized checkout flows, and responsive designs for clients in USA and Canada.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    icon: Smartphone,
    year: '2023',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <FolderGit2 className="w-7 h-7 text-primary" />
            Projects<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.status && (
                        <span className="px-2 py-1 bg-terminal-green/10 text-terminal-green text-xs font-mono rounded">
                          {project.status}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
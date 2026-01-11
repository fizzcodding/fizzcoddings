import { motion } from 'framer-motion';
import { FolderGit2, Github, Bot, Cpu, Smartphone, Code2, Brain } from 'lucide-react';

const projects = [
  {
    title: 'LifeSphere',
    description: 'An all-in-one smart system for health, safety, home automation, and emotional support. It helps elderly and disabled users with AI-driven health monitoring, automated medicine dispensing, security sensors & robot alerts, fire/gas detection, smart home control, and a companion AI for mental support.',
    tags: ['ESP32', 'ROS2', 'Machine Learning', 'IoT', 'Flutter', 'Arduino'],
    icon: Bot,
    status: 'In Progress',
    year: '2025',
  },
  {
    title: 'Big-O-Tracker',
    description: 'A VSCode extension that helps developers instantly analyze the time complexity of their code. No guesswork, no stress—just write code and see how efficient it is. Perfect for competitive programmers, students, and anyone obsessed with clean, optimized code.',
    tags: ['VSCode Extension', 'TypeScript', 'Algorithm Analysis'],
    icon: Code2,
    year: '2024',
    github: 'https://github.com/fizzcodding/big-o-tracker',
  },
  {
    title: 'Hollow AI',
    description: 'An AI-powered assistant designed to provide intelligent responses and assist with various tasks. Built with cutting-edge machine learning techniques for natural conversation flow.',
    tags: ['AI', 'Machine Learning', 'Python', 'NLP', 'React'],
    icon: Brain,
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
    <section className="py-20 px-4 relative overflow-hidden" id="projects">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-foreground/[0.03] whitespace-nowrap select-none">
          BUILDING IS LIFE
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 glitch">
            <FolderGit2 className="w-7 h-7 text-primary retro-blink" />
            <span className="retro-underline">Projects</span><span className="text-primary cursor-blink">_</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
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
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
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

        {/* More projects coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <span className="font-mono text-sm text-muted-foreground">
            {"// "}<span className="text-primary">More projects coming soon...</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

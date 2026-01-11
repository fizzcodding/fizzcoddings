import { motion } from 'framer-motion';
import { Wrench, Code2, Cpu, Smartphone, Database, Palette, Bot, ExternalLink } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C#', 'Dart', 'Java'],
  },
  {
    title: 'Frontend',
    icon: Palette,
    skills: ['React', 'Angular', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    title: 'Mobile & Backend',
    icon: Smartphone,
    skills: ['Flutter', 'Node.js', 'Firebase', 'REST APIs', 'Express.js'],
  },
  {
    title: 'IoT & Robotics',
    icon: Cpu,
    skills: ['ESP32', 'Arduino', 'ROS2', 'IoT', 'Sensors', 'Motor Drivers'],
  },
  {
    title: 'AI & ML',
    icon: Bot,
    skills: ['Machine Learning', 'TensorFlow', 'Computer Vision', 'NLP'],
  },
  {
    title: 'Tools & Platforms',
    icon: Database,
    skills: ['Git', 'Shopify', 'Figma', 'VS Code', 'Firebase', 'Supabase'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const SkillsSection = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <Wrench className="w-7 h-7 text-primary" />
            Tech Stack<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass-card rounded-xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Competitive Coding Stats
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Codeforces */}
            <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 relative overflow-hidden">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent animate-pulse" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm text-foreground font-semibold">Codeforces</span>
                  <motion.span 
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-mono rounded-full border border-cyan-400/30 shadow-[0_0_15px_hsl(187_100%_50%/0.4)]"
                    animate={{ 
                      boxShadow: [
                        '0 0 10px hsl(187 100% 50% / 0.3)',
                        '0 0 20px hsl(187 100% 50% / 0.5)',
                        '0 0 10px hsl(187 100% 50% / 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ⚡ Expert
                  </motion.span>
                </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Rank</span>
                  <span className="font-mono text-sm text-cyan-400">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Max Rating</span>
                  <span className="font-mono text-sm text-terminal-amber">1844</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Profile</span>
                  <a
                    href="https://codeforces.com/profile/max_verstappen_goat1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    max_verstappen_goat1 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                </div>
              </div>
            </div>

            {/* LeetCode */}
            <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 relative overflow-hidden">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent animate-pulse" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm text-foreground font-semibold">LeetCode</span>
                  <motion.span 
                    className="px-3 py-1 bg-amber-500/20 text-terminal-amber text-xs font-mono rounded-full border border-amber-400/30 shadow-[0_0_15px_hsl(38_92%_50%/0.4)]"
                    animate={{ 
                      boxShadow: [
                        '0 0 10px hsl(38 92% 50% / 0.3)',
                        '0 0 20px hsl(38 92% 50% / 0.5)',
                        '0 0 10px hsl(38 92% 50% / 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    ♞ Knight
                  </motion.span>
                </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Global Ranking</span>
                  <span className="font-mono text-sm text-terminal-amber">#21100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Contest Rating</span>
                  <span className="font-mono text-sm text-terminal-green">1943</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Problems Solved</span>
                  <span className="font-mono text-sm text-primary">1015</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">Profiles:</span>
                  <div className="flex gap-2">
                    <a
                      href="https://leetcode.com/ice__fizz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      ice__fizz <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://leetcode.com/_rinfizz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      _rinfizz <ExternalLink className="w-3 h-3" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

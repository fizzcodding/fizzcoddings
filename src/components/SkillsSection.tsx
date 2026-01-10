import { motion } from 'framer-motion';
import { Wrench, Code2, Cpu, Smartphone, Database, Palette } from 'lucide-react';

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
    title: 'IoT & Embedded',
    icon: Cpu,
    skills: ['Arduino', 'ESP32', 'Sensors', 'Motor Drivers', 'Bluetooth HC-05/06'],
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

        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass-card rounded-xl p-6"
        >
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            LeetCode Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Global Rank', value: '~18.5K', subtext: 'among 5M+' },
              { label: 'Problems Solved', value: '1061', subtext: '/3647' },
              { label: 'Contest Rating', value: '1981', subtext: 'points' },
              { label: 'DSA Mastery', value: '80%', subtext: 'completed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                <p className="text-sm text-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
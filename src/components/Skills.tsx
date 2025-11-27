import { motion } from "framer-motion";
import { Code2, Palette, Zap, Brain } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Expert in modern web technologies and frameworks",
    percentage: 95,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
    percentage: 90,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Building lightning-fast, scalable applications",
    percentage: 88,
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing cutting-edge AI and machine learning",
    percentage: 85,
  },
];

export const Skills = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow-blue">
            Core <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and skills powering innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-blue box-glow-cyan rounded-full"
                  />
                </div>
                <p className="text-right text-sm text-primary mt-2 font-semibold">
                  {skill.percentage}%
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

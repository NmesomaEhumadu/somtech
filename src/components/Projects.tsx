import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Interface",
    description: "AI-powered brain-computer interface for seamless human-machine interaction",
    tech: ["React", "TensorFlow", "WebGL"],
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Quantum Dashboard",
    description: "Real-time quantum computing visualization and control system",
    tech: ["Next.js", "Three.js", "Python"],
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    title: "Holographic UI",
    description: "3D holographic user interface for augmented reality applications",
    tech: ["WebXR", "Babylon.js", "TypeScript"],
    gradient: "from-neon-purple to-neon-magenta",
  },
  {
    title: "Cyber Security Hub",
    description: "Advanced threat detection and network security monitoring platform",
    tech: ["Vue.js", "D3.js", "Node.js"],
    gradient: "from-neon-magenta to-neon-cyan",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-glow-cyan">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Exploring the boundaries of technology and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass-effect rounded-xl p-8 hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-glow-cyan transition-all">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary hover:text-neon-cyan transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary hover:text-neon-magenta transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

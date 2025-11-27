import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-glow-cyan"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-magenta bg-clip-text text-transparent">
              SOMTECH
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert Website Development - E-Commerce, Investment, Restaurant, Fashion Stylist & More
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 glass-effect rounded-lg font-semibold border border-primary/50 hover:border-primary transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-glow-pulse" />
      </motion.div>
    </section>
  );
};

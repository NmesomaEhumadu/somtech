import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 border-t border-primary/20">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2024 SomTech. All types of websites - E-commerce, Investment, Restaurant, Fashion & More.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

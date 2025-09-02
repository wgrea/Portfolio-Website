// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // ← Add this import
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background overflow-hidden"
    >

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 max-w-4xl animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            William Greaney
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-medium px-2">
            Frontend Developer & AI-Powered Builder
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Recent CS graduate specializing in React and TypeScript. I build modern web applications 
            using AI-assisted development and focus on creating great user experiences.
          </p>
        </div>

        {/* Achievement/Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border/50 rounded-full text-sm text-muted-foreground mb-6 sm:mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Available for opportunities
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
          <Link to="/about">
          <Button 
            variant="elegant" 
            size="lg" 
            onClick={scrollToContact}
            className="w-full sm:w-auto"
          >
              About Me
            </Button>
          </Link>
          <Link to="/projects">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToProjects}
            className="group w-full sm:w-auto"
          >
            View My Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          </Link>

          <Link to="/contact">
          <Button 
            variant="elegant" 
            size="lg" 
            onClick={scrollToContact}
            className="w-full sm:w-auto"
          >
            Let's Connect
            <Mail className="w-4 h-4" />
          </Button>
          </Link>
        </div>

        {/* Key Skills/Focus Areas */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12 px-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
            React & TypeScript
          </span>
          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
            AI-Assisted Development
          </span>
          <span className="px-3 py-1 bg-surface text-surface-foreground rounded-full text-sm border border-border/50">
            Problem Solving
          </span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-40 right-32 w-16 h-16 bg-accent/10 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-lg rotate-45 animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;
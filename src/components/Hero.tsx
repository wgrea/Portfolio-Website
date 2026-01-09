// src/components/Hero.tsx
// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background overflow-hidden px-4"
    >
      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-4xl w-full animate-on-scroll ${
          isVisible ? "visible" : ""
        }`}
      >
        {/* Main Heading & Title */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 leading-tight">
            William Greaney
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-medium">
            UX Engineer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I design tools that cut through chaos. Built{" "}
            <strong className="font-semibold text-primary">Echotrip</strong>—a
            work-abroad planner with curated visa flows, cost calculators, and
            nomad workspace guides. From retail customer friction to production
            UX systems.
          </p>
        </div>

        {/* Status Badges */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border/50 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to UX Engineer roles
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border/50 rounded-full text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Remote / Async-first
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8">
                    <Button
            variant="hero"
            size="lg"
            asChild
            className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
          >
            <a
              href="/William_Greaney_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Resume
              <FileText className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </Button>
          <Link to="/projects" className="w-full sm:w-auto">
            <Button
              variant="hero"
              size="lg"
              className="group w-full bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
              View Projects
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <Button
              variant="elegant"
              size="lg"
              className="w-full border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              About
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              variant="elegant"
              size="lg"
              className="w-full border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              Contact
            </Button>
          </Link>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/15 transition-colors duration-200">
            Problem-First UX
          </span>
          <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm border border-accent/20 hover:bg-accent/15 transition-colors duration-200">
            React + SvelteKit
          </span>
          <span className="px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full text-sm border border-green-500/20 hover:bg-green-500/15 transition-colors duration-200">
            Less-is-More Curation
          </span>
          <span className="px-3 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/15 transition-colors duration-200">
            Non-Linear Navigation
          </span>
          <span className="px-3 py-1.5 bg-surface text-surface-foreground rounded-full text-sm border border-border/50 hover:border-primary/30 transition-colors duration-200">
            Remote-Ready
          </span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-5 lg:left-20 w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-5 lg:right-32 w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-5 lg:right-20 w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-lg rotate-45 animate-pulse" />
    </section>
  );
};

export default Hero;

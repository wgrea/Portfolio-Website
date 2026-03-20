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
        </div>

        {/* Status Badges */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border/50 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to UX Engineer & Prototyping roles
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border/50 rounded-full text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Remote / Async-first
          </div>
        </div>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8">
  {/* Primary Calls to Action */}
  <Button
    asChild
    variant="hero"
    size="lg"
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

  <Button
    asChild
    variant="hero"
    size="lg"
    className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
  >
    <Link to="/projects" className="flex items-center justify-center">
      View Prototypes + Case Studies
      <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
    </Link>
  </Button>

  {/* Secondary Navigation */}
  {[
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ].map(({ label, href }) => (
    <Button
      key={label}
      asChild
      variant="elegant"
      size="lg"
      className="group w-full sm:w-auto border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
    >
      <Link to={href} className="flex items-center justify-center">
        {label}
      </Link>
    </Button>
  ))}
</div>

{/* Skills */}
<section aria-label="Core focus areas" className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
  {[
    { label: 'Problem-First UX', color: 'primary' },
    { label: 'React + SvelteKit', color: 'accent' },
    { label: 'Semantic Systems', color: 'green' },
    { label: 'Non-Linear Navigation', color: 'blue' },
    { label: 'Cultural UX', color: 'orange' },
    { label: 'Remote-Ready', color: 'surface' },
  ].map((tag) => (
    <span
      key={tag.label}
      className={`px-3 py-1.5 rounded-full text-sm border transition-transform hover:scale-105 hover:brightness-110
        ${tag.color === 'surface'
          ? 'bg-surface text-surface-foreground border-border/50'
          : `bg-${tag.color}-500/10 text-${tag.color}-600 border-${tag.color}-500/20`
        }`}
    >
      {tag.label}
    </span>
  ))}
</section>


      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-5 lg:left-20 w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-5 lg:right-32 w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-5 lg:right-20 w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-lg rotate-45 animate-pulse" />
    </section>
  );
};

export default Hero;
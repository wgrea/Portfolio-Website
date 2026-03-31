// src/components/Projects.tsx
import { getProjectById, projects } from "@/data/projectsData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Rocket, 
  GraduationCap, 
  ShoppingBag, 
  Globe,
  Cpu,
  Sparkles,
  Layers,
  XCircle,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const echoglazeProject = getProjectById("echoglaze");
  const vesperaProject = getProjectById("vespera");
  
  // Group projects by main categories
  const categoryStats = {
    enhancedSchool: projects.filter(p => p.type === 'enhanced-school').length,
    travel: projects.filter(p => p.category === 'travel').length,
    // Combine Social & Platform into one count for the "Platforms & Commerce" card
    platforms: projects.filter(p => ['platform', 'ecommerce', 'social', 'dating'].includes(p.category)).length,
    ecommerce: projects.filter(p => p.category === 'ecommerce').length,
    game: projects.filter(p => p.category === 'game').length,
    social: projects.filter(p => p.category === 'social' || p.category === 'dating').length,
  };

  const FeaturedCard = ({ project, icon, badge, color = "blue" }) => {
    const isBlue = color === "blue";
    return (
      <div className={`bg-gradient-to-br ${isBlue ? 'from-blue-50 to-teal-50 dark:from-blue-900/10 dark:to-teal-900/10 border-blue-200' : 'from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 border-orange-200'} rounded-2xl p-6 border dark:border-opacity-30 flex flex-col h-full`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 ${isBlue ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-orange-100 dark:bg-orange-900/30'} rounded-lg`}>
            {icon}
          </div>
          <div>
            <h2 className="text-lg font-bold">{project.title}</h2>
            <span className={`text-xs font-medium ${isBlue ? 'text-blue-600' : 'text-orange-600'} uppercase tracking-wider`}>{badge}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-surface/50 text-[10px] font-bold rounded border border-border/50 uppercase">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link to={`/projects/${project.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-surface/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Prototypes + Case Studies</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
            Explore My UX Process
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Dive into interactive prototypes and narrative case studies that trace my journey from concept to polished product experiences.
          </p>
        </div>


        {/* Featured Projects - SECOND */}
        <div className={`mb-16 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
            <p className="text-muted-foreground">Production-ready applications and UX-first prototypes</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* EchoGlaze Featured Card */}
{echoglazeProject && (
  <FeaturedCard 
    project={echoglazeProject}
    icon={<Rocket className="w-6 h-6 text-orange-600" />}
    badge="Production Ready"
  />
)}

            {/* Vespera Card */}
            {vesperaProject && (
              <FeaturedCard 
                project={vesperaProject} 
                icon={<Globe className="w-6 h-6 text-orange-600" />} 
                badge="UX-First Prototype"
                color="orange"
              />
            )}
          </div>
        </div>

        {/* 3. CANCELLED PROJECT - NEW SECTION */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
              <XCircle className="w-5 h-5 text-orange-500" />
              Cancelled Project
            </h3>
            <p className="text-muted-foreground text-sm">
              Why I shut down an AI‑generated MVP — and what it taught me about UX clarity
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Link 
              to="/projects/cancelled" 
              className="group block bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-2 border-orange-200/50 dark:border-orange-800/50 rounded-2xl p-8 text-center hover:shadow-xl hover:border-orange-300 transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Zap className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-bold text-xl mb-3 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                SkillsHub
              </h4>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Bolt.new MVP → Static model. When speed exposed the real UX problem.
              </p>
              <div className="flex items-center justify-center text-sm text-orange-600 font-semibold gap-1">
                <span>Read case study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

{/* Continue Exploring - LIGHT VERSION */}
<div 
  className={`mt-20 mb-12 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  <h3 className="text-base font-semibold text-center mb-4 text-muted-foreground">
    Continue Exploring
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
{/* Academic */}
<Link to="/projects/academic">
  <div className="group p-4 rounded-lg border border-border/40 bg-surface/40 hover:bg-surface transition-all cursor-pointer text-center">
    <GraduationCap className="w-4 h-4 mx-auto mb-2 text-muted-foreground group-hover:text-green-600 transition-colors" />
    <h4 className="font-medium group-hover:text-green-600 transition-colors">
      Enhanced Academic Work
    </h4>
    <p className="text-xs text-muted-foreground mt-1">
      {categoryStats.enhancedSchool} projects
    </p>
  </div>
</Link>

{/* Travel */}
<Link to="/projects/travel">
  <div className="group p-4 rounded-lg border border-border/40 bg-surface/40 hover:bg-surface transition-all cursor-pointer text-center">
    <Globe className="w-4 h-4 mx-auto mb-2 text-muted-foreground group-hover:text-blue-600 transition-colors" />
    <h4 className="font-medium group-hover:text-blue-600 transition-colors">
      Travel & Discovery
    </h4>
    <p className="text-xs text-muted-foreground mt-1">
      {categoryStats.travel} projects
    </p>
  </div>
</Link>

{/* Platforms */}
<Link to="/projects/platforms">
  <div className="group p-4 rounded-lg border border-border/40 bg-surface/40 hover:bg-surface transition-all cursor-pointer text-center">
    <ShoppingBag className="w-4 h-4 mx-auto mb-2 text-muted-foreground group-hover:text-purple-600 transition-colors" />
    <h4 className="font-medium group-hover:text-purple-600 transition-colors">
      Platforms & Commerce
    </h4>
    <p className="text-xs text-muted-foreground mt-1">
      {categoryStats.platforms + categoryStats.ecommerce} projects
    </p>
  </div>
</Link>
  </div>
</div>


        {/* Footer */}
        <footer className="bg-surface/50 border-t border-border/50 py-12 px-6">
          <p className="text-sm text-muted-foreground">
            © 2026 William Greaney. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
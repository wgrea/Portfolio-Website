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
  XCircle,  // Add this
  Zap        // Add this
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const echotripProject = getProjectById("echotrip");
  const vesperaProject = getProjectById("vespera"); // Add this
  
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
<div className="text-center mb-12">
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


        {/* Category Navigation - FIRST */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-center mb-6">Browse by Category</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Enhanced Academic Work */}
            <Link to="/projects/academic">
              <div className="group bg-surface/50 hover:bg-surface border border-border/30 hover:border-green-200 rounded-xl p-6 transition-all hover:shadow-md cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 transition-colors">
                    <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                      Enhanced Academic Work
                    </h4>
                    <p className="text-xs text-muted-foreground">{categoryStats.enhancedSchool} projects</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Class projects rebuilt with modern tools and expanded features
                </p>
                <div className="mt-4 flex items-center text-sm text-green-600 group-hover:text-green-700">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Travel & Discovery */}
            <Link to="/projects/travel">
              <div className="group bg-surface/50 hover:bg-surface border border-border/30 hover:border-blue-200 rounded-xl p-6 transition-all hover:shadow-md cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                      Travel & Discovery
                    </h4>
                    <p className="text-xs text-muted-foreground">{categoryStats.travel} projects</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Applications focused on travel planning and location-based discovery
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-600 group-hover:text-blue-700">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Platforms & Commerce */}
            <Link to="/projects/platforms">
              <div className="group bg-surface/50 hover:bg-surface border border-border/30 hover:border-purple-200 rounded-xl p-6 transition-all hover:shadow-md cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                      Platforms & Commerce
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {categoryStats.platforms + categoryStats.ecommerce} projects
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Skill platforms, e-commerce sites, and social applications
                </p>
                <div className="mt-4 flex items-center text-sm text-purple-600 group-hover:text-purple-700">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Projects - SECOND */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Current Featured Projects</h3>
            <p className="text-muted-foreground">Production-ready applications and UX-first prototypes</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Echotrip Card (Existing logic, just wrapped in a smaller column) */}
            {echotripProject && (
              <FeaturedCard 
                project={echotripProject} 
                icon={<Rocket className="w-6 h-6 text-blue-600" />} 
                badge="Production Ready"
              />
            )}

            {/* Vespera Card (New) */}
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
<div className="mb-16">
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


{/* Development Journey - THIRD */}
<div className="mb-12">
  <div className="text-center mb-8">
    <h3 className="text-xl font-semibold mb-2">My UX Engineering Journey</h3>
    <p className="text-muted-foreground">
      How I evolved from fundamentals → modern tooling → UX‑first prototyping
    </p>
  </div>
  
  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Foundation Phase */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h4 className="font-semibold">Foundations</h4>
            <p className="text-xs text-muted-foreground">2022 – Spring 2025</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
            <span>Algorithms, data structures, and problem‑solving</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
            <span>HTML/CSS/JS fundamentals</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
            <span>Early academic projects (Travel Discovery, Serendipity)</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
            <span>First exposure to UI/UX concepts</span>
          </li>
        </ul>
      </div>

      {/* Skill Enhancement */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h4 className="font-semibold">Modern Tooling</h4>
            <p className="text-xs text-muted-foreground">Summer – Fall 2025</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
            <span>Adopted React, SvelteKit, TypeScript</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
            <span>Rebuilt academic projects with modern stacks</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
            <span>Learned component systems & design tokens</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
            <span>Early UX thinking through MingleMap (Lovable)</span>
          </li>
        </ul>
      </div>

      {/* Production Focus */}
      <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-600/20 dark:border-blue-800/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 dark:bg-blue-700 rounded-lg">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold">UX‑First Prototyping</h4>
            <p className="text-xs text-blue-700 dark:text-blue-300">Late 2025 – Present</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
            <span>Built Echotrip using curated flows & async‑fit navigation</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
            <span>Developed Vespera: cultural UX, semantic systems, safety UX</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
            <span>FigJam ↔ Code loops for UX‑first prototyping</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
            <span>Production‑ready deployments & real‑world iteration</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</div>

      </div>
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border/50 py-12 px-6">
          <p className="text-sm text-muted-foreground">
              © 2026 William Greaney. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
      </footer>
    </section>
    
  );
};

export default Projects;
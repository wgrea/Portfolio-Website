// src/pages/PlatformProjects.tsx
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { ShoppingBag, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PlatformProjects = () => {
  // Separate pure platform/learning tools from social evolution
  const skillsProjects = projects.filter(p => p.category === 'platform');
  const ecommerceProjects = projects.filter(p => p.category === 'ecommerce');
  
  // Specific IDs for the Social Discovery timeline
  const serendipity = projects.find(p => p.id === "serendipity");
  const minglemap = projects.find(p => p.id === "minglemap");
  const vespera = projects.find(p => p.id === "vespera");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/20 to-transparent dark:from-purple-900/5 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Platforms & Commerce</h1>
              <p className="text-muted-foreground">Skill platforms, e-commerce sites, and social applications</p>
            </div>
          </div>
        </div>

        {/* 1. Skills & Learning Platforms */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-6">Skills & Learning Platforms</h3>
          <div className="space-y-8">
            {skillsProjects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
                description={project.shortDescription}
                compact={false}
              />
            ))}
          </div>
        </div>

{/* 2. Social Discovery Evolution (The Timeline) */}
<div className="mb-16">
  <div className="flex items-center gap-2 mb-6">
    <Sparkles className="w-5 h-5 text-orange-500" />
    <h3 className="text-lg font-semibold">Social Discovery Evolution</h3>
  </div>
  
  <div className="space-y-12 border-l-2 border-border/50 ml-4 pl-8 relative">

    {/* Step 1: Serendipity */}
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-muted border-4 border-background" />
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Spring 2023 + Summer 2025 (Lovable)
        </span>
        <span className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground rounded-full">
          Foundation
        </span>
      </div>
      <h4 className="font-bold text-lg">Serendipity (v1)</h4>
      <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
        Early exploration into matching logic and interest modeling. 
        A foundational experiment before any formal UX practice.
      </p>
      {serendipity && (
        <ProjectCard 
          {...serendipity} 
          description={serendipity.shortDescription} 
          compact={true} 
          className="max-w-xl"
        />
      )}
    </div>

    {/* Step 2: MingleMap */}
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-background" />
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
          Spring 2025 → Summer 2025 (Lovable)
        </span>
        <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-bold">
          Senior Capstone
        </span>
      </div>
      <h4 className="font-bold text-lg">MingleMap</h4>
      <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
        Built as a senior capstone using HTML, CSS, and JavaScript. 
        Later reimagined in Summer 2025 with a “lovable” redesign that 
        introduced early UX thinking and visual clarity.
      </p>
      {minglemap && (
        <ProjectCard 
          {...minglemap} 
          description={minglemap.shortDescription} 
          compact={true} 
          className="max-w-xl shadow-sm"
        />
      )}
    </div>

    {/* Step 3: Vespera */}
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-background shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">
          2026
        </span>
        <span className="text-[10px] px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full font-bold">
          Production Ready
        </span>
      </div>
      <h4 className="font-bold text-lg">Vespera</h4>
      <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
        Your first intentional UX-first prototype. 
        A SvelteKit-powered cultural atlas focused on etiquette, safety, 
        and global social environments—now production-ready.
      </p>
      {vespera && (
        <ProjectCard 
          {...vespera} 
          description={vespera.shortDescription} 
          compact={false} 
          className="max-w-2xl border-orange-200 dark:border-orange-900/50 shadow-md"
        />
      )}
    </div>

  </div>
</div>


        {/* Footer Note */}
        <div className="mt-8 p-4 bg-surface/50 rounded-lg border border-border/30">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-medium">Design Philosophy:</span> These projects represent my focus on Utility UX—prioritizing certain feedback and functional design over decorative elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformProjects;
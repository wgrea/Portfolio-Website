// src/pages/TravelProjects.tsx
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { Globe, ArrowLeft, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TravelProjects = () => {
  const travelProjects = projects.filter(p => p.category === 'travel');
  
  // Find all the projects we need
  const travelDiscoveryV1 = projects.find(p => p.id === "travel-discovery"); // Original academic version
  const travelDiscoveryLovable = projects.find(p => p.id === "travel-discovery-lovable"); // Lovable prototype
  const echotrip = projects.find(p => p.id === "echotrip"); // Production version
  
  // Helper function to safely render project cards
  const renderProjectCard = (project: any, compact?: boolean, className?: string) => {
    if (!project) return null;
    
    // Create a safe version of the project with a compatible status
    const safeProject = {
      ...project,
      // Map 'cancelled' to 'paused' for display purposes
      status: project.status === 'cancelled' ? 'paused' : project.status
    };
    
    return (
      <ProjectCard
        {...safeProject}
        description={project.shortDescription}
        compact={compact || false}
        className={className || "max-w-2xl"}
      />
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-transparent dark:from-blue-900/5 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Travel & Discovery</h1>
              <p className="text-muted-foreground">From academic project to production-ready travel planner</p>
            </div>
          </div>
        </div>

{/* Travel Evolution Timeline */}
<div className="space-y-12 border-l-2 border-border/50 ml-4 pl-8 relative">

  {/* Step 1: Spring 2023 Academic - SMALL */}
  <div className="relative">
    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-background" />
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Spring 2023</span>
      <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">Academic</span>
    </div>
    <h4 className="font-bold text-lg">Travel Discovery (v1)</h4>
    <p className="text-sm text-muted-foreground mb-3">
      Advanced CSS class • Community college • Loaner laptop
    </p>
  </div>

  {/* Step 2: Summer 2025 Lovable - SMALL */}
  <div className="relative">
    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-background" />
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-medium text-orange-600 uppercase tracking-wider">Summer 2025</span>
      <span className="text-[10px] px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">Lovable Proto</span>
    </div>
    <h4 className="font-bold text-lg">Travel Discovery (Lovable)</h4>
    <p className="text-sm text-muted-foreground mb-3">Prompted 2023 idea into Lovable</p>
    {renderProjectCard(travelDiscoveryLovable, true, "max-w-sm opacity-80")}
        {renderProjectCard(travelDiscoveryV1, true, "max-w-sm opacity-80")}
  </div>

  {/* Step 3: Echotrip - BIG HERO */}
  <div className="relative">
    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-background shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Current</span>
      <span className="text-[10px] px-2 py-0.5 bg-blue-600 text-white rounded-full font-bold">Production</span>
    </div>
    <h4 className="font-bold text-lg">Echotrip</h4>
    <p className="text-sm text-muted-foreground mb-4">Production-ready travel planner</p>
    {renderProjectCard(echotrip, false, "max-w-2xl shadow-md border-blue-200")}
  </div>

</div>


{/* Vespera Companion - SEPARATE prominent card */}
<div className="mt-16 p-8 bg-surface rounded-2xl border border-border/50">
  {/* Your existing Vespera companion code */}
</div>

      </div>
    </div>
  );
};

export default TravelProjects;
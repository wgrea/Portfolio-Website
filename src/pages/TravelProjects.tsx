// src/pages/TravelProjects.tsx
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { Globe, ArrowLeft, Map } from "lucide-react";
import { Link } from "react-router-dom";

const TravelProjects = () => {
  const travelProjects = projects.filter(p => p.category === 'travel');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-transparent dark:from-blue-900/5 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
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

        {/* Simple Evolution Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Project Evolution</h3>
          
          <div className="space-y-8">
            {/* Original Academic Project */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground">Spring 2023</span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">Original Academic Version</span>
              </div>
              <h4 className="font-medium">Travel Discovery App (Original)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Built for Advanced CSS class on community college computer
              </p>
              
              <div className="text-sm text-muted-foreground space-y-1 mb-4">
                <p className="font-medium">Key concepts learned:</p>
                <ul className="space-y-0.5 ml-4">
                  <li>• Mobile-first responsive design</li>
                  <li>• Basic CSS animations and transitions</li>
                  <li>• Simple JavaScript form validation</li>
                  <li>• Destination matching algorithm logic</li>
                </ul>
              </div>
            </div>

            {/* Current Enhanced Version */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground">Summer 2025</span>
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">Enhanced Version</span>
              </div>
              
              {projects.find(p => p.id === "travel-discovery") && (
                <ProjectCard
                  {...projects.find(p => p.id === "travel-discovery")!}
                  description={projects.find(p => p.id === "travel-discovery")!.shortDescription}
                  compact={false}
                  className="max-w-2xl"
                />
              )}
            </div>

            {/* Echotrip - Production */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-muted-foreground">Current</span>
                <span className="text-xs px-2 py-0.5 bg-blue-600 text-white rounded-full">Production Ready</span>
              </div>
              
              {projects.find(p => p.id === "echotrip") && (
                <ProjectCard
                  {...projects.find(p => p.id === "echotrip")!}
                  description={projects.find(p => p.id === "echotrip")!.shortDescription}
                  compact={false}
                  className="max-w-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelProjects;
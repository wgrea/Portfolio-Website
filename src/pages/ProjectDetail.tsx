// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import { getProjectById, projects } from "@/data/projectsData";
import type { Project } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp } from "lucide-react";

// Import the new components
import ProjectHeader from "@/components/project-detail/ProjectHeader";
import ProjectJourney from "@/components/project-detail/ProjectJourney";
import ProjectUX from "@/components/project-detail/ProjectUX";
import ProjectFuturePlans from "@/components/project-detail/ProjectFuturePlans";
import ProjectSidebar from "@/components/project-detail/ProjectSidebar";

// Helper functions
const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'live': return <TrendingUp className="w-4 h-4" />;
    case 'development': return <TrendingUp className="w-4 h-4" />;
    case 'beta': return <TrendingUp className="w-4 h-4" />;
    case 'complete': return <TrendingUp className="w-4 h-4" />;
    case 'paused': return <TrendingUp className="w-4 h-4" />;
    default: return null;
  }
};

const getStatusColor = (status?: string) => {
  switch (status) {
    case 'live': return 'bg-green-100 text-green-700 border-green-200';
    case 'development': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'beta': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'complete': return 'bg-green-100 text-green-700 border-green-200';
    case 'paused': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link to="/projects">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <ProjectHeader 
          project={project}
          getStatusColor={getStatusColor}
          getStatusIcon={getStatusIcon}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <Card>
              <CardContent className="p-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Journey Section */}
            <ProjectJourney journey={project.journey} />

            {/* UX Section */}
            <ProjectUX project={project} />

            {/* Future Plans */}
            <ProjectFuturePlans projectId={project.id} />

            {/* Status Note */}
            {project.statusNote && (
              <Card className="bg-surface/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Current Status</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.statusNote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <ProjectSidebar 
            project={project}
            getStatusIcon={getStatusIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
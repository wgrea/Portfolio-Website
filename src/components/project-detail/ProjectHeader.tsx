// src/components/project-detail/ProjectHeader.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projectsData";
import { School, Star, ExternalLink, Github } from "lucide-react";

interface ProjectHeaderProps {
  project: Project;
  getStatusColor: (status?: string) => string;
  getStatusIcon: (status?: string) => React.ReactNode;
}

const ProjectHeader = ({ project, getStatusColor, getStatusIcon }: ProjectHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.featured && (
          <Badge className="bg-primary text-primary-foreground">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}
        {project.type === 'enhanced-school' && (
          <Badge className="bg-blue-100 text-blue-700 border-blue-200">
            <School className="w-3 h-3 mr-1" />
            Enhanced School Project
          </Badge>
        )}
        {project.status && (
          <Badge className={getStatusColor(project.status)}>
            {getStatusIcon(project.status)}
            <span className="ml-1 capitalize">{project.status}</span>
          </Badge>
        )}
        {project.semester && (
          <Badge variant="outline">
            Originally from {project.semester}
          </Badge>
        )}
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
        {project.title}
      </h1>
      
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        {project.fullDescription}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <Button 
            variant="hero" 
            size="lg"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;
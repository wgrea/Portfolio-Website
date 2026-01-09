// src/components/project-detail/ProjectSidebar.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Project } from "@/data/projectsData";

interface ProjectSidebarProps {
  project: Project;
  getStatusIcon: (status?: string) => React.ReactNode;
}

const ProjectSidebar = ({ project, getStatusIcon }: ProjectSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Technologies */}
      <Card>
        <CardHeader>
          <CardTitle>Technologies Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-surface text-surface-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Info */}
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-1">Category</h4>
            <p className="capitalize">{project.category || 'N/A'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-1">Type</h4>
            <p className="capitalize">
              {project.type?.replace('-', ' ') || 'Personal Project'}
            </p>
          </div>
          {project.semester && (
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">Academic Semester</h4>
              <p>{project.semester}</p>
            </div>
          )}
          {project.status && (
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-1">Status</h4>
              <div className="flex items-center gap-2">
                {getStatusIcon(project.status)}
                <span className="capitalize">{project.status}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {project.liveUrl && (
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Live Site
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </a>
            </Button>
          )}
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectSidebar;
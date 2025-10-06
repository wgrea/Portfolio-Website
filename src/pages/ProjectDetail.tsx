// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  School,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  Zap
} from "lucide-react";

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

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'live': return <CheckCircle className="w-4 h-4" />;
      case 'development': return <TrendingUp className="w-4 h-4" />;
      case 'beta': return <Zap className="w-4 h-4" />;
      case 'complete': return <CheckCircle className="w-4 h-4" />;
      case 'paused': return <Clock className="w-4 h-4" />;
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

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
            {project.journey && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Project Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {project.journey.initialBuild && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Initial Build</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.journey.initialBuild}
                      </p>
                    </div>
                  )}
                  {project.journey.enhancements && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Enhancements</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.journey.enhancements}
                      </p>
                    </div>
                  )}
                  {project.journey.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Key Challenges</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.journey.challenges}
                      </p>
                    </div>
                  )}
                  {project.journey.decisions && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Technical Decisions</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.journey.decisions}
                      </p>
                    </div>
                  )}
                  {project.journey.skills && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Skills Developed</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.journey.skills}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

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
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
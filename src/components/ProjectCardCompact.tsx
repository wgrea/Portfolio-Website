// src/components/ProjectCardCompact.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardCompactProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: 'live' | 'development' | 'beta' | 'complete' | 'paused';
  showStatus?: boolean;
}

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

const ProjectCardCompact = ({ 
  id,
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  status,
  showStatus
}: ProjectCardCompactProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${id}`);
  };

  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liveUrl) window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (githubUrl) window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden hover-lift cursor-pointer border border-border/50"
    >
      <div className="flex">
        {/* Project Image */}
        <div className="relative flex-shrink-0 w-24 h-24">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Status Badge */}
          {status && showStatus && (
            <div className="absolute bottom-1 left-1">
              <Badge className={`${getStatusColor(status)} text-xs px-1.5 py-0.5`}>
                {status}
              </Badge>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="flex-1 p-3 min-w-0">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-card-foreground group-hover:text-primary transition-colors mb-1">
                {title}
              </h3>
              
              <p className="text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                {description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-2">
                {technologies.slice(0, 2).map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-surface text-surface-foreground rounded-full text-[10px] px-1.5 py-0.5 font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 2 && (
                  <span className="bg-surface text-surface-foreground rounded-full text-[10px] px-1.5 py-0.5 font-medium border border-border/50">
                    +{technologies.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-1">
              {liveUrl && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 text-xs h-6"
                  onClick={handleLiveClick}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              )}
              {githubUrl && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex-1 text-xs h-6"
                  onClick={handleGithubClick}
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                className="text-xs h-6 px-2"
                onClick={handleCardClick}
              >
                <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* View Details Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 pointer-events-none">
        <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-xs font-medium">View Details</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardCompact;
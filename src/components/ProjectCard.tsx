// src/components/ProjectCard.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Star, 
  School, 
  Clock, 
  CheckCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  compact?: boolean;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status?: 'live' | 'development' | 'beta' | 'complete' | 'paused';
  type?: 'enhanced-school' | 'startup' | 'affiliate';
  semester?: string;
  statusNote?: string;
  showSemester?: boolean;
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

const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'complete': return <CheckCircle className="w-3 h-3" />;
    case 'paused': return <Clock className="w-3 h-3" />;
    case 'development': return <TrendingUp className="w-3 h-3" />;
    default: return null;
  }
};

const getStatusText = (status?: string) => {
  switch (status) {
    case 'complete': return 'Complete';
    case 'paused': return 'Paused';
    case 'development': return 'In Development';
    case 'live': return 'Live';
    case 'beta': return 'Beta';
    default: return status;
  }
};

const ProjectCard = ({ 
  id,
  compact,
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  featured,
  status,
  type,
  semester,
  statusNote,
  showSemester,
  showStatus
}: ProjectCardProps) => {
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
      className={`
        group bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden hover-lift h-full flex flex-col relative cursor-pointer
        ${featured ? 'ring-2 ring-primary/20' : ''}
        ${compact ? 'max-w-xs border border-border/50' : ''}
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-2 left-2 z-10">
          <Badge className="bg-primary text-primary-foreground">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      {/* Enhanced School Project Badge */}
      {type === 'enhanced-school' && !compact && (
        <div className="absolute top-2 right-2 z-10">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200">
            <School className="w-3 h-3 mr-1" />
            Enhanced School Project
          </Badge>
        </div>
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`
            w-full object-cover group-hover:scale-105 transition-transform duration-500
            ${compact ? 'h-28' : 'h-48 sm:h-52'}
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        {status && (showStatus || !compact) && (
          <div className="absolute bottom-2 left-2">
            <Badge className={`${getStatusColor(status)} text-xs`}>
              {getStatusIcon(status)}
              <span className="ml-1 capitalize">{getStatusText(status)}</span>
            </Badge>
          </div>
        )}

        {/* View Details Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className={`flex-1 flex flex-col ${compact ? 'p-3' : 'p-4 sm:p-6'}`}>
        <h3 className={`
          font-bold text-card-foreground group-hover:text-primary transition-colors mb-2
          ${compact ? 'text-sm leading-tight line-clamp-2' : 'text-lg sm:text-xl'}
        `}>
          {title}
        </h3>

        {/* Semester Info */}
        {showSemester && semester && !compact && (
          <div className="mb-2 flex items-center text-xs text-muted-foreground">
            <School className="w-3 h-3 mr-1" />
            <span>Originally from {semester}</span>
          </div>
        )}
        
        <p className={`
          text-muted-foreground mb-3 leading-relaxed flex-1
          ${compact ? 'text-xs line-clamp-2' : 'text-sm line-clamp-3'}
        `}>
          {description}
        </p>
        
        {/* Status Note */}
        {statusNote && !compact && (
          <div className="mb-3 p-2 bg-surface/50 rounded-lg">
            <p className="text-xs text-muted-foreground italic">
              {statusNote}
            </p>
          </div>
        )}
        
        {/* Tech Stack */}
        <div className={`flex flex-wrap gap-1 mb-3 ${compact ? '' : 'sm:gap-2 sm:mb-4'}`}>
          {technologies.slice(0, compact ? 2 : 4).map((tech, index) => (
            <span 
              key={index}
              className={`
                bg-surface text-surface-foreground rounded-full font-medium border border-border/50 
                hover:bg-primary hover:text-primary-foreground transition-colors
                ${compact ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1 sm:px-3'}
              `}
            >
              {tech}
            </span>
          ))}
          {technologies.length > (compact ? 2 : 4) && (
            <span className={`
              bg-surface text-surface-foreground rounded-full font-medium border border-border/50
              ${compact ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1 sm:px-3'}
            `}>
              +{technologies.length - (compact ? 2 : 4)}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`flex space-x-2 mt-auto ${compact ? '' : 'sm:space-x-3'}`}>
          {liveUrl && (
            <Button 
              variant="default"
              size="sm"
              className={compact 
                ? 'flex-1 text-xs h-7 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white' 
                : 'flex-1 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40'
              }
              onClick={handleLiveClick}
            >
              <ExternalLink className={compact ? 'w-3 h-3 mr-1' : 'w-4 h-4'} />
              {compact ? 'Demo' : 'Live Demo'}
            </Button>
          )}
          {githubUrl && (
            <Button 
              variant="outline"
              size={compact ? "sm" : "sm"}
              className={compact ? 'flex-1 text-xs h-7' : 'flex-1'}
              onClick={handleGithubClick}
            >
              <Github className={compact ? 'w-3 h-3 mr-1' : 'w-4 h-4'} />
              {compact ? 'Code' : 'View Code'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
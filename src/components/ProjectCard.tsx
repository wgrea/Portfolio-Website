// src/components/ProjectCard.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Users, Gamepad2, Map, Heart, TrendingUp, Plane, School, Clock, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: 'game' | 'social' | 'dating' | 'education' | 'platform' | 'travel';
  featured?: boolean;
  status?: 'live' | 'development' | 'beta' | 'complete' | 'paused';
  stats?: {
    stars?: number;
    users?: number;
    downloads?: number;
  };
  // New properties for enhanced school projects
  type?: 'enhanced-school' | 'startup';
  semester?: string;
  statusNote?: string;
  showSemester?: boolean;
  showStatus?: boolean;
}

const getCategoryIcon = (category?: string) => {
  switch (category) {
    case 'game': return <Gamepad2 className="w-3 h-3" />;
    case 'social': return <Users className="w-3 h-3" />;
    case 'dating': return <Heart className="w-3 h-3" />;
    case 'education': return <TrendingUp className="w-3 h-3" />;
    case 'platform': return <TrendingUp className="w-3 h-3" />;
    case 'travel': return <Plane className="w-3 h-3" />;
    default: return null;
  }
};

const getCategoryColor = (category?: string) => {
  switch (category) {
    case 'game': return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'social': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'dating': return 'bg-pink-100 text-pink-700 border-pink-200';
    case 'education': return 'bg-green-100 text-green-700 border-green-200';
    case 'platform': return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'travel': return 'bg-cyan-100 text-cyan-700 border-cyan-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
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
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  category,
  featured = false,
  status,
  stats,
  // New properties
  type,
  semester,
  statusNote,
  showSemester = false,
  showStatus = false
}: ProjectCardProps) => {
  const handleLiveClick = () => {
    if (liveUrl) window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    if (githubUrl) window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`group bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden hover-lift h-full flex flex-col relative ${featured ? 'ring-2 ring-primary/20' : ''}`}>
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
      {type === 'enhanced-school' && (
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
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Action Buttons */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8 hover:scale-110"
              onClick={handleLiveClick}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
          {githubUrl && (
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8 hover:scale-110"
              onClick={handleGithubClick}
            >
              <Github className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Status and Category Badges */}
        <div className="absolute bottom-3 left-3 flex space-x-2">
          {category && (
            <Badge className={`${getCategoryColor(category)} text-xs`}>
              {getCategoryIcon(category)}
              <span className="ml-1 capitalize">{category}</span>
            </Badge>
          )}
          {status && (
            <Badge className={`${getStatusColor(status)} text-xs`}>
              {getStatusIcon(status)}
              <span className="ml-1 capitalize">{getStatusText(status)}</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors flex-1">
            {title}
          </h3>
        </div>

        {/* Semester Info for Enhanced Projects */}
        {showSemester && semester && (
          <div className="mb-2 flex items-center text-xs text-muted-foreground">
            <School className="w-3 h-3 mr-1" />
            <span>Originally from {semester}</span>
          </div>
        )}

        {/* Project Stats */}
        {stats && (
          <div className="flex space-x-4 mb-3 text-xs text-muted-foreground">
            {stats.stars && (
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>{stats.stars.toLocaleString()}</span>
              </div>
            )}
            {stats.users && (
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{stats.users.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
        
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
          {description}
        </p>
        
        {/* Status Note */}
        {statusNote && (
          <div className="mb-3 p-2 bg-surface/50 rounded-lg">
            <p className="text-xs text-muted-foreground italic">
              {statusNote}
            </p>
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-2 sm:px-3 py-1 bg-surface text-surface-foreground rounded-full text-xs font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 sm:px-3 py-1 bg-surface text-surface-foreground rounded-full text-xs font-medium border border-border/50">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-auto">
          {liveUrl && (
            <Button 
              variant="hero" 
              size="sm" 
              className="flex-1 w-full"
              onClick={handleLiveClick}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className={`flex-1 w-full ${!liveUrl ? 'variant-hero' : ''}`}
              onClick={handleGithubClick}
            >
              <Github className="w-4 h-4" />
              {liveUrl ? 'Code' : 'View Code'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
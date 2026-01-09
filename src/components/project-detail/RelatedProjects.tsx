// src/components/project-detail/RelatedProjects.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projectsData";

interface RelatedProjectsProps {
  relatedProjects: Project[];
}

const RelatedProjects = ({ relatedProjects }: RelatedProjectsProps) => {
  if (relatedProjects.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {relatedProjects.map(relatedProject => (
            <Link 
              key={relatedProject.id} 
              to={`/projects/${relatedProject.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors group"
            >
              <img 
                src={relatedProject.image} 
                alt={relatedProject.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium group-hover:text-primary transition-colors">
                  {relatedProject.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {relatedProject.shortDescription}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedProjects;
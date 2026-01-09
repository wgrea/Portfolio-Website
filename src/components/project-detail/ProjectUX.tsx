// src/components/project-detail/ProjectUX.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/data/projectsData";

interface ProjectUXProps {
  project: Pick<Project, 'uxProblem' | 'uxResearch' | 'uxDecisions' | 'uxOutcome' | 'uxLearnings'>;
}

const ProjectUX = ({ project }: ProjectUXProps) => {
  if (!project.uxProblem && !project.uxDecisions) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
            <span className="text-white text-xs font-bold">UX</span>
          </div>
          User Experience Design
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Problem Statement */}
        {project.uxProblem && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">The User Problem</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.uxProblem}
            </p>
          </div>
        )}
        
        {/* Research (if exists) */}
        {project.uxResearch && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Research Insights</h4>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.uxResearch}
            </p>
          </div>
        )}
        
        {/* UX Decisions Grid */}
        {project.uxDecisions && project.uxDecisions.length > 0 && (
          <div>
            <h4 className="font-semibold mb-4 text-primary">Key UX Decisions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.uxDecisions.map((decision, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'} mr-2`}></div>
                    <h4 className="font-semibold">{decision.challenge}</h4>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">Solution:</span>
                      <p>{decision.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium">Rationale:</span>
                      <p>{decision.rationale}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Outcome (if exists) */}
        {project.uxOutcome && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Outcome</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.uxOutcome}
            </p>
          </div>
        )}
        
        {/* Learnings (if exists) */}
        {project.uxLearnings && (
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">UX Learnings</h4>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.uxLearnings}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectUX;
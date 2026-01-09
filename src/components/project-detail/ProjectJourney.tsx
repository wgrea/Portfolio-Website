// src/components/project-detail/ProjectJourney.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Project } from "@/data/projectsData";

interface ProjectJourneyProps {
  journey: Project['journey'];
}

const ProjectJourney = ({ journey }: ProjectJourneyProps) => {
  if (!journey) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Project Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {journey.initialBuild && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Initial Build</h4>
            <p className="text-muted-foreground leading-relaxed">
              {journey.initialBuild}
            </p>
          </div>
        )}
        {journey.enhancements && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Enhancements</h4>
            <p className="text-muted-foreground leading-relaxed">
              {journey.enhancements}
            </p>
          </div>
        )}
        {journey.challenges && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Key Challenges</h4>
            <p className="text-muted-foreground leading-relaxed">
              {journey.challenges}
            </p>
          </div>
        )}
        {journey.decisions && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Technical Decisions</h4>
            <p className="text-muted-foreground leading-relaxed">
              {journey.decisions}
            </p>
          </div>
        )}
        {journey.skills && (
          <div>
            <h4 className="font-semibold mb-2 text-primary">Skills Developed</h4>
            <p className="text-muted-foreground leading-relaxed">
              {journey.skills}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectJourney;
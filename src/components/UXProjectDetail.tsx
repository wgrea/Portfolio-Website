// components/UXProjectDetail.tsx

// In UXProjectDetail.tsx
import { Project } from "@/data/projectsData";

interface UXProjectDetailProps {
  project: Project;
}

export function UXProjectDetail({ project }: UXProjectDetailProps) {
  return (
    <div className="ux-case-study">
      {/* Problem Statement */}
      {project.uxProblem && (
        <section className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">The UX Challenge</h2>
          <p className="text-gray-700">{project.uxProblem}</p>
        </section>
      )}
      
      {/* Research Insights */}
      {project.uxResearch && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Research & Discovery</h2>
          <p className="text-gray-700 mb-4">{project.uxResearch}</p>
        </section>
      )}
      
      {/* Key UX Decisions */}
      {project.uxDecisions && project.uxDecisions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key UX Decisions</h2>
          <div className="space-y-4">
            {project.uxDecisions.map((decision, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-medium text-gray-800">{decision.challenge}</h3>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Solution:</span>
                    <p className="mt-1">{decision.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">UX Rationale:</span>
                    <p className="mt-1">{decision.rationale}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Visual Gallery - ADD THIS */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Design Evolution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* You would add actual images here */}
          <div className="text-center">
            <div className="h-48 bg-gray-200 rounded mb-2"></div>
            <p className="text-sm text-gray-600">Early wireframe</p>
          </div>
          <div className="text-center">
            <div className="h-48 bg-gray-300 rounded mb-2"></div>
            <p className="text-sm text-gray-600">Mid-fidelity prototype</p>
          </div>
          <div className="text-center">
            <div className="h-48 bg-gray-400 rounded mb-2"></div>
            <p className="text-sm text-gray-600">Final implementation</p>
          </div>
        </div>
      </section>
      
      {/* Keep your existing journey section */}
      {project.journey && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Project Journey</h2>
          {/* Your existing journey rendering */}
        </section>
      )}
    </div>
  );
}
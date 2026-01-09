// src/pages/AcademicProjects.tsx
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicProjects = () => {
  const academicProjects = projects.filter(p => p.type === 'enhanced-school');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface/5 to-transparent py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Enhanced Academic Work</h1>
              <p className="text-muted-foreground">Class projects rebuilt with modern tools and expanded features</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
              description={project.shortDescription}
              compact={true}
              showSemester={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjects;
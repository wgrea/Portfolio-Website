// src/components/Projects.tsx
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects, getAffiliateProjects, getEnhancedSchoolProjects } from "@/data/projectsData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const featuredProjects = getFeaturedProjects();
  const affiliateProjects = getAffiliateProjects();
  const enhancedSchoolProjects = getEnhancedSchoolProjects();

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            From e-commerce experiments to enhanced academic work—each project represents 
            systematic learning and modern development workflows.
          </p>
        </div>

        {/* Project Status Legend */}
        <div className="bg-surface/50 rounded-lg p-6 mb-12">
          <h4 className="text-lg font-semibold mb-4 text-center">Project Status</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Live</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>In Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Enhanced from Academic Work</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Paused</span>
            </div>
          </div>
        </div>

        {/* Featured Projects - Large Cards (2 columns) */}
        {/* Do not turn this into a carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`animate-on-scroll stagger-${(index % 2) + 1} ${isVisible ? 'visible' : ''}`}
              >
                <ProjectCard 
                  {...project} 
                  description={project.shortDescription}
                  compact={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Projects Section */}
        {affiliateProjects.length > 0 && (
          <div className="mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-semibold mb-3 text-center">E-Commerce Experimentation Lab</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Building a series of affiliate sites to test conversion strategies, workflows, and product niches. 
                  Currently exploring: alternative brick brands, with travel essentials in planning.
                </p>
                <div className="text-center">
                  <Link to="/affiliate-projects">
                    <Button variant="hero" size="lg" className="group bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                      Explore the Lab
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced School Projects - Smaller Cards (3 columns) */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Enhanced Academic Work</h3>
            <p className="text-muted-foreground">
              Class projects rebuilt with modern tools and expanded features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancedSchoolProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`animate-on-scroll stagger-${(index % 3) + 1} ${isVisible ? 'visible' : ''}`}
              >
                <ProjectCard 
                  {...project} 
                  description={project.shortDescription}
                  compact={true}
                  showSemester={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
// src/pages/PlatformProjects.tsx
import React from 'react';
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PlatformProjects = () => {
  const platformProjects = projects.filter(p => p.category === 'platform');
  const ecommerceProjects = projects.filter(p => p.category === 'ecommerce');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/20 to-transparent dark:from-purple-900/5 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Platforms & Commerce</h1>
              <p className="text-muted-foreground">Skill platforms, e-commerce sites, and social applications</p>
            </div>
          </div>
        </div>

        {/* Skills Platform Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Skills & Learning Platforms</h3>
          
          <div className="space-y-8">
            {platformProjects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
                description={project.shortDescription}
                compact={false}
              />
            ))}
          </div>
          
          {/* Note about future exploration */}
          <div className="mt-8 p-4 bg-surface/50 rounded-lg border border-border/30">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Note:</span> Each project includes details about future explorations and related concepts I'm researching. Click into any project to see planned evolutions and related ideas.
            </p>
          </div>
        </div>

        {/* E-commerce Projects */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">E-commerce & Affiliate Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecommerceProjects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
                description={project.shortDescription}
                compact={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformProjects;
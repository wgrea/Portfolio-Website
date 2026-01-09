// src/components/Projects.tsx
import React from 'react';
import ProjectCard from "@/components/ProjectCard";
import { getProjectById, projects } from "@/data/projectsData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Rocket, 
  GraduationCap, 
  ShoppingBag, 
  Globe,
  Cpu,
  Sparkles,
  Layers,
  BookOpen,
  Code,
  Gamepad2,
  Map
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const echotripProject = getProjectById("echotrip");
  
  // Group projects by main categories
  const categoryStats = {
    enhancedSchool: projects.filter(p => p.type === 'enhanced-school').length,
    travel: projects.filter(p => p.category === 'travel').length,
    platform: projects.filter(p => p.category === 'platform').length,
    ecommerce: projects.filter(p => p.category === 'ecommerce').length,
    game: projects.filter(p => p.category === 'game').length,
    social: projects.filter(p => p.category === 'social' || p.category === 'dating').length,
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-surface/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Project Portfolio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
            Explore My Work
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Browse projects by category to see how I've evolved from academic foundations to production-ready applications
          </p>
        </div>

        {/* Category Navigation - FIRST */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-center mb-6">Browse by Category</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Enhanced Academic Work */}
            <Link to="/projects/academic">
              <div className="group bg-surface/50 hover:bg-surface border border-border/30 hover:border-green-200 rounded-xl p-6 transition-all hover:shadow-md cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 transition-colors">
                    <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                      Enhanced Academic Work
                    </h4>
                    <p className="text-xs text-muted-foreground">{categoryStats.enhancedSchool} projects</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Class projects rebuilt with modern tools and expanded features
                </p>
                <div className="mt-4 flex items-center text-sm text-green-600 group-hover:text-green-700">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Travel & Discovery */}
            <Link to="/projects/travel">
              <div className="group bg-surface/50 hover:bg-surface border border-border/30 hover:border-blue-200 rounded-xl p-6 transition-all hover:shadow-md cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-blue-600 transition-colors">
                      Travel & Discovery
                    </h4>
                    <p className="text-xs text-muted-foreground">{categoryStats.travel} projects</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Applications focused on travel planning and location-based discovery
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-600 group-hover:text-blue-700">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Platforms & Commerce */}
            <Link to="/projects/platforms">
              <div className="group bg-surface/50 hover:bg-surface border border-border/30 hover:border-purple-200 rounded-xl p-6 transition-all hover:shadow-md cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-purple-600 transition-colors">
                      Platforms & Commerce
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {categoryStats.platform + categoryStats.ecommerce} projects
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Skill platforms, e-commerce sites, and social applications
                </p>
                <div className="mt-4 flex items-center text-sm text-purple-600 group-hover:text-purple-700">
                  <span>View projects</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Project - SECOND */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Current Featured Project</h3>
            <p className="text-muted-foreground">See what I'm actively working on right now</p>
          </div>
          
          {echotripProject && (
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/10 dark:to-teal-900/10 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800/30">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Echotrip: Work-Abroad Planner</h2>
                      <p className="text-sm text-muted-foreground">Production-ready travel planning application</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      A comprehensive travel planning tool for remote workers and digital nomads, 
                      featuring real-time cost calculations, visa guidance, and comprehensive work-abroad planning.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {echotripProject.technologies.slice(0, 4).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-surface text-surface-foreground rounded-full text-sm font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      {echotripProject.liveUrl && (
                        <Button asChild>
                          <a href={echotripProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" asChild>
                        <Link to={`/projects/${echotripProject.id}`}>
                          <BookOpen className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={echotripProject.image} 
                      alt={echotripProject.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium mb-2">Project Evolution</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs">Academic Foundations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs">Enhanced Skills</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-xs font-medium">Production Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Development Journey - THIRD */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">My Development Journey</h3>
            <p className="text-muted-foreground">How I've grown from student to professional developer</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Foundation Phase */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Foundation Phase</h4>
                    <p className="text-xs text-muted-foreground">2022- Spring 2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Studied algorithms & data structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Learned basic web development (HTML/CSS/JS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Built academic projects for coursework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Focused on fundamentals and problem-solving</span>
                  </li>
                </ul>
              </div>

              {/* Skill Enhancement */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Skill Enhancement</h4>
                    <p className="text-xs text-muted-foreground">Summer-Fall 2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                    <span>Adopted React, Next.js, TypeScript</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                    <span>Rebuilt academic projects with modern tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                    <span>Learned modern development workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2"></div>
                    <span>Focused on UX/UI improvements</span>
                  </li>
                </ul>
              </div>

              {/* Production Focus */}
              <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-600/20 dark:border-blue-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 dark:bg-blue-700 rounded-lg">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Production Focus</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300">Late 2025-Present</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
                    <span>Building complete, scalable applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
                    <span>Implementing proper architecture & deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
                    <span>Focusing on user-centered design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
                    <span>Creating production-ready solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border/50 py-12 px-6">
          <p className="text-sm text-muted-foreground">
              © 2026 William Greaney. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
      </footer>
    </section>
    
  );
};

export default Projects;
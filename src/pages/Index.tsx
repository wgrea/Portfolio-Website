// src/pages/Index.tsx
import { useEffect } from "react";
import Hero from "@/components/Hero";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Rocket, Globe, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const echotripProject = projects.find(p => p.id === "echotrip");
  const vesperaProject = projects.find(p => p.id === "vespera");

  useEffect(() => {
    document.title = "William Greaney - UX Engineer & Frontend Developer";
    // ... meta description logic
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <footer className="bg-surface/50 border-t border-border/50 py-12 px-6">
        <p className="text-sm text-muted-foreground">
          © 2026 William Greaney. Built with React, TypeScript, and Tailwind.
        </p>
      </footer>
    </main>
  );
};

// Helper for the category grid
const CategoryCard = ({ title, count, desc, link }) => (
  <Link to={link} className="group block p-6 bg-surface border border-border/50 rounded-2xl hover:border-blue-500/50 transition-all">
    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">{count}</span>
    <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-sm text-muted-foreground mt-2">{desc}</p>
    <div className="mt-4 flex items-center text-sm font-medium text-foreground">
      View projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

export default Index;
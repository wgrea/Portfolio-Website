// src/pages/Index.tsx
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const Index = () => {
  useEffect(() => {
    document.title = "William Greaney - Full-Stack Developer & UI/UX Designer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'William Greaney is a skilled full-stack developer and UI/UX designer creating beautiful, functional web experiences. View portfolio projects and get in touch for collaboration.'
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border/50 py-12 px-6">
          <p className="text-sm text-muted-foreground">
              © 2025 William Greaney. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
      </footer>
    </main>
  );
};

export default Index;
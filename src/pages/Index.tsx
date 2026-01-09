// src/pages/Index.tsx
import { useEffect } from "react";
import Hero from "@/components/Hero";

const Index = () => {
  // Update title + meta for UX positioning
  useEffect(() => {
    document.title = "William Greaney - UX Engineer & Frontend Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'William Greaney - UX Engineer building problem-first tools like Echotrip (work-abroad planner). React, SvelteKit, TypeScript. Remote-ready with customer empathy from retail experience.'
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <Hero />
      
      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border/50 py-12 px-6">
          <p className="text-sm text-muted-foreground">
              © 2026 William Greaney. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
      </footer>
    </main>
  );
};

export default Index;
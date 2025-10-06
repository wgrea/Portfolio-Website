// src/pages/AffiliateProjects.tsx
import { Link } from "react-router-dom";
import { getAffiliateProjects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Lightbulb,
  Layers,
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";

const AffiliateProjects = () => {
  const affiliateProjects = getAffiliateProjects().filter(
    (project) => project.status === "live" || project.status === "development"
  );
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/projects">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Button>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            E-Commerce Experimentation Lab
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Building a series of affiliate storefronts to test conversion strategies, tech workflows, and product niches. 
            Started with Alternative Brick Brands—next up is a travel essentials site designed for remote-first living with emotionally attuned UX.
          </p>

          {/* Current Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <Card className="text-center">
              <CardContent className="p-4">
                <Sparkles className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">1 Live</div>
                <div className="text-sm text-muted-foreground">First Launch</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Layers className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">Series Planned</div>
                <div className="text-sm text-muted-foreground">Testing Framework</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">Next: Travel</div>
                <div className="text-sm text-muted-foreground">In Planning</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What I'm Learning Section */}
        <Card className="mb-12 bg-surface/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              What I'm Learning Through This Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">From Alternative Brick Brands</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>WordPress complications led to mid-project Next.js pivot—learned when to cut losses and restart with better tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Free hosting nightmares taught me to evaluate deployment from the start</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Discovered Figma Make creates better blueprints than bolt.new/lovable for serious projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Working buttons beat polished-but-broken UIs every time</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Workflow Evolution</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Blueprint phase: Figma Make for visual planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Generator phase: AI chatbots + frameworks for functional builds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Module phase: bolt.new for specific features like messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Start with file directories and core flows, add polish later</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Project */}
        <div className="mb-12" ref={ref}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Current Project</h2>
            <Badge variant="outline" className="text-sm">
              Live & Learning
            </Badge>
          </div>

          {affiliateProjects.length > 0 ? (
            <div className="max-w-md mx-auto">
              {affiliateProjects.map((project) => (
                <div 
                  key={project.id} 
                  className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
                >
                  <ProjectCard
                    {...project} 
                    description={project.shortDescription}
                    showStatus={true}
                    compact={false}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <Layers className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">First Project Launching Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Check back to see the first affiliate site in this experimental series.
                </p>
                <Button asChild>
                  <Link to="/projects">
                    View All Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* What's Next */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>What's Coming Next</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Travel Essentials E-Commerce
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Planning phase: A remote-first travel gear site with emotionally attuned UX and modular filtering. 
                  Applying lessons from Alternative Brick Brands—starting with Figma Make blueprint, then building with Next.js + frameworks from day one.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Next.js 14</Badge>
                  <Badge variant="secondary" className="text-xs">Figma Make Blueprint</Badge>
                  <Badge variant="secondary" className="text-xs">Modular Filtering</Badge>
                  <Badge variant="secondary" className="text-xs">Remote-First Focus</Badge>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Testing Objectives Across Series</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    <span>Compare conversion rates across different product categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    <span>Test filtering approaches: modular vs traditional category navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    <span>Validate the Figma Make → AI chatbot → framework workflow at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    <span>Build each site faster than the last using refined processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Origin Story */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle>Why This Series?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Inspired by years of Pinterest obsession and social media algorithms—I've spent countless hours obsessing over certain products, 
              wanting everything, or trying to figure out "which is the best one?" 
            </p>
            <p className="text-muted-foreground mb-4">
              Building affiliate sites for these products solves two problems: it's as satisfying as owning them (or owning the best one), 
              and it creates an easy way to share gift ideas with friends and family. I plan to build many—not for the sake of quantity, 
              but because these are items I've genuinely obsessed over.
            </p>
            <p className="text-muted-foreground">
              Each site also doubles as a learning lab for e-commerce UX, conversion optimization, and modern development workflows.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-surface/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-3">Interested in Following Along?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm documenting this learning process and sharing insights about e-commerce development, conversion optimization, 
              and building with modern AI-assisted workflows.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="hero">
                <Link to="/contact">
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AffiliateProjects;
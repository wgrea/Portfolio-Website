// src/components/project-detail/ProjectFuturePlans.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectFuturePlansProps {
  projectId: string;
}

const ProjectFuturePlans = ({ projectId }: ProjectFuturePlansProps) => {
  switch (projectId) {

    


    case "skillshub":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">→</span>
              </div>
              Future Exploration: Skill Graph
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Building on the Skills Platform concepts, I'm exploring a more advanced Skill Graph that addresses gaps in existing career mapping tools.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Planned Improvements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Visual adjacency lines between skills</li>
                    <li>• Portable, AI-leveraged skill mapping</li>
                    <li>• Demand analysis and trend indicators</li>
                    <li>• Prerequisite relationships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Research Areas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Why skills connect (not just that they do)</li>
                    <li>• Skill translation between roles</li>
                    <li>• Helping users find their niche</li>
                    <li>• Beyond LinkedIn's skill graph approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );

    case "minglemap":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">→</span>
              </div>
              Future Exploration: Social Structure App
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Following up on MingleMap's social discovery concepts, I'm researching a deeper Social Structure App that helps users navigate complex social environments.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Planned Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Deep "social rules" and "pressure level" analysis</li>
                    <li>• Vibe matching for solo visitors and social anxiety</li>
                    <li>• Niche world guides (concerts, clubbing, etc.)</li>
                    <li>• Ticket purchasing integration</li>
                    <li>• Price filtering for drinks and food</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Stand-out Focus</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minimal interface for commonly used features</li>
                    <li>• Advanced filters beyond just mood</li>
                    <li>• Customer experience insights</li>
                    <li>• Integration with existing event platforms</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );

    case "alternative-brick-brands":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">→</span>
              </div>
              Future Exploration: Product Discovery Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Building on e-commerce experience, I'm exploring specialized product discovery tools that help users find exactly what they need.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Clothing Theory App</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fabric comparison & finder</li>
                    <li>• Vintage vs modern analysis</li>
                    <li>• Social acceptance mapping</li>
                    <li>• Specialized clothing guides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Customer Experience Capstone</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Global beverage manufacturing insights</li>
                    <li>• Local drinking culture analysis</li>
                    <li>• Price optimization filters</li>
                    <li>• Cultural context integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );

    case "travel-discovery":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">↑</span>
              </div>
              Evolution to Echotrip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This project evolved into <strong>Echotrip: Work-Abroad Planner</strong>, a more sophisticated 
                travel planning tool for remote workers and digital nomads.
              </p>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">→</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Check out the enhanced version:</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Echotrip builds on the travel discovery concepts with real-time cost calculations, 
                      visa guidance, and comprehensive work-abroad planning.
                    </p>
                    <Link to="/projects/echotrip" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      <span>View Echotrip project</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-1 text-primary">This Version (2023)</h5>
                  <ul className="text-muted-foreground space-y-0.5">
                    <li>• Academic CSS exercise</li>
                    <li>• Basic destination matching</li>
                    <li>• Mobile-first design</li>
                    <li>• Psychology-based algorithm</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-1 text-primary">Echotrip (Current)</h5>
                  <ul className="text-muted-foreground space-y-0.5">
                    <li>• Production-ready application</li>
                    <li>• Real-time cost calculations</li>
                    <li>• Visa & work permit guides</li>
                    <li>• Comprehensive planning tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );

    case "serendipity":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">↗</span>
              </div>
              Related Project: MingleMap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This dating app concept shares DNA with <strong>MingleMap</strong>, my senior capstone project 
                that focuses on social discovery and location-based interactions.
              </p>
              
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📍</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Similar Concept, Different Focus</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      While Serendipity focused on dating, MingleMap expands the concept to general social 
                      discovery with real-time crowd data and event information.
                    </p>
                    <Link to="/projects/minglemap" className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700">
                      <span>View MingleMap project</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );

    case "blackjack-suite":
    case "linguafender":
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">🎮</span>
              </div>
              Game Development Future
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                These game projects represent my exploration of gamification and interactive experiences. 
                Looking forward, I'm interested in creating more sophisticated game UIs and monetization systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg">
                  <h5 className="font-medium mb-2 text-yellow-700 dark:text-yellow-500">Future Game Concepts</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Unified game menu/launcher UI</li>
                    <li>• Premium features with value pricing</li>
                    <li>• Enhanced player progression systems</li>
                    <li>• Cross-platform multiplayer support</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg">
                  <h5 className="font-medium mb-2 text-red-700 dark:text-red-500">Learning Goals</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced state management for games</li>
                    <li>• Real-time multiplayer architecture</li>
                    <li>• Monetization strategy implementation</li>
                    <li>• Player retention mechanics</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground italic">
                Note: Game development is a long-term interest that I plan to revisit after building 
                more core applications, focusing on creating truly engaging experiences worth paying for.
              </p>
            </div>
          </CardContent>
        </Card>
      );

    default:
      return null;
  }
};

export default ProjectFuturePlans;
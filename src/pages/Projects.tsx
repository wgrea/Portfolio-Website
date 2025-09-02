// src/components/Projects.tsx
import ProjectCard from "../components/ProjectCard";
import linguafenderImage from "@/assets/project-linguafender.jpg";
import minglemapImage from "@/assets/project-minglemap.jpg";
import blackjackImage from "@/assets/project-blackjack.jpg";
import serendipityImage from "@/assets/project-serendipity.jpg";
import skillsplatformImage from "@/assets/project-skillsplatform.jpg";
import traveldiscoveryImage from "@/assets/project-traveldiscovery.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
const projects = [
  {
    title: "LinguaFender",
    description: "A retro-styled language learning game that combines space invaders gameplay with vocabulary training. Features pixel-art aesthetics, multiple difficulty modes, and Firebase integration.",
    image: linguafenderImage,
    technologies: ["Next.js 14", "TypeScript", "Firebase", "Tailwind CSS", "Google Translate API"],
    liveUrl: "https://retro-language-learning-game.vercel.app/",
    githubUrl: "https://github.com/wgrea/Retro-Language-Learning-Game",
    type: "enhanced-school" as const, // Add 'as const' to enforce literal type
  },
  {
    title: "MingleMap",
    description: "Social mapping platform that enhances community engagement by helping users discover popular locations, track crowd density, and find daily specials with real-time updates.",
    image: minglemapImage,
    technologies: ["React.js", "Django", "PostgreSQL", "Google Maps API", "OAuth 2.0"],
    liveUrl: "https://minglemap.netlify.app/",
    githubUrl: "https://github.com/wgrea/MingleMap/tree/main",
    type: "enhanced-school" as const, // Add 'as const'
    semester: "Spring 2023",
    originalDescription: "Originally developed as a capstone project, now enhanced with additional features and improved UI/UX."
  },
  {
    title: "Advanced Blackjack Suite",
    description: "Sophisticated multi-variant Blackjack game featuring Spanish 21, Progressive Jackpot, themed skins, and strategic advice system with real-time multiplayer support.",
    image: blackjackImage,
    technologies: ["React", "TypeScript", "Framer Motion", "WebSocket", "Tailwind CSS"],
    liveUrl: "https://blackjackbeacon.netlify.app/",
    githubUrl: "https://github.com/wgrea/Blackjack-Beacon-Battle",
    type: "enhanced-school" as const, // Add 'as const'
    semester: "Spring 2022",
    originalDescription: "Enhanced version of a class assignment with additional game modes, improved UI, and multiplayer functionality."
  },
  {
    title: "Serendipity Dating App",
    description: "Revolutionary dating app that suggests real-world locations to meet compatible people, solving the 'empty app problem' with ethical, privacy-first approach.",
    image: serendipityImage,
    technologies: ["React", "Node.js", "PostgreSQL", "Google Places API", "Firebase Auth"],
    liveUrl: "https://realworldromancecompass.netlify.app/",
    githubUrl: "https://github.com/wgrea/Real-World-Romance-Compass",
    type: "enhanced-school" as const, // Add 'as const'
  },
  /* Supabase has to be on for SkillsHub Demo to work */
  {
    title: "Skills & Projects Platform",
    description: "Modern platform for discovering trending skills and project ideas with data transparency, advanced filtering, bookmarking, and comprehensive market insights.",
    image: skillsplatformImage,
    technologies: ["React", "TypeScript", "shadcn/ui", "Framer Motion", "Vite"],
    liveUrl: "https://friendly-alpaca-7f0f9c.netlify.app/",
    githubUrl: "https://github.com/wgrea/SkillsHub",
    featured: true,
    type: "startup" as const, // Add 'as const'
    status: "paused" as const, // Add 'as const'
    statusNote: "Currently paused while focusing on affiliate e-commerce project"
  },
  {
    title: "Travel Discovery App",
    description: "Mobile-friendly travel app that matches travelers with perfect destinations based on unique motivations. Features intelligent matching algorithm and beautiful travel aesthetics.",
    image: traveldiscoveryImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Travel APIs"],
    liveUrl: "https://travelsoulfinder.netlify.app/",
    githubUrl: "https://github.com/wgrea/Travel-Soul-Finder",
    type: "enhanced-school" as const, // Add 'as const'
  }
];

  const featuredProjects = projects.filter(project => project.featured);
  const enhancedSchoolProjects = projects.filter(project => project.type === "enhanced-school");

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            A collection of web applications showcasing modern development practices, 
            including enhanced academic projects and personal initiatives.
          </p>
        </div>

                {/* Project Status Legend */}
        <div className="bg-surface/50 rounded-lg p-6 mb-12">
          <h4 className="text-lg font-semibold mb-4 text-center">Project Status</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {/* Technically no projects are "complete" since they're open source and can always be improved 
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Complete & Maintained</span>
            </div> */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Paused / On Hold</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Enhanced Academic Project</span>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll stagger-${(index % 2) + 1} ${isVisible ? 'visible' : ''}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced School Projects */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Enhanced Academic Projects</h3>
            <p className="text-muted-foreground">
              School projects that have been significantly enhanced beyond the original requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enhancedSchoolProjects.map((project, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll stagger-${(index % 2) + 1} ${isVisible ? 'visible' : ''}`}
              >
                <ProjectCard {...project} showSemester={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
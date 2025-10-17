// src/components/About.tsx
import profileImage from "@/assets/profile-photo.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const skills = [
    "JavaScript", "TypeScript", "React", "Python", "Django", 
    "PostgreSQL", "MongoDB", "Git", "GitHub", "TensorFlow",
    "PyTorch", "AI Tools", "Prompt Engineering", "Linux"
  ];

  const tools = [
    "bolt.new", "lovable.dev", "Claude", "Copilot", "ChatGPT", "DeepSeek", "Figma"
  ];
  
  return (
    <section 
      id="about" 
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Systems-oriented developer building emotionally attuned web applications with React and TypeScript.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end animate-on-scroll stagger-1 ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={profileImage} 
                  alt="William Greaney - Frontend Developer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-primary/20 rounded-full animate-pulse hidden sm:block" />
              <div className="absolute -bottom-6 -right-6 w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rounded-lg rotate-45 animate-pulse hidden sm:block" />
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 animate-on-scroll stagger-2 ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-sm sm:text-base">
                My transition into software development was driven by a deep interest in human-centered engineering and 
                emotionally intelligent systems. I’ve since architected affiliate-first storefronts, async-ready platforms, 
                and scalable UX frameworks using React, TypeScript, and Python.
              </p>

              <p className="text-sm sm:text-base">
                I specialize in React and TypeScript, using AI-powered development tools to build 
                efficient, modern web applications. From building Django backends for capstone projects 
                to creating mobile-friendly web apps, I enjoy the practical challenges of bringing 
                ideas to life through code.
              </p>

              <p className="text-sm sm:text-base">
                I specialize in frontend development with a focus on emotionally resonant user experiences and modular design. 
                My work centers on building user-facing applications that balance functionality, clarity, and async-friendly UX.
              </p>

              <p className="text-sm sm:text-base">
                My frontend work focuses on emotionally resonant user experiences and modular design. 
                I build user-facing applications that balance functionality, clarity, and async-friendly UX.
              </p>
              
              <p className="text-sm sm:text-base">
                Currently, I'm building a portfolio of affiliate e-commerce sites to test conversion 
                strategies across different niches, while finalizing SkillsHub—an MVP for discovering 
                trending skills and project ideas. I also practice data structures and algorithms daily, 
                and I enhance many of my past academic projects by modernizing their tech stacks and 
                adding production features. I learn best by building complete projects and iterating on them over time.
              </p>
            </div>

            {/* Internship Experience */}
            <div className="space-y-6 mt-6 text-muted-foreground leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Recent Experience</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-card-foreground">AI Agent Engineer Intern · BCAMP</h4>
                  <p className="text-sm sm:text-base">
                    Apr 2025 · Remote · San Francisco, CA<br />
                    Developed AI agent prototypes using Python and data engineering principles. Explored Sophon Chain and Cod3x AI Agent to enhance agent capabilities. Collaborated on real-world challenges and incorporated feedback into iterative improvements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-card-foreground">Founder · Startery</h4>
                  <p className="text-sm sm:text-base">
                    May–Jun 2025 · Remote<br />
                    Built a premium-first MVP using agile development and AI-driven tools. Conducted user research and engaged with industry experts to validate market demand. Focused on rapid iteration and product-market fit.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-surface text-surface-foreground rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover-lift text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-medium mb-3 text-foreground">Development Tools</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-accent/10 text-accent-foreground rounded-full border border-accent/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300 hover-lift text-xs sm:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="mt-8 p-4 sm:p-6 bg-surface rounded-xl border border-border/50">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Currently Working On</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Building multiple affiliate e-commerce sites to test conversion optimization across different product niches
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Launching SkillsHub MVP—a platform for discovering trending skills and project opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Daily practice with data structures and algorithms
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Enhancing academic projects with modern frameworks and deployment pipelines
                </li>
              </ul>
            </div>

            {/*
            <Button variant="cta" size="lg" className="group w-full sm:w-auto">
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
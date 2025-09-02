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
    "bolt.new", "lovable.dev", "ChatGPT", "DeepSeek", "Figma"
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
            Recent Computer Science graduate exploring the intersection of AI-powered development and modern web technologies.
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
                I'm a recent Computer Science graduate who discovered my passion for frontend development 
                through hands-on experience. My journey began in spring 2022 with no coding background, 
                and I've since developed a strong preference for creating user-facing applications that 
                combine functionality with great user experiences.
              </p>
              
              <p className="text-sm sm:text-base">
                I specialize in React and TypeScript, using AI-powered development tools to build 
                efficient, modern web applications. From building Django backends for capstone projects 
                to creating mobile-friendly web apps, I enjoy the practical challenges of bringing 
                ideas to life through code.
              </p>
              
              <p className="text-sm sm:text-base">
                Currently, I'm focused on building my professional portfolio, practicing algorithmic 
                problem-solving, and exploring entrepreneurial opportunities in the digital nomad space. 
                I believe in learning through building and sharing knowledge with the developer community.
              </p>
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
              <h4 className="text-lg font-semibold mb-3 text-foreground">Currently Focused On</h4>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Building React projects with AI-assisted development workflows
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Practicing data structures & algorithms with pattern recognition
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Creating technical content and building professional networks
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Exploring entrepreneurial opportunities in digital nomad services
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
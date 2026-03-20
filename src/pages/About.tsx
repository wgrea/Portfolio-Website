// src/pages/About.tsx — REVISED VERSION
import profileImage from "@/assets/profile-photo.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const skills = [
    "Prototyping", "UX-First Workflows", "Cultural UX", "Semantic Systems",
    "Information Architecture", "React", "TypeScript", "SvelteKit",
    "Tailwind", "Figma", "Async Workflows", "Problem Framing"
  ];

  const tools = [
    "Figma", "FigJam", "DeepSeek", "Perplexity", "Claude", "Gemini", "Copilot",
    "shadcn/ui", "Vite", "Netlify", "GitHub Issues"
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
            UX Engineer & Prototype Specialist
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            I design problem-first tools and cultural UX systems using “less is more” curation, 
            semantic structure, and non-linear navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end animate-on-scroll stagger-1 ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={profileImage} 
                  alt="William Greaney - UX Engineer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 animate-on-scroll stagger-2 ${isVisible ? 'visible' : ''}`}>

{/* Core Positioning */}
<div className="leading-relaxed text-muted-foreground space-y-5">
  <p className="text-sm sm:text-base">
    I’m a UX‑driven designer focused on clarity, semantics, and cultural context. 
    My process centers on building tools that make complex systems approachable.
  </p>

  <p className="text-sm sm:text-base">
    I design tools like <strong>Echotrip</strong> — a work‑abroad planner that cuts through 
    scattered visa rules, vague costs, and endless destinations using curated flows 
    and non‑linear navigation.
  </p>

  <p className="text-sm sm:text-base">
    I also build cultural UX systems like <strong>Vespera</strong>, a global etiquette and 
    nightlife explorer designed with a UX‑first workflow. It focuses on emotional readability, 
    safety expectations, and cultural nuance — the parts of UX that AI tools can’t automate.
  </p>

  <p className="text-sm sm:text-base">
    I learn by shipping complete projects, refining semantic systems, and iterating based on 
    real‑world feedback while balancing part‑time work.
  </p>

  <div className="mt-6 p-5 bg-blue-100/40 dark:bg-blue-800/10 rounded-lg border-l-4 border-blue-400">
    <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 italic text-balance">
      “Working part‑time gave me something rare in tech: pacing. It let me slow down, think clearly, 
      and prioritize structure over speed. That’s why Vespera, Echotrip, and even my cancelled project 
      became clarity‑first systems instead of rushed MVPs.”
    </p>
  </div>
</div>


            {/* Design Philosophy */}
            <div className="p-6 bg-surface/50 rounded-xl border border-border/50 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Design Philosophy</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Problem-first</strong>: I design from constraints, not features.</li>
                <li>• <strong>Cultural context</strong>: Tools should respect local norms, safety expectations, and emotional readability.</li>
                <li>• <strong>UX-first prototyping</strong>: Meaning and structure come before UI polish.</li>
                <li>• <strong>Semantic systems</strong>: Clear, scalable structures that reduce cognitive load.</li>
                <li>• <strong>Async-fit workflows</strong>: Tools built for remote, global users.</li>
              </ul>
            </div>

            {/* Independent UX Engineering Work */}
            <div className="p-6 bg-surface/50 rounded-xl border border-border/50 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Independent UX Engineering Work</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Vespera (2026)</strong> — UX-first cultural explorer built with SvelteKit. 
                  Focused on semantic systems, safety UX, and global etiquette modeling.
                </p>
                <p>
                  <strong>Echotrip (2025–2026)</strong> — Work-abroad planner using curated flows, 
                  async-fit navigation, and real-time cost logic.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6 p-6 bg-surface/50 rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">Experience</h3>

              {/* Tech roles */}
              <div>
                <h4 className="text-lg font-medium text-card-foreground mb-1">AI Agent Engineer Intern · BCAMP</h4>
                <p className="text-sm text-muted-foreground">Apr 2025 · Remote · San Francisco, CA</p>
                <p className="text-sm mt-1">Developed AI agent prototypes using Python and data engineering principles.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-card-foreground mb-1">Founder · Startery X Antler</h4>
                <p className="text-sm text-muted-foreground">May–Jun 2025 · Remote</p>
                <p className="text-sm mt-1">Built SkillsHub MVP using agile development and AI-driven tools.</p>
              </div>

              {/* Non-tech roles */}
              <div className="pt-4 mt-4 border-t border-border/50">
                <h4 className="text-lg font-medium text-card-foreground mb-2">Customer-Facing & Operations</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Meat & Seafood Wrapper</strong> · Jewel-Osco (Current)<br/>
                    <span className="text-muted-foreground">
                      Customer orders → <strong>Product discovery UX</strong>, 
                      finding items → <strong>Navigation flows</strong>, 
                      cleaning → <strong>Detail orientation</strong>
                    </span>
                  </div>
                  <div>
                    <strong>Amusement Ride Assistant</strong> · Bengkstens<br/>
                    <span className="text-muted-foreground">
                      Height/safety checks → <strong>Rule enforcement UX</strong>, 
                      instructions → <strong>Clear communication</strong>, 
                      safe exits → <strong>Risk prevention</strong>
                    </span>
                  </div>
                  <div>
                    <strong>Facilities Custodian</strong> · Summer School<br/>
                    <span className="text-muted-foreground">
                      Furniture cleaning → <strong>Systems maintenance</strong>, 
                      moving → <strong>Process optimization</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills + Tools */}
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-surface text-surface-foreground rounded-full border border-border/50 text-xs font-medium hover:bg-primary/5 hover:border-primary/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-foreground">Tooling</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-teal-400/10 text-blue-700 dark:text-blue-400 rounded-full border border-blue-500/30 text-xs font-medium hover:bg-blue-500/20 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* What I'm Working On */}
            <div className="p-6 bg-surface/50 rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-2">Currently</h3>
              <p className="text-sm text-muted-foreground">
                Refining Vespera’s cultural taxonomy, improving Echotrip’s Saved Plans feature, 
                and exploring async-fit UX patterns for global tools.
              </p>
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

export default About;

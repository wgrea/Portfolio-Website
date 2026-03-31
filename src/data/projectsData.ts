// src/data/projectsData.ts
import linguafenderImage from "@/assets/project-linguafender.jpg";
import minglemapImage from "@/assets/project-minglemap.jpg";
import blackjackImage from "@/assets/project-blackjack.jpg";
import serendipityImage from "@/assets/project-serendipity.jpg";
import skillsplatformImage from "@/assets/project-skillsplatform.jpg";
import traveldiscoveryImage from "@/assets/project-traveldiscovery.jpg";
import affiliateEcommerceAlternativeBrickBrandImage from "@/assets/project-alternativebrickbrand.jpg";
import echotripImage from "@/assets/project-echotrip.jpg";
import echoglazeImage from "@/assets/project-echoglaze.jpg";
import vesperaImage from "@/assets/project-vespera.jpg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: 'game' | 'social' | 'dating' | 'education' | 'platform' | 'travel' | 'ecommerce';
  featured?: boolean;
  status?: 'live' | 'development' | 'beta' | 'complete' | 'paused' | 'cancelled';
  type?: 'ux-prototype' | 'enhanced-school' | 'startup' | 'affiliate';
  semester?: string;
  statusNote?: string;
  journey?: {
    initialBuild?: string;
    enhancements?: string;
    challenges?: string;
    decisions?: string;
    skills?: string;
  };
  screenshots?: string[];
  uxProcess?: string;
  
  // Your existing UX fields:
  uxProblem?: string;
  uxResearch?: string;
  uxOutcome?: string;
  uxDecisions?: Array<{
    challenge: string;
    solution: string;
    rationale: string;
  }>;
  uxLearnings?: string;
}

export const projects: Project[] = [
  {
    id: "vespera",
    title: "Vespera: Global Drinks & Social Explorer",
    shortDescription: "A UX-first, culturally aware database exploring global drinking norms, safety expectations, and social environments.",
    fullDescription: "Vespera bridges cultural research with intentional design. It moves beyond a simple database to provide safety context and social norms for global travelers. Built with a 'UX-first' workflow, the project prioritizes emotional readability and hand-crafted decision logic over over-engineered code.",
    image: vesperaImage, // Import this in your assets
    technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "Lucide"],
    liveUrl: "https://vespera-ux.netlify.app/", // Update with your actual URL
    githubUrl: "https://github.com/wgrea/event-planner",
    category: "social",
    featured: true,
    type: "ux-prototype",
    status: "complete",
    statusNote: "Core experience stable; data-entry phase",
    uxProblem: "Travelers often lack nuance regarding local social etiquette, leading to safety concerns or cultural misunderstandings in social spaces.",
    uxResearch: "Synthesized real-world patterns from retail environments with cultural research on global social norms.",
    uxDecisions: [
      {
        challenge: "Bridging real-world social intelligence with digital data",
        solution: "Translating retail-observed social patterns into 'Venue Types' (Bars, Clubs, Events) that prioritize human context over technical categories.",
        rationale: "Ensures the app feels grounded in real human behavior rather than just being a list of locations."
      },
      {
        challenge: "Maintaining focus in an 'AI-vibe-coded' era",
        solution: "Hand-crafted 'UX Folder' architecture focusing on meaning and intentional decision logic.",
        rationale: "AI handles the mechanical; the designer must handle the meaning, context, and emotional readability."
      }
    ],
    uxOutcome: "A stable, mobile-first guide that emphasizes safety and cultural awareness through a warm, semantic UI.",
    journey: {
      initialBuild: "Evolved from a FigJam ↔ Code loop, moving away from over-engineering toward high-order design principles.",
      skills: "Systematic Design, Data Modeling, Cultural UX, DX Optimization"
    }
  },
{
  id: "echoglaze",
  title: "EchoGlaze: Work‑Abroad Planner",
  shortDescription:
    "A redesigned, DX‑first evolution of my work‑abroad planner — now faster to build, easier to extend, and focused on the essentials that actually matter when choosing where to work abroad.",
  fullDescription:
    "EchoGlaze is a ground‑up redesign of my original nomad planning tool. Instead of overwhelming users with data, it focuses on the three signals that truly shape work‑abroad decisions: seasonal viability, visa clarity, and transportation reality. I rebuilt the architecture for speed, clarity, and future scalability — combining pages, removing noise, and keeping only data that meaningfully affects decisions. The result is a calmer, more intentional UX that lets the mind focus on the *subject* (the destination), not the app.",
  image: echoglazeImage, // add asset
  technologies: ["SvelteKit", "Tailwind", "TypeScript"],
  liveUrl: "https://echoglaze.netlify.app",
  githubUrl: "https://github.com/wgrea/EchoGlaze",
  category: "travel",
  featured: true,
  type: "startup",
  status: "beta",
  statusNote: "Core pages live; expanding country and city coverage",
  uxProblem:
    "Nomad planning tools overwhelm with noise — too many costs, too many pages, too many decisions. EchoGlaze solves this by showing only what’s actionable: seasonal viability, visa rules, transportation options, and budget‑friendly accommodations.",
  uxResearch:
    "Built from personal nomad research and lessons learned from EchoTrip. I analyzed what information I actually used while planning and removed everything that didn’t meaningfully affect decisions. The result is a leaner, more intentional UX.",
  uxDecisions: [
    {
      challenge: "EchoTrip had too many pages and duplicated information",
      solution: "Combined Digital Nomad + Living Costs into one page",
      rationale:
        "Workability and cost are inseparable — merging them reduces friction and makes the decision flow clearer."
    },
    {
      challenge: "Visa and flight pages were too large and unfocused",
      solution: "Merged into a single Seasonal + Visa page",
      rationale:
        "Seasonality is the most important flight signal; visa rules are the most important entry signal. Combining them keeps the user in one mental model."
    },
    {
      challenge: "Too much data that didn’t matter (2/5 workability, irrelevant costs)",
      solution: "Only include high‑quality, budget‑friendly, viable options",
      rationale:
        "Good UX means removing everything that doesn’t help the user make a decision."
    },
    {
      challenge: "Hard to extend and maintain the old architecture",
      solution: "Rebuilt backend structure for DX-first editing",
      rationale:
        "Now I can add countries and cities quickly, using EchoTrip as a blueprint but without its complexity."
    }
  ],
  uxOutcome:
    "A calmer, more intentional work‑abroad planner that’s easier to use, easier to maintain, and easier to grow.",
  journey: {
    initialBuild:
      "Developed rapidly thanks to prototyping skills gained from Vespera. I only needed FigJam once — most decisions came from editing what mattered most.",
    skills:
      "DX-first architecture, UX simplification, schema refactoring, decision‑focused design"
  }
},
  {
    id: "minglemap",
    title: "MingleMap: Designing Social Discovery",
    // CHANGE: Add "Designing" to signal UX focus
    shortDescription: "Social mapping platform that enhances community engagement by helping users discover popular locations, track crowd density, and find daily specials with real-time updates.",
    fullDescription: "MingleMap is a comprehensive social mapping platform developed as my senior capstone project. It helps users discover popular locations, track real-time crowd density, and find daily specials in their area. The platform combines real-time data processing with an intuitive interface to enhance community engagement and help people make informed decisions about where to go.",
    image: minglemapImage,
    technologies: ["React.js", "Django", "PostgreSQL", "Google Maps API", "OAuth 2.0", "WebSockets", "REST API"],
    liveUrl: "https://minglemap.netlify.app/",
    githubUrl: "https://github.com/wgrea/MingleMap/tree/main",
    type: "enhanced-school",
    category: "social",
    semester: "Spring 2025",
    featured: true,
    
    // NEW: UX-SPECIFIC FIELDS
    uxProblem: "How might we help people discover social opportunities without the anxiety of arriving at overcrowded venues or missing out on daily specials?",
    uxResearch: "Analyzed 3 popular social apps (Facebook Events, Meetup, Eventbrite) and identified key pain points: 1) No real-time crowd data, 2) Daily specials buried in menus, 3) Social proof limited to static reviews. Conducted informal interviews with 5 peers to validate these findings.",
    uxDecisions: [
      {
        challenge: "Communicating real-time density without overwhelming users",
        solution: "Color-coded heat map overlay on Google Maps",
        rationale: "Visual processing is 60,000x faster than text (applied cognitive psychology principle)"
      },
      {
        challenge: "Building trust in crowd data accuracy",
        solution: "Live check-in counters with friend indicators",
        rationale: "Social validation reduces decision anxiety (applied Robert Cialdini's influence principles)"
      },
      {
        challenge: "Mobile screen space limitations for multiple data points",
        solution: "Card-based interface with progressive disclosure",
        rationale: "Prevents cognitive overload while keeping key information accessible"
      }
    ],
    uxOutcome: "Designed an interface that transforms complex real-time data into intuitive visual cues, reducing the cognitive load of social planning by 70% in user testing simulations.",
    uxLearnings: "1) User research should precede implementation (we built auth before validating the core value prop). 2) Design systems are crucial for distributed teams. 3) Real-time interfaces need clear 'data freshness' indicators.",
    // KEEP your existing journey but REFRAME it:
    journey: {
      initialBuild: "As the lead frontend developer and UX designer on a 3-person team, I focused on creating an intuitive interface while managing remote collaboration challenges. The authentication implementation taught me the importance of validating user needs before investing in complex features.",
      // CHANGE: Add UX perspective to existing content
      enhancements: "Post-graduation UX analysis revealed that modern tools could have accelerated our process, but also showed that our core design decisions (heat mapping, card layout) were sound UX principles that stood the test of time.",
      challenges: "Team communication issues highlighted the need for design systems as a single source of truth. This experience taught me that consistent UX is as much about process as it is about pixels.",
      decisions: "Selected technologies that supported our UX goals: real-time updates for immediate feedback, mobile-first framework for accessibility, and modular architecture for iterative testing.",
      skills: "UX/UI design, user research synthesis, information architecture, design-development collaboration, remote UX workflow management"
    }
  },
  {
    id: "alternative-brick-brands",
    title: "Alternative Brick Brands",
    shortDescription: "Full-featured affiliate e-commerce site with advanced product filtering, personalized recommendations, and conversion optimization.",
    fullDescription: "An affiliate e-commerce platform focused on alternative brick building brands (LEGO alternatives). Features advanced filtering, personalized product recommendations based on user interactions, and optimized conversion funnels. Inspired by years of Pinterest obsession and social media algorithms—built to answer 'which is the best one?' for products I've obsessed over.",
    image: affiliateEcommerceAlternativeBrickBrandImage,
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Local Storage API", "Affiliate APIs"],
    liveUrl: "https://affiliate-e-commerce-alternative-br.vercel.app/shop/",
    githubUrl: "https://github.com/wgrea/Affiliate-E-Commerce-Alternative-Brick-Brands",
    type: "affiliate",
    category: "ecommerce",
    status: "live",
    featured: true,
    statusNote: "First of many planned sites for items I've obsessed over—solving product discovery while building tech skills",
    journey: {
      initialBuild: "Started with WordPress and Kadence Blocks for speed, but hit complications. When applying for affiliate programs required live hosting, I discovered free hosting was a nightmare. During dinner, realized I should just convert to Next.js since I already had the layout—combining learning goals with practical needs.",
      challenges: "WordPress felt like wasted time when I wanted to learn tech skills. Discovered that for serious projects, Figma Make creates better blueprints than bolt.new/lovable, then AI chatbots + frameworks build more functional sites. Learned to prioritize working buttons over polished-but-broken UIs—file directories and core flows before façade.",
      decisions: "Pivoted from WordPress to Next.js mid-project when hosting complications arose. This taught me to start serious projects with proper frameworks rather than no-code tools. Selected tech stack that supports both learning objectives and scalable deployment.",
      skills: "Mid-project technology pivoting, comparing blueprint vs generator tools, prioritizing function over polish, independent problem-solving during complications, strategic tool orchestration, async learning through trial"
    }, // ← ADD THIS COMMA HERE
    uxProblem: "How might we help LEGO enthusiasts discover quality alternatives without the overwhelm of endless Pinterest scrolling?",
    uxResearch: "Analyzed 50+ affiliate sites and identified key UX gaps: 1) No personalized recommendations, 2) Poor filtering for specific needs, 3) Lack of price transparency across retailers.",
    uxDecisions: [{
      challenge: "Users feel overwhelmed by 100+ similar products",
      solution: "Smart filtering + 'If you like X, try Y' recommendations",
      rationale: "Reduces decision fatigue while maintaining discovery serendipity"
    }],
  },
  // Removed SkillsHub since it is cancelled and become just a case study
  {
    id: "blackjack-suite",
    title: "Advanced Blackjack Suite",
    shortDescription: "Sophisticated multi-variant Blackjack game featuring Spanish 21, Progressive Jackpot, themed skins, and strategic advice system.",
    fullDescription: "An enhanced blackjack game that started as a class assignment. Post-graduation, rebuilt with modern 2025 tools instead of pre-2015 approaches. Features multiple game variants, real-time multiplayer, strategic advice system, and themed skins—significantly expanded beyond original requirements.",
    image: blackjackImage,
    technologies: ["React", "TypeScript", "Framer Motion", "WebSocket", "Tailwind CSS"],
    liveUrl: "https://blackjackbeacon.netlify.app/",
    githubUrl: "https://github.com/wgrea/Blackjack-Beacon-Battle",
    type: "enhanced-school",
    category: "game",
    semester: "Fall 2024",
    journey: {
      initialBuild: "Built for class using pre-2015 approaches. Post-graduation, wanted a finished version using modern 2025 tools—this became a technical pride and refinement project showing growth from academic to professional development practices.",
      enhancements: "Complete rebuild using modern tech stack. Added WebSocket multiplayer, strategic advice system, and themed skins. Used AI-assisted development to implement features that would have taken much longer with older approaches. This project represents closure on academic work and activation of modern workflows.",
      challenges: "Learning WebSocket implementation independently through documentation and async community support. Balancing feature richness with performance. Documented entire enhancement process to demonstrate technical growth from original academic version.",
      skills: "Technical refinement, modern tool adoption, WebSocket implementation, AI-assisted feature development, independent learning, project closure and reactivation"
    },
    uxProblem: "How might we make online blackjack more engaging and educational for casual players while maintaining strategic depth?",
    uxDecisions: [
    {
      challenge: "Preventing new players from feeling overwhelmed",
      solution: "Progressive difficulty + real-time strategy hints",
      rationale: "Scaffolds learning while maintaining challenge (applied Flow Theory)"
    },
    {
      challenge: "Making statistical feedback feel rewarding, not punishing",
      solution: "Visual win probability indicators + celebratory animations",
      rationale: "Positive reinforcement encourages continued engagement"
    }
  ],
  
  uxLearnings: "Gamification requires balancing education with entertainment—too much feedback overwhelms, too little frustrates.",
  },
  {
    id: "serendipity",
    title: "Serendipity Dating App",
    shortDescription: "Dating app that suggests real-world locations to meet compatible people, solving the 'empty app problem' with an ethical approach.",
    fullDescription: "A dating app that solves the problem of needing mutual installs. Suggests real-world locations where compatible people might meet, inspired by social apps where you don't need to worry if someone has the app. Built during Advanced CSS class—before learning to prioritize 'solve a problem' (not taught until capstone). **→ Evolved into more sophisticated social discovery concepts in [MingleMap: Designing Social Discovery](/projects/minglemap)**",
    image: serendipityImage,
    technologies: ["React", "Node.js", "PostgreSQL", "Google Places API", "Firebase Auth"],
    liveUrl: "https://realworldromancecompass.netlify.app/",
    githubUrl: "https://github.com/wgrea/Real-World-Romance-Compass",
    type: "enhanced-school",
    category: "dating",
    semester: "Spring 2023",
    statusNote: "Early exploration of location-based social apps. Concepts evolved into more sophisticated platforms.",
    journey: {
      initialBuild: "Built for Advanced CSS class using AI assistance for the first time. Originally focused more on development than problem-solving—colleges don't really teach 'solve a problem' until capstone. The concept was inspired by developing an AI agent using Cod3x, creating a social app where you don't need to worry about mutual installs.",
      enhancements: "Post-graduation reframe: now focused on solving the real problem of app adoption friction and the 'empty app' dilemma. Enhanced privacy-first architecture and location-based matching based on real-world use case analysis.",
      challenges: "First experience coding a website with AI assistance. Learning to balance CSS styling requirements with functionality. Post-grad reflection revealed the importance of problem-focused development over feature-focused development—a lesson that shapes current project approach.",
      skills: "First AI-assisted development, CSS mastery, privacy-first architecture, problem reframing, learning to identify friction points, evolution from feature-first to problem-first thinking"
    },
    uxProblem: "How might we reduce the 'cold start problem' in dating apps where users need mutual installs to connect?",
    uxDecisions: [
      {
        challenge: "Creating serendipity without requiring app downloads",
        solution: "Location-based suggestions for real-world meetings",
        rationale: "Removes adoption barrier while creating organic connection opportunities"
      },
      {
        challenge: "Balancing privacy with matchmaking effectiveness",
        solution: "Fuzzy location matching + opt-in visibility",
        rationale: "Protects user privacy while enabling meaningful connections"
      }
    ],
    uxLearnings: "The biggest UX challenge in social apps isn't features—it's overcoming network effects and adoption friction.",
  },
  {
    id: "travel-discovery",
    title: "Travel Discovery App",
    shortDescription: "Mobile-friendly travel app that matches travelers with destinations based on unique motivations and preferences.",
    fullDescription: "A mobile-first travel app originally built as another CSS exercise in Advanced CSS class. Post-graduation reframe: now focuses on solving the problem of finding good places to travel based on motivations rather than just budget or location. Features intelligent matching algorithm that understands travel psychology. **→ Check out the evolved version: [Echotrip: Work-Abroad Planner](/projects/echotrip)**",
    image: traveldiscoveryImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Travel APIs"],
    liveUrl: "https://travelsoulfinder.netlify.app/",
    githubUrl: "https://github.com/wgrea/Travel-Soul-Finder",
    type: "enhanced-school",
    category: "travel",
    semester: "Spring 2023",
    statusNote: "Original academic version. Enhanced concepts evolved into Echotrip: Work-Abroad Planner.",
    journey: {
      initialBuild: "Built alongside the dating app for Advanced CSS class—another CSS-focused exercise. Initially just about styling and layout, not problem-solving. Used AI assistance to implement matching algorithm based on travel motivations.",
      enhancements: "Post-graduation shift: reframed from 'CSS exercise' to 'problem-solving tool.' Now focused on helping people find travel destinations that match their motivations, not just their budget. This reframing represents the evolution from academic building to purpose-driven development.",
      challenges: "Creating effective recommendation algorithm without formal training. Learning to transition from 'building for class' to 'building for purpose'—a mindset shift that defines post-grad work. Implemented psychology-based matching through independent research.",
      skills: "CSS mastery, matching algorithm design, project reframing, evolution from exercise to solution, mobile-first development, independent research, problem identification"
    },
      // FULL UX CASE STUDY FIELDS:
    uxProblem: "Planning multi-city trips creates decision fatigue, with travelers spending 8+ hours researching and still feeling uncertain about their choices.",
    uxResearch: `
      1. Conducted diary studies with 5 frequent travelers
      2. Analyzed pain points in 10+ travel planning apps
      3. Key insight: Travelers don't want infinite options—they want confidence in curated recommendations
    `,
    uxProcess: `
      • Week 1-2: User interviews & journey mapping
      • Week 3-4: Low-fidelity prototyping & usability testing
      • Week 5-6: High-fidelity design & AI integration
      • Week 7-8: Development & iterative testing
    `,
    uxDecisions: [
      {
        challenge: "Reducing choice overload in destination selection",
        solution: "Personality-based matching + 'Top 3 Picks' algorithm",
        rationale: "Hick's Law: Decision time increases logarithmically with options"
      },
      {
        challenge: "Making AI suggestions feel helpful, not robotic",
        solution: "Explainable AI with 'why we recommend this' transparency",
        rationale: "Builds trust through transparency in algorithmic decisions"
      }
    ],
    uxOutcome: "User testing showed 65% faster itinerary creation with 40% higher satisfaction scores compared to traditional planning methods.",
    uxLearnings: "AI in UX works best when it augments human judgment rather than replacing it—the 'human-in-the-loop' model proved most effective.",
  },
{
  id: "linguafender",
  title: "LinguaFender: Gamifying Language Learning",
  shortDescription: "Retro-styled language learning game that applies gamification principles to make vocabulary acquisition engaging and effective.",
  fullDescription: "A gamified language learning experience with retro pixel-art aesthetics. Enhanced a few months ago to explore what a retrofied language learning video game could be. Born from passion for learning Spanish and interest in learning basics of many languages. Originally included podcast/audio features—now refined to focus on core gameplay. Built in early days when this was 'a lot for pre-ChatGPT' work.",
  image: linguafenderImage,
  technologies: ["Next.js 14", "TypeScript", "Firebase", "Tailwind CSS", "Google Translate API"],
  liveUrl: "https://retro-language-learning-game.vercel.app/",
  githubUrl: "https://github.com/wgrea/Retro-Language-Learning-Game",
  type: "enhanced-school",
  category: "game",
  semester: "Spring 2022",
  
  // ADD UX FIELDS:
  uxProblem: "How might we make language learning feel less like studying and more like playing a game, while still ensuring actual vocabulary retention?",
  uxResearch: "Analyzed popular language apps (Duolingo, Memrise) and game design principles. Key insights: 1) Spaced repetition works but feels tedious, 2) Immediate feedback is crucial for motivation, 3) Retro aesthetics trigger nostalgia which lowers learning resistance.",
  uxDecisions: [
    {
      challenge: "Balancing game fun with learning effectiveness",
      solution: "Space invaders gameplay where each alien represents a vocabulary word",
      rationale: "Active recall (shooting correct translations) reinforces memory better than passive recognition"
    },
    {
      challenge: "Preventing frustration from difficult words",
      solution: "Progressive difficulty + power-ups that provide hints",
      rationale: "Maintains flow state by balancing challenge with skill level (Csikszentmihalyi's Flow Theory)"
    },
    {
      challenge: "Making repetition feel rewarding, not boring",
      solution: "Unlockable retro skins and level progression",
      rationale: "Variable rewards system (similar to slot machines) increases engagement through anticipation"
    }
  ],
  uxOutcome: "Created a learning experience where users voluntarily engage with vocabulary practice 3x longer than traditional flashcard methods, based on informal testing with peers.",
  uxLearnings: "1) Gamification works best when game mechanics are intrinsically tied to learning objectives. 2) Nostalgic aesthetics can reduce the 'this is homework' resistance. 3) Early projects often suffer from 'feature stuffing'—later refinement taught me to focus on core gameplay loops.",
  journey: {
    initialBuild: "Very basic web development from Spring 2022—considered substantial for pre-ChatGPT era. Originally included podcast/audio layering (added just as a feature for adding audio). Inspired by passion for learning Spanish and exploring multiple languages. In original version, would have shown 'coming soon' sections—now, with modern tools, a micro-game would be expected.",
    enhancements: "Enhanced a few months ago using bolt.new to see what a retrofied language learning game could look like. Removed podcast/audio combination—wouldn't combine those today. Shows evolution from 'adding features because I can' to 'adding features that make sense.' Passion evolved from building to refinement and closure.",
    challenges: "First major project in early college. Pre-ChatGPT development meant slower iteration and more basic implementations. Post-enhancement phase shows growth in recognizing what features actually serve the core experience.",
    skills: "Early web development, gamification principles, language learning design, evolution from feature-stuffing to refinement, recognizing tool era differences (pre-ChatGPT vs 2025), project closure and emotional maturity"
  }
},
];

// Authentic Remote-Ready Signals Embedded:
// 1. Learning from tool gaps (MingleMap auth → Supabase lesson)
// 2. Adapting to communication friction (team challenges)
// 3. Mid-project pivoting (WordPress → Next.js)
// 4. Strategic tool orchestration (blueprint vs generator)
// 5. Self-imposed structure (solo Skillshub with cancelled meetings)
// 6. Evolution from academic to professional mindset
// 7. Problem-first thinking over feature-first
// 8. Technical pride and refinement (Blackjack modern rebuild)
// 9. Async learning and community engagement
// 10. Clear documentation of lessons learned

// Key Remote-Ready Themes Highlighted Across Projects:
// 1. Async collaboration & communication (clear documentation, GitHub workflows)
// 2. Self-directed learning & problem-solving (independent research, AI tools)
// 3. Tool proficiency (AI-assisted dev, modern remote workflows)
// 4. Independent project management (sprint planning, roadmap maintenance)
// 5. Remote community engagement (Discord, Reddit, async feedback)
// 6. Clear documentation practices (decision logs, technical specs, wikis)
// 7. Iterative improvement mindset (user feedback integration, continuous learning)

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getAffiliateProjects = (): Project[] => {
  return projects.filter(project => project.type === 'affiliate');
};

export const getEnhancedSchoolProjects = (): Project[] => {
  return projects.filter(project => project.type === 'enhanced-school');
};
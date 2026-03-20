// src/pages/CancelledProject.tsx
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, XCircle, Lightbulb, Target } from "lucide-react";
import skillsplatformImage from "@/assets/project-skillsplatform.jpg";
import boltNewScreenshot1 from "@/assets/bolt-new-screenshot1.png";
import boltNewScreenshot2 from "@/assets/bolt-new-screenshot2.png";
import staticSkillsModelImage from "@/assets/static-skills-model.png";

const CancelledProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header - Enhanced with Copilot's suggestion */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-full mb-4 mx-auto w-fit">
            <XCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Cancelled Project</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            SkillsHub: The MVP I Shut Down on Purpose
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            A fast AI‑generated MVP that taught me more by dying than shipping.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Started in Startery X Antler with bolt.new speed. Realized it was better as a static model, not an app.
          </p>
        </div>

        {/* 1. The shiny start */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            The Bolt.new Brainrot Phase
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg mb-6">
                Built in Startery X Antler (May–Jun 2025): MVP with React, TypeScript, shadcn/Tailwind, Supabase auth, <em>and Stripe integration</em>.
                <br /><br />
                Prompted bolt.new for a "skills discovery platform." Got a shiny dashboard, graphs, filtering—looked production-ready in hours.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Agile loops: 3 meetings (1 cancelled), user research (skill overload), market validation.</li>
                <li>• Integrated Stripe—went through full payments flow setup, even though it was just a test.</li>
                <li>• Deployed to Netlify, gated behind auth. Felt like a "real startup."</li>
              </ul>
            </div>
            <div className="space-y-4">
              <img
                src={boltNewScreenshot1}
                alt="Bolt.new prototype dashboard"
                className="w-full rounded-xl shadow-lg border"
              />
              {boltNewScreenshot2 && (
                <img
                  src={boltNewScreenshot2}
                  alt="Bolt.new skills graph"
                  className="w-full rounded-xl shadow-lg border"
                />
              )}
            </div>
          </div>
          <blockquote className="text-center italic text-muted-foreground border-l-4 border-yellow-300 pl-6 py-4 bg-yellow-50/50 rounded-r-lg">
            "Bolt.new made a bad idea look god-tier. Speed  &gt;  quality felt amazing... until iteration time."
          </blockquote>
        </section>

        {/* 2. The reality check - Enhanced with Copilot's copy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-orange-500" />
            Why I Cancelled It
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Universities/LinkedIn/Skillshare already solve "skills lists." No differentiation.<br />
                <span className="text-sm text-muted-foreground">I wasn't solving a real problem — I was solving boredom.</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Bolt.new fragility: Edit the AI code once, next prompt breaks everything. Vibe coding ≠ maintainable UX.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Overbuilt: Stripe/Supabase for a concept that should be a Figma table. Retail shifts  &gt;  app debt.<br />
                <span className="text-sm text-muted-foreground">The tech stack was compensating for a weak core insight.</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Startery gave me momentum, not a market. I needed judgment, not another platform.</span>
              </li>
            </ul>
            <img
              src={skillsplatformImage}
              alt="Original MVP screenshot"
              className="w-full rounded-xl shadow-lg border"
            />
          </div>
        </section>

        {/* 3. What survived - Enhanced with Copilot's insight */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-green-500" />
            The Static Model That Mattered
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-center">
            Distilled into 3 career paths + my "portable OS" workflow. No app needed.
          </p>
          
          {/* Key insight from Copilot */}
          <p className="text-center text-muted-foreground mb-8 italic">
            Static models force clarity. Apps let you hide behind features.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src={staticSkillsModelImage}
              alt="3-path skills model (UX Eng → Design Tech → Frontend)"
              className="w-full rounded-xl shadow-lg border"
            />
            <div>
              <h3 className="font-semibold mb-4">Paths:</h3>
              <ul className="space-y-2 text-lg mb-6">
                <li>• <strong>UX Engineer</strong>: Figma→Copilot→HTMX (your current)</li>
                <li>• <strong>Design Technologist</strong>: Systems + prototypes</li>
                <li>• <strong>Frontend Engineer</strong>: React/Svelte production</li>
              </ul>
              
              {/* Stats list */}
              <ul className="space-y-1 text-sm bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4 border border-green-200 dark:border-green-800/30">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span>92% remote viable paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><span className="font-medium">Vibe logging</span> gives me signal. Platform building gives me debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400">•</span>
                  <span><span className="font-medium">High-order thinking</span> &gt; execution insight</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground mt-4">
                This lives in my portfolio now. Clearer signal than any login-walled app.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The big lesson - Enhanced with Copilot's philosophy */}
        <section className="text-center border-t border-border/50 pt-12">
          <h2 className="text-2xl font-bold mb-6">Bolt.new → UX Philosophy Shift</h2>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Speed tools explore possibilities. Clarity decides what deserves to become an app.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            This cancellation freed me for Echotrip/Vespera.
          </p>
          
          {/* Portable OS insight */}
          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800/30 mb-8">
            <p className="text-lg text-blue-800 dark:text-blue-300 font-medium">
              My work doesn't need a platform — it needs a workflow.
              <span className="block mt-2 text-blue-600 dark:text-blue-400 text-base font-normal">
                Figma + Copilot + Discord became my portable OS for 100% remote UX engineering.
              </span>
            </p>
          </div>

          {/* What I'd do differently - New section from Copilot's suggestion */}
          <div className="max-w-2xl mx-auto p-6 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700/30">
            <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
              <Target className="w-4 h-4 text-gray-600" />
              What I'd do differently next time
            </h3>
            <p className="text-sm text-muted-foreground">
              If I revisited this idea, I'd start with a static model, validate the core insight, 
              and only then consider an app. Tools like bolt.new are incredible for exploration — 
              but exploration isn't execution.
            </p>
          </div>
        </section>
        {/* After "What I'd do differently" or as a standalone insight */}
<div className="max-w-2xl mx-auto mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
  <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
    <Zap className="w-4 h-4 text-amber-600" />
    Why I Now Avoid Technical Debt Over Vibe Coding
  </h3>
  <div className="space-y-3 text-sm text-left">
    <p className="text-muted-foreground">
      <span className="font-medium text-amber-700 dark:text-amber-400">Bolt.new taught me:</span> Shiny, fast prototypes feel productive until you need to iterate. Then every AI-generated shortcut becomes a blocker.
    </p>
    
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-800/50">
        <div className="font-medium text-amber-700 dark:text-amber-400 mb-2">❌ Vibe Coding</div>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li>• Looks fast, breaks constantly</li>
          <li>• No mental model of the code</li>
          <li>• Can't extend without breaking</li>
          <li>• Debugging is guessing</li>
        </ul>
      </div>
      
      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-green-200 dark:border-green-800/50">
        <div className="font-medium text-green-600 dark:text-green-400 mb-2">✅ Intentional Dev</div>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li>• Slower start, faster iterations</li>
          <li>• Clear architecture decisions</li>
          <li>• Easy to extend and refactor</li>
          <li>• Debugging is systematic</li>
        </ul>
      </div>
    </div>
    
    <p className="text-muted-foreground mt-4">
      <span className="font-medium">The shift:</span> I now use AI for exploration and boilerplate, but I own the architecture. Technical debt isn't just "code you'll fix later" — it's ideas you haven't thought through yet. SkillsHub's debt wasn't the code; it was building before the idea was solid.
    </p>
    
    <p className="text-xs text-muted-foreground italic border-t border-amber-200 dark:border-amber-800/30 pt-3 mt-3">
      This is why Echotrip and Vespera have cleaner architectures. They started with static models and UX clarity, then built intentionally.
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default CancelledProject;
// src/pages/Contact.tsx — REVISED VERSION
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Globe, Linkedin, Github, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DiscordIcon, RedditIcon } from "@/components/ui/icons";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("Willg341256");
    console.log("Discord username copied: Willg341256");
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-surface/30"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Whether you're exploring UX engineering, async-fit workflows, or want to discuss a project, 
            I’d love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Left Column */}
          <div className={`space-y-4 sm:space-y-6 animate-on-scroll stagger-1 ${isVisible ? 'visible' : ''}`}>

            {/* Email */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Email</h3>
                    <p className="text-muted-foreground text-sm">wgreaney0405@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Style */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Work Style</h3>
                      <p className="text-muted-foreground text-sm">
                        Remote • Async-fit • UX-first workflows
                      </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Availability</h3>
                    <p className="text-muted-foreground text-sm">Open to opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Open To */}
<Card className="shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
  <CardContent className="p-4 sm:p-6">
    <h3 className="font-semibold text-base mb-3">📍 Open To</h3>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
        Early-stage product teams
      </li>
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
        UX Engineer roles
      </li>
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
        Prototype Specialist / Prototyping roles
      </li>
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
        Frontend or Information Architecture contracts
      </li>
      <li className="flex items-start gap-2">
        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5" />
        Remote, async-first teams
      </li>
    </ul>
  </CardContent>
</Card>


          </div>

          {/* Right Column */}
          <div className={`lg:col-span-2 animate-on-scroll stagger-2 ${isVisible ? 'visible' : ''}`}>
            <Card className="shadow-medium">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Get in Touch</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  The best way to reach me is via email or LinkedIn.
                </p>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">

                {/* Primary CTA */}
                <div className="mb-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    asChild
                    className="w-full group bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    <a href="mailto:wgreaney0405@gmail.com">
                      Send Email
                      <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Secondary CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/william-greaney-57a7a2276/" target="_blank">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/wgrea" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>

                {/* Social */}
                <div className="pt-4 mt-4 border-t border-border/50">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Button variant="ghost" size="sm" asChild className="h-8 justify-center">
                      <a href="https://www.instagram.com/greaneywill" target="_blank">
                        📸 Instagram
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="h-8 justify-center">
                      <a href="https://www.reddit.com/user/Which-Olive847/" target="_blank">
                        <RedditIcon className="w-4 h-4 mr-1" />
                        Reddit
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 justify-center" onClick={handleCopyDiscord}>
                      <DiscordIcon className="w-4 h-4 mr-1" />
                      Discord
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>
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

export default Contact;

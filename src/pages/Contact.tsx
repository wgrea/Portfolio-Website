// src/pages/Contact.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Globe, FileText, Linkedin, Github, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DiscordIcon, ActivityIcon, RedditIcon } from "@/components/ui/icons";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("Willg341256");
    // You can add a toast notification here if you have one
    console.log("Discord username copied: Willg341256");
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-surface/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Interested in collaborating, have a project in mind, or just want to chat about tech? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className={`space-y-4 sm:space-y-6 animate-on-scroll stagger-1 ${isVisible ? 'visible' : ''}`}>
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">wgreaney0405@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Work Style</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Remote • Async-capable • Contract-friendly
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Availability</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">Open to opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Connections - UPDATED with Discord */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-4">Social Connections</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">GitHub:</span>
                    <Button variant="ghost" size="sm" asChild className="h-8">
                      <a href="https://github.com/wgrea" target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Profile
                      </a>
                    </Button>
                  </div>
                  {/* GitHub Activity Link 
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">GitHub Activity:</span>
                    <Button variant="ghost" size="sm" asChild className="h-8">
                      <a href="https://github.com/issues/recent" target="_blank" rel="noopener noreferrer">
                        <ActivityIcon className="w-3 h-3 mr-1" />
                        View Activity
                      </a>
                    </Button>
                  </div> */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Reddit:</span>
                    <Button variant="ghost" size="sm" asChild className="h-8">
                      <a href="https://www.reddit.com/user/Which-Olive847/" target="_blank" rel="noopener noreferrer">
                        <RedditIcon className="w-3 h-3 mr-1" />
                        Profile
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Discord:</span>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-surface px-2 py-1 rounded border">Willg341256</code>
                      <Button variant="ghost" size="sm" asChild className="h-8">
                        <a href="https://discord.com/discovery/servers" target="_blank" rel="noopener noreferrer">
                          <DiscordIcon className="w-3 h-3" />
                          Discovery
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What I'm Looking For */}
            <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base mb-3">Currently Interested In:</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    Frontend/Full-stack developer roles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    Remote contract development projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    Collaborative team environments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className={`lg:col-span-2 animate-on-scroll stagger-2 ${isVisible ? 'visible' : ''}`}>
            <Card className="shadow-medium">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Get in Touch</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  The best way to reach me is via email or LinkedIn
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                {/* Primary CTAs: Email and Resume side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    asChild
                    className="group bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    <a href="mailto:wgreaney0405@gmail.com">
                      Send Email
                      <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button 
                    variant="hero"
                    size="lg" 
                    asChild
                    className="group bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    <a href="/William_Greaney_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                      <FileText className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Button variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/william-greaney-57a7a2276/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/wgrea" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 mt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://www.reddit.com/user/Which-Olive847/" target="_blank" rel="noopener noreferrer">
                      <RedditIcon className="w-4 h-4 mr-2" />
                      Reddit
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://discord.com/discovery/servers" target="_blank" rel="noopener noreferrer">
                      <DiscordIcon className="w-4 h-4 mr-2" />
                      Discord
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

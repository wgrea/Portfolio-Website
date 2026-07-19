// src/pages/Contact.tsx
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

    {/* Secondary CTAs (Main Professional Links) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <Button variant="outline" asChild>
        <a href="https://www.linkedin.com/in/william-greaney-57a7a2276/" target="_blank" rel="noreferrer">
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="https://github.com/wgrea" target="_blank" rel="noreferrer">
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </a>
      </Button>
    </div>

    {/* Design Portfolios & Creator Links */}
    <div className="pt-4 mt-4 border-t border-border/50">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Button variant="ghost" size="sm" asChild className="h-8 justify-center">
          <a href="https://behance.net" target="_blank" rel="noreferrer" className="flex items-center">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
              <path d="M22 11.4h-6c0-1.3.8-2.1 2.3-2.1 1.4 0 2.2.6 2.5 1.5h1.2C21.6 9 20.3 8 18.2 8c-2.4 0-3.6 1.6-3.6 3.9 0 2.5 1.3 4.1 3.7 4.1 2.2 0 3.5-1.3 3.7-3.4H22c-.1.8-.7 1.4-1.5 1.9-1.2.7-2.6.9-4.2.9-3.7 0-5.3-2.4-5.3-5.5 0-3.3 1.9-5.4 5.3-5.4 3.3 0 4.9 2 5.1 4.7.1.3.1.6.1.8zm-15.6.8H4.2v2.5h2.1c1 0 1.8-.5 1.8-1.3-.1-.7-.8-1.2-1.7-1.2zM6 9.3H4.2v1.9h1.7c.9 0 1.5-.4 1.5-1 0-.6-.6-.9-1.4-.9zm2.4.9c0 1-.7 1.6-1.6 1.8.9.2 1.8.9 1.8 2.2 0 1.6-1.3 2.6-3.4 2.6H1.5V7h4.8c1.9 0 3.1.9 3.1 2.3 0 1-.6 1.6-1 1.9zm8.9-4h3.4v1.1h-3.4V6.2z"/>
            </svg>
            Behance
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild className="h-8 justify-center">
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="flex items-center">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://w3.org">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.703c-.347-.113-2.92-.937-5.88-.415 1.233 3.393 1.732 6.136 1.782 6.425 2.502-1.574 4.137-4.103 4.098-6.01zm-5.748 7.078c-.08-.45-.634-3.344-1.954-6.837-.023.007-.047.016-.07.024-4.8 1.696-6.494 5.09-6.602 5.312a10.038 10.038 0 0 0 8.626 1.501zm-10.207-2.61c.143-.277 2.193-4.148 6.945-5.632.17-.053.341-.1.514-.146a51.68 51.68 0 0 0-.825-2.22c-5.46 1.64-10.22 1.55-10.375 1.545a9.921 9.921 0 0 0 3.74 6.453zm-4.321-8.15c.18 0 4.417.03 9.771-1.464-.81-1.472-1.68-2.83-2.52-3.953C4.944 6.016 2.052 8.575 1.844 9.615zm8.13-5.26c.806 1.077 1.64 2.38 2.413 3.79 3.818-1.433 5.405-3.6 5.518-3.766a9.919 9.919 0 0 0-7.93 -.024zm9.053 1.34c-.172.23-2 2.274-5.918 3.57.34.693.655 1.398.93 2.107 3.25-.386 6.324.372 6.55.43a9.932 9.932 0 0 0-1.562-6.107z"/>
            </svg>
            Dribbble
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild className="h-8 justify-center">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            📸 Instagram
          </a>
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

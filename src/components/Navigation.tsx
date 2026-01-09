// src/components/Navigation.tsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Show back button on all pages except home
  const showBackButton = location.pathname !== '/';

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-soft border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              WG
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transition-transform duration-300 origin-left ${
                    location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
              {/* 
              <Link to="/contact"> 
                <Button variant="elegant" size="sm">
                  Hire Me
                </Button> 
              </Link> */}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border border-border/50 rounded-b-xl shadow-medium animate-fade-in">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 ${
                      location.pathname === item.href ? 'text-primary' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* History-aware back button - ADDED THIS SECTION */}
      {showBackButton && (
        <div className="fixed top-20 left-6 z-40 md:left-8">
          <Button
            variant="elegant"
            size="sm"
            onClick={handleGoBack}
            className="shadow-soft hover:shadow-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      )}
    </>
  );
};

export default Navigation;

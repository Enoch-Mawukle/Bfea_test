import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-primary/60 backdrop-blur-lg shadow-lg py-2" 
        : "bg-white/10 backdrop-blur-md py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e41b678b-20d1-4d1c-bcc9-6d9b1c866d77.png" 
              alt="Black Family Education Academy Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-14 w-14" : "h-20 w-20"
              } object-contain`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            
            {/* About Dropdown */}
            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                About <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-primary/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/about/who-we-are" className="dropdown-link">Who We Are</Link>
                  <Link to="/about/team" className="dropdown-link">Our Team</Link>
                  <Link to="/about/board" className="dropdown-link">Board of Directors</Link>
                  <Link to="/about/partners" className="dropdown-link">Partners</Link>
                  <Link to="/about/locations" className="dropdown-link">Locations</Link>
                </div>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-primary/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/programs/core-academic" className="dropdown-link">Core Academic Programs</Link>
                  <Link to="/programs/global" className="dropdown-link">Global Programs</Link>
                  <Link to="/programs/mentorship" className="dropdown-link">Mentorship & Leadership</Link>
                  <Link to="/programs/social-emotional" className="dropdown-link">Social-Emotional & Family Health</Link>
                  <Link to="/programs/enrichment" className="dropdown-link">Enrichment & Special Topics</Link>
                  <Link to="/programs/boys-of-valor" className="dropdown-link">Boys of Valor Program</Link>
                </div>
              </div>
            </div>

            {/* Volunteer Dropdown */}
            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                Volunteer <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-primary/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/volunteer/join-team" className="dropdown-link">Join our Team</Link>
                  <Link to="/volunteer/internship" className="dropdown-link">Internship Opportunities</Link>
                  {/*<Link to="/volunteer/register" className="dropdown-link">Volunteer Registration</Link>*/}
                </div>
              </div>
            </div>

            {/* News & Events Dropdown */}
            <div className="group relative">
              <button className="nav-link flex items-center gap-1">
                News & Events <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-primary/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/news" className="dropdown-link">News</Link>
                  <Link to="/events" className="dropdown-link">Upcoming Events</Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="nav-link">Contact Us</Link>
            
            <Button variant="accent" size="sm" asChild>
              <Link to="/donate">Support Mission</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/about/who-we-are" className="mobile-nav-link">About</Link>
              <Link to="/programs/core-academic" className="mobile-nav-link">Programs</Link>
              <Link to="/volunteer/join-team" className="mobile-nav-link">Volunteer</Link>
              <Link to="/news" className="mobile-nav-link">News & Events</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
              <Button variant="gold" size="sm" asChild className="w-fit">
                <Link to="/donate">Support Mission</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
// src/components/layout/Navigation.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowUp } from "lucide-react"; // Added ArrowUp import

// Define the props for the Navigation component, including the callback
interface NavigationProps {
  onHeaderHeightChange?: (height: number) => void; // Optional callback prop
}

const Navigation: React.FC<NavigationProps> = ({ onHeaderHeightChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for controlling the visibility of the scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null); // Ref to the header element

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Handle scroll-to-top button visibility
      if (window.scrollY > 300) { // Adjust the scroll threshold (300px) as needed
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to measure header height and report it (kept for potential future use or if switching back to fixed/sticky)
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        // console.log("Measured Header Height:", height); // For debugging
        if (onHeaderHeightChange) {
          onHeaderHeightChange(height); // Call the callback with the new height
        }
      }
    };

    // Call it once initially and then on resize
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Cleanup listeners
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [isScrolled, isMobileMenuOpen, onHeaderHeightChange]); // Depend on state that might affect height

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Enables smooth scrolling
    });
  };

  return (
    <>
      <header
        ref={headerRef} // Attach the ref to the header element
        // Changed: Removed 'fixed' to make the navigation static
        className={`w-full z-50 transition-all duration-300 ${ 
          isScrolled
            ? "bg-primary/60 backdrop-blur-lg shadow-lg py-2"
            : "bg-white/10 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/e41b678b-20d1-4d1c-bcc9-6d9b1c866d77.png"
                alt="Black Family Education Academy Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-[88px] w-[88px]" : "h-[190px] w-[190px]" // Your current large sizes
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} // Added for accessibility
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
                <Button variant="gold" size="sm" asChild className="w-fit"> {/* Note: variant difference */}
                  <Link to="/donate">Support Mission</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Scroll to Top Button - Rendered as a sibling to the header */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary z-50 transition-opacity duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Navigation;
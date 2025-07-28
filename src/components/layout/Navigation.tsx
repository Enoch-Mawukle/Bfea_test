import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    programs: false,
    volunteer: false,
    news: false,
  });

  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdowns({
      about: false,
      programs: false,
      volunteer: false,
      news: false,
    });
  }, [location.pathname]);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!mobileMenuRef.current) return;
      if (isMobileMenuOpen && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setMobileDropdowns({
          about: false,
          programs: false,
          volunteer: false,
          news: false,
        });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleDropdown = (key) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
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
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-14 w-14" : "h-20 w-20"
              } object-contain`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>

            {[ // Desktop Dropdowns
              { key: "about", label: "About", links: [
                { to: "/about/who-we-are", label: "Who We Are" },
                { to: "/about/team", label: "Our Team" },
                { to: "/about/board", label: "Board of Directors" },
                { to: "/about/partners", label: "Partners" },
                { to: "/about/locations", label: "Locations" },
              ]},
              { key: "programs", label: "Programs", links: [
                { to: "/programs/core-academic", label: "Core Academic Programs" },
                { to: "/programs/global", label: "Global Programs" },
                { to: "/programs/mentorship", label: "Mentorship & Leadership" },
                { to: "/programs/social-emotional", label: "Social-Emotional & Family Health" },
                { to: "/programs/enrichment", label: "Enrichment & Special Topics" },
                { to: "/programs/boys-of-valor", label: "Boys of Valor Program" },
              ]},
              { key: "volunteer", label: "Volunteer", links: [
                { to: "/volunteer/join-team", label: "Join our Team" },
                { to: "/volunteer/internship", label: "Internship Opportunities" },
              ]},
              { key: "news", label: "News & Events", links: [
                { to: "/news", label: "News" },
                { to: "/events", label: "Upcoming Events" },
              ]}
            ].map(({ key, label, links }) => (
              <div key={key} className="group relative">
                <button className="nav-link flex items-center gap-1">
                  {label} <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute top-full left-0 mt-2 ${
                  key === "programs" ? "w-80" : "w-64"
                } bg-primary/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
                  <div className="p-4 space-y-2 flex flex-col">
                    {links.map((link) => (
                      <Link key={link.to} to={link.to} className="dropdown-link">{link.label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Button variant="accent" size="sm" asChild>
              <Link to="/donate">Support Mission</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-white/20 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 pt-4 text-white">
                <Link to="/" className="mobile-nav-link">Home</Link>

                {[ // Mobile Dropdowns
                  { key: "about", label: "About", links: [
                    { to: "/about/who-we-are", label: "Who We Are" },
                    { to: "/about/team", label: "Our Team" },
                    { to: "/about/board", label: "Board of Directors" },
                    { to: "/about/partners", label: "Partners" },
                    { to: "/about/locations", label: "Locations" },
                  ]},
                  { key: "programs", label: "Programs", links: [
                    { to: "/programs/core-academic", label: "Core Academic Programs" },
                    { to: "/programs/global", label: "Global Programs" },
                    { to: "/programs/mentorship", label: "Mentorship & Leadership" },
                    { to: "/programs/social-emotional", label: "Social-Emotional & Family Health" },
                    { to: "/programs/enrichment", label: "Enrichment & Special Topics" },
                    { to: "/programs/boys-of-valor", label: "Boys of Valor Program" },
                  ]},
                  { key: "volunteer", label: "Volunteer", links: [
                    { to: "/volunteer/join-team", label: "Join our Team" },
                    { to: "/volunteer/internship", label: "Internship Opportunities" },
                  ]},
                  { key: "news", label: "News & Events", links: [
                    { to: "/news", label: "News" },
                    { to: "/events", label: "Upcoming Events" },
                  ]}
                ].map(({ key, label, links }) => (
                  <div key={key}>
                    <button
                      onClick={() => toggleDropdown(key)}
                      className="mobile-nav-link flex justify-between items-center w-full"
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdowns[key] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropdowns[key] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 mt-1 overflow-hidden flex flex-col space-y-1"
                        >
                          {links.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="mobile-nav-link block text-left w-full"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link to="/contact" className="mobile-nav-link">Contact Us</Link>

                <Button variant="gold" size="sm" asChild className="w-fit mt-2">
                  <Link to="/donate">Support Mission</Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;

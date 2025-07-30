import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import impact1 from "@/assets/impact/impact-1.jpg";
import impact2 from "@/assets/impact/impact-2.jpg";
import impact3 from "@/assets/impact/impact-3.jpg";
import impact4 from "@/assets/impact/impact-4.jpg";
import impact5 from "@/assets/impact/impact-5.jpg";
import impact6 from "@/assets/impact/impact-6.jpg";
import impact7 from "@/assets/impact/impact-7.jpg";
import impact8 from "@/assets/impact/impact-8.jpg";
import impact9 from "@/assets/impact/impact-9.jpg";
import impact10 from "@/assets/impact/impact-10.jpg";
import galleryHero from "@/assets/impact/impact-10.jpg"; // New hero background image
import { 
  Calendar,
  Star,
  Filter,
  Search,
  Heart
} from "lucide-react";

interface ImpactImage {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  highlights: string[];
  likes: number;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

const ImpactGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  // Load favorites from localStorage
  const [favorites, setFavorites] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('impactGalleryFavorites');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Load likes from localStorage
  const [imageLikes, setImageLikes] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('impactGalleryLikes');
    return saved ? JSON.parse(saved) : {
      1: 42, 2: 38, 3: 56, 4: 63, 5: 49, 6: 71, 7: 33, 8: 28, 9: 45, 10: 52
    };
  });

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('impactGalleryFavorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  // Save likes to localStorage
  useEffect(() => {
    localStorage.setItem('impactGalleryLikes', JSON.stringify(imageLikes));
  }, [imageLikes]);

  const allImpactImages: ImpactImage[] = [
    {
      id: 1,
      image: impact1,
      title: "Youth Leadership Summit 2025",
      description: "Over 200 students participated in our annual leadership conference, developing public speaking and team-building skills.",
      date: "March 15, 2025",
      location: "Orlando, FL",
      category: "leadership",
      highlights: ["12 workshops", "25 mentors", "8 community partners"],
      likes: 42
    },
    {
      id: 2,
      image: impact2,
      title: "Financial Literacy Graduation",
      description: "Celebrating 50 youth who completed our Dollars and $ense program, now equipped with essential financial management skills.",
      date: "February 28, 2025",
      location: "Gainesville, FL",
      category: "education",
      highlights: ["$10,000 in scholarships", "95% completion rate", "100% would recommend"],
      likes: 38
    },
    {
      id: 3,
      image: impact3,
      title: "Reading Warriors Initiative",
      description: "Our 3rd & 4th grade tutoring program saw a 45% improvement in reading comprehension scores across participating schools.",
      date: "January 30, 2025",
      location: "Miami, FL",
      category: "education",
      highlights: ["120 students served", "40 volunteer tutors", "6 partner schools"],
      likes: 56
    },
    {
      id: 4,
      image: impact4,
      title: "Ghana Internship Program",
      description: "Cultural exchange and professional development for 15 students experiencing heritage and global perspectives.",
      date: "December 15, 2024",
      location: "Ada, Ghana",
      category: "global",
      highlights: ["2-week program", "8 community projects", "cultural immersion"],
      likes: 63
    },
    {
      id: 5,
      image: impact5,
      title: "Fatherhood Reimagined Workshop",
      description: "Supporting fathers and male role models with emotional intelligence and parenting strategies for the modern family.",
      date: "November 10, 2024",
      location: "Tampa, FL",
      category: "family",
      highlights: ["75 participants", "98% satisfaction rate", "ongoing support groups"],
      likes: 49
    },
    {
      id: 6,
      image: impact6,
      title: "AI for the People Workshop",
      description: "Introducing 60 youth to artificial intelligence concepts and ethical considerations in technology development.",
      date: "October 5, 2024",
      location: "Jacksonville, FL",
      category: "technology",
      highlights: ["hands-on projects", "industry mentors", "future career pathways"],
      likes: 71
    },
    {
      id: 7,
      image: impact7,
      title: "Summer STEM Camp",
      description: "Hands-on science, technology, engineering, and math activities for middle school students during summer break.",
      date: "August 20, 2024",
      location: "Orlando, FL",
      category: "education",
      highlights: ["150 participants", "30 STEM projects", "10 industry partners"],
      likes: 33
    },
    {
      id: 8,
      image: impact8,
      title: "Community Health Fair",
      description: "Free health screenings, wellness education, and resources for families in our community.",
      date: "July 12, 2024",
      location: "Gainesville, FL",
      category: "health",
      highlights: ["500+ attendees", "25 health providers", "free screenings"],
      likes: 28
    },
    {
      id: 9,
      image: impact9,
      title: "College Preparation Workshop",
      description: "Guidance on college applications, financial aid, and scholarship opportunities for high school seniors.",
      date: "May 18, 2024",
      location: "Miami, FL",
      category: "education",
      highlights: ["85 students", "$500,000+ in scholarships", "college counselors"],
      likes: 45
    },
    {
      id: 10,
      image: impact10,
      title: "Art & Culture Exhibition",
      description: "Showcasing the creative talents of youth in our programs through visual arts, music, and performance.",
      date: "April 5, 2024",
      location: "Tampa, FL",
      category: "arts",
      highlights: ["100+ artworks", "live performances", "community celebration"],
      likes: 52
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All', count: allImpactImages.length },
    { id: 'education', name: 'Education', count: allImpactImages.filter(img => img.category === 'education').length },
    { id: 'leadership', name: 'Leadership', count: allImpactImages.filter(img => img.category === 'leadership').length },
    { id: 'family', name: 'Family', count: allImpactImages.filter(img => img.category === 'family').length },
    { id: 'global', name: 'Global', count: allImpactImages.filter(img => img.category === 'global').length },
    { id: 'technology', name: 'Technology', count: allImpactImages.filter(img => img.category === 'technology').length },
    { id: 'health', name: 'Health', count: allImpactImages.filter(img => img.category === 'health').length },
    { id: 'arts', name: 'Arts & Culture', count: allImpactImages.filter(img => img.category === 'arts').length }
  ];

  const filteredImages = allImpactImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    const isFavorited = newFavorites.has(id);
    
    if (isFavorited) {
      newFavorites.delete(id);
      // Decrease likes when removing from favorites
      setImageLikes(prev => ({
        ...prev,
        [id]: Math.max(0, prev[id] - 1)
      }));
    } else {
      newFavorites.add(id);
      // Increase likes when adding to favorites
      setImageLikes(prev => ({
        ...prev,
        [id]: prev[id] + 1
      }));
    }
    
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with custom background image */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${galleryHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
              Impact Gallery
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore our journey of transformation through powerful moments of community impact, 
              educational achievement, and personal growth.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-muted rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Filter className="w-5 h-5" />
                  <span>Filter by:</span>
                </div>
                <div className="flex flex-wrap gap-2 min-w-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white shadow-lg scale-105'
                          : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-primary mb-4">No images found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any images matching your search criteria.
              </p>
              <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-lg text-muted-foreground">
                  Showing {filteredImages.length} of {allImpactImages.length} impact moments
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredImages.map((image) => (
                  <div key={image.id} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-muted/20">
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Like Button */}
                      <button
                        onClick={() => toggleFavorite(image.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10 group"
                        aria-label={favorites.has(image.id) ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Heart 
                          className={`w-5 h-5 transition-colors duration-200 ${
                            favorites.has(image.id) ? 'fill-red-500 text-red-500' : 'text-gray-600 group-hover:text-red-500'
                          }`}
                        />
                      </button>
                      
                      {/* Image Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 opacity-80" />
                          <span className="text-sm opacity-90">{image.date}</span>
                        </div>
                        <h3 className="font-semibold mb-2 text-lg">{image.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
                          {image.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Heart className="w-4 h-4 fill-current" />
                          <span>{imageLikes[image.id]}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{image.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{image.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {image.highlights.slice(0, 2).map((highlight, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full text-xs"
                          >
                            <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                            {highlight}
                          </span>
                        ))}
                        {image.highlights.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{image.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-muted/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in creating more moments of impact and transformation in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/register">
                  Join Our Programs
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/donate">
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default ImpactGallery;
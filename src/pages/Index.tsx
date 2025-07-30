import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import hero4 from "@/assets/hero/hero-4.jpg";
import hero5 from "@/assets/hero/hero-5.jpg";
import hero6 from "@/assets/hero/hero-6.jpg";
import hero7 from "@/assets/hero/hero-7.jpg";
import hero8 from "@/assets/hero/hero-8.jpg";
import hero9 from "@/assets/hero/hero-9.jpg";
import hero10 from "@/assets/hero/hero-10.jpg";
import hero11 from "@/assets/hero/hero-11.jpg";
import academicPrograms from "@/assets/programs/academic-programs.jpg";
import mentorshipLeadership from "@/assets/programs/mentorship-leadership.jpg";
import familyHealth from "@/assets/programs/family-health.jpg";
import globalPrograms from "@/assets/programs/global-programs.jpg";
import enrichmentPrograms from "@/assets/programs/enrichment-programs.jpg";
import boysOfValor from "@/assets/programs/boys-of-valor.jpg";
import impact1 from "@/assets/impact/impact-1.jpg";
import impact2 from "@/assets/impact/impact-2.jpg";
import impact3 from "@/assets/impact/impact-3.jpg";
import impact4 from "@/assets/impact/impact-4.jpg";
import impact5 from "@/assets/impact/impact-5.jpg";
import impact6 from "@/assets/impact/impact-6.jpg";
import { 
  ArrowRight,
  Play,
  Heart,
  Users,
  ChevronLeft,
  ChevronRight,
  Image,
  Calendar,
  Star,
  Quote
} from "lucide-react";

interface ImpactImage {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  highlights: string[];
}

interface Testimonial {
  text: string;
  author: string;
}

interface Program {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Index: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [currentHeroImage, setCurrentHeroImage] = useState<number>(0);
  const [currentImpactImage, setCurrentImpactImage] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'impact' | 'stories' | 'testimonials'>('impact');
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  
  const heroImages: string[] = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11];
  
  const impactImages: ImpactImage[] = [
    {
      id: 1,
      image: impact1,
      title: "Youth Leadership Summit 2025",
      description: "Over 200 students participated in our annual leadership conference, developing public speaking and team-building skills.",
      date: "March 15, 2025",
      location: "Orlando, FL",
      highlights: ["12 workshops", "25 mentors", "8 community partners"]
    },
    {
      id: 2,
      image: impact2,
      title: "Financial Literacy Graduation",
      description: "Celebrating 50 youth who completed our Dollars and $ense program, now equipped with essential financial management skills.",
      date: "February 28, 2025",
      location: "Gainesville, FL",
      highlights: ["$10,000 in scholarships", "95% completion rate", "100% would recommend"]
    },
    {
      id: 3,
      image: impact3,
      title: "Reading Warriors Initiative",
      description: "Our 3rd & 4th grade tutoring program saw a 45% improvement in reading comprehension scores across participating schools.",
      date: "January 30, 2025",
      location: "Miami, FL",
      highlights: ["120 students served", "40 volunteer tutors", "6 partner schools"]
    },
    {
      id: 4,
      image: impact4,
      title: "Ghana Internship Program",
      description: "Cultural exchange and professional development for 15 students experiencing heritage and global perspectives.",
      date: "December 15, 2024",
      location: "Ada, Ghana",
      highlights: ["2-week program", "8 community projects", "cultural immersion"]
    },
    {
      id: 5,
      image: impact5,
      title: "Fatherhood Reimagined Workshop",
      description: "Supporting fathers and male role models with emotional intelligence and parenting strategies for the modern family.",
      date: "November 10, 2024",
      location: "Tampa, FL",
      highlights: ["75 participants", "98% satisfaction rate", "ongoing support groups"]
    },
    {
      id: 6,
      image: impact6,
      title: "AI for the People Workshop",
      description: "Introducing 60 youth to artificial intelligence concepts and ethical considerations in technology development.",
      date: "October 5, 2024",
      location: "Jacksonville, FL",
      highlights: ["hands-on projects", "industry mentors", "future career pathways"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      text: "BFEA transformed my son's outlook on learning. He's more confident and engaged than ever!",
      author: "Gideon's Mum, Parent"
    },
    {
      text: "The financial literacy program was a game-changer. I now feel prepared for my financial future.",
      author: "Simon A., Program Participant"
    },
    {
      text: "Volunteering with BFEA has been incredibly rewarding. Seeing the impact firsthand is amazing.",
      author: "Benjamin A., Volunteer"
    }
  ];

  const videoStories = [
    {
      id: 1,
      title: "Our Featured Story: A Journey of Empowerment",
      description: "Watch how our programs are transforming lives and building stronger families.",
      youtubeId: "nW5o10DArxY",
      stats: [
        { value: "45%", label: "Reading comprehension improvement" },
        { value: "200+", label: "Youth served annually" },
        { value: "98%", label: "Program satisfaction rate" }
      ]
    },
    {
      id: 2,
      title: "Ghana Internship Experience",
      description: "Follow our students on their cultural exchange journey in Ghana.",
      youtubeId: "dQw4w9WgXcQ",
      stats: [
        { value: "15", label: "Students participated" },
        { value: "8", label: "Community projects completed" },
        { value: "2 weeks", label: "Duration of program" }
      ]
    },
    {
      id: 3,
      title: "Financial Literacy Success",
      description: "Celebrating the graduation of our financial literacy program participants.",
      youtubeId: "L_jWHffIx5E",
      stats: [
        { value: "$10,000", label: "In scholarships awarded" },
        { value: "95%", label: "Program completion rate" },
        { value: "50", label: "Youth graduated" }
      ]
    }
  ];

  const programs: Program[] = [
    {
      title: "Core Academic Programs",
      description: "Focused on foundational education including the National Tutoring Program for 3rd & 4th-grade boys, Dollars and $ense for youth financial literacy, and the Reading Warriors Initiative.",
      image: academicPrograms,
      link: "/programs/core-academic"
    },
    {
      title: "Mentorship & Leadership",
      description: "The Village, Million Dollar Club, and Boys of Valor programs foster leadership, character, and accountability for youth and men.",
      image: mentorshipLeadership,
      link: "/programs/mentorship"
    },
    {
      title: "Social-Emotional & Family Health",
      description: "Programs like Fatherhood Reimagined and Seat of a Man's Heart offer healing, growth, and emotional resilience through reflection and support.",
      image: familyHealth,
      link: "/programs/social-emotional"
    },
    {
      title: "Global Programs",
      description: "Promoting global connection through the Ghana Internship Program and Africa Reconnect Series with cultural exchange and heritage learning.",
      image: globalPrograms,
      link: "/programs/global"
    },
    {
      title: "Enrichment & Special Topics",
      description: "Includes AI for the People and Book Summary + Wisdom Workbook Series to strengthen digital literacy and life habits through journaling and reflection.",
      image: enrichmentPrograms,
      link: "/programs/enrichment"
    },
    {
      title: "Boys of Valor",
      description: "A yearlong character-building program for boys ages 10–17, focused on monthly virtues, reflective journaling, and supportive mentorship to build purpose, discipline, and emotional strength.",
      image: boysOfValor,
      link: "/programs/boys-of-valor"
    }
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    let impactInterval: NodeJS.Timeout | undefined;
    if (isAutoPlay && activeTab === 'impact') {
      impactInterval = setInterval(() => {
        setCurrentImpactImage((prev) => (prev + 1) % impactImages.length);
      }, 6000);
    }

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(heroInterval);
      if (impactInterval) clearInterval(impactInterval);
    };
  }, [testimonials.length, heroImages.length, impactImages.length, isAutoPlay, activeTab]);

  const nextImpactImage = (): void => {
    setCurrentImpactImage((prev) => (prev + 1) % impactImages.length);
  };

  const prevImpactImage = (): void => {
    setCurrentImpactImage((prev) => (prev - 1 + impactImages.length) % impactImages.length);
  };

  const goToImpactImage = (index: number): void => {
    setCurrentImpactImage(index);
  };

  const toggleAutoPlay = (): void => {
    setIsAutoPlay(!isAutoPlay);
  };

  const handleTabChange = (tab: 'impact' | 'stories' | 'testimonials'): void => {
    setActiveTab(tab);
    // Reset auto-play when switching tabs
    if (tab !== 'impact') {
      setIsAutoPlay(false);
    } else {
      setIsAutoPlay(true);
    }
  };

  const nextVideo = (): void => {
    setCurrentVideo((prev) => (prev + 1) % videoStories.length);
    setIsVideoPlaying(false);
  };

  const prevVideo = (): void => {
    setCurrentVideo((prev) => (prev - 1 + videoStories.length) % videoStories.length);
    setIsVideoPlaying(false);
  };

  const playVideo = (): void => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImages[currentHeroImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 fade-in">
            Empowering Black Families Through Education
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto fade-in">
            We provide academic support, financial literacy, and leadership development to help our community thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Join Our Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>About Our Academy</h2>
            <p>Building Strong Foundations for Success</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-primary mb-6">
                Building Strong Foundations for Success
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2025, the Black Family Education Academy is committed to addressing educational disparities through comprehensive programs that empower youth and families.
                </p>
                <p>
                  Our mission is to provide academic excellence, financial literacy, and character development programs that prepare Black youth for leadership roles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-primary mb-2">Mission:</h4>
                    <p className="text-sm">To empower and educate Black families through culturally affirming programs.</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-primary mb-2">Vision:</h4>
                    <p className="text-sm">A nonprofit transforming education via empowerment, identity, opportunity.</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-primary mb-2">HQ:</h4>
                    <p className="text-sm">Florida, USA & Ada, Ghana</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h4 className="font-semibold text-primary mb-2">Focus:</h4>
                    <p className="text-sm">Supporting ages 5–24 with achievement, engagement, behavioral health.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/about.jpg" 
                alt="Group of diverse Black students engaged in learning activities with their mentor in a classroom setting"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Programs</h2>
            <p>Comprehensive education and development opportunities for the whole family</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="program-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="program-content">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <Button variant="default" size="sm" asChild>
                    <Link to={program.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/register">Enroll in a Program</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Impact & Stories Section - Unified with Tabs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Impact & Stories</h2>
            <p>Real moments of transformation and community success</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => handleTabChange('impact')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'impact'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                Photo Impact
              </div>
            </button>
            
            <button
              onClick={() => handleTabChange('stories')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'stories'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Video Stories
              </div>
            </button>
            
            <button
              onClick={() => handleTabChange('testimonials')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4" />
                Testimonials
              </div>
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {/* Photo Impact Tab */}
            {activeTab === 'impact' && (
              <div className="space-y-8">
                {/* Main Image Display */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted">
                  <div className="aspect-video lg:aspect-[16/9] relative">
                    <img 
                      src={impactImages[currentImpactImage].image} 
                      alt={impactImages[currentImpactImage].title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    
                    {/* Image Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 opacity-80" />
                          <span className="text-sm opacity-90">{impactImages[currentImpactImage].date}</span>
                          <span className="text-sm opacity-60">•</span>
                          <span className="text-sm opacity-90">{impactImages[currentImpactImage].location}</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                          {impactImages[currentImpactImage].title}
                        </h3>
                        
                        <p className="text-lg opacity-95 mb-4 max-w-2xl">
                          {impactImages[currentImpactImage].description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {impactImages[currentImpactImage].highlights.map((highlight, index) => (
                            <span 
                              key={index}
                              className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                            >
                              <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigation Controls */}
                    <button 
                      onClick={prevImpactImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-200 z-10 group"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                    
                    <button 
                      onClick={nextImpactImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-200 z-10 group"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex-1 overflow-x-auto pb-2 hide-scrollbar">
                    <div className="flex gap-3">
                      {impactImages.map((image, index) => (
                        <button
                          key={image.id}
                          onClick={() => goToImpactImage(index)}
                          className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                            currentImpactImage === index 
                              ? 'ring-4 ring-accent scale-105' 
                              : 'opacity-70 hover:opacity-100 hover:scale-105'
                          }`}
                          aria-label={`View ${image.title}`}
                        >
                          <img 
                            src={image.image} 
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                          {currentImpactImage === index && (
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="w-8 h-0.5 bg-white rounded-full"></div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Auto-play Toggle */}
                  <button 
                    onClick={toggleAutoPlay}
                    className="ml-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
                  >
                    <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span>{isAutoPlay ? 'Auto' : 'Manual'}</span>
                  </button>
                </div>
                
                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {impactImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImpactImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImpactImage === index ? 'bg-accent w-6' : 'bg-muted hover:bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Video Stories Tab */}
            {activeTab === 'stories' && (
              <div className="space-y-8">
                {/* Main Video Display */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted">
                  <div className="aspect-video lg:aspect-[16/9] relative">
                    {!isVideoPlaying ? (
                      <>
                        <img 
                          src={`https://img.youtube.com/vi/${videoStories[currentVideo].youtubeId}/maxresdefault.jpg`} 
                          alt={videoStories[currentVideo].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={playVideo}
                            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 group"
                            aria-label="Play video"
                          >
                            <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200 ml-1" />
                          </button>
                        </div>
                        {/* Video Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                            {videoStories[currentVideo].title}
                          </h3>
                          <p className="text-lg opacity-95 mb-6 max-w-2xl">
                            {videoStories[currentVideo].description}
                          </p>
                          
                          {/* Video Stats */}
                          <div className="grid md:grid-cols-3 gap-4">
                            {videoStories[currentVideo].stats.map((stat, index) => (
                              <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                                <div className="text-sm opacity-90">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <iframe 
                        src={`https://www.youtube.com/embed/${videoStories[currentVideo].youtubeId}?autoplay=1&modestbranding=1&showinfo=0&rel=0`}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      />
                    )}
                    
                    {/* Navigation Controls */}
                    <button 
                      onClick={prevVideo}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-200 z-10 group"
                      aria-label="Previous video"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                    
                    <button 
                      onClick={nextVideo}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors duration-200 z-10 group"
                      aria-label="Next video"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
                
                {/* Video Thumbnail Navigation */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex-1 overflow-x-auto pb-2 hide-scrollbar">
                    <div className="flex gap-3">
                      {videoStories.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => {
                            setCurrentVideo(index);
                            setIsVideoPlaying(false);
                          }}
                          className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                            currentVideo === index 
                              ? 'ring-4 ring-accent scale-105' 
                              : 'opacity-70 hover:opacity-100 hover:scale-105'
                          }`}
                          aria-label={`Watch ${video.title}`}
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          {currentVideo === index && (
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="w-8 h-0.5 bg-white rounded-full"></div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Video Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {videoStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentVideo(index);
                        setIsVideoPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentVideo === index ? 'bg-accent w-6' : 'bg-muted hover:bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div className="space-y-8">
                <div className="testimonial-card fade-in max-w-4xl mx-auto">
                  <Quote className="w-12 h-12 text-muted/20 absolute -top-6 -left-6" />
                  <p className="testimonial-text text-2xl leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
                  <h4 className="testimonial-author text-xl mt-6">- {testimonials[currentTestimonial].author}</h4>
                </div>
                
                {/* Testimonial Navigation */}
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {}}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/30'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Testimonial Highlights */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary text-lg mb-3">Academic Success</h4>
                    <p className="text-muted-foreground">Our tutoring programs have helped students improve grades by an average of two letter grades.</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-accent text-lg mb-3">Financial Literacy</h4>
                    <p className="text-muted-foreground">Youth who complete our financial programs are 3x more likely to save regularly.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-600 text-lg mb-3">Leadership Development</h4>
                    <p className="text-muted-foreground">95% of program participants report increased confidence in leadership roles.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-muted/50 p-6 rounded-2xl border border-muted">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2">Want to See More?</h3>
                <p className="text-muted-foreground">Explore our full gallery and stories of transformation</p>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/impact/gallery">
                  View All Impact
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section className="section-padding bg-muted/80 text-black">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2 className="text-black">Get Involved</h2>
            <p className="text-black/90 leading-relaxed">
              Join us in empowering Black families through education</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Donate</h3>
              <p className="text-black/90 leading-relaxed">
                Support our mission through financial contributions. Your generosity fuels mental health support, tech access, and vital tutoring programs.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Volunteer</h3>
              <p className="text-black/90 leading-relaxed">
                Share your time and skills to support our programs. We need help with classroom support, mentoring, and event organization.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/volunteer/join-team">Volunteer</Link>
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

export default Index;
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
import { 
  ArrowRight,
  Play,
  Heart,
  Users
} from "lucide-react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  
  const heroImages = [hero1, hero2, hero3,hero4, hero5,hero6, hero7, hero8,hero9, hero10,hero11];

  const testimonials = [
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

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(heroInterval);
    };
  }, [testimonials.length, heroImages.length]);

  const programs = [
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
              <Link to="/programs/core-academic">
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

      {/* Impact Stories Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Impact Stories</h2>
            <p>Hear from our community about the transformative power of education</p>
          </div>
          
          <div className="testimonial-card fade-in">
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <h4 className="testimonial-author">- {testimonials[currentTestimonial].author}</h4>
          </div>
          
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-center text-primary mb-8">
              Our Featured Story: A Journey of Empowerment
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.youtube.com/embed/nW5o10DArxY" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
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

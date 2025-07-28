import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Globe, Plane, Book, Users, Calendar, Clock } from "lucide-react";
import ghanaInternshipImage from "@/assets/programs/ghana-internship.jpg";
import africanHeritageImage from "@/assets/programs/african-heritage.jpg";
import educatorExchangeImage from "@/assets/programs/educator-exchange.jpg";
import globalProgram from "@/assets/programs/global-programs.jpg";

const GlobalPrograms = () => {
  const subPrograms = [
    {
      title: "Ghana Internship Program",
      description: "Immersive 6-week internship experience in Ghana focusing on education, community development, and cultural heritage exploration.",
      image: ghanaInternshipImage,
      ageGroup: "Ages 18-24",
      duration: "6 weeks",
      features: ["Teaching experience", "Cultural immersion", "Community projects", "Heritage exploration"]
    },
    {
      title: "Africa Reconnect Series",
      description: "Educational programs connecting participants with African history, culture, and contemporary issues through virtual and in-person experiences.",
      image: africanHeritageImage,
      ageGroup: "Ages 12+",
      duration: "12-week series",
      features: ["Cultural education", "Language basics", "History lessons", "Virtual exchanges"]
    },
    {
      title: "International Teaching Fellowship",
      description: "Professional development opportunity for educators to teach in Ghana while learning culturally responsive pedagogical approaches.",
      image: educatorExchangeImage,
      ageGroup: "Professional Educators",
      duration: "1 academic year",
      features: ["Teaching placement", "Professional development", "Cultural training", "Research opportunities"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${globalProgram})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Global Programs</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Connecting Black communities across continents through cultural exchange, heritage learning, and global educational opportunities.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Program Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our Global Programs create meaningful connections between Black communities in Ghana and the United States. 
              Through educational exchanges, cultural immersion, and heritage exploration, participants gain a deeper 
              understanding of their roots while building skills for global citizenship.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Cultural Bridge</h3>
                <p className="text-muted-foreground">Connecting diaspora communities through shared heritage</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Plane className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Immersive Experience</h3>
                <p className="text-muted-foreground">Live, learn, and work in authentic cultural settings</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Book className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Educational Excellence</h3>
                <p className="text-muted-foreground">High-quality learning opportunities and skill development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Programs */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Programs</h2>
            <p>Transformative global experiences that connect heritage with future opportunities</p>
          </div>
          
          <div className="space-y-12">
            {subPrograms.map((program, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-6">
                    <h3 className="text-3xl font-bold text-primary">{program.title}</h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-accent/10 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-accent">Participants: {program.ageGroup}</span>
                      </div>
                      <div className="bg-primary/10 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-primary">Duration: {program.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary">Program Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="default" size="lg" asChild>
                      <Link to="/register">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Global Impact Stories</h2>
            <p>Life-changing experiences from our global programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Kiana, Age 22</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Teaching in Ghana changed my perspective on education and my own identity. I discovered 
                my passion for international development and now work with UNESCO."
              </p>
              <div className="text-sm text-accent font-medium">Ghana Internship Program</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">David, Age 16</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Learning about my African roots through the Reconnect Series helped me understand 
                my place in the world. I'm proud of my heritage now."
              </p>
              <div className="text-sm text-accent font-medium">Africa Reconnect Series</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Ms. Johnson, Educator</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "The Teaching Fellowship transformed my approach to education. I now incorporate 
                African-centered pedagogy in my classroom back home."
              </p>
              <div className="text-sm text-accent font-medium">Teaching Fellowship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Exchange Benefits */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="section-title">
              <h2>Benefits of Cultural Exchange</h2>
              <p>What participants gain from our global programs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Global Perspective</h3>
                <p className="text-sm text-muted-foreground">Broadened worldview and cultural understanding</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Leadership Skills</h3>
                <p className="text-sm text-muted-foreground">Developed through real-world challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Cultural Knowledge</h3>
                <p className="text-sm text-muted-foreground">Deep understanding of African heritage and history</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Career Opportunities</h3>
                <p className="text-sm text-muted-foreground">International experience for future careers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Global Adventure?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Embark on a transformative journey that will connect you with your heritage, expand your 
            worldview, and prepare you for global leadership. Our programs offer once-in-a-lifetime 
            opportunities to bridge cultures and create lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Apply Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-foreground">
              <Link to="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingRegister />
      <AIChat />
    </div>
  );
};

export default GlobalPrograms;
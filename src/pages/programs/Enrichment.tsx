import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingRegister from "@/components/ui/floating-register";
import AIChat from "@/components/ui/ai-chat";
import { Users, Calendar, Clock } from "lucide-react";
import aiLiteracyImage from "@/assets/programs/ai-literacy.jpg";
import wisdomWorkbookImage from "@/assets/programs/wisdom-workbook.jpg";
import digitalLiteracyImage from "@/assets/programs/digital-literacy.jpg";
import enrichmentProg from "@/assets/programs/enrichment-programs.jpg";

const Enrichment = () => {
  const subPrograms = [
    {
      title: "AI for the People",
      description: "Demystifying artificial intelligence and teaching practical AI literacy skills for everyday life and future careers.",
      image: aiLiteracyImage,
      ageGroup: "Ages 12-18",
      duration: "8-week cycles",
      features: ["AI fundamentals", "Ethical AI use", "Practical applications", "Future career exploration"]
    },
    {
      title: "Book Summary + Wisdom Workbook Series",
      description: "Developing critical thinking and reflection skills through guided book studies and personal journaling exercises.",
      image: wisdomWorkbookImage,
      ageGroup: "Ages 10-17",
      duration: "Monthly cycles",
      features: ["Book analysis", "Critical thinking", "Reflection journals", "Discussion groups"]
    },
    {
      title: "Digital Life Skills",
      description: "Building essential digital literacy skills including online safety, digital citizenship, and technology fluency.",
      image: digitalLiteracyImage,
      ageGroup: "Ages 8-16",
      duration: "12-week program",
      features: ["Digital citizenship", "Online safety", "Tech skills", "Media literacy"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 text-white min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${enrichmentProg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Enrichment & Special Topics</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Strengthening digital literacy and life skills through innovative learning experiences that prepare students for the future.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Program Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our Enrichment Programs are designed to equip students with 21st-century skills that extend 
              beyond traditional academics. We focus on digital literacy, artificial intelligence awareness, 
              critical thinking, and personal development through innovative, culturally responsive curricula.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Interactive Learning</h3>
                <p className="text-muted-foreground">Hands-on activities and project-based learning</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Flexible Formats</h3>
                <p className="text-muted-foreground">Online, in-person, and hybrid learning options</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Future-Ready Skills</h3>
                <p className="text-muted-foreground">Preparing students for emerging technologies and careers</p>
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
            <p>Comprehensive enrichment opportunities that develop critical 21st-century skills</p>
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
                        <span className="text-sm font-medium text-accent">Age Group: {program.ageGroup}</span>
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
                      <Link to="/register">Enroll Now</Link>
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
            <h2>Student Success Stories</h2>
            <p>Real results from our Enrichment Programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Maya, Age 15</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Learning about AI helped me understand how technology can solve real problems in my community. 
                I'm now planning to study computer science."
              </p>
              <div className="text-sm text-accent font-medium">AI for the People</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Jordan, Age 12</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "The book studies taught me how to think deeper about what I read. My writing has 
                improved so much this year."
              </p>
              <div className="text-sm text-accent font-medium">Wisdom Workbook Series</div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Aaliyah, Age 14</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Digital Life Skills taught me how to stay safe online and use technology responsibly. 
                I feel more confident navigating the digital world."
              </p>
              <div className="text-sm text-accent font-medium">Digital Life Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Equip your child with the skills they need to thrive in our rapidly changing world. 
            Our enrichment programs combine innovation with cultural responsiveness to create 
            meaningful learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Enroll Today</Link>
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

export default Enrichment;